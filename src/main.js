import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp({
    apiKey: "AIzaSyDJDBovp3_xTGEWt5RpmOISrQ1bxfKvnq4",
    authDomain: "barartifact.firebaseapp.com",
    projectId: "barartifact",
    storageBucket: "barartifact.appspot.com",
    messagingSenderId: "206849062736",
    appId: "1:206849062736:web:e645b90a7b897aafec5e55",
    measurementId: "G-QQJMKYWWVB"
})

firebase.auth().useDeviceLanguage();

Vue.config.productionTip = false


let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
	app = new Vue({
  		router,
  		store,
  		proxy: 'http://backend.test/',
  		render: function (h) { return h(App) }
		}).$mount('#app')
	}
})
