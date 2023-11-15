// eslint-disable-next-line no-restricted-imports
import { noop } from "lodash";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import { APP_NAME } from "@calcom/lib/constants";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Button, SkeletonText, StepCard, Steps, Logo } from "@calcom/ui";

export function WizardLayout({
  children,
  maxSteps = 2,
  currentStep = 0,
  isOptionalCallback,
  theme
}: {
  children: React.ReactNode;
} & { theme?: any; maxSteps?: number; currentStep?: number; isOptionalCallback?: () => void }) {
  const { t, isLocaleReady } = useLocale();
  const [meta, setMeta] = useState({ title: "", subtitle: " " });
  const pathname = usePathname();
  const { title, subtitle } = meta;

  useEffect(() => {
    setMeta({
      title: window.document.title,
      subtitle: window.document.querySelector('meta[name="description"]')?.getAttribute("content") || "",
    });
  }, [pathname]);

  return (
    <div
      className="bg-muted  min-h-screen"
      data-testid="onboarding">
      <div>
        <Toaster position="bottom-right" />
      </div>
      <div className="mx-auto px- py-10">
        <div className="relative">
          <div className="sm:mx-auto sm:w-full sm:max-w-[600px]">
            {theme != null && (
              <div className="w-full flex items-center justify-center">
                <Logo theme={theme} small inline={false} className="mx-auto mb-aut" />
              </div>
            )}
            <div className="mx-aut sm:max-w-full">
              <header>
                {isLocaleReady ? (
                  <>
                    <p className="text-emphasis capitalize text-2xl font-black mb-3">
                      {title.replace(` | ${APP_NAME}`, "")}&nbsp;
                    </p>
                    <p className="text-default text-sm">{subtitle}&nbsp;</p>
                  </>
                ) : (
                  <>
                    <SkeletonText className="h-6 w-1/2" />
                    <SkeletonText className="mt-4 h-4 w-3/4" />
                  </>
                )}
              </header>
              <Steps maxSteps={maxSteps} currentStep={currentStep} navigateToStep={noop} />
            </div>
            <StepCard>{children}</StepCard>
          </div>
        </div>
        {isOptionalCallback && (
          <div className="mt-4 flex justify-center">
            <Button color="minimal" onClick={isOptionalCallback}>
              {t("ill_do_this_later")}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export const getLayout = (page: React.ReactElement) => <WizardLayout>{page}</WizardLayout>;
