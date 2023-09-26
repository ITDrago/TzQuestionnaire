import React, { useState } from "react";
import { Container, Row, Col, Form, Button, FormGroup } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const LimitedLiabilityForm = () => {
  const validationSchema = Yup.object().shape({
    Inn: Yup.string()
      .required("Поле обязательно для заполнения")
      .matches(
        /^\d{10}$/,
        "ИНН должен содержать ровно 10 цифр и состоять только из цифр"
      ),
    Ogrn: Yup.string()
      .required("Поле обязательно для заполнения")
      .matches(
        /^\d{13}$/,
        "ОГРН должен содержать ровно 13 цифр и состоять только из цифр"
      ),
    RegistrationDate: Yup.string()
      .required("Поле обязательно для заполнения")
      .matches(
        /^([0-2]?[0-9]|3[0-1])\.(0?[1-9]|1[0-2])\.\d{4}$/,
        "Дата должна быть в формате ДД.ММ.ГГГГ"
      ),
    FullName: Yup.string().required("Поле обязательно для заполнения"),
    ShortName: Yup.string().required("Поле обязательно для заполнения"),

    InnScan: Yup.mixed().required("Поле обязательно для заполнения"),
    OgrnScan: Yup.mixed().required("Поле обязательно для заполнения"),
    EgrnipScan: Yup.mixed().required("Поле обязательно для заполнения"),
    PremisesAgreementScan: Yup.mixed().required(
      "Поле обязательно для заполнения"
    ),
  });
  const formik = useFormik({
    initialValues: {
      Inn: "",
      Ogrn: "",
      RegistrationDate: "",
      FullName: "",
      ShortName: "",
      InnScan: null,
      OgrnScan: null,
      EgrnipScan: null,
      PremisesAgreementScan: null,
    },
    validationSchema: validationSchema,
  });

  const BankData = {
    Bik: "211231321213123",
    BankName: "VTB",
    CheckingAccount: "1231233122312",
    CorrespondentAccount: "2323221321",
  };
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("FullName", formik.values.FullName);
    formData.append("ShortName", formik.values.ShortName);
    formData.append("Inn", formik.values.Inn);
    formData.append("Ogrn", formik.values.Ogrn);
    formData.append("RegistrationDate", formik.values.RegistrationDate);
    formData.append("NoAgreement", noAgreement);
    formData.append("InnScan", formik.values.InnScan);
    formData.append("OgrnScan", formik.values.OgrnScan);
    formData.append("EgrnipScan", formik.values.EgrnipScan);
    formData.append(
      "PremisesAgreementScan",
      formik.values.PremisesAgreementScan
    );
    formData.append("BankData", JSON.stringify(BankData));
    for (var value of formData.values()) {
      console.log(value);
    }
    try {
      const response = await axios.post(
        "https://localhost:7174/api/LimitedLiability",
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
  const [noAgreement, setNoAgreement] = useState(false);

  const handleNoAgreementChange = (event) => {
    setNoAgreement(event.target.checked);
  };

  const handleFileChange = (fieldName) => (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue(fieldName, file);
  };

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
                <Form.Group controlId="FullName">
                  <Form.Label>Наименование полное*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="OOO 'Москвоская промышленная компания' "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.FullName}
                    style={{ width: 400 }}
                    className={
                      formik.errors.FullName && formik.touched.FullName
                        ? "is-invalid"
                        : ""
                    }
                  />
                  {formik.errors.FullName && formik.touched.FullName && (
                    <div className="invalid-feedback">
                      {formik.errors.FullName}
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="ShortName">
                  <Form.Label>Наименование сокращенное</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ООО 'МПК' "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ShortName}
                    className={
                      formik.errors.ShortName && formik.touched.ShortName
                        ? "is-invalid"
                        : ""
                    }
                  />
                  {formik.errors.ShortName && formik.touched.ShortName && (
                    <div className="invalid-feedback">
                      {formik.errors.ShortName}
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="RegistrationDate">
                  <Form.Label>Дата регитсрации*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="дд.мм.гггг"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Data}
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
                  controlId="OgrnScan"
                  className="mb-3"
                  style={{ width: 400 }}
                >
                  <Form.Label>Скан ОГРН*</Form.Label>
                  <Form.Control
                    type="file"
                    onBlur={formik.handleBlur}
                    onChange={handleFileChange("OgrnScan")}
                    className={
                      formik.errors.OgrnScan && formik.touched.OgrnScan
                        ? "is-invalid"
                        : ""
                    }
                  />
                  {formik.errors.OgrnScan && formik.touched.OgrnScan && (
                    <div className="invalid-feedback">
                      {formik.errors.OgrnScan}
                    </div>
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
                    onBlur={formik.handleBlur}
                    onChange={handleFileChange("EgrnipScan")}
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
                    Скан договора аренды помешения (офиса)*
                  </Form.Label>
                  <Form.Control
                    type="file"
                    onBlur={formik.handleBlur}
                    onChange={handleFileChange("PremisesAgreementScan")}
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
              style={{ marginLeft: 1050 }}
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

export default LimitedLiabilityForm;
