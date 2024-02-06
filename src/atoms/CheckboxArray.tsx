import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { UXArrayProps } from '@/api/ux';

interface CheckboxArrayProps extends UXArrayProps<boolean> {
  // options: Option[];
}

const CheckboxArray: React.FC<CheckboxArrayProps> = (props) => {
  return (
    <div>
      {/* 0. Value-UI Spread w/ Dynamic Keying & Labelling */}
      {props.value.map((option, index) => (
        <FormControlLabel
          key={props.getKey(index)}
          control={
            <Checkbox
              checked={
                option.type === 'boolean' ? (option.value as boolean) : false
              }
              onChange={(e) => props.onChange(index, e.target.checked)}
              disabled={props.disabled || option.type !== 'boolean'}
            />
          }
          label={props.getLabel(index)}
        />
      ))}
    </div>
  );
};

export default CheckboxArray;
