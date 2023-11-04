import React, { useEffect, useState } from 'react'

function Service() {

  const [user, setUser] = useState([]);

const ApiFunction = async() =>{
  const res = await fetch("https://randomuser.me/api/?nat=us&results=9&page=1");
  const data = await res.json();
  const objData = data.results;
  setUser(objData);
}

useEffect(()=>{
  ApiFunction()
},[]);

  return (
    <div className="services-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
             <h1 className="services-title"> Our Team For service section</h1>
          </div>
        </div>
        <div className="row">
          {
            user.map((curElement)=>{
              return(
          <div className="col-md-4 mt-4">
            <div className="card">
              <img src={curElement.picture.large} className="card-img-top" alt="..." />
              <div className="card-body">
              <h5 className="card-title">{curElement.name.title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary"> Contact Me </a>
              </div>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

export default Service;