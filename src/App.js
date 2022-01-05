import React,{useState, Fragment} from "react";
 import UserDetailsList from "./component/Users/UserDetailsList";
import AddUser from "./component/Users/AddUsers";

const App = ()=> {
  const[userDetails,setUserDetails] = useState([]);
  const addUserDetailsEventHandler = (uName, uAge)=> {
      setUserDetails((pervUserDetails)=>{
        return [...pervUserDetails,{username:uName, age:uAge, id: Math.random().toString(),}];
      });
  };
  console.log(userDetails);
  return ( 
    <Fragment>
         <AddUser onAddUserDetails={addUserDetailsEventHandler}/>
         <UserDetailsList item={userDetails}/>
    </Fragment>
      
  );
}

export default App;
