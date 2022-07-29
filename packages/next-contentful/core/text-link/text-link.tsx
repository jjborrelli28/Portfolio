import Link from "next/link";
import { ReactNode } from "react";

export const TextLink = ({
  children,
  href,
  target = "_self",
  ariaLabel,
}: TextLinkProps) => {
  return (
    <Link href={href}>
      <a target={target} aria-label={ariaLabel} data-href={href}>
        {children}
      </a>
    </Link>
  );
};

type TextLinkProps = {
  children: ReactNode;
  href: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  ariaLabel: string;
};
