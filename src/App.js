import logo from './logo.svg';
import './App.scss';
// import HomeIcon from "@bit/frankwatching.fw_7_test.icons.home-icon";
import Button from "@bit/frankwatching.fw_7_test.molecules.button";
import Checkbox from "@bit/frankwatching.fw_7_test.molecules.checkbox";
import Inputfield from "@bit/frankwatching.fw_7_test.molecules.inputfield";

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "#019000",
          height: "8px",
          width: "100%",
          position: "fixed",
          top: 0,
        }}
      ></div>
      <div className="container">
        <div>
          <h1>Dit zijn je opties</h1>
          <p>Vink hier en daar iets leuks aan en vul je gegevens in.</p>
          <form>
            <span className="checkbox_group_label" style={{ textAlign: "left" }}>Maak een selectie</span>
            <Checkbox
              name="yes"
              for="yes_option"
              labelText="Wow ja deze wil ik!"
            />
            <Checkbox name="no" for="no_option" labelText="Deze optie stinkt" />

            <Inputfield
              placeholder="Vul hier iets leuks in"
              label="E-mailadres"
            />
            <Button
              classes="btn-primary fixed_width"
              iconRight="arrow-right"
              text="Kies deze button"
            />
            <Button
              classes="btn-secundary fixed_width"
              iconLeft="home"
              text="Of kies deze button"
            />
            <Button
              classes="btn-tertiary fixed_width"
              text="Ik weet het niet"
            />
            <Button
              classes="btn-textLink fixed_width"
              text="Ik heb geen idee wat ik hier doe"
            />
            <Button classes="btn-primary" text="Mand" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
