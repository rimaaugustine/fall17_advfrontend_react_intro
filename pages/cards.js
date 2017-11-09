import Head from "next/head"
import Card from "../components/card.js"


const cards = [
    {
        image:"static/dog.jpg", name:"rima", text: "aasadadad",
    },
    {
        image:"static/dog.jpg", name:"rima", text: "asasasas",
    },
    {
        image:"static/dog.jpg", name:"asasassa", text: "asas",
    },
    {
        image:"static/dog.jpg", name:"timsdsd", text: "asda",
    }

]

const Page = () => (

    <div>
        <Head>
            <title>My seventh page!</title>
           
            <link rel="stylesheet" href="static/cards.css" />
            <meta name="description" content="List of cards" />
            <meta name="keywords" content="cards" />
            
        </Head>
        <h1>Cards!</h1>

        <div className="card-container">
            {cards.map((item, index) => (
                <Card image= {item.image} name={item.name} text={item.text} key={index}/>
                ))}


        </div>
    </div>



)

export default Page
