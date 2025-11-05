let searchInput = document.getElementById('searchInput');
let searchResults = document.getElementById('searchResults');

function createappend(result) {
  let { link, title, description } = result;
  let result1 = document.createElement('div');
  result1.classList.add('result-item');

  let titleEl = document.createElement('a');
  titleEl.href = link;
  titleEl.target = '_blank';
  titleEl.textContent = title;
  titleEl.classList.add('result-title');
  result1.appendChild(titleEl);

  let titleBreakEl = document.createElement('br');
  result1.appendChild(titleBreakEl);

  let urlEl = document.createElement('a');
  urlEl.classList.add('result-url');
  urlEl.href = link;
  urlEl.target = '_blank';
  urlEl.textContent = link;
  result1.appendChild(urlEl);

  let linkBreakEl = document.createElement('br');
  result1.appendChild(linkBreakEl);

  let descriptionEl = document.createElement('p');
  descriptionEl.classList.add('link-description');
  descriptionEl.textContent = description;
  result1.appendChild(descriptionEl);

  searchResults.appendChild(result1);
}

function displayResults(Results) {
  searchResults.textContent = "";
  for (let result of Results ) {
    createappend(result);
  }
}
function appendwork(event) {
  if (event.key === 'Enter') {
    let searchInput1 = searchInput.value;
    console.log(searchInput1);
    let url = 'https://apis.ccbp.in/wiki-search?search=' + searchInput1;
    let options = {
      method: 'GET',
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { search_results } = jsonData;
        displayResults(search_results);
        console.log(jsonData);
      });
  }
}

searchInput.addEventListener('keydown', appendwork);
