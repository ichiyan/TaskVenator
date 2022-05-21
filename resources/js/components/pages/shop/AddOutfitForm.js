import { Button, Modal } from 'react-bootstrap';
import { useState } from "react";
import axios from 'axios';


function AddOutfitForm (){
  const [show, setShow] = useState(false);
  const [picture, setPicture]= useState({
    male_image:'',
    female_image:'',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[outfit, setOutfit]= useState({
    outfit_type:"Weapon",
    sex:"None",  //male,female,unisex
    name: '',
    class: "Warrior",
    rarity_type: "Common",
    body_part: "Head", //head,helmet,arms,torso,legs,footwear
    spritesheet_img_name: '',
    directory:'',
    p_attack: '',
    m_attack: '',
    p_def: '',
    m_def: '',
    str: '',
    int: '',
    agi: '',
    crit: '',
    crit_dmg: '',
    price: ''
  });

  
    const inputHandler =(e) =>{
      setOutfit({
        ...outfit,[e.target.name]:  e.target.value
      });
      
    }
    const handleImage =(e) =>{
      setPicture({
        ...picture,[e.target.name]: e.target.files[0]
    });
  }

    const outfitSubmitHandler = (e) =>{
      e.preventDefault();
     
      const formData = new FormData();
      formData.append('outfit_type', outfit.outfit_type);
      formData.append('sex', outfit.sex);
      formData.append('male_image', picture.male_image);
      formData.append('female_image', picture.female_image);
      formData.append('name', outfit.name);
      formData.append('class', outfit.class);
      formData.append('rarity_type', outfit.rarity_type);
      formData.append('body_part', outfit.body_part);
      formData.append('spritesheet_img_name', outfit.spritesheet_img_name);
      formData.append('directory', outfit.directory);
      formData.append('p_attack', outfit.p_attack);
      formData.append('m_attack', outfit.m_attack);
      formData.append('p_def', outfit.p_def);
      formData.append('m_def', outfit.m_def);
      formData.append('str', outfit.str);
      formData.append('int', outfit.int);
      formData.append('agi', outfit.agi);
      formData.append('crit', outfit.crit);
      formData.append('crit_dmg', outfit.crit_dmg);
      formData.append('price', outfit.price);

  
      axios.post(`/api/addOutfit`,formData).then(res =>{
        if(res.data.status === 200){
            alert(res.data.message);
        }else {
          // setPotion({...potion,error_list:res.data.errors});
        }
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
        <form onSubmit={outfitSubmitHandler} encType="multipart/form-data">
          <div className="form-group">
            <label>Outfit Type</label>
            <select name="outfit_type" className="form-select" onChange={inputHandler} value={outfit.outfit_type}>
              <option value="Weapon">Weapon</option>
              <option value="Armor">Armor</option>
            </select><br></br>
          </div>
          <div className="form-group">
            <label>Sex</label>
            <select name="sex" className="form-select" onChange={inputHandler} value={outfit.sex}>
              <option value="None">None</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unisex">Unisex</option>
            </select><br></br>
          </div>
           {
          (outfit.sex==="Male" || outfit.sex ==="None")? 
          <div className="form-group">
              <label className="form-label">Upload Male Image</label>
              <input type="file" name="male_image" className="form-control" id="customFile" onChange={handleImage}/>
          </div> : ""
          }
          {
          (outfit.sex==="Female")? 
          <div className="form-group">
              <label className="form-label">Upload Female Image</label>
              <input type="file" name="female_image" className="form-control" id="customFile" onChange={handleImage}/>
          </div> : ""
          }
           {
          (outfit.sex==="Unisex")? 
          <div className="form-group">
              <label className="form-label">Upload Male Image</label>
              <input type="file" name="male_image" className="form-control" id="customFile" onChange={handleImage}/>
              <label className="form-label">Upload Female Image</label>
              <input type="file" name="female_image" className="form-control" id="customFile" onChange={handleImage}/>
          </div> : ""
          }
      
          <div className="form-group">
            {(outfit.outfit_type==="Weapon")?
                <label>Weapon Name</label>:<label>Armor Name</label>
            }
            <input className="form-control" name="name" type="text" onChange={inputHandler} value={outfit.name}/>
          </div>
          
          <div className="form-group">
            <label>Class</label>
            <select name="class" className="form-select" onChange={inputHandler} value={outfit.class}>
              <option value="Warrior">Warrior</option>
              <option value="Marksman">Marksman</option>
              <option valu="Mage">Mage</option>
            </select><br></br>
          </div>
          <div className="form-group">
            <label>Weapon Type</label>
            <select name="rarity_type" className="form-select" onChange={inputHandler} value={outfit.rarity_type}>
              <option value="Common">Common</option>
              <option value="Uncommon">Uncommon</option>
              <option value="Rare">Rare</option>
            </select><br></br>
          </div>
            {
            (outfit.outfit_type==="Armor")? 
          <div className="form-group">
            <label>Body Part</label>
            <select name="body_part" className="form-select" onChange={inputHandler} value={outfit.body_part}>
              <option value="Head">Head</option>
              <option value="Arms">Arms</option>
              <option value="Torso">Torso</option>
              <option value="Legs">Legs</option>
              <option value="Footwear">Footwear</option>
            </select><br></br>
          </div> : ""
            }
          <div className="form-group">
            <label>Spritesheet Image Name</label>
            <input name="spritesheet_img_name" className="form-control" type="text" onChange={inputHandler} value={outfit.spritesheet_img_name}/><br></br>
          </div>
          <div className="form-group">
            <label>Directory</label>
            <input name="directory" className="form-control" type="text" onChange={inputHandler} value={outfit.directory}/><br></br>
          </div>
          <div className="form-group">
            <label>Physical Attack</label>
            <input name="p_attack" className="form-control" type="number" onChange={inputHandler} value={outfit.p_attack}/><br></br>
          </div>
          <div className="form-group">
            <label>Magic Attack</label>
            <input name="m_attack" className="form-control" type="number" onChange={inputHandler} value={outfit.m_attack}/><br></br>
          </div>
          <div className="form-group">
            <label>Physical Defense</label>
            <input name="p_def" className="form-control" type="number" onChange={inputHandler} value={outfit.p_def}/><br></br>
          </div>
          <div className="form-group">
            <label>Magical Defense</label>
            <input name="m_def" className="form-control" type="number" onChange={inputHandler} value={outfit.m_def}/><br></br>
          </div>
          <div className="form-group">
            <label>Str</label>
            <input name="str" className="form-control" type="number" onChange={inputHandler} value={outfit.str}/><br></br>
          </div>
          <div className="form-group">
            <label>Int</label>
            <input name="int" className="form-control" type="number" onChange={inputHandler} value={outfit.int}/><br></br>
          </div>
          <div className="form-group">
            <label>Agi</label>
            <input name="agi" className="form-control" type="number" onChange={inputHandler} value={outfit.agi}/><br></br>
          </div>
          <div className="form-group">
            <label>Crit</label>
            <input name="crit" className="form-control" type="number" onChange={inputHandler} value={outfit.crit}/><br></br>
          </div>  
          <div className="form-group">        
            <label>Crit Damage</label>
            <input name="crit_dmg" className="form-control" type="number" onChange={inputHandler} value={outfit.crit_dmg}/>
          </div>
          <div className="form-group">        
          <label>Price</label>
            <input name="price" className="form-control" type="number" onChange={inputHandler} value={outfit.price}/>
          </div>
          <div className="form-group">        
            <label>Price</label>
            <input name="price" className="form-control" type="number" onChange={inputHandler} value={outfit.price}/>
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