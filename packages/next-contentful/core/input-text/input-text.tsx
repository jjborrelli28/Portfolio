import { useCallback, useState } from "react";
import { InputContainer, InputLabel } from "~next-contentful/core";
import { css as styles } from "~next-contentful/config";
import clsx from "clsx";

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
    <InputContainer>
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
        className={clsx(baseStyles, { [styles(css)()]: css })}
      />
    </InputContainer>
  );
};

const baseStyles = styles({
  fontFamily: "$main",
  fontWeight: "$1",
  fontSize: "$5",
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
  css?: any;
};
