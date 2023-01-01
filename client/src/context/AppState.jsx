import React, { useState } from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
    const [user, setUser] = useState('')

    const login = (currentUser) => {
        setUser(currentUser)
    }

    const logout = () => {
        setUser('')
    }

  return <AppContext.Provider value={{login, logout, user}} >{props.children}</AppContext.Provider>;
};

export default AppState;
