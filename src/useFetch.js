import { useState, useEffect } from "react";

const useFetch = (https://json-test-mu.vercel.app/blogs) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        setTimeout(() => {
            fetch(https://json-test-mu.vercel.app/blogs)
        .then(res => {
            if (!res.ok) {
                throw Error("could not fetch the data for that resource")
            }
             return res.json()
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
        })
        },500);
    },[https://json-test-mu.vercel.app/blogs]);

    return {data, isPending, error}
}

export default useFetch;
