import { createContext, useState } from "react";

export const PostsContext = createContext();

export const PostsProvider = ({children}) => {
  const [posts, setPosts] = useState([
    // birden fazla component'in kullanacagi ortak state
    {
    id: 1,
    title: 'Introduction to React',
    content: 'Content of post 1'
  },
  {
    id: 2, 
    title: 'Understanding React Router',
    content: 'Content of post 2'
  },
  {
    id: 3, 
    title: 'React Hooks in Depth',
    content: 'Content of post 3'
  }
  ]); 

  const addPost = (post) => {
    setPosts((prevPosts) => [...prevPosts, {...post, id: prevPosts.length + 1}])
    // here eski listeyi aliyor altina bizim yazdigimiz listeyi ekliyor
  };

  return (

    <PostsContext.Provider value={{posts, addPost}}>
      {children}
    </PostsContext.Provider>
  )
}

// /posts/2 yani postsId=2
