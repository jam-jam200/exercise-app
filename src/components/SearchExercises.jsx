import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import { HorizontalScrollBar } from "../components";

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

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
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
          onClick={handleSearch}
        >
          search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", padding: "20px" }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
