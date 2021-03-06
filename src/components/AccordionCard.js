import React from "react";
import { Accordion, Card, useAccordionToggle, Button } from "react-bootstrap";
import { BsChevronDown as DropDownIcon } from "react-icons/bs";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <Button variant="link" className="btn-text" onClick={decoratedOnClick}>
      {children}
    </Button>
  );
}

function AccordionCard() {
  return (
    <div className="my-5 bg-white border p-5">
      <div className="mv-5 py-5">
        <h1>Cards</h1>
        <hr />
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
                  className="card-header card-header--toggle description font-weight-bold"
                >
                  Sender (Customer)
                  <DropDownIcon size="18" />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="body">Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
                <Card.Footer>
                  <div>
                    <h3 className="body mb-0">Omar Cassola</h3>
                    <span className="body">(786) 510-8954</span>
                  </div>
                  <div className="ml-auto">
                    <Button variant="link">Create new</Button>
                    <Button variant="outline-primary">Search</Button>
                  </div>
                </Card.Footer>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordionCard;
