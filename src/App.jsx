import CookieClicker from "./components/CookieClicker";
import CatFacts from "./components/CatFacts";
import Users from "./components/Users";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <CookieClicker />

        <div className="row-container">
          <CatFacts />
          <Users />
        </div>
      </div>
    </>
  );
}

export default App;
