import React from 'react'
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

import {
    Toolbar, Typography, Box,List, ListItem, Drawer as MuiDrawer,Container
} from '@mui/material'
import FeedIcon from '@mui/icons-material/Feed';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ViewListIcon from '@mui/icons-material/ViewList';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink, useNavigate, Outlet } from 'react-router-dom'
import Applogo from '../img/images/logo512.png'

const drawerWidth = 244;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const DashBoard = () => {
    const navigate = useNavigate();

    return (
        <>
            <Box sx={{ display: 'flex', backgroundColor: "#BFCBCE" }}>
                <Drawer variant="permanent" open={true} sx={{ overflowX: 'hidden', background: 'red' }}>
                    <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', px: [1], width: '96%', cursor: 'pointer', backgroundColor: "#303655" }} onClick={() => { navigate('/dashboard/home') }}>
                        <div style={{ fontSize: '22px', fontWeight: "600", lineHeight: "28px", display: 'flex', alignItems: 'center', marginLeft: '20%', color: "white" }}>
                            <img src={Applogo} alt="" style={{ width: "12%", paddingRight: '4px' }} />
                            <div>Your Logo</div>
                        </div>
                    </Toolbar>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', backgroundColor: "#303655" }}>
                        <List sx={{ pl: 5, fontFamily: `'Inter', sans-serif` }}>
                            <NavLink to='home' style={{ textDecoration: "none", color: "white" }}>
                                <ListItem sx={{ backgroundColor: window.location.pathname.split('/')[2] === 'home' ? 'green' : 'none', borderRadius: "50px 0px 0px 50px", borderRight: window.location.pathname.split('/')[2] === 'home' ? "4px solid #7953FF" : 'none', width: "100%", mb: 2 }}>
                                    <HomeIcon alt="" style={{ marginRight: 10 }} />Home
                                </ListItem>
                            </NavLink>
                            <NavLink to='form' style={{ textDecoration: "none", color: "white", }}>
                                <ListItem
                                    sx={{ backgroundColor: window.location.pathname.split('/')[2] === 'form' ? 'green' : 'none', borderRadius: "50px 0px 0px 50px", borderRight: window.location.pathname.split('/')[2] === 'form' ? "4px solid #7953FF" : 'none', width: "100%", mb: 2 }}>
                                    <FeedIcon alt="" style={{ marginRight: 10 }} />Form
                                </ListItem>
                            </NavLink>
                            <NavLink to='table' style={{ textDecoration: "none", color: "white", }}>
                                <ListItem
                                    sx={{ backgroundColor: window.location.pathname.split('/')[2] === 'table' ? 'green' : 'none', borderRadius: "50px 0px 0px 50px", borderRight: window.location.pathname.split('/')[2] === 'table' ? "4px solid #7953FF" : 'none', width: "100%", mb: 2 }}>
                                    <ViewListIcon alt="" style={{ marginRight: 10 }} />Table
                                </ListItem>
                            </NavLink>
                        </List>
                        <List sx={{ pl: 5, fontFamily: `'Inter', sans-serif` }}>
                            <NavLink to='profile' style={{ textDecoration: "none", color: "white", }}>
                                <ListItem
                                    sx={{ backgroundColor: window.location.pathname.split('/')[2] === 'profile' ? 'green' : 'none', borderRadius: "50px 0px 0px 50px", borderRight: window.location.pathname.split('/')[2] === 'profile' ? "4px solid #7953FF" : 'none', width: "100%", mb: 2 }}>
                                    <AccountBoxIcon alt="" style={{ marginRight: 10 }} />Profile
                                </ListItem>
                            </NavLink>
                        </List>
                    </div>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, height: '100vh', overflow: 'auto', }}>
                    <Container sx={{ mt: 5, maxWidth: '1300px!important' }}>
                        <Box sx={{ display: 'flex', width: '100%!importnat', justifyContent: 'space-between' }}>
                            <Stack direction='row' justifyContent='space-between' alignItems="center" spacing={2} flexWrap="wrap" sx={{ width: '60%', pt: 2 }}>
                                {
                                    window.location.pathname.split('/')[2] === 'home' &&
                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'end' }}>
                                        <Typography
                                            color="#000"
                                            sx={{ float: "left", fontSize: "24px", lineHeight: "36px", fontWeight: "700", fontStyle: "normal" }}
                                        >
                                            Home
                                        </Typography>
                                        <Typography>
                                            This is Home Page. Please Visit...
                                        </Typography>
                                    </Box>
                                }
                                {
                                    window.location.pathname.split('/')[2] === 'form' &&
                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'end' }}>
                                        <Typography
                                            color="#000"
                                            sx={{ float: "left", fontSize: "24px", lineHeight: "36px", fontWeight: "700", fontStyle: "normal" }}
                                        >
                                            Form Page
                                        </Typography>
                                        <Typography>
                                            Please enter your Details...
                                        </Typography>
                                    </Box>
                                }

                                {
                                    window.location.pathname.split('/')[2] === 'table' &&
                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'end' }}>
                                        <Typography
                                            color="#000"
                                            sx={{ float: "left", fontSize: "24px", lineHeight: "36px", fontWeight: "700", fontStyle: "normal" }}
                                        >
                                            Table page
                                        </Typography>
                                        <Typography>
                                            This table has the Dynamic Header and  Rows.
                                        </Typography>
                                    </Box>
                                }

                                {
                                    window.location.pathname.split('/')[2] === 'profile' &&
                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'end' }}>
                                        <Typography
                                            color="#000"
                                            sx={{ float: "left", fontSize: "24px", lineHeight: "36px", fontWeight: "700", fontStyle: "normal" }}
                                        >
                                            Profile page
                                        </Typography>
                                        <Typography>
                                            Your profile...
                                        </Typography>
                                    </Box>
                                }

                            </Stack>

                        </Box>

                        <Box sx={{ py: 2, mb: 5, mt: 3 }}>
                            <Outlet />
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>

    )
}

export default DashBoard