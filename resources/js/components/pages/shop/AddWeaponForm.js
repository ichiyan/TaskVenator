import { Button, Modal } from 'react-bootstrap';
import { useState } from "react";


function AddWeaponForm (){
  const [show, setShow] = useState(false);
  const [picture, setPicture]= useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[weapon, setWeapon]= useState({
    name: '',
    class: "Warrior",
    type: "Common",
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
      console.log(e.target.value);
      setWeapon({
        ...weapon,[e.target.name]:  e.target.value
      });
      
    }
    const handleImage =(e) =>{
      setPicture({image: e.target.files[0]});
    }

    const weaponSubmitHandler = (e) =>{
      e.preventDefault();
     
      const formData = new FormData();
      formData.append('image', picture.image);
      formData.append('name', weapon.name);
      formData.append('class', weapon.class);
      formData.append('type', weapon.type);
      formData.append('pAttack', weapon.pAttack);
      formData.append('mAttack', weapon.mAttack);
      formData.append('pDef', weapon.pDef);
      formData.append('mDef', weapon.mDef);
      formData.append('str', weapon.str);
      formData.append('int', weapon.int);
      formData.append('agi', weapon.agi);
      formData.append('crit', weapon.crit);
      formData.append('critDmg', weapon.critDmg);
      formData.append('price', weapon.price);

  
      axios.post(`/api/addWeapon`,formData).then(res =>{
        if(res.data.status === 200){
            alert(res.data.message);
        }else {
          // setPotion({...potion,error_list:res.data.errors});
        }
      });
      // const data ={
      //   name: weapon.name,
      //   class: weapon.class,
      //   type: weapon.type,
      //   pAttack: weapon.pAttack,
      //   mAttack: weapon.mAttack,
      //   pDef: weapon.pDef,
      //   mDef: weapon.mDef,
      //   str: weapon.str,
      //   int: weapon.int,
      //   agi: weapon.agi,
      //   crit: weapon.crit,
      //   critDmg: weapon.critDmg,
      //   price: weapon.price
      // }
   
      // setWeapon({
      //   name: '',
      //   class: '',
      //   type: '',
      //   pAttack: '',
      //   mAttack: '',
      //   pDef: '',
      //   mDef: '',
      //   str: '',
      //   int: '',
      //   agi: '',
      //   crit: '',
      //   critDmg: '',
      //   price: ''
      // });
    }

  return (  
     <div>
         <div>
         <Button variant="primary" onClick={handleShow}>
             Create Weapon
        </Button>
        <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create Weapon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={weaponSubmitHandler} encType="multipart/form-data">
         <div className="form-group">
            <label className="form-label">Upload Image</label>
            <input type="file" name="image" className="form-control" id="customFile" onChange={handleImage} />
          </div>
          <div className="form-group">
            <label>Weapon Name</label>
            <input className="form-control" name="name" type="text" onChange={inputHandler} value={weapon.name}/>
          </div>
          <div className="form-group">
            <label>Class</label>
            <select name="class" className="form-select" onChange={inputHandler} value={weapon.class}>
              <option value="Warrior">Warrior</option>
              <option value="Assassin">Assassin</option>
              <option valu="Mage">Mage</option>
            </select><br></br>
            </div>
            <div className="form-group">
            <label>Weapon Type</label>
            <select name="type" className="form-select" onChange={inputHandler} value={weapon.type}>
              <option value="Common">Common</option>
              <option value="Uncommon">Uncommon</option>
              <option value="Rare">Rare</option>
            </select><br></br>
            </div>
            <div className="form-group">
            <label>Physical Attack</label>
            <input name="pAttack" className="form-control" type="number" onChange={inputHandler} value={weapon.pAttack}/><br></br>
            </div>
            <div className="form-group">
            <label>Magic Attack</label>
            <input name="mAttack" className="form-control" type="number" onChange={inputHandler} value={weapon.mAttack}/><br></br>
            </div>
            <div className="form-group">
            <label>Physical Defense</label>
            <input name="pDef" className="form-control" type="number" onChange={inputHandler} value={weapon.pDef}/><br></br>
            </div>
            <div className="form-group">
            <label>Magical Defense</label>
            <input name="mDef" className="form-control" type="number" onChange={inputHandler} value={weapon.mDef}/><br></br>
            </div>
            <div className="form-group">
            <label>Str</label>
            <input name="str" className="form-control" type="number" onChange={inputHandler} value={weapon.str}/><br></br>
           </div>
           <div className="form-group">
            <label>Int</label>
            <input name="int" className="form-control" type="number" onChange={inputHandler} value={weapon.int}/><br></br>
            </div>
            <div className="form-group">
            <label>Agi</label>
            <input name="agi" className="form-control" type="number" onChange={inputHandler} value={weapon.agi}/><br></br>
           </div>
           <div className="form-group">
            <label>Crit</label>
            <input name="crit" className="form-control" type="number" onChange={inputHandler} value={weapon.crit}/><br></br>
            </div>  
            <div className="form-group">        
            <label>Crit Damage</label>
            <input name="critDmg" className="form-control" type="number" onChange={inputHandler} value={weapon.critDmg}/>
            </div>
            <div className="form-group">        
            <label>Price</label>
            <input name="price" className="form-control" type="number" onChange={inputHandler} value={weapon.price}/>
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
export default AddWeaponForm;