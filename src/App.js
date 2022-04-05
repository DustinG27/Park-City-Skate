import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation'
import Authentication from './routes/authentication/authentication';
import './components/category-item/catergory-item';
import { Routes, Route } from 'react-router-dom';



const Shop = () => {
  return <h1>Shop Page</h1>
}



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
