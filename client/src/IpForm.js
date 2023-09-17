import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const IpForm = () => {
  const validationSchema = Yup.object().shape({
    Inn: Yup.string()
      .required("Поле обязательно для заполнения")
      .max(10, "ИНН может включать только 10 цифр")
      .matches(/^[0-9]+$/, "ИНН должен содержать только цифры"),
    Ogrnip: Yup.string()
      .required("Поле обязательно для заполнения")
      .max(15, "ОРГНИП может включать только 15 цифр")
      .matches(/^[0-9]+$/, "ОГРНИП должен содержать только цифры"),
    Data: Yup.string()
      .required("Поле обязательно для заполнения")
      .matches(
        /^([0-2]?[0-9]|3[0-1])\.(0?[1-9]|1[0-2])\.\d{4}$/,
        "Дата должна быть в формате ДД.ММ.ГГГГ"
      ),
  });
  const formik = useFormik({
    initialValues: {
      Inn: "",
      Ogrnip: "",
      Data: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Обработчик отправки формы
      console.log(values); // Выведет значения полей формы после валидации
    },
  });
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        alignContent: "space-between",
        marginTop: 100,
        fontSize: 15,
        padding: 10,
        marginLeft: 100,
        maxWidth: "1347px",
      }}
    >
      <h4 style={{ marginBottom: 40 }}>Индивидуальный предприниматель (ИП)</h4>
      <Row>
        <Col>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="Inn">
                  <Form.Label>ИНН*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="XXXXXXXXXX"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Inn}
                    className={
                      formik.errors.Inn && formik.touched.Inn
                        ? "is-invalid"
                        : ""
                    }
                  />
                  {formik.errors.Inn && formik.touched.Inn && (
                    <div className="invalid-feedback">{formik.errors.Inn}</div>
                  )}
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
                <Form.Group controlId="Ogrnip">
                  <Form.Label>ОГРНИП*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="XXXXXXXXXXXXXXX"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Ogrnip}
                    className={
                      formik.errors.Ogrnip && formik.touched.Ogrnip
                        ? "is-invalid"
                        : ""
                    }
                  />
                  {formik.errors.Ogrnip && formik.touched.Ogrnip && (
                    <div className="invalid-feedback">
                      {formik.errors.Ogrnip}
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="formFileLg"
                  className="mb-3"
                  style={{ width: 400 }}
                >
                  <Form.Label>Скан ОГРНИП*</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row style={{ marginTop: 30 }}>
        <Col>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="Data">
                  <Form.Label>Дата регитсрации*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="дд.мм.гггг"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Data}
                    className={
                      formik.errors.Data && formik.touched.Data
                        ? "is-invalid"
                        : ""
                    }
                  />
                  {formik.errors.Data && formik.touched.Data && (
                    <div className="invalid-feedback">{formik.errors.Data}</div>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="formFileLg"
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
                  controlId="formFileLg"
                  className="mb-3"
                  style={{ width: 400 }}
                >
                  <Form.Label>
                    Скан договора аренды помешения (офиса)
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
      <Button variant="primary" type="submit">
        Далее
      </Button>
    </Container>
  );
};

export default IpForm;
