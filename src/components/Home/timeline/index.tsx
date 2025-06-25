"use client";
import Image from "next/image";
import { timelineData } from "@/app/api/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";

const TimeLine = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };
  return (
    <section className=" pt-9" id="development">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-16 px-4">
        <div className="text-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted sm:text-28 text-18 mb-9">
              Servicios <span className="text-primary">Informáticos</span>
            </p>
            <h2 className="text-white sm:text-28 text-18 font-medium lg:w-80% mx-auto mb-20">
              <span className="text-primary">Qbic</span> ofrece servicios
              informáticos eficientes y un servicio integral en distintas áreas
              de TI. Cuenta con unidades especializadas que brindan soluciones
              desde el diseño hasta el mantenimiento de sistemas, asegurando una
              planificación unificada y adaptada a los objetivos de cada
              cliente.
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:block hidden relative">
              <div>
                <Image
                  src={`${getImagePrefix()}images/timeline/img-timeline.png`}
                  alt="image"
                  width={1220}
                  height={1000}
                  className="w-80% mx-auto"
                />
              </div>
              <div className="absolute lg:top-20 top-16 lg:left-0 -left-20 w-72 flex items-center gap-6">
                <div className="text-right">
                  <h5 className="text-muted text-28 mb-3">Desarrollo</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    Creamos software a medida con tecnologías adaptadas a tu
                    negocio.
                  </p>
                </div>
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-2 h-fit rounded-full">
                  <Image
                    src={`${getImagePrefix()}images/timeline/icon-planning.svg`}
                    alt="Desarrollo"
                    width={44}
                    height={44}
                    className="w-16 h-16"
                  />
                </div>
              </div>
              {/*  */}
              <div className="absolute lg:top-20 top-16 lg:right-0 -right-20 w-72 flex items-center gap-6">
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm p-6 h-fit rounded-full">
                  <Image
                    src={`${getImagePrefix()}images/timeline/icon-refinement.svg`}
                    alt="GIS"
                    width={44}
                    height={44}
                  />
                </div>
                <div className="text-left">
                  <h5 className="text-muted text-28 mb-3">GIS</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    Analizamos y explotamos datos espaciales para decisiones
                    inteligentes.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="absolute lg:top-72 top-60 lg:left-[-32] -left-32 w-72 flex items-center gap-6">
                <div className="text-right">
                  <h5 className="text-muted text-28 mb-3">Movilidad</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    Apps móviles para vender más, trabajar mejor y tomar
                    control.
                  </p>
                </div>
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-2 h-fit rounded-full">
                  <Image
                    src={`${getImagePrefix()}images/timeline/icon-prototype.svg`}
                    alt="Movilidad"
                    width={44}
                    height={44}
                    className="w-16 h-16"
                  />
                </div>
              </div>
              {/*  */}
              <div className="absolute lg:top-72 top-60 lg:right-[-32] -right-32 w-72 flex items-center gap-6">
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-2 h-fit rounded-full">
                  <Image
                    src={`${getImagePrefix()}images/timeline/icon-support.svg`}
                    alt="Sistemas"
                    width={44}
                    height={44}
                    className="w-16 h-16"
                  />
                </div>
                <div className="text-left">
                  <h5 className="text-muted text-28 mb-3">Infraestructura</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    Diseñamos, gestionamos y damos soporte a tu infraestructura
                    IT.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="absolute lg:bottom-48 bottom-36 lg:left-0 -left-20 w-72 flex items-center gap-6">
                <div className="text-right">
                  <h5 className="text-muted text-28 mb-3">Consultoría</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    Asesoramos en tecnologías para impulsar tu rentabilidad.
                  </p>
                </div>
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-2 h-fit rounded-full">
                  <Image
                    src={`${getImagePrefix()}images/timeline/icon-support.svg`}
                    alt="Consultoría"
                    width={44}
                    height={44}
                    className="w-16 h-16"
                  />
                </div>
              </div>
              {/*  */}
              <div className="absolute lg:bottom-48 bottom-36 lg:right-0 -right-20 w-72 flex items-center gap-6">
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-2 h-fit rounded-full">
                  <Image
                    src={`${getImagePrefix()}images/timeline/icon-support.svg`}
                    alt="SEO"
                    width={44}
                    height={44}
                    className="w-16 h-16"
                  />
                </div>
                <div className="text-left">
                  <h5 className="text-muted text-28 mb-3">Presencia Online</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    Desarrollamos tu web y mejoramos tu visibilidad online.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 md:hidden">
              {timelineData.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="bg-light_grey bg-opacity-45 p-6 rounded-full">
                    <Image
                      src={`${getImagePrefix()}${item.icon}`}
                      alt={item.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className="text-start">
                    <h4 className="text-28 text-muted mb-2">{item.title}</h4>
                    <p className="text-muted text-opacity-60 text-18">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
