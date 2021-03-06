import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
  Link,
  Outlet,
} from "react-router-dom";
import useAuth from './../../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faGripHorizontal, faHome, faUserMd, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 200;
const drawerHeight = 300;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin} = useAuth();
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to="/home" style={{ textDecoration: 'none' }}><Button color="inherit"> <FontAwesomeIcon icon={faHome} /> Home Page</Button></Link>
      <Link to="/appointment" style={{ textDecoration: 'none' }}><Button color="inherit" sx={{ marginBlock: "10px" }}> <FontAwesomeIcon icon={faCalendar} /> Appointment</Button></Link>
      <Link to="/dashboard" style={{ textDecoration: 'none' }}><Button color="inherit"> <FontAwesomeIcon icon={faGripHorizontal} /> Dashboard</Button></Link>
      {admin && <Box>
        <Link to={`/dashboard/makeAdmin`} style={{ textDecoration: 'none' }}><Button sx={{marginBlock: "10px"}}color="inherit"> <FontAwesomeIcon icon={faUserPlus
        } /> Make Admin</Button></Link>
        <Link to={`/dashboard/addDoctor`} style={{ textDecoration: 'none' }}><Button    color="inherit"> <FontAwesomeIcon icon={faUserMd} />Add Doctor</Button></Link>
        </Box>}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none', md: 'block', sm: 'block' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, height: { sm: drawerHeight }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block', lg: 'none'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,  height: drawerHeight },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="persistent"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: drawerHeight },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Outlet></Outlet>
          
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;