import React, { useEffect, useState } from 'react'

const CountryFlag = () => {

    const[countries,setCountries] = useState([]);
    const[query,setQuery] = useState("");

    useEffect(() => {
        fetch("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries")
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((error) => {
          console.error("Failed to fetch countries:",error)
        });
    },[]);

    const filteredCountries = countries.filter((country) =>
    typeof country.common === "string" &&
    country.common.toLowerCase().includes(query.toLowerCase())
);
  return (
    <div>
        <input 
          type='text'
          placeholder='Search for Countries...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width:"80%",
            margin:"32px auto",
            display:"block",
            fontSize:"20px",
            padding:"10px",
            boxSizing:"border-box"
          }}
          />
          <div style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center",
            alignItems:"flex-start",
            minHeight:"300px"
          }}>

            {filteredCountries.map((country) => (
                <div className='countryCard' key={country.common}
                 style={{
                    border:"1px solid #ccc",
                    borderRadius:"12px",
                    padding:"24px",
                    textAlign:"center",
                    background:"#fff",
                    boxShadow:"0 2px 8px rgba(0,0,0,0.06)",
                    width:"240px",
                    margin:"12px"
                 }}
                >
                    <img src= {country.png}
                     alt={country.common + " flag"}
                     style={{
                        width: "120px",
                        height: "80px",
                        objectFit:"contain",
                        marginBottom:"20px"
                     }}
                     />

                     <div style={{fontSize:"22px",fontWeight:"bold"}}>
                        {country.common}

                     </div>


              </div>
            ))}

          </div>
      
    </div>
  )
}

export default CountryFlag
