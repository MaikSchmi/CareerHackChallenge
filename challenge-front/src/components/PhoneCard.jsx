import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

function PhoneCard({id, name, img, manufacturer, description, price, processor, ram, screen, displayingIn}) {
  const [imgState, setImgState] = useState("");

  useEffect(() => {
    switch (displayingIn) {
      case "search":
        setImgState("phone-search-img");
        break;
      case "details":
        setImgState("phone-details-img");
        break;
    }
  }, [])

  return (
    <>
    {displayingIn === "search" ?
    <Link to={`/phones/${id}`} className="phone-link">
      <li><img src={`../images/${img}`} alt="phone-img" className={imgState}/></li>
      <li>{manufacturer} {name}</li>
      <li>{price}€</li>
      <li>{description}</li>
    </Link>
    : displayingIn === "details" ? 
    <>
      <li><h2>{manufacturer} {name}</h2></li>
      <li><img src={`../images/${img}`} alt="phone-img" className={imgState}/></li>
      <li className="phone-details-description">{description}</li>
      <li className="phone-details-price">Price: {price}€</li>
      <li style={{fontWeight: "bold"}}>Technical details:</li>
      <ul className="phone-details-tech-list">
        <div>
          <li>Processor:</li>
          <li>{processor}</li>
        </div>
        <div>
          <li>RAM:</li>
          <li>{ram}</li>
        </div>
        <div>
          <li>Screen:</li>
          <li>{screen}</li>
        </div>
      </ul>
    </> 
    
    : 
    <>
    </>
    }
    </>
  )
}

export default PhoneCard
