import React,{useState} from "react";
 import UserDetailsList from "./component/Users/UserDetailsList";
import AddUser from "./component/Users/AddUsers";

const App = ()=> {
  const[userDetails,setUserDetails] = useState([]);
  const addUserDetailsEventHandler = (uName,uAge)=>{
      setUserDetails((pervUserDetails)=>{
        return [...pervUserDetails,{username:uName, age:uAge, id: Math.random().toString(),}];
      });
  }
  console.log(userDetails);
  return ( 
    <div>
         <AddUser onAddUserDetails={addUserDetailsEventHandler}/>
         <UserDetailsList item={userDetails}/>
    </div>
      
  );
}

export default App;
