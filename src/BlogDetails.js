import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom";

const BlogDetails = () => {

    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch("https://json-test-mu.vercel.app/blogs/" + id)
    const navigate = useNavigate();

    const handleClick = () => {
        fetch("https://json-test-mu.vercel.app/blogs/" + blog.id, {
            method: "DELETE"
        }).then(() => {
            navigate("/")
        })
    }

    return (  
        <div className="blog-details">
            {isPending && <div> Loading... </div>} 
            {error && <div> {error} </div>} 
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p> Written by {blog.author}</p>
                    <div> {blog.body} </div>
                    <button onClick={handleClick} >Delete </button>
                </article>

            )}
        </div>
    );
}
 
export default BlogDetails;
