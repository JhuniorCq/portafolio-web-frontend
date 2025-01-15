import { useEffect, useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../validations/contactValidations";
import { MdEmail } from "react-icons/md";
import { usePost } from "../../hooks/usePost";
import MessageNotifications from "./utils/messageNotifications";
import { URL_SERVER } from "../../utils/constants";
import "./Contact.css";

export const Contact = () => {
  const id = useId();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });
  const { responsePost, loadingPost, errorPost, postData } = usePost();

  const onSubmit = async (data) => {
    console.log("Los datos a enviar son: ", data);
    await postData({
      url: `${URL_SERVER}/email/send`,
      body: {
        senderNames: data.names,
        emailSender: data.email,
        emailMessage: data.message,
      },
    });

    reset();
  };

  const onError = (errors) => {
    console.log("Errores: ", errors);
    MessageNotifications.incorrectValidations();
  };

  useEffect(() => {
    if (loadingPost) {
      MessageNotifications.loadingSending();
    }
  }, [loadingPost]);

  useEffect(() => {
    if (errorPost) {
      MessageNotifications.sendError({ message: errorPost });
    }
  }, [errorPost]);

  useEffect(() => {
    if (responsePost) {
      MessageNotifications.successfulSending();
    }
  }, [responsePost]);

  return (
    <div className="contact" id="contact">
      <h1 className="contact__title">Contáctame</h1>

      <form
        className="contact__form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="contact__input-group">
          <label htmlFor={`${id}-names`}>Nombres: </label>
          <input
            type="text"
            name="text"
            placeholder="Escribe tu nombre"
            id={`${id}-names`}
            className="contact__input"
            {...register("names")}
          />
          {errors.names && (
            <p className="contact__error-message">{errors.names.message}</p>
          )}
        </div>

        <div className="contact__input-group">
          <label htmlFor={`${id}-email`}>Correo: </label>
          <input
            type="text"
            name="email"
            placeholder="Escribe tu correo"
            id={`${id}-email`}
            className="contact__input"
            {...register("email")}
          />
          {errors.email && (
            <p className="contact__error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="contact__input-group">
          <label htmlFor={`${id}-message`}>Mensaje: </label>
          <textarea
            name="message"
            placeholder="Escribe tu mensaje"
            id={`${id}-message`}
            className="contact__textarea"
            rows={5}
            {...register("message")}
          ></textarea>
          {errors.message && (
            <p className="contact__error-message">{errors.message.message}</p>
          )}
        </div>

        <button className="contact__button">
          <MdEmail className="contact__email-icon" />
          <p>Enviar</p>
        </button>
      </form>
    </div>
  );
};
