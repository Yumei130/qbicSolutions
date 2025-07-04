"use client";

import { getImagePrefix } from "@/utils/utils";
import { useState, useEffect } from "react";

const images: string[] = [
  `${getImagePrefix()}images/brands/apple.svg`,
  `${getImagePrefix()}images/brands/cisco.svg`,
  `${getImagePrefix()}images/brands/dell.svg`,
  `${getImagePrefix()}images/brands/hp.svg`,
  `${getImagePrefix()}images/brands/huawei.svg`,
  `${getImagePrefix()}images/brands/intel.svg`,
  `${getImagePrefix()}images/brands/lenovo.svg`,
  `${getImagePrefix()}images/brands/lg.svg`,
  `${getImagePrefix()}images/brands/microsoft.svg`,
  `${getImagePrefix()}images/brands/samsung.svg`,
];

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-darkmode py-10 px-4" id="products">
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl">
        <p className="sm:text-40 text-30 font-medium text-primary mb-6 text-center pt-10">
          Productos Informáticos
        </p>
        <p className="text-center pb-12">
          Ofrecemos todo equipo de cómputo con las principales marcas.
        </p>
        <div className="relative h-[200px] sm:h-[300px] xl:h-[350px]  rounded-xl">
          {images.map((src, index) => {
            const isLenovo = src.includes("lenovo.svg");
            const isMicrosoft = src.includes("microsoft.svg");
            return (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className={`absolute w-full h-full object-contain transition-opacity duration-700 ease-in-out rounded-xl text-white bg-darkmode ${
                  index === current ? "opacity-100" : "opacity-0"
                } ${isLenovo || isMicrosoft ? "scale-75" : ""}`}
                style={{}}
              />
            );
          })}

          {/* Botones */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full text-lg"
            aria-label="Siguiente"
          >
            ›
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full ${
                  i === current ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Ir al slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
