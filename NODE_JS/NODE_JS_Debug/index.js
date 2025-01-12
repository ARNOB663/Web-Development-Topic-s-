var axios=require("axios");
axios.get().then(function (response) {
    let result=response.data;
    let status=response.status;
    console.log(result);

}).catch(function (error) {
    console.log(error);
})