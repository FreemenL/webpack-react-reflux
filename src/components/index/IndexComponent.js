'use strict';
import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import Store from './store';
import Actions from './actions';
import history from 'router/history';

require('styles/index/Index.less');

class IndexComponent extends React.Component {
  test(){
  	history.replace('/test',{'id':1});
  }

  render() {
  	 return (
      <div className="index-component" onClick={()=>this.test()}>
        	我是主页啊
      </div>
    );
  }
}

ReactMixin.onClass(IndexComponent,Reflux.listenTo(Store, 'onChange'));

IndexComponent.displayName = 'IndexIndexComponent';
IndexComponent.defaultProps = {}

// Uncomment properties you need
// IndexComponent.propTypes = {};
// IndexComponent.defaultProps = {};

export default IndexComponent;
