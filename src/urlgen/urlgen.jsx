import * as React from "react";
import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import copy from "copy-to-clipboard";
import { useSnackbar } from "notistack";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {

  TextField,

  FormHelperText,

} from "@mui/material";

const UrlGen = () => {
  const [newUrl, setNewUrl] = React.useState("");
  const [flagForNewUrl, setFlagForNewUrl] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    reset,
    submittedData,
    formState,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = useForm();

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ something: '' });
    }
  }, [formState, submittedData, reset]);

  const handleRegistration = (data) => {
    setNewUrl("");
    let temp_url = "";

    temp_url +=
      data.url.split("&e_token=")[0] +
      "&e_token=" +
      "sft_" +
      Math.floor(100000 + Math.random() * 900000) +
      "&e_uid=" +
      "sft_" +
      Math.floor(100000 + Math.random() * 900000);

    if ((data.age = data.age.trim()).length > 0) temp_url += "&age=" + data.age;
    if ((data.gender = data.gender.trim()).length > 0)
      temp_url += "&gender=" + data.gender;
    if ((data.zipcode = data.zipcode.trim()).length > 0)
      temp_url += "&zip_code=" + data.zipcode;

    setNewUrl(temp_url);
    setFlagForNewUrl(temp_url.length > 0);
    copy(temp_url);
    
    enqueueSnackbar("Generated and copy sucessfully!", {
      variant: "success",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <Box>
          <FormControl>
            <TextField
              style={{ width: "400px" }}
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
              style={{ width: "400px" }}
              fullWidth
              className="formLabelName"
              id="age"
              type="text"
              maxRows={1}
              {...register("age", { required: false })}
              // onChange={(event)=>{setAge(event.target.value.trim())}}
              placeholder="AGE"
              aria-describedby="url"
            />
          </FormControl>
          <br />
          <br />

          <FormControl>
            <TextField
              style={{ width: "400px" }}
              className="formLabelName"
              id="gender"
              type="text"
              maxRows={1}
              {...register("gender", { required: false })}
              // onChange={(event)=>{setGender(event.target.value.trim())}}
              placeholder="Gender"
              aria-describedby="gender"
            />
          </FormControl>
          <br />
          <br />

          <FormControl>
            <TextField
              style={{ width: "400px" }}
              className="formLabelName"
              id="zipcode"
              type="text"
              maxRows={1}
              {...register("zipcode", { required: false })}
              // onChange={(event)=>{setZipCode(event.target.value.trim())}}
              placeholder="Zip Code"
              aria-describedby="zip"
            />
          </FormControl>
          <br />
          <br />

          <button style={{ width: "400px",background:"black",color:"white" }}>{flagForNewUrl?"Re-Generate URL":"Generate URL"}</button>
          
          <br />
          <br />
        </Box>
      </form>
      {flagForNewUrl && (
        <OutlinedInput
          id="outlined-adornment-password"
          value={newUrl}
          style={{ width: "400px" }}
          endAdornment={
            <InputAdornment position="end">
              <ContentCopyIcon
                className="ContentCopyIcon"
                aria-label="toggle password visibility"
                onClick={() => {
                if(newUrl.trim().length>0){
                  copy(newUrl);
                  enqueueSnackbar("copy sucessfully!", {
                    variant: "success",
                  });}
                }}
                sx={{ cursor: "pointer" }}
                edge="end"
              />
            </InputAdornment>
          }
          className="formLabelName"
        />
        
      )  }
      <br/>
      <br/>
      {flagForNewUrl && ( <button onClick={()=>{
        setNewUrl("")
        setFlagForNewUrl(false)
        reset()

      }

      } style={{ width: "400px",background:"red",color:"white"  }}>Reset</button>)}

    </>
  );
};

export default UrlGen;
