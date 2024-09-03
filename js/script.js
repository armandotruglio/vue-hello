const createApp = Vue.createApp;

createApp({
    data() {
        return {
            message: 'Hello World!',
            img : 'img/vue.png'
        }
    }
}).mount('#app');