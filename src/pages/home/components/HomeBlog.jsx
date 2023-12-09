import React from 'react'
import SectionTitle from '../../shared/SectionTitle'
import BlogCart from './BlogCart'

function HomeBlog({isPagination}) {
    return (
        <div className="main-blog-area pb-100px pt-100px">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center mb-30px0px">
                            <SectionTitle title="blog" />
                            <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing eiusmod.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <BlogCart data="24 Aug, 2021" heading="There are many variations of passages of Lorem" image="https://img.freepik.com/free-photo/portrait-young-man-using-mobile-phone-while-standing-outdoors_58466-16294.jpg?size=626&ext=jpg&ga=GA1.1.863241194.1678273173&semt=ais" />
                    
                    <BlogCart data="24 Aug, 2021" heading="It is a long established factoi ader will be distracted" image='https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?size=626&ext=jpg&ga=GA1.1.863241194.1678273173&semt=ais' />

                    <BlogCart data="24 Aug, 2021" heading="Contrary to popular belieflo lorem Ipsum is not" image="https://img.freepik.com/free-photo/man-with-car-keys_1187-1058.jpg?w=826&t=st=1700404578~exp=1700405178~hmac=d84632a376e0e11a6731d8807fc4e47893e71b20c7ed752e3021aee0848053bf" />
                </div>
            </div>
        </div>
    )
}

export default HomeBlog