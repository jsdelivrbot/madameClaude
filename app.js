

fetch(`https://cdn.jsdelivr.net/gh/akabab/starwars-api@0.2.1/api/all.json`)
    .then(characters => characters.json())
    .then(characters =>{
      const char = characters.map(createCharacterElement).join('')
      contentContainer.innerHTML = char  
    })