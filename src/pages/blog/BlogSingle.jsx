import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CommonHero from '../shared/CommonHero';
import BlogContent from './components/BlogContent';

function BlogSingle() {
  const {data} = useLoaderData();
  
  console.log(data);
  return (
    <>
      <CommonHero PageName={"Blog Details"} />
      <BlogContent blog={data} />
    </>
  )
}

export default BlogSingle