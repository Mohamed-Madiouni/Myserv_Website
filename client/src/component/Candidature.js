import React, { useState } from 'react'
import "../candidature.css"
function Candidature() {

    const [condidatData,setCondidatData] = useState({
        nom:"",
        email:"",
        telephone:"",
        message:"",
        cv:"",
        lettre:""
      })
      
      const onChange = (e) =>{
          if(e.target.id=="cv"||e.target.id=="lettre")
          setCondidatData({...condidatData,[e.target.id]:e.target.files[0]})
          else
      setCondidatData({...condidatData,[e.target.id]:e.target.value})
      }
      
      const onSubmit= (e) =>{
      e.preventDefault()
      console.log(condidatData)
      }

    return (
        <div>
         <div style={{ position: "relative" }}>
        <div
          className="candidature_img"
          style={{ width: "100%", height: 250, backgroundImage: "url(/candidature.jpg)", }}
        ></div>
        <p className="candidature_para">Candidature spontanée</p>
      </div>
      <div className="deposer" style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"15px 0px",textTransform:"uppercase"}}>
          Déposer une candidature spontanée
      </div>
      <div className="container" style={{width:"100%"}}>
      <form className="text-center  p-5" action="#!" onSubmit={onSubmit}>
 
 <input type="text" id="nom" value={condidatData.nom} className="form-control mb-4" placeholder="Nom complet*" onChange={onChange}/>
 <input type="email" id="email" value={condidatData.email} className="form-control mb-4" placeholder="E-mail*" onChange={onChange}/>
 <input type="text" id="telephone" value={condidatData.telephone} className="form-control mb-4" placeholder="Telephone*" onChange={onChange}/>
 <div className="form-group">
     <textarea className="form-control rounded-0" id="message" value={condidatData.message} rows="5" placeholder="Message" onChange={onChange}></textarea>
 </div>

  <label style={{width:"100%",textAlign:"start",color:"gray"}} htmlFor="cv">Votre CV*</label>
<input type="file" id="cv" style={{marginBottom:10,width:"100%",border:"1px solid #ced4da",outline:"none",paddingLeft:20,paddingTop:10,height:50,fontSize:13}}  onChange={onChange}/>
<label style={{width:"100%",textAlign:"start",color:"gray"}} htmlFor="cv">Lettre de motivation</label>
<input type="file" id="lettre" style={{marginBottom:10,width:"100%",border:"1px solid #ced4da",outline:"none",paddingLeft:20,paddingTop:10,height:50,fontSize:13}} onChange={onChange}/>
 {/* <div className="input-group" style={{marginBottom:24}}>
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroupFileAddon01">Votre CV*</span>
  </div>
  <div className="custom-file">
    <input type="file" className="custom-file-input" id="cv"
      aria-describedby="inputGroupFileAddon01"
      />
    <label className="custom-file-label" htmlFor="cv">Choisir un fichier</label>
  </div>
</div> 
 <div className="input-group" style={{marginBottom:11}}>
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroupFileAddon01">Lettre de motivation</span>
  </div>
  <div className="custom-file">
    <input type="file" className="custom-file-input" id="lettre"
      aria-describedby="inputGroupFileAddon01"/>
    <label className="custom-file-label" htmlFor="lettre">Choisir un fichier</label>
  </div>
</div> */}
<div style={{width:"100%",textAlign:"start",color:"gray",marginBottom:10}}>*Champs requis</div>
 <button className="btn  btn-block" type="submit" style={{background:"white",border:"gray"}}>Envoyer</button>

</form>
      </div>
        </div>
    )
}

export default Candidature
