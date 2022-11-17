import React from "react";
import { Stack, Typography } from "@mui/material";
import { gym } from "../assets";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "poiner",
        gap: "47px",
      }}
    >
      <img src={gym} alt="dumbell" style={{ width: "40px", height: "40px" }} />
    </Stack>
  );
};

export default BodyPart;
