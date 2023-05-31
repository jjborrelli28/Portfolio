import { css } from "@space-ui/config";
import { InputContainer, InputLabel } from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import { useCallback, useState } from "react";

export const InputTextArea = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  minLength,
  maxLength,
  required,
  readOnly = false,
  disabled = false,
  autoComplete = "off",
  className,
  css,
}: TextAreaProps) => {
  const [inFocus, setFocus] = useState(false);
  const [inBlur, setBlur] = useState(true);

  const focus = useCallback(() => {
    setFocus(true);
    setBlur(false);
  }, [inFocus]);

  const blur = useCallback(() => {
    setBlur(true);
    setFocus(false);
  }, [inBlur]);

  const labelSize = inFocus || value !== "" ? "sm" : "lg";

  const handleKeyDown = (e: any) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <InputContainer className={className} css={css}>
      <InputLabel htmlFor={name} size={labelSize}>
        {label}
      </InputLabel>
      <textarea
        {...{
          id,
          name,
          value,
          onChange,
          placeholder,
          minLength,
          maxLength,
          required,
          readOnly,
          disabled,
          autoComplete,
        }}
        onFocus={focus}
        onBlur={blur}
        onKeyDown={handleKeyDown}
        className={baseStyles}
      />
    </InputContainer>
  );
};

const baseStyles = css({
  fontFamily: "$main",
  fontSize: "$7",
  color: "$fontPrimary",
  backgroundColor: "transparent",
  overflow: "hidden",
  resize: "none",
  outline: "none",
  boxShadow: "none",
  appearance: "none",
  boxSizing: "border-box",
  flexShrink: 0,
  h: "100%",
  w: "100%",
  b: "0",
  borderWidth: "0",
  borderBottom: "2px solid $lightGray",
  p: "0.3rem 0",

  "@bp2": {
    fontSize: "$7",
  },

  "&:focus": {
    borderColor: "$fontSecondary",
  },

  "&::placeholder": {
    color: "$lightGray",
  },
}).toString();

type TextAreaProps = {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: any;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  autoComplete?: "on" | "off";
  className?: string;
  css?: Stitches.CSS;
};
