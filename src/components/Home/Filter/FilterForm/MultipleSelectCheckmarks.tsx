import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 213,
    },
  },
};

const names = [
  'Character',
  'Location',
  'Episodes',
];

const selectStyles = {
  background: '#fff',
  border: '1px solid black',
  width: 213,
  height: 56
};

export default function MultipleSelectCheckmarks({ selectItem, setSelectItem}) {

  const handleChange = (event: SelectChangeEvent<typeof selectItem>) => {
    const {
      target: { value },
    } = event;
    setSelectItem(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <>
        <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        displayEmpty
        value={selectItem}
        onChange={handleChange}
        renderValue={(selected) => {
          if (selected.length === 0) {
              return <p>Select item</p>;
            }
          return selected.join(', ');
        }}
        MenuProps={MenuProps}
        sx={selectStyles}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
              <Checkbox checked={selectItem.indexOf(name) > -1} />
            </MenuItem>
          ))}
        </Select>
    </>
  );
}