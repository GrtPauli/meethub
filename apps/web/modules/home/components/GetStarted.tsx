import React from "react";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Button } from "@calcom/ui";

const GetStarted = () => {
  const { t, i18n } = useLocale();

  return (
    <div className="bg-default p-14">
      <div className="flex w-full flex-col items-center justify-center p-5">
        <h1 className="text-emphasis mb-2 text-4xl font-black">Power Up Your Scheduling</h1>
        <p className="text-default text-center text-lg font-light leading-normal">
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
