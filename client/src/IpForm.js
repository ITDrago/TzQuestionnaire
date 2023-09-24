import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Form, Button, FormGroup } from "react-bootstrap";
import axios from "axios";

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
  });
  const BankData = {
    Bik: "211231321213123",
    BankName: "VTB",
    CheckingAccount: "1231233122312",
    CorrespondentAccount: "2323221321",
  };

  const formik = useFormik({
    initialValues: {
      Inn: "",
      Ogrnip: "",
      RegistrationDate: "",
      InnScan: null,
      OgrnipScan: null,
      EgrnipScan: null,
      PremisesAgreementScan: null,
    },
    validationSchema: validationSchema,
  });
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Inn", formik.values.Inn);
    formData.append("Ogrnip", formik.values.Ogrnip);
    formData.append("RegistrationDate", formik.values.RegistrationDate);
    formData.append("NoAgreement", noAgreement);
    formData.append("InnScan", InnScan);
    formData.append("OgrnipScan", OgrnipScan);
    formData.append("EgrnipScan",EgrnipScan);
    formData.append(
      "PremisesAgreementScan",
      PremisesAgreementScan
    );
    formData.append("BankData", JSON.stringify(BankData));
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
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  }
  const [noAgreement, setNoAgreement] = useState(false);

  const handleNoAgreementChange = (event) => {
    setNoAgreement(event.target.checked);
  };
  const [InnScan, setInnScan] = useState();
  const [OgrnipScan, setOgrnipScan] = useState();
  const [EgrnipScan, setEgrnipScan] = useState();
  const [PremisesAgreementScan, setPremisesAgreementScan] = useState();

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
                  controlId="InnScan"
                  className="mb-3"
                  style={{ width: 400 }}
                >
                  <Form.Label>Скан ИНН*</Form.Label>
                  <Form.Control
                    type="file"
                    onBlur={formik.handlBlur}
                    onChange={(event) =>
                      setInnScan(event.currentTarget.files[0])
                    }
                    // value={InnScan}
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
                    onChange={(event) =>
                      setOgrnipScan(event.currentTarget.files[0])
                    }
                    onBlur={formik.handleBlur}
                    // value={OgrnipScan}
                    className={
                      formik.errors.OgrnipScan && formik.touched.OgrnipScan
                        ? "is-invalid"
                        : ""
                    }
                  />
                  {formik.errors.OgrnipScan && formik.touched.OgrnipScan && (
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
                    onChange={(event) =>
                      setEgrnipScan(event.currentTarget.files[0])
                    }
                    onBlur={formik.handleBlur}
                    // value={EgrnipScan}
                    className={
                      formik.errors.EgrnipScan && formik.touched.EgrnipScan
                        ? "is-invalid"
                        : ""
                    }
                  />
                  {formik.errors.EgrnipScan && formik.touched.EgrnipScan && (
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
                    onChange={(event) =>
                      setPremisesAgreementScan(event.currentTarget.files[0])
                    }
                    onBlur={formik.handleBlur}
                    // value={PremisesAgreementScan}
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
              type="submit"
              style={{ marginLeft: 1000 }}
              onClick={(e) => handleSubmit(e)}
            >
              Далее
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default IpForm;
