import "./App.css";
import Author from "./components/author";
import Footer from "./components/footer";
import Getfreetool from "./components/getfreetool";
import Header from "./components/header";
import Navvbar from "./components/navbar";
import Pricing from "./components/pricing";
import Problems from "./components/problems";
import Solutions from "./components/solutions";
import Tableofcontents from "./components/tableofcontents";
import Tools from "./components/tools";
function App() {
  return (
    <div>
      <Header></Header>
      <Navvbar></Navvbar>
      <Tableofcontents></Tableofcontents>
      <Problems></Problems>
      <Solutions></Solutions>
      <Tools></Tools>
      <Pricing></Pricing>
      <Getfreetool></Getfreetool>
      <Author></Author>
      <Footer></Footer>
    </div>
  );
}

export default App;
