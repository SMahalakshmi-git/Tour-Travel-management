import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


const Testimonials = () => {

    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slideToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:2,
                    slideToScroll:1,
                },
            },
        ]

    }
  return <Slider {...settings}>
    <div className="testimonial" py-4 px-3>
        <p>
          Great service and wonderful destinations! The booking process was straightforward, and I appreciated the quick responses from customer support. The only reason I'm not giving 5 stars is because the hotel could have been better, but overall, I had a fantastic trip.
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
            <h6 className='mb-0 mt-3'>John Doe</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>

    <div className="testimonial" py-4 px-3>
        <p>
          "My experience with this travel agency was nothing short of amazing! From booking to the actual tour, everything was seamless. The guides were knowledgeable and friendly, and the itinerary was well-planned. I would definitely recommend this company to anyone looking for a hassle-free travel experience
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
            <h6 className='mb-0 mt-3'>Lia Franklin</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>

    <div className="testimonial" py-4 px-3>
        <p>
           This was the best trip I've ever taken. The tour was perfectly organized, and I felt like we got to see and do so much in a short amount of time. The tour guides were fantastic and made the experience even better. Highly recommend!"
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
            <h6 className='mb-0 mt-3'>John Doe</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>

    <div className="testimonial" py-4 px-3>
        <p>
            "I had an incredible time on my trip! The tours were well-coordinated, and the staff was very accommodating. The only minor issue was a slight delay with our airport transfer, but everything else was top-notch. Will definitely book again!"
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
            <h6 className='mb-0 mt-3'>Lia Franklin</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>

    <div className="testimonial" py-4 px-3>
        <p>
          "Absolutely wonderful experience! The tour exceeded my expectations in every way. The guides were passionate and informative, and the destinations were stunning. I can't wait to book my next adventure with this company!"
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
            <h6 className='mb-0 mt-3'>Olivia Martinez</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>

        <div className="testimonial" py-4 px-3>
        <p>
          "Very satisfied with my trip! The destinations were beautiful, and the tour guides were very professional. There was a small mix-up with our hotel booking, but it was resolved quickly. Overall, a fantastic experience
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
            <h6 className='mb-0 mt-3'>Daniel Anderson</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>

       <div className="testimonial" py-4 px-3>
        <p>
         I had an unforgettable trip thanks to this travel agency. Everything was planned to perfection, and the guides were exceptional. The level of service provided was beyond my expectations. Highly recommended!
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
            <h6 className='mb-0 mt-3'>Sophia Wilson</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>


  </Slider>
}

export default Testimonials
