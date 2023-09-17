import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const OooForm = () => {
  const validationSchema = Yup.object().shape({
    Inn: Yup.string()
      .required("Поле обязательно для заполнения")
      .max(10, "ИНН может включать только 10 цифр")
      .matches(/^[0-9]+$/, "ИНН должен содержать только цифры"),
    Ogrn: Yup.string()
      .required("Поле обязательно для заполнения")
      .max(13, "ОГРН может включать только 13 цифр")
      .matches(/^[0-9]+$/, "ОГРН должен содержать только цифры"),
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
      Ogrn: "",
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
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignContent: "normal",
        marginTop: 100,
        fontSize: 15,
        padding: 10,
        marginLeft: 100,
      }}
    >
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
            </Row>
          </Form>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
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
                <Form.Group controlId="Ogrn">
                  <Form.Label>ОГРН*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="XXXXXXXXXXXXX"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Ogrn}
                    className={
                      formik.errors.Ogrn && formik.touched.Ogrn
                        ? "is-invalid"
                        : ""
                    }
                  />
                  {formik.errors.Ogrn && formik.touched.Ogrn && (
                    <div className="invalid-feedback">{formik.errors.Ogrn}</div>
                  )}
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
      <Row style={{ marginTop: 20 }}>
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
      <Button variant="primary" type="submit" style={{ marginLeft: 1050 }}>
        Далее
      </Button>
    </Container>
  );
};

export default OooForm;
