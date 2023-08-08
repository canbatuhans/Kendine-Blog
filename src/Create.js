import { useState } from "react";
import { useNavigate} from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch("https://json-test-mu.vercel.app/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false)
            navigate("/")
        });

        
    }

    return (
        <div className="create" >
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit} >
                <label>Blog title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Blog author: </label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value) }
                >
                    <option value="Can" >Can</option>
                    <option value="Batuhan" >Batuhan</option>
                </select>
                { !isPending && <button>Add Blog </button> }
                { isPending && <button disabled >Adding Blog... </button> }

            </form>
        </div>
      );
}
 
export default Create;
