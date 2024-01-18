import {  Box, Button,Container, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';

function Profile() {

  const data = {
    firstName: 'Surabhi',
    lastName: 'Yadav',
    address1: 'C-22 sector-57',
    address2:'Noida India',
    email:'surabhiya2001@gmail.com',
    mobile: 8303672402,
    email:'test@gmail.com'
  }


  const [lastName, setLastName] = useState(data.firstName);
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [firstName, setFirstName] = useState();
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')


  useEffect(()=>{
    setFirstName(data.firstName)
    setLastName(data.lastName)
    setAddress1(data.address1)
    setAddress2(data.address2)
    setMobile(data.mobile)
    setEmail(data.email)
  }, [])

  return (
    <>
      <Box sx={{}}>{
        <>
          <Box sx={{ border: '1px solid lightgrey', width: '90%', minWidth: '300px', height: '80vh', borderRadius: "10px", p: 10}}>
            <Box sx={{backgroundColor: "#BFCBCE"}}>
              <Container width='lg' sx={{ backgroundColor: "#fff", borderRadius: '10px', mt: 1, backgroundColor: "#BFCBCE"}}>
                <Grid container sx={{ display: 'flex', flexDirection: 'column' ,backgroundColor: "#BFCBCE"}}>

                  <Grid sx={{ p: 1, pt: 0 }}>
                    <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                      Name
                    </Typography>
                    <Box sx={{ display: "flex", ml: 0, }}>
                      <TextField
                        required
                        placeholder='First Name'
                        type='name'
                        onChange={(e) => setFirstName(e.target.value)}
                        name='name'
                        value={firstName}
                        fullWidth
                        sx={{ pb: 1, ml: 0 }}
                      />
                      <TextField
                        required
                        placeholder='Last'
                        type='name'
                        name='name'
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        sx={{ pb: 1, ml: 1 }}
                      />
                    </Box>
                    <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                      Address Line 1
                    </Typography>
                    <Box sx={{ display: "flex", ml: 0 }}>
                      <TextField
                        required
                        placeholder='Your Address'
                        type='text'
                        onChange={(e) => setAddress1(e.target.value)}
                        name='address1'
                        value={address1}
                        fullWidth
                        sx={{ pb: 1, ml: 0, }}
                      />
                    </Box>

                    <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                      Address Line 2
                    </Typography>
                    <Box sx={{ display: "flex", ml: 0 }}>
                      <TextField
                        required
                        placeholder='Your Address'
                        type='text'
                        onChange={(e) => setAddress2(e.target.value)}
                        name='address2'
                        value={address2}
                        fullWidth
                        sx={{ pb: 1, ml: 0, }}
                      />
                    </Box>
                    <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                      Email
                    </Typography>
                    <TextField
                      required
                      placeholder='Email'
                      type='email'
                      onChange={(e) => setEmail(e.target.value)}
                      name='email'
                      value={email}
                      disabled
                      fullWidth
                      sx={{ pb: 1, m: 1, ml: 0, }}
                    />
                    <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                      Contact Number
                    </Typography>
                    <Box sx={{ display: "flex", ml: 0 }}>
                      <TextField
                        required
                        placeholder='Enter your Number'
                        type='tel'
                        onChange={(e) => setMobile(e.target.value)}
                        name='mobile'
                        value={mobile}
                        fullWidth
                        sx={{ pb: 1, ml: 0, }}
                      />
                    </Box>
                   
                  </Grid>
                  <Button className='All_button_hover_add_new' style={{ marginLeft: '1%', backgroundColor: "#303655", color: "#fff", borderRadius: "4px" }}>
                        Update Profile
                    
                  </Button>
                </Grid>
                
              </Container>
            </Box>
          </Box>
        </>
      }</Box>
    </>
  )
}

export default Profile;