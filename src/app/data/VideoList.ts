// src/app/data/VideoList.ts

export interface Video {
  id: number;
  src: string;
  image: string;
  description: string;
}

const videos: Video[] = [
  {
    id: 1,
    src: "/assets/video.mp4",
    image: "/assets/image/video.jpeg",
    description: "Traficante do Amor",
  },
  {
    id: 2,
    src: "/assets/video2.mp4", // Adicione um segundo vídeo na sua pasta public/assets
    image: "/assets/image/video2.jpg",
    description: "Eu sou Stefhany",
  },
];

export default videos;