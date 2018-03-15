const
  NODE_PROGRESS_BAR_BODY = '.js-progress-bar-body',
  NODE_PROGRESS_BAR_LABEL = '.js-progress-bar-progress',
  LABEL_WIDTH = 38;

export class ProgressBar {
  body: HTMLElement;
  label: HTMLElement;
  progress: string = '0';

  constructor(node: HTMLElement) {
    this.body = <HTMLElement>node.querySelector(NODE_PROGRESS_BAR_BODY);
    this.label = <HTMLElement>node.querySelector(NODE_PROGRESS_BAR_LABEL);
    this.progress = <string>this.body.getAttribute('data-progress');
    this.redraw();
  }

  public setProgress = (value: number): void => {
    this.progress = value.toString();
    this.redraw();
  }

  private redraw = (): void => {
    this.body.setAttribute('data-progress', `${this.progress}`);
    this.body.setAttribute('aria-valuenow', `${this.progress}`);
    this.body.style.width = `${this.progress}%`;

    this.label.innerText = `${this.progress}%`;
    this.label.style.left = `calc(${this.progress}% - ${LABEL_WIDTH}px)`;
  }
}