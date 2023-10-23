let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      quote.innerText = `"${data.content}"`;
      author.innerText = data.author;
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
    });
});
