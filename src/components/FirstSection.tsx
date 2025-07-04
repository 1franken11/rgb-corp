import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import './FirstSection.css';
import { SlideData } from './SlideData';
import { useTranslations, type Language } from '../i18n/utils';

type Props = {
  lang?: Language;
};

const FirstSection: React.FC<Props> = ({ lang }) => {
  const t = useTranslations(lang || 'en');
  const [imageSize, setImageSize] = useState('16x9');

  useEffect(() => {
    const updateImageSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const ratio = width / height;

      if (ratio <= 0.75) {
        setImageSize('9x16'); // Mobile portrait
      } else if (ratio <= 1) {
        setImageSize('1x1'); // Square
      } else if (ratio <= 1.33) {
        setImageSize('4x3'); // Tablet
      } else if (ratio <= 1.5) {
        setImageSize('3x2'); // Landscape tablet
      } else if (ratio <= 1.77) {
        setImageSize('16x9'); // Desktop
      } else {
        setImageSize('16x9'); // Wide desktop
      }
    };

    updateImageSize();
    window.addEventListener('resize', updateImageSize);
    return () => window.removeEventListener('resize', updateImageSize);
  }, []);

  return (
    <section id="first-section" className="firstSection">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        speed={900}
        pagination={{ clickable: true }}
        navigation={true}
        className="swiper-main"
        centeredSlides={true}
        slidesPerView="auto"
        breakpoints={{
          768: { slidesPerView: 1 },
          1200: { slidesPerView: 1 }
        }}
      >
        {SlideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-image-container">
              <img
                src={slide.srcSet[imageSize as keyof typeof slide.srcSet] || slide.srcSet["16x9"]}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="caption">
                {t(`SLIDES.${index}.caption`) || slide.alt}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FirstSection; 