/**
 * Created by macbook on 28.09.17.
 */

const Card = ({image, name, text}) => (
    <div className="card">
        <img src={image} height="200" alt="Avatar"/>
        <h4>{name}</h4>
        <p>{text}</p>
    </div>
)

export default Card
