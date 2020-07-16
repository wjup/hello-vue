// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

//设置路由守护
//在路由没有跳转之前 (before) 和已经跳转之后 (after) 分别执行一些动作 (action)
router.beforeEach((to, from, next) => {
  //检查这个跳转是否是要跳转到 param 组件
  if(to.path == '/test'){
      //如果'user' 对象还未赋值
      if(localStorage.getItem('user')==undefined){
          //提示输入用户名
          var user = prompt('please enter your username');
          //提示输入密码
          var pass = prompt('please enter your password');
          //检查用户输入的用户名密码是否和我们预设的一样
          if (user == 'username' && pass == 'password'){
            //赋值user对象
            localStorage.setItem('user', user);
            //跳转到对应的组件
            next();
          }else{//
            //如果用户名密码不正确则显示错误信息
            alert('Wrong username and password, you do not have permission to access that route');
            //返回并且不进行路由跳转
            return;
          }
      }
  }
  //如果要跳转的路径不是 param 组件，则不进行检查直接跳转
  next()
})

router.afterEach((to,from)=>{
  console.log('已跳转的路由：'+to.path)
})
