import { Routes, Route} from "react-router-dom"


import Bmi from "./Components/Bmi"


function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Bmi/>} />
  
     </Routes>
    </>
  )
}

export default App
