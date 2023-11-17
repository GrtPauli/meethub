import classNames from "@calcom/lib/classNames";

export default function Logo({
  small,
  icon,
  inline = true,
  className,
  src = "/api/logo",
  theme,
}: {
  small?: boolean;
  icon?: boolean;
  inline?: boolean;
  className?: string;
  src?: string;
  theme?: any;
}) {
  return (
    <h3 className={classNames("logo", inline && "inline", className)}>
      <strong>
        {icon ? (
          <img className="dark:inver mx-auto w-9" alt="Cal" title="Cal" src={`${src}?type=icon`} />
        ) : (
          <>
            {theme != "dark" ? (
              <img
                className={classNames(small ? "h-16 w-auto" : "h-20 w-auto")}
                alt="Cal"
                title="Cal"
                src={`${src}?type=logodark`}
              />
            ) : (
              <img
                className={classNames(small ? "h-16 w-auto" : "h-20 w-auto")}
                alt="Cal"
                title="Cal"
                src={src}
              />
            )}
          </>
        )}
      </strong>
    </h3>
  );
}
