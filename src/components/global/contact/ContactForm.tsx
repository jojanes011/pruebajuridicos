"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    // Aquí puedes añadir la lógica de envío del formulario, como enviar a una API.
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 bg-white border border-primary text-primary rounded-lg p-8 mx-auto"
    >
      <div className="flex flex-col space-y-2">
        <label className="font-bold" htmlFor="nombre">
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          className="rounded-lg border border-primary border-opacity-50 py-1 px-4"
          {...register("nombre", { required: "Este campo es obligatorio" })}
        />
        {errors.nombre && (
          <p className="error-message">{errors.nombre.message}</p>
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-bold" htmlFor="email">
          Correo Electrónico
        </label>
        <input
          id="email"
          type="email"
          className="rounded-lg border border-primary border-opacity-50 py-1 px-4"
          {...register("email", {
            required: "Este campo es obligatorio",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Correo electrónico no válido",
            },
          })}
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-bold" htmlFor="telefono">
          Teléfono
        </label>
        <input
          id="telefono"
          type="tel"
          className="rounded-lg border border-primary border-opacity-50 py-1 px-4"
          {...register("telefono", {
            required: "Este campo es obligatorio",
            pattern: {
              value: /^[0-9]+$/,
              message: "Solo números permitidos",
            },
          })}
        />
        {errors.telefono && (
          <p className="error-message">{errors.telefono.message}</p>
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-bold" htmlFor="mensaje">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          cols={6}
          className="rounded-lg border border-primary border-opacity-50 py-1 px-4 h-36"
          {...register("mensaje", { required: "Este campo es obligatorio" })}
        ></textarea>
        {errors.mensaje && (
          <p className="error-message">{errors.mensaje.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-secondary py-2 w-full rounded-lg text-white font-bold mt-8"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
