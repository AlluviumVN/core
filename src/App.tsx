
import React from 'react';
import logo from './logo.svg';
// const logo = require('../images/logo.svg');
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import useStyles from './styles'
import ErrorBoundary from './shared/error/error-boundary';
import AppRoutes from './routes';
import { hot } from 'react-hot-loader';

import { connect } from 'react-redux';
import Header from './shared/header/header';

let baseHref: any = document.querySelector('base');
 baseHref = baseHref.getAttribute('href');
 baseHref = baseHref.replace(/\/$/, '/') ;
// const classes = useStyles();

export class App extends React.Component {


  // toast("Custom style",{ 
  //   className: classes.SsToast
  // });

  render () {
    
    return (
      <BrowserRouter basename={baseHref}>
        <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast"/>
        <ErrorBoundary>
          <div>
            <Header />
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <AppRoutes/>
        </ErrorBoundary>
      </BrowserRouter>
    );
  }
  
}

const mapStateToProps = storeState => ({
});

const mapDispatchToProps = {  };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(hot(module)(App));

