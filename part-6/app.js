var app = Vue.createApp({
    data(){
        return{
            count: 0,
        }
    },
    methods:{
        increase(amount) {
            this.count = this.count + amount;
          },
          decrease(amount) {
            this.count = this.count - amount;
          },
    }
})

app.mount('#app');