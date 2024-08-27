import {
  Box,
  List,
  Drawer,
  Avatar,
  Tooltip,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

import {
  ADMIN_OPTIONS,
  PARENT_OPTIONS,
  STUDENT_OPTIONS,
  PROFESSOR_OPTIONS,
} from "../../config/sidebar.config";
import { SideBarItem } from "./SideBarItem";
import { useAuthStore, useUiStore } from "../../hooks";

const drawerWidth = 300;
const drawerBackgroundColor = "#abd1c6";

export const SideBar = () => {
  const { user } = useAuthStore();
  const { isSideBarOpen, handleCloseSideBar } = useUiStore();

  const { name, type_user } = user!;

  const options =
    type_user === "PARENTS"
      ? PARENT_OPTIONS
      : type_user === "STUDENT"
      ? STUDENT_OPTIONS
      : type_user === "PROFESSOR"
      ? PROFESSOR_OPTIONS
      : type_user === "ADMIN"
      ? ADMIN_OPTIONS
      : [];

  const drawerContent = (
    <>
      <Box
        display={{ xs: "flex", lg: "none" }}
        justifyContent="end"
        p={{ xs: 1, sm: 1.5 }}
      >
        <Tooltip title="Close">
          <IconButton onClick={handleCloseSideBar}>
            <Close />
          </IconButton>
        </Tooltip>
      </Box>

      <Divider sx={{ display: { lg: "none" } }} />

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
        py={3}
      >
        <Avatar src="" alt="" sx={{ width: "150px", height: "150px" }} />

        <Typography variant="h6" component="div" fontWeight="bold">
          {name}
        </Typography>
      </Box>

      <Divider />

      <List>
        {options.map(({ text, path, icon }) => (
          <SideBarItem key={text} text={text} path={path} icon={icon} />
        ))}
      </List>
    </>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        open={isSideBarOpen}
        onClose={handleCloseSideBar}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: drawerWidth,
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: drawerBackgroundColor,
            maxWidth: "calc(100vw - 48px)",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        open
        variant="permanent"
        sx={{
          width: drawerWidth,
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: drawerBackgroundColor,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};
