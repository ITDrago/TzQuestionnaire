import "./App.css";
import Form from "react-bootstrap/Form";
import IpForm from "./IpForm";
import { useState } from "react";
import OooForm from "./OooForm";
import BankDetails from "./BankDetails";
function App() {
  const [selector, setSelector] = useState(""); // Состояние для значения селектора

  const handleSelectorChange = (event) => {
    setSelector(event.target.value); // Обновляем состояние значения селектора при изменени
  };
  return (
    <div className="App">
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          margin: 100,
          fontSize: 20,
          padding: 10,
        }}
      >
        <Form.Label style={{ marginBottom: 30 }}>
          Форма собственности
        </Form.Label>
        <Form.Text>Вид деятельности*</Form.Text>
        <Form.Select
          onChange={handleSelectorChange}
          style={{
            width: 500,
            backgroundColor: "#ededed",
            marginTop: 100,
            marginTop: 15,
          }}
        >
          <option  value="option1">Индивидуальный предприниматель (ИП)</option>
          <option value="option2">Общество с ограниченной ответсвенностью (ООО)</option>
        </Form.Select>
        <img style={{ marginTop: 40 }} src="./image/arrow.png"></img>
      </Form>
      {selector === "option1" ? (
        <IpForm />
      ) : selector === "option2" ? (
        <OooForm />
      ) : null}
      <BankDetails/>
    </div>
  );
}

export default App;
