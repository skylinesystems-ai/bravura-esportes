export const whatsappNumber = "559293975581";

export const createWhatsAppLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const productWhatsAppLink = (productName) =>
  createWhatsAppLink(
    `Olá, vim pelo site da Bravura Esportes e tenho interesse no produto: ${productName}.`,
  );

export const products = [
  {
    id: "brasil-2026",
    name: "Camisa Seleção Brasil 2026",
    category: "Seleção Brasileira",
    retailPrice: "R$ 200",
    wholesalePrice: "R$ 180 a partir de 2 peças",
    sizes: ["P", "M", "G", "GG"],
    tag: "Novo Drop",
    accent: "#12B76A",
  },
  {
    id: "flamengo-personalizada",
    name: "Camisa Flamengo Personalizada",
    category: "Times Nacionais",
    retailPrice: "R$ 200",
    wholesalePrice: "R$ 180 a partir de 2 peças",
    sizes: ["P", "M", "G", "GG"],
    tag: "Mais Vendida",
    accent: "#FF7A00",
  },
  {
    id: "vasco-conjunto",
    name: "Conjunto Vasco da Gama",
    category: "Times Nacionais",
    retailPrice: "R$ 220",
    wholesalePrice: "R$ 200 a partir de 2 peças",
    sizes: ["P", "M", "G", "GG"],
    tag: "Pronta Entrega",
    accent: "#F5F7FA",
  },
  {
    id: "dry-fit-performance",
    name: "Camisa Dry Fit Performance",
    category: "Conjuntos Dry Fit",
    retailPrice: "R$ 120",
    wholesalePrice: "R$ 100 a partir de 2 peças",
    sizes: ["P", "M", "G", "GG"],
    tag: "Performance",
    accent: "#12B76A",
  },
  {
    id: "retro-premium",
    name: "Camisa Retrô Premium",
    category: "Camisas Retrô",
    retailPrice: "R$ 190",
    wholesalePrice: "R$ 170 a partir de 2 peças",
    sizes: ["P", "M", "G", "GG"],
    tag: "Retrô",
    accent: "#C95700",
  },
  {
    id: "argentina",
    name: "Camisa Argentina",
    category: "Seleções",
    retailPrice: "R$ 200",
    wholesalePrice: "R$ 180 a partir de 2 peças",
    sizes: ["P", "M", "G", "GG"],
    tag: "Internacional",
    accent: "#F5F7FA",
  },
  {
    id: "real-madrid",
    name: "Camisa Real Madrid",
    category: "Times Internacionais",
    retailPrice: "R$ 210",
    wholesalePrice: "R$ 190 a partir de 2 peças",
    sizes: ["P", "M", "G", "GG"],
    tag: "Elite",
    accent: "#F5F7FA",
  },
  {
    id: "kit-camisa-short",
    name: "Kit Camisa + Short",
    category: "Conjuntos Dry Fit",
    retailPrice: "R$ 230",
    wholesalePrice: "R$ 210 a partir de 2 peças",
    sizes: ["P", "M", "G", "GG"],
    tag: "Kit Completo",
    accent: "#FF7A00",
  },
];

export const weeklyDropIds = [
  "brasil-2026",
  "flamengo-personalizada",
  "kit-camisa-short",
];
