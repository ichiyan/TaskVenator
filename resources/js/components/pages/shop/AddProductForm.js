const AddProductForm = ({products, setProducts}) => {

    const submitToHandler =(event) =>{
      event.preventDefault();
      setProducts([
          ...products,{
              id: Math.random()*1000,
              name: event.target.weaponName.value,
              class: event.target.weaponClass.value,
              damage: event.target.weaponDamage.value,
              type: event.target.weaponType.value
          }
      ])
      event.target.weaponName.value="";
      event.target.weaponDamage.value="";


    }

  return (
      <form onSubmit={submitToHandler}>
          <label>Name</label>
          <input name="weaponName" type="text" /><br></br>

          <label>Class</label>
          <select name="weaponClass">
              <option>Warrior</option>
              <option>Assassin</option>
              <option>Mage</option>
          </select><br></br>

          <label>Damage</label>
          <input name="weaponDamage" type="text" /><br></br>
          <label>Type</label>
          <select name="weaponType" className="weaponType">
              <option>Potions</option>
              <option>Outfit</option>
          </select><br></br>

          <label>Picture</label>

          <button type="submit"> Submit </button>

    </form>

  );
}
export default AddProductForm;
