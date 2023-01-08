import {useState} from "react";
import { Link } from 'react-router-dom';
import { Navitemdata } from "./Navdata";
import { Container } from "react-bootstrap";
import { FiMenu,FiX } from 'react-icons/fi';

export default function NavbarContainer() {

    const [clickToggle,setclickToggle] = useState(false);

   const MenuToggle = () => setclickToggle(!clickToggle)


  const list = Navitemdata.map(navdata =>
    <div key={navdata.id} className="Navcontainer">
        
   <Container>
   <div className={clickToggle ? "Navchild" :"Navchild expand"}>
        <div className="logo">
        <Link to="/" >
        <img src={navdata.navLogo} alt={navdata.logoname}/>
        </Link>
        </div>


        <div className="navsubchild">
            
                <div className="navlinkchild">
                    <div className="home">
                    <Link to="/" className="homelink">
                    {navdata.navCars}
                    </Link>
                    </div>

                    <div  className="home">
                    <Link to="/" className="whylink">
                    {navdata.navwhychoose}
                    </Link>

                    </div>

                    <div  className="home">
                    <Link to="/" className="recomendlink">
                    {navdata.navOurRecommend}
                    </Link>
                    </div>

                   

                    <div  className="home">
                    <Link to="/" className="aboutlink">
                    {navdata.navAboutUs}
                    </Link>
                    </div>
                    <div className="inputcontainerlink">
                <input type="text" placeholder={navdata.navPlaceholder} />
             </div>

                </div>
            
             <div className="inputcontainer">
                <input type="text" placeholder={navdata.navPlaceholder} />
             </div>
            
        </div>

        <div className="phonenmb">
            {navdata.navPhoneNumber}
        </div>

        <div className="menuicon" onClick={MenuToggle}>
         {
            clickToggle?<FiX size="35"/>:<FiMenu size="35"/>
         }
        </div>
        </div>

        
   </Container>
    </div>
    ) 
return(
    <div>
{list}

    </div>
)
}