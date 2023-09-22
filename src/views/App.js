import logo from './logo.svg';
import './App.scss';
import Todolist from './Todos/Todolist';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Nav/Nav';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './examples/Home';
import Mycomponent from './examples/My component';
import ListUser from './Users/Listuser';
import Detailuser from './Users/Detailuser';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Todos' element={<Todolist />} />
            <Route path='/About' element={<Mycomponent />} />
            <Route path='/ListUser' element={<ListUser />} />
            <Route path='/ListUser/:id' element={<Detailuser />} />
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}
export default App;
