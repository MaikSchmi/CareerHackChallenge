import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PhoneCard from '../components/PhoneCard';
import ClipLoader from "react-spinners/ClipLoader";

function Phones() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getPhones = async () => {
    try {
      const response = await axios.get("http://localhost:5005/phones");
      search !== "" ? setPhones(await response.data.filter((phone) => phone.name.toLowerCase().includes(search.toLowerCase()) || phone.manufacturer.toLowerCase().includes(search.toLowerCase()))) : setPhones(await response.data);
    } catch (error) {
      console.log("Error fetching phones list: ", error);
    }
  }

  useEffect(() => {
    getPhones();
  }, [search])

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      loading && setLoading(false);
    }, 1000)
  }, [phones])

  useEffect(() => {
    getPhones();
  }, [])

  return ( 
    <div>
      <div className="search-bar">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Phone / Manufacturer" />
      </div>
      {!loading ?
      <div className="search-list-ctn">
      {phones.map((phone) => {
        return (
          <ul key={phone.id} className="phone-list-ul">
            <PhoneCard 
              id={phone.id}
              name={phone.name}
              manufacturer={phone.manufacturer}
              img={phone.imageFileName}
              price={phone.price}
              displayingIn={"search"}
            />
          </ul>
        )
      })} </div>  :
      <div className="spinner">
        <ClipLoader
          color={"blue"}
          loading={loading}
          cssOverride={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div> }  
    </div>
  )
}

export default Phones
