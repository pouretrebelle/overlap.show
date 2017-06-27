import { observable, action } from 'mobx';
import debounce from 'src/utils/debounce';

class UIStore {

  @observable windowWidth = 0;
  @observable windowHeight = 0;
  @observable windowMin = 0;
  @observable mouseX = 0;
  @observable mouseY = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      this.createListeners();
      this.updateDimensions();
    }
  }

  createListeners() {
    window.addEventListener('resize', this.onWindowResized);
    window.addEventListener('mousemove', this.onMouseMoved);
  }

  @action
  updateDimensions = () => {
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = undefined;
    }
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.windowMin = (this.windowWidth < this.windowHeight) ? this.windowWidth : this.windowHeight;
  }

  @action
  updateMousePosition = (e) => {
    this.mouseX = e.pageX;
    this.mouseY = e.pageY;
  }

  onWindowResized = debounce(() => {
    if (!this.resizeTimer) {
      this.resizeTimer = setTimeout(this.updateDimensions, 20);
    }
  }, 100)

  onMouseMoved = (e) => this.updateMousePosition(e);
}

export default UIStore;
