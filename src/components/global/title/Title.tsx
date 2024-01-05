"use client";
import React, { FC } from "react";
import Header from "../header/Header";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";

interface TitleProps {
  backgroundImage: string;
  showBorder: boolean;
  title: string;
  subtitle: string;
}

const Title: FC<TitleProps> = ({
  backgroundImage,
  showBorder,
  title,
  subtitle,
}) => {
  return (
    <Slide direction="down">
      <section aria-labelledby="section-team" className="relative w-full h-80">
        <Header showBorder={showBorder} />
        <Image
          src={backgroundImage}
          alt="Imagen de fondo"
          layout="fill"
          style={{
            objectFit: "cover", // cover, contain, none
          }}
          className="absolute z-20 brightness-50" // La imagen de fondo con opacidad
        />
        <div className="relative z-30 flex-col">
          <h1 className="font-merriweather text-3xl font-black pt-16 text-center">
            {title}
          </h1>
          <h2 className="font-merriweather text-3xl text-center font-light">
            {subtitle}
          </h2>
        </div>
      </section>
    </Slide>
  );
};

export default Title;
