import { Button, Modal } from 'react-bootstrap';
import { useState } from "react";


function AddPotionForm (){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[potion, setPotion]= useState({
    name: '',
    type: '',
    size: '',
    description: '',
    price: '',
  });

  
    const inputHandler =(e) =>{
      setPotion({
        ...potion,[e.target.name]:  e.target.value
      });
      
    }

    const potionSubmitHandler = (e) =>{
      e.preventDefault();
      const data ={
        name: potion.name,
        type: potion.type,
        size: potion.size,
        description: potion.description,
        price: potion.price


      }
      setPotion({
        name: '',
        type: '',
        description: '',
        price: ''
       
      });
    }

  return (  
     <div>
         <div>
         <Button variant="primary" onClick={handleShow}>
             Create Potion
        </Button>
        <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create Potion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={potionSubmitHandler}>
          <div className="form-group">
            <label>Potion Name</label>
            <input className="form-control" name="name" type="text" onChange={inputHandler} value={potion.name}/>
          </div>
          <div className="form-group">
            <label>Type</label>
            <select name="type" className="form-select" onChange={inputHandler} value={potion.type}>
              <option>Hp Potion</option>
              <option>Powerup Potion</option>
            </select>
            </div>
            <div className="form-group">
            <label>Potion Size</label>
            <select name="size" className="form-select" onChange={inputHandler} value={potion.size}>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            </div>
            <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" rows="3" name="desciption" onChange={inputHandler} value={potion.description}></textarea>
            </div>
            <div className="form-group">
            <label>Price</label>
            <input name="price" className="form-control" type="number" onChange={inputHandler} value={potion.price}/><br></br>
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
export default AddPotionForm;