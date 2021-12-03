import { Button, Modal } from 'react-bootstrap';
import { useState } from "react";
import axios from 'axios';


function AddCardForm (){
  const [show, setShow] = useState(false);
  const [picture, setPicture]= useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[card, setCard]= useState({
    cardClass: 'Humanoid', // humanoid, beast, elemental, undead
    cardName: '',
    cardEffectType: 'Normal', //stun, slow, double damage 
    cardEffectDamage: '', //integer or float value
    cardEffectDescription: '',
    cardPrice:'',
  });

  
    const inputHandler =(e) =>{
      console.log(e.target.value);
      setCard({
        ...card,[e.target.name]:  e.target.value
      });
      
    }

    const handleImage =(e) =>{
      setPicture({image: e.target.files[0]});
    }

    const cardSubmitHandler = (e) =>{
      e.preventDefault();
      
      const formData = new FormData();
      formData.append('image', picture.image);
      formData.append('cardClass', card.cardClass);
      formData.append('cardName', card.cardName);
      formData.append('cardEffectType', card.cardEffectType);
      formData.append('cardEffectDamage', card.cardEffectDamage);
      formData.append('cardEffectDescription', card.cardEffectDescription);
      formData.append('cardPrice', card.cardPrice);
     
}

  return (  
     <div>
         <div>
         <Button variant="primary" onClick={handleShow}>
             Create Card
        </Button>
        <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={cardSubmitHandler} encType="multipart/form-data">
        <div className="form-group">
            <label>Card Class</label>
            <select name="cardClass" className="form-select" onChange={inputHandler} value={card.cardClass}>
              <option value="Humanoid">Humanoid</option>
              <option value="Beast">Beast</option>
              <option value="Elemental">Elemental</option>
              <option value="Undead">Undead</option>
            </select><br></br>
          </div>
          <div className="form-group">
            <label className="form-label">Upload Image</label>
            <input type="file" name="image" className="form-control" id="customFile" onChange={handleImage} />
          </div>
          <div className="form-group">
            <label>Card Name</label>
            <input className="form-control" name="cardName" type="text" onChange={inputHandler} value={card.cardName}/>
          </div>
          <div className="form-group">
            <label>Card Effect Type</label>
            <select name="cardEffectType" className="form-select" onChange={inputHandler} value={card.cardEffectType}>
              <option value="Normal">Normal</option>
              <option value="Stun">Stun</option>
              <option value="Double Damage">Double Damage</option>
            </select><br></br>
          </div> 
          <div className="form-group">
            <label>Card Effect Damage</label>
            <input name="cardEffectDamage" className="form-control" type="number" onChange={inputHandler} value={card.cardEffectDamage}/><br></br>
            </div>
            <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" rows="3" name="cardEffectDescription" onChange={inputHandler} value={card.cardEffectDescription}></textarea>
            </div>
            <div className="form-group">
            <label>Price</label>
            <input name="cardPrice" className="form-control" type="number" onChange={inputHandler} value={card.cardPrice}/><br></br>
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
export default AddCardForm;