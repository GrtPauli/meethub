import classNames from "classnames";

import { HeadSeo, Logo } from "@calcom/ui";

import Loader from "@components/Loader";
import { useThemeContext } from "context/ThemeContext";

interface Props {
  title: string;
  description: string;
  footerText?: React.ReactNode | string;
  showLogo?: boolean;
  heading?: string;
  loading?: boolean;
}

export default function AuthContainer(props: React.PropsWithChildren<Props>) {
  const {theme} = useThemeContext()

  return (
    <div className="bg-muted flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
      <HeadSeo title={props.title} description={props.description} />
      {props.showLogo && <Logo theme={theme} small inline={false} className="mx-auto mb-aut" />}

      {/* <div className={classNames(props.showLogo ? "text-center" : "", "sm:mx-auto sm:w-full sm:max-w-md")}>
        {props.heading && <h2 className="font-cal text-emphasis text-center text-3xl">{props.heading}</h2>}
      </div> */}
      {props.loading && (
        <div className="bg-muted absolute z-50 flex h-screen w-full items-center">
          <Loader />
        </div>
      )}
      <div className="mb-auto mt-2 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-default shadow-xl border-subtl mx-2 rounded-md borde px-5 py-10 sm:px-10">
          {props.heading && <h2 className="text-emphasis capitalize text-2xl font-black mb-3">{props.heading}</h2>}
          {props.children}
        </div>
        <div className="text-default mt-8 text-center text-sm">{props.footerText}</div>
      </div>
    </div>
  );
}
