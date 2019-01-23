import React, { Component  } from 'react';
import Home from './home';
import Media from './media';
import Contactus from './contactus/contactus';
import Schedules from './schedules/schedules';
import { Switch, BrowserRouter, Route, browserHistory} from 'react-router-dom';


export default class HeaderMenu extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
              <Switch>
                <Route path= "/"  exact component =  {Home} />
                <Route path= "/media"  exact component =  {Media} />
                <Route path= "/contactus"  component =  {Contactus} />
                <Route path= "/schedules"  component =  {Schedules} />
              </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
