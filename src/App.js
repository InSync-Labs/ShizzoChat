import Room from './companents/Roombar/Room'
import Navi from './companents/navbar/Navi';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import AddRoom from './companents/roomOperations/AddRoom'

function App() {
  return (
    <Routes>
      <Route path='/navi' element={<Navi/>} />
      <Route path='/room' element={<Room />} />
      <Route path='/' element={"Hello World !!"} />
    </Routes>
  );

}

export default App;
