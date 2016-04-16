var App = window.App || {};

App.Alarm = function(el) {
  this.el = el;
  this.events();
};

App.Alarm.prototype = {
  events: function() {}
};
