import Link from "next/link";
import { PropsWithChildren } from "react";

export const TextLink = ({
  children,
  href,
  target = "_self",
  ariaLabel,
}: PropsWithChildren<TextLinkProps>) => {
  return (
    <Link href={href} target={target} aria-label={ariaLabel} data-href={href}>
      {children}
    </Link>
  );
};

type TextLinkProps = {
  href: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  ariaLabel: string;
};
