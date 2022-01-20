const app = new Vue({
    el: '#app',
    data: {
        arrayDischi: [],
    },
    created(){
        axios.get('http://localhost/php-ajax-dischi/backend.php')
        .then((response) => {
            // handle success
            this.arrayDischi = response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    },
  })