"use client";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { getImagePrefix } from "@/utils/utils";

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const BuyRef = useRef<HTMLDivElement>(null);
  const SellRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false);
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false);
      }
    },
    [BuyRef, SellRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    document.body.style.overflow = isBuying || isSelling ? "hidden" : "";
  }, [isBuying, isSelling]);

  // Animación controlada por scroll (que se repita)
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const isLeftInView = useInView(leftRef, { margin: "-100px" });
  const isRightInView = useInView(rightRef, { margin: "-100px" });

  useEffect(() => {
    if (isLeftInView) {
      leftControls.start({ x: 0, opacity: 1, transition: { duration: 0.6 } });
    } else {
      leftControls.start({ x: "-100%", opacity: 0 });
    }
  }, [isLeftInView, leftControls]);

  useEffect(() => {
    if (isRightInView) {
      rightControls.start({ x: 0, opacity: 1, transition: { duration: 0.6 } });
    } else {
      rightControls.start({ x: "100%", opacity: 0 });
    }
  }, [isRightInView, rightControls]);

  return (
    <section
      className="relative md:pt-40 md:pb-28 py-20  z-1" //overflow-hidden
      id="about-us"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid grid-cols-12">
          <motion.div
            ref={leftRef}
            initial={{ x: "-100%", opacity: 0 }}
            animate={leftControls}
            className="lg:col-span-5 col-span-12 z-10"
          >
            <div className="flex  items-center lg:justify-start justify-center mb-5 mt-24">
              <Image
                src={`${getImagePrefix()}images/icons/users.svg`}
                alt="icon"
                width={40}
                height={40}
                className="text-white invert"
              />
              <i className="fi fi-rr-users-alt"></i>
              <p className="text-white sm:text-28 text-18 mb-0">
                <span className="text-primary font-semibold">
                  ¿Quiénes somos?
                </span>
              </p>
            </div>
            <h1 className="font-medium text-22 text-justify text-white mb-10">
              <span className="text-primary">Qbic</span> es una compañía de
              consultoría y servicios en tecnologías de la Información. Somos
              una compañía en tecnologías de la información con más de 20 años
              de experiencia, nacida con el objetivo de desarrollar software a
              medida de las necesidades de cada negocio. Y todo ello con un
              equipo de profesionales.
            </h1>
            <div className="bg-dark_grey bg-opacity-70 p-6 rounded-lg shadow-lg mb-10">
              <h2 className="text-2xl font-semibold text-primary mb-4 text-center lg:text-start">
                Nuestro Compromiso
              </h2>
              <p className="text-white leading-relaxed text-justify">
                El compromiso con la calidad de nuestros productos y servicios
                se ha mantenido firme desde nuestros orígenes, concienciados de
                que los proyectos ejecutados con calidad son la mejor carta de
                presentación ante nuevos clientes y la principal forma de
                conservarlos.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={rightRef}
            initial={{ x: "100%", opacity: 0 }}
            animate={rightControls}
            className="col-span-12 lg:col-span-7 hidden lg:block"
          >
            <div className="ml-20 -mr-64 mt-20">
              <Image
                src={`${getImagePrefix()}images/hero/code.jpg`}
                alt="Banner"
                width={0}
                height={0}
                className="w-full h-auto lg:block hidden "
              />
            </div>
          </motion.div>
          <div className="absolute w-50 h-50 bg-gradient-to-t from-sky-700 to-darkmode blur-220 rounded-full -top-64 -right-14 -z-40"></div>
        </div>
      </div>

      {/* Buy Modal */}
      {/* {isBuying && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={BuyRef}
            className="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
          >
            <button
              onClick={() => setIsBuyingOpen(false)}
              className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close Buy Modal"
            >
              <Icon
                icon="tabler:currency-xrp"
                className="text-white hover:text-primary text-24 inline-block me-2"
              />
            </button>
            <BuyCrypto />
          </div>
        </div>
      )} */}

      {/* Sell Modal */}
      {/* {isSelling && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={SellRef}
            className="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
          >
            <button
              onClick={() => setIsSellingOpen(false)}
              className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close Sell Modal"
            >
              <Icon
                icon="tabler:currency-xrp"
                className="text-white hover:text-primary text-24 inline-block me-2"
              />
            </button>
            <SellCrypto />
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Hero;
