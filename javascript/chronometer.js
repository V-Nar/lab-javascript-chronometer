class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null,
    this.millisec = 0 
  }

  start(callback) {    
    this.intervalId = setInterval(() => {
      this.millisec ++;
      if (this.millisec === 100) {
        this.currentTime ++;
        this.millisec = 0;
      }
      if (callback) {
        callback();
      }
    }, 10);
  }

  getMinutes() {    
    return  Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliseconds() {
    return this.millisec;
  }


  // thx Flow for the shorthand
  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
    this.millisec = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${minutes}:${seconds}:${milliseconds}`};
  }
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
