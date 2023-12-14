import React from 'react';
import useBlog from '../../../hooks/useBlog';
import SectionTitle from '../../shared/SectionTitle';
import BlogCart from './BlogCart';

function HomeBlog({isPagination}) {
    const {blogData} = useBlog();
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
                {blogData.slice(0,8).map((blog, idx)=> (
                    <BlogCart key={idx} data={blog} />

                ))}
                    
                </div>
            </div>
        </div>
    )
}

export default HomeBlog