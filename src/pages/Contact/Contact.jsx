import { useId } from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../validations/contactValidations";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  const id = useId();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("Los datos a enviar son: ", data);
  };

  const onError = (errors) => {
    console.log("Errores: ", errors);
    alert("Por favor, llena los campos correctamente");
  };

  return (
    <div className="contact" id="contact">
      <h1 className="contact__title">Contáctame</h1>

      <form
        className="contact__form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
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
