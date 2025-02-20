import "./App.css";
import Author from "./components/author";
import Footer from "./components/footer";
import Header from "./components/header";
import Navvbar from "./components/navbar";
import Pricing from "./components/pricing";
import ForWhom from "./components/problems";
import Modules from "./components/solutions";
import Description from "./components/tableofcontents";
import Materials from "./components/tools";
function App() {
  return (
    <div>
      <Header></Header>
      <Navvbar></Navvbar>
      <Description></Description>
      <ForWhom></ForWhom>
      <Modules></Modules>
      <Materials></Materials>
      <Pricing></Pricing>
      <Author></Author>
      <Footer></Footer>
    </div>
  );
}

export default App;
