import React, { SetStateAction, useEffect, useState } from "react";

interface IThemeContext {
    theme: any
    setTheme: React.Dispatch<SetStateAction<any>>
    updateTheme: (theme: any) => void
}

const ThemeContext = React.createContext<IThemeContext>({
    theme: null,
    setTheme(){},
    updateTheme(theme) {},
})

const useThemeContext = () => {
    const context = React.useContext(ThemeContext);
    if (context === undefined) {
      throw new Error("app dispatch must be used within the app global provider");
    }
    return context;
};
  
interface IProps {
    children: React.ReactNode;
}

const ThemeContextProvider: React.FC<IProps> = ({ children }) => {
    const [theme, setTheme] = useState<any>(null)

    useEffect(() => {
        if(window !== undefined){
            const appTheme = localStorage.getItem('appTheme')
            if(appTheme){
              localStorage.setItem('appTheme', appTheme)
              setTheme(appTheme)
            //   console.log(appTheme)
        
              if(appTheme == "dark"){
                document?.querySelector('.meethub')?.classList.replace('meethub-light', 'meethub-dark')
              }
            } else {
              localStorage.setItem('appTheme', 'light')
              setTheme('light')
            //   console.log('light')
            }
        }
    }, [])

    const updateTheme = (theme: any) => {
        console.log(theme)
        setTheme(theme)
    }

    return(
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                updateTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export {
    ThemeContextProvider,
    useThemeContext
}