import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext } from "react";
import { Footer } from "../../components/Footer";
import { HeaderBar } from "../../components/HeaderBar";
import { AuthContext } from "../../context/Auth";

export const HomePage = () => {
  const { headerBarUserInfo, signout } = useContext(AuthContext)

  return (
    <>
      <HeaderBar
        rgbColor={headerBarUserInfo?.rgb}
        name={headerBarUserInfo?.name}
        perfilImg={headerBarUserInfo?.imgPerfil}
        signout={signout}
      />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" sx={{
          color: "#b44403",
          marginTop: "350px",
          marginBottom: "350px"
        }}> Seja bem vindo {headerBarUserInfo?.name} </Typography>
      </Stack>
      <Footer />
    </>
  )
}
