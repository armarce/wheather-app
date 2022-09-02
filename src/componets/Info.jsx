export function Info({data, temp, icon, flag}){

    return (
            <>
                <h2>{data.name}, <img id="flag" src={flag}/> {data?.sys?.country}</h2>
                <img id="icon" src={icon}/>
                <span>{temp}</span>
                <h3>{data?.weather?.[0]?.description}</h3>
                <ul>
                    <li><i className="fa-solid fa-wind"></i> <strong>Win speed:</strong> {data?.wind?.speed} m/s</li>
                    <li><i className="fa-solid fa-cloud"></i> <strong>Clouds:</strong> {data?.clouds?.all} %</li>
                    <li><i className="fa-solid fa-temperature-full"></i> <strong>Preesure:</strong> {data?.main?.pressure} hPa</li>
                    <li><i className="fa-solid fa-droplet"></i> <strong>Humidity:</strong> {data?.main?.humidity} %</li>
                </ul>
            </>
    )

}