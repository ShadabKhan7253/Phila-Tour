import '../styles/style.css';
import $ from 'jquery';
import MobileHeader from './modules/MobileHeader';
import RevealOnScroll from './modules/RevealOnScroll';
import ActiveLinks from './modules/ActiveLinks';

if (module.hot) {
  module.hot.accept();
}

let header = new MobileHeader();
new ActiveLinks();
new RevealOnScroll($('.feature-item'));
new RevealOnScroll($('.testimonial'));

console.log('Hello World123');
