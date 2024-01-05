"use client";
import { Alert, AlertColor, CircularProgress, Snackbar } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  email: string;
}
const FooterSuscribe = () => {
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
    <section
      aria-labelledby="footer-suscribe"
      className="flex flex-col space-y-4 w-full sm:w-1/4"
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
      <h2 id="footer-suscribe" className="font-bold text-lg">
        SUSCRÍBETE
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
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
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-secondary text-white shadow-2xl shadow-secondary py-2 sm:py-1 px-6 sm:px-4 text-sm sm:text-base rounded"
          >
            {isSubmitting ? (
              <CircularProgress color="inherit" size={24} />
            ) : (
              "Enviar"
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default FooterSuscribe;
