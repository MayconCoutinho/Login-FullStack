import { Box, Button, Input, Stack } from "@mui/material"
import { Link } from "react-router-dom"

export const LoginPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(https://images6.alphacoders.com/867/867887.jpg)",
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
              marginTop: "130px",
            }}
            spacing={2}>
            Seja Bem vindo
            <Stack>
              <Input 
                sx={{
                  width: 280,
                  marginTop: 8,
                  marginLeft: "auto",
                  marginRight: "auto",
                  color: "#ffffff",
                  
                }}
                type={'text'}
              />
              <Input
                id="standard-adornment-amount"

                sx={{
                  width: 280,
                  marginTop: 6,
                  marginBottom: 8,
                  marginLeft: "auto",
                  marginRight: "auto",
                  color: "#fff"
                }}
                type={'password'}
              />
              <Stack spacing={2}>
                <Link style={{
                  textDecoration: "none",
                }} to="/">
                  <Button
                    sx={{
                      paddingLeft: 10.3,
                      paddingRight: 10.3,
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
                  > Entrar
                  </Button>
                </Link>
                <Link
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 500,
                    fontSize: "20px",
                    color: "#edf0f1",
                    textDecoration: "none",
                    marginTop: 35,
                  }} to="/Register">
                  Criar Conta
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  )
}