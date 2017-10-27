require('normalize.css');
require('styles/app.css');
import ReactDOM from 'react-dom';
import Routes from 'router/router';

const App = {
  run:function(){   
    ReactDOM.render(Routes,document.getElementById('app'))
  }
}
App.run();