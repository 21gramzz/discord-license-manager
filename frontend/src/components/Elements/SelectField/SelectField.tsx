import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';

export interface SelectFieldOption {
  label: string;
  value: string;
}

interface Props {
  options: SelectFieldOption[];
  isMulti?: boolean;
  className?: string;
  onChange: (value?: string[]) => void;
  defaultValue?: SelectFieldOption[];
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  width?: string | number;
  height?: string | number;
  margin?: string;
  padding?: string;
}

export const SelectField: React.FC<Props> = ({
  margin,
  padding,
  color,
  width,
  height,
  fontSize,
  fontWeight,
  className,
  isMulti = false,
  onChange,
  defaultValue = [],
  options,
}) => {
  const [selectedOptions, setSelectedOptions] =
    useState<SelectFieldOption[]>(defaultValue);
  const [isDropdownShown, setDropdownShown] = useState<boolean>(false);
  const [dropdownOptions, setDropdownOptions] =
    useState<SelectFieldOption[]>(options);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectFieldHeight, setSelectFieldHeight] = useState('auto');

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const [dropdownMaxHeight, setDropdownMaxHeight] = useState('auto');

  const handleResizeWindow = useCallback(() => {
    const target = dropdownContainerRef.current;
    const bounding = target?.getBoundingClientRect();
    setDropdownMaxHeight(
      String(window.innerHeight - (bounding?.y || 0)) + 'px',
    );
  }, []);

  const filterDropdown = useCallback(
    (keyword: string) => {
      let unselectedDrodownOptions = options;
      selectedOptions.forEach((selectedOption) => {
        unselectedDrodownOptions = unselectedDrodownOptions.filter(
          (unselctedOption) => unselctedOption.value !== selectedOption.value,
        );
      });
      if (keyword.trim() !== '') {
        unselectedDrodownOptions = unselectedDrodownOptions.filter(
          (unselctedOption) =>
            unselctedOption.label
              .toLocaleLowerCase()
              .trim()
              .includes(keyword.toLocaleLowerCase().trim()),
        );
      }
      setDropdownOptions(unselectedDrodownOptions);
    },
    [options, selectedOptions],
  );

  const handleDeleteSelectedValue = useCallback(
    (option: SelectFieldOption) => {
      setSelectedOptions(
        selectedOptions.filter((v) => v.value !== option.value),
      );
      const found = options.find((v) => v.value === option.value);

      if (found) {
        setDropdownOptions([...dropdownOptions, found]);
      }
    },
    [selectedOptions, options, dropdownOptions],
  );

  const handleSelectDropdownItem = useCallback(
    (value: string) => {
      const index = dropdownOptions.findIndex(
        (option) => option.value === value,
      );
      if (index !== -1) {
        if (isMulti) {
          const newDropDownOptions = dropdownOptions.filter(
            (option) => option.value !== value,
          );
          setSelectedOptions([...selectedOptions, dropdownOptions[index]]);
          setDropdownOptions(newDropDownOptions);
        } else {
          const newDropDownOptions = options.filter(
            (option) => option.value !== value,
          );
          setDropdownShown(false);
          setSelectedOptions([dropdownOptions[index]]);
          setDropdownOptions(newDropDownOptions);
        }
      }
    },
    [dropdownOptions, isMulti, selectedOptions, options],
  );

  const handleSelectAllDropdownItems = useCallback(() => {
    let unselectedOptions = dropdownOptions;
    dropdownOptions.forEach((option) => {
      unselectedOptions = unselectedOptions.filter(
        (unselectedOption) => unselectedOption.value !== option.value,
      );
    });
    setSelectedOptions([...selectedOptions, ...dropdownOptions]);
    setDropdownOptions(unselectedOptions);
  }, [selectedOptions, dropdownOptions]);

  const handleDeleteAllDropdownItems = useCallback(() => {
    setSelectedOptions([]);
    setDropdownOptions(options);
    setSearchKeyword('');
  }, [options]);

  const handleChangeSearchInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchKeyword(e.target.value);
    },
    [],
  );

  useEffect(() => {
    handleResizeWindow();
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, [handleResizeWindow]);

  useEffect(() => {
    setDropdownOptions(options);
    setSelectedOptions(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  useEffect(() => {
    const handleOnClickEvent = (event: any) => {
      if (!isDropdownShown || dropdownRef?.current?.contains(event.target))
        return;
      setDropdownShown(false);
    };
    window.addEventListener('click', handleOnClickEvent);
    return () => {
      window.removeEventListener('click', handleOnClickEvent);
    };
  }, [isDropdownShown, dropdownRef]);

  useEffect(() => {
    filterDropdown(searchKeyword);
  }, [filterDropdown, searchKeyword, selectedOptions]);

  useEffect(() => {
    let value;
    if (selectedOptions.length) {
      value = selectedOptions.map((option) => option.value);
    }
    onChange(value);
  }, [onChange, selectedOptions]);

  useEffect(() => {
    setSearchKeyword('');
  }, [isDropdownShown]);

  useEffect(() => {
    console.log(String(dropdownContainerRef.current?.offsetHeight) + 'px');
    setSelectFieldHeight(
      String(dropdownContainerRef.current?.offsetHeight) + 'px',
    );
  }, [dropdownContainerRef.current?.offsetHeight]);

  return (
    <Container
      margin={margin}
      padding={padding}
      height={height}
      width={width}
      className={className}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      ref={dropdownContainerRef}
    >
      <SelectBox onClick={() => setDropdownShown(!isDropdownShown)}>
        <SelectedItemsBody>
          {selectedOptions.map((option, index) => (
            <SelectedItem key={index}>
              {option.label}
              <DeleteSelectedItemButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteSelectedValue(option);
                }}
              >
                <Icon variants="close" size="1.3rem" color="white" />
              </DeleteSelectedItemButton>
            </SelectedItem>
          ))}
        </SelectedItemsBody>
        {isMulti ? (
          <DeleteAllSelectedItemsButton
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteAllDropdownItems();
            }}
          >
            <Icon variants="close" size="1.5rem" />
          </DeleteAllSelectedItemsButton>
        ) : null}
      </SelectBox>
      {isDropdownShown ? (
        <DropdownContainer
          ref={dropdownRef}
          windowHeight={dropdownMaxHeight}
          selectFieldHeight={selectFieldHeight}
        >
          <InputField
            placeholder="Search"
            onChange={handleChangeSearchInputValue}
          />
          <DropDownInner>
            {isMulti && dropdownOptions.length ? (
              <DropdownItem onClick={handleSelectAllDropdownItems}>
                Select All
              </DropdownItem>
            ) : null}
            {!dropdownOptions.length ? (
              <DropdownItem>No Options</DropdownItem>
            ) : null}
            {dropdownOptions.map((item, index) => (
              <DropdownItem
                key={index}
                onClick={() => handleSelectDropdownItem(item.value)}
              >
                {item.label}
              </DropdownItem>
            ))}
          </DropDownInner>
        </DropdownContainer>
      ) : null}
    </Container>
  );
};

const Container = styled.div<
  Pick<
    Props,
    'width' | 'height' | 'margin' | 'padding' | 'fontWeight' | 'fontSize'
  >
>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '4rem'};
  margin: ${({ margin }) => margin || '0'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  font-size: ${({ fontSize }) => fontSize || '1.3rem'};
  padding: ${({ padding }) => padding || '1rem 1.5rem'};
  position: relative;
  background-color: transparent;
  border: ${({ theme }) => 'solid 0.5px ' + theme.border};
  border-radius: 0.5rem;
  &.is-invalid {
    border: solid 1px ${({ theme }) => theme.danger};
  }
`;

const DropdownContainer = styled.div<{
  windowHeight: string;
  selectFieldHeight: string;
}>`
  position: absolute;
  left: 0;
  top: ${({ selectFieldHeight }) => `calc(${selectFieldHeight} + 1rem)`};
  width: 100%;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.body};
  border: solid 0.1rem ${({ theme }) => theme.border};
  max-height: ${({ windowHeight }) => `calc(${windowHeight} - 7rem)`};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 2;
`;

const DropDownInner = styled.div`
  overflow-y: scroll;
  height: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DropdownItem = styled.div`
  padding: 1rem 1.5rem;
  overflow-wrap: break-word;
  user-select: none;
  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: white;
  }
`;

const DeleteAllSelectedItemsButton = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0 1rem 1rem;
`;

const SelectedItemsBody = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SelectedItem = styled.div`
  background-color: ${({ theme }) => theme.accent};
  color: white;
  padding: 0.19rem 1rem;
  margin-right: 0.5rem;
  display: flex;
  white-space: nowrap;
  align-items: center;
  border-radius: 5rem;
  user-select: none;
`;

const DeleteSelectedItemButton = styled.div`
  font-size: 85%;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  width: 100%;
  height: 100%;
`;

const InputField = styled.input`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  width: 100%;
  padding: 1rem 1.5rem;
  border: 0;
  border-bottom: solid 0.1rem ${({ theme }) => theme.border};
  outline: 0;
  ::placeholder {
    color: ${({ theme }) => theme.subText};
  }
`;
