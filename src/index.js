import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Halodev from './pages/halodev'
// import { AnnouncementBar } from 'react-announcement-bar';
// import Docusaurus from './docusaurus.config';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Halodev />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
