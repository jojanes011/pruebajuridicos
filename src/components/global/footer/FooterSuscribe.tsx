"use client";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  email: string;
}
const FooterSuscribe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log("data", data);
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
    <section
      aria-labelledby="footer-suscribe"
      className="flex flex-col space-y-4 w-full sm:w-1/4"
    >
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
            className="bg-secondary text-white shadow-2xl shadow-secondary py-2 sm:py-1 px-6 sm:px-4 text-sm sm:text-base rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default FooterSuscribe;
