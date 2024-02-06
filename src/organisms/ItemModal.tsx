import { FC, useState } from 'react';

import { Box, Typography, Checkbox } from '@mui/material';

import { MenuItem, MenuItemOptions } from '@/api/menu';

import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

/** */
type ItemModalProps = {
  open: boolean;
  onClose: () => void;
  orderItems: MenuItem[];
  item: number | null;
  optionToggle: (
    item: number,
    option: number,
    choice: number,
    value?: boolean
  ) => void;
};

type OptionProps = {
  item: MenuItem;
  iindex: number;
  option: MenuItemOptions;
  oindex: number;
  select: (cindex: string) => void;
};

const keyOfOptionGroup = (iindex: number, oindex: number) =>
  `orderItem-${iindex}-option-${oindex}`;
const keyOfOptionChoice = (iindex: number, oindex: number, cindex: number) =>
  `orderItem-${iindex}-option-${oindex}-choice-${cindex}`;

const ChoiceLabel: FC<{ text: string; price?: number }> = (props) => {
  return (
    <Typography
      children={
        props.text + (props.price ? '+ $' + props.price.toFixed(2) : '')
      }
    />
  );
};

const RadioOption: FC<OptionProps> = (props) => {
  return (
    <RadioGroup
      key={keyOfOptionGroup(props.iindex, props.oindex)}
      // defaultValue="female"
      // name="radio-buttons-group"
      value={props.option.choices.findIndex((c) => c.selected)}
      onChange={(event) => props.select(event.target.value)}
    >
      {props.option.choices.map((choice, cindex) => (
        <FormControlLabel
          value={`${cindex}`}
          control={
            <Radio
              key={keyOfOptionChoice(props.iindex, props.oindex, cindex)}
              checked={choice.selected}
              onChange={(e) => props.select(`${cindex}`)}
            />
          }
          label={<ChoiceLabel {...choice} />}
        />
      ))}
    </RadioGroup>
  );
};

const CheckboxOption: FC<OptionProps> = (props) => {
  return (
    <Box
      key={keyOfOptionGroup(props.iindex, props.oindex)}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {props.option.choices.map((choice, cindex) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FormControlLabel
            value={`${cindex}`}
            control={
              <Checkbox
                key={keyOfOptionChoice(props.iindex, props.oindex, cindex)}
                checked={choice.selected}
                onChange={(e) => props.select(`${cindex}`)}
              />
            }
            label={<ChoiceLabel {...choice} />}
          />
        </Box>
      ))}
    </Box>
  );
};

/** */
const ItemModal: FC<ItemModalProps> = (props) => {
  // Null handling
  if (props.item === null) return null;
  const iindex = props.item as number;

  const select = (oindex: number, choice: string) => {
    const cindex = parseInt(choice);
    props.optionToggle(iindex, oindex, cindex);
  };

  const resolveOptionChoices = (oindex: number) => {
    // Value extraction
    const item = props.orderItems[iindex];
    const option = props.orderItems[iindex].options[oindex];
    const _props = { iindex, item, oindex, option };

    // List compat
    // const key = `orderitem-${_item}-option-${oindex}-choice-${cindex}`;
    switch (props.orderItems[iindex].options[oindex].type) {
      case 'checkbox':
        return (
          <CheckboxOption
            {..._props}
            select={(choice) => select(oindex, choice)}
          />
        );
      case 'radio':
        return (
          <RadioOption
            {..._props}
            select={(choice) => select(oindex, choice)}
          />
        );
    }
  };

  return (
    <Modal {...props}>
      <Box
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          pt: 2,
          px: 4,
          pb: 3,
        }}
      >
        <Typography variant="h3">
          Edit {props.orderItems[iindex]?.name ?? 'Item'}
        </Typography>

        {/* Loop through orderItems[item].options */}
        <Box>
          {props.orderItems[iindex]?.options.map((option, oindex) => (
            <FormControl>
              <FormLabel>{option.name}</FormLabel>
              {resolveOptionChoices(oindex)}
            </FormControl>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default ItemModal;
