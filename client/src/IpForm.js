import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const IpForm = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        alignContent:"space-between",
        marginTop: 100,
        fontSize: 15,
        padding: 10,
        marginLeft:100
      }}
    >
      <h4 style={{marginBottom:40}}>Индивидуальный предприниматель (ИП)</h4>
      <Row>
        <Col>
          <Form> 
            <Row>
              <Col>
                <Form.Group controlId="input1">
                  <Form.Label>ИНН*</Form.Label>
                  <Form.Control type="text" placeholder="XXXXXXXXXX"/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formFileLg" className="mb-3" style={{width:400}}>
                  <Form.Label>Скан ИНН*</Form.Label>
                  <Form.Control type="file"
                  
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="input3">
                  <Form.Label>ОГРНИП*</Form.Label>
                  <Form.Control type="text" placeholder="XXXXXXXXXXXXXXX" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formFileLg" className="mb-3" style={{width:400}}>
                  <Form.Label>Скан ОГРНИП*</Form.Label>
                  <Form.Control type="file"/>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row style={{marginTop:30}}>
        <Col>
          <Form>
            <Row>
              <Col >
                <Form.Group controlId="input5">
                  <Form.Label>Дата регитсрации*</Form.Label>
                  <Form.Control type="text" placeholder="дд.мм.ггг" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formFileLg" className="mb-3" style={{width:400}}>
                  <Form.Label>
                    Скан выписки из ЕГРИП (не старше 3 месяцев)*
                  </Form.Label>
                  <Form.Control type="file"/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formFileLg" className="mb-3"  style={{width:400}}>
                    <Form.Label>
                    Скан договора аренды помешения (офиса)
                  </Form.Label>
                  <Form.Control type="file"/>
                </Form.Group>
              </Col>
              <Col>
              <Form.Check
            inline
            label="Нет договора"
            name="group1"
            type="checkbox"
            style={{marginTop:35}}
            // id={`inline-${type}-1`}
          />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Button variant="primary" type="submit"> 
        Далее
      </Button>
    </Container>
  );
};

export default IpForm;
