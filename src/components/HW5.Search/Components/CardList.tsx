import Card from './Card'
import { BnWData } from '../data/BnWData' 
import '../style/CardList.css';

interface CardList {
  data: BnWData[]; 
}

function CardList({data}:CardList) {
 const cards = data.map(data => ({
   id: data.id,
   src: '../assets/b1.jpeg',
   title: data.name,
   des: data.description
 }))

 return (
   <div>
     {cards.map(card => (
       <Card 
         key={card.id}
         src={card.src}
         title={card.title}
         des={card.des}
       />
     ))}
   </div>
 )
}

export default CardList