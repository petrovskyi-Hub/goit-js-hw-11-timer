

class CountdownTimer{
    constructor({selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;

        this.refs = {
            timer: document.querySelector(`${this.selector}`),
            days: document.querySelector(`${this.selector} span[data-value='days']`),
            hours: document.querySelector(`${this.selector} span[data-value='hours']`),
            mins: document.querySelector(`${this.selector} span[data-value='mins']`),
            secs: document.querySelector(`${this.selector} span[data-value='secs']`),
        };

        // this.init();
        this.start();
        
    }

    init() {
        const time = this.getTimeComponents(0);
        this.updateCountdownTimer(time);
    }

    start() {
        console.log('currentTime', new Date());
        console.log('targetDate', this.targetDate);

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const time = this.getTimeComponents(deltaTime);

            this.updateCountdownTimer(time);
            }, 1000);        
    }
    

    updateCountdownTimer({ days, hours, mins, secs }) {
        this.refs.days.textContent = `${days}`;
        this.refs.hours.textContent = `${hours}`;
        this.refs.mins.textContent = `${mins}`;
        this.refs.secs.textContent = `${secs}`; 
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }

  /*
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 29, 2020'),
});


