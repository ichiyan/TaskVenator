import { Button, Modal } from 'react-bootstrap';
import { useState } from "react";


function AddOutfitForm (){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[outfit, setOutfit]= useState({
    name: '',
    class: '',
    type: '',
    pAttack: '',
    mAttack: '',
    pDef: '',
    mDef: '',
    str: '',
    int: '',
    agi: '',
    crit: '',
    critDmg: '',
    price: ''
  });

  
    const inputHandler =(e) =>{
      setOutfit({
        ...outfit,[e.target.name]:  e.target.value
      });
      
    }

    const outfitSubmitHandler = (e) =>{
      e.preventDefault();
      const data ={
        name: outfit.name,
        class: outfit.class,
        type: outfit.type,
        pAttack: outfit.pAttack,
        mAttack: outfit.mAttack,
        pDef: outfit.pDef,
        mDef: outfit.mDef,
        str: outfit.str,
        int: outfit.int,
        agi: outfit.agi,
        crit: outfit.crit,
        critDmg: outfit.critDmg,
        price: outfit.price

      }
      setOutfit({
        name: '',
        class: '',
        type: '',
        pAttack: '',
        mAttack: '',
        pDef: '',
        mDef: '',
        str: '',
        int: '',
        agi: '',
        crit: '',
        critDmg: '',
        price: ''
      });
    }

  return (  
     <div>
         <div>
         <Button variant="primary" onClick={handleShow}>
             Create Outfit
        </Button>
        <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create Outfit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={outfitSubmitHandler}>
          <div className="form-group">
            <label>Weapon Name</label>
            <input className="form-control" name="name" type="text" onChange={inputHandler} value={outfit.name}/>
          </div>
          <div className="form-group">
            <label>Class</label>
            <select name="class" className="form-select" onChange={inputHandler} value={outfit.class}>
              <option>Warrior</option>
              <option>Assassin</option>
              <option>Mage</option>
            </select><br></br>
            </div>
            <div className="form-group">
            <label>Weapon Type</label>
            <select name="type" className="form-select" onChange={inputHandler} value={outfit.type}>
              <option>Common</option>
              <option>Uncommon</option>
              <option>Rare</option>
            </select><br></br>
            </div>
            <div className="form-group">
            <label>Physical Attack</label>
            <input name="pAttack" className="form-control" type="text" onChange={inputHandler} value={outfit.pAttack}/><br></br>
            </div>
            <div className="form-group">
            <label>Magic Attack</label>
            <input name="mAttack" className="form-control" type="text" onChange={inputHandler} value={outfit.mAttack}/><br></br>
            </div>
            <div className="form-group">
            <label>Physical Defense</label>
            <input name="pDef" className="form-control" type="text" onChange={inputHandler} value={outfit.pDef}/><br></br>
            </div>
            <div className="form-group">
            <label>Magical Defense</label>
            <input name="mDef" className="form-control" type="text" onChange={inputHandler} value={outfit.mDef}/><br></br>
            </div>
            <div className="form-group">
            <label>Str</label>
            <input name="str" className="form-control" type="text" onChange={inputHandler} value={outfit.str}/><br></br>
           </div>
           <div className="form-group">
            <label>Int</label>
            <input name="int" className="form-control" type="text" onChange={inputHandler} value={outfit.int}/><br></br>
            </div>
            <div className="form-group">
            <label>Agi</label>
            <input name="agi" className="form-control" type="text" onChange={inputHandler} value={outfit.agi}/><br></br>
           </div>
           <div className="form-group">
            <label>Crit</label>
            <input name="crit" className="form-control" type="text" onChange={inputHandler} value={outfit.crit}/><br></br>
            </div>  
            <div className="form-group">        
            <label>Crit Damage</label>
            <input name="critDmg" className="form-control" type="text" onChange={inputHandler} value={outfit.critDmg}/>
            </div>
            <div className="form-group">        
            <label>Price</label>
            <input name="price" className="form-control" type="number" onChange={inputHandler} value={outfit.price}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary mr-auto" onClick={handleClose}>Close</button>
              <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={handleClose}>Save</button>
            </div>
         </form>
        </Modal.Body>
      </Modal>
         </div>
      </div>
    
  );
}
export default AddOutfitForm;