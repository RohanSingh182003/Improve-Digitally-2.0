import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CommentCard from "./CommentCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const CommentsCrousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
  return (
    <div className="w-96 md:w-[34rem]">
        <Slider {...settings}>
          <CommentCard auth={'Rhett lewis'} />
          <CommentCard auth={'Lewis Phillip'} />
          <CommentCard auth={'Edward Kerl'} />
          <CommentCard auth={'Rhyan Renolds'} />
        </Slider>
    </div>
  );
};

export default CommentsCrousel;

const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className='ml-24 mt-8 font-extrabold text-2xl cursor-pointer'
      >
        <AiOutlineArrowRight/>
      </div>
    );
  }
  
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className='absolute bottom-0 ml-6 font-extrabold text-2xl cursor-pointer'
      >
        <AiOutlineArrowLeft/>
      </div>
    );
  }
