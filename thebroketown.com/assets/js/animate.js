var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.3
 */
if ($(window).width() > 1024){

(function($) {
    var selectors = [];

    var check_binded = false;
    var check_lock = false;
    var defaults = {
        interval: 250,
        force_process: false
    }
    var $window = $(window);

    var $prior_appeared;

    function process() {
        check_lock = false;
        for (var index = 0; index < selectors.length; index++) {
            var $appeared = $(selectors[index]).filter(function() {
                return $(this).is(':appeared');
            });

            $appeared.trigger('appear', [$appeared]);

            if ($prior_appeared) {
                var $disappeared = $prior_appeared.not($appeared);
                $disappeared.trigger('disappear', [$disappeared]);
            }
            $prior_appeared = $appeared;
        }
    }

    // "appeared" custom filter
    $.expr[':']['appeared'] = function(element) {
        var $element = $(element);
        if (!$element.is(':visible')) {
            return false;
        }

        var window_left = $window.scrollLeft();
        var window_top = $window.scrollTop();
        var offset = $element.offset();
        var left = offset.left;
        var top = offset.top;

        if (top + $element.height() >= window_top &&
            top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
            left + $element.width() >= window_left &&
            left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
            return true;
        } else {
            return false;
        }
    }

    $.fn.extend({
        // watching for element's appearance in browser viewport
        appear: function(options) {
            var opts = $.extend({}, defaults, options || {});
            var selector = this.selector || this;
            if (!check_binded) {
                var on_check = function() {
                    if (check_lock) {
                        return;
                    }
                    check_lock = true;

                    setTimeout(process, opts.interval);
                };

                $(window).scroll(on_check).resize(on_check);
                check_binded = true;
            }

            if (opts.force_process) {
                setTimeout(process, opts.interval);
            }
            selectors.push(selector);
            return $(selector);
        }
    });

    $.extend({
        // force elements's appearance check
        force_appear: function() {
            if (check_binded) {
                process();
                return true;
            };
            return false;
        }
    });
})(jQuery);

var isMobile = false;

(function( $ ) {
    "use strict";

    $(function() {

        /* --- MOBILE DETECT --- */
        if (navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i)||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i)) {
            isMobile = true;
        }

        /* --- ADD NECESSARY CLASS --- */
        if (isMobile == true) {
            $('.animated').removeClass('animated');
            $('.op0').removeClass('op0');
        }

        /* --- ANIMATE CONTENT --- */
        if (isMobile == false) {
            $('*[data-animated]').addClass('animated');
        }

        function animated_contents() {
            $(".animated:appeared").each(function (i) {
                var $this    = $(this),
                    animated = $(this).data('animated');

                setTimeout(function () {
                    $this.addClass(animated);
                }, 100 * i);

            });
        }

        if (isMobile == false) {
            animated_contents();
            $(window).scroll(function () {
                animated_contents();
            });
        }
    });

}(jQuery));

}

}
/*
     FILE ARCHIVED ON 01:59:13 Jan 07, 2025 AND RETRIEVED FROM THE
     GAMATOGEL ON 13:59:08 Apr 22, 2025.
     JAVASCRIPT APPENDED BY GAMATOGEL, COPYRIGHT GAMATOGEL.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.725
  exclusion.robots: 0.042
  exclusion.robots.policy: 0.026
  esindex: 0.012
  cdx.remote: 8.949
  LoadShardBlock: 185.902 (3)
  PetaboxLoader3.datanode: 126.228 (4)
  PetaboxLoader3.resolve: 127.79 (2)
  load_resource: 83.516
*/