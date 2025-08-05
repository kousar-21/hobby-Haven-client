import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.css'
import Bg from '../image/bg-1.jpg'
import Image1 from '../image/home.jpg'
import Image2 from '../image/all-group.jpg'
import Image3 from '../image/create-group.jpg'
import Image4 from '../image/one-grp.jpg'
import { AuthContext } from '../../AuthProvider/AuthContext';





const Banner = () => {
    const {theme} = use(AuthContext)

    return (
        <div className={`${theme ? "dark" : ""} dark:bg-zinc-500 min-h-[300px] md:min-h-[400px] bg-cover bg-center bg-no-repeat overflow-hidden`} style={{ backgroundImage: `url(${Bg})` }}>
            {/* source => swiper js demo */}

            <div className='w-[95%] max-w-[330px] md:max-w-[800px] lg:max-w-[1000px] mx-auto md:h-full overflow-hidden'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        // disableOnInteraction: false
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    navigation
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-full h-full"

                >
                    <SwiperSlide className='relative'><img className="w-full object-cover pt-5 h-[280px] md:h-[380px]" src={Image1} alt="" />
                        <div className='absolute top-36 md:top-56 z-50 pl-5'>
                            <h1 className='text-lg md:text-2xl font-bold'>Welcome to HobbyHaven</h1>
                            <h3 className='text-sm'>Connect, grow and explore new hobbies at Hobby Haven!</h3>
                            <button className='btn mt-2 px-8 dark:bg-zinc-500 dark:text-white'>Login</button>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='relative'><img className="w-full object-cover pt-5 h-[280px] md:h-[380px]" src={Image2} alt="" />
                        <div className='absolute text-white top-40 md:top-56 z-50 pl-5'>
                            <h1 className='text-lg md:text-2xl font-bold'>Join Hobby Haven All Groups</h1>
                            <h3 className='text-sm'>The heart of every hobbyist community! </h3>
                            <button className='btn mt-2 dark:bg-zinc-500 dark:text-white'>All Groups</button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='relative'><img className="w-full object-cover pt-5 h-[280px] md:h-[380px]" src={Image3} alt="" />
                        <div className='absolute text-white top-40 md:top-56 z-50 pl-5'>
                            <h1 className='text-lg md:text-2xl font-bold'>Got a passion?</h1>
                            <h3 className='text-sm'>Want to build a community around it?</h3>
                            <button className='btn mt-2 dark:bg-zinc-500 dark:text-white'>Create Groups</button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='relative'><img className="w-full object-cover pt-5 h-[280px] md:h-[380px]" src={Image4} alt="" />
                        <div className='absolute text-white top-40 md:top-56 z-50 pl-5'>
                            <h1 className='text-lg md:text-2xl font-bold'>Welcome to your hub of passions!</h1>
                            <h3 className='text-sm'>Your hobbies, your people, your space.</h3>
                            <button className='btn mt-2 dark:bg-zinc-500 dark:text-white'>My Groups</button>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>


        </div>
    );
};

export default Banner;