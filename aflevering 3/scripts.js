document.getElementById('genreSelect').addEventListener('change', function() {
    const selectedGenre = this.value;
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let filteredData = data;
            if (selectedGenre !== 'alle') {
                filteredData = data.filter(item => item.genre === selectedGenre);
            }
            displayResults(filteredData);
        });
});

function displayResults(data) {
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = ''; 
    data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'result-item';


        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;

        const text = document.createElement('p');
        text.textContent = `${item.albumName} (${item.productionYear})`;


        itemDiv.appendChild(text);
        resultDiv.appendChild(itemDiv);
        itemDiv.appendChild(img);
    });
}


fetch('data.json')
    .then(response => response.json())
    .then(data => displayResults(data));
