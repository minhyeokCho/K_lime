! function(n, e, i, t) {
	"use strict";
	var s = "sliderRotate",
		a = "plugin_" + s,
		l = function(e, i) {
			this.plugin_element = n(e), this.itemClass, this.arrowClass, this.$item, this.$arrow, this.$sliderContainer, this.numItens, this.indexActive, this.displayItens, this.autoSlide, this.slider_timer, this.time, this.PREV_CLASS = "slider-rotate__item--prev", this.PREV2_CLASS = "slider-rotate__item--prev-2", this.NEXT_CLASS = "slider-rotate__item--next", this.NEXT2_CLASS = "slider-rotate__item--next-2", this.ACTIVE_CLASS = "slider-rotate__item--active", this.CLASS_DISPLAY_3 = "slider-rotate--3", this.CLASS_DISPLAY_5 = "slider-rotate--5", this.DISPLAY_3 = 3, this.DISPLAY_5 = 5, this.SLIDER_CONTAINER = "slider-rotate__container", this.options = {
				time: 4,
				autoSlide: !1,
				displayItems: 3,
				activate: function() {}
			}, this.init(i)
		};

	function d(e) {
		r(e);
		var i = 1e3 * Number(e.time);
		e.slider_timer = setTimeout(function() {
			o(e)
		}, i), e.$sliderContainer.unbind("mouseenter.slider").on("mouseenter.slider", function() {
			r(e)
		}), e.$sliderContainer.unbind("mouseleave.slider").on("mouseleave.slider", function() {
			d(e)
		})
	}

	function r(e) {
		clearTimeout(e.slider_timer)
	}

	function o(e) {
		S(e.indexActive == e.numItens - 1 ? 0 : e.indexActive + 1, e)
	}

	function S(i, t) {
		n(t.$item[i]).hasClass("gtag_bn_item_type1") && n(t.$item[i]).data();
		t.indexActive = i, t.plugin_element.find("." + t.ACTIVE_CLASS).removeClass(t.ACTIVE_CLASS), t.plugin_element.find("." + t.NEXT_CLASS).removeClass(t.NEXT_CLASS), t.plugin_element.find("." + t.PREV_CLASS).removeClass(t.PREV_CLASS), t.plugin_element.find("." + t.PREV2_CLASS).removeClass(t.PREV2_CLASS), t.plugin_element.find("." + t.NEXT2_CLASS).removeClass(t.NEXT2_CLASS), i == t.numItens - 1 && (t.$item.eq(0).addClass(t.NEXT_CLASS), t.displayItens == t.DISPLAY_5 && t.$item.eq(1).addClass(t.NEXT2_CLASS)), 0 == i && (t.$item.eq(t.numItens - 1).addClass(t.PREV_CLASS), t.displayItens == t.DISPLAY_5 && t.$item.eq(t.numItens - 2).addClass(t.PREV2_CLASS)), t.$item.each(function(e) {
			e == i && t.$item.eq(e).addClass(t.ACTIVE_CLASS), e == i + 1 && t.$item.eq(e).addClass(t.NEXT_CLASS), e == i - 1 && t.$item.eq(e).addClass(t.PREV_CLASS), t.displayItens == t.DISPLAY_5 && (e == i + 2 && t.$item.eq(e).addClass(t.NEXT2_CLASS), i == t.numItens - 2 && t.$item.eq(0).addClass(t.NEXT2_CLASS), i - 2 == -1 && t.$item.eq(t.numItens - 1).addClass(t.PREV2_CLASS), e == i - 2 && t.$item.eq(e).addClass(t.PREV2_CLASS)), t.autoSlide && d(t)
		})
	}
	l.prototype = {
		init: function(e) {
			var i, t, s;
			i = e, s = (t = this).options, n.extend(s, i), s.activate.call(t), t.displayItens = 3 == s.displayItems || 5 == s.displayItems ? s.displayItems : t.DISPLAY_3, t.itemClass = s.itemClass || "slider-rotate__item", t.arrowClass = s.arrowClass || "js-slider-rotate-arrow", t.$item = t.plugin_element.find("." + t.itemClass), t.$arrow = t.plugin_element.find("." + t.arrowClass), t.numItens = t.$item.length, t.indexActive = 0, t.$sliderContainer = n("." + t.SLIDER_CONTAINER), t.autoSlide = s.autoSlide, t.time = s.time, t.plugin_element.addClass(t.displayItens == t.DISPLAY_3 ? t.CLASS_DISPLAY_3 : t.CLASS_DISPLAY_5), S(t.indexActive, t), setTimeout(function() {
				t.$sliderContainer.css("visibility", "visible")
			}, 400), t.$item.on("click.rotate", function() {
				if (!n(this).hasClass(t.ACTIVE_CLASS)) return S(n(this).index(), t), !1;
				S(n(this).index(), t)
			}), t.$arrow.on("click.rotate", function() {
				var e, i = n(this).data("action");
				"next" == i ? o(t) : "prev" == i && S(0 == (e = t).indexActive ? e.numItens - 1 : e.indexActive - 1, e)
			}), t.autoSlide && d(t)
		},
		destroy: function() {
			this.plugin_element.unbind().removeData(), n("*", this.plugin_element).unbind().removeData(), this.$sliderContainer.unbind("mouseenter.slider"), this.$sliderContainer.unbind("mouseleave.slider"), r(this)
		}
	}, n.fn[s] = function(e) {
		var i = this.data(a);
		return i instanceof l ? void 0 !== e && i.init(e) : (i = new l(this, e), this.data(a, i)), i
	}
}(jQuery, window, document);