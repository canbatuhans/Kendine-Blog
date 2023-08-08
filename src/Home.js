import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {

    const { data: blogs , isPending, error} = useFetch("https://json-test-mu.vercel.app/blogs")



    return (
        <div className="home" >
            { error && <div> {error} </div>  }
            { isPending && <div>Loading... </div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs" /> }
        </div>

    );
}

export default Home;
