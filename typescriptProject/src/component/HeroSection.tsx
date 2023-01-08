import React from 'react';
import { Container } from "react-bootstrap";
export default function HeroSection() {

     const HeroItemLister = HeroListItem.map(Heroitems =>
        <div key={Heroitems.id}>

<Container>
<div className="heroitemchild">
    <div className='schedulesearch'>
        
    </div>
<div>
      <div className='heroh2'>
            <h2>{Heroitems.HerolistOne}</h2>
        </div>

        <div className='heroptag'>
            <p>{Heroitems.Herolisttwo}</p>
        </div>

        <button className='herobutton'>{Heroitems.Herolistthree}</button>
</div>
        <div className='heroimage'>
        <img src={Heroitems.HeroImage}/>
        </div>
</div>

</Container>
   </div>
     )
     


    return(
     
<>
    {HeroItemLister}
</>
       
    )
    
}


export const HeroListItem = [
    {
        id:0,
        HerolistOne:"ASTRO LUXURY CAR RENTAL",
        Herolisttwo:"Rent premium cars only with your id cards.  Wherever you want, whenever you wish, without the cost of owning a car.",
        Herolistthree:"Start Now",
        HeroImage:"./assets/firstcar.png",
    }
]
