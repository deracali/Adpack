import React, { useEffect, useState } from "react";
import TestiMonialsDetails from "../TestiMonialsDetails/TestiMonialsDetails";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Founder from "../../../Images/homePage-img5.png";
import "./TestiMonials.css";

const TestiMonials = () => {
  const testiMonials = [
    {
      name: "Rekob Ramya",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg",
    },
    {
      name: "Brandon Savage",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/z7Kp6yr/np-file-33188.jpg",
    },
    {
      name: "Steve Burns",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg",
    },
    {
      name: "Kevin Canlas",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg",
    },
  ];
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section id="testimonial" className="testimonials pt-70 pb-70">
      <div className="container mt-5">
        <div className="Title">
          <h4 className="miniTitle text-center">Customer Stories</h4>
        </div>
        <div className="text-center textCenter">
          <h3 className="sectionTitle">Officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</h3>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options}
            >
              {testiMonials.length === 0 ? (
                <div class="item">
                  <div class="shadow-effect">
                    <img class="img-circle" src={Founder} />
                  </div>

                </div>
              ) : (
                testiMonials.map((testiMonialDetail) => {
                  return (
                    <TestiMonialsDetails
                      testiMonialDetail={testiMonialDetail}
                      key={testiMonialDetail._key}
                    />
                  );
                })
              )}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestiMonials;
