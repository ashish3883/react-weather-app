import React from 'react'

function Displayweather(props) {
    const { data } = props;
    console.log(data)
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    return (
        <div className='container'>
            <div>
                <span>
                    {data.name}, {data.sys.country}. Weather
                </span>
                {" "}
                <span>
                    As of {new Date().toLocaleTimeString()}
                </span>
                <h1>{Math.floor(data.main.temp - 273.15)}<sup>o</sup>C</h1>
                <span>{data.weather[0].main}</span>
                <img src={iconUrl} alt='' />
            </div>
            <div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr className='display-6'>
                            <th scope="col">High/Low</th>
                            <th scope="col">Humidity</th>
                            <th scope="col">Pressure</th>
                            <th scope="col">Visibility</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="fs-2">
                            <td>{Math.floor(data.main.temp_max - 273.15)}<sup>o</sup> / {" "}
                                {Math.floor(data.main.temp_min - 273.15)}<sup>o</sup></td>
                            <td>{data.main.humidity} %</td>
                            <td>{data.main.pressure} hPa</td>
                            <td>{data.visibility / 1000} KMs</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className='display-6'>
                            <th>Wind Speed</th>
                            <th>Wind Direction</th>
                            <th>Sunrise Time</th>
                            <th>Sunset Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="fs-2">
                            <td>{Math.floor((data.wind.speed * 18) / 5)} KM/Hr</td>
                            <td>{data.wind.deg} <sup>o</sup>deg</td>
                            <td>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</td>
                            <td>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Displayweather
