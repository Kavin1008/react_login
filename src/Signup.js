import React, { useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import axios from 'axios'

const Signup = () => {
  const [name,setName] = useState("");
  const [mail,setEmail] = useState("");
  const [Password,setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {name,mail,Password})
    .then(res => console.log(res))
    .then(err => console.log(err))
  }
  return (
    <Stack height={"100vh"} width={"100vw"} alignItems={"center"} justifyContent={"center"} bgcolor={"gray"}>
      <Stack
        bgcolor={"white"}
        alignItems={"center"}
        direction={"column"}
        width={"25vw"}
        borderRadius={"20px"}
        p={3}
        spacing={2}
      >
       
        <TextField fullWidth id="outlined-basic" label="name" variant="outlined" onChange={(e) => setName(e.target.value)} />
       
      
        <TextField fullWidth id="outlined-basic" label="email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
       
        <TextField fullWidth id="outlined-basic" label="password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
      
        <Button onClick={handleSubmit}>
          submit
        </Button>
      </Stack>
    </Stack>
  )
}

export default Signup