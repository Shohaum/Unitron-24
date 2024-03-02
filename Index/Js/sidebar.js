const hamburger = document.querySelector('.hamburger');
const open = document.querySelector(".open")
const close = document.querySelector(".close")
const sidebar = document.querySelector(".sidebar");

const sidebarEvents = document.querySelector(".sidebar-events");
const sidebarDropDown = document.querySelector(".sidebar-drop-down");
const subMenu = document.querySelector(".subMenu");

hamburger.addEventListener("click", ()=>{
    sidebar.classList.toggle("showSidebar")
    open.classList.toggle("displayNone")
    close.classList.toggle("displayNone")
})


sidebarEvents.addEventListener("click", ()=>{
    if(!subMenu.classList.contains("showSubMenu")){
        subMenu.classList.add("showSubMenu")
        const height = sidebarDropDown.getBoundingClientRect().height;
        subMenu.style.height = `${height}px`
        subMenu.style.overflow = 'visible';
    }
    else{
        subMenu.classList.remove("showSubMenu")
        subMenu.style.height = `0px`
        subMenu.style.overflow = 'hidden';
    }
})


import gsap from 'https://cdn.skypack.dev/gsap@3.12.0';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger';

if (!CSS.supports('animation-timeline: scroll()') && matchMedia('(prefers-reduced-motion: no-preference)')) {
  gsap.registerPlugin(ScrollTrigger);

  const scrub = 0.5;
  const trigger = 'main';

  gsap.set('p > span', {
    '--progress': 0,
    backgroundPositionX: 'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
    color: 'transparent' });

  gsap.to('p > span', {
    '--progress': 1,
    scrollTrigger: {
      trigger,
      scrub,
      start: 'top top',
      end: 'top top-=75%' } });


  gsap.to('p > span', {
    color: 'white',
    scrollTrigger: {
      trigger,
      scrub,
      start: 'top top-=75%',
      end: 'bottom bottom' } });


}

if (!CSS.supports('animation-timeline: scroll()') && matchMedia('(prefers-reduced-motion: no-preference)')) {
  gsap.registerPlugin(ScrollTrigger);

  const scrub = 0.5;
  const trigger = 'main';

  gsap.set('p > span', {
    '--progress': 0,
    backgroundPositionX: 'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
    color: 'transparent' });

  gsap.to('p > span', {
    '--progress': 1,
    scrollTrigger: {
      trigger,
      scrub,
      start: 'top top',
      end: 'top top-=75%' } });


  gsap.to('p > span', {
    color: 'white',
    scrollTrigger: {
      trigger,
      scrub,
      start: 'top top-=75%',
      end: 'bottom bottom' } });


}






