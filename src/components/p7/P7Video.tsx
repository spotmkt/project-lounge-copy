type P7VideoProps = {
  videoId: string;
  title: string;
  vertical?: boolean;
};

export const P7Video = ({ videoId, title, vertical = false }: P7VideoProps) => (
  <div className={`p7-video${vertical ? ' p7-video-vertical' : ''}`}>
    <iframe
      src={`https://player-vz-975cc2b9-7ad.tv.pandavideo.com.br/embed/?autoplay=0&v=${videoId}`}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);