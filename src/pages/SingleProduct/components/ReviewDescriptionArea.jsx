import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import AddReview from './AddReview';
import ReviewBox from './ReviewBox';

function ReviewDescriptionArea({ product }) {
    const [reviews, setReviews] = useState(product.review || [])

    return (
        <div className="description-review-area pb-100px" data-aos="fade-up" data-aos-delay="200">
            <div className="container">
                <div className="description-review-wrapper">
                    <Tabs>
                        <div className="description-review-topbar nav mb-10" style={{ marginBottom: "20px" }} id="review" >
                            <TabList>
                                <Tab data-bs-toggle="tab">Information</Tab>
                                <Tab data-bs-toggle="tab" >Description</Tab>
                                <Tab data-bs-toggle="tab">Reviews (02)</Tab>

                            </TabList>
                        </div>

                        <TabPanel>
                            <div className="pro-details-sku-info pro-details-same-style  d-flex">

                                <ul className="text-xl font-medium space-y-2">

                                    <li><b className='text-2xl text-neutral-500'>Model: </b> iPad mini 6</li>

                                    <li><b className='text-2xl text-neutral-500'>Display Size: </b> 8.3 inches</li>

                                    <li><b className='text-2xl text-neutral-500'>Display Type: </b> Liquid Retina IPS LCD, 500 nits (typ)</li>

                                    <li><b className='text-2xl text-neutral-500'>Display Resolution: </b> 1488 x 2266 pixels, 3:2 ratio (~327 PPI density)</li>

                                    <li><b className='text-2xl text-neutral-500'>Chipset: </b> Apple A15 Bionic (5 nm) | Hexa-core (2x2.93 GHz + 4xX.X GHz) | Apple GPU (5-core)</li>

                                    <li><b className='text-2xl text-neutral-500'>Main Camera: </b> 12 MP | 4K@24/25/30/60fps, 1080p@25/30/60/120/240fps; gyro-EIS </li>
                                </ul>
                            </div>

                        </TabPanel>
                        <TabPanel>
                            <div id="des-details1" className="tab-pane active">
                                <div className="product-description-wrapper">
                                    <p>

                                        The iPad Mini 6, Apple's latest iteration of its compact tablet series, represents a remarkable blend of portability, power, and innovation. Released in [year], the iPad Mini 6 comes with a host of upgrades and features that make it a standout device in the tablet market.

                                        At the heart of the iPad Mini 6 is the powerful A15 Bionic chip, the same chip found in the iPhone 13 series. This advanced processor ensures swift and efficient performance, making the iPad Mini 6 capable of handling demanding tasks such as graphic-intensive gaming, video editing, and multitasking with ease. The improved CPU and GPU performance not only enhance overall responsiveness but also contribute to a smoother user experience across various applications.

                                        The display of the iPad Mini 6 is a stunning 8.3-inch Liquid Retina display with True Tone technology. This means users can expect vibrant colors, sharp details, and excellent viewing angles. The smaller bezels result in a higher screen-to-body ratio, providing an immersive visual experience. Whether you're watching movies, browsing the web, or sketching with the Apple Pencil, the display on the iPad Mini 6 delivers impressive clarity and accuracy.

                                        One of the most notable features of the iPad Mini 6 is its compatibility with the second-generation Apple Pencil. This stylus transforms the iPad Mini into a versatile tool for note-taking, drawing, and creative expression. The responsiveness and precision of the Apple Pencil make it a valuable accessory for artists and professionals alike. The iPad Mini 6 conveniently attaches and charges the Apple Pencil magnetically, ensuring it's always ready for use.

                                        In terms of design, the iPad Mini 6 inherits the sleek and modern aesthetics that Apple is known for. The device is remarkably thin and lightweight, making it an ideal companion for users on the go. The aluminum enclosure not only adds durability but also provides a premium feel to the tablet. The iPad Mini 6 is available in an array of attractive colors, allowing users to choose a finish that suits their style.

                                        The inclusion of Touch ID on the top button adds a layer of security to the iPad Mini 6. This biometric authentication method allows users to unlock their device, make secure payments, and access sensitive information with just a touch. While Face ID has become a staple in other Apple devices, Touch ID's presence on the iPad Mini 6 ensures a familiar and reliable method of user authentication.

                                        On the connectivity front, the iPad Mini 6 supports 5G connectivity, enabling faster download and streaming speeds when connected to compatible networks. This ensures that users can take full advantage of the high-performance capabilities of the device, especially when engaging in data-intensive activities. The iPad Mini 6 also features USB-C connectivity, providing a universal and versatile port for charging and connecting accessories.

                                        The rear camera on the iPad Mini 6 has been upgraded to a 12MP sensor, bringing improvements to photography and video recording. The camera benefits from the A15 Bionic chip's image signal processor, resulting in enhanced image quality and color accuracy. The camera supports features like Smart HDR, allowing users to capture detailed and well-exposed photos even in challenging lighting conditions. Additionally, the front-facing camera has been improved, making it ideal for video calls and selfies.

                                        The iPad Mini 6 runs on iPadOS [version], the latest iteration of Apple's tablet-specific operating system. iPadOS introduces a range of features that take advantage of the iPad's larger screen, including improved multitasking capabilities, a redesigned home screen, and enhanced file management. The operating system is designed to provide a seamless and intuitive experience, whether you're using the iPad Mini for productivity or entertainment.

                                        The battery life of the iPad Mini 6 remains impressive, offering all-day usage on a single charge. The efficiency of the A15 Bionic chip, combined with the optimization of iPadOS, ensures that users can rely on the device throughout their daily activities without constantly worrying about running out of power. Whether you're working on documents, streaming videos, or browsing the web, the iPad Mini 6 is built to keep up with your demands.

                                        Apple has also emphasized the iPad Mini 6's environmental credentials. The tablet is made using recycled materials, and its design takes into account energy efficiency and reduced carbon footprint. This commitment to sustainability aligns with Apple's broader initiative to minimize its environmental impact and create products that are both innovative and eco-friendly.

                                        In conclusion, the iPad Mini 6 stands as a testament to Apple's dedication to pushing the boundaries of technology. With its powerful A15 Bionic chip, stunning Liquid Retina display, and compatibility with the Apple Pencil, the iPad Mini 6 is a versatile and capable device. Whether you're a creative professional, a student, or someone who values a compact yet powerful tablet, the iPad Mini 6 offers a compelling blend of performance and portability. As technology continues to evolve, the iPad Mini 6 remains at the forefront, showcasing Apple's commitment to delivering cutting-edge devices that redefine the tablet experience.
                                    </p>
                                </div>
                            </div>

                        </TabPanel>
                        <TabPanel>
                            <div id="des-details3" className="tab-pane">
                                <div className="row">
                                    <div className="col-lg-7">
                                        {
                                            reviews.length > 0 ? reviews.map((user, idx) => (
                                                <ReviewBox key={idx} user={user} product={product} />

                                            )) :
                                            <img src="https://img.freepik.com/free-vector/flat-we-want-your-feedback-template_1017-38799.jpg?w=740&t=st=1701930854~exp=1701931454~hmac=902d2fb473443234c1e8456387b1f62b7a2aed54ae8f062fb95a7c6217ac4bb6" className='w-full h-[500] object-contain block mx-auto' alt="" />
                                        }
                                    </div>
                                    <AddReview reviews={reviews} setReviews={setReviews} product={product} />
                                </div>
                            </div>

                        </TabPanel>

                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default ReviewDescriptionArea