
/* menu show and hidden*/

const navMenu = document.getElementById('nav-menu'),
      navToggle= document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle) {
	navToggle.addEventListener('click', ()=>{
	navMenu.classList.add('show-menu');	
	})
}
if(navClose)
{
	navClose.addEventListener('click', ()=>{
		navMenu.classList.remove('show-menu');
	})
}      

/*=========================Remove menu mobile======================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
	const navMenu = document.getElementById('nav-menu')
	//when we click on each nav link we remove the menu class

	navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== Accordion Skills ====================*/

const skillsContent = document.getElementsByClassName('skill__content'),
      skillHeader   = document.querySelectorAll('.skill__header')

function toggleSkill() 
{
	let itemClass = this.parentNode.className

	for(i = 0;  i < skillsContent.length; i++)
	{
		skillsContent[i].className = 'skill__content skills__close'
	}
	if(itemClass === 'skills__content skills__close'){
		this.parentNode.className = 'skill__content skills__open'
	}
}      

skillHeader.forEach((el) =>{
	el.addEventListener('click', toggleSkill)
})

/*======================== QUALIFICATION TABS=======================*/
 const tabs        = document.querySelectorAll('[data-target]'),
       tabContents = document.querySelectorAll('[data-content]')

 tabs.forEach(tab => {
 	tab.addEventListener('click', ()=>{
 		const target =document.querySelector(tab.dataset.target)

 		tabContents.forEach(tabContent =>{
 			tabContent.classList.remove('qualification__active')
 		})
 		target.classList.add('qualification__active')

 		tabs.forEach(tab =>{
 			tab.classList.remove('qualification__active')
 		})
 			tab.classList.add('qualification__active')

 	})
 }) 

 /*====================== Services Modal =========================*/  
 const modelViews = document.querySelectorAll('.services__modal'),
       modelBtns  = document.querySelectorAll('.services__button'),
       modelCloses = document.querySelectorAll('.service__modal-close')

 let modal = function(modalClick){
 	modelViews[modalClick].classList.add('active-modal');
 }      

 modelBtns.forEach((modalBtn, i) => {
 	modalBtn.addEventListener('click', () =>{
 		modal(i);
 	})
 })

 modelCloses.forEach((moalclose) => {
 	moalclose.addEventListener('click', () => {
 		modelViews.forEach((modalview) => {
 			modalview.classList.remove('active-modal')
 		})
 	})
 })

 /***************** Protofolio swiper***************/
 let swiperProtofolio = new Swiper(".protofolio__container", {
        cssMode: true,
        loop: true, 


        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable:true,
        },

      });

 /************************ teatamnial swiper *********************************/
  let swiperTeatamnial = new Swiper(".testamonail__container", {
        
        loop: true,
        grabCursor: true,
        spaceBetween:48, 

        

        pagination: {
          el: ".swiper-pagination",
          clickable:true,
          dynamicBullets: true,
        },
        breakpoints:{
        	568:{
        		slidesPreView:2,
        	}
        }

      });

  /********************* Scroll section active link*****************************/

  const section = document.querySelectorAll('section[id]')

  function scrollActive(){
  	const scrollY = window.pageYOffset

  	section.forEach( current =>{
  		const sectionHight = current.offsetHeight
  		const sectionTop   = current.offsetTop - 50;
  		sectionId          = current.getAttribute('id')

  		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHight){
  			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
  		} else{
  			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

  		} 
  	})
  }
  window.addEventListener('scroll', scrollActive)

  /********************* change background header *************************/
  function scrollHeader(){
  	const nav = document.getElementById('header')

  	if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
  }
  window.addEventListener('scroll', scrollHeader)

  /******************* Scroll Top**********************/
  function scrollUp(){
  	const scrollUp = document.getElementById('scroll-up');
  	if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

  /************************* Dark Light Thems *******************************/
  const themeButton = document.getElementById('theme-Button')
  const darkTheme   = 'dark-theme'
  const iconTheme   = 'uil-sun'

  // select topic if user selected
  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon  = localStorage.getItem('selected-icon')

  //option the current themes that the interface has
  const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark' : 'light'
  const getCurrentIcon  = () => themeButton.classList.contains(iconTheme)? 'uil-moon' : 'uil-sun'

  // we validate if user previously chose a topic

  if(selectedTheme){

  	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  	themeButton.classList[selectedIcon === 'uil-moon' ? 'add' :  'remove'](iconTheme)
  }
  //active / deactive the theme manually eith the button
  themeButton.addEventListener('click', () => {
  	//Add or remove the dark / icon theme
  	document.body.classList.toggle(darkTheme)
  	themeButton.classList.toggle(iconTheme)
  	// we save the theme and the current icon that the user chose
  	localStorage.setItem('selected-theme', getCurrentTheme())
  	localStorage.setItem('selected-icon', getCurrentIcon())

  })
