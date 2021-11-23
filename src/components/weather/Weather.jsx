import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { MdOutlineWbSunny } from "react-icons/md";
import { BsWind } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import './w.css';

const WeatherBody = styled.div`
height: 560px;
width: 350px;
background: #4F3B75;
margin-top: 50px;
`
const WeatherContent = styled.div``
const WeatherDateTimeCity = styled.div`
text-align: center;
color: #fff;

p{
    margin-bottom: 3px;
    opacity: .8;
}

h2{
    margin-top: 4px;
    margin-bottom: 4px;
    font-weight: 400;
}
`
const WeatherStatus = styled.div``
const WeatherIcon = styled.div`
color: #fff;
display: flex;
justify-content: center;
align-items: center;
height: 200px;
width: 100%;
font-size: 160px;
margin-top: 30px;
margin-bottom: 2px;
`
const WeatherTemps = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 28px;
font-weight: 300;
color: #fff;
margin-top: 0px;

`
const WeatherStatusReport = styled.div`
display: flex;
flex-direction: column;

h3{
color: #f5ecec;
font-size: 18px;
font-weight: 200;
text-align:center;

&:after{
    content: '';
    display: block;
    height: 2px;
    width: 80%;
    color: #fff;
}
}

`
const WeatherTimes = styled.div`
display: flex;
flex-direction: row;
width: 100%;

`
const WeatherHour = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
flex: 1 0 33%;
text-align: center;
margin-top: 20px;

`
const WeatherSearch = styled.form`
height: 40px;
padding: 5px;
width: 100%;

input{
    height: 100%;
    width: 100%;
    padding: 4px 6px;
    font-size: 20px;
    opacity: .7;
    border: none;
    outline: none;
    border-radius: 5px;
}
`

const Weather = () => {

    const [query, setQuery] = useState("");
    const [data, setData] = useState({})

   
    const search = async(e) => {
        e.preventDefault();

        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=9ebd0651154caf443bd14e66b49154c5`)
        .then(res => res.json()).then(result => {
            setData(result);
            console.log(result);
        });
        
    }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today  = new Date();
    const reqDate = today.toLocaleDateString("en-US", options);
    const reqTime = today.getHours() + ":" + today.getMinutes();

    return (
        <>
            <WeatherBody>
                <WeatherContent>
                    <WeatherSearch onSubmit={search}>
                        
                        <input type="text" placeholder='City' 
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}
                        
                        />
                    </WeatherSearch>
                    <WeatherDateTimeCity>
                        <p>{reqDate}</p>
                        <h2>{reqTime}</h2>
                        <p>{data.name}</p>
                    </WeatherDateTimeCity>
                    <WeatherStatus>
                        <WeatherIcon>
                            <MdOutlineWbSunny />
                        </WeatherIcon>
                        {(typeof data.main != "undefined") ? (
                            <>
                            <WeatherTemps>
                            <h1>{Math.round(data.main.temp - 273)}&deg;c</h1>
                        </WeatherTemps>
                        <WeatherStatusReport>
                            <h3>Monday</h3>
                            <WeatherTimes>
                                <WeatherHour>
                                    <p>Humidity</p>
                                    <WiHumidity className='icon-x'/>
                                    <h4>{data.main.humidity}</h4>
                                </WeatherHour>
                                <WeatherHour>
                                    <p>WindSpeed</p>
                                    <BsWind className='icon-x'/>
                                    <h4>{data.wind.speed}</h4>
                                </WeatherHour>
                                <WeatherHour>
                                    <p>Max Temp</p>
                                    <FaTemperatureHigh className='icon-x'/>
                                    <h4>{Math.round(data.main.temp - 273)}&deg;c</h4>
                                </WeatherHour>
                                
                            </WeatherTimes>
                        </WeatherStatusReport>
                        </>
                        ) : ('')}
                        
                    </WeatherStatus>
                </WeatherContent>
            </WeatherBody>
        </>
    )
}

export default Weather
