import { Button, Modal } from 'react-bootstrap';
import { useState } from "react";
import axios from 'axios';

function AddPotionForm (){
  const [show, setShow] = useState(false);
  const [picture, setPicture]= useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[potion, setPotion]= useState({
    name: '',
    type: 'Hp Potion',
    size: "Small",
    description: '',
    price: '',
 
  });

  
  const inputHandler =(e) =>{
    e.persist();
    setPotion({
      ...potion,[e.target.name]:  e.target.value
    });
    
  }

  const handleImage =(e) =>{
    setPicture({image: e.target.files[0]});
  }

    const potionSubmitHandler = (e) =>{
      e.preventDefault();
      const formData = new FormData();
      formData.append('image', picture.image);
      formData.append('name', potion.name);
      formData.append('type', potion.type);
      formData.append('size', potion.size);
      formData.append('description', potion.description);
      formData.append('price', potion.price);

      axios.post(`/api/addPotion`,formData).then(res =>{
        if(res.data.status === 200){
            console.log(res.data.message);
        }else {
          setPotion({...potion,error_list:res.data.errors});
        }
      });
      // console.log(picture);

      // const data ={
      //   name: potion.name,
      //   type: potion.type,
      //   size: potion.size,
      //   description: potion.description,
      //   price: potion.price


      // }
      // axios.post(`/api/addPotion`,data).then(res =>{
      //   if(res.data.status === 200){
      //       console.log(res.data.message);
      //   }else {
      //     setPotion({...potion,error_list:res.data.errors});
      //   }
      // });
     
      
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
        <form onSubmit={potionSubmitHandler} encType="multipart/form-data">
          <div className="form-group">
            <label className="form-label">Upload Image</label>
            <input type="file" name="image" className="form-control" id="customFile" onChange={handleImage} />
          </div>
          <div className="form-group">
            <label>Potion Name</label>
            <input className="form-control" name="name" type="text" onChange={inputHandler} value={potion.name}/>
          </div>
          <div className="form-group">
            <label>Type</label>
            <select name="type" className="form-select" onChange={inputHandler} value={potion.type}>
              <option value="Hp Potion">Hp Potion</option>
              <option value="Powerup Potion">Powerup Potion</option>
            </select>
            </div>
            <div className="form-group">
            <label>Potion Size</label>
            <select name="size" className="form-select" onChange={inputHandler} value={potion.size}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
            </div>
            <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" rows="3" name="description" onChange={inputHandler} value={potion.description}></textarea>
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