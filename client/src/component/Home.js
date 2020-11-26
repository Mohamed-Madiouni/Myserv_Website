import React from "react";
import "../home.css"
function Home() {
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
          réactivité et la flexibilité pour répondre aux besoins de nos clients.
        </p>
      </div>
      <div className="row service_home" style={{margin:0,width:"100%"}}>
          <div className="col-12 col-md-6" style={{position:"relative",padding:0,height:"100%",
        
        }}> 
<img src="/service_img.jpg" alt="services" width="100%" height="100%" />
<p  style={{
            position: "absolute",
            left: 10,
            color: "white",
            lineHeight: "55px",
            top:20
          }}>
    <b>Nos service</b>
    <br/>
VIBTIC est une entreprise de conseil en ingénierie informatique, créée en 2016 et basée à Paris.
<br/>
Nous proposons les solutions les plus performantes et innovantes du marché et présentons des experts couvrants les dérniéres technologies.
</p>
          </div>
          
      </div>
    </>
  );
}

export default Home;
