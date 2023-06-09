"use strict"

const body = document.querySelector('.body')

const menuMobile = document.querySelector('.menu-mobile')
const servicesWindow = document.querySelector('.services-window')
const servicesFlexColumn = document.querySelector('.services.flex-column')
const background = document.querySelector('.background')

const openCloseServices = document.querySelector('.nav-link-mobile')
const openServices = document.querySelector('.nav-mobile-button-open')
const closeServices = document.querySelector('.nav-mobile-button-close')

const hideElement = (element) => {
  if(element.classList.contains('hidden')) {
    return
  }
  element.classList.add('hidden')
}

const showElement = (element) => {
  if(!element.classList.contains('hidden')) {
    return
  }
  element.classList.remove('hidden')
}

const toggleElement = (element) => {
  if(element.classList.contains('hidden')) {
    showElement(element)
  } else {
    hideElement(element)
  }
}

const toggleServicesMenu = function () {
  toggleElement(servicesFlexColumn)
  toggleElement(background)
  // if (!openServices.classList.contains('hidden')) {
  //   openServices.classList.add('hidden')
  //   closeServices.classList.remove('hidden')
  //   services.classList.remove('hidden')
  //   background.classList.remove('hidden')
  // } else if (openServices.classList.contains('hidden')) {
  //   openServices.classList.remove('hidden')
  //   closeServices.classList.add('hidden')
  //   services.classList.add('hidden')
  //   background.classList.add('hidden')
  // }
}

const toggleMenuMobile = () => {
  if (!openServices.classList.contains('hidden')) {
    openServices.classList.add('hidden')
    closeServices.classList.remove('hidden')
    menuMobile.classList.remove('hidden')
    background.classList.remove('hidden')
  } else if (openServices.classList.contains('hidden')) {
    openServices.classList.remove('hidden')
    closeServices.classList.add('hidden')
    menuMobile.classList.add('hidden')
    background.classList.add('hidden')
  }
}

openCloseServices.addEventListener('click', (e) => {
  toggleMenuMobile()
})

servicesWindow.addEventListener('click', (e) => {
  toggleServicesMenu()
})

// openCloseServices.addEventListener('click', (e) => {
//   if (!openServices.classList.contains('hidden')) {
//     openServices.classList.add('hidden')
//     closeServices.classList.remove('hidden')
//     services.classList.remove('hidden')
//     background.classList.remove('hidden')
//   } else if (openServices.classList.contains('hidden')) {
//     openServices.classList.remove('hidden')
//     closeServices.classList.add('hidden')
//     services.classList.add('hidden')
//     background.classList.add('hidden')
//   }
// })

background.addEventListener('click', (e) => {
  e.preventDefault()
  if (!services.classList.contains("hidden")) {
    openServices.classList.remove('hidden')
    closeServices.classList.add('hidden')
    menuMobile.classList.add('hidden')
    background.classList.add('hidden')
  }
})