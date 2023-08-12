import React from 'react'
import { useState } from 'react'
import Displayweather from './Displayweather';

function Weatherapp() {
    const apikey = 'c908a73953bba13c92591c5fbb194643';

    const [form, setForm] = useState({
        city:"",
        country:""
    })

    async function weatherData(e){
        e.preventDefault();
        if(form.city==='' || form.country === ''){
            alert("Please Enter The City Name!")
        }
        else{
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${apikey}`
            ).then((res) => res.json()
            ).then((data) => data)

            setWeather({
                data:data
            })
        }
    }

    const handleChange = (e) =>{
        let name=e.target.name;
        let value= e.target.value;

        if(name ==='city'){
            setForm({...form, city:value})
        }
        if(name ==='country'){
            setForm({...form, country:value})
        }
    }
    const [weather, setWeather] = useState([])
  return (
    <div>
        <h1 className="display-1">WEATHER</h1>
        <br />
        <form>
            <div className='input-group mb-3 container'>
            <input type="text" name='city' className='form-control' placeholder='city' onChange={e => handleChange(e)}/>
            <input type="text" name='country' className='form-control' placeholder='country' onChange={ e=> handleChange(e)} />
            </div>
            <button className="btn btn-primary" onClick={e=> weatherData(e)}>Submit</button>

        </form>
        {
            weather.data !== undefined ?
            <div> <Displayweather data={weather.data} /> </div>
            :null
        }
    </div>
  )
}

export default Weatherapp
