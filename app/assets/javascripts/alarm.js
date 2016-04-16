var App = window.App || {};

App.Alarm = function(el) {
  this.el = $(el);
  this.day = this.el.find("[name=day]"),
  this.month = this.el.find("[name=month]"),
  this.year = this.el.find("[name=year]"),
  this.hour = this.el.find("[name=hour]"),
  this.minutes = this.el.find("[name=minutes]");
  this.alarm = false;

  this.events();
};

App.Alarm.prototype = {
  events: function() {
    $(document).on("ready", this.alarmForm.bind(this));
    $(document).on("ready", this.start.bind(this));
    this.el.on("submit", this.submit.bind(this));
  },

  start: function() {
    window.setTimeout(function() {
      if(this.alarm) this.check();
      this.start();
    }.bind(this), 1500);
  },

  alarmForm: function() {
    this.day.val(moment().format("DD"));
    this.month.val(moment().format("MM"));
    this.year.val(moment().format("YYYY"));
    this.hour.val(moment().format("hh"));
    this.minutes.val(moment().format("mm"));
  },

  submit: function(e) {
    e.preventDefault();
    var time = this.day.val() + this.month.val() + this.year.val();
    this.alarm = moment(time, "DDMMYYYY").minutes(this.minutes.val()).hour(this.hour.val());
  },

  check: function() {
    if(this.alarm.fromNow().indexOf("ago") > -1) this.ring();
  },

  ring: function() {
    console.log("ring!");
  }
};
