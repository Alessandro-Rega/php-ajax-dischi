const app = new Vue({
    el: '#app',
    data: {
        arrayDischi: [],
        searchDisco: "",

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
    computed:{
        dischiFiltro() {
            console.log(this.searchDisco);
            const arrayDischiFiltrato = this.arrayDischi.filter( (elm) => {
                return elm.genre.toLowerCase().includes(this.searchDisco.toLowerCase()); // true o false
            });
            return arrayDischiFiltrato;
        }
    }
  })