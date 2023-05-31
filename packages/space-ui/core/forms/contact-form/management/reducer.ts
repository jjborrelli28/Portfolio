import { AlertAction, PersonalAction } from "./actions";

export const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case "alert":
      return {
        ...state,
        alert: {
          loading: action.payload.loading,
          load: action.payload.load,
          type: action.payload.type,
          message: action.payload.message,
        },
      };

    case action.type:
      return {
        ...state,
        values: { ...state.values, [action.type]: action.payload },
      };

    default:
      return state;
  }
};

export const initialState = {
  values: {
    fullName: "",
    email: "",
    message: "",
  },
  alert: {
    loading: false,
    load: false,
    type: "default",
    message: "",
  },
};

type ValuesProps = {
  fullName: string;
  email: string;
  message: string;
};

export type AlertProps = {
  loading: boolean;
  load: boolean;
  type?: "success" | "warning" | "info" | "error" | "default";
  message: string;
};

export type StateProps = {
  values: ValuesProps;
  alert: AlertProps;
};

export type ActionProps = PersonalAction | AlertAction;
