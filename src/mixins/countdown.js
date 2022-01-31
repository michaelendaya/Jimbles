let interval = null;
export default {
  data: () => ({
    date: null,
    now: null,
    diff: 0,
  }),
  watch: {
    now() {
      this.diff =this.now-  this.date;
      if (this.diff <= 0 || this.stop) {
        this.diff = 0;
        clearInterval(interval);
      }
    },
  },
  computed: {
    timer() {
      return {
        seconds: Math.trunc(this.diff) % 60 || 0,
        minutes: Math.trunc(this.diff / 60) % 60 || 0,
        hours: Math.trunc(this.diff / 60 / 60) % 24 || 0,
        days: Math.trunc(this.diff / 60 / 60 / 24) || 0,
      };
    },

    timerLabel() {
      const { seconds, minutes, hours, days } = this.timer;
      return {
        seconds: seconds > 1 ? "Seconds" : "Second",
        minutes: minutes > 1 ? "Minutes" : "Minute",
        hours: hours > 1 ? "Hours" : "Hour",
        days: days > 1 ? "Days" : "Day",
      };
    },
  },

  created() {
    const dateUnix = "1592229600"; //	Mon Jun 15 2020 14:00:00 GMT+0000
    this.date = dateUnix;
    this.now = Math.trunc(new Date().getTime() / 1000);
    interval = setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  destroyed() {
    clearInterval(interval);
  },
};
