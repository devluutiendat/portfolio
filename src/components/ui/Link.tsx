import NextLink from "next/link";
import type { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

const Link = ({
  href,
  newTab,
  ...rest
}: LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { newTab?: boolean }) => {
  const isInternalLink = href?.startsWith("/");
  const isAnchorLink = href?.startsWith("#");
  const className =
    "break-words hover:text-gray-200 dark:hover:text-primary-600";

  if (isInternalLink) {
    return <NextLink className={className} href={href} {...rest} />;
  }

  if (isAnchorLink) {
    return <a className={className} href={href} {...rest} />;
  }

  return (
    <a
      className={className}
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      {...rest}
    />
  );
};

export default Link;
