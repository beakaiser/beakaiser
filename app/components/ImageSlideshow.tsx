"use client";

import React from 'react';
// Swiper React-Komponenten importieren
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper-Module importieren (Autoplay, Pagination und der weiche Fade-Effekt)
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Die Standard-Styles von Swiper laden
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const ImageSlideshow = () => {
  // Hier fügst du die Pfade zu deinen Behandlungs- oder Studiobildern ein
  const slides = [
    {
      url: 'kranich.jpg',
      title: 'Achtsamkeit & Raum',
    },
    {
      url: 'dampf.jpg',
      title: 'Zen Atmosphäre',
    },
    {
      url: 'lampe.jpg',
      title: 'Moderne Regeneration',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 mb-16 relative z-20">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-50 p-4 md:p-6">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect={'fade'} // Sorgt für ein luxuriöses, sanftes Überblenden statt hartem Wischen
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 4000, // Wechselt alle 4 Sekunden das Bild
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative w-full h-full">
              {/* Das Bild */}
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />

              {/* Dezentes Overlay für Text-Lesbarkeit */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Optionaler Text im Bild im Stil deiner Seite */}
              <div className="absolute bottom-8 left-8 right-8 z-10 text-white">
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/80 mb-2">
                  Longvity® Beauty
                </p>
                <h3 className="text-xl md:text-2xl font-serif tracking-wide">
                  {slide.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlideshow;
