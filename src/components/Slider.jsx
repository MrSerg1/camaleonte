import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { images } from "../assets/sliders/index.js";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

const sliderData = [
  {
    imgSrc: images.img1,
    title: "Slide 1",
    description: "This is the first slide",
    categories: ["Category 1", "Category 2", "Category 3"],
  },
  {
    imgSrc: images.img2,
    title: "Slide 2",
    description: "This is the second slide",
    categories: ["Category A", "Category B"],
  },
  {
    imgSrc: images.img3,
    title: "Slide 3",
    description: "This is the third slide",
    categories: ["Category X", "Category Y", "Category Z"],
  },
  {
    imgSrc: images.img4,
    title: "Slide 4",
    description: "This is the fourth slide",
    categories: ["Category Alpha", "Category Beta"],
  },
  {
    imgSrc: images.img5,
    title: "Slide 5",
    description: "This is the fifth slide",
    categories: ["Category One", "Category Two", "Category Three"],
  },
  {
    imgSrc: images.img6,
    title: "Slide 6",
    description: "This is the sixth slide",
    categories: ["Category Red", "Category Blue"],
  },
];

export default function Slider() {
  return (
    <section className="hero-carousel">
      <div className="slider-wrapper">
        <div className="container">
          <Swiper
            modules={[Pagination]} // Tells to swiper which features we'll use
            grabCursor // Changes the cursor when hovering over the slider
            initialSlide={2} // Sets the initial slide.
            centeredSlides // Centers the active slide.
            slidesPerView="auto" // Sets the number of slides per view depending on the slider width.
            breakpoints={{
              320: {
                spaceBetween: 10,
              },
              768: {
                spaceBetween: 20,
              },
              1024: {
                spaceBetween: 30,
              },
            }}
            speed={800} // Transition speed.
            slideToClickedSlide // Allows to click on any slide to make it active.
            watchSlidesProgress
            pagination={{ clickable: true }} // Setting up the pagination, showing bullets and making them clickable.
          >
            {sliderData.map((slide, index) => (
              <SwiperSlide key={index}>
                <img src={slide.imgSrc} alt={slide.title} />
                <div className="title">
                  <h1>{slide.title}</h1>
                </div>
                <div className="content">
                  <div className="text-box">
                    <p>{slide.description}</p>
                  </div>
                  <div className="categories-box">
                    <div className="categories">
                      {slide.categories.map((category, idx) => (
                        <span key={idx} style={{ "--i": idx + 1 }}>
                          {category}
                        </span>
                      ))}
                    </div>
                    <button>
                      <span className="label">Ver Proyecto</span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
