import { FormEvent } from "react";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import UserForm from "./UserForm";
import { useMultistepFrom } from "./useMultistepFrom";

function App() {
    const {steps, currentStepIndex,step, isFirstStep,back,next,isLastStep} = useMultistepFrom([<UserForm/>,<AddressForm/>,<AccountForm/>])

    function onSubmit(e: FormEvent){
      e.preventDefault()
      next()
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
