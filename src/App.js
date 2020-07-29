import React from "react"
import Forms from "./components/Forms"
import Dialogs from "./components/Dialogs"
import AccordionCard from "./components/AccordionCard";
import Tabular from "./components/Tabular";
import Cards from './components/Cards';
import DatePickers from './components/DatePickers'
import Tables from './components/Tables';



function App() {
  return (
    <div className="container mt-5">
      <Forms />
      <Tables />
      <Tabular />
      <Dialogs />
      <DatePickers />
      <AccordionCard />
      <Cards />
    </div>
  )
}

export default App
