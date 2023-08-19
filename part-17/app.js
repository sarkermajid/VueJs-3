var app = Vue.createApp({
  data() {
    return {
      firstName: "",
      lastName: "",
      fullName: ""
    };
  },

  // jokon je kno calculation kore new data property dekhanor drkar tokon amra computed use krbo
  computed: {
    // fullName() {
    //   return this.firstName + " " + this.lastName;
    // }
  },

  // jokon kno parameter pass kore kaj korar drkar pore tokon amra methods use krbo
  methods: {
    // fullName() {
    //   return this.firstName + " " + this.lastName;
    // }
  },

  // eta sadharonoto validation er jonno use kora hoy.
  watch: {
    // firstName(newValue) {
    //   this.fullName = newValue + " " + this.lastName;
    // },
    // lastName(newValue) {
    //   this.fullName = this.firstName + " " + newValue;
    // }
  }
});

app.mount("#app");