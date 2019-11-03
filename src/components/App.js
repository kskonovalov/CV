import React from 'react';

//components
import Photo from './Photo';
import Links from './Links';
import FooterComponent from './FooterComponent';
import PagesRouter from './PagesRouter';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import NProgress from "nprogress";
import 'nprogress/nprogress.css'

//data
import PersonalData from '../data/PersonalData';

class App extends React.Component {

  componentWillMount() {
    NProgress.start();
  }

  componentDidMount() {
    NProgress.done();
  }

  componentWillUpdate() {
    NProgress.start();
  }

  componentDidUpdate() {
    NProgress.done();
  }

  render() {
    const {photo, name, surname} = {...PersonalData};
    const fullName = name + " " + surname;
    return (
      <div className="container">
        <div className="row">
          <div className="sidebar col s12 m3">
            <Photo image={photo} alt={fullName}/>
            <Links currentLocation={this.props.location.pathname} />
          </div>
          <div className="content-wrap col s12 m9">
            <TransitionGroup className="transition-group">
              <CSSTransition key={this.props.location.key} timeout={{enter: 300, exit: 300}}
                             classNames="fade">
                <div className="content">
                  <PagesRouter/>
                </div>
              </CSSTransition>
            </TransitionGroup>
            <FooterComponent/>
          </div>
        </div>
      </div>
    )
  };
}

export default App;
