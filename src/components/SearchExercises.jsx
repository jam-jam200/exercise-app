import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { borderRadius } from "@mui/system";

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        textTransform="capitalize"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Search for an <span style={{ color: "#ff2526" }}>excercise</span>
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercises..."
          type="text"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              outline: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />
        <Button
          variant="contained"
          className="search-btn"
          href="#exercises"
          sx={{
            backgroundColor: "#ff2526",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
        >
          search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
