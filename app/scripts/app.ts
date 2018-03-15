console.log('I`m Typescript');
console.log('I`m Typescript');

import {Cart} from './Cart/Cart';
import {ProgressBar} from './ProgressBar/ProgressBar';


function ready() {
  const cart: Cart = new Cart('.b-pizza-list');
  cart.init();

  const prbars: NodeListOf<HTMLElement> = document.querySelectorAll('.js-progress-bar');
  prbars.forEach(item => {
    new ProgressBar(item);
  });
}

document.addEventListener('DOMContentLoaded', ready);