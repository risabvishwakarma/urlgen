import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
// import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import NativeSelect from '@mui/material/NativeSelect';
// import NativeSelectInput from "@mui/material/NativeSelect/NativeSelectInput";
// import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';

// import ReactDatePicker from "react-datepicker";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormLabel from "@mui/material/FormLabel";
import Course from "./Data";

import { InputLabel, Input, FormHelperText, colors } from "@mui/material";

import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
// import { red } from "@mui/material/colors";
// import { Reddit } from "@mui/icons-material";
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const RegisterForm = () => {
  const [value, setValue] = React.useState(false);
  const [hover, setHover] = React.useState(-1);
  const [visibility, setVisibility] = React.useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setError,
  } = useForm();
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleRegistration = async (data) => { sleep(2000)
    if(data.ConfirmPassword!==data.password){setValue(true)
    return false;}
    console.log(data);
  };

  const onError = async (errors, e) => {
    await sleep(2000);
    console.log("Error : " + errors);
  };
  return (
    <form
      onSubmit={handleSubmit(handleRegistration, onError)}
      control={control}
      action="/"
      method="get"
    >
      <Box>
        <FormControl>
          <InputLabel className="formLabelName" htmlFor="name-input">
            Name
          </InputLabel>
          <Input
            className="formLabelName"
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            aria-describedby="name"
          />
          <FormHelperText
            id="name-warning"
            sx={{
              color: "red",
            }}
          >
            {errors?.name && errors.name.message}
          </FormHelperText>
        </FormControl>
        <br />
        <br />

        <FormControl>
          <InputLabel className="formLabelName" htmlFor="email-input">
            Email address
          </InputLabel>
          <Input
            className="formLabelName"
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            aria-describedby="email"
          />
          <FormHelperText
            id="email-warning"
            sx={{
              color: "red",
            }}
          >
            {errors?.email && errors.email.message}
          </FormHelperText>
        </FormControl>
        <br />
        <br />

        <FormControl>
          <InputLabel className="formLabelPassword" htmlFor="password-input">
            Password
          </InputLabel>
          <Input
            className="formLabelPassword"
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password lenght shouldn't less than 8",
              },
              pattern:""
            })}
            aria-describedby="password"
          />
          <FormHelperText
            id="password-warning"
            sx={{
              color: "red",
            }}
          >
            {errors?.password && errors.password.message}
          </FormHelperText>
        </FormControl>
        <br />
        <br />
        <FormControl>
          <InputLabel className="formLabelPassword" htmlFor="password-input">
            Phone
          </InputLabel>
          <Input
            className="formLabelPassword"
            id="phone"
            type="text"
            {...register("phone", { required: false })}
            aria-describedby="password"
          />
          <FormHelperText
            id="password-warning"
            sx={{
              color: "red",
            }}
          ></FormHelperText>
        </FormControl>
        <br />
        <br />

        <FormControl>
          <InputLabel className="formLabelPassword" htmlFor="password-input">
            Confirm Password
          </InputLabel>
          <Controller
            control={control}
            name="ConfirmPassword"
            rules={{
              required: "Conferm Password is required",
              
           
            // validate: (value, formValues) => {value !== formValues.password?setValue(true):setValue(false)}
            // message:"jhbibii"
              
            
            }}
            render={({ field: { onChange, onBlur, value, ref ,watch} }) => (
              <Input onChange={onChange} onBlur={onBlur} selected={value} />
            )}
          />
          <FormHelperText
            sx={{
              color: "red",
            }}
          >
            
            {value && "password didn't match" }
            
            {errors?.ConfirmPassword && errors.ConfirmPassword.message}
          </FormHelperText>
        </FormControl>
        <br />
        <br />

        <section>
          <InputLabel
            className="formLabelPassword"
            onClick={() => {
              setVisibility(!visibility);
            }}
            htmlFor="Radio-input"
          >
            What will you prefer?
          </InputLabel>

          <FormControl sx={{ alignItems: "flex-start" }}>
            <Controller
              control={control}
              name="Radio"
              rules={{ required: "Select atleast one" }}
              render={({ field: { onChange, onBlur, value, ref } }) =>
                visibility && (
                  <RadioGroup
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                  >
                    <Radio label={Course[0]} value={Course[0]} />
                    <Radio label={Course[1]} value={Course[1]} />
                  </RadioGroup>
                )
              }
            />
            <FormHelperText
              sx={{
                color: "red",
              }}
            >
              {errors?.Radio && errors.Radio.message}
            </FormHelperText>
          </FormControl>
        </section><br/>

        <section>
          <FormControl>
          <Controller
          control={control}
       
          
          name="Rating"
          rules={{ required: "Please Give Rating" }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Rating
            max={10}
             onChange={onChange}
              onBlur={onBlur} 
              selected={value}
              />
          )}

          />
          <FormHelperText
          sx={{
            color: "red",
          }}
        >
          {errors?.Rating && errors.Rating.message}
        </FormHelperText>
          </FormControl>
        </section><br/>
        <section>
        <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Age
      </InputLabel>
        <Controller
        control={control}
        name="Age"
        defaultValue={''}
        rules={{ required: "Please select Age",}}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <NativeSelect
         
            onChange={onChange}
            onBlur={onBlur} 
            selected={value}
            
          >
          
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
            <option value={40}>Fourty</option>
          </NativeSelect>
        )}

        />
        <FormHelperText
        sx={{
          color: "red",
        }}
      >
        {errors?.Age && errors.Age.message}
      </FormHelperText>
        </FormControl>
      </section>
      <br />
        <br />

      <></>
      <section>
  
        <InputLabel>MUI Slider</InputLabel>
        <Controller
          name="MUI_Slider"
          control={control}
          defaultValue={[0, 10]}
         
          render={({ field }) => (
            <Slider
              {...field}
              onChange={(_, value) => {
                field.onChange(value);
              }}
              valueLabelDisplay="auto"
              max={10}
              step={1}
            />
          )}
              />
        

     
      </section>

        <br />
        <br />



        <button>Submit</button>
      </Box>
    </form>

    
  );
};

export default RegisterForm;