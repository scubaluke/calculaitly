// import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import New from './components/New';
import Home from './components/Home'

function App() {
  return (
   <Router>
      <Route path='/' component={Home} exact />
      <Route path='/new' component={New} />


   </Router>
  );
}

export default App;
