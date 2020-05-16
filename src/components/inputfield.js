import React, {useState}from "react";


function InputData(props) {
  const [username ,setUsername] = useState("");

const handleInput = (e)=>{
  setUsername(e.target.value);
}

  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      props.handleSubmit(username)}}className="search">
    <div className="form-group">
      <h1>Employee-Directory</h1>
      <input
        value={username}
        onChange={handleInput}
        name= "username"
        className="form-control"
        placeholder="Type in Name Press Enter"
        id="term"
      />
      
      
    </div>
  </form>
  );
}

export default InputData;