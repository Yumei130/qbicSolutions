"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Work = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
    viewport: { once: false },
  };

  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
    viewport: { once: false },
  };

  const services = [
    {
      icon: "/images/icons/icon-consulting.svg",
      text: "Blockchain Consulting",
    },
    {
      icon: "/images/icons/icon-blockchain.svg",
      text: "Blockchain Solutions",
    },
    {
      icon: "/images/icons/icon-Services.svg",
      text: "Custom Development",
    },
  ];

  return (
    <section className="md:pt-28" id="contpaq">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div ref={ref} className="grid grid-cols-12 items-center">
          <motion.div {...TopAnimation} className="lg:col-span-5 col-span-12">
            <div className="2xl:-ml-40 mt-9 flex justify-center">
              <Image
                src={`${getImagePrefix()}images/work/contpaq.png`}
                alt="image"
                width={600}
                height={425}
                className="lg:w-full"
              />
            </div>
          </motion.div>
          <motion.div
            {...bottomAnimation}
            className="lg:col-span-7 col-span-12"
          >
            <p className="sm:text-28 text-18 text-white">
              Potencia tu negocio con{" "}
              <span className="text-primary">CONTPAQi®</span>
            </p>
            <h2 className="sm:text-40 text-30 text-white font-medium mt-4">
              Soluciones inteligentes para contadores, despachos y PYMES.
            </h2>

            <p className="text-muted text-18 mt-6">
              En Qbic Solutions somos distribuidores autorizados de CONTPAQi®,
              el software favorito de contadores y empresarios en México.
              Optimiza tus procesos contables y administrativos con herramientas
              100 % alineadas al SAT.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {[
                "Ideal para contadores, despachos y PYMES",
                "Ahorra tiempo, cumple con el SAT y haz crecer tu negocio",
                "Tecnología y soporte 100 % mexicano, alinedo con las actualizaciones del SAT",
                "Lo mejor en gestión para tu negocio: Contabilidad, facturación, nómina, ventas y más..",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="px-4 py-4 bg-light_grey bg-opacity-20 rounded-full">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="w-7 h-7 text-primary"
                    />
                  </div>
                  <p className="text-18 text-white">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
