import React from "react"
import Forms from "./components/Forms"
import Dialogs from "./components/Dialogs"
import AccordionCard from "./components/AccordionCard";

function App() {
  return (
    <div className="container mt-5">
      <Forms />
      <AccordionCard />
      <Dialogs />
    </div>
  )
}

export default App
