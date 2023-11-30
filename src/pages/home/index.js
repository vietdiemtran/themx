import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Menu,
  MoveToInbox,
  Search,
} from "@mui/icons-material";
import {
  Grid,
  TextField,
  Autocomplete,
  Button,
  useMediaQuery,
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

import CategoryItem from "../../component/CategoryItem";
import { dataFakeCategory, dataFakeVideo } from "./fakeData";
import VideoItem from "../../component/VideoItem";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const MuiDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const MuiAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Home = () => {
  const theme = useTheme();
  const _isMD = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!_isMD) {
      setOpen(false);
    }
  }, [_isMD]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigationDetail = () => {
    navigate('/detail')
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MuiAppBar sx={{ backgroundColor: "white" }} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </IconButton>

          <Grid
            container
            alignItems="center"
            sx={{ paddingTop: 1, marginBottom: 2 }}
          >
            <Grid md={3} sx={{ display: { xs: "none", md: "flex" } }}>
              <text style={{ color: "red" }}>Themx</text>
            </Grid>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              xs={12}
              md={6}
            >
              <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ flex: 1 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    label="Search"
                    variant="outlined"
                  />
                )}
              />

              <Button>
                <Search />
              </Button>
            </Grid>

            <Grid
              sx={{ display: { xs: "none", md: "flex" } }}
              container
              justifyContent="end"
              md={3}
            >
              <Button>ABCD</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </MuiAppBar>

      <MuiDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </MuiDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 6 }}>
        {dataFakeCategory.map(({ id, value }) => (
          <CategoryItem
            key={id}
            isSelect={category === id}
            value={value}
            onClick={() => {
              setCategory(id);
            }}
          />
        ))}

        <Box
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {dataFakeVideo.map(({ id, title, view, time }) => (
            <VideoItem
              onClick={navigationDetail}
              key={id}
              title={title}
              view={view}
              time={time}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
