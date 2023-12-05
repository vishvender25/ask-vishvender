var url = 'https://real-time-web-search.p.rapidapi.com/search?q=&limit=40';

var searchTerm = document.getElementById('user-input');
var btn = document.getElementById('search');

btn.addEventListener('click' , getResults = async ()=>{
  searchValue = searchTerm.value
  url = `https://real-time-web-search.p.rapidapi.com/search?q=${searchValue}&limit=25`;
  
  const result = await fetch(url , {
    method : 'GET',
    headers: {
		'X-RapidAPI-Key': 'ee8a416730msh6f8369968a2ff0cp1950b9jsnd0fbc76db09a',
		'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
	}
  })
  const data_obtained = await result.json();
  
  const {data} = data_obtained;
  console.log(data);

  for(var i = 0 ; i<20 ; i++){
    var {title , snippet , url} = data[i];

    // var para_title = document.createElement('p');
    // para_title.innerText = `${title}`;
    
    var para_snippet = document.createElement('p');
    para_snippet.innerText = (snippet.length <=90) ? `${snippet}` : `${snippet.substring(0,90)}`;
    
    var para_url = document.createElement('a');
    para_url.setAttribute('href', `${url}`);
    para_url.innerText = `${title}`;
    
    var itemContainer = document.createElement('div');
    //  itemContainer.append(para_title);
    itemContainer.append(para_url);
    itemContainer.append(para_snippet);
    // itemContainer.append(para_url);

    document.getElementById('results').appendChild(itemContainer);

}

});

