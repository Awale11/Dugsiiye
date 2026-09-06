import { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router"
import { PostsContext } from "../context/PostsContext";


const Post = () => {

  const { postId } = useParams();

  const { posts } = useContext(PostsContext);
  // PostsContext'ten post listesini alir

  const navigate = useNavigate();

  const location = useLocation();

  const currentId = parseInt(postId);

  const post = posts.find((post) => post.id === currentId);
  // here post'lari buluyoruz and here we search one post that s y we used find instead of filter

  if(!post) {
    return <p>Post not found</p>
    // here post bulunamazsa yaziyi goster
  };

  const handleNavigation = (direction) =>{

    const newId = direction === 'next' ? currentId + 1 : currentId - 1;
    const newPost = posts.find((p)=> p.id === newId);

    if(newPost) {
      navigate(`/posts/${newId}`, {
        state: {fromPostId: currentId}
        // route degisirken ekstra bilgi gonermek
      })
    }
  };


  // const postDetail = Posts.filter(post => post.id == postId)[0]
  //  const post = posts.find(post => post.id === Number(postId));


  return (

    <div className="bg-white rounded shadow-md p-2 m-2 ">
      
       <h2>{post.title}</h2>
       <p>{post.content}</p>

       <button
       className="bg-blue-500 text-white p-2 rounded font-bold cursor-pointer hover:bg-blue-600 mt-1"
        onClick={()=> handleNavigation('prev')}>Previous</button>

       <button
        className="bg-blue-500 text-white p-2 rounded font-bold cursor-pointer hover:bg-blue-600 m-2 "
        onClick={()=> handleNavigation('next')}>Next</button>

       {
        location.state && (
          <p 
          className="text-rose-500"
          >You navigated here from post ID: {location.state.fromPostId}</p>
        )
       }
    </div>
  )
}

export default Post

// find() neden filter() yerine daha güzel?
// find():Bana koşulu sağlayan ilk nesneyi ver.
// filter():Bana koşulu sağlayan bütün nesneleri array olarak ver.