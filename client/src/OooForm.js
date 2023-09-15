import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const OooForm = () => {
  return (
    <Container style={{
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      alignContent:"normal",
      marginTop: 100,
      fontSize: 15,
      padding: 10,
      marginLeft:100
    }}>
      <h4 style={{ marginBottom: 40 }}>
        Общество с ограниченной ответсвеностью (ООО)
      </h4>
      <Row>
        <Col>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="input1">
                  <Form.Label>Наименование полное*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="OOO 'Москвоская промышленная компания' "
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="input2">
                  <Form.Label>Наименование сокращенное</Form.Label>
                  <Form.Control type="text" placeholder="ООО 'МПК' " />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="input3">
                  <Form.Label>Дата регитсрации*</Form.Label>
                  <Form.Control type="text" placeholder="дд.мм.ггг" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row style={{marginTop:20}}>
        <Col>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="input4">
                  <Form.Label>ИНН*</Form.Label>
                  <Form.Control type="text" placeholder="XXXXXXXXXX" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="formFileLg"
                  className="mb-3"
                  style={{ width: 400 }}
                >
                  <Form.Label>Скан ИНН*</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="input6">
                  <Form.Label>ОГРН*</Form.Label>
                  <Form.Control type="text" placeholder="XXXXXXXXXXXXX" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="formFileLg2"
                  className="mb-3"
                  style={{ width: 400 }}
                >
                  <Form.Label>Скан ОГРН*</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row style={{marginTop:20}}>
        <Col>
          <Form>
            <Row>
              <Col>
                <Form.Group
                  controlId="formFileLg3"
                  className="mb-3"
                  style={{ width: 400 }}
                >
                  <Form.Label>
                    Скан выписки из ЕГРИП (не старше 3 месяцев)*
                  </Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="formFileLg4"
                  className="mb-3"
                  style={{ width: 400 }}
                >
                  <Form.Label>
                    Скан договора аренды помешения (офиса)*
                  </Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Check
                  inline
                  label="Нет договора"
                  name="group1"
                  type="checkbox"
                  style={{ marginTop: 35 }}
                  // id={`inline-${type}-1`}
                />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Button variant="primary" type="submit" style={{marginLeft:1050}}>
        Далее
      </Button>
    </Container>
  );
};

export default OooForm;
