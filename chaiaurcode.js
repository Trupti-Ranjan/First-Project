const button = document.querySelectorAll('.button');
const body = document.body;

button.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', (event) => {
    // console.log(event.target.id);
    const choise = event.target.id;
    switch (choise) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
    }
  });
});
