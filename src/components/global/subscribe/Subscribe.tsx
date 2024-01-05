"use client";
import { Alert, AlertColor, CircularProgress, Snackbar } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  email: string;
}

const Subscribe = () => {
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
    <section className="bg-primary w-full h-96 flex flex-row items-center relative">
      <div className="absolute top-0 left-0 z-10">
        <Image
          src="/images/circle2.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="absolute bottom-0 right-0 z-10 rotate-180">
        <Image
          src="/images/circle2.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
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
      <div className="flex flex-col space-y-8 sm:space-y-0 sm:flex-row items-center justify-center w-full sm:w-[1200px] mx-auto">
        <div className="text-center sm:text-left">
          <span className="font-light text-sm sm:text-base">
            Obtén las actualizaciones del contenido primero
          </span>
          <h4 className="font-bold text-xl sm:text-3xl w-full sm:w-[580px]">
            Suscríbase para recibir nuestras últimas actualizaciones y noticias
            directamente en su bandeja de entrada.
          </h4>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row space-x-4"
        >
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            className="py-3 rounded px-3 text-black"
            placeholder="Correo electrónico"
          />
          {errors.email && typeof errors.email.message === "string" && (
            <p>{errors.email.message}</p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-secondary text-white shadow-2xl shadow-secondary py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base rounded"
          >
            {isSubmitting ? (
              <CircularProgress color="inherit" size={24} />
            ) : (
              "Enviar"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
