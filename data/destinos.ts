
export interface Destino {
  id: number;
  nome: string;
  imagem: string;
  descricao: string;
}

export const destinos: Destino[] = [
  {
    id: 1,
    nome: "Rio de Janeiro",
    imagem:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800",
    descricao: "Praias, montanhas e paisagens inesquecíveis."
  },
  {
    id: 2,
    nome: "Gramado",
    imagem:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
    descricao: "Clima aconchegante e belas paisagens."
  },
  {
    id: 3,
    nome: "Paris",
    imagem:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    descricao: "Cultura, gastronomia e a famosa Torre Eiffel."
  },
  {
    id: 4,
    nome: "Maldivas",
    imagem:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
    descricao: "Águas cristalinas e praias paradisíacas."
  }
];
