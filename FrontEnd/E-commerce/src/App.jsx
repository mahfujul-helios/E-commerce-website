
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Products_details from './pages/Products_details'
import Products_list from './pages/Products_list'


function App() {



  return (
    <BrowserRouter>
 
    <Routes>
      <Route  path='/' element={<Products_list></Products_list>} ></Route>
      <Route path='pro/:id' element={<Products_details></Products_details>} ></Route>
      <Route path='*' element={<Error></Error>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
