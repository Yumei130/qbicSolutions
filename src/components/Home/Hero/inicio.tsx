import { getImagePrefix } from "@/utils/utils";

export default function Inicio() {
  const backgroundUrl = `${getImagePrefix()}images/hero/fondo.jpg`;

  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black bg-opacity-60">
        <h1 className="text-4xl font-bold text-white mb-4">
          Qbic - Soluciones Tecnológicas a la Medida
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          Consultoría, desarrollo de software, servicios informáticos y más.
        </p>
        <a
          href="#about-us"
          className="bg-primary text-white py-2 px-6 rounded-lg"
        >
          Conócenos
        </a>
      </div>
    </section>
  );
}
