import React from "react";
import { Form, Button, Row, Col, FormCheck, Dropdown } from "react-bootstrap";
import { BsPersonPlusFill as PersonIcon } from "react-icons/bs";
import Select, { Option } from "rc-select";

const Forms = () => {
  const [value, setValue] = React.useState("");
  return (
    <div className="my-5 bg-white border p-5">
      <div className="mv-5 py-5">
        <h1>Text</h1>
        <hr />

        <p className="title">Title text</p>
        <p className="subtitle">Subtitle text</p>
        <p className="subtitle1">Subtitle 1 text</p>
        <p className="subtitle2">Subtitle 2 text</p>
        <p className="body">Body text</p>
        <p className="description">Description text</p>
        <p className="help">Help text</p>
        <a href="/#">Link text</a>
      </div>

      <div className="my-5 py-5">
        <h1>Colors</h1>
        <hr />

        <div class="row">
          <div class="col">
            <p className="blue">Blue</p>
            <p className="light-blue">Light Blue</p>
            <p className="dark-blue">Dark Blue</p>
          </div>
          <div class="col">
            <p className="green">Green</p>
            <p className="light-green">Light Green</p>
            <p className="red">Red</p>
          </div>
        </div>

        <div class="row">
          <div class="col rounded p-4 bg-blue text-light ">background blue</div>
          <div class="col rounded p-4 bg-light-blue dark-blue mx-3">
            background light blue
          </div>
          <div class="col rounded p-4 bg-dark-blue text-light">
            background dark blue
          </div>
        </div>
        <div class="row mt-3">
          <div class="col rounded p-4 bg-green text-light ">
            background green
          </div>
          <div class="col rounded p-4 bg-light-green dark-green ml-3 mr-1">
            background light green
          </div>
          <div class="col rounded p-4 bg-red text-light mr-3 ml-1">
            background red
          </div>
          <div class="col rounded p-4 bg-white border">Border color</div>
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}

      <div className="my-5 py-5">
        <h1>Form</h1>
        <hr />
        <h5 className="my-5 pt-5">Default input</h5>

        <div class="row">
          <div class="col">
            <Form.Group controlId="formBasicEmail1">
              <Form.Label>Default text</Form.Label>
              <Form.Control type="text" placeholder=" " />
            </Form.Group>
          </div>
          <div class="col">
            <Form.Group controlId="formBasicEmail2">
              <Form.Label>Invalid text</Form.Label>
              <Form.Control type="text" isInvalid placeholder=" " />
              <Form.Control.Feedback className="help" type="invalid">
                Invalid field data
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </Form.Group>

        {/* ------------------------------------------------------------------- */}

        <h5 className="my-5 pt-5">Input Outline</h5>

        <div class="row">
          <div class="col">
            <Form.Group
              className="form-group--floating"
              controlId="formBasicEmail3"
            >
              <Form.Control type="text" placeholder=" " />
              <Form.Label>
                <span>Floating text</span>
              </Form.Label>
            </Form.Group>
          </div>

          <div class="col">
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
          </div>
        </div>

        <div class="row">
          <div class="col">
            <Form.Group
              className="form-group--floating"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows="3" placeholder=" " />
              <Form.Label>
                <span>Floating text</span>
              </Form.Label>
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </Form.Text>
            </Form.Group>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}

        <div className="my-5 py-5">
          <h1>Buttons</h1>
          <hr />
          <Row>
            <Col>
              <Button variant="primary" type="button">
                Default
              </Button>
            </Col>
            <Col>
              <Button size="sm" variant="primary" type="button">
                Small
              </Button>
            </Col>
            <Col>
              <Button size="md" variant="primary" type="button">
                Medium
              </Button>
            </Col>
            <Col>
              <Button variant="primary" type="button">
                <PersonIcon size="18" />
                Icon
              </Button>
            </Col>
          </Row>
          <Row className="py-5">
            <Col>
              <Button variant="link" className="btn-text" type="button">
                Text
              </Button>
            </Col>
            <Col>
              <Button variant="outline-primary">Outline</Button>
            </Col>
            <Col>
              <Button variant="link" type="button">
                Link
              </Button>
            </Col>
          </Row>
        </div>

        {/* ------------------------------------------------------------------- */}

        <div className="my-5 py-5">
          <h1>Checkbox & Radio buttons</h1>
          <hr />

          <Form.Check custom label="Custome" type={"checkbox"} id="chk-1" />
          <Form.Check
            custom
            inline
            label="Checkbox"
            type={"checkbox"}
            id="chk-2"
          />
          <Form.Check
            custom
            inline
            label="Checkbox"
            type={"checkbox"}
            id="chk-24"
          />

          <Form.Check custom label="Custom" type={"radio"} id="rd-1" />
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
        </div>

        {/* ------------------------------------------------------------------- */}

        <div className="my-5 py-5">
          <h1>Choice tags</h1>
          <hr />

          <Row>
            <Col>
              <Form.Check
                className="choice-tag choice-tag--small outlined"
                custom
                inline
                label="Default color outlined"
                name="ccl-1"
                type={"radio"}
                id="ccl-1"
              />

              <Form.Check
                className="choice-tag choice-tag--small outlined"
                custom
                inline
                label="Default color outlined"
                name="ccl-1"
                type={"radio"}
                id="ccl-12"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Check
                className="choice-tag primary outlined pill"
                custom
                inline
                label="Primary outlined"
                name="ct1"
                type={"radio"}
                id="ct-1"
              />

              <Form.Check
                className="choice-tag primary outlined pill"
                custom
                inline
                label="Primary outlined"
                name="ct1"
                type={"radio"}
                id="ct-2"
              />
            </Col>

            <Col>
              <Form.Check
                className="choice-tag primary pill"
                custom
                inline
                label="Primary plain"
                name="ctpp"
                type={"radio"}
                id="ct-1pp"
              />

              <Form.Check
                className="choice-tag primary pill"
                custom
                inline
                label="Primary plain"
                name="ctpp"
                type={"radio"}
                id="ct-2pp"
              />
            </Col>
          </Row>

          <Row className="my-5">
            <Col xs="12">
              <Form.Check
                className="choice-tag choice-tag-check outlined inline"
                custom
                label="Choice Tag Outlined"
                name="ct52"
                type={"radio"}
                id="ct-52"
              />

              <Form.Check
                className="choice-tag choice-tag-check outlined inline"
                custom
                label="Choice Tag Outlined"
                name="ct52"
                type={"radio"}
                id="ct-58"
              />
            </Col>

            <Col>
              <Form.Check
                className="choice-tag choice-tag-check outlined pill inline"
                custom
                label="Choice Tag Outlined"
                name="ct5233"
                type={"radio"}
                id="ct-52123"
              />

              <Form.Check
                className="choice-tag choice-tag-check outlined pill inline"
                custom
                label="Choice Tag Outlined"
                name="ct5233"
                type={"radio"}
                id="ct-58123"
              />
            </Col>

            <Col>
              <Form.Check
                className="choice-tag choice-tag-check primary"
                custom
                label="Choice  Primary"
                name="ct5244"
                type={"radio"}
                id="ct-52cp"
              />

              <Form.Check
                className="choice-tag choice-tag-check primary"
                custom
                label="Choice Primary"
                name="ct5244"
                type={"radio"}
                id="ct-58cp"
              />

              <Form.Check
                className="choice-tag choice-tag-check outlined primary blue"
                custom
                label="Outline Primary"
                name="ct5244"
                type={"radio"}
                id="ct-59cp"
              />

              <Form.Check
                className="choice-tag choice-tag-check outlined primary blue"
                custom
                label="Outline Primary"
                name="ct5244"
                type={"radio"}
                id="ct-60cp"
              />

              <Form.Check
                className="choice-tag choice-tag-check outlined primary blue pill"
                custom
                label="Outline Pill"
                name="ct5244"
                type={"radio"}
                id="ct-60qcp"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="choice-tag choice-tag--icon custom-control outlined custom-radio inline">
                <FormCheck.Input
                  className="custom-control-input"
                  name="ct009"
                  id="csd334"
                  type="radio"
                />
                <FormCheck.Label
                  className="custom-control-label"
                  htmlFor="csd334"
                >
                  <PersonIcon />
                  Allow us to <br />
                  contact you?
                </FormCheck.Label>
              </div>

              <div className="choice-tag choice-tag--icon custom-control outlined custom-radio inline">
                <FormCheck.Input
                  className="custom-control-input"
                  name="ct009"
                  id="csd335"
                  type="radio"
                />
                <FormCheck.Label
                  className="custom-control-label"
                  htmlFor="csd335"
                >
                  <PersonIcon />
                  Allow us to contact you?
                </FormCheck.Label>
              </div>

              <div className="choice-tag choice-tag--icon custom-control custom-radio outlined primary inline">
                <FormCheck.Input
                  className="custom-control-input"
                  name="ct009"
                  id="csd336"
                  type="radio"
                />
                <FormCheck.Label
                  className="custom-control-label"
                  htmlFor="csd336"
                >
                  <PersonIcon />
                  Cash pickup?
                </FormCheck.Label>
              </div>

              <div className="choice-tag choice-tag--icon custom-control custom-radio primary inline">
                <FormCheck.Input
                  className="custom-control-input"
                  name="ct009"
                  id="csd338"
                  type="radio"
                />
                <FormCheck.Label
                  className="custom-control-label"
                  htmlFor="csd338"
                >
                  <PersonIcon />
                  Bank deposit?
                </FormCheck.Label>
              </div>
            </Col>
          </Row>

          {/* ------------------------------------------------------------------- */}

          <div className="my-5 py-5">
            <h1>Select</h1>
            <hr />

            <Row>
              <Col>
                <Form.Group>
                  <Select allowClear placeholder="" id="select1">
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
                  <label htmlFor="select1">Select box auto clear</label>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Select placeholder="" id="select2.combo" mode="combobox">
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
                  <label htmlFor="select2.combo">Combobox mode</label>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Select
                    optionFilterProp="desc"
                    onChange={(val, string) => {
                      setValue(val);
                    }}
                    value={value}
                    showSearch
                    id="select2-search"
                  >
                    <Option value="jack" desc="jack jacky pep">
                      jack
                    </Option>
                    <Option value="lucy" desc="lucy locky">
                      lucy
                    </Option>
                    <Option value="yiminghe" desc="yimingue">
                      yiminghe
                    </Option>
                    <Option value="1" desc="1 usa us">
                      1
                    </Option>
                    <Option value="2" desc="2">
                      2
                    </Option>
                    <Option value="3" desc="3">
                      3
                    </Option>
                  </Select>
                  <label htmlFor="select2-search">Searcheable box</label>
                </Form.Group>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="list-group list-group--options">
            <li className="list-group-item">
              <Form.Check
                className="medium"
                custom
                label="Medium size"
                name="asd"
                type={"radio"}
                id="rd-333"
              />
            </li>
            <li className="list-group-item">
              <Form.Check
                custom
                label="Custome"
                name="asd"
                type={"radio"}
                id="rd-3333"
              />
            </li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Forms;
