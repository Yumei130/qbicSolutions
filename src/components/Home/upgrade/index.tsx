import { qualityPolicy } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { getImagePrefix } from "@/utils/utils";

const Upgrade = () => {
  return (
    <section className="md:py-5 py-20" id="quality">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <p className="text-primary sm:text-40 text-30 mb-3">
          Política de Calidad
        </p>
        <p className="text-muted text-opacity-60 text-18 mb-7 text-justify">
          En Qbic, trabajamos con un firme compromiso hacia la satisfacción del
          cliente, cumpliendo con los más altos estándares de calidad, plazos y
          costos. Nuestra mejora continua, alianzas estratégicas con fabricantes
          líderes y la formación constante de nuestro equipo nos permiten
          ofrecer soluciones tecnológicas de alto valor y servicios confiables.
        </p>
        <div className="relative flex flex-col lg:flex-row justify-between gap-24">
          {/* Contenedor de texto y lista */}
          <div className="w-full lg:w-[70%]">
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 w-full">
              {qualityPolicy.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Icon
                    icon="la:check-circle-solid"
                    width="24"
                    height="24"
                    className="text-white mt-1 shrink-0"
                  />
                  <p className="text-18 text-muted text-opacity-60 leading-snug">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen en el espacio lateral */}
          <div className="hidden lg:flex justify-center w-[60%] items-center">
            <Image
              src={`${getImagePrefix()}images/upgrade/quality.png`}
              alt="image"
              width={625}
              height={580}
              className="h-[600px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;
