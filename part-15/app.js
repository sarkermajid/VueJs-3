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

    computed: {
        experiencedSkills() {
          let es = this.skills.filter((item) => {
            return item.experience >= 10;
          });
    
          return es;
        }
      },


    methods:{
        removeSkill(i){
            this.skills.splice(i,1);
        },
        totalSkills(){
            return this.skills.length;
        } 
    }
})

app.mount('#app');