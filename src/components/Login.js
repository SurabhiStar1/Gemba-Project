import React from 'react'
import { Box, Container, Grid, Typography, Button, TextField, Snackbar, Alert, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import loginFrame from '../img/images/loginFrame.jpeg'
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [errorSnackbarOpen, setErrorSnackbarOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  
  const handleErrorSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorSnackbarOpen(false);
  }

  function validateEmail(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(data);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorSnackbarOpen(true);
      setErrorMessage('Enter valid email');
      return;
    }
    else if (password.length < 4) {
      setErrorSnackbarOpen(true);
      setErrorMessage('Enter valid password');
      return;
    } else {

      navigate('/dashboard/home')
    }
  }
  
  return (
    <>
      <Box sx={{ width: '100vw', height: "92vh", display: "flex", justifyContent: "center", alignItems: "center" , backgroundColor:"#303655" }}>
        
        <Container width='lg' sx={{ backgroundColor:"#BFCBCE", borderRadius: '10px', mt: 2 }}>
          <Grid container sx={{ height: "100%" }}>
            <Grid item xs={0} sm={0} md={0} lg={5} xl={5} sx={{ p: 3, display: "flex", justifyContent: "center", margin: 'auto' }}>
              <img src={loginFrame} alt="Login" style={{ maxWidth: "100%", height: "90%" }} />

            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5} xl={5} sx={{ p: 5, pt: 10, margin: 'auto' }}>
              <Typography sx={{ fontSize: "24px", fontWeight: "700", pb: 3 }}>
                Login Here
              </Typography>
              <Typography sx={{ fontSize: "14px", pb: 1 }}>
                Email
              </Typography>
              <TextField
                required
                placeholder='Email'
                type='email'
                name='email'
                value={email}
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                sx={{ pb: 3, backgroundColor:"" }}
              />
              <Typography sx={{ fontSize: "14px", pb: 1 }}>
                Password
              </Typography>
              <TextField
                required
                placeholder='Password'
                type={showPassword ? "text" : "password"}
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                InputProps={{
                  endAdornment: (
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                  )
                }}
              />
              <Button
                type='submit'
                variant='contained'
                fullWidth
                onClick={submitHandler}
                sx={{ mt: 1, mb: 2, borderRadius: "6px", textTransform: "none", fontSize: "14px", fontWeight: "700", backgroundColor: "#303655" }}
              >
                LOGIN
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Snackbar open={errorSnackbarOpen} autoHideDuration={6000} onClose={handleErrorSnackbarClose}>
        <Alert onClose={handleErrorSnackbarClose} variant="filled" severity="error" sx={{ width: '100%' }}>
          {errorMessage === "" ? "Some error occured" : errorMessage}
        </Alert>
      </Snackbar>

    </>
      
  )
}

export default Login