import React from 'react';
import { BlogItem } from './BlogItem/BlogItem';
import './Blogs.css';
import blogs1Img from "../../img/Blog/First.jpg";
import blogs2Img from "../../img/Blog/Second.jpg";
import blogs3Img from "../../img/Blog/Third.jpg";
const blogsImages = [blogs1Img, blogs2Img, blogs3Img];


const blogData = [
	{
		"id": "0",
		"title": "The Easiest Way to Break",
		"desc": "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
	},
	{
		"id": "1",
		"title": "Wedding Season",
		"desc": "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
	},
	{
		"id": "2",
		"title": "Recent Favorites On Repeat",
		"desc": "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
	}
]


export const Blogs = () => {
  return (
    <div className="blogs__wrapper">
      <div className="container">
        <div className="blogs__inner">
          <div className="blogs__head">
            <h3 className="blogs__title">LATEST FROM BLOG</h3>
            <button className="blogs__btn">SEE ALL</button>

          </div>
          <div className="blogs__list">
            {
              blogData.map((blog, index) =>
                <BlogItem
                  key={`blog${index}`}
                  data={blogData[index]}
                  img={blogsImages[index]}
                />
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};
