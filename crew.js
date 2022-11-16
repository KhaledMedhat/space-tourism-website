const photo = document.querySelector('.crew-photo')
const content = document.querySelector('.crew-content')
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')
const points = document.querySelectorAll('.point')

fetch('data.json')
  .then((data) => data.json())
  .then((crew) => {
    console.log(crew.crew)
    if (location.href.includes('crew.html')) {
      const htmlImage = `
        <img src="${crew.crew[0].images.webp}">
        `
      const html = `
      <span class='crew-role'>${crew.crew[0].role}</span> </br>
      <span class='crew-name'>${crew.crew[0].name}</span> </br>
      <span class='crew-bio'>${crew.crew[0].bio}</span> 
      
      `
      first.style.opacity = 1
      content.innerHTML = html
      photo.innerHTML = htmlImage
    }
    points.forEach((point) => {
      point.addEventListener('click', (e) => {
        if (e.target.id == 'first') {
          const htmlImage = `
                  <img src="${crew.crew[0].images.webp}">
                  `
          const html = `
                <span class='crew-role'>${crew.crew[0].role}</span> </br>
                <span class='crew-name'>${crew.crew[0].name}</span> </br>
                <span class='crew-bio'>${crew.crew[0].bio}</span> 
                
                `
          first.style.opacity = 1
          second.style.opacity = 0.5
          third.style.opacity = 0.5
          fourth.style.opacity = 0.5
          content.innerHTML = html
          photo.innerHTML = htmlImage
        } else if (e.target.id == 'second') {
          const htmlImage = `
            <img class='image2' src="${crew.crew[1].images.webp}">
            `
          const html = `
          <span class='crew-role'>${crew.crew[1].role}</span> </br>
          <span class='crew-name'>${crew.crew[1].name}</span> </br>
          <span class='crew-bio'>${crew.crew[1].bio}</span> 
          
          `
          first.style.opacity = 0.5
          second.style.opacity = 1
          third.style.opacity = 0.5
          fourth.style.opacity = 0.5
          content.innerHTML = html
          photo.innerHTML = htmlImage
        } else if (e.target.id == 'third') {
          const htmlImage = `
              <img class='image3' src="${crew.crew[2].images.webp}">
              `
          const html = `
          <span class='crew-role'>${crew.crew[2].role}</span> </br>
          <span class='crew-name'>${crew.crew[2].name}</span> </br>
          <span class='crew-bio'>${crew.crew[2].bio}</span> 
          
          `
          first.style.opacity = 0.5
          second.style.opacity = 0.5
          third.style.opacity = 1
          fourth.style.opacity = 0.5
          content.innerHTML = html
          photo.innerHTML = htmlImage
        } else if (e.target.id == 'fourth') {
          const htmlImage = `
            <img class='image4' src="${crew.crew[3].images.webp}">
            `
          const html = `
          <span  class='crew-role'>${crew.crew[3].role}</span> </br>
          <span class='crew-name'>${crew.crew[3].name}</span> </br>
          <span class='crew-bio'>${crew.crew[3].bio}</span> 
          
          `
          first.style.opacity = 0.5
          second.style.opacity = 0.5
          third.style.opacity = 0.5
          fourth.style.opacity = 1
          content.innerHTML = html
          photo.innerHTML = htmlImage
        }
      })
    })
  })
