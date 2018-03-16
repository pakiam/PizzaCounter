/**
 * Constants
 *
 */
const
  NODE = '.js-product-counter',
  NODE_INC_BUTTON = '.js-product-inc',
  NODE_DEC_BUTTON = '.js-product-dec',
  NODE_COUNT = '.js-product-count';

/**
 * Counter Interface
 *
 */
interface CounterInterface {
  node: HTMLElement; // counter node in HTML
  decButton: HTMLElement; // decrement button
  incButton: HTMLElement; // increment button
  counter: HTMLElement; // HTML node with counter value
  count: number; // value of counter

  addQuantity(): void;
  minusQuantity(): void;
}

/**
 * Counter Class
 *
 */
export class Counter implements CounterInterface {
  node: HTMLElement;
  count: number = 1;
  decButton: HTMLElement;
  incButton: HTMLElement;
  counter: HTMLElement;

  constructor(item: Element) {
    this.node = <HTMLElement>item.querySelector(NODE);

    this.decButton = <HTMLElement>this.node.querySelector(NODE_DEC_BUTTON)
    this.incButton = <HTMLElement>this.node.querySelector(NODE_INC_BUTTON);
    this.counter = <HTMLElement>this.node.querySelector(NODE_COUNT);

    this.init();
  }


  private redraw = (): void => {

    this.counter.innerText = this.count.toString();
    if (this.count === 1){
      this.decButton.setAttribute('disabled', 'true');
    }else {
      this.decButton.removeAttribute('disabled');
    }
  }

  public addQuantity = (): void => {
    this.count = this.count + 1;
    this.redraw();
  }

  public minusQuantity = (): void => {
    if (this.count === 1){
      this.count = 1;
    }else {
      this.count = this.count - 1
    }
    this.redraw();
  }

  private init = (): void => {
    this.decButton.addEventListener('click', this.minusQuantity);
    this.incButton.addEventListener('click', this.addQuantity);

    this.redraw();
  }
}