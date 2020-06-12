import React, {useState} from 'react'
import {Tabs, Tab} from 'react-bootstrap';
import { BsCollection as CollectionIcon} from "react-icons/bs";

const First = () => {
  return (
    <>
      <CollectionIcon size="20" className="mr-2" /> Hello
    </>
 );
}

function Tabular() {
  const [key, setKey] = useState("home");
  
  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title={<First />}>
          som data 1
        </Tab>
        <Tab eventKey="profile" title="Profile">
          som data 12
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          som data 13
        </Tab>
      </Tabs>

      <h4 className="mt-4">Primary</h4>

      <Tabs
        className="primary"
        id="controlled-tab1-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title={<First />}>
          som data 1
        </Tab>
        <Tab eventKey="profile" title="Profile">
          som data 12
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          som data 13
        </Tab>
      </Tabs>

      
    </>
  );
}

export default Tabular
