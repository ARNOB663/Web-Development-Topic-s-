var axios=require("axios");

var URL="https://restcountries.com/v3.1/all"
axios.get(URL).then(function (response) {
    let result=response.data;
    let status=response.status;
    console.log(result);

}).catch(function (error) {
    console.log(error);
})