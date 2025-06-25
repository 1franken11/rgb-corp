import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFlip } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import 'swiper/css/autoplay';
import '../FirstSection/FirstSection.css';
import { SlideData } from './SlideData';
import { useTranslations, type Language } from '../../i18n/utils';

type Props = {
  lang?: Language;
};

const FirstSection: React.FC<Props> = ({ lang }) => {
  const t = useTranslations(lang || 'en');
  return (
    <section id="first-section" className="firstSection">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFlip]}
        effect="flip"
        flipEffect={{
          slideShadows: true,
          limitRotation: true,
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        speed={900}
        pagination={{ clickable: true }}
        navigation={true}
        className="swiper-main"
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 }
        }}
      >
        {SlideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-image-container">
              <img
                src={slide.srcSet["16x9"]}
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