"use client";
import React, { useState, ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './ui/login.css'
import { plus_Jakarta_Sans } from '@/app/ui/fonts';
import { Divider } from '@mui/material';



interface CustomDividerProps {
  text: string;
}

function CustomDivider({ text }: CustomDividerProps): JSX.Element {
  return (
    <div className='lg:pl-12 lg:pr-12 lg:pt-4' style={{ display: 'flex', alignItems: 'center' }}>
      <Divider style={{ flexGrow: 1, marginRight:"16px" }} />
      <Typography variant="body2" className="text-sm font-medium">
        {text}
      </Typography>
      <Divider style={{ flexGrow: 1, marginLeft:"16px" }} />
    </div>
  );
}
export default function page() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    if (isChecked) {
      setIsChecked(false);
    }
    else {
      setIsChecked(true);
    }
  };
  return (
    <Grid container component="main" className={`${plus_Jakarta_Sans.className} grid md:grid-cols-3 grid-cols-1`}>
      <Grid className='relative grid place-items-center w-full h-full md:col-span-2' style={{ backgroundColor:"#c9d9d5" }}>
        <img className="absolute left-3 top-3" src="/loginPageIcons/syana-logo.png" alt="" />
        <div className='image' style={{ width:"500px", height:"500px", position:"relative" , backgroundImage:`url("/loginPageIcons/login-page-building.png")` , backgroundRepeat:"no-repeat" , backgroundSize:"contain"}}>
          <img className="absolute" src="loginPageIcons/saw.png" style={{ left: "380px", top: "215px" }} />
          <img className="absolute right-6" src="loginPageIcons/screwdriver.png" style={{ left: "330px", top: "66px" }} />
          <img className="absolute" src="loginPageIcons/roller.png" style={{ left: "50px", top: "220px" }} />
        </div>
      </Grid>

      <Grid className='w-full col-span-1 bg-white'>
        <Box className="min-h-screen">
          <Box className="flex flex-col w-full lg:mt-8 lg:pl-12 md:p-2">
            <Typography variant="h1" className='font-bold mb-2 text-lg'>Welcome to <span className='syana'>Syana</span> </Typography>
            <Typography className='text-gray-600 text-sm' variant="subtitle1" >Your admin dashboard</Typography>
          </Box>
          <Box className="grid lg:grid-cols-2 gap-4 lg:pl-12 lg:pr-12  md:p-2">
            <Button variant="outlined" className='md:h-10 md:p-4 lg:p-8 rounded-lg border-inherit'>
              <img src="loginPageIcons/google-icon.svg" className='md:pr-2' />
              <Typography variant="subtitle1" className='text-xs font-normal normal-case text-black whitespace-nowrap'>sign in with Google</Typography>
            </Button>
            <Button variant="outlined" className='md:h-10 md:p-4 lg:p-8 rounded-lg border-inherit'>
              <img src="loginPageIcons/facebook-icon.svg" className='md:pr-2' />
              <Typography variant="subtitle1" className='text-xs font-normal normal-case text-black whitespace-nowrap'>sign in with FB</Typography>
            </Button>
          </Box>
          <CustomDivider text="Or Sign in with" />
          <Box>
            <form className='p-4 md:p-2 grid md:grid-rows-4 grid-rows-1 gap-1'>
              <div className='w-full row-span-1 relative m-auto lg:pl-12 lg:pr-12'>
                <h3 className='pb-2 text-base font-semibold'>Username</h3>
                <TextField className='w-full text-base font-normal ipt-txt' id="outlined-basic" variant="outlined" type="text" />
              </div>
              <div className='w-full row-span-1 relative m-auto lg:pl-12 lg:pr-12 md:p-2'>
                <h3 className='pb-2 text-base font-semibold'>Password</h3>
                <TextField className='w-full ipt-txt' id="outlined-password-input" type="password" autoComplete="current-password" />
              </div>
              <Box className="w-full row-span-1 relative m-auto lg:pl-12 lg:pr-12 md:p-2">
                <Box className="flex justify-between">
                  <Box className="flex justify-between">
                    <Checkbox checked={isChecked} className='pt-0' onClick={handleCheckboxChange} />
                    <Typography variant="h6" className='text-base font-normal'>
                      Remember this device
                    </Typography>
                  </Box>
                  <Link className='text-base font-semibold no-underline bg-{#2D749E} cursor-pointer'>Forgot your password?</Link>
                </Box>
              </Box>
              <Box className="w-full row-span-1 relative m-auto lg:pl-12 lg:pr-12 md:mt-0">
                <Button className="w-full relative m-auto text-white text-base normal-case font-bold signin-btn">Sign in</Button>
              </Box>
            </form>
          </Box>
          <Box className="w-full row-span-1 relative m-auto pl-12 lg:pr-12 lg:mt-[-30px]">
            <Box className="flex justify-start">
              <Typography variant="h6" className="pr-4 text-base font-semibold">
                New to Syana?
              </Typography>
              <Link className='text-base font-semibold no-underline bg-{#2D749E}'>Create an account</Link>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
} 