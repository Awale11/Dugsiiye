import { useContext } from "react";
import { Link, useLocation } from "react-router";
import { PostsContext } from "../context/PostsContext";

const Home = () => {
  const { posts } = useContext(PostsContext);
  // PostsContext'ten post listesini alir

  const location = useLocation();
  // URL'deki bilgileri okuyabilmek icin ayuu naga caawinayaa

  const query = new URLSearchParams(location.search);
  // /?search=react yani search=react

  const searchTerm = query.get('search') || '';

  const filteredPost = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()) )


  return (

    <div className="min-h-screen">
        <h2 className="text-lg font-semibold p-2">Blog Posts</h2>
        <form className="bg-white rounded p-2 ">
          <input 
          className="w-full p-2 border border-gray-300 rounded-md cursor-pointer hover:border-blue-600 mb-2"
          type="search" 
          name="search"
          placeholder="Search posts"
          defaultValue={searchTerm}
          />
          <button 
          className="w-full bg-blue-500 text-white py-2 rounded cursor-pointer hover:bg-blue-600"
          type="submit">Search</button>
        </form>

        <div className="bg-white rounded">
            <ul className="text-blue-500 p-2 space-y-2">
                {filteredPost.map((post)=> (
                  <li key={post.id}>
                    <Link
                    to={`/posts/${post.id}`}
                    >{post.title}</Link>
                  </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Home;

// COMMENTS

// post.id= bu her post icin farkli ornegin=post.id === 1 olursa, <Link to="/posts/1">= olur, boyle devam eder.