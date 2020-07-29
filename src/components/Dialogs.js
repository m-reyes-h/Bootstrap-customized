import React from "react"
import Dialog from "rc-dialog"
import Select, { Option } from "rc-select"
import { Row, Col, Button, Form } from "react-bootstrap"

const Footer = () => (
  <Button variant="outline-primary" type="button" key="close">
    Show dialog
  </Button>
)

const Dialogs = () => {
  const [visible, setVisible] = React.useState(false)

  const handleOpen = () => {
    setVisible(true)
    document.body.classList.add("scrolling-effect")
  }

  const handleClose = () => {
    setVisible(false)
    document.body.classList.remove("scrolling-effect")
  }

  const getPopupContainer = (node) => node.parentNode

  return (
    <div className="my-5 bg-white border p-5">
      <div className="mv-5 py-5">
        <h1>Dialog</h1>
        <hr />
        <Row>
          <Col>
            <Button variant="primary" type="button" onClick={handleOpen}>
              Show dialog
            </Button>
            <Dialog
              title="Use Google's location service?"
              onClose={handleClose}
              visible={visible}
              footer={Footer()}
            >
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                voluptate enim dignissimos perferendis laborum sequi soluta libero
                aliquam harum ullam voluptatibus repellendus, saepe adipisci magni
                cupiditate distinctio amet. Exercitationem, dolorem!
              </p>

              <Form.Group controlId="formBasicEmail1">
                <Form.Label>Default text</Form.Label>
                <Form.Control type="text" placeholder=" " />
              </Form.Group>

              <p className="my-5 py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                voluptate enim dignissimos perferendis laborum sequi soluta libero
                aliquam harum ullam voluptatibus repellendus, saepe adipisci magni
                cupiditate distinctio amet. Exercitationem, dolorem!
              </p>

              <h4 className="my-5">Checkbox / Radio</h4>

              <Form.Check custom label="Custome" type={"checkbox"} id="chk-f" />
              <Form.Check custom label="Checkbox" type={"checkbox"} id="chk-e" />

              <hr />

              <Form.Check
                custom
                inline
                label="Custome"
                name="eee"
                type={"radio"}
                id="rd-fgd"
              />
              <Form.Check
                custom
                inline
                label="Radio"
                name="eee"
                type={"radio"}
                id="rd-frrf"
              />

              <hr />

              <Form.Check
                className="choice-tag"
                custom
                inline
                label="Choice Tag"
                name="ctggs"
                type={"radio"}
                id="ct-sfs"
              />

              <hr />

              <Form.Group>
                <Select getPopupContainer={getPopupContainer}>
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

              <p className="my-5 py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                voluptate enim dignissimos perferendis laborum sequi soluta libero
                aliquam harum ullam voluptatibus repellendus, saepe adipisci magni
                cupiditate distinctio amet. Exercitationem, dolorem!
              </p>
            </Dialog>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dialogs
