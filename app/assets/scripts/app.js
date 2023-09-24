import '../styles/style.css';
import lazySizes from 'lazysizes';
import $ from 'jquery';
import MobileHeader from './modules/MobileHeader';
import RevealOnScroll from './modules/RevealOnScroll';
import ActiveLinks from './modules/ActiveLinks';
import SmoothScroll from './modules/SmoothScroll';

if (module.hot) {
  module.hot.accept();
}

let header = new MobileHeader();
new SmoothScroll();
new ActiveLinks();
new RevealOnScroll($('.feature-item'));
new RevealOnScroll($('.testimonial'));

console.log('Hello World123');
