import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//----------------------------------helpers---------------------------------//
import getAllPosts from '../services/getAllPosts';

const PostGrid = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getAllPosts()
			.then(({ posts }) => setPosts(posts))
	}, [])

	return (
		<div className="posts-grid">
			{posts.map((item) => {
				return (
					<Link to={`/posts/${item._id}`} key={item._id}>
						<div className="item-grid" key={item._id}>
							<img
								src={item.img}
								alt={item.img}
							/>
							<div className="item-grid-desc">
								<h4>{item.title}</h4>
								<p>@{item.author.username}</p>
							</div>
						</div>
					</Link>
				)
			})}
		</div>
	);
}


export default PostGrid;