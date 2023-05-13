import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function CardCarousel() {
    return (
        <Swiper
          slidePrevClass={4}
          spaceBetween = {20}
          freeMode = {true}
          pagination={{
            clickable: true,
          }}
          modules = {[FreeMode, Pagination]}
          className = "mySwiper"
          >
            
            <SwiperSlide>
              <div>
                <h2>hello </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque magnam temporibus beatae adipisci quia, officiis ipsa? Ratione saepe, consequuntur harum impedit aperiam magnam. Architecto laborum voluptates consequuntur corrupti impedit est.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h2>hello2 </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque magnam temporibus beatae adipisci quia, officiis ipsa? Ratione saepe, consequuntur harum impedit aperiam magnam. Architecto laborum voluptates consequuntur corrupti impedit est.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h2>hello3 </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque magnam temporibus beatae adipisci quia, officiis ipsa? Ratione saepe, consequuntur harum impedit aperiam magnam. Architecto laborum voluptates consequuntur corrupti impedit est.</p>
              </div>
            </SwiperSlide>

        </Swiper>
    )
}

export default CardCarousel