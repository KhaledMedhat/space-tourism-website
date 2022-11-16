const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const points = document.querySelectorAll('.point')
const content = document.querySelector('.technology-content')
const photo = document.querySelector('.technology-photo')
fetch('data.json')
  .then((data) => data.json())
  .then((tec) => {
    console.log(tec.technology)
    if (location.href.includes('technology.html')) {
      const htmlImage = `
        <img src="${tec.technology[0].images.portrait}">
        `
      const html = `
      <p>THE TERMINOLOGY...</p>
            <span class='tec-name'>${tec.technology[0].name}</span> </br>
      <span class='tec-description'>${tec.technology[0].description}</span>  
      `
      first.style.backgroundColor = '#FFF'
      first.style.color = 'black'
      content.innerHTML = html
      photo.innerHTML = htmlImage
    }

    points.forEach((point) => {
      point.addEventListener('click', (e) => {
        if (e.target.id == 'first') {
          const htmlImage = `
                <img src="${tec.technology[0].images.portrait}">
                `
          const html = `
                <p>THE TERMINOLOGY...</p>
                        <span class='tec-name'>${tec.technology[0].name}</span> </br>
                <span class='tec-description'>${tec.technology[0].description}</span>  
                `
          first.style.backgroundColor = '#FFF'
          first.style.color = 'black'
          second.style.backgroundColor = 'transparent'
          second.style.color = '#FFF'
          third.style.backgroundColor = 'transparent'
          third.style.color = '#FFF'
          content.innerHTML = html
          photo.innerHTML = htmlImage
        } else if (e.target.id == 'second') {
          const htmlImage = `
                    <img src="${tec.technology[1].images.portrait}">
                    `
          const html = `
                <p>THE TERMINOLOGY...</p>
                        <span class='tec-name'>${tec.technology[1].name}</span> </br>
                <span class='tec-description'>${tec.technology[1].description}</span>  
                `
          second.style.backgroundColor = '#FFF'
          second.style.color = 'black'
          first.style.backgroundColor = 'transparent'
          first.style.color = '#FFF'
          third.style.backgroundColor = 'transparent'
          third.style.color = '#FFF'
          content.innerHTML = html
          photo.innerHTML = htmlImage
        } else if (e.target.id == 'third') {
          const htmlImage = `
                <img src="${tec.technology[2].images.portrait}">
                `
          const html = `
              <p>THE TERMINOLOGY...</p>
                    <span class='tec-name'>${tec.technology[2].name}</span> </br>
              <span class='tec-description'>${tec.technology[2].description}</span>  
              `
          third.style.backgroundColor = '#FFF'
          third.style.color = 'black'
          first.style.backgroundColor = 'transparent'
          first.style.color = '#FFF'
          second.style.backgroundColor = 'transparent'
          second.style.color = '#FFF'
          content.innerHTML = html
          photo.innerHTML = htmlImage
        }
      })
    })
  })
