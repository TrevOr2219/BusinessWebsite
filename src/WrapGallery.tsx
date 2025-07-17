import { useEffect, useState } from 'react';
import { client } from './sanity.ts';

type Wrap = {
  title: string;
  description: string;
  after: string;
};

export default function WrapGallery() {
  const [wraps, setWraps] = useState<Wrap[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "wrap"]{
        title,
        description,
        "after": afterImage.asset->url
      }`)
      .then(setWraps);
  }, []);

  return (
    <div className="wrap-gallery">
      {wraps.map((wrap, i) => (
        <div key={i} className="wrap-card">
          <h3>{wrap.title}</h3>
          <img src={wrap.after} alt={wrap.title} className="wrap-img" />
          <p>{wrap.description}</p>
        </div>
      ))}
    </div>
  );
}
