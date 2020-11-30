import React, { useState } from "react";
import "../contact.css";
function Contact() {

const [contactData,setContactData] = useState({
  nom:"",
  email:"",
  sujet:"",
  message:"",
})

const onChange = (e) =>{
setContactData({...contactData,[e.target.id]:e.target.value})
}

const onSubmit= (e) =>{
e.preventDefault()
console.log(contactData)
}

  return (
    <div>
      <div style={{ position: "relative" }}>
        <div
          className="contact_img"
          style={{ width: "100%", height: 250 }}
        ></div>
        <p className="contact_para">Nous contacter</p>
      </div>

<div className="row" style={{margin:0,width:"100%",background:"rgb(243, 243, 243)"}}>
    <div className="col-lg-6 col-12 container">
    
<form className="text-center  p-5" action="#!" onSubmit={onSubmit}>
 
    <input type="text" id="nom" value={contactData.nom} className="form-control mb-4" placeholder="Nom" onChange={onChange}/>
    <input type="email" id="email" value={contactData.email} className="form-control mb-4" placeholder="E-mail" onChange={onChange}/>
    <input type="text" id="sujet" value={contactData.sujet} className="form-control mb-4" placeholder="Sujet" onChange={onChange}/>
    <div className="form-group">
        <textarea className="form-control rounded-0" id="message" value={contactData.message} rows="5" placeholder="Message" onChange={onChange}></textarea>
    </div>
    
    <button className="btn  btn-block" type="submit" style={{background:"white"}}>Envoyer</button>

</form>


    </div>
    <div className="col-lg-6 col-12 container" style={{display:"flex",justifyContent:"center",flexDirection:"column",paddingLeft:"10%"}}>
<div style={{marginBottom:50}}>
        <h5 >
            Addresse
        </h5>
<p>
2 Rue Erik Satie 94000 Créteil, France
</p>
</div>
<div style={{marginBottom:50}}>
<h5>
Phone
</h5>
<p>
+33651527439
</p>
</div>
<div style={{marginBottom:50}}>
<h5>
Email
</h5>
<p>
contact@vibtic.com
</p>
</div>
    </div>

</div>


      <div style={{height:450}}>
        <iframe
          style={{ border: 0, width: "100%",height:"100%" }}
          title="myFrame"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBSZLoDPxvY96AxQbxFDlhXxiTS5JxgeDc&q=2 Rue Erik Satie 94000 Créteil, France"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
