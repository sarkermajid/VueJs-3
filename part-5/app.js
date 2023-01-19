var app = Vue.createApp({
    data(){
        return{
            count: 0,
        }
    },
    methods:{
        getCurrentTime(){
            let ct = new Date();
            return ct;
        },
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        },


    }
})

app.mount('#app');