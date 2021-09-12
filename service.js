function getImages(imagePage) {
   const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${imagePage}&count=3`);
   return promise.then((response) => {
      return(response.data);
   });
}


// function getImages(imagePage) {

//    const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${imagePage}&count=3`);
//    return promise;   
// }



//путь для api todo
//widgetId- обязательный параметр(по документации у Димыча)
// https://repetitora.net/api/JS/Tasks?widgetId=12345 


function getTasks() {
   const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=21`);
   return promise.then(response => {
      return (response.data);
   });
}

function createTask(title) {
   const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
      widgetId: "21",
      title: title
   });
   return promise.then((response) => {
      return (response.data);
   });
}