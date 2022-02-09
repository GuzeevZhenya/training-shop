import React from 'react';
import { Blogitem } from './BlogItem/BlogItem';
import './Blog.css';

import first from '../../img/Blog/First.jpg'
import second from '../../img/Blog/Second.jpg'
import third from '../../img/Blog/Third.jpg'


const BlogItems = [
	{ id: 1, title: 'The Easiest Way to Break', img:first , text: 'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor' },
	{ id: 2, title: 'Wedding Season', img:second , text: 'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor' },
	{ id: 3, title: 'Recent Favorites On Repeat', img: third , text: 'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor' }
];

export const Blog = () => {
	const blogItem = BlogItems.map(item => (
		<>
			<Blogitem id={item.id} title={item.title} text={item.text} image={item.img}/>
		</>
	))
	return (
		<div className='container'>
			<div className='blog'>
				<h1 className="blog__title">Latest from Blog</h1>
				<a className="blog__link">See all</a>
			</div>
		
			<div className='blog__items'>
					{blogItem}
				</div>
			</div>
	)
}
