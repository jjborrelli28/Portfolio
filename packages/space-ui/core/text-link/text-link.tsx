import { css } from "@space-ui/config";
import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";

export const TextLink = ({
  children,
  href,
  target = "_self",
  ariaLabel,
  className,
}: PropsWithChildren<TextLinkProps>) => {
  return (
    <Link href={href} target={target} data-href={href}>
      <a
        className={clsx(css({ cursor: "default" }).toString(), className)}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    </Link>
  );
};

type TextLinkProps = {
  href: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  ariaLabel: string;
  className?: string;
};
