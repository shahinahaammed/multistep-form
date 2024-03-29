import { FormEvent, useState } from "react";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import UserForm from "./UserForm";
import { useMultistepFrom } from "./useMultistepFrom";

type FormData ={
  firstName:string
  lastName:string
  age:string
  street:string
  city:string
  state:string
  zip:string
  email:string
  password:string
}

const INITAL_DATA : FormData ={
  firstName:"",
  lastName:"",
  age:"",
  street:"",
  city:"",
  state:"",
  zip:"",
  email:"",
  password:"",
}

function App() {
  const [data, setData] = useState(INITAL_DATA)
  function updateFields(fields: Partial<FormData>){
    setData(prev => {
      return {...prev, ...fields}
    })
  }
    const {steps, currentStepIndex,step, isFirstStep,back,next,isLastStep} = useMultistepFrom([<UserForm {...data} updateFields={updateFields} />,<AddressForm {...data} updateFields={updateFields}/>,<AccountForm {...data} updateFields={updateFields} />])

    function onSubmit(e: FormEvent){
      e.preventDefault()
      if (!isLastStep) return next()
      alert("Successfull Account Creation")
    }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: " 2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth:"max-content"
      }}
    >
      <form onSubmit={onSubmit}>
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
          }}
        >
          {currentStepIndex +1}/ {steps.length}
        </div>
        {step}
        <div style={{
          marginTop:"1rem",
          display:"flex",
          gap:".5rem",
          justifyContent: "flex-end"
        }} >
          {!isFirstStep && <button onClick={back} type="button">Back</button>}
          <button type="submit" onClick={next} >{isLastStep ? "Finish":"Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
