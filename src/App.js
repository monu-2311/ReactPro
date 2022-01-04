import React,{useState} from "react";
/* import UserDetailsList from "./component/Users/UserDetailsList"; */
import AddUser from "./component/Users/AddUsers";

const dummyObject = [{
  id:'1',
  username: 'Bhupender',
  age: 24,
},];

const App = ()=> {
  const[userDetails,setUserDetails] = useState(dummyObject);
  const addUserDetailsEventHandler = (addUserDetails)=>{
      setUserDetails((pervUserDetails)=>{
        console.log(addUserDetails);
        return [addUserDetails,...pervUserDetails];
      })
  }
  console.log(userDetails);
  return (
        
       <AddUser onAddUserDetails={addUserDetailsEventHandler}/>
  
  );
}

export default App;
