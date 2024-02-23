'use client'

import { useEffect, useState } from "react";

const Home = () => {

  const [message, setMessage]  = useState('')

  const getData = async () => {
    const data = await fetch(`https://deploy-on-vercel-one.vercel.app/api/hello`)
    const response = await data.json();

    setMessage(response.message)

    console.log({ response});
    
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <main>
      <h1>Home {message}</h1>
    </main>
  );
}

export default Home