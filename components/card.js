/**
 * Created by macbook on 28.09.17.
 */

const Card = ({image, name, text}) => (
    <div>
        <img src={image}/>
        <h4>{name}</h4>
        <p>{text}</p>
    </div>
)

export default Card
