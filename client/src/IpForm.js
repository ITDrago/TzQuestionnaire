import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Form, Button, FormGroup } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const IpForm = () => {
  const validationSchema = Yup.object().shape({
    Inn: Yup.string()
      .required("Поле обязательно для заполнения")
      .matches(
        /^\d{10}$/,
        "ИНН должен содержать ровно 10 цифр и состоять только из цифр"
      ),
    Ogrnip: Yup.string()
      .required("Поле обязательно для заполнения")
      .matches(
        /^\d{15}$/,
        "ОГРНИП должен содержать ровно 15 цифр и состоять только из цифр"
      ),
    RegistrationDate: Yup.string()
      .required("Поле обязательно для заполнения")
      .matches(
        /^([0-2]?[0-9]|3[0-1])\.(0?[1-9]|1[0-2])\.\d{4}$/,
        "Дата должна быть в формате ДД.ММ.ГГГГ"
      ),
    InnScan: Yup.mixed().required("Поле обязательно для заполнения"),
    OgrnipScan: Yup.mixed().required("Поле обязательно для заполнения"),
    EgrnipScan: Yup.mixed().required("Поле обязательно для заполнения"),
    PremisesAgreementScan: Yup.mixed().required(
      "Поле обязательно для заполнения"
    ),
    Bik: Yup.string()
      .required("Поле обязательно для заполнения")
      .matches(
        /^\d{10}$/,
        "БИК должен содержать ровно 10 цифр и состоять только из цифр"
      ),
    BankName: Yup.string().required("Поле обязательно для заполнения"),
    CheckingAccount: Yup.string()
      .required("Поле обязательно для заполнения")
      .matches(
        /^\d{20}$/,
        "Расчетный счет должен содержать ровно 20 цифр и состоять только из цифр"
      ),
    CorrespondentAccount: Yup.string()
      .required("Поле обязательно для заполнения")
      .matches(
        /^\d{20}$/,
        "Корреспондентский счет должен содержать ровно 20 цифр и состоять только из цифр"
      ),
  });

  const formik = useFormik({
    initialValues: {
      Inn: "",
      Ogrnip: "",
      RegistrationDate: "",
      InnScan: null,
      OgrnipScan: null,
      EgrnipScan: null,
      PremisesAgreementScan: null,
      Bik: "",
      BankName: "",
      CheckingAccount: "",
      CorrespondentAccount: "",
    },
    validationSchema: validationSchema,
  });
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState(new FormData());

  const [noAgreement, setNoAgreement] = useState(false);

  const handleNoAgreementChange = (event) => {
    setNoAgreement(event.target.checked);
  };
  console.log(currentStage);
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

  const handleFileChange = (fieldName) => (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue(fieldName, file);
  };
  const tmpFormData = formData;
  async function handleFormSubmission(e) {
    e.preventDefault();
    tmpFormData.append("Inn", formik.values.Inn);
    tmpFormData.append("Ogrnip", formik.values.Ogrnip);
    tmpFormData.append("RegistrationDate", formik.values.RegistrationDate);
    tmpFormData.append("NoAgreement", noAgreement);
    tmpFormData.append("InnScan", formik.values.InnScan);
    tmpFormData.append("OgrnipScan", formik.values.OgrnipScan);
    tmpFormData.append("EgrnipScan", formik.values.EgrnipScan);
    tmpFormData.append(
      "PremisesAgreementScan",
      formik.values.PremisesAgreementScan
    );
    setFormData(tmpFormData);
    setCurrentStage(2);
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const BankData = {
      Bik: formik.values.Bik,
      BankName: formik.values.BankName,
      CheckingAccount: formik.values.CheckingAccount,
      CorrespondentAccount: formik.values.CorrespondentAccount,
    };
    tmpFormData.append("BankData", JSON.stringify(BankData));
    setFormData(tmpFormData);
    for (var value of formData.values()) {
      console.log(value);
    }
    try {
      const response = await axios.post(
        "https://localhost:7174/api/Ip",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // Handle successful response
      if (response.status === 200) {
        toast.success("Форма успешно отправлена");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  }
  return (
    <div>
      {currentStage === 1 && (
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
          <h4 style={{ marginBottom: 40 }}>
            Индивидуальный предприниматель (ИП)
          </h4>
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
                        <div className="invalid-feedback">
                          {formik.errors.Inn}
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      controlId="InnScan"
                      className="mb-3"
                      style={{ width: 400 }}
                    >
                      <Form.Label>Скан ИНН*</Form.Label>
                      <Form.Control
                        type="file"
                        onBlur={formik.handleBlur}
                        onChange={handleFileChange("InnScan")}
                        className={
                          formik.errors.InnScan && formik.touched.InnScan
                            ? "is-invalid"
                            : ""
                        }
                      />
                      {formik.errors.InnScan && formik.touched.InnScan && (
                        <div className="invalid-feedback">
                          {formik.errors.InnScan}
                        </div>
                      )}
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
                      controlId="OgrnipScan"
                      className="mb-3"
                      style={{ width: 400 }}
                    >
                      <Form.Label>Скан ОГРНИП*</Form.Label>
                      <Form.Control
                        type="file"
                        onChange={handleFileChange("OgrnipScan")}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.OgrnipScan && formik.touched.OgrnipScan
                            ? "is-invalid"
                            : ""
                        }
                      />
                      {formik.errors.OgrnipScan &&
                        formik.touched.OgrnipScan && (
                          <div className="invalid-feedback">
                            {formik.errors.OgrnipScan}
                          </div>
                        )}
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
                    <Form.Group controlId="RegistrationDate">
                      <Form.Label>Дата регитсрации*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="дд.мм.гггг"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.RegistrationDate}
                        className={
                          formik.errors.RegistrationDate &&
                          formik.touched.RegistrationDate
                            ? "is-invalid"
                            : ""
                        }
                      />
                      {formik.errors.RegistrationDate &&
                        formik.touched.RegistrationDate && (
                          <div className="invalid-feedback">
                            {formik.errors.RegistrationDate}
                          </div>
                        )}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      controlId="EgrnipScan"
                      className="mb-3"
                      style={{ width: 400 }}
                    >
                      <Form.Label>
                        Скан выписки из ЕГРИП (не старше 3 месяцев)*
                      </Form.Label>
                      <Form.Control
                        type="file"
                        onChange={handleFileChange("EgrnipScan")}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.EgrnipScan && formik.touched.EgrnipScan
                            ? "is-invalid"
                            : ""
                        }
                      />
                      {formik.errors.EgrnipScan &&
                        formik.touched.EgrnipScan && (
                          <div className="invalid-feedback">
                            {formik.errors.EgrnipScan}
                          </div>
                        )}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      controlId="PremisesAgreementScan"
                      className="mb-3"
                      style={{ width: 400 }}
                    >
                      <Form.Label>
                        Скан договора аренды помешения (офиса)
                      </Form.Label>
                      <Form.Control
                        type="file"
                        onChange={handleFileChange("PremisesAgreementScan")}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.PremisesAgreementScan &&
                          formik.touched.PremisesAgreementScan
                            ? "is-invalid"
                            : ""
                        }
                      />
                      {formik.errors.PremisesAgreementScan &&
                        formik.touched.PremisesAgreementScan && (
                          <div className="invalid-feedback">
                            {formik.errors.PremisesAgreementScan}
                          </div>
                        )}
                    </Form.Group>
                  </Col>
                  <Col>
                    <FormGroup controlId="NoAgreement">
                      <Form.Check
                        inline
                        label="Нет договора"
                        name="NoAgreement"
                        type="checkbox"
                        style={{ marginTop: 35 }}
                        checked={noAgreement}
                        onChange={handleNoAgreementChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Button
                  variant="primary"
                  type="button"
                  style={{ marginLeft: 1000 }}
                  onClick={(e) => handleFormSubmission(e)}
                >
                  Далее
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
      {currentStage === 2 && (
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
                      formik.errors.Bik && formik.touched.Bik
                        ? "is-invalid"
                        : ""
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
                  <Form.Label>"Название филиала банка"</Form.Label>
                  <Form.Control
                    type="text"
                    name="BankName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.BankName}
                    placeholder="ООО 'Московская промышленная компания'"
                    style={{ width: 500 }}
                    className={
                      formik.errors.BankName && formik.touched.BankName
                        ? "is-invalid"
                        : ""
                    }
                  />
                  {formik.errors.BankName && formik.touched.BankName && (
                    <div className="invalid-feedback">
                      {formik.errors.BankName}
                    </div>
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
                  <Form.Label>Расчетный счет*</Form.Label>
                  <Form.Control
                    type="text"
                    name="CheckingAccount"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.CheckingAccount}
                    placeholder="XXXXXXXXXXXXXXXXXXXX"
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
                    placeholder="XXXXXXXXXXXXXXXXXXXX"
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
          <Button
            variant="primary"
            type="submit"
            style={{ marginLeft: 952, marginTop: 10 }}
            onClick={(e) => handleSubmit(e)}
          >
            Отправить
          </Button>
          <Button variant="link" style={{ fontSize: 20, marginTop: 45 }}>
            + Добавить еще один банк
          </Button>
        </Container>
      )}
    </div>
  );
};

export default IpForm;
