import * as React from "react";
import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Course from "./Data";
import { InputLabel, Input, FormHelperText, colors } from "@mui/material";



import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

const RegisterForm = () => {
  const [value, setValue] = React.useState("");
  const [visibility, setVisibility] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };
  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
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
            Password{" "}
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
            Phone{" "}
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
          <FormLabel>Focus</FormLabel>
          <RadioGroup name="radio-buttons-group-focus" sx={{ my: 1 }}>
            <Radio value="default" label="Default" />
            <Radio
              value="relative"
              label="Position relative"
              sx={{ [`& .${radioClasses.radio}`]: { position: "relative" } }}
            />
          </RadioGroup>
          <FormHelperText>
            Select an option and use keyboard ↑↓ to see the focus outline
          </FormHelperText>
        </FormControl>

        <button>Submit</button>
      </Box>
    </form>
  );
};

export default RegisterForm;
