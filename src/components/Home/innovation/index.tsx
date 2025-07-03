const Inovation = () => {
  return (
    <section className="grid md:grid-cols-2 gap-8">
      {/* Sector Público y Educación */}
      <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl shadow-md border border-white/10 hover:scale-[1.02] transition-all duration-300 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h3 className="text-primary text-2xl font-bold mb-4 flex items-center gap-2">
            🏛️ Sector Público y Educación
          </h3>
          <ul className="text-muted text-base space-y-2 list-inside list-disc pl-4 mb-4">
            <li>Administraciones Locales</li>
            <li>Educación</li>
            <li>Sanidad y Salud Pública</li>
          </ul>
        </div>
        <img
          src="/images/sectores/publico.jpg"
          alt="Sector Público"
          className="w-1/3 rounded-lg object-cover h-40"
        />
      </div>

      {/* Sector Empresarial */}
      <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl shadow-md border border-white/10 hover:scale-[1.02] transition-all duration-300 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h3 className="text-primary text-2xl font-bold mb-4 flex items-center gap-2">
            💼 Sector Empresarial
          </h3>
          <ul className="text-muted text-base space-y-2 list-inside list-disc pl-4 mb-4">
            <li>Asesorías y Despachos Profesionales</li>
            <li>Finanzas y Seguros</li>
            <li>Industria</li>
            <li>Servicios</li>
          </ul>
        </div>
        <img
          src="/images/sectores/empresarial.jpg"
          alt="Sector Empresarial"
          className="w-1/3 rounded-lg object-cover h-40"
        />
      </div>

      {/* Tecnología y Comunicación */}
      <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl shadow-md border border-white/10 hover:scale-[1.02] transition-all duration-300 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h3 className="text-primary text-2xl font-bold mb-4 flex items-center gap-2">
            🌐 Tecnología y Comunicación
          </h3>
          <ul className="text-muted text-base space-y-2 list-inside list-disc pl-4 mb-4">
            <li>Ingenierías, Tecnologías y Utilities</li>
            <li>Internet y Contenidos</li>
          </ul>
        </div>
        <img
          src="/images/sectores/tecnologia.jpg"
          alt="Tecnología y Comunicación"
          className="w-1/3 rounded-lg object-cover h-40"
        />
      </div>

      {/* Comercio y Consumo */}
      <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl shadow-md border border-white/10 hover:scale-[1.02] transition-all duration-300 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h3 className="text-primary text-2xl font-bold mb-4 flex items-center gap-2">
            🛒 Comercio y Consumo
          </h3>
          <ul className="text-muted text-base space-y-2 list-inside list-disc pl-4 mb-4">
            <li>Comercio y Distribución</li>
            <li>Turismo y Ocio</li>
            <li>Logística y Transporte</li>
            <li>Asociaciones y Fundaciones</li>
          </ul>
        </div>
        <img
          src="/images/sectores/comercio.jpg"
          alt="Comercio y Consumo"
          className="w-1/3 rounded-lg object-cover h-40"
        />
      </div>
    </section>
  );
};

export default Inovation;
