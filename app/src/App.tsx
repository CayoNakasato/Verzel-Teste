import { Header } from "./components/Header";
import { MainContainer } from "./components/MainContainer";
import { SearchBar } from "./components/Header/SearchBar";


function App() {
  return (
    <>
      <div>
        <Header />
        <SearchBar />
        <MainContainer/>
      </div>
    </>
  );
}

export default App;
