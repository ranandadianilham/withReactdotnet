import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";
import bcrypt from 'bcryptjs';
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  
  const authenticate = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    console.log('hashed', hashedPassword);
    /* await axios.post("", {
     username: data?.username,
     password: hashedPassword 
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      //if ok save to local storage
      if(!res?.data) {
        throw "undefined";
      }
      localStorage.setItem('accessType', "Bearer");
      localStorage.setItem('token', res?.data.token);
    }).catch((error) => {
      console.error(error);
    }); */
  }

  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUser(data);
    //get profile by bearer token
    <Navigate to={"/"} />
    //navigate("/profile");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    //navigate("/", { replace: true });
  };

  
  return <AuthContext.Provider value={{
    authenticate,
    user
  }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
