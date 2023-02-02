import "../css/card.css";



function Card(props){
    return(
        <>
            <div className="card">
                <img src={props.item.imageUrl} alt={props.item.title} className="image"/>
                <div className="info">
                    <div className="location">
                        <img src="../images/location.svg" alt="" className="icon"/>
                        <span>{props.item.location}</span>
                        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <p className="title">{props.item.title}</p>
                    <span className="dates">{props.item.startDate} - {props.item.endDate}</span>
                    <p className="description">{props.item.description}</p>
                    
                </div>
            </div>
        </>
    )
}

export default Card;