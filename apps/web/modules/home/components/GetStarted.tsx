import React from "react";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Button } from "@calcom/ui";

const GetStarted = () => {
  const { t, i18n } = useLocale();

  return (
    <div className="bg-default p-10 md:p-14 cus-xs:!p-5 2xl:flex items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center p-5">
        <h1 className="text-emphasis mb-2 text-4xl cus-sm:text-2xl cus-xs:!text-lg font-black">Power Up Your Scheduling</h1>
        <p className="text-default text-center text-lg font-light cus-sm:text-base cus-xs:!text-sm !leading-normal cus-xs:!leading-normal">
          Get started with the world's leading Scheduling Automation Platform
          <br /> in seconds – for free.
        </p>

        <div className="mt-10 flex gap-5">
          <Button color="primary" size="lg">
            Create An Account
          </Button>

          <Button color="secondary" size="lg">
            I Have An Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
