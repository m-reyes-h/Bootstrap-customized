import React from "react"
import Forms from "./components/Forms"
import Dialogs from "./components/Dialogs"
import AccordionCard from "./components/AccordionCard";
import Tabular from "./components/Tabular";
import Cards from './components/Cards';

function App() {
  return (
    <div className="container mt-5">
      <Forms />
      <Tabular />
      <AccordionCard />
      <Cards />
      <Dialogs />
    </div>
  )
}

export default App
