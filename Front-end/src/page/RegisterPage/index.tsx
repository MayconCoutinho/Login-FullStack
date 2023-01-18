import { Box, Button, Input, Stack, TextField } from "@mui/material"
import { Link } from "react-router-dom"


export const RegisterPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(https://images.alphacoders.com/112/1125969.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "auto",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            background: "#ffffff9",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            width: "420px",
            height: "600px",
            backdropFilter: "blur(3.5px)",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
          }}
        >
          <Stack
            sx={{
              color: "#fff",
              fontSize: "25px",
              textAlign: "center",
              marginTop: "80px",
            }}
            spacing={2}>
              
            Cadastro

            <Stack>

              <TextField
                id="standard-basic"
                label="Nome"
                variant="standard"
                sx={{
                  width: 280,
                  marginTop: 8,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                type={'text'}
              />
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                sx={{
                  width: 280,
                  marginTop: 6,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                type={'text'}
              />
              <Input
                sx={{
                  color: "#fff",
                  width: 280,
                  marginTop: 6,
                  marginBottom: 8,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                type={'password'}
              />
            </Stack>
            <Link style={{
              textDecoration: "none",
            }} to="/Login">
              <Button
                sx={{
                  width: 200,
                  background: "#ffffff2f",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur(3.5px)",
                  borderRadius: "10px",
                  border: "1px solid rgba( 255, 255, 255, 0.18 )", 
                  '&:hover': {
                    backgroundColor: '#2222224c'
                  },
                }}
                size="small"
                variant="contained"
              > Voltar </Button>
            </Link>
            <Link style={{
              textDecoration: "none",
            }} to="/Login">
              <Button
                sx={{
                  width: 200,
                  background: "#ffffff2f",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur(3.5px)",
                  borderRadius: "10px",
                  border: "1px solid rgba( 255, 255, 255, 0.18 )",
                  '&:hover': {
                    backgroundColor: '#2222224c'
                  },
                }}
                size="small"
                variant="contained"
              > Criar </Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </>
  )
}