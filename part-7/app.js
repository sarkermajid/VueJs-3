var app = Vue.createApp({
    data(){
        return {
            name: '',
        }
    },

    methods:{
        handleKeyUp(e){
            this.name = e.target.value;
        },

        handleFormSubmit(){
            console.log('submit form');
        },

        handleCardClick(e) {
            console.log(e);
            console.log("Card clicked!");
        },
      
        handleViewClick(e) {
            console.log(e);
            console.log("View clicked!");
        }
    }
})

app.mount('#app');