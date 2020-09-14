require('./bootstrap');

window.Vue = require('vue');

Vue.component('timeline-component', require('./components/Timeline.vue').default);
Vue.component('post-tweet', require('./components/PostTweet.vue').default);

Vue.component('passport-clients', require('./components/passport/Clients.vue').default);

Vue.component('passport-authorized-clients', require('./components/passport/AuthorizedClients.vue').default);

Vue.component('passport-personal-access-tokens', require('./components/passport/PersonalAccessTokens.vue').default);
Vue.prototype.$http = axios
const app = new Vue({
    el: '#app',
});
