import React, { useState } from "react";
import { useContext } from "react";

type ThemeType = {
    darkTheme: boolean,
    toggleTheme: () => void,
    sayHello: () => void
}

const themeContext = React.createContext({} as ThemeType);

export function useTheme() {
    return useContext(themeContext);
}

export const ThemeProvider = ({children}: any) => {
    const theme = useProvideTheme();
    return <themeContext.Provider value={theme}>{children}</themeContext.Provider>;
}

function useProvideTheme() {
    const [darkTheme, setDarkTheme] = useState(false);
    console.log(darkTheme);

    const toggleTheme = () => {
        setDarkTheme(prevTheme => !prevTheme);
        console.log("Toggle");
        sayHello();
    }

    const sayHello = () => {
        console.log("Hello");
    }

    return {
        darkTheme, toggleTheme, sayHello
    };
}