import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Delete from './Components/Delete';
import Home from './Components/Home';
import ProjectsCRUD from './Components/ProjectsCRUD';
import Update from './Components/Update';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Route exact path={`${process.env.PUBLIC_URL}/login`} component={ProjectsCRUD} />
        <Route path={`${process.env.PUBLIC_URL}/delete/:id`} component={Delete} />
        <Route path={`${process.env.PUBLIC_URL}/update/:id`} component={Update} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
