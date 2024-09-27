import { Box, Typography } from "@mui/material";

import { WrenchIcon } from "..";

export const Maintenance = () => {
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={1}
    >
      <WrenchIcon style={{ width: "80px", height: "80px", color: "#fffffe" }} />
      <Typography variant="h3" color="white" textAlign="center">
        This feature is under maintenance
      </Typography>
      <Typography variant="body1" color="white" textAlign="center">
        sorry for any inconvenience caused. We are working to return the service
        as soon as possible.
      </Typography>
    </Box>
  );
};
