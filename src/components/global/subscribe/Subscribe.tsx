"use client";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  email: string;
}

const Subscribe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await fetch("/api/subscribe", {
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      // Manejar la respuesta aquí (mostrar mensaje de éxito/error)
    } catch (error) {
      console.error(error);
      // Manejar errores de la solicitud aquí
    }
  };
  return (
    <section className="bg-primary w-full h-96 flex flex-row items-center">
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
            className="bg-secondary text-white shadow-2xl shadow-secondary py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
