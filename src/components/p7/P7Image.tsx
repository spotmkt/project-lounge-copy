import type { ImgHTMLAttributes } from 'react';

const images = {
  edificio: ['/images/optimized/edificio_externo-640.webp', '/images/optimized/edificio_externo-1280.webp'],
  lounge: ['/images/optimized/lounge-640.webp', '/images/optimized/lounge-1280.webp'],
  transmissao: ['/images/optimized/transmissao_ao_vivo-640.webp', '/images/optimized/transmissao_ao_vivo-1280.webp'],
  chroma: ['/images/optimized/chroma_key-640.webp', '/images/optimized/chroma_key-1280.webp'],
  estacoes: ['/images/optimized/IMG_6401-640.webp', '/images/optimized/IMG_6401-1280.webp'],
  networking: ['/images/optimized/IMG_6394-640.webp', '/images/optimized/IMG_6394-1280.webp'],
  salas: ['/images/optimized/IMG_6412-640.webp', '/images/optimized/IMG_6412-1280.webp'],
  auditorio: ['/images/optimized/IMG_6405-640.webp', '/images/optimized/IMG_6405-1280.webp'],
} as const;

type P7ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  image: keyof typeof images;
};

export const P7Image = ({ image, sizes = '(max-width: 700px) 100vw, 720px', ...props }: P7ImageProps) => {
  const [small, large] = images[image];
  return <img src={large} srcSet={`${small} 640w, ${large} 1280w`} sizes={sizes} {...props} />;
};