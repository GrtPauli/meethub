import { Image } from "antd";
import React from "react";

const FavouriteApps = () => {
  return (
    <div className="2xl:flex items-center justify-center p-10 md:p-14 cus-xs:!p-5">
      <div>
        <h1 className="text-emphasis mb-2 text-3xl cus-sm:text-xl cus-xs:!text-lg font-black">Connect All Your Favourite Apps</h1>
        <p className="text-default text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose font-light">
          Boost productivity with 100+ integrations and extensions that fold right into your workflow.
        </p>

        <div className="mt-10 grid grid-cols-8 cus-md3:grid-cols-5 cus-md3:gap-5 cus-sm:!grid-cols-3 gap-8">
          {/* <App src="/app-store/googlevideo/icon.svg" alt="google-meet" /> */}
          <App src="/app-store/googlecalendar/icon.svg" alt="google-meet" />
          <App src="/app-store/applecalendar/icon.svg" alt="google-meet" />
          <App src="/app-store/discord/icon.svg" alt="google-meet" />
          <App src="/app-store/telegram/icon.svg" alt="google-meet" />
          <App src="/app-store/whatsapp/icon.svg" alt="google-meet" />
          <App src="/app-store/paypal/icon.svg" alt="google-meet" />
          <App src="/app-store/office365video/icon.svg" alt="google-meet" />

          <App src="/app-store/office365calendar/icon.svg" alt="google-meet" />
          <App src="/app-store/hubspot/icon.svg" alt="google-meet" />
          <App src="/app-store/stripepayment/icon.svg" alt="google-meet" />
          <App src="/app-store/tandemvideo/icon.svg" alt="google-meet" />
          <App src="/app-store/zapier/icon.svg" alt="google-meet" />
          <App src="/app-store/zoomvideo/icon.svg" alt="google-meet" />
          <App src="/app-store/zohocalendar/icon.svg" alt="google-meet" />
          <App src="/app-store/exchangecalendar/icon.svg" alt="google-meet" />
        </div>

        <button className="text-brand mt-10 font-light">Explore All Apps</button>
      </div>
    </div>
  );
};

export default FavouriteApps;

interface AppProps {
  src: string;
  alt: string;
}

const App = ({ src, alt }: AppProps) => {
  return (
    <div className="bg-default flex h-full w-full items-center justify-center rounded-md p-8 shadow-xl">
      <Image preview={false} src={src} alt={alt} width="100%" height="100%" />
    </div>
  );
};
