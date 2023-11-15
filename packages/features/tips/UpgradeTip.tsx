import type { ReactNode } from "react";

import { classNames } from "@calcom/lib";
import { useHasTeamPlan } from "@calcom/lib/hooks/useHasPaidPlan";
import { useLocale } from "@calcom/lib/hooks/useLocale";

export function UpgradeTip({
  dark,
  title,
  description,
  background,
  features,
  buttons,
  isParentLoading,
  children,
  theme,
  darkBackground,
  lightBackground
}: {
  dark?: boolean;
  title: string;
  description: string;
  /* overwrite EmptyScreen text */
  background?: string;
  features: Array<{ icon: JSX.Element; title: string; description: string }>;
  buttons?: JSX.Element;
  /**Chldren renders when the user is in a team */
  children: JSX.Element;
  isParentLoading?: ReactNode;
  theme?: any
  darkBackground?: string 
  lightBackground?: string
}) {
  const { t } = useLocale();
  const { isLoading, hasTeamPlan } = useHasTeamPlan();

  if (hasTeamPlan) return children;

  if (isLoading) return <>{isParentLoading}</>;

  return (
    <>
      <div className="relative flex min-h-[295px] w-full items-center justify-between overflow-hidden rounded-lg pb-">
        {theme == "dark" ? (
          <picture className="absolute min-h-[295px] w-full rounded-lg object-cover">
            <source srcSet={`${darkBackground}.jpg`} media="(prefers-color-scheme: dark)" />
            <img
              className="absolute min-h-[295px] w-full rounded-lg object-cover object-left md:object-center"
              src={`${darkBackground}.jpg`}
              loading="lazy"
              alt={title}
            />
          </picture>
        ) : (
          <picture className="absolute min-h-[295px] w-full rounded-lg object-cover">
            <source srcSet={`${lightBackground}.jpg`} media="(prefers-color-scheme: dark)" />
            <img
              className="absolute min-h-[295px] w-full rounded-lg object-cover object-left md:object-center"
              src={`${lightBackground}.jpg`}
              loading="lazy"
              alt={title}
            />
          </picture>
        )}

        <div className="relative my-4 px-5 sm:px-10">
          <h1 className={classNames("font-black text-3xl", "text-emphasis")}>{t(title)}</h1>
          <p className={classNames("mb-8 mt-4 max-w-sm", "text-default")}>
            {t(description)}
          </p>
          {buttons}
        </div>
      </div>

      <div className="mt-4 grid-cols-3 md:grid md:gap-4">
        {features.map((feature) => (
          <div key={feature.title} className="bg-muted mb-4 min-h-[180px] w-full rounded-md  p-8 md:mb-0">
            {feature.icon}
            <h2 className="font-cal text-emphasis mt-4 text-lg">{feature.title}</h2>
            <p className="text-default">{feature.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
