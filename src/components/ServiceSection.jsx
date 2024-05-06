import React from 'react'
import { motion } from 'framer-motion';

const ServiceSection = () => {
    return (
        <section id="service" className='bg-cover bg-center bg-no-repeat py-20 md:py-24' style={{backgroundImage: "url('/images/serviceBg.png')"}}>
            <div className="container mx-auto py-6 md:py-8 mb-20 px-4 sm:px-6 lg:px-8">
            <h4 className="text-xl md:text-2xl font-semibold text-center text-gray-800 font-montserrat mb-0">SERVICES</h4>
                <h2 className="text-4xl md:text-5xl font-semibold font-montserrat  text-center mb-12">WHAT I OFFER</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    
                    {/* Box 1: UI/UX Design */}
                    <motion.div className="bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center rounded-lg p-6 sm:p-10" style={{backgroundImage: "url('/images/bground.png')"}} whileHover={{ scale: 1.1 }}>
                        <p className="text-yellow-200 text-lg md:text-3xl text-center font-montserrat font-bold">UI/UX Design</p>

                            <div className="flex flex-row items-center mb-4">
                                <div className='w-1/4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-200 mr-4" viewBox="0 0 20 20" fill="currentColor">
                                        <image href="/images/undraw_undraw_undraw_undraw_undraw_website_o7n3_bucy_30uo_-1-_d6br_0qfo.svg" width="100%" height="100%"/>
                                    </svg>
                                </div>
                                <div className='w-3/4'>
                                    <p className="text-white font-semibold">I provide user interface and user experience design services to create intuitive and engaging digital products.</p>
                                </div>
                            </div>
                        
                    </motion.div>

                    {/* Box 2: Web Design */}
                    <motion.div className="bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center rounded-lg p-6 sm:p-10" style={{backgroundImage: "url('/images/bground.png')"}} whileHover={{ scale: 1.1 }}>
                        <p className="text-yellow-200 text-lg md:text-3xl text-center font-montserrat font-bold mb-2">Responsive Web Design</p>

                            <div className='flex flex-row items-center mb-4'>
                                <div className="w-1/4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-200 mb-4" viewBox="0 0 20 20" fill="currentColor">
                                        <image href="/images/undraw_completed_m9ci.svg" width="100%" height="100%"/>
                                    </svg>
                                </div>
                                <div className="w-3/4">
                                    <p className="text-white font-semibold">I offer web design services to create modern and responsive websites tailored to your business needs. Designing your website too look great and work perfectly on any device or screen size.</p>
                                </div>
                            </div>

                    </motion.div>

                    {/* Box 3: Performance Opttimization */}
                    <motion.div className="bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center rounded-lg p-6 sm:p-10" style={{backgroundImage: "url('/images/bground.png')"}} whileHover={{ scale: 1.1 }}>
                        <p className="text-yellow-200 text-lg md:text-3xl text-center font-montserrat font-bold mb-2">Performance Optimization</p>

                            <div className='flex flex-row items-center mb-4'>
                                <div className='w-1/4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-200 mb-4" viewBox="0 0 20 20" fill="currentColor">
                                        <image href="/images/undraw_mobile_content_xvgr.svg" width="100%" height="100%"/>
                                    </svg>
                                </div>
                                <div className='w-3/4'>
                                    <p className="text-white font-semibold">Fine-tuning every aspect of your website's frontend to make it load faster and quicker.</p>
                                </div>
                            </div>

                    </motion.div>

                    {/* Box 4: Cross-platform compatibility */}
                    <motion.div className="bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center rounded-lg p-6 sm:p-10" style={{backgroundImage: "url('/images/bground.png')"}} whileHover={{ scale: 1.1 }}>
                        <p className="text-yellow-200 text-lg md:text-3xl text-center font-montserrat font-bold mb-2">Cross-platform Compatibility</p>

                        <div className='flex flex-row items-center mb-4'>
                            <div className='w-1/4'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-200 mb-4" viewBox="0 0 20 20" fill="currentColor">
                                    <image href="/images/undraw_experience_design_re_dmqq.svg" width="100%" height="100%"/>
                                </svg>
                            </div>
                            <div className='w-3/4'>
                                <p className="text-white font-semibold">My frontend solutions work seamlessly acoss different devices like desktop, mobile phones and tablets. Ensuring a smooth experience for everyone, your website or application performs consistently well no matter how the user access it.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection
