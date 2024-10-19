"use client";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert, AlertColor, Snackbar } from "@mui/material";
import React, { useState } from "react";
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
    reset,
  } = useForm<IFormInput>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openAlert, setOpenAlert] = useState({
    open: false,
    type: "success",
    message: "¡Suscripción exitosa!",
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.message === "Suscripción exitosa") {
        setOpenAlert({
          open: true,
          type: "success",
          message: "¡Suscripción exitosa!",
        });
        reset();
      } else {
        setOpenAlert({
          open: true,
          type: "error",
          message: "¡Ha ocurrido un error intentalo de nuevo!",
        });
      }
      // Manejar la respuesta aquí (mostrar mensaje de éxito/error)
    } catch (error) {
      setIsSubmitting(false);
      setOpenAlert({
        open: true,
        type: "error",
        message: "¡Ha ocurrido un error intentalo de nuevo!",
      });
      // Manejar errores de la solicitud aquí
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setOpenAlert({ open: false, type: "success", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 bg-white bg-opacity-80 border border-primary text-primary rounded-lg p-8 mx-auto"
    >
      <Snackbar
        open={openAlert.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={openAlert.type as AlertColor}
          sx={{ width: "100%" }}
        >
          {openAlert.message}
        </Alert>
      </Snackbar>
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
        disabled={isSubmitting}
        className="bg-secondary py-2 w-full rounded-lg text-white font-bold mt-8"
      >
        {isSubmitting ? (
          <CircularProgress color="inherit" size={24} />
        ) : (
          "Enviar"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
