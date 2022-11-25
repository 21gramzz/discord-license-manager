import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { InputField } from '../../../components/Form';
import { Button } from '../../../components/Elements';
import { Heading } from '../../../components/Elements';
import { GridRow } from '../../../components/Layout';
import { GridColumn } from '../../../components/Layout';
import { SelectField } from '../../../components/Form';
import { Label } from '../../../components/Elements';
import { useForm, Controller } from 'react-hook-form';
import { Role } from '../../../graphql/generated/graphql';

interface CreateLicenseModalProps {
  closeModal: () => void;
  createManyLicense: ({
    count,
    role,
  }: {
    count: number;
    role: Role;
  }) => Promise<void>;
}

interface FormData {
  role: Role[];
  count: number;
}

export const CreateLicenseModal: React.FC<CreateLicenseModalProps> = ({
  closeModal,
  createManyLicense,
}) => {
  const { register, handleSubmit, errors, control, trigger, setValue } =
    useForm<FormData>();

  const handleOnSubmit = useCallback(
    async (data: FormData) => {
      await createManyLicense({
        count: Number(data.count),
        role: data.role[0],
      });
      closeModal();
    },
    [createManyLicense, closeModal],
  );

  const selectOptions = useMemo(() => {
    return [
      { label: 'Renewal', value: Role.Renewal },
      { label: 'Lifetime', value: Role.Lifetime },
      {
        label: ' Family and Friends',
        value: Role.Familyandfriends,
      },
    ];
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <GridRow>
          <Heading variants="h1">Create New License</Heading>
          <GridColumn gridTemplateColumns="2fr 1fr">
            <div>
              <Label margin="0 0 1.5rem 0">Role</Label>
              <Controller
                name="role"
                rules={{ required: true }}
                control={control}
                render={() => (
                  <SelectField
                    isMulti={false}
                    className={errors.role ? 'is-invalid' : ''}
                    width="100%"
                    options={selectOptions}
                    onChange={async (value?: string[]) => {
                      setValue('role', value);
                      if (value?.length) {
                        await trigger('role');
                      }
                    }}
                  />
                )}
              />
            </div>
            <div>
              <Label margin="0 0 1.5rem 0">Count</Label>
              <InputField
                width="100%"
                type="number"
                min={1}
                max={10}
                defaultValue={1}
                name="count"
                className={errors.count ? 'is-invalid' : ''}
                inputRef={register({
                  required: true,
                })}
              />
            </div>
          </GridColumn>
          <ButtonWrap>
            <Button>Create License</Button>
          </ButtonWrap>
        </GridRow>
      </form>
    </Container>
  );
};

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Container = styled.div`
  width: 50rem;
  height: 100%;
  padding: 0 2.5rem 2.5rem 2.5rem;
`;
