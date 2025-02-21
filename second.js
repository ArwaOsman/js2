const btn = document.querySelector('.btn');

btn.addEventListener('click', function(e) {
    e.preventDefault(); 
  
    document.querySelector('#my-form').style.background = 'red';
  
    document.body.classList.add('bg-dark');
   
    const itemsList = document.querySelector('.items');
    const lastItem = itemsList.lastElementChild;
   
    if (lastItem) {
        const helloHeading = document.createElement('h1');
        helloHeading.textContent = 'Hello';
        itemsList.replaceChild(helloHeading, lastItem);
    }
});