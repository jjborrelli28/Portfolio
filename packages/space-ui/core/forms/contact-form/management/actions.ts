import { AlertProps } from "./reducer";

export const changeValues = (target: any) => {
  return {
    type: target.name as PersonalAction["type"],
    payload: target.value,
  };
};

export const changeAlert = ({ loading, load, type, message }: AlertProps) => {
  return {
    type: "alert" as AlertAction["type"],
    payload: {
      loading,
      load,
      type,
      message,
    },
  };
};

export type PersonalAction = {
  type: "fullName" | "email" | "message";
  payload: string;
};

export type AlertAction = {
  type: "alert";
  payload: AlertProps;
};
