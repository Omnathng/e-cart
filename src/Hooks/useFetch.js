import { useEffect, useState } from "react";

const useFetch = (url)=>{
    const [data,setData] = useState(null)
    useEffect(()=>{
        fetch(url).then(res=>{
            res.json().then(result=>{
                // use 2 then inorder to get the exact data else body header would be retrieved
                setData(result.products)
            })
        })
    },[url])
    return data
}
export default useFetch;