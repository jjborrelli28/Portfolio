import emailjs from "@emailjs/browser";
import { fadeAnimation } from "@space-ui/animations";
import { css as classCreator, styled } from "@space-ui/config";
import {
  BaseForm,
  Button,
  Icon,
  InputText,
  InputTextArea,
} from "@space-ui/core";
import type * as Stitches from "@stitches/react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useReducer, useRef } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { constants } from "../constants";
import { changeAlert, changeValues } from "./management/actions";
import { initialState, reducer } from "./management/reducer";

export const ContactForm = ({
  serviceId,
  templateId,
  publicKey,
  className,
  css,
}: ContactFormProps) => {
  const { locale } = useRouter();
  const [{ values, alert }, dispatch]: any = useReducer<any>(
    reducer,
    initialState
  );

  const { fullName, email, message } = values;

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    dispatch(changeAlert({ loading: true, load: false, message: "" }));

    if (email === constants.emails.successEmail) {
      return setTimeout(() => {
        dispatch(
          changeAlert({
            loading: false,
            load: true,
            type: "success",
            message: "Your message was sent",
          })
        );
      }, 1000);
    } else if (email === constants.emails.errorEmail) {
      return setTimeout(() => {
        dispatch(
          changeAlert({
            loading: false,
            load: true,
            type: "error",
            message: "Error sending message",
          })
        );
      }, 1000);
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current || "", publicKey)
      .then(
        () => {
          return setTimeout(() => {
            dispatch(
              changeAlert({
                loading: false,
                load: true,
                type: "success",
                message: "Your message was sent!",
              })
            );
          }, 1000);
        },
        (error) => {
          return setTimeout(() => {
            if (process.env.NODE_ENV === "development") {
              console.log(error);
            }

            return dispatch(
              changeAlert({
                loading: false,
                load: true,
                type: "error",
                message: "Error sending message",
              })
            );
          }, 1000);
        }
      );
  };

  return (
    <>
      <BaseForm
        ref={formRef}
        css={css}
        onSubmit={(e) => {
          sendEmail(e);
        }}
        className={clsx(
          classCreator({
            "@bp2": {
              maxw: "83%",
            },
          }).toString(),
          alert.load &&
            fadeAnimation({
              type: "out",
              time: 1000,
            }),
          className
        )}
      >
        <InputText
          type="text"
          id="fullName"
          name="fullName"
          label={locale === "es" ? "Nombre y Apellido:" : "Full Name:"}
          value={fullName}
          onChange={({ target }: any) => dispatch(changeValues(target))}
          minLength={3}
          maxLength={25}
          pattern={constants.patterns.name}
          readOnly={alert.loading || alert.load || false}
          disabled={alert.loading || alert.load || false}
          required
        />
        <InputText
          type="email"
          id="email"
          name="email"
          label="Email:"
          value={email}
          onChange={({ target }: any) => dispatch(changeValues(target))}
          pattern={constants.patterns.email}
          readOnly={alert.loading || alert.load || false}
          disabled={alert.loading || alert.load || false}
          required
        />
        <InputTextArea
          id="message"
          name="message"
          label={locale === "es" ? "Mensaje:" : "Message:"}
          value={message}
          onChange={({ target }: any) => dispatch(changeValues(target))}
          minLength={14}
          maxLength={400}
          readOnly={alert.loading || alert.load || false}
          disabled={alert.loading || alert.load || false}
          required
        />
        <Button type="submit" size="md" loading={alert.loading}>
          {locale === "es" ? "Enviar" : "Send"}&nbsp;
          <Icon type="send" />
          {alert.type === "success" && (
            <ConfettiExplosion
              {...{
                force: 0.8,
                duration: 3000,
                particleCount: 250,
                width: 1600,
              }}
            />
          )}
        </Button>
      </BaseForm>

      <Alert
        type={alert.type}
        className={
          alert.load &&
          fadeAnimation({
            type: "in",
            time: 1000,
          })
        }
      >
        {alert.message}&nbsp;
        <Icon
          type={alert.type}
          className={classCreator({ verticalAlign: "middle" }).toString()}
        />
      </Alert>
    </>
  );
};

const Alert = styled("p", {
  color: "$fontPrimary",
  position: "absolute",
  top: "0",
  left: "0",

  "@bp2": {
    maxw: "50%",
    fontSize: "$16",
  },

  variants: {
    type: {
      success: {
        fontWeight: "$4",
        fontSize: "$8",
        color: "$success",

        "@bp2": {
          fontSize: "$13",
        },
      },
      warning: {
        color: "$warning",
      },
      error: {
        color: "$error",
        fontSize: "$8",
      },
      info: {
        color: "$info",
      },
      default: {
        color: "$fontPrimary",
      },
    },
  },
});

type ContactFormProps = {
  serviceId: string;
  templateId: string;
  publicKey: string;
  className?: string;
  css?: Stitches.CSS;
};
