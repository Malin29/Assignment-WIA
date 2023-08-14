import React from "react";
import "./FooterStyles.css";

const Footer=()=>{
    return (
        <div className="footer">
            
            <div className="sb_footer-below">
            <div className="sb_footer-below-links">
                <a href="/Home"><div><p>HOME</p></div></a>
                <a href="/Company"><div><p>COMPANY</p></div></a>
                <a href="/Portfolio"><div><p>PORTFOLIO</p></div></a>
                <a href="/Blog"><div><p>BLOG</p></div></a>
            </div>

            
            <div className="sb_footer-copyright">
                <p>
                    @{new Date().getFullYear()} Creative Tim,made with love for a better web 
                </p>
            </div>
            </div>
        </div>
    )
}

export default Footer