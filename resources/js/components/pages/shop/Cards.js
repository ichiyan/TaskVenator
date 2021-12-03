import Button from "@restart/ui/esm/Button";
import {Link, React, useEffect, useState, 
      AddPotionForm, AddOutfitForm, AddCardForm, Swal, ReactTooltip,axios } from "../../../index";

function Cards(){
    return(
        <section className="container party-section">
            <div className="party-nav">
                        <div className="party-nav-item"><Link to="/all">All</Link></div>
                        <div className="party-nav-item"><Link to="/potions">Potions</Link></div>
                        <div className="party-nav-item"><Link to="/weapons">Weapons</Link></div>
                        <div className="party-nav-item party-active-nav"><Link to="/cards">Cards</Link></div>
                        <div className="party-nav-item"><Link to="/outfit">Outfit</Link></div>
            </div>
        </section>
    );
}

export default Cards;