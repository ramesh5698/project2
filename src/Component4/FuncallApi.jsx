import React, { useEffect, useState } from 'react'

export default function FuncallApi() {

    const [abc,setabc] = useState([]);


   const handlechengea = async () => {
        let res = await fetch('https://fakestoreapi.com/products/');
        let dar = await res.json();

        setabc(dar);
    }

    useEffect(()=>{
        handlechengea()
    },[])



    return (
        <div>
            <h1 className='text-center text-warning'>FuncallApi</h1>

            {abc.map((da,i) => (
                <div key={i} className=''>
                    <h1>Title:{da.id}</h1>
                    <hr />
                    <h5 className='text-center text-info'>description:{da.description}</h5>
                    <img src={da.image} width={200} />
                    
                </div>
            ))}



        </div>
    )
}
