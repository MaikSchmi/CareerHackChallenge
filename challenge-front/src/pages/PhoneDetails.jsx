import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import PhoneCard from '../components/PhoneCard';
import ClipLoader from "react-spinners/ClipLoader";

function PhoneDetails() {
  const [phone, setPhone] = useState([]);
  const [loading, setLoading] = useState(true);

  const { phoneId } = useParams();

  const getPhoneDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/phones/${phoneId}`);
      setPhone(await response.data);
    } catch (error) {
      console.log("Error fetching phone details: ", error);
    }

  }

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      loading && setLoading(false);
    }, 1000)
  }, [phone])

  useEffect(() => {
    getPhoneDetails();
  }, [])

  return (
    !loading ? 
    <ul className="phone-ul">
      <PhoneCard 
        id={phone.id}
        name={phone.name}
        manufacturer={phone.manufacturer}
        description={phone.description}
        img={phone.imageFileName}
        price={phone.price}
        processor={phone.processor}
        ram={phone.ram}
        screen={phone.screen}
        displayingIn={"details"}
      />
    </ul>
    :
    <div className="spinner">
      <ClipLoader
        color={"blue"}
        loading={loading}
        cssOverride={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default PhoneDetails
