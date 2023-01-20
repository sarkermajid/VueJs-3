var app = Vue.createApp({
    data(){
        return {
            skills: [
                { name: "HTML", experience: 5 },
                { name: "CSS", experience: 10 },
                { name: "JS", experience: 5 },
                { name: "Java", experience: 4 },
                { name: "php", experience: 15 },
                { name: "node js", experience: 15 },
                { name: "python", experience: 2 },
                { name: "go", experience: 1 }
              ]
        }
    },
    methods:{

    }
})

app.mount('#app');