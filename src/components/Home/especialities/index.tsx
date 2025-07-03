"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faCogs,
  faTasks,
  faLaptopCode,
  faProjectDiagram,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";

const TopAnimation = {
  initial: { y: -50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.6 },
  viewport: { once: false },
};

const BottomAnimation = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.6 },
  viewport: { once: false },
};

const SectoresEspecializacion = () => {
  const sectores = [
    { icon: faMobileAlt, text: "Apps móviles para Android e iOS" },
    { icon: faCogs, text: "Gestión empresarial (ERP / CRM)" },
    { icon: faTasks, text: "Gestión de proyectos" },
    { icon: faLaptopCode, text: "Desarrollo web personalizado" },
    { icon: faProjectDiagram, text: "Integraciones y automatización" },
    { icon: faPuzzlePiece, text: "Software a medida por sector" },
  ];

  return (
    <section className="py-20  text-white" id="sectores">
      <hr className="mb-36 mx-25" />
      <div className="container mx-auto px-4 lg:max-w-screen-xl">
        <div className="grid grid-cols-12 gap-10 items-start">
          <motion.div {...TopAnimation} className="lg:col-span-5 col-span-12">
            <h2 className="sm:text-40 text-30 font-medium text-primary mb-6">
              Sectores de Especialización
            </h2>
            <p className="text-muted text-18 leading-relaxed">
              Llevamos nuestra experiencia tecnológica a distintos sectores,
              ofreciendo soluciones personalizadas y alineadas con las
              necesidades específicas de cada área.
            </p>
            <p className="text-muted text-18 mt-4 leading-relaxed">
              Nuestro objetivo es ayudar a las organizaciones a impulsar su
              productividad y mejorar los servicios que ofrecen a sus propios
              clientes.
            </p>
          </motion.div>

          <motion.div
            {...BottomAnimation}
            className="lg:col-span-7 col-span-12"
          >
            <p className="text-muted text-18 mb-6 leading-relaxed">
              Contamos con unidades de negocio especializadas que trabajan de
              forma independiente pero complementaria, para brindar soluciones
              tecnológicas a medida según el sector.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {sectores.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="px-4 py-4 bg-light_grey bg-opacity-20 rounded-full">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-primary text-2xl"
                    />
                  </div>
                  <p className="text-18 text-white">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-muted text-18 mt-8 leading-relaxed">
              Siempre con la vista puesta en la innovación, diseñamos
              herramientas que se adaptan perfectamente a las particularidades
              de cada cliente y sector.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectoresEspecializacion;
