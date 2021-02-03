function getImages(imagePage, successCallback) {

   $.ajax(`https://repetitora.net/api/JS/Images?page=${imagePage}&count=3`, {
   success: successCallback
   })
      
}