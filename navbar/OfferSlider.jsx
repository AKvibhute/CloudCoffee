import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './OfferSlider.css';
import offer_1 from '../assets/offer_1.PNG';
import offer_2 from '../assets/offer_2.PNG';
import offer_3 from '../assets/offer_3.PNG';

const offers = [
  {
    id: 1,
    title: "Flat 45% Off",
    desc: "Macchiato + Latte",
    image: offer_1,
  },
  {
    id: 2,
    title: "Buy 2 get 1 free ",
    desc: "Ice tea (Any Flavour)",
    image: offer_2,
  },
  {
    id: 3,
    title: "First order",
    desc: "Free brownie with any Coffee on First Order",
    image: offer_3,
  },
];

const OfferSlider = () => {
  return (
    <div>
      <div> 
        <h1 className="offer-title">OFFERS</h1>
      </div>
    
    <div className="offer-slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      >
        {offers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <div className="offer-card">
              <img src={offer.image} alt={offer.title} />
              <div className="offer-text">
                <h3>{offer.title}</h3>
                <p>{offer.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default OfferSlider;
