export default class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHTML();
    const btnSetMinutes = document.querySelector('.timer__btn--setMinutes');

    this.el = {
      minutes: root.querySelector('.timer__part--minutes'),
      seconds: root.querySelector('.timer__part--seconds'),
      control: root.querySelector('.timer__btn--control'),
    };

    this.interval = null;
    this.remainingSeconds = 0;

    this.el.control.addEventListener('click', () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.stop();
      }
    });
    btnSetMinutes.addEventListener('click', () => {
      const minutes = document.querySelector('#minutes').value;
      if (minutes < 60) {
        this.stop();
        this.remainingSeconds = minutes * 60;
        this.updateInterfaceTime();
      }
    });
  }

  start() {
    if (this.remainingSeconds === 0) return;

    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.stop();
      }
    }, 1000);

    this.updateInterfaceButtonControls();
  }

  stop() {
    clearInterval(this.interval);

    this.interval = null;

    this.updateInterfaceButtonControls();
  }

  updateInterfaceButtonControls() {
    if (this.interval === null) {
      this.el.control.innerHTML = `Play`;
      this.el.control.classList.add('btn-success');
      this.el.control.classList.remove('btn-danger');
    } else {
      this.el.control.innerHTML = `Stop`;
      this.el.control.classList.add('btn-danger');
      this.el.control.classList.remove('btn-success');
    }
  }

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;

    this.el.minutes.textContent = minutes.toString().padStart(2, '0');
    this.el.seconds.textContent = seconds.toString().padStart(2, '0');
  }

  static getHTML() {
    return `<div class="row">
    <span class="timer__part timer__part--minutes">00</span>
    <span class="timer__part">:</span>
    <span class="timer__part timer__part--seconds">00</span>
  </div>
  <div class="row">
    <button type="button" class="btn btn-success btn-lg btn-block timer__btn--control">
      Play
    </button>
    <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#exampleModalCenter">
      Start
    </button>
  </div>`;
  }
}
