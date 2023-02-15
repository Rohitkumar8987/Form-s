
import { useState } from "react";
import "./App.css";
import icon from "./assets/8987.jpg";
// const icon =""
function App() {
  const [user, setUser] = useState(null)    
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value })
    console.log(name, value)
  }
  console.log(user)
   return (
    <div>
      <div className="container">
        <div className="mains">
          <img src={icon} alt="" />
          <div className="textSide">
            <h2 className="name">NAME= {user?.firstName} {user?.lastName}</h2>
            <h2 className="phone">PHONE= {user?.phone}</h2>
            <h2 className="email">EMAIL={user?.email}</h2>
            <h2 className="adress">ADDRESS={user?.address}</h2>
          </div>
        </div>
      </div>
      <div className="formPage">
        <h1>Register</h1>
      </div>
      <div className="nameSection">
        <div className="first">
          <span>FirstName</span>
          <input placeholder="First name" type="text" name="firstName" onChange={e => handleChange(e)} />
        </div>
        <div className="last">
          <span>LastName</span>
          <input placeholder="Last name" type="text" name="lastName" onChange={e => handleChange(e)}/>
        </div>
      </div>
      <div className="nameSection">
        <div className="first">
          <span>Phone</span>
          <input placeholder="+91XXXXXXXX" type="text"  name="phone" onChange={e => handleChange(e)} />
        </div>
        <div className="last">
          <span>Email</span>
          <input placeholder="bxxibgqx@gmail.com" type="text"  name="email" onChange={e => handleChange(e)}/>
        </div>
      </div>
      <div className="nameSection">
        <div className="first">
          <span>Adress</span>
          <input placeholder="Nagarxxxxxxx" type="text" name="address" onChange={e => handleChange(e)} />
        </div>
      </div>
      <div className="nameSection">
        <div className="first">
          <span>Comments</span>
          <textarea placeholder="TEXTAREA..." type="text" />
        </div>
      </div>
      <div className="nameSection">
        <div className="first">
          <span>Gender</span>
          <div className="radio">
            <input type="radio" value="Male" />
            <span className="gen">Male</span>
            <input type="radio" value="Female" />
            <span className="gen">Female</span>
          </div>
        </div>
      </div>
      <div className="nameSection">
        <div className="first">
          <span>Language</span>
          <div className="checkbox">
            <input type="checkbox" value="engish" />
            <span className="lang">English</span>
            <input type="checkbox" value="hindi" />
            <span className="lang">Hindi</span>
            <input type="checkbox" value="telugu" />
            <span className="lang">Telugu</span>
          </div>
        </div>
      </div>
      <div className="nameSection">
        <div className="first">
        <span>Select Education</span>
          <select name="" id="" className="form-control">
            <option value="" disabled>Select Education</option>
            <option value="">JAC</option>
            <option value="">CBSE</option>
            <option value="">Intermediate</option>
            <option value="">Under graduation</option>
            <option value="">Post gradution</option>
          </select>
      </div>
      </div>
    </div>
  );
}

export default App;
