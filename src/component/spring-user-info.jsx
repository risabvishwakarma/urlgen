import * as React from "react";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import User from "./UserData";
import FormControl from "@mui/material/FormControl";
import {
  InputLabel,
  Input,
  FormHelperText,
  colors,
  TextField,
} from "@mui/material";
import { Box, Button } from "@mui/joy";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Label } from "@mui/icons-material";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setError,
  } = useForm({});

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleRegistration = async (data) => {
    sleep(2000);
    console.log(data);

    let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      mode: "no-cors",
      method: "Post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log(res);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleRegistration)} control={control}>
        <Box>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                {User.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">
                      <FormControl>
                        <Controller
                          control={control}
                          name={row}
                          defaultValue={""}
                          rules={{ required: true }}
                          render={({
                            field: { ...field },
                            fieldState: { invalid },
                          }) => (
                            <TextField
                              {...field}
                              placeholder={row.toUpperCase()}
                              error={invalid}
                              helperText={
                                invalid ? `${row} is required!` : null
                              }
                            />
                          )}
                        />
                      </FormControl>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br />
          <section>
            <button>Submit</button>
          </section>
        </Box>
      </form>
    </>
  );
};

export default UserForm;
