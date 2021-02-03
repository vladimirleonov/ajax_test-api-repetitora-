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