import { useEffect, useState } from "react";

const useFirebase = () => {
    const [details,setDetails] = useState([])
    useEffect(()=>{
      fetch('./option.json')
      .then(res=> res.json())
      .then(data => setDetails(data))
    },[])

    const head = 'SAJEK VALLEY'
    const para = "Lorem ipsum dolor sit amet consectetur adipisici adipisicing elit. Eum cupiditate excepturi ex facilisng elit. Eum cupiditate excepturi ex facilis"

    const [name,setName] = useState(head)
    const [des,setDes] = useState(para)

    const viewHeading = (nam,des) => {
        setName(nam)
        setDes(des)
    }
     
    return {
        details,
        viewHeading,
        name,des
    };
};

export default useFirebase;