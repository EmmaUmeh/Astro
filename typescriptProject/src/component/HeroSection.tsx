import React from 'react';
import { Container } from "react-bootstrap";
import { TfiLocationPin,TfiAngleDown,TfiCalendar,TfiAlarmClock } from 'react-icons/tfi';
import { motion } from 'framer-motion';

                export default function HeroSection() {


                const Searchdetail = {
                searchPickup:"Pick Up",
                searchSetReminder:"Pick Up  Date",
                DailyReminder:"Daily Reminder",

                }
                    const HeroItemLister = HeroListItem.map(Heroitems =>
                        <div key={Heroitems.id} className="Herobanner">

                <Container>
                <div  className="heroitemchild">

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

               <div className='schedulecont'>
               <div className='schedulesearch'>
                    <div className='pickup'>
                    <div className='location'>
                    <button>
                    <TfiLocationPin size="30" color="black"/> <span className='searchdtl'>{Searchdetail.searchPickup} </span><TfiAngleDown className='angledown'/>
                    </button>
                    </div>
                    </div>

                    {/* second */}

                    <div className='pickup'>
                    <div className='location'>
                    <button>
                    <TfiCalendar size="30" color="black"/> <span className='searchdtl'>{Searchdetail.searchSetReminder} </span><TfiAngleDown className='angledown'/>
                    </button>
                    </div>
                    </div>

                    {/* third */}

                    <div className='pickup'>
                    <div className='location'>
                    <button>
                    <TfiAlarmClock size="30" color="black"/> <span className='searchdtl'>{Searchdetail.DailyReminder} </span><TfiAngleDown className='angledown'/>
                    </button>
                    </div>
                    </div>

                    {/* Search */}
                    <div className='searchbutton'>
                    <button>SEARCH</button>
                    </div>

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
