import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { banner } from "../assets";

const HeroBanner = () => {
  return (
    <Box>
      <Typography
        fontSize="26px"
        fontWeight="600"
        color="#ff2625"
        sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
        position="relative"
        p="20px"
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile, <br />
        and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out exercises that suits you best
      </Typography>
      <Button
        variant="contained"
        className="app__hero-btn"
        href="#exercises"
        sx={{ backgroundColor: "#ff2526", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight="600"
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={banner} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
