import { useState } from 'react';
import type { Language } from '../../i18n/utils';

interface FlooringType {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface Props {
  lang: Language;
  translations: {
    title: string;
    sections: Array<{
      title: string;
      description: string;
      image: string;
    }>;
  };
}

const FLOORING_FEATURES = {
  wood: ['Durabilidad y resistencia', 'Elegancia natural', 'Valor añadido'],
  laminate: ['Durabilidad', 'Fácil mantenimiento', 'Variedad de estilos'],
  vinyl: ['Resistente al agua', 'Versatilidad', 'Confort'],
  tile: ['Durabilidad', 'Versatilidad', 'Fácil mantenimiento']
} as const;

export default function FlooringSectionInteractive({ lang, translations }: Props) {
  const [selectedFlooring, setSelectedFlooring] = useState<FlooringType | null>(null);

  const floorings: FlooringType[] = translations.sections.map((section, index) => {
    const id = ['wood', 'laminate', 'vinyl', 'tile'][index] as keyof typeof FLOORING_FEATURES;

    return {
      id,
      title: section.title,
      description: section.description,
      image: section.image,
      features: [...FLOORING_FEATURES[id]]
    };
  });

  return (
    <section className="flooring-section">
      <div className="flooring-sections">
        <div className="flooring-bg-overlay" id="flooring-bg"></div>
        <h2 className="flooring-title">{translations.title}</h2>
        <div className="flooring-grid">
          {floorings.map((flooring) => (
            <div 
              key={flooring.id}
              className="flooring-card" 
              onClick={() => setSelectedFlooring(flooring)}
            >
              <img src={flooring.image} alt={flooring.title} />
              <h3>{flooring.title}</h3>
              <p>{flooring.description}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedFlooring && (
        <div className="modal-overlay" onClick={() => setSelectedFlooring(null)}>
          <div className="modal-card-two-columns" onClick={e => e.stopPropagation()}>
            <div className="modal-image">
              <img src={selectedFlooring.image} alt={selectedFlooring.title} />
            </div>
            <div className="modal-content">
              <button className="close-btn" onClick={() => setSelectedFlooring(null)}>×</button>
              <h2>{selectedFlooring.title}</h2>
              <p>{selectedFlooring.description}</p>
              <ul className="features-list">
                {selectedFlooring.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 