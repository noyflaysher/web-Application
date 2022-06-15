import React from 'react'
import { useEffect, useState } from "react";
import { TiLocationOutline } from "react-icons/ti";
import {Footercontainer,FootercontainerTop,FootercontainerBot,FootercontainerMid} from "./Footer.styled"
import moment from "moment";

function Footer() {
  const _URL ="http://api.weatherapi.com/v1/current.json?aqi=no";
  const _KEY="e3c55ad24d104b8c940215558220406";
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    load();
  }, []);

  async function load(city="jerusalem"){
    try{
      const data = await fetch(`${_URL}&key=${_KEY}&q=${city}`);
      const res = await data.json();
      setWeather(res);
    } catch(err){}
    
  }
  return (
    <Footercontainer>

      <FootercontainerTop>
        <div>
          <p>Today</p>
          <p>
            {moment(weather?.location.localtime).format("h:mm a")}
          </p>
        </div>
        <p>
          {moment(weather?.location.localtime).format("MMM Do YY")}
        </p>
      </FootercontainerTop>
      <FootercontainerMid>
        <span>
          {weather?.current.temp_c} <span>°C</span>
        </span>
        <img
          width="50"
          height="50"
          src={weather?.current.condition.icon}
          alt={`Icon of ${weather?.location.country}`}
        />
      </FootercontainerMid>
      <FootercontainerBot>
        <TiLocationOutline color='#f8c514'/>
        <p>
          {weather?.location.country}, {weather?.location.name}
        </p>
      </FootercontainerBot>

    </Footercontainer>
  )
}

export default Footer