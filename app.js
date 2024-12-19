const { createApp, ref } = Vue;

const app = createApp({
   template: `
      <h1>{{ message }}</h1>
      <p>Author: {{ author }}</p>
   `,
   setup(){
      console.log('<--------------- JK App --------------->');
      console.log('setup');

      const message = ref('Hello Vue');
      const author = ref('John');
      setTimeout(() => {
         message.value = 'Hello Vue options';
         author.value = 'John Wick';
      }, 2000);
      return { message, author, };
   }
});

app.mount('#my-app');