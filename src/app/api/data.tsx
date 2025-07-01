import { title } from "process";

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Terms", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Latest News", herf: "#" },
];

export const pricedeta: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Bitcoin",
    short: "BTC/USD",
    icon: "/images/icons/icon-bitcoin.svg",
    background: "bg-warning bg-opacity-20",
    price: "$93,291.24",
    mark: "$94,040.99 (-0.9%)",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Ethereum",
    short: "ETH/USD",
    icon: "/images/icons/icon-ethereum.svg",
    background: "bg-light_grey",
    price: "$3,128.84",
    mark: "$4,878.26 (-35.9%)",
    width: 18,
    height: 23,
    padding: "px-4 py-2",
  },
  {
    title: "Bitcoin Cash ",
    short: "BTC/USD",
    icon: "/images/icons/icon-bitcoin-circle.svg",
    background: "bg-warning bg-opacity-20",
    price: "$443.27",
    mark: "$3,785.82 (-88.3%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "Litecoin",
    short: "LTC/USD",
    icon: "/images/icons/icon-litecoin.svg",
    background: "bg-light_grey",
    price: "$86.11",
    mark: "$410.26 (-79.1%)",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Solana",
    short: "SOL/USD",
    icon: "/images/icons/icon-solana.svg",
    background: "bg-light_grey",
    price: "$238.70",
    mark: "$259.96 (-8.2%)",
    width: 24,
    height: 24,
    padding: "px-4 py-3",
  },
  {
    title: "Dogecoin",
    short: "DOGE/USD",
    icon: "/images/icons/icon-dogecoin.svg",
    background: "bg-light_grey",
    price: "$0.394",
    mark: "$0.7316 (-46.2%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: "/images/portfolio/icon-wallet.svg",
    title: "Manage your portfolio",
  },
  {
    image: "/images/portfolio/icon-vault.svg",
    title: "Vault protection",
  },
  {
    image: "/images/portfolio/icon-mobileapp.svg",
    title: "Mobile apps",
  },
];

export const qualityPolicy: { title: string }[] = [
  {
    title:
      "Satisfacción del cliente mediante el cumplimiento de especificaciones, plazos y precios acordados.",
  },
  { title: "Compromiso con la mejora continua de servicios y procesos." },
  {
    title:
      "Adaptación a cambios tecnológicos y del mercado para mantener la competitividad.",
  },
  { title: "Entrega puntual de productos y servicios." },
  {
    title:
      "Soluciones a precios competitivos, ajustadas a las necesidades del cliente.",
  },
  {
    title:
      "Capacitación constante del personal, tanto técnica como orientada a la calidad del servicio.",
  },
  {
    title:
      "Concienciación interna sobre la importancia del sistema de calidad.",
  },
  { title: "Relaciones estables con fabricantes líderes del sector." },
  {
    title:
      "Valor añadido mediante formación continua y colaboración en el desarrollo de productos.",
  },
  { title: "Partner certificado de empresas referentes del mercado." },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "/images/perks/icon-support.svg",
    title: "24/7 Support",
    text: "Need help? Get your requests solved quickly via support team.",
    space: "lg:mt-8",
  },
  {
    icon: "/images/perks/icon-community.svg",
    title: "Community",
    text: "Join the conversations on our worldwide OKEx communities",
    space: "lg:mt-14",
  },
  {
    icon: "/images/perks/icon-academy.svg",
    title: "Academy",
    text: "Learn blockchain and<br /> crypto for free.",
    space: "lg:mt-4",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/timeline/icon-planning.svg",
    title: "Desarrollo",
    text: "Creamos software a medida con la tecnología ideal.",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-refinement.svg",
    title: "GIS",
    text: "Soluciones para analizar y visualizar datos espaciales.",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/icon-prototype.svg",
    title: "Movilidad",
    text: "Apps móviles para vender más y trabajar mejor.",
    position: "md:top-72 md:left-0", // más separado
  },
  {
    icon: "/images/timeline/icon-support.svg",
    title: "Infraestructura",
    text: "Diseñamos y damos soporte a tu sistema informático.",
    position: "md:top-72 md:right-0", // más separado
  },
  {
    icon: "/images/timeline/icon-support.svg", // Asegúrate de tener este ícono
    title: "Consultoría",
    text: "Asesoramos para elegir las mejores soluciones IT.",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-support.svg", // Asegúrate de tener este ícono
    title: "Web & SEO",
    text: "Diseñamos tu web y mejoramos tu visibilidad online.",
    position: "md:bottom-0 md:right-0",
  },
];

export const CryptoData: { name: string; price: number }[] = [
  { name: "Bitcoin BTC/USD", price: 67646.84 },
  { name: "Ethereum ETH/USD", price: 2515.93 },
  { name: "Bitcoin Cash BTC/USD", price: 366.96 },
  { name: "Litecoin LTC/USD", price: 61504.54 },
];
