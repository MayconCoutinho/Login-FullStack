import { createContext, useEffect, useState } from "react";
import { goToHomePage } from "../../routes/coordinator";
import { GetInfoUser, PostLogin } from "../../services/Api";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [headerBarUserInfo, setHeaderBarUserInfo] = useState(null)
  const [feed, setFeed] = useState(null)
  const [refreshPage, setRefreshPage] = useState(true)

  const signin = async (email, password, navigate, keepLogin) => {
    const response = await PostLogin(email, password)
    setUser(response.token)
    if(keepLogin){
      window.localStorage.setItem("TokenLogin", response.token)
    }
    goToHomePage(navigate)
  }
  const signout = () => {
    setUser(null)
    window.localStorage.removeItem('TokenLogin')
    UpdatePage()
  }
  const  UpdatePage = () => {
    setRefreshPage(!refreshPage)
  }
  useEffect(() => {
    const token = window.localStorage.getItem('TokenLogin')

    const InfoUser = async () => {
      const getInfoUser = await GetInfoUser(user || token)
      setHeaderBarUserInfo(getInfoUser[0])
    }
    InfoUser()
  }, [user, refreshPage])

  return (
    <AuthContext.Provider value={{ user, signin, signout, headerBarUserInfo, feed, UpdatePage, setUser }}>{children}</AuthContext.Provider>
  )
} 
