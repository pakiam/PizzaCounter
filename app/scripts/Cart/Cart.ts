import {CartItem} from './CartItem';
const CART_ITEM = '.js-product-item';
/**
 * Cart Interface
 */
interface CartInterface {
  items: NodeListOf<HTMLElement>
  node: HTMLElement;
  init(): void;
}

/**
 * Cart Class
 */
export class Cart implements CartInterface {
  items: NodeListOf<HTMLElement>
  node: HTMLElement;

  constructor(node: string) {
    this.node = <HTMLElement>document.querySelector(node);
    this.items = <NodeListOf<HTMLElement>>this.node.querySelectorAll(CART_ITEM);
  }
  /**
   * Find cart items in Cart selector and create new CartItem
   */
  public init = ():void => {
    this.items.forEach(element => {
      new CartItem(element);
    });
  }
}