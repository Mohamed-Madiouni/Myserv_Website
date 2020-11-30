import React from "react";
import { useHistory } from "react-router-dom";
import "../home.css"
function Home() {
  const history=useHistory()
  return (
    <>
      <div className="welcome"style={{ width: "100%", position: "relative", height: 550 }}>
        <img src="/Home.gif" alt="Sécurité" width="100%" height="100%" />
        <p
          style={{
            position: "absolute",
            left: 10,
            color: "white",
            lineHeight: "55px",
            fontWeight: 400,
          }}
          className="msg-home"
        >
          Notre image de société dynamique et performante est basée sur la
          réactivité et la flexibilité pour répondre aux besoins de nos clients
        </p>
      </div>
      <div className="row service_home" style={{margin:0,width:"100%",height:"max-content"}}>
          <div className="col-12 col-lg-6 service_img" style={{position:"relative",padding:0,
        backgroundImage: "url(/service_img.jpg)",
        backgroundPosition: "center" ,
        backgroundRepeat: "no-repeat" ,
        backgroundSize: "cover" 
        }}> 
{/* <img src="/service_img.jpg" alt="services" width="100%" height="100%" /> */}
<p  style={{position: "absolute",}}
          className="service_para"
          >
    <b>Nos Service</b>
    <br/>
Créée en 2016 et basée à Paris
<br/>
Nous proposons les solutions les plus performantes et innovantes du marché et présentons des experts couvrants les dérniéres technologies
</p>
          </div>
          <div className="col-12 col-lg-6 " style={{padding:0}}>
<div className="row services_containers" style={{width:"100%",margin:0}}>
<div className="col-sm-6 col-12" style={{border:"1px solid gray",position:"relative",height:300,padding:2,cursor:"pointer"}}
onClick={()=>history.push("/services")}
>
<i className="fas fa-sitemap" style={{position:"absolute",top:10,right:10,fontSize:60}}></i>
<p style={{marginTop:85,marginBottom:0}} className="container">
  <b>SYSTÈME D’INFORMATION</b>
  <br/>
  VIBTIC vous apportera une meilleure connaissance de votre S.I grâce aux conseils, analyse et préconisations détaillées
</p>
  
</div>
<div className="col-12 col-sm-6" style={{border:"1px solid gray",position:"relative",height:300,padding:2,cursor:"pointer"}}
onClick={()=>history.push("/services")}
>
<i className="fas fa-lock" style={{position:"absolute",top:10,right:10,fontSize:60}}></i>
<p style={{marginTop:85,marginBottom:0}} className="container">
  <b>RÉSEAUX ET SÉCURITÉ</b>
  <br/>
  VIBTIC apporte une réponse à toutes les difficultés en sécurisation des réseaux locaux et des infrastructures que vous pouvez rencontrer
</p>
  
</div>
</div>
<div className="row services_containers" style={{width:"100%",margin:0}}>
<div className="col-12 col-sm-6" style={{border:"1px solid gray",position:"relative",height:300,padding:2,cursor:"pointer"}}
onClick={()=>history.push("/services")}
>
<i className="fas fa-desktop" style={{position:"absolute",top:10,right:10,fontSize:60}}></i>
<p style={{marginTop:85,marginBottom:0}} className="container">
  <b>APPLICATIONS WEB</b>
  <br/>
  Nous vous proposons des solutions sur mesure et de qualité répondant à vos besoins
</p>
  
</div>
<div className="col-12 col-sm-6" style={{border:"1px solid gray",position:"relative",height:300,padding:2,cursor:"pointer"}}
onClick={()=>history.push("/services")}
>
<i className="fas fas fa-puzzle-piece" style={{position:"absolute",top:10,right:10,fontSize:60}}></i>
<p style={{marginTop:85,marginBottom:0}} className="container">
  <b>GESTION DU PROJET</b>
  <br/>
  Nous vous accompagnons dans vos projets en fonction de vos besoins, on vous conseille afin d’améliorer votre performance..
</p>
  
</div>
</div>
          </div>

          
      </div>

      <div className="row" style={{width:"100%",margin:0,height:"fit-content",paddingBottom:10,backgroundColor: "rgb(243, 243, 243)"}}>
        <div  className="col-12" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
<p style={{fontSize:33,color: "rgb(71, 71, 71)",marginTop:30}}>
Nos compétences
</p>
        
<div className="container" style={{color:"gray",fontSize: "23px",lineHeight: "50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
<p style={{marginBottom:0}}>L’équipe VIBTIC se compose d’analystes, d’experts, de développeurs d’applications et d’infrastructure réseau et sécurité, hautement qualifiés</p>
</div>
</div>
<div className="compétence container" style={{marginTop:30}}>
  <div >
<p><i className="fas fa-check-double" style={{marginRight:10,fontSize:25}}></i> 
Fournir des résultats de qualité optimale</p>
<p>
<i className="fas fa-pencil-ruler" style={{marginRight:10,fontSize:25}}></i>
Le savoir faire le conseil et l'expertise
</p>
  </div>
  <div >
<p>
<i className="fas fa-user-check" style={{marginRight:10,fontSize:25}}></i>
Des collaborateurs intermédiaires motivés et opérationnels
</p>
<p>
<i className="fas fa-comments" style={{marginRight:10,fontSize:25}}></i>
Le Support
</p>
  </div>

</div>
        </div>

        <div className="row" style={{width:"100%",margin:0,height:"fit-content",marginBottom:10}}>
        <div  className="col-12" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
<p style={{fontSize:33,color: "rgb(71, 71, 71)",marginTop:30}}>
Nos Valeurs
</p>
        
<div className="container" style={{color:"gray",fontSize: "23px",lineHeight: "50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
<p>Nos valeurs sont au centre de notre action. Ancrées au sein de l’entreprise et partagées par nos équipes, elles sont  à l’écoute et au service de nos clients
<br/>
Notre rôle inclut également l'innovation et la qualité du travail

</p>
</div>
</div>
        </div>


      <div className="row partenaire " style={{width:"100%",margin:0,height:"max-content"}}>
        <div className="col-lg-6 col-12" style={{paddingRight:0}}>
          <p className="partenaire_text" style={{marginBottom:0}}>
            <b>Nos partenaires</b>
          <br/>
          Dans le cadre du conseil informatique, nous proposons les solutions les plus performantes et innovantes du marché et présentons des experts couvrants des technologies modernes pour fournir une solution complète à nos clients comme <span> Orange, SFR, Cisco et Tdf...</span>
          </p>
        </div>
        <div className="col-lg-6 col-12 container" style={{position:"relative",height:400}}>
<a href="https://boutique.orange.fr/">
<img src="https://www.vibtic.com/wp-content/uploads/2019/05/cropped-1200px-Orange_logo.svg_.png" width="20%" height="30%" style={{position:"absolute",top:"15%",right:"15%"}} alt="orange"/>
</a>
<a href="https://www.sfr.fr/">
<img src="https://www.vibtic.com/wp-content/uploads/2019/05/cropped-logo-officiel-sfr.jpg" width="20%" height="30%" style={{position:"absolute",top:"45%",right:"60%"}} alt="SFR"/>
</a>
<a href="https://www.tdf.fr/">
<img src="https://www.vibtic.com/wp-content/uploads/2019/05/Logotype_TDF.png" width="20%" height="30%" style={{position:"absolute",top:"15%",right:"50%"}} alt="TDF"/>
</a>
<a href="https://www.checkpoint.com/fr/">
<img src="/check_point.png" width="20%" height="30%" style={{position:"absolute",top:"18%",right:"65%"}} alt="check point"/>
</a>
<a href="https://www.cisco.com/">
<img src="/cisco.png" width="20%" height="30%" style={{position:"absolute",top:"42%",right:"18%"}} alt="cisco"/>     
</a>
<a href="https://mabanque.bnpparibas/">
<img src="https://www.vibtic.com/wp-content/uploads/2019/05/bnp-1000-1000.png" width="20%" height="30%" style={{position:"absolute",top:"18%",right:"35%"}} alt="bnp"/>      
</a>
<a href="https://partnerre.com/">
<img src="https://www.vibtic.com/wp-content/uploads/2019/05/PartnerRe_logo.svg_.png" width="20%" height="30%" style={{position:"absolute",top:"43%",right:"38%"}} alt="partner"/>
      </a> 
      </div>
      </div>

     

      {/* <div className="row" id ="contact" style={{width:"100%",margin:0,height:"max-content",position:"relative"}}>
        <img src="/contact_img.jpg" alt="contact us" width="100%" height="100%" style={{position:"absolute",top:0,filter: "brightness(30%)"}}/>
        <div className="col-lg-6 col-12 container" style={{height:600}}>

        </div>
        <div className="col-lg-6 col-12 container" style={{height:600}}>

        </div>
      </div> */}

    </>
  );
}

export default Home;
