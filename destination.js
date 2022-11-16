const links = document.querySelectorAll('.link')
const content = document.querySelector('.dest-content')
const image = document.querySelector('.dest-image')
const list = document.querySelector('.list')
const mars = document.getElementById('mars')
const moon = document.getElementById('moon')
const europa = document.getElementById('europa')
const titan = document.getElementById('titan')

fetch('data.json')
  .then((data) => data.json())
  .then((dest) => {
    if (location.href.includes('destination.html')) {
      const html = `<span class='content-name'>${dest.destinations[0].name}</span> </br>
      <span class='content-des'>${dest.destinations[0].description}</span> </br>
      <div class='content-line'></div>
      <div class='content-info'> 
      <span class='title'>AVG. DISTANCE </span> 
      <span class='title'>EST. TRAVEL TIME </span> 
      <span class='value'>${dest.destinations[0].distance}</span>
    
      <span class='value'>${dest.destinations[0].travel}</span>
      </div>
      
      `
      const html2 = `<img src="${dest.destinations[0].images.png}">`
      image.innerHTML = html2
      content.innerHTML = html
    }
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'MOON') {
          const html = `<span class='content-name'>${dest.destinations[0].name}</span> </br>
          <span class='content-des'>${dest.destinations[0].description}</span> </br>
          <div class='content-line'></div>
          <div class='content-info'> 
          <span class='title'>AVG. DISTANCE </span> 
          <span class='title'>EST. TRAVEL TIME </span> 
          <span class='value'>${dest.destinations[0].distance}</span>
          
          <span class='value'>${dest.destinations[0].travel}</span>
          </div>
          
          `
          moon.classList.add('underline')
          titan.classList.remove('underline')
          mars.classList.remove('underline')
          europa.classList.remove('underline')
          const html2 = `<img src="${dest.destinations[0].images.png}">`
          image.innerHTML = html2
          content.innerHTML = html
        } else if (e.target.innerHTML == 'MARS') {
          const html = `<span class='content-name'>${dest.destinations[1].name}</span> </br>
          <span class='content-des'>${dest.destinations[1].description}</span> </br>
          <div class='content-line'></div>
          <div class='content-info'> 
          <span class='title'>AVG. DISTANCE </span> 
          <span class='title'>EST. TRAVEL TIME </span> 
          <span class='value'>${dest.destinations[1].distance}</span>
          <span class='value'>${dest.destinations[1].travel}</span>
          </div>
          
          `
          const html2 = `<img src="${dest.destinations[1].images.png}">`
          mars.classList.add('underline')
          europa.classList.remove('underline')
          moon.classList.remove('underline')
          titan.classList.remove('underline')
          image.innerHTML = html2
          content.innerHTML = html
        } else if (e.target.innerHTML == 'EUROPA') {
          const html = `<span class='content-name'>${dest.destinations[2].name}</span> </br>
          <span class='content-des'>${dest.destinations[2].description}</span> </br>
          <div class='content-line'></div>
          <div class='content-info'> 
          <span class='title'>AVG. DISTANCE </span> 
          <span class='title'>EST. TRAVEL TIME </span> 
          <span class='value'>${dest.destinations[2].distance}</span>
          <span class='value'>${dest.destinations[2].travel}</span>
          </div>
          `
          mars.classList.remove('underline')
          europa.classList.add('underline')
          moon.classList.remove('underline')
          titan.classList.remove('underline')
          const html2 = `<img src="${dest.destinations[2].images.png}">`
          image.innerHTML = html2
          content.innerHTML = html
        } else if (e.target.innerHTML == 'TITAN') {
          const html = `<span class='content-name'>${dest.destinations[3].name}</span> </br>
          <span class='content-des'>${dest.destinations[3].description}</span> </br>
          <div class='content-line'></div>
          <div class='content-info'> 
          <span class='title'>AVG. DISTANCE </span> 
          <span class='title'>EST. TRAVEL TIME </span> 
          <span class='value'>${dest.destinations[3].distance}</span>
          <span class='value'>${dest.destinations[3].travel}</span>
          </div>
          `
          mars.classList.remove('underline')
          europa.classList.remove('underline')
          moon.classList.remove('underline')
          titan.classList.add('underline')
          const html2 = `<img src="${dest.destinations[3].images.png}">`
          image.innerHTML = html2
          content.innerHTML = html
        }
      })
    })
  })
