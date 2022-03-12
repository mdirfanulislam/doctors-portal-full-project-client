import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => { 
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

    const { user, logout } = useAuth();

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                    <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>Doctors Portal</Link>
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                    
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">
                            <Link to="/home" style={{ textDecoration: 'none' }}><Button color="inherit">Home</Button></Link><br />
                            <Link to="/appointment" style={{ textDecoration: 'none' }}><Button color="inherit">Appointment</Button></Link>  
                        </Typography>
                    </MenuItem>
                    
                    </Menu>
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                    <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>Doctors Portal</Link>
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{ color: 'black', display: 'block' }}
                    >
                        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Home</Button></Link>
                        <Link to="/appointment" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Appointment</Button></Link>
                    </Button>
                    
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="data:image/png;base64,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"  />
                        
                    </IconButton>
                    </Tooltip>
                    <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    
                        <MenuItem onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">

                        {user?.email ?
                        <Box>
                            <NavLink style={{ textDecoration: 'none', color: '' }} to="/dashboard">
                                <Button color="inherit">Dashboard</Button>
                            </NavLink><br />
                            <Button onClick={logout} color="inherit">Logout</Button>
                        </Box>
                        :
                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button color="inherit">Login</Button>
                        </NavLink>
                        }   
                            </Typography>
                        </MenuItem>
                    
                    </Menu>
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navigation;