export default function Inicio() {
  return (
    <section
      id="home"
      >   
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl font-bold text-white mb-4">
        Qbic - Soluciones Tecnológicas a la Medida
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mb-8">
        Consultoría, desarrollo de software, servicios informáticos y más.
      </p>
      <a href="#about-us" className="bg-primary text-white py-2 px-6 rounded-lg">
        Conócenos
      </a>
    </div>
    </section>
  );
}