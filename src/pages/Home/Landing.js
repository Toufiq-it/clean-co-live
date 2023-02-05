import React from 'react';
import BucketGirl from '../../assets/image/bucketgirl.png';

const landing = () => {
    return (
        <div className=' relative'>
            <div class="hero h-screen lg:h-[60vh] bg-accent relative z-10 mt-16">
                <div class="hero-content flex-col lg:flex-row">

                    <div>
                        <p data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            className='text-xl'>Best Quality</p>
                        <h1 data-aos="fade-right"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                            className="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p data-aos="fade-right"
                            data-aos-delay="600"
                            data-aos-duration="1000"
                            className="py-6 max-w-xl"
                        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        <button
                            data-aos="zoom-in"
                            data-aos-delay="1300"
                            className="btn btn-primary"
                        >Get Started</button>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        className='h-[60vh] shrink-0'>
                        <img src={BucketGirl} class=" h-full" alt='' />
                    </div>
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
                className='shadow-lg rounded-2xl mt-[-50px] z-20 mx-auto bg-base-200 p-10 relative w-5/6'>
                <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'>REQUEST A QOUTE</button>
            </div>
        </div>
    );
};

export default landing;