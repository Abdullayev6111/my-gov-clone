import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Group, Menu, UnstyledButton, Text } from '@mantine/core';
import classes from './LanguagePicker.module.css';
import { useTranslation } from 'react-i18next';

const data = [
  { label: "O'zbek", code: 'uz', title: "O'z" },
  { label: 'Русский', code: 'ru', title: 'Ру' },
  { label: 'English', code: 'en', title: 'En' },
];

function LanguageSelect() {
  const { i18n } = useTranslation();
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data.find((d) => d.code === i18n.language) || data[0]);

  const handleSelect = (item) => {
    setSelected(item);
    i18n.changeLanguage(item.code);
    setOpened(false);
  };

  const items = data.map((item) => (
    <Menu.Item key={item.code} onClick={() => handleSelect(item)}>
      <Text size="sm">{item.label}</Text>
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width={150}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
          <Group gap="xs">
            <span className={classes.label}>{selected.title}</span>
          </Group>

          <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}

export default LanguageSelect;
