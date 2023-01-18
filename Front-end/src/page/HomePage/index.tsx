import { Button } from "@mui/material"
import { Link } from "react-router-dom"


export const HomePage = () => {
    return (
      <>
        <h1>  Home Page </h1>
        <Link style={{
              textDecoration: "none",
            }} to="/Login">
          <Button variant="contained"> Sair </Button>
        </Link> 
      </>
    )
  }