import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { RiMailSendLine } from "react-icons/ri";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineCode,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineSend,
  AiOutlineUser,
  AiOutlineWarning,
} from "react-icons/ai";

export const Icon = ({ type, className }: TypeProps) => {
  if (type === "home") {
    return <AiOutlineHome className={className} />;
  }

  if (type === "about") {
    return <AiOutlineUser className={className} />;
  }

  if (type === "skills") {
    return <AiOutlineCode className={className} />;
  }

  if (type === "projects") {
    return <AiOutlineFundProjectionScreen className={className} />;
  }

  if (type === "contact") {
    return <AiOutlineSend className={className} />;
  }

  if (type === "dark") {
    return <MdOutlineDarkMode className={className} />;
  }

  if (type === "light") {
    return <MdOutlineLightMode className={className} />;
  }

  if (type === "web") {
    return <CgWebsite className={className} />;
  }

  if (type === "github") {
    return <FaGithub className={className} />;
  }

  if (type === "arrow-down") {
    return <IoIosArrowDown className={className} />;
  }

  if (type === "send") {
    return <RiMailSendLine className={className} />;
  }

  if (type === "success") {
    return <AiOutlineCheckCircle className={className} />;
  }

  if (type === "warning") {
    return <AiOutlineWarning className={className} />;
  }

  if (type === "error") {
    return <AiOutlineCloseCircle className={className} />;
  }

  if (type === "info") {
    return <AiOutlineInfoCircle className={className} />;
  }

  if (type === "linkedin") {
    return <FaLinkedin className={className} />;
  }

  if (type === "telegram") {
    return <FaTelegram className={className} />;
  }

  if (type === undefined) {
    return null;
  }

  return null;
};

type TypeProps = {
  type: string | undefined;
  className?: string;
};
