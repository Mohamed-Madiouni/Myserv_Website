import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import "../navbar.css";
function Navbar({setPad}) {
    const [navHeight,setNavHeight]=useState("80px")
    const [imgHeight,setimgHeight]=useState("35px")
    const [imgwidth,setImgWidth]=useState("140px")
    const [drop,setDrop] = useState({valeur:0})
    const [under,setUnder] = useState(0)
    const [size,setSize] = useState(false)
    const [clk,setClk] = useState(false)
    
    useEffect(()=>{
     window.addEventListener("scroll",()=>{
if(window.scrollY>0)
{
    setNavHeight("55px")
    setimgHeight("30px")
    setImgWidth("110px")
    setPad("55px")
}
else{
    setNavHeight("80px")
    setimgHeight("35px")
setImgWidth("140px")
window.innerWidth>992&&setPad("80px")
} 
     })  
    })
    useEffect(()=>{
window.addEventListener("resize",()=>{
    if(window.innerWidth<=992)
    {
        setSize(true)
    setPad("55px")
}
    else
   { 
     setSize(false)
    setNavHeight("80px")
    setimgHeight("35px")
setImgWidth("140px")
setPad("80px")
  }
})

    })

    useEffect(()=>{
        if(window.innerWidth<=992)
        {
            setSize(true)
        setPad("55px")
    }
    if(window.scrollY>0)
{
    setNavHeight("55px")
    setimgHeight("30px")
    setImgWidth("110px")
    setPad("55px")
}
    },[])
    
    
       
    
  return (
    <>
     { size?
     <div className="row navb" style={{ height:clk?290:55}}>
       
 <div className="col-8 pad"  style={{height:55,display:"flex",alignItems:"center",justifyContent:"flex-start"}}>
          <Link to="/">
          <img src="/vibtic.png" alt="vibtic" className="img_vib"  style={{width:140 ,height:35}} />
        </Link>
        </div>
<div className="col-3" style={{height:55,display:"flex",justifyContent:"flex-end",alignItems:"center",fontSize:25}}>
<MDBIcon icon={clk?"times":"align-justify"}  className="grey-text" onClick={()=>setClk(!clk)}/>

</div>


 {clk&& <div className="col-8 pad"  style={{marginBottom:110,lineHeight:"23px"}}>

  <ul className="ul_drop" style={{listStyleType:"none",padding:0,margin:0,color:"gray",fontSize:14,fontWeight: 500}}>
              <li>
                <Link to="/"> <span>QUI SOMMES-NOUS ?</span></Link>
               
                 
                 {/* <ul style={{listStyleType:"none",paddingLeft:10,margin:0}}>
                 <li>
                  VIBTIC
              </li>
              <li>
                 compétences & expertise
              </li>
              <li>
                 implantation
              </li>
              <li>
                  nos valeurs et nos engagements
              </li>
              <li>
                  références
              </li>
                 </ul> */}
              </li>
              <li>
                <span>NOS ACTIVITÉS</span>
              
              <ul style={{listStyleType:"none",paddingLeft:10,margin:0}}>
              
              <li>
                  systéme d'information
              </li>
              <li>
                 réseaux & sécurité
              </li>
              {/* <li>
                système
              </li> */}
              <li>
                  application web
              </li>
              <li>
                  gestion du projet
              </li>
          
              </ul>
              </li>
              <li>
                <span> NOUS REJOINDRE</span>
             
                <ul style={{listStyleType:"none",paddingLeft:10,margin:0}}>
                {/* <li>
                 notre politique rh
              </li> */}
              <li>
                 nos offres d'emploi
              </li>
              <li>
                candidature spantannée
              </li>
                </ul>
              </li>
              <li>
                <Link to="/contact"><span>NOUS CONTACTER</span> </Link>
             
              </li>
             
          </ul>
  

  
</div>}

     </div>
     
     :     
     <div  className="row navb" style={{  height:navHeight&&navHeight }}>
        <div className="col-4" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Link to="/"><img src="/vibtic.png" alt="vibtic" style={{width:imgwidth ,height:imgHeight, transition: "width 0.5s"}} /></Link> 
        </div>
        <div className="col-xl-7 col-8 second">
            <div className="drop" style={{position:"relative",textDecoration:under==1&&"underline"}}>
          <Link to="/" onMouseEnter={()=>{setDrop({...drop,valeur:1})}} onClick={()=>{setDrop({...drop,valeur:1})}}>
            QUI SOMMES-NOUS ?
            {/* <MDBIcon icon="angle-down" className="ml-1" size="lg"/> */}
          </Link>
         {/* { drop.valeur==1&& <div style={{position:"absolute",top:30,right:0,width:"max-content"}}  onMouseLeave={()=>{setDrop({...drop,valeur:0});setUnder(0)}}>
          <ul  style={{listStyleType:"none",padding:0,margin:0}}>
              <li>
                  VIBTIC
              </li>
              <li>
                 compétences & expertise
              </li>
              <li>
                 implantation
              </li>
              <li>
                  nos valeurs et nos engagements
              </li>
              <li>
                  références
              </li>
          </ul>
          </div>} */}
          </div >
          <div className="drop" style={{position:"relative",textDecoration:under==2&&"underline"}}>
          <Link to="" onMouseEnter={()=>{setDrop({...drop,valeur:2});setUnder(2)}} onClick={()=>{setDrop({...drop,valeur:2});setUnder(2)}} >
            NOS ACTIVITÉS <MDBIcon icon="angle-down" className="ml-1" size="lg" />
          </Link>
          {drop.valeur==2&&<div style={{position:"absolute",top:30,right:0,width:"max-content"}} onMouseLeave={()=>{setDrop({...drop,valeur:0});setUnder(0)}}>
          <ul  style={{listStyleType:"none",padding:0,margin:0}}>
              <li>
                  systéme d'information
              </li>
              <li>
                 réseaux & sécurité
              </li>
              {/* <li>
                système
              </li> */}
              <li>
                  application web
              </li>
              <li>
                  gestion du projet
              </li>
          </ul>
          </div>}
          </div>
          <div className="drop" style={{position:"relative",textDecoration:under==3&&"underline"}}>
          <Link to="" onMouseEnter={()=>{setDrop({...drop,valeur:3});setUnder(3)}} onClick={()=>{setDrop({...drop,valeur:3});setUnder(3)}}>
            NOUS REJOINDRE <MDBIcon icon="angle-down" className="ml-1" size="lg"/>
          </Link>
         {drop.valeur==3&& <div  style={{position:"absolute",top:30,right:0,width:"max-content"}} onMouseLeave={()=>{setDrop({...drop,valeur:0});setUnder(0)}}>
         <ul  style={{listStyleType:"none",padding:0,margin:0}}>
              {/* <li>
                 notre politique rh
              </li> */}
              <li>
                 nos offres d'emploi
              </li>
              <li>
                candidature spantannée
              </li>
             
          </ul>
          </div>}
          </div>
          <div style={{position:"relative"}}>
          <Link to="/contact">NOUS CONTACTER</Link>
          </div>
        </div>
      </div>}
    </>
  );
}

export default Navbar;
