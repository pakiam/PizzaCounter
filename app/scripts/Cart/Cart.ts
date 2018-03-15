/**
 * Cart Class
 */

const CART_ITEM = '.js-product-item';

import {CartItem} from './CartItem';

export class Cart {
  items: NodeListOf<HTMLElement>
  node: HTMLElement;

  constructor(node: string) {
    this.node = <HTMLElement>document.querySelector(node);
    this.items = <NodeListOf<HTMLElement>>this.node.querySelectorAll(CART_ITEM);
  }

  public init = ():void => {
    this.items.forEach(element => {
      new CartItem(element);
    });
  }
}