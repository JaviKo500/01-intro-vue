console.log('<--------------- JK App --------------->');
console.log(Vue);
const { createApp, ref } = Vue;

const app = createApp({
   template: '<h1>Hello Vue</h1><p>From app js</p>',
});

app.mount('#my-app');