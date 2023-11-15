import React from 'react'
import { QuestionCircleOutlined } from '@ant-design/icons';
import { ConfigProvider, FloatButton } from 'antd';
import {BsFillSunFill, BsMoonStarsFill} from "react-icons/bs"
import { useThemeContext } from 'context/ThemeContext';


interface ThemeButtonProps {
    currentTheme?: any
    setCurrentTheme?: any
}

const ThemeButton = ({ currentTheme, setCurrentTheme }: ThemeButtonProps) => {
    const {setTheme, theme} = useThemeContext()

    const handleClick = () => {
        if(theme == "light"){
            localStorage.setItem('appTheme', 'dark')
            document?.querySelector('.meethub')?.classList.replace('meethub-light', 'meethub-dark')
            setTheme('dark')
        } else {
            localStorage.setItem('appTheme', 'light')
            document?.querySelector('.meethub')?.classList.replace('meethub-dark', 'meethub-light')
            setTheme('light')
        }
    }
    
    // console.log(theme)

  return (
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: "#FB5201"
            }
        }}
    >
        <FloatButton
            icon={
                theme == "light" ? <BsMoonStarsFill/>
                : <BsFillSunFill/>
            }
            style={{ right: 50 }} 
            type="primary" 
            onClick={handleClick} 
        />
    </ConfigProvider>
  )
}

export default ThemeButton