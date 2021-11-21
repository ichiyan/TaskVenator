import Button from "@restart/ui/esm/Button";
import React from "react";

function Display ({clicked}){
    if(clicked === "Potions"){
    return (
        <div className="shop-category">
            <div className="shop-categoryName">
                <h3>Hp Potion</h3>
            </div>
            <div className="shop-items">
                  <div className="shop-itemsImage">
                    <img src="assets/images/health-potion1.png"></img>
                  </div>
                  <div className="shop-itemsInfo">
                  <h6>Large Potion</h6>
                  <p>Heals 100hp</p>
                  <Button>12 <br></br> BUY</Button>
                  </div>
            </div>
           <div className="shop-hide">
                <div className="shop-itemsInfo">
                <h6>Medium Potion</h6>
                <p>Heals 70hp</p>
                </div> 
          </div>
          <div className="shop-items">
                <div className="shop-itemsImage">
                  <img src="assets/images/health-potion3.png"></img>
                </div>
                <div className="shop-itemsInfo">
                <h6>Small Potion</h6>
                <p>Heals 50hp</p>
                <Button>12 <br></br> BUY</Button>
                </div> 
          </div>
          <div className="shop-hide">
                <div className="shop-itemsInfo">
                <h6>Medium Potion</h6>
                <p>Heals 70hp</p>
                </div> 
          </div>
          <div className="shop-items">
                <div className="shop-itemsImage">
                  <img src="assets/images/health-potion3.png"></img>
                </div>
                <div className="shop-itemsInfo">
                <h6>Small Potion</h6>
                <p>Heals 50hp</p>
                <Button>12 <br></br> BUY</Button>
                </div> 
          </div>
          <div className="shop-hide">
                <div className="shop-itemsInfo">
                <h6>Medium Potion</h6>
                <p>Heals 70hp</p>
                </div> 
          </div>
          <div className="shop-items">
                <div className="shop-itemsImage">
                  <img src="assets/images/health-potion3.png"></img>
                </div>
                <div className="shop-itemsInfo">
                <h6>Small Potion</h6>
                <p>Heals 50hp</p>
                <Button>12 <br></br> BUY</Button>
                </div> 
          </div>
          <div className="shop-hide">
                <div className="shop-itemsInfo">
                <h6>Medium Potion</h6>
                <p>Heals 70hp</p>
                </div> 
          </div>
          <div className="shop-items">
                <div className="shop-itemsImage">
                  <img src="assets/images/health-potion3.png"></img>
                </div>
                <div className="shop-itemsInfo">
                <h6>Small Potion</h6>
                <p>Heals 50hp</p>
                <Button>12 <br></br> BUY</Button>
                </div> 
          </div>
          <div className="shop-hide">
                <div className="shop-itemsInfo">
                <h6>Medium Potion</h6>
                <p>Heals 70hp</p>
                </div> 
          </div>
          <div className="shop-categoryName">
                <h3>Powerup Potion</h3>
            </div>
            <div className="shop-items">
                <div className="shop-itemsImage">
                  <img src="assets/images/powerup-potion1.png"></img>
                </div>
                <div className="shop-itemsInfo">
                <h6>Large Potion</h6>
                <p>Add stuns for 2 seconds</p>
                <Button>12 <br></br> BUY</Button>
                </div> 
          </div>
          <div className="shop-items">
                <div className="shop-itemsImage">
                  <img src="assets/images/powerup-potion2.png"></img>
                </div>
                <div className="shop-itemsInfo">
                <h6>Medium Potion</h6>
                <p>Add stuns for 1 seconds</p>
                <Button>12 <br></br> BUY</Button>
                </div> 
          </div>

          <div className="shop-items">
                <div className="shop-itemsImage">
                  <img src="assets/images/powerup-potion3.png"></img>
                </div>
                <div className="shop-itemsInfo">
                <h6>Small Potion</h6>
                <p>Add stuns for 0.5 seconds</p>
                <Button>12 <br></br> BUY</Button>
                </div> 
          </div>  
        </div>
    );
    }else if(clicked==="Outfit"){
      return(
        <div className="shop-category">
          <div className="shop-categoryName">
                <h3>Weapons</h3>
          </div>
          <div className="shop-items">
                <div className="shop-itemsImage">
                  <img src="assets/images/ak47.png"></img>
                </div>
                <div className="shop-itemsInfo">
                <h6>Small Potion</h6>
                <p>Add stuns for 0.5 seconds</p>
                <Button>12 <br></br> BUY</Button>
                </div> 
          </div>
          <div className="shop-categoryName">
                <h3>Outfit</h3>
          </div>
          <div className="shop-items">
                <div className="shop-itemsImage">
                  <img src="assets/images/ak47.png"></img>
                </div>
                <div className="shop-itemsInfo">
                <h6>Small Potion</h6>
                <p>Add stuns for 0.5 seconds</p>
                <Button>12 <br></br> BUY</Button>
                </div> 
          </div>
        </div>
      );
    }else{
      return(
        <div className="shop-category">
        <div className="shop-items">
              <div className="shop-itemsImage">
               <h3>image</h3>
              </div>
              <div className="shop-itemsInfo">
              <h6>Small Potion</h6>
              <p>asdasd</p>
              <Button>12 <br></br> BUY</Button>
              </div> 
        </div>
      </div>
      );
    }
}
export default Display;