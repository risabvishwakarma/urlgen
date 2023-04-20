import * as React from "react";
import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import Box from '@mui/material/Box';
import { InputLabel, Input, FormHelperText, colors } from "@mui/material";


import Radio_Buttons from "./Radio_Buttons";


const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
  
 <Box   >
    <FormControl>
      <InputLabel className="formLabelName" htmlFor="name-input">Name</InputLabel>
      <Input className="formLabelName" id="name" type="text"
      {...register("name", { required: "Name is required" })}
      aria-describedby="name" />
      <FormHelperText id="name-warning"  sx={{
          color:"red"
        }}>
      {errors?.name && errors.name.message}
      </FormHelperText>
    </FormControl><br/><br/>


      <FormControl>
        <InputLabel className="formLabelName" htmlFor="email-input">Email address</InputLabel>
        <Input className="formLabelName" id="email" type="email"
        {...register("email", { required: "Email is required" })}
        aria-describedby="email" />
        <FormHelperText id="email-warning"  sx={{
            color:"red"
          }}>
        {errors?.email && errors.email.message}
        </FormHelperText>
      </FormControl><br/><br/>

      <FormControl>
        <InputLabel className="formLabelPassword" htmlFor="password-input">Password </InputLabel>
        <Input className="formLabelPassword" id="password" type="password"
        {...register("email", { required: "Password is required",minLength:{
            value:8,
            message:"Password lenght shouldn't less than 8"
        } })}
        aria-describedby="password" />
        <FormHelperText id="password-warning"  sx={{
            color:"red"
          }}>
        {errors?.password && errors.password.message}
        </FormHelperText>
      </FormControl><br/><br/>
      
      <Radio_Buttons/>
   <br/><br/>

      <button>Submit</button>
      </Box>
    </form>
  );
};

export default RegisterForm;
