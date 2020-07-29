import React from "react";
import { Row, Col } from "react-bootstrap";
import Tabs, { TabPane } from 'rc-tabs';
import { BsCollection as CollectionIcon, BsPersonPlusFill as PersonIcon } from "react-icons/bs";


function Tabular() {
  return (
    <div className="my-5 bg-white border p-5">
      <div className="mv-5 py-5">
        <h1>Tabs</h1>
        <hr />

        <Row className="py-5">
          <Col>
            <p className="subtitle2">Basic</p>
            <Tabs
              defaultActiveKey="1" 
              tabBarGutter={16}            
            >
              <TabPane tab="Home" key="1">
                first
              </TabPane>
              <TabPane tab="Plans" key="2">
                second
              </TabPane>
              <TabPane tab="Phones" key="3">
                third
              </TabPane>
            </Tabs>
          </Col>
          <Col>
            <p className="subtitle2">Basic border</p>
            <Tabs
              defaultActiveKey="11" 
              tabBarGutter={16} 
              tabBarStyle={{ borderBottom: '1px solid #dadce0' }}           
            >
              <TabPane tab="Home" key="11">
                first
              </TabPane>
              <TabPane tab="Plans" key="22">
                second
              </TabPane>
              <TabPane tab="Phones" key="33">
                third
              </TabPane>
            </Tabs>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="subtitle2">Icons</p>
            <Tabs
              defaultActiveKey="1111" 
              tabBarGutter={20}
              tabBarStyle={{ borderBottom: '1px solid #dadce0' }}            
            >
              <TabPane               
                tab={
                  <div className="d-flex align-items-center justify-content-center">
                    <CollectionIcon size="20" className="mr-3" />
                    <span style={{
                      width: '64px',
                      whiteSpace: 'break-spaces',
                      lineHeight: '19px',
                      paddingBottom: '7px',
                    }}>Customer Name</span>
                  </div>
                } 
                key="1111"
              >
                first
              </TabPane>
              <TabPane tab={
                  <div className="d-flex align-items-center justify-content-center">
                    <PersonIcon size="20" className="mr-3" />
                    <span style={{
                      width: '64px',
                    }}>Phone</span>
                  </div>
                }  
                key="2222"
              >
                second
              </TabPane>
              <TabPane tab="Phones" key="3333">
                third
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        
      </div>
    </div>
  );
}

export default Tabular;
