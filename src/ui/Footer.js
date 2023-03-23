import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  //   const [value, setValue] = React.useState("recents");

  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };

  return (
    <BottomNavigation sx={{ backgroundColor: "#FF7B00", left: 0, position: "fixed", bottom: 0, width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <Typography variant="h6" component="h3" sx={{display: "flex", alignItems: "center"}}>
          Copyright Geco Asia
        </Typography>
      </Box>
    </BottomNavigation>
  );
}
