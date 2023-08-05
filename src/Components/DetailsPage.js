import React, {useEffect} from 'react';

import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/apiActions";
import { useNavigate } from "react-router-dom";
import { addToDetails } from "../redux/actions/detailsActions";

const DetailsPage = () => {
  const { posts } = useSelector(state => state.posts);
  const { post } = useSelector((state) => state.detailsCard);

  const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    function handleCardDetails(post) {
        dispatch(addToDetails(post));
        navigate(`/item/${post.id}`);
    }


//   console.log(post);
  
  if(!post) return <h1>Loading...</h1>
  
  return (
    <div className='details-container'>

      <h2>Post Number {post.id}</h2>
      <div className='container'>
         <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
         <div className='sub-container'>
            <div className='info'>
              <button>Details</button>
              <button>User Info</button>

            </div>
            <p>{post.body}</p>
            <p>Post was posted by {post.id}</p>

            
         </div>
      </div>
      <h1>More Posts</h1>
      <div className="home-container">
            
            {posts && posts.map((post) => {
                return (
                    <div className="post" key={post.id} onClick={() => {
                        handleCardDetails(post)
                    }}>
                        <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
                        <h3>Post Title: {post.title.slice(0, 10)}...</h3>
                        <p>Body: {post.body.slice(0, 70)}</p>
                        <span>Read More...</span>

                    </div>
                )
            })}
            </div>
  </div>
  )
}

export default DetailsPage