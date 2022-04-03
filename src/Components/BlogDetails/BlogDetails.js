import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setblog] = useState({});
  useEffect(() => {
    fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${id}`)
      .then((res) => res.json())
      .then((data) => setblog(data));
  }, []);

  return (
    <>
      <div className="header-gradient" />
      <div>
          <button className="back-button" onClick={() => navigate(-1)}>
            Back
          </button>
        <div className="blog-details">
          <div className="blog-image">
            <img src={blog?.imageURL} alt="" />
          </div>
          <h1>{blog?.title}</h1>
          <p>{blog?.blog}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
