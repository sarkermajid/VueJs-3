var app = Vue.createApp({
    data(){
        return {
            skills: [],
            newSkills : '',
        }
    },
    methods:{
        addNewSkill(){
            this.skills.push(this.newSkills);
            this.newSkills = '';
        },
        removeSkill(i){
            this.skills.splice(i, 1);
        }
    }
})

app.mount('#app');