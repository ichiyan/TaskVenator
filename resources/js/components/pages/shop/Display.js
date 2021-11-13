import React from "react";

function Display ({products, bought, setBought, clicked}){
    
    const submitToHandler=(event)=>{
        event.preventDefault();
        setBought([
            ...bought,{
                name: event.target.weaponName.value, 
                class: event.target.weaponClass.value,
                damage: event.target.weaponDamage.value,
                type:event.target.weaponType.value
            }
        ])
        alert("napalit na nimo successfully");

        console.log(event.target.weaponName);
    }
    return (
        <ul>
        {products.map((p, index)=>{
            if(p.type === clicked){
            return (
              <div key = {index} className="Shop-items">
                      <h3>{p.index}</h3>
                     <h3>{p.name}</h3>
                     <h3>{p.type}</h3>
                     <h3>{p.class}</h3>
                     <h3>{p.damage}</h3>
                 <form onSubmit={submitToHandler}>
               
                     <input name="weaponName" value={p.name} type="hidden" /><br></br>
                     <input name="weaponClass" value={p.class} type="hidden" /><br></br>
                     <input name="weaponDamage" value={p.damage} type="hidden" /><br></br>
                     <input name="weaponType" value={p.type} type="hidden" /><br></br>
                     <button type="submit">buy</button>
                </form>
                </div>)
            }else if (clicked === "All"){
                return( <div key = {index} className="Shop-items">
                <h3>{p.index}</h3>
               <h3>{p.name}</h3>
               <h3>{p.type}</h3>
               <h3>{p.class}</h3>
               <h3>{p.damage}</h3>
           <form onSubmit={submitToHandler}>
          
               <input name="weaponName" value={p.name} type="hidden" /><br></br>
               <input name="weaponClass" value={p.class} type="hidden" /><br></br>
               <input name="weaponDamage" value={p.damage} type="hidden" /><br></br>
               <input name="weaponType" value={p.type} type="hidden" /><br></br>
               <button type="submit">buy</button>
          </form>
          </div>);
            }else if (clicked === ""){
                return( <div key = {index} className="Shop-items">
                <h3>{p.index}</h3>
               <h3>{p.name}</h3>
               <h3>{p.type}</h3>
               <h3>{p.class}</h3>
               <h3>{p.damage}</h3>
           <form onSubmit={submitToHandler}>
               <input name="weaponName" value={p.name} type="hidden" /><br></br>
               <input name="weaponClass" value={p.class} type="hidden" /><br></br>
               <input name="weaponDamage" value={p.damage} type="hidden" /><br></br>
               <input name="weaponType" value={p.type} type="hidden" /><br></br>
               <button type="submit">buy</button>
          </form>
          </div>);
            }else{
                return("");
            }
        })}
       
      </ul>
    );
}
export default Display;