import { Stack } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";
import GreenTick from "../../assets/green.png";
import Alert from "../../assets/alert.png";

const Ending = () => {
  const [searchParams] = useSearchParams();
  const status = Object.fromEntries([...searchParams]).status;
  const token = Object.fromEntries([...searchParams]).token;

  console.log(status, token);
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        boxSizing: "border-box",
        height: "100vh",
      }}
    >
      <div
        className="url-gen-div"
        style={{ color: "black", padding: "2rem", wordBreak: "break-all" }}
      >
        <div>
          {Number(status) === 1 ? (
            <>
              <img src={GreenTick} height="100px" />
              <h3>You are scusessfully complete survey </h3>
            </>
          ) : Number(status) === 2 ? (
            <>
              <img src={Alert} height="100px" />
              <h3>Your not qualified this survey</h3>
            </>
          ) : Number(status) === 3 ? (
            <>
              <img src={Alert} height="100px" />
              <h3>Quota is full for the survey</h3>
            </>
          ) : Number(status) === 4 ? (
            <>
              <img src={Alert} height="100px" />
              <h3>Your are not eligblie this survey</h3>
            </>
          ) : (
            ""
          )}
          <h3>{token}</h3>
        </div>
      </div>
    </Stack>
  );
};

export default Ending;
