
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { useState } from "react";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';


function Form() {
    const [userData, setUserData] = useState({
      name: "",
      number:"",       
      age: "",
      email: "",
      password: ""
    })
    const [users, setUsers] = useState([])
   const handleChang =(e)=>{
    const { name, value } = e.target
    setUserData({...userData, [name]: value});
   
    
   } 
   const submit = (event)=>{
    event.preventDefault()
    setUsers([...users, userData]);
    setUserData({
      name: "",
      number : "",
      age: "",
      email: "",
      password: ""
    })
   
    
}
   
const userDelete = (indexToDelet)=>{
  let confirmDelete = window.confirm(`kya ap ye deta ${indexToDelet} delete krna chahte hain..?`)
  if(confirmDelete){
    let newValue = [...users]
    newValue.splice(indexToDelet, 1)
    setUsers(newValue)
  }
}
   
   
    return(
        <>
 <Container  className="mt-5 container1">
     <h3>Data form</h3> 
       <Row className="row1">
         <Col className="col1">
            <form action="" className="form" onSubmit={submit} >

         <label className="label" for='name' >Name  </label>
         <input className="input" id='name' type="text" value={userData.name} name="name" onChange={handleChang}/>
                        <br />

          <label className="label" for='number' >Number</label>
                   <input className="input"  id='number' type="number" name="number" value={userData.number} onChange={handleChang}/>
                        <br />
         <label className="label"  for='age'>age</label>
                   <input className="input" id='age' type="number" name="age" value={userData.age} onChange={handleChang}/>
                         <br />
       <label className="label" for='email' >Email</label>
                   <input className="input" id='email' type="email" name="email" value={userData.email} onChange={handleChang} />
                     <br />
         <label  className="label" for='pass'>password</label>
                   <input className="input" id='pass' type="password" name="password" value={userData.password} onChange={handleChang} />
                        <br />
                      
                        <button type="submit" className="mt-4" >Submit</button>
        </form> </Col></Row>

        
        
        
 <Row>
<Col className="col2 mt-3">
<Table>
<thead>
<tr>
  <th>Name</th>
  <th>Number</th>
  <th>Age</th>
  <th>Email</th>
  <th>Password</th>
  <th>Action</th>
</tr>
</thead>
<tbody>
{users.map((value, index)=>(
 <tr>
<td>{value.name}</td>
<td>{value.number}</td>
<td>{value.age}</td>
<td>{value.email}</td>
<td>{value.password}</td>
<td><button onClick={()=>userDelete(index)}>Delete Data</button></td>


 </tr>

))}


    
</tbody>
</Table>
</Col>
 </Row>
 </Container>
        </>)}





export default Form


