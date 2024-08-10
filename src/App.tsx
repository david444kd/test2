import './App.css'
import Header from './components/header'
import Navbar from './components/navbar'
import Pricing from './components/pricing'
import Problems from './components/problems'
import Solutions from './components/solutions'
import Tableofcontents from './components/tableofcontents'
import Tools from './components/tools'
function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Tableofcontents></Tableofcontents>
      <Problems></Problems>
      <Solutions></Solutions>
      <Tools></Tools>
      <Pricing></Pricing>
    </div>
  )
}

export default App
