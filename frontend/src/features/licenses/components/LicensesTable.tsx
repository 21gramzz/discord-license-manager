import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import styled from 'styled-components';
import { Button } from '../../../components/Elements';
import { Pagination } from '../../../components/Elements';
import { Icon } from '../../../components/Elements';
import {
  CellDefinition,
  ColumnDefinition,
  SelectableTable,
} from '../../../components/Elements';
import {
  useLicensesQuery,
  License,
  useTotalLicensesQuery,
  Role,
  useCreateManyLicenseMutation,
  useDeleteManyLicenseMutation,
} from '../../../graphql/generated/graphql';
import { useModal } from '../../../hooks/useModal';
import { useSelectableTable } from '../../../hooks/useSelectableTable';
import { useToast } from '../../../hooks/useToast';
import { CreateLicenseModal } from './CreateLicenseModal';

export const LicensesTable: React.FC = () => {
  const { openModal, closeModal } = useModal();
  const { setToast } = useToast();
  const copyToClipboard = useCallback((data: License) => {
    // TODO Toast
    navigator.clipboard.writeText(data.licenseKey);
  }, []);

  const columns: ColumnDefinition<License>[] = useMemo(() => {
    return [
      {
        field: 'licenseKey',
        title: 'License Key',
        handelClick: copyToClipboard,
      },
      {
        field: 'role',
        title: 'Role',
      },
      {
        field: 'isActivated',
        title: 'Activated',
      },
    ];
  }, [copyToClipboard]);

  const [rows, setRows] = useState<CellDefinition<License>[]>([]);

  const {
    isSelected,
    toggleSelected,
    toggleSelectedAll,
    isSelectedAll,
    selectedRows,
  } = useSelectableTable<License>(rows);

  const [currentPage, setPage] = useState(1);

  const { data: totalLicensesData, refetch: refetchTotalLicenses } =
    useTotalLicensesQuery();

  const {
    data: licensesData,
    fetchMore: fetchMoreLicenses,
    refetch: refetchLicenses,
  } = useLicensesQuery({
    variables: { skip: 0, take: 10 },
  });

  const [createManyLicense] = useCreateManyLicenseMutation();
  const [deleteManyLicense] = useDeleteManyLicenseMutation();

  useEffect(() => {
    const newLicenses =
      licensesData?.licenses.map((data) => {
        return {
          _id: data.licenseKey,
          id: data.id,
          expirationDate: data.expirationDate,
          licenseKey: data.licenseKey,
          role: data.role,
          isActivated: data.isActivated,
        };
      }) || [];
    setRows(newLicenses);
  }, [licensesData]);

  const handleChangePage = useCallback(
    (page: number) => {
      fetchMoreLicenses({
        variables: { skip: (page - 1) * 10, take: 10 },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }
          return fetchMoreResult;
        },
      });
      setPage(page);
    },
    [fetchMoreLicenses],
  );

  const handleDeleteManyLincense = useCallback(
    async (licenseKeys: string[]) => {
      try {
        const res = await deleteManyLicense({
          variables: {
            where: {
              OR: licenseKeys.map((lincense) => {
                return {
                  licenseKey: {
                    equals: lincense,
                  },
                };
              }),
            },
          },
        });

        if (
          res.data?.deleteManyLicense.count &&
          totalLicensesData?.totalLicenses
        ) {
          if (
            rows.length <= res.data.deleteManyLicense.count &&
            currentPage === Math.ceil(totalLicensesData?.totalLicenses / 10)
          ) {
            await refetchLicenses({
              skip: currentPage > 1 ? (currentPage - 2) * 10 : 0,
              take: 10,
            });
            setPage(currentPage - 1);
          } else {
            await refetchLicenses({
              skip: currentPage > 0 ? (currentPage - 1) * 10 : 0,
              take: 10,
            });
          }
          await refetchTotalLicenses();
        }
      } catch (err) {
        console.log(err);
      }
    },
    [
      deleteManyLicense,
      refetchLicenses,
      refetchTotalLicenses,
      currentPage,
      setPage,
      rows,
      totalLicensesData,
    ],
  );

  const handleCreateManyLincense = useCallback(
    async ({ count, role }: { count: number; role: Role }) => {
      try {
        await createManyLicense({
          variables: { data: { qty: count, role } },
        });
        setToast({
          type: 'success',
          title: 'Succes',
          description: 'New license successfully created',
        });

        await refetchLicenses({
          skip: currentPage > 0 ? (currentPage - 1) * 10 : 0,
          take: 10,
        });
        await refetchTotalLicenses();

        return;
      } catch (err) {
        // console.log(err);
      }
      setToast({
        type: 'danger',
        title: 'Error',
        description: 'Failed to create license',
      });
    },
    [
      createManyLicense,
      setToast,
      refetchTotalLicenses,
      refetchLicenses,
      currentPage,
    ],
  );

  return (
    <Container>
      <ActionButtonWrap>
        <Button
          margin="0 1rem 0 0"
          onClick={() =>
            handleDeleteManyLincense(
              selectedRows.map((license) => license.licenseKey),
            )
          }
        >
          <Icon variants="trash" size="1.4rem" margin="0 .6rem 0 0" />
          Delete
        </Button>

        <Button
          margin="0 1rem 0 0"
          onClick={() =>
            openModal(
              <CreateLicenseModal
                closeModal={closeModal}
                createManyLicense={handleCreateManyLincense}
              />,
            )
          }
        >
          <Icon variants="add" size="1.6rem" margin="0 .6rem 0 0" />
          Create
        </Button>
      </ActionButtonWrap>
      <TableWrap>
        <SelectableTable
          columns={columns}
          rows={rows}
          toggleSelected={toggleSelected}
          toggleSelectedAll={toggleSelectedAll}
          isSelectedAll={isSelectedAll}
          isSelected={isSelected}
          width="100%"
        />
      </TableWrap>
      <Pagination
        defaultPage={currentPage}
        pageCount={
          totalLicensesData?.totalLicenses
            ? Math.ceil(totalLicensesData?.totalLicenses / 10)
            : 0
        }
        onChange={(page) => handleChangePage(page)}
      />
    </Container>
  );
};

const ActionButtonWrap = styled.div`
  display: flex;
  justify-content: end;
  padding: 1rem 3rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableWrap = styled.div`
  padding: 1rem 3rem;
`;
