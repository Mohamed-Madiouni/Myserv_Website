import React from 'react'
import { Link } from 'react-router-dom'
import "../footer.css"
function Footer() {
    return (
        <div className="footer">
            <div style={{display:"flex",height:"100%",justifyContent:"flex-start",alignItems:"flex-end"}}>
                <p style={{width:"50%",display:"flex",marginLeft:"2%" ,color:"rgb(243, 243, 243)",fontSize:12}}>
               <span style={{marginRight:10}}>© Copyright VIBTIC 2020 </span>|<Link to="/contact" style={{marginLeft:10}}>Nous contacter</Link>
                </p>

            </div>
        </div>
    )
}

export default Footer
