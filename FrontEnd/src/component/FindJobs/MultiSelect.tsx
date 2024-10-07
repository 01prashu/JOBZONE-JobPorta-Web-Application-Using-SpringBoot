// src/components/FindJobs/MultiSelect.tsx
import { useState } from 'react';
import { CheckIcon, Combobox, Group, Pill, PillsInput, useCombobox } from '@mantine/core';

interface MultiSelectCreatableProps {
  label: string; // Add label prop
  data: string[]; // Expecting data as an array of strings
  icon: JSX.Element; // Add icon prop
}

export function MultiSelectCreatable({ label, data, icon }: MultiSelectCreatableProps) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [value, setValue] = useState<string[]>([]);

  const filteredData = data.filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()));

  const handleValueSelect = (val: string) => {
    setSearch('');
    if (val === '$create') {
      setValue((current) => [...current, search]);
    } else {
      setValue((current) =>
        current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
      );
    }
  };

  const handleValueRemove = (val: string) => setValue((current) => current.filter((v) => v !== val));

  const valuesToDisplay = value.slice(0, 2); // Display only the first two selected values

  const options = filteredData.map((item) => (
    <Combobox.Option value={item} key={item} active={value.includes(item)}>
      <Group gap="sm">
        {value.includes(item) ? <CheckIcon size={12} /> : null}
        <span>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <div>
      <label className="block mb-2">{label}</label>
      <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
        <Combobox.DropdownTarget>
          <PillsInput onClick={() => combobox.openDropdown()}>
            <Pill.Group>
              {valuesToDisplay.map((item) => (
                <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
                  {item}
                </Pill>
              ))}
              {value.length > 2 && (
                <Pill>+{value.length - 2} more</Pill> // Display a pill for remaining selected options
              )}
              <Combobox.EventsTarget>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {icon} {/* Add the icon here */}
                  <PillsInput.Field
                    onFocus={() => combobox.openDropdown()}
                    value={search}
                    placeholder="Search values"
                    onChange={(event) => {
                      combobox.updateSelectedOptionIndex();
                      setSearch(event.currentTarget.value);
                    }}
                    style={{ marginLeft: 8 }} // Add some margin for spacing
                  />
                </div>
              </Combobox.EventsTarget>
            </Pill.Group>
          </PillsInput>
        </Combobox.DropdownTarget>

        <Combobox.Dropdown>
          <Combobox.Options>
            {options}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}
