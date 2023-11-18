document.getElementById('joke-btn').addEventListener('click', function() {
    fetch('https://api.jokes.one/jod?category=animal')
    .then(response => {
        console.log(response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Log the data to see its structure
        const jokeData = data.contents.jokes[0].joke;
        document.getElementById('joke-title').textContent = jokeData.title;
        document.getElementById('joke-content').textContent = jokeData.text;
    })
    .catch(error => {
        console.error('Error fetching the joke:', error);
    });
});
