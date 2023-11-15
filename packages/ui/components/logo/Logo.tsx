import classNames from "@calcom/lib/classNames";

export default function Logo({
  small,
  icon,
  inline = true,
  className,
  src = "/api/logo",
  theme
}: {
  small?: boolean;
  icon?: boolean;
  inline?: boolean;
  className?: string;
  src?: string;
  theme?: any
}) {
  return (
    <h3 className={classNames("logo", inline && "inline", className)}>
      <strong>
        {icon ? (
          <img className="mx-auto w-9 dark:inver" alt="Cal" title="Cal" src={`${src}?type=icon`} />
        ) : (
          <>
            {theme != "dark" ? (
              <img
                className={classNames(small ? "h-20 w-auto" : "h-24 w-auto", "dark:inv")}
                alt="Cal"
                title="Cal"
                src={`${src}?type=logo-dark`}
              />
            ) : (
              <img
                className={classNames(small ? "h-20 w-auto" : "h-24 w-auto", "dark:inv")}
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
