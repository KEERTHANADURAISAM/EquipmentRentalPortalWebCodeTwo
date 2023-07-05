import React, { useEffect, useState } from "react";
import "./TreadMill.css";
import arrow from "./left-arrow.png";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import treadmill from "./treadmills.webp";
import axios from "axios";

const Treadmill = () => {
  const [treadimg,setTreadImg]=useState()
  const navigate = useNavigate();
  const fitnessEquipmentPage = () => {
    navigate("/portal/fitness-equipment");
  };
  useEffect=(()=>{
    loadData();
  },[])
  const loadData = async() => {
    const getimage=await axios.get('http://localhost:5000/viewuser')
    console.log(getimage);
    setTreadImg(getimage.data);
    console.log(treadimg);

  }
  return (
    <div>
      <div className="equipment-nav-container">
        <nav className="equipmentNav">
          <img src={arrow} alt="" className="arrow-img" />
          <span className="equipmentSpan" onClick={fitnessEquipmentPage}>
            Fitness
          </span>
          <img src={arrow} alt="" className="arrow-img1" />
          <span className="equipmentSpan">TreadMill</span>
        </nav>
      </div>
      <div className="tread-head">
        <h1> Treadmill</h1>
      </div>
      <div className="tread-container-grid">
        {/* <div className="tread-card">
          <div className="tread-img-div">
            <img src="" alt="" />
          </div>
          <div className="tread-content">
            <p>this is treadmill</p>
          </div>
        </div>
        <div className="tread-card">
          <div className="tread-img-div">
            <img src="" alt="" />
          </div>
          <div className="tread-content">
            <p>this is treadmill</p>
          </div>
        </div> */}
        <div className="tread-card">
          <div className="tread-img-div">
            <img src={treadmill} alt="" className="tread-img-stock" />
          </div>
          <div className="tread-content">
            <p>this is treadmill</p>
          </div>
          <div className="tread-cart">
            <button onClick={loadData}>button</button>
            <p className="">info</p>
          </div>
        </div>
      </div>
      <div className="out-of-stock-div">
        <button className="out-of-stock-btn">OUT OF STOCK</button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Treadmill;
