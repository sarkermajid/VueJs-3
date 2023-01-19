var app = Vue.createApp({
    data(){
        return{
            profileInfo: {
                name: 'Sarker Majid',
                github: 'https://github.com/sarkermajid/',
            }
        }
    }
})

app.mount('#app');