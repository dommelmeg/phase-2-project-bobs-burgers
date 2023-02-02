import React, { useState, useEffect } from "react";

const BurgersOfTheDay = () => {
  const [nineBurgers, setNineBurgers] = useState([])

  useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/burgerOfTheDay/[1,2,3,4,5,6,7,8,9]')
      .then((r) => r.json())
      .then((burgers) => setNineBurgers(burgers))
  },[])

  return (
    <div>

    </div>
  )
}

export default BurgersOfTheDay
