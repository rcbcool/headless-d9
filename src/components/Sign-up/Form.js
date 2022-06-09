import React, {useState} from 'react'
import Signup from "./Signup";
import Thankyou from "./thankyou";

const Form = () => {
  const [formSubmitted, setformSubmitted ] = useState(false);
  const submitForm =()=>
  {
  setformSubmitted(true)
  };
  return (
    <div>
      {/* <Signup />
      <Thankyou /> */}
      {!formSubmitted ? (<Signup submitForm={submitForm} />) : (<Thankyou />)}
    </div>
  )
}

export default Form