import React from "react";
import { Accordion, Card, useAccordionToggle, Button } from "react-bootstrap";
import {BsChevronDown as DropDownIcon} from "react-icons/bs"


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <Button
      variant="link"
      className="btn-text"
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}

function AccordionCard() {
  return (
    <div className="my-5 py-5">
      <Accordion>
        <Card>
          <Card.Header>
            <Card.Title>Sender (Customer)</Card.Title>
            <CustomToggle eventKey="0">
              Show more
              <DropDownIcon size="18" />
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <hr />

      <div className="row">
        <div className="col">
          <Accordion>
            <Card>
              <Accordion.Toggle
                as={Button}
                eventKey="1"
                className="card-header card-header--toggle"
              >
                Sender (Customer)
                <DropDownIcon size="18" />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
              <Card.Footer>
                <div className="ml-auto">
                  <Button variant="primary">Create new</Button>
                  <Button variant="primary">Search</Button>
                </div>
              </Card.Footer>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default AccordionCard
