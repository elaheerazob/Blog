import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css'

const Blog = (props) => {
    console.log(props);
    const {_id,title,admin,blog,imageName,imageURL} = props.blog; 
    const nevigate =useNavigate();
    return (
        <div className='blog-container'>
      <div className='blog-image-container'>
        <img src={imageURL} alt='' />
      </div>
      <div className='blog-content'>
        <div>
          <h1>{title}</h1>
          <div className='author-name'>
            <img src={imageName} alt='' />
            <p>{admin}</p>
          </div>
        </div>
        <p className='blog-preview'>
          {blog.length < 400 ? blog.length : blog.slice(0, 400)}
          <span className='read-more' onClick={() => nevigate(`/blog/${_id}`)}>
            ...Read More
          </span>
        </p>
      </div>
    </div>
    );
};

export default Blog;