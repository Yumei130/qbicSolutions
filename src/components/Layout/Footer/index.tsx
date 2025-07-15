import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-darkmode text-white">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-16">
          {/* Logo y Redes */}
          <div className="flex flex-col">
            <Logo />
            <div className="flex gap-6 items-center mt-6">
              <Link
                href="https://www.facebook.com/profile.php?id=61578089975459"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
              <Link href="#" className="group">
                <Icon
                  icon="fa6-brands:instagram"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
              <Link href="#" className="group">
                <Icon
                  icon="fa6-brands:x-twitter"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
            </div>
            <p className="mt-12 text-sm text-white/60">
              © 2025 QbicSolutions. Todos los derechos reservados.
            </p>
          </div>

          {/* Enlaces */}
          <div className="ms-14">
            <h4 className="text-white mb-4 font-semibold text-xl">Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-3">
                  <Link
                    href={item.href}
                    className="text-white hover:text-primary text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white mb-4 font-semibold text-xl">Contacto</h4>
            <p className="mb-4 text-base leading-relaxed">
              <strong>Dirección: </strong>
              Blvd Gustavo Díaz Ordaz No.1480 Local 2, Col. Reynosa,
              <br />
              Tijuana, Baja California, México CP 22106
            </p>
            <p className="mb-2">
              <strong>Tel: </strong> 664-491-5625
            </p>
            <p>
              <strong>Email: </strong>
              <a
                href="mailto:sistemas@qsg.mx"
                className="hover:text-primary underline"
              >
                sistemas@qsg.mx
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
