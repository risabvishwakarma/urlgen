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

const UrlGen = () => {
  const [newUrl, setNewUrl] =React.useState("");
  const[flagForNewUrl,setFlagForNewUrl]=React.useState(false)
  // const [age, setAge] = React.useState("");
  // const [gender, setGender] = React.useState("");
  // const [zipcode, setZipCode] = React.useState("");
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => {
    setNewUrl("")
    // console.log(data)
    let temp_url = "";

    
    // data.url.split("&").forEach((value) => {
    //   const Query_Param = value.split("=")[0];
    //   if ( "e_token" === Query_Param) {
      
    //     temp_url+="&" + Query_Param + "=" + "123";
    //   } else if ("e_uid" === Query_Param) {
        
    //     temp_url+="&" + Query_Param + "=" + "53";
    //   }else{
    //     temp_url+=value;
    //   }
    // });

  
     //***************************************************************************************/


    temp_url+=data.url.split("&e_token=")[0]+"&e_token="+"123456"+"&e_uid="+"65432"

    if((data.age=data.age.trim()).length>0)temp_url+="&age="+data.age;
    if((data.gender=data.gender.trim()).length>0)temp_url+="&gender="+data.gender;
    if((data.zipcode=data.zipcode.trim()).length>0)temp_url+="&zip_code="+data.zipcode;

    setNewUrl(temp_url)
    setFlagForNewUrl(temp_url.length>0)
    copy(temp_url);
    alert(`You have copied "${temp_url}"`);
 
   
  };

  return (
  <>

    <form onSubmit={handleSubmit(handleRegistration)}>
      <Box>
        <FormControl>
       
          <TextField
            style={{width:"400px"}}
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
          style={{width:"400px"}}
          fullWidth
            className="formLabelName"
            id="age"
            type="text"
            maxRows={1}
            {...register("age", {required:false })}
            // onChange={(event)=>{setAge(event.target.value.trim())}}
            placeholder="AGE"
            aria-describedby="url"
          />
        </FormControl>
        <br />
        <br />

        <FormControl>
          <TextField
          style={{width:"400px"}}
            className="formLabelName"
            id="gender"
            type="text"
            maxRows={1}
            {...register("gender", {required:false, })}
            // onChange={(event)=>{setGender(event.target.value.trim())}}
            placeholder="Gender"
            aria-describedby="gender"
          />
        </FormControl>
        <br />
        <br />
        
        <FormControl>
          <TextField
          style={{width:"400px"}}
            className="formLabelName"
            id="zipcode"
            type="text"
            maxRows={1}
            {...register("zipcode", {required:false, })}
            // onChange={(event)=>{setZipCode(event.target.value.trim())}}
            placeholder="Zip Code"
            aria-describedby="zip"
          />
        </FormControl>
        <br />
        <br />

        <button style={{width:"400px"}}>Generate URL</button><br/><br/>
         {flagForNewUrl &&
        <TextField
        style={{width:"400px"}}
        className="formLabelName"
       
        id="newurl"
        value={newUrl}
        type="text"
        aria-describedby="newurl"
      />
    }
      </Box>
    </form>
    </>
  );
};

export default UrlGen;
