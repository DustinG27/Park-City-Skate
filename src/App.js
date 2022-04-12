import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation'
import Authentication from './routes/authentication/authentication';
import './components/category-item/catergory-item';
import { Routes, Route } from 'react-router-dom';
import Shop from './shop/shop.component';



const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path ='shop' element={<Shop />} />
        <Route path ='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
  
}

export default App;
