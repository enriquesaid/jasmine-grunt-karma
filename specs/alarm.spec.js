describe("App.Alarm", function() {
  beforeEach(function() {
    this.form = $("<form />");
    this.form.append("<input name=day />");
    this.form.append("<input name=month />");
    this.form.append("<input name=year />");
    this.form.append("<input name=hour />");
    this.form.append("<input name=minutes />");

    this.alarm = new window.App.Alarm(this.form);
  });

  describe("#alarmForm", function() {
    it("adicionando valores nos inputs do alarme", function() {
      this.alarm.alarmForm();

      expect(this.form.find("[name=day]").val()).toEqual(moment().format("DD"));
      expect(this.form.find("[name=month]").val()).toEqual(moment().format("MM"));
      expect(this.form.find("[name=year]").val()).toEqual(moment().format("YYYY"));
      expect(this.form.find("[name=hour]").val()).toEqual(moment().format("hh"));
      expect(this.form.find("[name=minutes]").val()).toEqual(moment().format("mm"));
    });
  });

  describe("#check", function() {
    it("executar alarme na hora definida", function() {
      spyOn(this.alarm, 'ring');

      this.alarm.day.val("15");
      this.alarm.month.val("04");
      this.alarm.year.val("2016");
      this.alarm.hour.val("00");
      this.alarm.minutes.val("00");

      this.alarm.submit({preventDefault: function() {}});
      this.alarm.check();

      expect(this.alarm.ring).toHaveBeenCalled();
    });
  });
});
