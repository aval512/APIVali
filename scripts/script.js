$(document).ready(function() {
	var e = $("div.setup-panel div a"),
		t = $(".setup-content"),
		a = $(".next-btn");
	t.hide(), e.click(function(a) {
		a.preventDefault();
		var i = $($(this).attr("href")),
			s = $(this);
		s.is("[disabled=disabled]") || (s.parent().prevAll().find("a").addClass("btn-primary"), s.parent().nextAll().find("a").removeClass("btn-primary"), e.removeClass("active").addClass("btn-default"), s.addClass("active"), t.hide(), i.show(), i.find("input:eq(0)").focus())
	}), a.click(function() {
		var e = $(this).closest(".setup-content"),
			t = e.attr("id"),
			a = $('div.setup-panel div a[href="#' + t + '"]').parent().next().children("a"),
			i = e.find("input"),
			s = !0;
		$(".form-group").removeClass("has-error");
		for (var n = 0; n < i.length; n++) i[n].validity.valid || (s = !1, $(i[n]).closest(".form-group").addClass("has-error"));
		s && a.removeAttr("disabled").trigger("click")
	}), $("div.setup-panel div a.btn-primary").trigger("click"), $(".form-group i.fa").on("click", function() {
		$(this).hasClass("fa-eye") ? ($(this).removeClass("fa-eye").addClass("fa-eye-slash"), $(this).parent().find("input").attr("type", "text")) : ($(this).removeClass("fa-eye-slash").addClass("fa-eye"), $(this).parent().find("input").attr("type", "password"))
	}), $("form input").on("input propertychange paste change", function(e) {
		$("form .setup-content").each(function() {
			var e = $(this),
				t = e.find("input"),
				a = e.find(".next-btn"),
				i = t.filter(function() {
					return "" === this.value
				});
			e.is("#step-3") ? $("#step-3 input:checkbox:checked").length > 0 ? a.prop("disabled", !1) : a.prop("disabled", !0) : 0 === i.length ? a.prop("disabled", !1) : a.prop("disabled", !0)
		})
	}), $(".datepicker").datepicker(), $(".img-check").click(function() {
		$(this).parent().toggleClass("check")
	})
});