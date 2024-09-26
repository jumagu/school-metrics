import { Box, Typography } from "@mui/material";

import { WrenchIcon } from "../../../components";

export default function TeacherSubjectsPage() {
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
      <Typography variant="h3" color="white">
        This module is under maintenance
      </Typography>
      <Typography variant="body1" color="white">
        sorry for any inconvenience caused. We are working to return the service
        as soon as possible.
      </Typography>
    </Box>
  );
}
