import React from 'react'
import Slider from "react-slick";
import CompanyLogoImages from './CompanyLogoImages';
import companyImg1 from "../../assets/companyImg1.jpeg"
import companyImg2 from "../../assets/companyImg2.png"
import companyImg3 from "../../assets/companyImg3.jpeg"
import companyImg4 from "../../assets/companyImg4.jpeg"
import companyImg5 from "../../assets/companyImg5.png"
import companyImg6 from "../../assets/companyImg6.jpeg"
import companyImg7 from "../../assets/companyImg7.jpeg"
import companyImg8 from "../../assets/companyImg8.png"


const CompanyNamesCrousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
  return (
    <div>
    <Slider {...settings}>
      <CompanyLogoImages img={companyImg1} />
      <CompanyLogoImages img={companyImg2} />
      <CompanyLogoImages img={companyImg3} />
      <CompanyLogoImages img={companyImg4} />
      <CompanyLogoImages img={companyImg5} />
      <CompanyLogoImages img={companyImg6} />
      <CompanyLogoImages img={companyImg7} />
      <CompanyLogoImages img={companyImg8} />
    </Slider>
  </div>
  )
}

export default CompanyNamesCrousel