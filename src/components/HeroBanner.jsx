import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { banner } from "../assets";

const HeroBanner = () => {
  return (
    <Box sx={{ paddingLeft: { lg: "0px", xs: "20px" } }}>
      <Typography
        fontSize="26px"
        fontWeight="600"
        color="#ff2625"
        sx={{
          mt: { lg: "212px", xs: "70px" },
          marginRight: { lg: "0px", sm: "50px" },
        }}
        position="relative"
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "45px" },
        }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile, <br />
        and <span style={{ color: "#ff2526" }}>Repeat!</span>
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out exercises that suits you best
      </Typography>
      <Button
        variant="contained"
        className="app__hero-btn"
        href="#exercises"
        sx={{
          backgroundColor: "#ff2526",
          padding: "8px",
          width: { lg: "175px", xs: "200px" },
          height: "56px",
        }}
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
