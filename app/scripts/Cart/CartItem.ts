/**
 * Cart item Class
 */

/**
 * Constants with classes
 *
 */
const
  NODE_ITEM_BODY = '.js-product-item-body',
  ACTIVE_CLASS = 'active',
  NODE_REMOVE_BUTTON = '.js-product-remove',
  NODE_RESET_BUTTON = '.js-product-reset';

import {Counter} from '../Counter';

export class CartItem {
  count: number = 1;
  node: HTMLElement;
  nodeBody: HTMLElement;
  removed: Boolean = false;

  nodeCounter: Counter;

  removeButton: HTMLElement;
  resetButton: HTMLElement;

  constructor(node: HTMLElement) {
    this.node = node;
    /**
     * Find interaction parts of cart item
     */
    this.nodeBody = <HTMLElement>this.node.querySelector(NODE_ITEM_BODY);

    this.removeButton = <HTMLElement>this.node.querySelector(NODE_REMOVE_BUTTON)
    this.resetButton = <HTMLElement>this.node.querySelector(NODE_RESET_BUTTON)
    this.nodeCounter = new Counter(this.nodeBody);
    this.init();
  }

  /**
   * Makes cart item status removed
   */
  public onRemove = (): void => {
    this.removed = true;
    this.removeButton.classList.add('hidden');
    this.resetButton.parentElement.style.display = 'inline-block';
    this.nodeBody.classList.add('disabled');
  }

  /**
   * Reset cart item status
   */
  public onReset = (): void => {
    this.removed = false;
    this.removeButton.classList.remove('hidden');
    this.resetButton.parentElement.style.display = 'none';
    this.nodeBody.classList.remove('disabled');
  }

  /**
   * Add listeners for Increment and Decrement buttons on creating
   */
  private init = (): void => {
    this.removeButton.addEventListener('click', this.onRemove);
    this.resetButton.addEventListener('click', this.onReset);
  }
}