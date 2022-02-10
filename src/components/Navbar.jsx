import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import mainLogo from "../images/main-logo.png";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { Logout, ShoppingCart } from "@mui/icons-material";
import { ClientContext } from "../contexts/ClientProvider";
import { AuthContext } from "../contexts/AuthProvider";

const pages = ["Серфинг", "Где Серфить", "Когда Серфить"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const { cartCount } = React.useContext(ClientContext);
  const { authWithGoogle, user, logout } = React.useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
      }}
    >
      <div className="navbar-container">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  background: "transparent",
                }}
              >
                <img src={mainLogo} alt="main logo png" />
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <img src={mainLogo} alt="main logo png" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/shop">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "darkblue",
                      display: "block",
                      fontSize: "18px",
                      fontFamily: "Caveat",
                      fontWeight: "bold",
                    }}
                    variant="text"
                  >
                    Серфинг
                  </Button>
                </Link>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/when">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "darkblue",
                      display: "block",
                      fontSize: "18px",
                      fontFamily: "Caveat",
                      fontWeight: "bold",
                    }}
                    variant="text"
                  >
                    Когда Серфить
                  </Button>
                </Link>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/where">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "darkblue",
                      display: "block",
                      fontSize: "18px",
                      fontFamily: "Caveat",
                      fontWeight: "bold",
                    }}
                    variant="text"
                  >
                    Где Серфить
                  </Button>
                </Link>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/admin">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "darkblue",
                      display: "block",
                      fontSize: "18px",
                      fontFamily: "Caveat",
                      fontWeight: "bold",
                    }}
                    variant="text"
                  >
                    Админ
                  </Button>
                </Link>
              </Box>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Link to="/cart">
                <IconButton size="large" color="primary">
                  <Badge color="error" badgeContent={cartCount}>
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Link>
              {user ? (
                <>
                  <IconButton size="small" color="inherit"></IconButton>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt={user.displayName} src={user.photoURL} />
                  </IconButton>
                  <IconButton onClick={logout} size="large" color="inherit">
                    <Logout />
                  </IconButton>
                </>
              ) : (
                <IconButton
                  onClick={authWithGoogle}
                  size="small"
                  color="primary"
                >
                  Войти
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </div>
    </AppBar>
  );
};
export default Navbar;
