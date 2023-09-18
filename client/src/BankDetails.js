import React, { useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./BankDetails.css";

function BankDetails() {
  const [values, setValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const fillInput = (inputName, value) => {
    setValues({
      ...values,
      [inputName]: value,
    });
  };

  const validationSchema = Yup.object().shape({
    Bik: Yup.string()
      .required("Поле обязательно для заполнения")
      .max(10, "БИК может включать только 10 цифр")
      .matches(/^[0-9]+$/, "БИК должен содержать только цифры"),
    BankName: Yup.string().required("Поле обязательно для заполнения"),
    CheckingAccount: Yup.string()
      .required("Поле обязательно для заполнения")
      .max(20, "Расчетный счет может включать только 20 цифр")
      .matches(/^[0-9]+$/, "Расчетный счет должен содержать только цифры"),
    CorrespondentAccount: Yup.string()
      .required("Поле обязательно для заполнения")
      .max(20, "Корреспондентский счет может включать только 20 цифр")
      .matches(
        /^[0-9]+$/,
        "Корреспондентский счет должен содержать только цифры"
      ),
  });
  const formik = useFormik({
    initialValues: {
      Bik: "",
      BankName: "",
      CheckingAccount: "",
      CorrespondentAccount: "",
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
        justifyContent: "flex-end",
        alignItems: "flex-start",
        alignContent: "flex-start",
        marginTop: 100,
        fontSize: 15,
        padding: 10,
        marginLeft: 100,
        maxWidth: "1347px",
      }}
    >
      <h4 style={{ marginBottom: 40, margin: 10 }}>Банковские реквезиты</h4>
      <Row>
        <Col>
          <div className="input-container">
            <FormGroup controlId="Bik">
              <Form.Label>БИК*</Form.Label>
              <Form.Control
                type="text"
                name="Bik"
                placeholder="XXXXXXXXXX"
                style={{ width: 300 }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Bik}
                className={
                  formik.errors.Bik && formik.touched.Bik ? "is-invalid" : ""
                }
              />
              {formik.errors.Bik && formik.touched.Bik && (
                <div className="invalid-feedback">{formik.errors.Bik}</div>
              )}
            </FormGroup>
          </div>
        </Col>
        <Col>
          <div className="input-container">
            <FormGroup controlId="BankName">
              <FormLabel>"Название филиала банка"</FormLabel>
              <Form.Control
                type="text"
                name="BankName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.BankName}
                style={{ width: 500 }}
                className={
                  formik.errors.BankName && formik.touched.BankName
                    ? "is-invalid"
                    : ""
                }
              />
              {formik.errors.BankName && formik.touched.BankName && (
                <div className="invalid-feedback">{formik.errors.BankName}</div>
              )}

              <Button
                variant="primary"
                className="small-button"
                onClick={() => fillInput("input2", "Some value")}
                style={{ height: 38 }}
              >
                Заполнить
              </Button>
            </FormGroup>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="input-container">
            <FormGroup controlId="CheckingAccount">
              <FormLabel>Расчетный счет*</FormLabel>
              <Form.Control
                type="text"
                name="CheckingAccount"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.CheckingAccount}
                className={
                  formik.errors.CheckingAccount &&
                  formik.touched.CheckingAccount
                    ? "is-invalid"
                    : ""
                }
              />
              {formik.errors.CheckingAccount &&
                formik.touched.CheckingAccount && (
                  <div className="invalid-feedback">
                    {formik.errors.CheckingAccount}
                  </div>
                )}
            </FormGroup>
          </div>
        </Col>
        <Col>
          <div className="input-container">
            <FormGroup controlId="CorrespondentAccount">
              <Form.Label>Корреспондентский счет*</Form.Label>
              <Form.Control
                type="text"
                name="CorrespondentAccount"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.CorrespondentAccount}
                style={{ width: 500 }}
                className={
                  formik.errors.CorrespondentAccount &&
                  formik.touched.CorrespondentAccount
                    ? "is-invalid"
                    : ""
                }
              />
              {formik.errors.CorrespondentAccount &&
                formik.touched.CorrespondentAccount && (
                  <div className="invalid-feedback">
                    {formik.errors.CorrespondentAccount}
                  </div>
                )}

              <Button
                variant="primary"
                className="small-button"
                onClick={() => fillInput("input4", "Some value")}
                style={{ height: 38 }}
              >
                Заполнить
              </Button>
            </FormGroup>
          </div>
        </Col>
      </Row>
      <Button variant="link" style={{ fontSize: 20, marginTop: 45 }}>
        + Добавить еще один банк
      </Button>
    </Container>
  );
}

export default BankDetails;
