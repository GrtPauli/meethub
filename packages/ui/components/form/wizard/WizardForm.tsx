// eslint-disable-next-line no-restricted-imports
import { noop } from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";

import classNames from "@calcom/lib/classNames";

import { Button, Steps, Logo, StepCard } from "../../..";

type DefaultStep = {
  title: string;
  containerClassname?: string;
  contentClassname?: string;
  description: string;
  content?: ((setIsLoading: Dispatch<SetStateAction<boolean>>) => JSX.Element) | JSX.Element;
  isEnabled?: boolean;
  isLoading?: boolean;
};

function WizardForm<T extends DefaultStep>(props: {
  href: string;
  steps: T[];
  disableNavigation?: boolean;
  containerClassname?: string;
  prevLabel?: string;
  nextLabel?: string;
  finishLabel?: string;
  theme?: any;
  stepLabel?: React.ComponentProps<typeof Steps>["stepLabel"];
}) {
  const searchParams = useSearchParams();
  const {
    theme,
    href,
    steps,
    nextLabel = "Next",
    finishLabel = "Finish",
    prevLabel = "Back",
    stepLabel,
  } = props;
  const router = useRouter();
  const step = parseInt((searchParams?.get("step") as string) || "1");
  const currentStep = steps[step - 1];
  const setStep = (newStep: number) => {
    router.replace(`${href}?step=${newStep || 1}`);
  };
  const [currentStepIsLoading, setCurrentStepIsLoading] = useState(false);

  useEffect(() => {
    setCurrentStepIsLoading(false);
  }, [currentStep]);

  return (
    <div className="bg-muted  min-h-screen" data-testid="wizard-form">
      <div className="px- mx-auto py-10">
        <div className="relative">
          <div className={classNames("sm:mx-auto sm:w-full sm:max-w-[700px]", props.containerClassname)}>
            {theme != null && (
              <div className="flex w-full items-center justify-center">
                <Logo theme={theme} small inline={false} className="mb-aut mx-auto" />
              </div>
            )}

            <div className="mx-aut sm:max-w-full">
              <h1 className="text-emphasis mb-3 text-2xl font-black capitalize" data-testid="step-title">
                {currentStep.title}
              </h1>
              <p className="text-default text-sm" data-testid="step-description">
                {currentStep.description}
              </p>
              {!props.disableNavigation && (
                <Steps
                  maxSteps={steps.length}
                  currentStep={step}
                  navigateToStep={noop}
                  stepLabel={stepLabel}
                  data-testid="wizard-step-component"
                />
              )}
            </div>

            {/* <div className={classNames("mb-8 overflow-hidden md:w-[700px]", props.containerClassname)}> */}
            <StepCard>
              <div className={classNames("", currentStep.contentClassname)}>
                {typeof currentStep.content === "function"
                  ? currentStep.content(setCurrentStepIsLoading)
                  : currentStep.content}
              </div>
              {!props.disableNavigation && (
                <div className="flex justify-end pt-5 print:hidden">
                  {step > 1 && (
                    <Button
                      color="secondary"
                      onClick={() => {
                        setStep(step - 1);
                      }}>
                      {prevLabel}
                    </Button>
                  )}

                  <Button
                    tabIndex={0}
                    loading={currentStepIsLoading}
                    type="submit"
                    color="primary"
                    form={`wizard-step-${step}`}
                    disabled={currentStep.isEnabled === false}
                    className="relative ml-2">
                    {step < steps.length ? nextLabel : finishLabel}
                  </Button>
                </div>
              )}
            </StepCard>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WizardForm;
