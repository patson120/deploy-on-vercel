'use client'


import CONSTANTS from "@/utils/constants"
import { useEffect, useState } from "react";

const Home = () => {

  const [message, setMessage]  = useState('')

  const getData = async () => {
    const data = await fetch(`${CONSTANTS.BASE_URL}/hello`)
    const response = await data.json();
    setMessage(response.message)

    const p = await fetch(`${CONSTANTS.BASE_URL}/users`)
    const posts = await p.json();

    console.log({users: posts});
    
    
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <main>
      <h1>{message}</h1>
      <h3>Welcome to Behati!</h3>
    </main>
  );
}

export default Home