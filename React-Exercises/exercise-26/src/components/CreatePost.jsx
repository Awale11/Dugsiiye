import { useState, useContext } from "react";
import { PostsContext } from "../context/PostsContext"
import { useNavigate } from "react-router";


const CreatePost = () => {

const { addPost } = useContext(PostsContext);
// PostsContex'ten yeni post ekleme fonksiyonu alir

const [title, setTitle] = useState('');

const [content, setContent] = useState('');

const navigate = useNavigate();

const handleSubmit = (event)=> {
    event.preventDefault();
    addPost({title, content});
    // here we say to the PostsContexts add new post
    navigate('/')
};

  return (
    <div className="bg-white rounded shadow-lg p-6 m-8">
        <h2 className="text-md font-semibold mb-2">Creat a New Post</h2>
        <form className="space-y-2" onSubmit={handleSubmit}>
            <div className="">
                <label 
                className="text-md font-semibold"
                >
                    Title: {''}
                    <input 
                    className="border rounded h-8 border-gray-400 hover:border-blue-500 cursor-pointer"
                    type="text"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    required
                     />
                </label>
            </div>

            <div>
                <label
                className="text-md font-semibold"
                >Content:{''}
                    <textarea
                    className="border w-64 h-24 border-gray-400 hover:border-blue-500 cursor-pointer"
                    value={content}
                    onChange={(e)=> setContent(e.target.value)}
                    ></textarea>
                </label>
            </div>

            <button 
            className="text-white font-semibold bg-blue-500 w-100 p-2 rounded cursor-pointer hover:bg-blue-600"
            type="submit">Create Post</button>
        </form>
    </div>
  )
}

export default CreatePost;

// useParams    → URL'den bilgi AL
// useLocation  → mevcut route bilgisini OKU
// useNavigate  → başka route'a GİT