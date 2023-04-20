import * as React from "react";
import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import copy from "copy-to-clipboard";  
import {
  InputLabel,
  TextField,
  Input,
  FormHelperText,
  colors,
} from "@mui/material";
import { Label } from "@mui/icons-material";

const UrlGen = () => {
  const [newUrl, setNewUrl] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [zipcode, setZipCode] = React.useState("");
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => {
    setNewUrl("")
    //   typeof data.url.split("&")
    console.log(data)
    let str = "";
    data.url.split("&").forEach((value) => {
      const Query_Param = value.split("=")[0];
      if ( "e_token" === Query_Param) {
      
        str+="&" + Query_Param + "=" + "123";
      } else if ("e_uid" === Query_Param) {
      
        str=str + Query_Param + "=" + "53";
      }else{
        str+=value;
      }
    });
    console.log(age.length)
    if(age.length>0){
        str=str+"&age="+age;

    }
    if(gender.length>0){
        str=str+"&gender="+gender;

    }
    if(zipcode.length>0){

        str=str+"&zip_code="+zipcode;

    }
   
    setNewUrl(str)
    copy(str);
    alert(`You have copied "${str}"`);
   
  };

  return (
  <>
  {age}
    <form onSubmit={handleSubmit(handleRegistration)}>
      <Box>
        <FormControl>
          <TextField
            className="formLabelName"
            id="url"
            type="text"
            placeholder="URL"
            {...register("url", { required: "Url is required" })}
            aria-describedby="url"
          />
          <FormHelperText
            id="name-warning"
            sx={{
              color: "red",
            }}
          >
            {errors?.url && errors.url.message}
          </FormHelperText>
        </FormControl>
        <br />
        <br />

        <FormControl>
          <TextField
            className="formLabelName"
            id="age"
            type="text"
            onChange={(event)=>{setAge(event.target.value)}}
            placeholder="AGE"
            aria-describedby="url"
          />
        </FormControl>
        <br />
        <br />

        <FormControl>
          <TextField
            className="formLabelName"
            id="gender"
            type="text"
            onChange={(event)=>{setGender(event.target.value)}}
            placeholder="Gender"
            aria-describedby="gender"
          />
        </FormControl>
        <br />
        <br />
        
        <FormControl>
          <TextField
            className="formLabelName"
            id="zipcode"
            type="text"
            onChange={(event)=>{setZipCode(event.target.value)}}
            placeholder="ZIP CODE"
            aria-describedby="zip"
          />
        </FormControl>
        <br />
        <br />



        <button>Generate URL</button><br/><br/>
         

        < TextField
        className="formLabelName"
        id="newurl"
        value={newUrl}
        type="text"
        aria-describedby="url"
      />
      </Box>
    </form>
    </>
  );
};

export default UrlGen;
