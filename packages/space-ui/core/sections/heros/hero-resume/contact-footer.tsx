import { css, styled } from "@space-ui/config";

import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const ContactFooter = () => {
  const contacts = [
    {
      icon: <FaWhatsapp />,
      href: "https://api.whatsapp.com/send?phone=541130422242",
      text: "(+54) 11 3042-2242",
    },
    {
      icon: <MdOutlineEmail />,
      href: "mailto:jjborrelli28@gmail.com",
      text: "jjborrelli28@gmail.com",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/jjborrelli28",
      text: "github.com/jjborrelli28",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/jjborrelli",
      text: "linkedin.com/in/jjborrelli",
    },
  ];

  return (
    <ContactFooterContainer>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "space-between",
        }).toString()}
      >
        {contacts.slice(0, 2).map((contact, index) => (
          <ContactItem
            key={index}
            icon={contact.icon}
            href={contact.href}
            text={contact.text}
          />
        ))}
      </div>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "space-between",
        }).toString()}
      >
        {contacts.slice(2).map((contact, index) => (
          <ContactItem
            key={index}
            icon={contact.icon}
            href={contact.href}
            text={contact.text}
          />
        ))}
      </div>
    </ContactFooterContainer>
  );
};

const ContactItem = ({
  icon,
  href,
  text,
}: {
  icon: JSX.Element;
  href: string;
  text: string;
}) => (
  <p
    className={css({
      display: "flex",
      alignItems: "center",
      gap: "1mm",
      color: "$fontSecondary",
      my: "0 !important",
      "& a": {
        color: "$fontSecondary",
        fontWeight: "$4",
        fontSize: "$4",
        textDecoration: "none",
      },
    }).toString()}
  >
    {icon}
    <Link href={href}>{text}</Link>
  </p>
);

const ContactFooterContainer = styled("div", {
  gridColumn: "1 / -1",
  pt: "7.5mm",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  borderTop: "solid $fontSecondary 1mm",
});
