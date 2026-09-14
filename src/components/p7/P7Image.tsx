import type { ImgHTMLAttributes } from 'react';

import edificio640 from '@/assets/p7/edificio_externo-640.webp.asset.json';
import edificio1280 from '@/assets/p7/edificio_externo-1280.webp.asset.json';
import lounge640 from '@/assets/p7/lounge-640.webp.asset.json';
import lounge1280 from '@/assets/p7/lounge-1280.webp.asset.json';
import transmissao640 from '@/assets/p7/transmissao_ao_vivo-640.webp.asset.json';
import transmissao1280 from '@/assets/p7/transmissao_ao_vivo-1280.webp.asset.json';
import chroma640 from '@/assets/p7/chroma_key-640.webp.asset.json';
import chroma1280 from '@/assets/p7/chroma_key-1280.webp.asset.json';
import estacoes640 from '@/assets/p7/IMG_6401-640.webp.asset.json';
import estacoes1280 from '@/assets/p7/IMG_6401-1280.webp.asset.json';
import networking640 from '@/assets/p7/IMG_6394-640.webp.asset.json';
import networking1280 from '@/assets/p7/IMG_6394-1280.webp.asset.json';
import salas640 from '@/assets/p7/IMG_6412-640.webp.asset.json';
import salas1280 from '@/assets/p7/IMG_6412-1280.webp.asset.json';
import auditorio640 from '@/assets/p7/IMG_6405-640.webp.asset.json';
import auditorio1280 from '@/assets/p7/IMG_6405-1280.webp.asset.json';

const images = {
  edificio: [edificio640.url, edificio1280.url],
  lounge: [lounge640.url, lounge1280.url],
  transmissao: [transmissao640.url, transmissao1280.url],
  chroma: [chroma640.url, chroma1280.url],
  estacoes: [estacoes640.url, estacoes1280.url],
  networking: [networking640.url, networking1280.url],
  salas: [salas640.url, salas1280.url],
  auditorio: [auditorio640.url, auditorio1280.url],
} as const;

type P7ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  image: keyof typeof images;
};

export const P7Image = ({ image, sizes = '(max-width: 700px) 100vw, 720px', ...props }: P7ImageProps) => {
  const [small, large] = images[image];
  return <img src={large} srcSet={`${small} 640w, ${large} 1280w`} sizes={sizes} {...props} />;
};