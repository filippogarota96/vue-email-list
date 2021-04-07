var app = new Vue ({
  el: '#app',
  data: {
    email: []
  },
  mounted: function(){
    let self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
     .then(function (response) {
       self.email.push(response.data.response);
      
   });
 }
}
);
