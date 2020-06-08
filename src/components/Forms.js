import React from "react"
import { Form, Button, Row, Col, FormCheck } from "react-bootstrap"
import { BsPersonPlusFill as PersonIcon } from "react-icons/bs"
import Select, { Option } from "rc-select"

const Forms = () => {
  return (
    <div className="my-5">
      <Form className="mb-5 pb-5">
        <Form.Group controlId="formBasicEmail1">
          <Form.Label>Default text</Form.Label>
          <Form.Control type="text" placeholder=" " />
        </Form.Group>

        <Form.Group controlId="formBasicEmail2">
          <Form.Label>Invalid text</Form.Label>
          <Form.Control type="text" isInvalid placeholder=" " />
          <Form.Control.Feedback type="invalid">
            Invalid field data
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </Form.Group>

        <h4 className="my-5">Floatig lable</h4>

        <Form.Group
          className="form-group--floating"
          controlId="formBasicEmail3"
        >
          <Form.Control type="text" placeholder=" " />
          <Form.Label>
            <span>Floating text</span>
          </Form.Label>
        </Form.Group>

        <Form.Group
          className="form-group--floating"
          controlId="formBasicEmail4"
        >
          <Form.Control type="text" isInvalid placeholder=" " />
          <Form.Label>
            <span>Floating text</span>
          </Form.Label>
          <Form.Control.Feedback type="invalid">
            Invalid field data
          </Form.Control.Feedback>
        </Form.Group>

        <Row>
          <Col>
            <Button variant="primary" type="submit">
              Default
            </Button>
          </Col>
          <Col>
            <Button size="sm" variant="primary" type="submit">
              Small
            </Button>
          </Col>
          <Col>
            <Button size="md" variant="primary" type="submit">
              Medium
            </Button>
          </Col>
          <Col>
            <Button size="lg" variant="primary" type="submit">
              Large
            </Button>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              <PersonIcon />
              Large
            </Button>
          </Col>
          <Col>
            <Button variant="link" type="button">
              Link
            </Button>
          </Col>
        </Row>

        <h4 className="my-5">Checkbox / Radio</h4>

        <Form.Check custom label="Custome" type={"checkbox"} id="chk-1" />
        <Form.Check custom label="Checkbox" type={"checkbox"} id="chk-2" />

        <br />

        <Form.Check custom inline label="Custom" type={"radio"} id="rd-1" />
        <Form.Check
          custom
          inline
          label="Custome"
          name="r1"
          type={"radio"}
          id="rd-3"
        />
        <Form.Check
          custom
          inline
          label="Radio"
          name="r1"
          type={"radio"}
          id="rd-2"
        />
        <Form.Check
          custom
          inline
          label="Radio"
          name="r1"
          type={"radio"}
          id="rd-5"
        />
      </Form>

      <h4 className="my-5">Choice tags / Radio box</h4>

      <Form.Check
        className="choice-tag choice-tag--small"
        custom
        inline
        label="Choice Tag"
        name="ct1"
        type={"radio"}
        id="ct-1"
      />

      <Form.Check
        className="choice-tag"
        custom
        inline
        label="Choice Tag"
        name="ct1"
        type={"radio"}
        id="ct-2"
      />

      <div className="choice-tag choice-tag--icon custom-control custom-radio">
        <FormCheck.Input
          className="custom-control-input"
          name="ct3"
          id="ct3"
          type="radio"
        />
        <FormCheck.Label className="custom-control-label" htmlFor="ct3">
          <PersonIcon />
          Allow us to contact you?
        </FormCheck.Label>
      </div>

      <br />

      <h4 className="my-5">Select</h4>

      <div className="row">
        <div className="col" style={{ marginBottom: "500px" }}>
          <Form.Group>
            <Select>
              <Option value="jack">jack</Option>
              <Option value="lucy">lucy</Option>
              <Option value="yiminghe">yiminghe</Option>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
              <Option value="6">6</Option>
              <Option value="7">7</Option>
              <Option value="9">9</Option>
              <Option value="0">0</Option>
              <Option value="10">10</Option>
            </Select>
          </Form.Group>
        </div>
      </div>
    </div>
  )
}

export default Forms
