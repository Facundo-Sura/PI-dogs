import { useState } from "react";
import "./Form.css";

function Form() {
  const [input, setInput] = useState({
    id: "",
    name: "",
    temperament: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <form onSubmit={""}>
        <div>
          <label>id</label>
          <input name="id" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label>Raza</label>
          <input name="name" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label>Temperamento</label>
          <input
            name="temperamento"
            value={input.value}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
