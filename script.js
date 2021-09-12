const inp = document.querySelector('#page-number');

const btnGetImages = document.querySelector('.button__get-images');

btnGetImages.addEventListener('click', () => {
   getImages(inp.value)
      .then(onImagesReceived);
});


function onImagesReceived (data) {
   console.log(data);
   data.forEach(element => {
      const img = document.createElement('img');
      img.src = element.original;
      img.style.cssText = `width: 150px`;
      document.querySelector('.result__images').appendChild(img);
   });
}

const btnGetTasks = document.querySelector('.button__get-tasks');
btnGetTasks.addEventListener('click', () => {
   getTasks()
      .then(onTasksReceived);
});

function onTasksReceived(data) {
   data.forEach(task => {
      const li = document.createElement('li');
      // debugger;
      li.innerHTML = task.title;
      document.querySelector('.result__tasks').appendChild(li);
   });
}

createTask('Learn programming');
// createTask('Learn English');
// createTask('Learn English');
// createTask('Learn English');
