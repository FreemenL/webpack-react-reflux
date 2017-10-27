import Reflux from 'reflux'
import actions from './actions'
import Mixins from 'libs/CommonStore'


export default Reflux.createStore({
	mixins: [Mixins],
    //监听所有的actions
    listenables: [actions],
    //on开头的都是action触发后的回调函数
    onGetAll (options) {
        var _this = this;
        this.ajaxPost('/',options, function(data) {
            _this.trigger('index',data);
        });
    }
});