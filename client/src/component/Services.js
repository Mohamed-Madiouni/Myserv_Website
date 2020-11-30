import React from 'react'
import "../services.css"

function Services() {
    return (
        <div>
             <div style={{ position: "relative" }}>
        <div
          className="services_img"
          style={{ width: "100%", height: 250, backgroundImage: "url(/services_img.jpg)", }}
        ></div>
        <p className="services_para">Nos domaines d'expertises</p>
      </div>

<div className="services_list" style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
    <a href="#systeme_information"><span >SYSTÈME D’INFORMATION</span></a> 
    <a href="#reseau"><span >RÉSEAUX ET SÉCURITÉ</span></a>
    <a href="#web"><span >APPLICATIONS WEB</span></a>
    <a href="#projet"><span >GESTION DU PROJET</span></a>

</div>

      <div className="row" id="systeme_information" style={{margin:0,width:"100%"}}>
      <div className="col-12 col-lg-6 systeme_info" style={{padding:0,
        backgroundImage: "url(/systeme_information.jpg)",
        backgroundPosition: "center" ,
        backgroundRepeat: "no-repeat" ,
        backgroundSize: "cover" 
        }}> 
<div>
<i className="fas fa-sitemap"></i>
<span>S.I</span>
</div>

      </div>
      <div className="col-12 col-lg-6">
          <p>
      Le système d’information (SI) est un élément central d’une entreprise ou d’une organisation. Il permet aux différents acteurs de véhiculer des informations et de communiquer grâce à un ensemble de ressources matérielles, humaines et logicielles.
      <br/>
       Un SI permet de créer, collecter, stocker, traiter, modifier des informations sous divers formats.
      <br/>
      Vous souhaitez avoir un système d’information performant, évolutif et optimisé ou avoir un SI adapté à votre organisation et efficace, VIBTIC vous apportera une meilleure connaissance de votre SI grâce aux conseils, analyse et préconisations détaillées.
      </p>
      </div>
        </div>

        <div className="row" id="reseau" style={{margin:0,width:"100%"}}>
      <div className="col-12 col-lg-6 systeme_info" style={{padding:0,
        backgroundImage: "url(/reseau_securité.jpg)",
        backgroundPosition: "center" ,
        backgroundRepeat: "no-repeat" ,
        backgroundSize: "cover" 
        }}> 
<div>
<i className="fas fa-lock"></i>
<span>RÉSEAUX</span>
</div>

      </div>
      <div className="col-12 col-lg-6">
          <p>
          Un réseau informatique désigne un ensemble d’ordinateurs et/ou de périphériques reliés entre eux physiquement ou grâce à des ondes radio dans le but d’échanger des informations.
      <br/>
      Parce que les données d’une entreprise sont privées et ne doivent pas tomber à la portée de tous, le pare-feu doit protéger l’entreprise des intrusions extérieures via Internet. Il ne laisse pas n’importe qui accéder au réseau, seules les personnes autorisées peuvent le faire.
      <br/>
      VIBTIC vous accompagne pour tous vos besoins en réseaux et sécurité informatiques,
Nous vous apportons une réponse à toutes les difficultés en sécurisation des réseaux locaux et des infrastructures que vous pouvez rencontrer.
      </p>
      </div>
        </div>

        <div className="row" id="web" style={{margin:0,width:"100%"}}>
      <div className="col-12 col-lg-6 systeme_info" style={{padding:0,
        backgroundImage: "url(/developpement.jpeg)",
        backgroundPosition: "center" ,
        backgroundRepeat: "no-repeat" ,
        backgroundSize: "cover" 
        }}> 
<div>
<i className="fas fa-lock"></i>
<span style={{textTransform:"uppercase"}}>web</span>
</div>

      </div>
      <div className="col-12 col-lg-6">
          <p>
          Le développement informatique permet de répondre à la demande d’entreprises afin de leur créer des programmes personnalisés.
      <br/>
      Choisir une entreprise de développement informatique, c’est sélectionner un partenaire qui saura comprendre les besoins exacts de votre entreprise, de votre domaine d’activité. Un développeur qui saura faire preuve d’une réelle empathie, disposant, bien sûr, des capacités et des connaissances suffisantes en informatique, mais aussi capable d’un dialogue efficace avec vous et avec vos services.
      <br/>
      VIBTIC vous propose des solutions sur mesure et de qualité répondant à vos besoins. Fonctionnalités et principales caractéristiques en lien avec votre secteur d’activité, design unique, contenu flexible, performance.
      </p>
      </div>
        </div>

        <div className="row" id="projet" style={{margin:0,width:"100%"}}>
      <div className="col-12 col-lg-6 systeme_info" style={{padding:0,
        backgroundImage: "url(/projet.jpg)",
        backgroundPosition: "center" ,
        backgroundRepeat: "no-repeat" ,
        backgroundSize: "cover" 
        }}> 
<div>
<i className="fas fa-lock"></i>
<span style={{textTransform:"uppercase"}}>Projets</span>
</div>

      </div>
      <div className="col-12 col-lg-6">
          <p>
          Grâce à une bonne gestion de projet, vous pourrez vous assurer que les tâches menées visant à atteindre les différents objectifs soient maintenues et respectées.
      <br/>
      De plus, les qualités de gestion permettront d’éviter les risques, mais aussi d’utiliser de manière efficace et effective les ressources mises à la disposition du groupe de travail.
      <br/>
      VIBTIC vous accompagner dans vos projets en fonction de vos besoins, on vous conseille afin d’améliorer votre performance et améliorer vos compétences et nous ensemble, trouvons les solutions les plus performantes.
      </p>
      </div>
        </div>
        </div>
    )
}

export default Services
