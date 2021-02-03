const inp = document.querySelector('#page-number');



const btn = document.querySelector('.button');

btn.addEventListener('click', () => {
   getImages(inp.value, onDataReceived);
});


function onDataReceived (data) {
   console.log(data);
   data.forEach(element => {
      const img = document.createElement('img');
      img.src = element.original;
      img.style.cssText = `width: 150px`;
      document.querySelector('.result').appendChild(img);
   });
}
