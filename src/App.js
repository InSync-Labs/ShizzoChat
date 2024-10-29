import Room from './companents/Roombar/Room'
import Navi from './companents/navbar/Navi';
import { Route, Routes } from 'react-router-dom';
import PopForm from './companents/Roombar/PopForm';


function App() {
  return (
    <Routes>
      <Route path='/navi' element={<Navi />} />
      <Route path='/room' element={<Room />} />
      <Route path='/' element={"Hello World !!"} />
      <Route path='/pops' element={<PopForm/>}/>
    </Routes>
  );

}

export default App;
