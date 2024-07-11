fetch('https://icanhazdadjoke.com/api')
        .then(data => data.json())
        .then(jokeData => {
            const jokeText = jokeData.attachments[0].text;
            const jokeelement = document.getElementById('jokelement');
            jokeelement.innerHTML = jokeText;
        })