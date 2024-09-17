import { css } from "@space-ui/config";
import { InputContainer, InputLabel } from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import { useCallback, useState } from "react";

export const InputText = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  minLength,
  maxLength,
  pattern,
  required,
  readOnly = false,
  disabled = false,
  autoComplete = "off",
  className,
  css,
}: InputProps) => {
  const [inFocus, setFocus] = useState(false);
  const [inBlur, setBlur] = useState(true);

  const focus = useCallback(() => {
    setFocus(true);
    setBlur(false);
  }, [inBlur]);

  const blur = useCallback(() => {
    setBlur(true);
    setFocus(false);
  }, [inFocus]);

  const labelSize = inFocus || value !== "" ? "sm" : "lg";

  return (
    <InputContainer className={className} css={css}>
      <InputLabel htmlFor={name} size={labelSize}>
        {label}
      </InputLabel>
      <input
        {...{
          id,
          name,
          type,
          placeholder,
          value,
          onChange,
          minLength,
          maxLength,
          pattern,
          required,
          readOnly,
          disabled,
          autoComplete,
        }}
        autoComplete="off"
        onFocus={focus}
        onBlur={blur}
        className={baseStyles}
      />
    </InputContainer>
  );
};

const baseStyles = css({
  fontFamily: "$main",
  fontWeight: "$1",
  fontSize: "$13",
  color: "$fontPrimary",
  backgroundColor: "transparent",
  resize: "none",
  outline: "none",
  boxShadow: "none",
  appearance: "none",
  borderWidth: "0",
  boxSizing: "border-box",
  height: "100%",
  p: "0",
  b: "0",
  bb: "2px solid $lightGray",

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

type InputProps = {
  type: "text" | "email" | "password" | "number";
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: any;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  autoComplete?: "on" | "off";
  className?: string;
  css?: Stitches.CSS;
};
