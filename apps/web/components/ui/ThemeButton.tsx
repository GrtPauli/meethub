import { ConfigProvider, FloatButton } from "antd";
import { useThemeContext } from "context/ThemeContext";
import React from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

const ThemeButton = () => {
  const { setTheme, theme } = useThemeContext();

  const handleClick = () => {
    if (theme == "light") {
      localStorage.setItem("appTheme", "dark");
      document?.querySelector(".meethub")?.classList.replace("meethub-light", "meethub-dark");
      setTheme("dark");
    } else {
      localStorage.setItem("appTheme", "light");
      document?.querySelector(".meethub")?.classList.replace("meethub-dark", "meethub-light");
      setTheme("light");
    }
  };

  // console.log(theme)

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FB5201",
        },
      }}>
      <FloatButton
        icon={theme == "light" ? <BsMoonStarsFill /> : <BsFillSunFill />}
        style={{ right: 50 }}
        type="primary"
        onClick={handleClick}
      />
    </ConfigProvider>
  );
};

export default ThemeButton;
