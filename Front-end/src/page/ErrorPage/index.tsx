import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return (
      <>
        <h1>  Error Page </h1>
        <Link style={{
              textDecoration: "none",
            }} to="/">
          <Button 
          variant="contained"> Voltar </Button>
        </Link> 
      </>
    )
  }