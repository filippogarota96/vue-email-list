var app = new Vue ({
  el: '#app',
  data: {
    email: []
  },
  mounted: function(){
    let self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
     .then(function (response) {
      for (let i = 0; i < 10; i++) {
        self.email.push(response.data.response);
      }

     });
   }
 }
);
