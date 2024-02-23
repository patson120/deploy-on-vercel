'use client'

import CONSTANTS from "@/utils/constants"
import { collection, getDocs, query } from "firebase/firestore"
import { useLayoutEffect, useState } from "react"

import { database } from "@/config/firebase"



const Home = () => {

  const [users, setUsers] = useState([])
  const [cars, setCars] = useState<any>([])

  const getData = async () => {
    
    const data = await fetch(`${CONSTANTS.BASE_URL}/users`)
    const response = await data.json();
    setUsers(response.users)

    const carsQuery = query(collection(database, "VEHICLE"))
    const querySnapshot = await getDocs(carsQuery)

    setCars([])
    querySnapshot.forEach((doc) => {
      setCars((prev: any) => [...prev, doc.data()])
    })
  }

  useLayoutEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold">Bienvenu sur Behati</h1>

      <h3 className="text-xl font-satoshi font-bold my-4">Users</h3>
      <ul>
        {
          users.map((user: any) => (
            <li key={user.id}>{user.username}</li>
          ))
        }

        <h3 className="text-xl font-satoshi font-bold my-4">Cars</h3>
        {
          cars.map((car: any) => (
            <li key={car._id}>{car.model.libelle} * {car._id}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Home
