import { ThemeContextProvider } from "context/ThemeContext";
import type { IncomingMessage } from "http";
import { SessionProvider } from "next-auth/react";
import type { AppContextType } from "next/dist/shared/lib/utils";
import React from "react";

import { trpc } from "@calcom/trpc/react";

import type { AppProps } from "@lib/app-providers";

import ThemeButton from "@components/ui/ThemeButton";

import "../styles/globals.css";

function MyApp(props: AppProps) {
  // const [currentTheme, setCurrentTheme] = useState<any>(null)
  const { Component, pageProps } = props;

  // useEffect(() => {
  //   const appTheme = localStorage.getItem('appTheme')
  //   if(appTheme){
  //     localStorage.setItem('appTheme', appTheme)
  //     updateTheme(appTheme)
  //     console.log(appTheme)

  //     if(appTheme == "dark"){
  //       document?.querySelector('.meethub')?.classList.replace('meethub-light', 'meethub-dark')
  //     }
  //   } else {
  //     localStorage.setItem('appTheme', 'light')
  //     updateTheme('light')
  //     console.log('light')
  //   }
  // })

  // useEffect(() => {
  //   console.log(theme)
  // })

  if (Component.PageWrapper !== undefined) return Component.PageWrapper(props);
  // (
  //   <ThemeContextProvider>
  //     {Component.PageWrapper(props)}
  //     <ThemeButton/>
  //   </ThemeContextProvider>
  // );
  return (
    <SessionProvider>
      <ThemeContextProvider>
        <Component {...pageProps} />
        <ThemeButton />
      </ThemeContextProvider>
    </SessionProvider>
  );
}

declare global {
  interface Window {
    calNewLocale: string;
  }
}

MyApp.getInitialProps = async (ctx: AppContextType) => {
  const { req } = ctx.ctx;

  let newLocale = "en";

  if (req) {
    const { getLocale } = await import("@calcom/features/auth/lib/getLocale");
    newLocale = await getLocale(req as IncomingMessage & { cookies: Record<string, any> });
  } else if (typeof window !== "undefined" && window.calNewLocale) {
    newLocale = window.calNewLocale;
  }

  return {
    pageProps: {
      newLocale,
    },
  };
};

const WrappedMyApp = trpc.withTRPC(MyApp);

export default WrappedMyApp;
