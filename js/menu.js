document.querySelector('#menu-icon').addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('#mobile-menu').classList.toggle('open')
  document.querySelector('#body').classList.toggle('no-overflow')
})


document.querySelector('#cross').addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('#mobile-menu').classList.remove('open')
  document.querySelector('#body').classList.remove('no-overflow')
})