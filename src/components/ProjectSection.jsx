import React from 'react'
import {motion} from 'framer-motion';

const ProjectSection = () => {
    return (
        <section id='projects' className="bg-customPink py-20">
            <div className="container mx-auto py-6 md:py-6 mb-4 px-4 sm:px-6 lg:px-8">
                <h4 className="text-xl md:text-2xl font-semibold text-center text-white font-montserrat mb-0">PROJECTS</h4>
                <h2 className="text-2xl md:text-3xl font-semibold text-center text-white font-montserrat mb-12">MY CREATIVE WORKS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Project 1 */}
                    <motion.div className="bg-white rounded-lg shadow-md overflow-hidden" whileHover={{ scale: 1.1 }}>
                        <img src="/images/pject1.png" alt="Project 1" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">E-Commerce Website Frontend</h3>
                            <p className="text-gray-700">Versatile team-oriented website, equipped with frontend functionality and track progress with our intuitive admin dashboard. Currently in development.</p>
                        </div>
                    </motion.div>

                    {/* Project 2 */}
                    <motion.div className="bg-white rounded-lg shadow-md overflow-hidden" whileHover={{ scale: 1.1 }}>
                        <img src="/images/pject2.png" alt="Project 2" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">UI/UX Website Design</h3>
                            <p className="text-gray-700">The website is constructed as a single-page layout, developed using Squarespace's platform. Currently in development.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection
