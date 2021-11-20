import { Button, Modal } from 'react-bootstrap';
import { useState } from "react";


function AddItemForm (){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[item, setItem]= useState({
    name: '',
    description: "",
    price: '',
  });

  
    const inputHandler =(e) =>{
      console.log(e.target.value);
      setItem({
        ...item,[e.target.name]:  e.target.value
      });
      
    }

    const itemSubmitHandler = (e) =>{
      e.preventDefault();
      
      const data ={
        name: item.name,
        description: item.description,
        price: item.price


      }
      // setItem({
      //   name: '',
      //   description: '',
      //   price: ''
       
      // });
    }

  return (  
     <div>
         <div>
         <Button variant="primary" onClick={handleShow}>
             Create Item
        </Button>
        <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={itemSubmitHandler}>
          <div className="form-group">
            <label>Item Name</label>
            <input className="form-control" name="name" type="text" onChange={inputHandler} value={item.name}/>
          </div>
            <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" rows="3" name="description" onChange={inputHandler} value={item.description}></textarea>
            </div>
            <div className="form-group">
            <label>Price</label>
            <input name="price" className="form-control" type="number" onChange={inputHandler} value={item.price}/><br></br>
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
export default AddItemForm;