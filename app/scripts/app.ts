import {Cart} from './Cart/Cart';
import {ProgressBar} from './ProgressBar/ProgressBar';


function ready() {
  // Create Cart
  const cart: Cart = new Cart('.b-pizza-list');
  cart.init();

  // Get all progress bars on page and create new instance
  const prbars: NodeListOf<HTMLElement> = document.querySelectorAll('.js-progress-bar');
  prbars.forEach(item => {
    new ProgressBar(item);
  });
}

document.addEventListener('DOMContentLoaded', ready);