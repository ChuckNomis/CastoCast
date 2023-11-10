import Appcast from "./Components/TopActors";
import ActorsList from "./Components/TopActors";
import ActorSearch from "./Components/ActorSearch";
import HeaderPage from "./Components/Header_Page";

function App() {
  return (
    <div>
      <div>
        <HeaderPage />
      </div>
      <div>
        <Appcast />
      </div>
    </div>
  );
}

export default App;
