import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Course from './Data';

export default function Radio_Buttons() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [visibility, setVisibility] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Select Option');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'best') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel onClick={()=>{setVisibility(!visibility)}} id="demo-error-radios">Select University Course</FormLabel>
        < RadioGroup
          aria-labelledby="demo-error-radios"
          name="CourseRadio"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value={Course[0]} control={<Radio />} label={Course[0]}  />
          <FormControlLabel value={Course[1]}  control={<Radio />} label={Course[1]}  />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
 
  );
}