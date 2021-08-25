(function ($) { // this is a wrapper for Drupal to swap $ functions for jQuery safe-execution
	$(document).ready(function() {
	  $("#myselectbox").sb();
	  
	  $("input[type=text]").focus(function() {
		if( this.value == this.defaultValue ) {
			this.value = "";
		}
		}).blur(function() {
			if( !this.value.length ) {
				this.value = this.defaultValue;
			}
		});
		
		
		//close button in mainMenu
		$('#header ul.menu li ul li.close a').live('click',
			function() {
			$('#header').animate({
				height: '47px'
			}, "fast", function() {
				$('#header ul.menu ul:visible').hide()
			});	
			$('#header ul.menu li a').removeClass('current');		
		});
		
		//horizontal carousel
		$('.view-id-slider_horizontal_carousel .views-slideshow-cycle-main-frame-row-item').click(
			function(){
			$('.view-id-slider_horizontal_carousel .views-slideshow-cycle-main-frame-row-item').removeClass('active');
			$('.view-id-slider_horizontal_carousel .views-slideshow-cycle-main-frame-row-item').removeClass('views-row-first');

			$(this).addClass('active');
			var elementNumber = $(this).attr('class').replace(/[^\d.]/g, "");
			
			var parentNumber = $(this).parent().attr('class').replace(/[^\d.]/g, "");
			
			parentNumber = parseInt(parentNumber);
			elementNumber = parseInt(elementNumber);
			
			if(parentNumber == 2)
				elementNumber+=4;
			else
				elementNumber+=1;
				
			$('.view-id-slider_horizontal_carousel .views-slideshow-controls-bottom .views-slideshow-pager-field-item:visible').fadeOut('1500');
			$('.view-id-slider_horizontal_carousel .views-slideshow-controls-bottom .views-slideshow-pager-field-item[id*="1_'+(elementNumber-1)+'"]').fadeIn('1500');
			$('.view-id-slider_horizontal_carousel.columns9 .views-slideshow-controls-bottom .views-slideshow-pager-field-item[id*="2_'+(elementNumber-1)+'"]').fadeIn('1500');
			//$('.view-id-slider_horizontal_carousel .views-slideshow-controls-bottom .views-slideshow-pager-field-item[id*="'+(elementNumber-1)+'"]').fadeIn('1500');	
		});
		
		
		
		//hover state for phase 2 part 2 menu
		//$('#header ul.menu li:not(:first)').hover(function(){
		//	$(this).children('a').toggleClass('current');
		//});
		
		//this is menu itteration 1 from phase 2 vignette, disabled
		/*
		$('#header ul.menu li:not(:first) a').live('click',								
			function() {						
				if($('#header').height()<205) {		
					$('div#header').animate({
							height: '205px'
					}, "fast");
					$(this).addClass('current');
					$(this).next().fadeIn('fast').find('ul').fadeIn('fast');
				} else if($(this).hasClass('current')) {
					$('div#header').animate({
							height: '47px'
					}, "fast");
					$(this).removeClass('current');
					$(this).next().fadeOut('fast');
				} else {
					$(this).addClass('current');
					$(this).parent().siblings(':not(:first:)').children().removeClass('current');
					$(this).parent().siblings(':not(:first:)').children('ul').fadeOut('fast');
					$(this).next().fadeIn('fast').find('ul').fadeIn('fast');
				}
							
				return false;
			}
		);
		*/
		
	});
})(jQuery);;
/**
 * Featured Horizontal Slideshow helper.
 */
Drupal.behaviors.featured_horizontal_ss = function(context) {
  $('.view-id-featured_horizontal_carousel .views-slideshow-cycle-main-frame-row-item').click(
		function(){
		$('.view-id-featured_horizontal_carousel .views-slideshow-cycle-main-frame-row-item').removeClass('active');
		$('.view-id-featured_horizontal_carousel .views-slideshow-cycle-main-frame-row-item').removeClass('views-row-first');
		
		$(this).addClass('active');
		var elementNumber = $(this).attr('class').replace(/[^\d.]/g, "");
		
		var parentNumber = $(this).parent().attr('class').replace(/[^\d.]/g, "");
		
		parentNumber = parseInt(parentNumber);
		elementNumber = parseInt(elementNumber);
		
		if(parentNumber == 2)
			elementNumber+=4;
		else
			elementNumber+=1;
			
		$('.view-id-featured_horizontal_carousel .views-slideshow-controls-bottom .views-slideshow-pager-field-item:visible').fadeOut('1500');
		$('.view-id-featured_horizontal_carousel .views-slideshow-controls-bottom .views-slideshow-pager-field-item[id*="1_'+(elementNumber-1)+'"]').fadeIn('1500');
		
	});
};
/*
    jQuery-SelectBox
    
    Traditional select elements are very difficult to style by themselves, 
    but they are also very usable and feature rich. This plugin attempts to 
    recreate all select box functionality and appearance while adding 
    animation and sty lability.
    
    This product includes software developed 
    by RevSystems, Inc (http://www.revsystems.com/) and its contributors
    
    Please see the accompanying LICENSE.txt for licensing information.
*/

(function( $, window, undefined ) {
    // utility functions
    $.fn.borderWidth = function() { return $(this).outerWidth() - $(this).innerWidth(); };
    $.fn.paddingWidth = function() { return $(this).innerWidth() - $(this).width(); };
    $.fn.extraWidth = function() { return $(this).outerWidth(true) - $(this).width(); };
    $.fn.offsetFrom = function( e ) {
        var $e = $(e);
        return {
            left: $(this).offset().left - $e.offset().left,
            top: $(this).offset().top - $e.offset().top
        };
    };
    $.fn.maxWidth = function() {
        var max = 0;
        $(this).each(function() {
            if($(this).width() > max) {
              max = $(this).width();
            }
        });
        return max;
    };
    $.fn.triggerAll = function(event, params) {
      return $(this).each(function() {
        $(this).triggerHandler(event, params);
      });
    };
    var aps = Array.prototype.slice,
        randInt = function() {
            return Math.floor(Math.random() * 999999999);
        };
    
    // jQuery-Proto
    $.proto = function() {
        var name = arguments[0],    // The name of the jQuery function that will be called
            clazz = arguments[1],   // A reference to the class that you are associating
            klazz = clazz,          // A version of clazz with a delayed constructor
            extOpt = {},            // used to extend clazz with a variable name for the init function
            undefined;              // safety net
        
        opts = $.extend({
            elem: "elem",           // the property name on the object that will be set to the current jQuery context
            access: "access",       // the name of the access function to be set on the object
            init: "init",           // the name of the init function to be set on the object
            instantAccess: false    // when true, treat all args as access args (ignore constructor args) and allow construct/function call at the same time
        }, arguments[2]);
        
        if(clazz._super) {
            extOpt[opts.init] = function(){};
            klazz = clazz.extend(extOpt);
        }
        
        $.fn[name] = function() {
            var result, args = arguments;
                
            $(this).each(function() {
                var $e = $(this),
                    obj = $e.data(name),
                    isNew = !obj;
                
                // if the object is not defined for this element, then construct
                if(isNew) {
                    
                    // create the new object and restore init if necessary
                    obj = new klazz();
                    if(clazz._super) {
                      obj[opts.init] = clazz.prototype.init;
                    }
                    
                    // set the elem property and initialize the object
                    obj[opts.elem] = $e[0];
                    if(obj[opts.init]) {
                        obj[opts.init].apply(obj, opts.instantAccess ? [] : aps.call(args, 0));
                    }
                    
                    // associate it with the element
                    $e.data(name, obj);
                    
                }
                
                // if it is defined or we allow instance access, then access
                if(!isNew || opts.instantAccess) {
                  
                    // call the access function if it exists (allows lazy loading)
                    if(obj[opts.access]) {
                        obj[opts.access].apply(obj, aps.call(args, 0));
                    }
                    
                    // do something with the object
                    if(args.length > 0) {
                    
                        if($.isFunction(obj[args[0]])) {
                        
                            // use the method access interface
                            result = obj[args[0]].apply(obj, aps.call(args, 1));
                            
                        } else if(args.length === 1) {
                          
                            // just retrieve the property (leverage deep access with getObject if we can)
                            if($.getObject) {
                              result = $.getObject(args[0], obj);
                            } else {
                              result = obj[args[0]];
                            }
                            
                        } else {
                          
                            // set the property (leverage deep access with setObject if we can)
                            if($.setObject) {
                              $.setObject(args[0], args[1], obj);
                            } else {
                              obj[args[0]] = args[1];
                            }
                            
                        }
                        
                    } else if(result === undefined) {
                    
                        // return the first object if there are no args
                        result = $e.data(name);
                        
                    }
                }
            });
            
            // chain if no results were returned from the clazz's method (it's a setter)
            if(result === undefined) {
              return $(this);
            }
            
            // return the first result if not chaining
            return result;
        };
    };
    
    var falseFunc = function() {
            return false;
        },
        SelectBox = function() {
        
        var self = this,
            o = {},
            $orig = null,
            $label = null,
            $sb = null,
            $display = null,
            $dd = null,
            $items = null,
            searchTerm = "",
            cstTimeout = null,
            delayReloadTimeout = null,
            resizeTimeout = null,
            
            // functions
            loadSB,
            createOption,
            focusOrig,
            blurOrig,
            destroySB,
            reloadSB,
            delayReloadSB,
            openSB,
            centerOnSelected,
            closeSB,
            positionSB,
            positionSBIfOpen,
            delayPositionSB,
            clickSB,
            clickSBItem,
            keyupSB,
            keydownSB,
            focusSB,
            blurSB,
            addHoverState,
            removeHoverState,
            addActiveState,
            removeActiveState,
            getDDCtx,
            getSelected,
            getEnabled,
            selectItem,
            clearSearchTerm,
            findMatchingItem,
            selectMatchingItem,
            selectNextItemStartsWith,
            closeAll,
            closeAllButMe,
            closeAndUnbind,
            blurAllButMe,
            stopPageHotkeys,
            flickerDisplay,
            unbind;
        
        loadSB = function() {
            
            // create the new sb
            $sb = $("<div class='sb " + o.selectboxClass + " " + $orig.attr("class") + "' id='sb" + randInt() + "'></div>")
                .attr("role", "listbox")
                .attr("aria-has-popup", "true")
                .attr("aria-labelledby", $label.attr("id") ? $label.attr("id") : "");
            $("body").append($sb);
            
            // generate the display markup
            var displayMarkup = $orig.children().size() > 0
                ? o.displayFormat.call($orig.find("option:selected")[0], 0, 0)
                : "&nbsp;";
            $display = $("<div class='display " + $orig.attr("class") + "' id='sbd" + randInt() + "'></div>")
                .append($("<div class='text'></div>").append(displayMarkup))
                .append(o.arrowMarkup);
            $sb.append($display);
            
            // generate the drop down markup
            $dd = $("<ul class='" + o.selectboxClass + " items " + $orig.attr("class") + "' role='menu' id='sbdd" + randInt() + "'></ul>")
                .attr("aria-hidden", "true");
            $sb.append($dd)
                .attr("aria-owns", $dd.attr("id"));
            if($orig.children().size() === 0) {
                $dd.append(createOption().addClass("selected"));
            } else {
                $orig.children().each(function( i ) {
                    var $opt, $og, $ogItem, $ogList;
                    if($(this).is("opt group")) {
                        $og = $(this);
                        $ogItem = $("<li class='optgroup'>" + o.optgroupFormat.call($og[0], i+1) + "</li>")
                            .addClass($og.is(":disabled") ? "disabled" : "")
                            .attr("aria-disabled", $og.is(":disabled") ? "true" : "");
                        $ogList = $("<ul class='items'></ul>");
                        $ogItem.append($ogList);
                        $dd.append($ogItem);
                        $og.children("option").each(function() {
                            $opt = createOption($(this), i)
                                .addClass($og.is(":disabled") ? "disabled" : "")
                                .attr("aria-disabled", $og.is(":disabled") ? "true" : "");
                            $ogList.append($opt);
                        });
                    } else {
                        $dd.append(createOption($(this), i));
                    }
                });
            }
            
            // cache all sb items
            $items = $dd.find("li").not(".optgroup");
            
            // for accessibility/styling
            $sb.attr("aria-active-descendant", $items.filter(".selected").attr("id"));
            $dd.children(":first").addClass("first");
            $dd.children(":last").addClass("last");
            
            // modify width based on fixedWidth/maxWidth options
            if(!o.fixedWidth) {
                var largestWidth = $dd.find(".text, .optgroup").maxWidth() + $display.extraWidth() + 1;
                $sb.width(o.maxWidth ? Math.min(o.maxWidth, largestWidth) : largestWidth);
            } else if(o.maxWidth && $sb.width() > o.maxWidth) {
                $sb.width(o.maxWidth);
            }
            
            // place the new markup in its semantic location (hide/show fixes positioning bugs)
            $orig.before($sb).addClass("has_sb").hide().show();
            
            // these two lines fix a div/span display bug on load in ie7
            positionSB();
            flickerDisplay();
            
            // hide the dropdown now that it's initialized
            $dd.hide();
            
            // bind events
            if(!$orig.is(":disabled")) {
                $orig
                    .bind("blur.sb", blurOrig)
                    .bind("focus.sb", focusOrig);
                $display
                    .mouseup(addActiveState)
                    .mouseup(clickSB)
                    .click(falseFunc)
                    .focus(focusSB)
                    .blur(blurSB)
                    .hover(addHoverState, removeHoverState);
                getEnabled()
                    .click(clickSBItem)
                    .hover(addHoverState, removeHoverState);
                $dd.find(".optgroup")
                    .hover(addHoverState, removeHoverState)
                    .click(falseFunc);
                $items.filter(".disabled")
                    .click(falseFunc);
                if(!$.browser.msie || $.browser.version >= 9) {
                    $(window).resize($.throttle ? $.throttle(100, positionSBIfOpen) : delayPositionSB);
                }
            } else {
                $sb.addClass("disabled").attr("aria-disabled");
                $display.click(function( e ) { e.preventDefault(); });
            }
            
            // bind custom events
            $sb.bind("close.sb", closeSB).bind("destroy.sb", destroySB);
            $orig.bind("reload.sb", reloadSB);
            if($.fn.tie && o.useTie) {
                $orig.bind("domupdate.sb", delayReloadSB);
            }
        };
        
        delayPositionSB = function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(positionSBIfOpen, 50);
        };
        
        positionSBIfOpen = function() {
            if($sb.is(".open")) {
                positionSB();
                openSB(true);
            }
        }
        
        // create new markup from an <option>
        createOption = function( $option, index ) {
            if(!$option) { 
                $option = $("<option value=''>&nbsp;</option>");
                index = 0;
            }
            var $li = $("<li id='sbo" + randInt() + "'></li>")
                    .attr("role", "option")
                    .data("orig", $option[0])
                    .data("value", $option ? $option.attr("value") : "")
                    .addClass($option.is(":selected") ? "selected" : "")
                    .addClass($option.is(":disabled") ? "disabled" : "")
                    .attr("aria-disabled", $option.is(":disabled") ? "true" : ""),
                $inner = $("<div class='item'></div>"),
                $text = $("<div class='text'></div>")
                    .html(o.optionFormat.call($option[0], 0, index + 1));
            return $li.append($inner.append($text));
        };
        
        // causes focus if original is focused
        focusOrig = function() {
            blurAllButMe();
            $display.triggerHandler("focus");
        };
        
        // loses focus if original is blurred
        blurOrig = function() {
            if(!$sb.is(".open")) {
                $display.triggerHandler("blur");
            }
        };
        
        // unbind and remove
        destroySB = function( internal ) {
            $sb.remove();
            $orig
                .unbind(".sb")
                .removeClass("has_sb");
            $(window).unbind("resize", delayPositionSB);
            if(!internal) {
                $orig.removeData("sb");
            }
        };
        
        // destroy then load, maintaining open/focused state if applicable
        reloadSB = function() {
            var isOpen = $sb.is(".open"),
                isFocused = $display.is(".focused");
            closeSB(true);
            destroySB(true);
            self.init(o);
            if(isOpen) {
                $orig.focus();
                openSB(true);
            } else if(isFocused) {
                $orig.focus();
            }
        };
        
        // debunking when useTie === true
        delayReloadSB = function() {
            clearTimeout(delayReloadTimeout);
            delayReloadTimeout = setTimeout(reloadSB, 30);
        };
        
        // when the user clicks outside the sb
        closeAndUnbind = function() {
            $sb.removeClass("focused");
            closeSB();
            unbind();
        };
        
        unbind = function() {
          $(document)
              .unbind("click", closeAndUnbind)
              .unbind("keyup", keyupSB)
              .unbind("keypress", stopPageHotkeys)
              .unbind("keydown", stopPageHotkeys)
              .unbind("keydown", keydownSB);
        };
        
        // trigger all sbs to close
        closeAll = function() {
            $(".sb.open." + o.selectboxClass).triggerAll("close");
        };
        
        // trigger all sbs to blur
        blurAllButMe = function() {
            $(".sb.focused." + o.selectboxClass).not($sb[0]).find(".display").blur();
        };
        
        // to prevent multiple selects open at once
        closeAllButMe = function() {
            $(".sb.open." + o.selectboxClass).not($sb[0]).triggerAll("close");
        };
        
        // hide and reset dropdown markup
        closeSB = function( instantClose ) {
            if($sb.is(".open")) {
                $display.blur();
                $items.removeClass("hover");
                unbind();
                $dd.attr("aria-hidden", "true");
                if(instantClose === true) {
                  $dd.hide();
                  $sb.removeClass("open");
                  $sb.append($dd);
                } else {
                    $dd.fadeOut(o.animDuration, function() {
                        $sb.removeClass("open");
                        $sb.append($dd);
                    });
                }
            }
        };
        
        // since the context can change, we should get it dynamically
        getDDCtx = function() {
            var $ddCtx = null;
            if(o.ddCtx === "self") {
                $ddCtx = $sb;
            } else if($.isFunction(o.ddCtx)) {
                $ddCtx = $(o.ddCtx.call($orig[0]));
            } else {
                $ddCtx = $(o.ddCtx);
            }
            return $ddCtx;
        };
        
        // DRY
        getSelected = function() {
          return $items.filter(".selected");
        };
        
        // DRY
        getEnabled = function() {
          return $items.not(".disabled");
        };
        
        // reposition the scroll of the drop down so the selected option is centered (or appropriately onscreen)
        centerOnSelected = function() {
            $dd.scrollTop($dd.scrollTop() + getSelected().offsetFrom($dd).top - $dd.height() / 2 + getSelected().outerHeight(true) / 2);
        };
        
        flickerDisplay = function() {
            if($.browser.msie && $.browser.version < 8) {
                $("." + o.selectboxClass + " .display").hide().show(); // fix ie7 display bug
            }
        };
        
        // show, reposition, and reset drop down markup
        openSB = function( instantOpen ) {
            var dir,
                $ddCtx = getDDCtx();
            blurAllButMe();
            $sb.addClass("open");
            $ddCtx.append($dd);
            dir = positionSB();
            $dd.attr("aria-hidden", "false");
            if(instantOpen === true) {
                $dd.show();
                centerOnSelected();
            } else if(dir === "down") {
                $dd.slideDown(o.animDuration, centerOnSelected);
            } else {
                $dd.fadeIn(o.animDuration, centerOnSelected);
            }
            $orig.focus();
        };
        
        // position drop down based on collision detection
        positionSB = function() {
            var $ddCtx = getDDCtx(),
                ddMaxHeight = 0,
                ddX = $display.offsetFrom($ddCtx).left,
                ddY = 0,
                dir = "",
                ml, mt,
                bottomSpace, topSpace,
                bottomOffset, spaceDiff,
                bodyX, bodyY;
            
            // modify dropdown css for getting values
            $dd.removeClass("above");
            $dd.show().css({
                maxHeight: "none",
                position: "relative",
                visibility: "hidden"
            });
            if(!o.fixedWidth) {
              $dd.width($display.outerWidth() - $dd.extraWidth() + 1);
            }
            
            // figure out if we should show above/below the display box
            bottomSpace = $(window).scrollTop() + $(window).height() - $display.offset().top - $display.outerHeight();
            topSpace = $display.offset().top - $(window).scrollTop();
            bottomOffset = $display.offsetFrom($ddCtx).top + $display.outerHeight();
            spaceDiff = bottomSpace - topSpace + o.dropupThreshold;
            if($dd.outerHeight() < bottomSpace) {
                ddMaxHeight = o.maxHeight ? o.maxHeight : bottomSpace;
                ddY = bottomOffset;
                dir = "down";
            } else if($dd.outerHeight() < topSpace) {
                ddMaxHeight = o.maxHeight ? o.maxHeight : topSpace;
                ddY = $display.offsetFrom($ddCtx).top - Math.min(ddMaxHeight, $dd.outerHeight());
                dir = "up";
            } else if(spaceDiff >= 0) {
                ddMaxHeight = o.maxHeight ? o.maxHeight : bottomSpace;
                ddY = bottomOffset;
                dir = "down";
            } else if(spaceDiff < 0) {
                ddMaxHeight = o.maxHeight ? o.maxHeight : topSpace;
                ddY = $display.offsetFrom($ddCtx).top - Math.min(ddMaxHeight, $dd.outerHeight());
                dir = "up";
            } else {
                ddMaxHeight = o.maxHeight ? o.maxHeight : "none";
                ddY = bottomOffset;
                dir = "down";
            }
            
            ml = ("" + $("body").css("margin-left")).match(/^\d+/) ? $("body").css("margin-left") : 0;
            mt = ("" + $("body").css("margin-top")).match(/^\d+/) ? $("body").css("margin-top") : 0;
            bodyX = $().jquery >= "1.4.2"
                ? parseInt(ml)
                : $("body").offset().left;
            bodyY = $().jquery >= "1.4.2"
                ? parseInt(mt)
                : $("body").offset().top;
            
            
            // modify dropdown css for display
            $dd.hide().css({
                left: ddX + ($ddCtx.is("body") ? bodyX : 0),
                maxHeight: ddMaxHeight,
                position: "absolute",
                top: ddY + ($ddCtx.is("body") ? bodyY : 0),
                visibility: "visible"
            });
            if(dir === "up") {
              $dd.addClass("above");
            }
            return dir;
        };
        
        // when the user explicitly clicks the display
        clickSB = function( e ) {
            if($sb.is(".open")) {
                closeSB();
            } else {
                openSB();
            }
            return false;
        };
        
        // when the user selects an item in any manner
        selectItem = function() {
            var $item = $(this),
                oldVal = $orig.val(),
                newVal = $item.data("value");
            
            // update the original <select>
            $orig.find("option").each(function() { this.selected = false; });
            $($item.data("orig")).each(function() { this.selected = true; });
            
            // change the selection to this item
            $items.removeClass("selected");
            $item.addClass("selected");
            $sb.attr("aria-active-descendant", $item.attr("id"));
            
            // update the title attr and the display markup
            $display.find(".text").attr("title", $item.find(".text").html());
            $display.find(".text").html(o.displayFormat.call($item.data("orig")));
            
            // trigger change on the old <select> if necessary
            if(oldVal !== newVal) {
                $orig.change();
            }
        };
        
        // when the user explicitly clicks an item
        clickSBItem = function( e ) {
            closeAndUnbind();
            $orig.focus();
            selectItem.call(this);
            return false;
        };
        
        // start over for generating the search term
        clearSearchTerm = function() {
            searchTerm = "";
        };
        
        // iterate over all the options to see if any match the search term
        findMatchingItem = function( term ) {
            var i, t, $tNode,
                $available = getEnabled();
            for(i=0; i < $available.size(); i++) {
                $tNode = $available.eq(i).find(".text");
                t = $tNode.children().size() == 0 ? $tNode.text() : $tNode.find("*").text();
                if(term.length > 0 && t.toLowerCase().match("^" + term.toLowerCase())) {
                    return $available.eq(i);
                }
            }
            return null;
        };
        
        // if we get a match for any options, select it
        selectMatchingItem = function( text ) {
            var $matchingItem = findMatchingItem(text);
            if($matchingItem !== null) {
                selectItem.call($matchingItem[0]);
                return true;
            }
            return false;
        };
        
        // stop up/down/backspace/space from moving the page
        stopPageHotkeys = function( e ) {
            if(e.ctrlKey || e.altKey) {
                return;
            }
            if(e.which === 38 || e.which === 40 || e.which === 8 || e.which === 32) {
                e.preventDefault();
            }
        };
        
        // if a normal match fails, try matching the next element that starts with the pressed letter
        selectNextItemStartsWith = function( c ) {
            var i, t,
                $selected = getSelected(),
                $available = getEnabled();
            for(i = $available.index($selected) + 1; i < $available.size(); i++) {
                t = $available.eq(i).find(".text").text();
                if(t !== "" && t.substring(0,1).toLowerCase() === c.toLowerCase()) {
                    selectItem.call($available.eq(i)[0]);
                    return true;
                }
            }
            return false;
        };
        
        // go up/down using arrows or attempt to autocomplete based on string
        keydownSB = function( e ) {
            if(e.altKey || e.ctrlKey) {
                return false;
            }
            var $selected = getSelected(),
                $enabled = getEnabled();
            switch(e.which) {
            case 9: // tab
                closeSB();
                blurSB();
                break;
            case 35: // end
                if($selected.size() > 0) {
                    e.preventDefault();
                    selectItem.call($enabled.filter(":last")[0]);
                    centerOnSelected();
                }
                break;
            case 36: // home
                if($selected.size() > 0) {
                    e.preventDefault();
                    selectItem.call($enabled.filter(":first")[0]);
                    centerOnSelected();
                }
                break;
            case 38: // up
                if($selected.size() > 0) {
                    if($enabled.filter(":first")[0] !== $selected[0]) {
                        e.preventDefault();
                        selectItem.call($enabled.eq($enabled.index($selected)-1)[0]);
                    }
                    centerOnSelected();
                }
                break;
            case 40: // down
                if($selected.size() > 0) {
                    if($enabled.filter(":last")[0] !== $selected[0]) {
                        e.preventDefault();
                        selectItem.call($enabled.eq($enabled.index($selected)+1)[0]);
                        centerOnSelected();
                    }
                } else if($items.size() > 1) {
                    e.preventDefault();
                    selectItem.call($items.eq(0)[0]);
                }
                break;
            default:
                break;
            }
        };
        
        // the user is typing -- try to select an item based on what they press
        keyupSB = function( e ) {
            if(e.altKey || e.ctrlKey) {
              return false;
            }
            if(e.which !== 38 && e.which !== 40) {
                
                // add to the search term
                searchTerm += String.fromCharCode(e.keyCode);
                
                if(selectMatchingItem(searchTerm)) {
                
                    // we found a match, continue with the current search term
                    clearTimeout(cstTimeout);
                    cstTimeout = setTimeout(clearSearchTerm, o.acTimeout);
                    
                } else if(selectNextItemStartsWith(String.fromCharCode(e.keyCode))) {
                    
                    // we selected the next item that starts with what you just pressed
                    centerOnSelected();
                    clearTimeout(cstTimeout);
                    cstTimeout = setTimeout(clearSearchTerm, o.acTimeout);
                    
                } else {
                    
                    // no matches were found, clear everything
                    clearSearchTerm();
                    clearTimeout(cstTimeout);
                    
                }
            }
        };
        
        // when the sb is focused (by tab or click), allow hotkey selection and kill all other select boxes
        focusSB = function() {
            closeAllButMe();
            $sb.addClass("focused");
            $(document)
                .click(closeAndUnbind)
                .keyup(keyupSB)
                .keypress(stopPageHotkeys)
                .keydown(stopPageHotkeys)
                .keydown(keydownSB);
        };
        
        // when the sb is blurred (by tab or click), disable hotkey selection
        blurSB = function() {
            $sb.removeClass("focused");
            $display.removeClass("active");
            $(document)
                .unbind("keyup", keyupSB)
                .unbind("keydown", stopPageHotkeys)
                .unbind("keypress", stopPageHotkeys)
                .unbind("keydown", keydownSB);
        };
        
        // add hover class to an element
        addHoverState = function() {
          $(this).addClass("hover");
        };
        
        // remove hover class from an element
        removeHoverState = function() {
          $(this).removeClass("hover");
        };
        
        // add active class to the display
        addActiveState = function() {
          $display.addClass("active");
          $(document).bind("mouseup", removeActiveState);
        };
        
        // remove active class from an element
        removeActiveState = function() {
          $display.removeClass("active");
          $(document).unbind("mouseup", removeActiveState);
        };
        
        // constructor
        this.init = function( opts ) {
            
            // this plugin is not compatible with IE6 and below;
            // a normal <select> will be displayed for old browsers
            if($.browser.msie && $.browser.version < 7) {
              return;
            }
        
            // get the original <select> and <label>
            $orig = $(this.elem);
            if($orig.attr("id")) {
                $label = $("label[for='" + $orig.attr("id") + "']:first");
            }
            if(!$label || $label.size() === 0) {
                $label = $orig.closest("label");
            }
            
            // don't create duplicate SBs
            if($orig.hasClass("has_sb")) {
                return;
            }
            
            // set the various options
            o = $.extend({
                acTimeout: 800,               // time between each keyup for the user to create a search string
                animDuration: 200,            // time to open/close drop down in ms
                ddCtx: 'body',                // body | self | any selector | a function that returns a selector (the original select is the context)
                dropupThreshold: 150,         // the minimum amount of extra space required above the select box for it to display a drop up
                fixedWidth: false,            // if false, drop down expands to widest and display conforms to whatever is selected
                maxHeight: false,             // if an integer, show scrollbars if the drop down is too tall
                maxWidth: false,              // if an integer, prevent the display/dropdown from growing past this width; longer items will be clipped
                selectboxClass: 'selectbox',  // class to apply our markup
                useTie: false,                // if jquery.tie is included and this is true, the select box will update dynamically
                
                // markup appended to the display, typically for styling an arrow
                arrowMarkup: "<div class='arrow_btn'><span class='arrow'></span></div>",
                
                // use optionFormat by default
                displayFormat: undefined,
                
                // formatting for the display; note that it will be wrapped with <a href='#'><span class='text'></span></a>
                optionFormat: function( ogIndex, optIndex ) {
                    if($(this).size() > 0) {
                        var label = $(this).attr("label");
                        if(label && label.length > 0) {
                          return label;
                        }
                        return $(this).text();
                    } else {
                        return "";
                    }
                },
                
                // the function to produce opt group markup
                optgroupFormat: function( ogIndex ) {
                    return "<span class='label'>" + $(this).attr("label") + "</span>";
                }
            }, opts);
            o.displayFormat = o.displayFormat || o.optionFormat;
            
            // generate the new sb
            loadSB();
        };
        
        // public method interface
        this.open = openSB;
        this.close = closeSB;
        this.refresh = reloadSB;
        this.destroy = destroySB;
        this.options = function( opts ) {
            o = $.extend(o, opts);
            reloadSB();
        };
    };

    $.proto("sb", SelectBox);

}(jQuery, window));;
(function(a,b){function g(a,b){return(new Date(a,b+1,0)).getDate()}function h(a,b){a=""+a,b=b||2;while(a.length<b)a="0"+a;return a}function k(a,b,c){var d=a.getDate(),e=a.getDay(),g=a.getMonth(),k=a.getFullYear(),l={d:d,dd:h(d),ddd:f[c].shortDays[e],dddd:f[c].days[e],m:g+1,mm:h(g+1),mmm:f[c].shortMonths[g],mmmm:f[c].months[g],yy:String(k).slice(2),yyyy:k},m=b.replace(i,function(a){return a in l?l[a]:a.slice(1,a.length-1)});return j.html(m).html()}function l(a){return parseInt(a,10)}function m(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()==b.getMonth()&&a.getDate()==b.getDate()}function n(a){if(a===b)return;if(a.constructor==Date)return a;if(typeof a=="string"){var c=a.split("-");if(c.length==3)return new Date(l(c[0]),l(c[1])-1,l(c[2]));if(!/^-?\d+$/.test(a))return;a=l(a)}var d=new Date;return d.setDate(d.getDate()+a),d}function o(d,h){function M(b,c,e){z=b,w=b.getFullYear(),x=b.getMonth(),y=b.getDate(),e=e||a.Event("api"),e.type="beforeChange",G.trigger(e,[b]);if(e.isDefaultPrevented())return;d.val(k(b,c.format,c.lang)),e.type="change",G.trigger(e),d.data("date",b),i.hide(e)}function N(b){b.type="onShow",G.trigger(b),a(document).bind("keydown.d",function(b){if(b.ctrlKey)return!0;var c=b.keyCode;if(c==8)return d.val(""),i.hide(b);if(c==27||c==9)return i.hide(b);if(a(e).index(c)>=0){if(!C)return i.show(b),b.preventDefault();var f=a("#"+p.weeks+" a"),g=a("."+p.focus),h=f.index(g);g.removeClass(p.focus);if(c==74||c==40)h+=7;else if(c==75||c==38)h-=7;else if(c==76||c==39)h+=1;else if(c==72||c==37)h-=1;return h>41?(i.addMonth(),g=a("#"+p.weeks+" a:eq("+(h-42)+")")):h<0?(i.addMonth(-1),g=a("#"+p.weeks+" a:eq("+(h+42)+")")):g=f.eq(h),g.addClass(p.focus),b.preventDefault()}return c==34?i.addMonth():c==33?i.addMonth(-1):c==36?i.today():(c==13&&(a(b.target).is("select")||a("."+p.focus).click()),a([16,17,18,9]).index(c)>=0)}),a(document).bind("click.d",function(b){var c=b.target;!a(c).parents("#"+p.root).length&&c!=d[0]&&(!t||c!=t[0])&&i.hide(b)})}var i=this,j=new Date,o=j.getFullYear(),p=h.css,q=f[h.lang],r=a("#"+p.root),s=r.find("#"+p.title),t,u,v,w,x,y,z=d.attr("data-value")||h.value||d.val(),A=d.attr("min")||h.min,B=d.attr("max")||h.max,C,D;A===0&&(A="0"),z=n(z)||j,A=n(A||new Date(o+h.yearRange[0],1,1)),B=n(B||new Date(o+h.yearRange[1]+1,1,-1));if(!q)throw"Dateinput: invalid language: "+h.lang;if(d.attr("type")=="date"){var D=d.clone(),E=D.wrap("<div/>").parent().html(),F=a(E.replace(/type/i,"type=text data-orig-type"));h.value&&F.val(h.value),d.replaceWith(F),d=F}d.addClass(p.input);var G=d.add(i);if(!r.length){r=a("<div><div><a/><div/><a/></div><div><div/><div/></div></div>").hide().css({position:"absolute"}).attr("id",p.root),r.children().eq(0).attr("id",p.head).end().eq(1).attr("id",p.body).children().eq(0).attr("id",p.days).end().eq(1).attr("id",p.weeks).end().end().end().find("a").eq(0).attr("id",p.prev).end().eq(1).attr("id",p.next),s=r.find("#"+p.head).find("div").attr("id",p.title);if(h.selectors){var H=a("<select/>").attr("id",p.month),I=a("<select/>").attr("id",p.year);s.html(H.add(I))}var J=r.find("#"+p.days);for(var K=0;K<7;K++)J.append(a("<span/>").text(q.shortDays[(K+h.firstDay)%7]));a("body").append(r)}h.trigger&&(t=a("<a/>").attr("href","#").addClass(p.trigger).click(function(a){return h.toggle?i.toggle():i.show(),a.preventDefault()}).insertAfter(d));var L=r.find("#"+p.weeks);I=r.find("#"+p.year),H=r.find("#"+p.month),a.extend(i,{show:function(b){if(d.attr("readonly")||d.attr("disabled")||C)return;b=b||a.Event(),b.type="onBeforeShow",G.trigger(b);if(b.isDefaultPrevented())return;a.each(c,function(){this.hide()}),C=!0,H.unbind("change").change(function(){i.setValue(I.val(),a(this).val())}),I.unbind("change").change(function(){i.setValue(a(this).val(),H.val())}),u=r.find("#"+p.prev).unbind("click").click(function(a){return u.hasClass(p.disabled)||i.addMonth(-1),!1}),v=r.find("#"+p.next).unbind("click").click(function(a){return v.hasClass(p.disabled)||i.addMonth(),!1}),i.setValue(z);var e=d.offset();return/iPad/i.test(navigator.userAgent)&&(e.top-=a(window).scrollTop()),r.css({top:e.top+d.outerHeight({margins:!0})+h.offset[0],left:e.left+h.offset[1]}),h.speed?r.show(h.speed,function(){N(b)}):(r.show(),N(b)),i},setValue:function(c,d,e){var f=l(d)>=-1?new Date(l(c),l(d),l(e==b||isNaN(e)?1:e)):c||z;f<A?f=A:f>B&&(f=B),typeof c=="string"&&(f=n(c)),c=f.getFullYear(),d=f.getMonth(),e=f.getDate(),d==-1?(d=11,c--):d==12&&(d=0,c++);if(!C)return M(f,h),i;x=d,w=c,y=e;var k=new Date(c,d,1-h.firstDay),o=k.getDay(),r=g(c,d),t=g(c,d-1),D;if(h.selectors){H.empty(),a.each(q.months,function(b,d){A<new Date(c,b+1,1)&&B>new Date(c,b,0)&&H.append(a("<option/>").html(d).attr("value",b))}),I.empty();var E=j.getFullYear();for(var F=E+h.yearRange[0];F<E+h.yearRange[1];F++)A<new Date(F+1,0,1)&&B>new Date(F,0,0)&&I.append(a("<option/>").text(F));H.val(d),I.val(c)}else s.html(q.months[d]+" "+c);L.empty(),u.add(v).removeClass(p.disabled);for(var G=o?0:-7,J,K;G<(o?42:35);G++)J=a("<a/>"),G%7===0&&(D=a("<div/>").addClass(p.week),L.append(D)),G<o?(J.addClass(p.off),K=t-o+G+1,f=new Date(c,d-1,K)):G>=o+r?(J.addClass(p.off),K=G-r-o+1,f=new Date(c,d+1,K)):(K=G-o+1,f=new Date(c,d,K),m(z,f)?J.attr("id",p.current).addClass(p.focus):m(j,f)&&J.attr("id",p.today)),A&&f<A&&J.add(u).addClass(p.disabled),B&&f>B&&J.add(v).addClass(p.disabled),J.attr("href","#"+K).text(K).data("date",f),D.append(J);return L.find("a").click(function(b){var c=a(this);return c.hasClass(p.disabled)||(a("#"+p.current).removeAttr("id"),c.attr("id",p.current),M(c.data("date"),h,b)),!1}),p.sunday&&L.find(p.week).each(function(){var b=h.firstDay?7-h.firstDay:0;a(this).children().slice(b,b+1).addClass(p.sunday)}),i},setMin:function(a,b){return A=n(a),b&&z<A&&i.setValue(A),i},setMax:function(a,b){return B=n(a),b&&z>B&&i.setValue(B),i},today:function(){return i.setValue(j)},addDay:function(a){return this.setValue(w,x,y+(a||1))},addMonth:function(a){var b=x+(a||1),c=g(w,b),d=y<=c?y:c;return this.setValue(w,b,d)},addYear:function(a){return this.setValue(w+(a||1),x,y)},destroy:function(){d.add(document).unbind("click.d").unbind("keydown.d"),r.add(t).remove(),d.removeData("dateinput").removeClass(p.input),D&&d.replaceWith(D)},hide:function(b){if(C){b=a.Event(),b.type="onHide",G.trigger(b),a(document).unbind("click.d").unbind("keydown.d");if(b.isDefaultPrevented())return;r.hide(),C=!1}return i},toggle:function(){return i.isOpen()?i.hide():i.show()},getConf:function(){return h},getInput:function(){return d},getCalendar:function(){return r},getValue:function(a){return a?k(z,a,h.lang):z},isOpen:function(){return C}}),a.each(["onBeforeShow","onShow","change","onHide"],function(b,c){a.isFunction(h[c])&&a(i).bind(c,h[c]),i[c]=function(b){return b&&a(i).bind(c,b),i}}),h.editable||d.bind("focus.d click.d",i.show).keydown(function(b){var c=b.keyCode;return!C&&a(e).index(c)>=0?(i.show(b),b.preventDefault()):b.shiftKey||b.ctrlKey||b.altKey||c==9?!0:b.preventDefault()}),n(d.val())&&M(z,h)}a.tools=a.tools||{version:"1.2.6"};var c=[],d,e=[75,76,38,39,74,72,40,37],f={};d=a.tools.dateinput={conf:{format:"mm/dd/yy",selectors:!1,yearRange:[-5,5],lang:"en",offset:[0,0],speed:0,firstDay:0,min:b,max:b,trigger:0,toggle:0,editable:0,css:{prefix:"cal",input:"date",root:0,head:0,title:0,prev:0,next:0,month:0,year:0,days:0,body:0,weeks:0,today:0,current:0,week:0,off:0,sunday:0,focus:0,disabled:0,trigger:0}},localize:function(b,c){a.each(c,function(a,b){c[a]=b.split(",")}),f[b]=c}},d.localize("en",{months:"January,February,March,April,May,June,July,August,September,October,November,December",shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",days:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",shortDays:"Sun,Mon,Tue,Wed,Thu,Fri,Sat"});var i=/d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g,j=a("<a/>");a.expr[":"].date=function(b){var c=b.getAttribute("type");return c&&c=="date"||!!a(b).data("dateinput")},a.fn.dateinput=function(b){if(this.data("dateinput"))return this;b=a.extend(!0,{},d.conf,b),a.each(b.css,function(a,c){!c&&a!="prefix"&&(b.css[a]=(b.css.prefix||"")+(c||a))});var e;return this.each(function(){var d=new o(a(this),b);c.push(d);var f=d.getInput().data("dateinput",d);e=e?e.add(f):f}),e?e:this}})(jQuery),function(a){function d(d,e){var f=this,g=d.add(f),h=a(window),i,j,k,l=a.tools.expose&&(e.mask||e.expose),m=Math.random().toString().slice(10);l&&(typeof l=="string"&&(l={color:l}),l.closeOnClick=l.closeOnEsc=!1);var n=e.target||d.attr("rel");j=n?a(n):null||d;if(!j.length)throw"Could not find Overlay: "+n;d&&d.index(j)==-1&&d.click(function(a){return f.load(a),a.preventDefault()}),a.extend(f,{load:function(d){if(f.isOpened())return f;var i=c[e.effect];if(!i)throw'Overlay: cannot find effect : "'+e.effect+'"';e.oneInstance&&a.each(b,function(){this.close(d)}),d=d||a.Event(),d.type="onBeforeLoad",g.trigger(d);if(d.isDefaultPrevented())return f;k=!0,l&&a(j).expose(l);var n=e.top,o=e.left,p=j.outerWidth({margin:!0}),q=j.outerHeight({margin:!0});return typeof n=="string"&&(n=n=="center"?Math.max((h.height()-q)/2,0):parseInt(n,10)/100*h.height()),o=="center"&&(o=Math.max((h.width()-p)/2,0)),i[0].call(f,{top:n,left:o},function(){k&&(d.type="onLoad",g.trigger(d))}),l&&e.closeOnClick&&a.mask.getMask().one("click",f.close),e.closeOnClick&&a(document).bind("click."+m,function(b){a(b.target).parents(j).length||f.close(b)}),e.closeOnEsc&&a(document).bind("keydown."+m,function(a){a.keyCode==27&&f.close(a)}),f},close:function(b){if(!f.isOpened())return f;b=b||a.Event(),b.type="onBeforeClose",g.trigger(b);if(b.isDefaultPrevented())return;return k=!1,c[e.effect][1].call(f,function(){b.type="onClose",g.trigger(b)}),a(document).unbind("click."+m).unbind("keydown."+m),l&&a.mask.close(),f},getOverlay:function(){return j},getTrigger:function(){return d},getClosers:function(){return i},isOpened:function(){return k},getConf:function(){return e}}),a.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){return b&&a(f).bind(c,b),f}}),i=j.find(e.close||".close"),!i.length&&!e.close&&(i=a('<a class="close"></a>'),j.prepend(i)),i.click(function(a){f.close(a)}),e.load&&f.load()}a.tools=a.tools||{version:"1.2.6"},a.tools.overlay={addEffect:function(a,b,d){c[a]=[b,d]},conf:{close:null,closeOnClick:!0,closeOnEsc:!0,closeSpeed:"fast",effect:"default",fixed:!a.browser.msie||a.browser.version>6,left:"center",load:!1,mask:null,oneInstance:!0,speed:"normal",target:null,top:"10%"}};var b=[],c={};a.tools.overlay.addEffect("default",function(b,c){var d=this.getConf(),e=a(window);d.fixed||(b.top+=e.scrollTop(),b.left+=e.scrollLeft()),b.position=d.fixed?"fixed":"absolute",this.getOverlay().css(b).fadeIn(d.speed,c)},function(a){this.getOverlay().fadeOut(this.getConf().closeSpeed,a)}),a.fn.overlay=function(c){var e=this.data("overlay");return e?e:(a.isFunction(c)&&(c={onBeforeLoad:c}),c=a.extend(!0,{},a.tools.overlay.conf,c),this.each(function(){e=new d(a(this),c),b.push(e),a(this).data("overlay",e)}),c.api?e:this)}}(jQuery),function(a){function d(a){var b=a.offset();return{top:b.top+a.height()/2,left:b.left+a.width()/2}}var b=a.tools.overlay,c=a(window);a.extend(b.conf,{start:{top:null,left:null},fadeInSpeed:"fast",zIndex:9999});var e=function(b,e){var f=this.getOverlay(),g=this.getConf(),h=this.getTrigger(),i=this,j=f.outerWidth({margin:!0}),k=f.data("img"),l=g.fixed?"fixed":"absolute";if(!k){var m=f.css("backgroundImage");if(!m)throw"background-image CSS property not set for overlay";m=m.slice(m.indexOf("(")+1,m.indexOf(")")).replace(/\"/g,""),f.css("backgroundImage","none"),k=a('<img src="'+m+'"/>'),k.css({border:0,display:"none"}).width(j),a("body").append(k),f.data("img",k)}var n=g.start.top||Math.round(c.height()/2),o=g.start.left||Math.round(c.width()/2);if(h){var p=d(h);n=p.top,o=p.left}g.fixed?(n-=c.scrollTop(),o-=c.scrollLeft()):(b.top+=c.scrollTop(),b.left+=c.scrollLeft()),k.css({position:"absolute",top:n,left:o,width:0,zIndex:g.zIndex}).show(),b.position=l,f.css(b),k.animate({top:f.css("top"),left:f.css("left"),width:j},g.speed,function(){f.css("zIndex",g.zIndex+1).fadeIn(g.fadeInSpeed,function(){i.isOpened()&&!a(this).index(f)?e.call():f.hide()})}).css("position",l)},f=function(b){var e=this.getOverlay().hide(),f=this.getConf(),g=this.getTrigger(),h=e.data("img"),i={top:f.start.top,left:f.start.left,width:0};g&&a.extend(i,d(g)),f.fixed&&h.css({position:"absolute"}).animate({top:"+="+c.scrollTop(),left:"+="+c.scrollLeft()},0),h.animate(i,f.closeSpeed,b)};b.addEffect("apple",e,f)}(jQuery),function(a){function e(a,b){var c=Math.pow(10,b);return Math.round(a*c)/c}function f(a,b){var c=parseInt(a.css(b),10);if(c)return c;var d=a[0].currentStyle;return d&&d.width&&parseInt(d.width,10)}function g(a){var b=a.data("events");return b&&b.onSlide}function h(b,c){function y(a,f,g,h){g===undefined?g=f/m*q:h&&(g-=c.min),r&&(g=Math.round(g/r)*r);if(f===undefined||r)f=g*m/q;if(isNaN(g))return d;f=Math.max(0,Math.min(f,m)),g=f/m*q;if(h||!j)g+=c.min;j&&(h?f=m-f:g=c.max-g),g=e(g,s);var i=a.type=="click";if(x&&k!==undefined&&!i){a.type="onSlide",w.trigger(a,[g,f]);if(a.isDefaultPrevented())return d}var l=i?c.speed:0,t=i?function(){a.type="change",w.trigger(a,[g])}:null;return j?(o.animate({top:f},l,t),c.progress&&p.animate({height:m-f+o.height()/2},l)):(o.animate({left:f},l,t),c.progress&&p.animate({width:f+o.width()/2},l)),k=g,n=f,b.val(g),d}function z(){j=c.vertical||f(i,"height")>f(i,"width"),j?(m=f(i,"height")-f(o,"height"),l=i.offset().top+m):(m=f(i,"width")-f(o,"width"),l=i.offset().left)}function A(){z(),d.setValue(c.value!==undefined?c.value:c.min)}var d=this,h=c.css,i=a("<div><div/><a href='#'/></div>").data("rangeinput",d),j,k,l,m,n;b.before(i);var o=i.addClass(h.slider).find("a").addClass(h.handle),p=i.find("div").addClass(h.progress);a.each("min,max,step,value".split(","),function(a,d){var e=b.attr(d);parseFloat(e)&&(c[d]=parseFloat(e,10))});var q=c.max-c.min,r=c.step=="any"?0:c.step,s=c.precision;if(s===undefined)try{s=r.toString().split(".")[1].length}catch(t){s=0}if(b.attr("type")=="range"){var u=b.clone().wrap("<div/>").parent().html(),v=a(u.replace(/type/i,"type=text data-orig-type"));v.val(c.value),b.replaceWith(v),b=v}b.addClass(h.input);var w=a(d).add(b),x=!0;a.extend(d,{getValue:function(){return k},setValue:function(b,c){return z(),y(c||a.Event("api"),undefined,b,!0)},getConf:function(){return c},getProgress:function(){return p},getHandle:function(){return o},getInput:function(){return b},step:function(b,e){e=e||a.Event();var f=c.step=="any"?1:c.step;d.setValue(k+f*(b||1),e)},stepUp:function(a){return d.step(a||1)},stepDown:function(a){return d.step(-a||-1)}}),a.each("onSlide,change".split(","),function(b,e){a.isFunction(c[e])&&a(d).bind(e,c[e]),d[e]=function(b){return b&&a(d).bind(e,b),d}}),o.drag({drag:!1}).bind("dragStart",function(){z(),x=g(a(d))||g(b)}).bind("drag",function(a,c,d){if(b.is(":disabled"))return!1;y(a,j?c:d)}).bind("dragEnd",function(a){a.isDefaultPrevented()||(a.type="change",w.trigger(a,[k]))}).click(function(a){return a.preventDefault()}),i.click(function(a){if(b.is(":disabled")||a.target==o[0])return a.preventDefault();z();var c=j?o.height()/2:o.width()/2;y(a,j?m-l-c+a.pageY:a.pageX-l-c)}),c.keyboard&&b.keydown(function(c){if(b.attr("readonly"))return;var e=c.keyCode,f=a([75,76,38,33,39]).index(e)!=-1,g=a([74,72,40,34,37]).index(e)!=-1;if((f||g)&&!(c.shiftKey||c.altKey||c.ctrlKey))return f?d.step(e==33?10:1,c):g&&d.step(e==34?-10:-1,c),c.preventDefault()}),b.blur(function(b){var c=a(this).val();c!==k&&d.setValue(c,b)}),a.extend(b[0],{stepUp:d.stepUp,stepDown:d.stepDown}),A(),m||a(window).load(A)}a.tools=a.tools||{version:"1.2.6"};var b;b=a.tools.rangeinput={conf:{min:0,max:100,step:"any",steps:0,value:0,precision:undefined,vertical:0,keyboard:!0,progress:!1,speed:100,css:{input:"range",slider:"slider",progress:"progress",handle:"handle"}}};var c,d;a.fn.drag=function(b){return document.ondragstart=function(){return!1},b=a.extend({x:!0,y:!0,drag:!0},b),c=c||a(document).bind("mousedown mouseup",function(e){var f=a(e.target);if(e.type=="mousedown"&&f.data("drag")){var g=f.position(),h=e.pageX-g.left,i=e.pageY-g.top,j=!0;c.bind("mousemove.drag",function(a){var c=a.pageX-h,e=a.pageY-i,g={};b.x&&(g.left=c),b.y&&(g.top=e),j&&(f.trigger("dragStart"),j=!1),b.drag&&f.css(g),f.trigger("drag",[e,c]),d=f}),e.preventDefault()}else try{d&&d.trigger("dragEnd")}finally{c.unbind("mousemove.drag"),d=null}}),this.data("drag",!0)},a.expr[":"].range=function(b){var c=b.getAttribute("type");return c&&c=="range"||!!a(b).filter("input").data("rangeinput")},a.fn.rangeinput=function(c){if(this.data("rangeinput"))return this;c=a.extend(!0,{},b.conf,c);var d;return this.each(function(){var b=new h(a(this),a.extend(!0,{},c)),e=b.getInput().data("rangeinput",b);d=d?d.add(e):e}),d?d:this}}(jQuery),function(a){function b(a,b){var c=parseInt(a.css(b),10);if(c)return c;var d=a[0].currentStyle;return d&&d.width&&parseInt(d.width,10)}function c(b,c){var d=a(c);return d.length<2?d:b.parent().find(c)}function e(b,e){var f=this,g=b.add(f),h=b.children(),i=0,j=e.vertical;d||(d=f),h.length>1&&(h=a(e.items,b)),e.size>1&&(e.circular=!1),a.extend(f,{getConf:function(){return e},getIndex:function(){return i},getSize:function(){return f.getItems().size()},getNaviButtons:function(){return n.add(o)},getRoot:function(){return b},getItemWrap:function(){return h},getItems:function(){return h.find(e.item).not("."+e.clonedClass)},move:function(a,b){return f.seekTo(i+a,b)},next:function(a){return f.move(e.size,a)},prev:function(a){return f.move(-e.size,a)},begin:function(a){return f.seekTo(0,a)},end:function(a){return f.seekTo(f.getSize()-1,a)},focus:function(){return d=f,f},addItem:function(b){return b=a(b),e.circular?(h.children().last().before(b),h.children().first().replaceWith(b.clone().addClass(e.clonedClass))):(h.append(b),o.removeClass("disabled")),g.trigger("onAddItem",[b]),f},seekTo:function(b,c,k){b.jquery||(b*=1);if(e.circular&&b===0&&i==-1&&c!==0)return f;if(!e.circular&&b<0||b>f.getSize()||b<-1)return f;var l=b;b.jquery?b=f.getItems().index(b):l=f.getItems().eq(b);var m=a.Event("onBeforeSeek");if(!k){g.trigger(m,[b,c]);if(m.isDefaultPrevented()||!l.length)return f}var n=j?{top:-l.position().top}:{left:-l.position().left};return i=b,d=f,c===undefined&&(c=e.speed),h.animate(n,c,e.easing,k||function(){g.trigger("onSeek",[b])}),f}}),a.each(["onBeforeSeek","onSeek","onAddItem"],function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){return b&&a(f).bind(c,b),f}});if(e.circular){var k=f.getItems().slice(-1).clone().prependTo(h),l=f.getItems().eq(1).clone().appendTo(h);k.add(l).addClass(e.clonedClass),f.onBeforeSeek(function(a,b,c){if(a.isDefaultPrevented())return;if(b==-1)return f.seekTo(k,c,function(){f.end(0)}),a.preventDefault();b==f.getSize()&&f.seekTo(l,c,function(){f.begin(0)})});var m=b.parents().add(b).filter(function(){if(a(this).css("display")==="none")return!0});m.length?(m.show(),f.seekTo(0,0,function(){}),m.hide()):f.seekTo(0,0,function(){})}var n=c(b,e.prev).click(function(a){a.stopPropagation(),f.prev()}),o=c(b,e.next).click(function(a){a.stopPropagation(),f.next()});e.circular||(f.onBeforeSeek(function(a,b){setTimeout(function(){a.isDefaultPrevented()||(n.toggleClass(e.disabledClass,b<=0),o.toggleClass(e.disabledClass,b>=f.getSize()-1))},1)}),e.initialIndex||n.addClass(e.disabledClass)),f.getSize()<2&&n.add(o).addClass(e.disabledClass),e.mousewheel&&a.fn.mousewheel&&b.mousewheel(function(a,b){if(e.mousewheel)return f.move(b<0?1:-1,e.wheelSpeed||50),!1});if(e.touch){var p={};h[0].ontouchstart=function(a){var b=a.touches[0];p.x=b.clientX,p.y=b.clientY},h[0].ontouchmove=function(a){if(a.touches.length==1&&!h.is(":animated")){var b=a.touches[0],c=p.x-b.clientX,d=p.y-b.clientY;f[j&&d>0||!j&&c>0?"next":"prev"](),a.preventDefault()}}}e.keyboard&&a(document).bind("keydown.scrollable",function(b){if(!e.keyboard||b.altKey||b.ctrlKey||b.metaKey||a(b.target).is(":input"))return;if(e.keyboard!="static"&&d!=f)return;var c=b.keyCode;if(!(!j||c!=38&&c!=40))return f.move(c==38?-1:1),b.preventDefault();if(!j&&(c==37||c==39))return f.move(c==37?-1:1),b.preventDefault()}),e.initialIndex&&f.seekTo(e.initialIndex,0,function(){})}a.tools=a.tools||{version:"1.2.6"},a.tools.scrollable={conf:{activeClass:"active",circular:!1,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:"> *",items:".items",keyboard:!0,mousewheel:!1,next:".next",prev:".prev",size:1,speed:400,vertical:!1,touch:!0,wheelSpeed:0}};var d;a.fn.scrollable=function(b){var c=this.data("scrollable");return c?c:(b=a.extend({},a.tools.scrollable.conf,b),this.each(function(){c=new e(a(this),b),a(this).data("scrollable",c)}),b.api?c:this)}}(jQuery),function(a){var b=a.tools.scrollable;b.autoscroll={conf:{autoplay:!0,interval:3e3,autopause:!0}},a.fn.autoscroll=function(c){typeof c=="number"&&(c={interval:c});var d=a.extend({},b.autoscroll.conf,c),e;return this.each(function(){function h(){f=setTimeout(function(){b.next()},d.interval)}var b=a(this).data("scrollable"),c=b.getRoot(),f,g=!1;b&&(e=b),b.play=function(){if(f)return;g=!1,c.bind("onSeek",h),h()},b.pause=function(){f=clearTimeout(f),c.unbind("onSeek",h)},b.resume=function(){g||b.play()},b.stop=function(){g=!0,b.pause()},d.autopause&&c.add(b.getNaviButtons()).hover(b.pause,b.resume),d.autoplay&&b.play()}),d.api?e:this}}(jQuery),function(a){function c(b,c){var d=a(c);return d.length<2?d:b.parent().find(c)}var b=a.tools.scrollable;b.navigator={conf:{navi:".navi",naviItem:null,activeClass:"active",indexed:!1,idPrefix:null,history:!1}},a.fn.navigator=function(d){typeof d=="string"&&(d={navi:d}),d=a.extend({},b.navigator.conf,d);var e;return this.each(function(){function k(a,c,d){b.seekTo(c),d.preventDefault(),i&&history.pushState({i:c})}function l(){return f.find(d.naviItem||"> *")}function m(b){var c=a("<"+(d.naviItem||"a")+"/>").click(function(c){k(a(this),b,c)});return b===0&&c.addClass(h),d.indexed&&c.text(b+1),d.idPrefix&&c.attr("id",d.idPrefix+b),c.appendTo(f)}var b=a(this).data("scrollable"),f=d.navi.jquery?d.navi:c(b.getRoot(),d.navi),g=b.getNaviButtons(),h=d.activeClass,i=d.history&&!!history.pushState,j=b.getConf().size;b&&(e=b),b.getNaviButtons=function(){return g.add(f)},i&&(history.pushState({i:0}),a(window).bind("popstate",function(a){var c=a.originalEvent.state;c&&b.seekTo(c.i)})),l().length?l().each(function(b){a(this).click(function(c){k(a(this),b,c)})}):a.each(b.getItems(),function(a){a%j==0&&m(a)}),b.onBeforeSeek(function(a,b){setTimeout(function(){if(!a.isDefaultPrevented()){var c=b/j,d=l().eq(c);d.length&&l().removeClass(h).eq(c).addClass(h)}},1)}),b.onAddItem(function(a,c){var d=b.getItems().index(c);d%j==0&&m(d)})}),d.api?e:this}}(jQuery),function(a){function e(c,d,e){var f=this,g=c.add(this),h=c.find(e.tabs),i=d.jquery?d:c.children(d),j;h.length||(h=c.children()),i.length||(i=c.parent().find(d)),i.length||(i=a(d)),a.extend(this,{click:function(c,d){var i=h.eq(c);typeof c=="string"&&c.replace("#","")&&(i=h.filter("[href*="+c.replace("#","")+"]"),c=Math.max(h.index(i),0));if(e.rotate){var k=h.length-1;if(c<0)return f.click(k,d);if(c>k)return f.click(0,d)}if(!i.length){if(j>=0)return f;c=e.initialIndex,i=h.eq(c)}if(c===j)return f;d=d||a.Event(),d.type="onBeforeClick",g.trigger(d,[c]);if(d.isDefaultPrevented())return;return b[e.effect].call(f,c,function(){j=c,d.type="onClick",g.trigger(d,[c])}),h.removeClass(e.current),i.addClass(e.current),f},getConf:function(){return e},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return f.click(j+1)},prev:function(){return f.click(j-1)},destroy:function(){return h.unbind(e.event).removeClass(e.current),i.find("a[href^=#]").unbind("click.T"),f}}),a.each("onBeforeClick,onClick".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){return b&&a(f).bind(c,b),f}}),e.history&&a.fn.history&&(a.tools.history.init(h),e.event="history"),h.each(function(b){a(this).bind(e.event,function(a){return f.click(b,a),a.preventDefault()})}),i.find("a[href^=#]").bind("click.T",function(b){f.click(a(this).attr("href"),b)}),location.hash&&e.tabs=="a"&&c.find("[href="+location.hash+"]").length?f.click(location.hash):(e.initialIndex===0||e.initialIndex>0)&&f.click(e.initialIndex)}a.tools=a.tools||{version:"1.2.6"},a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(a,c){b[a]=c}};var b={"default":function(a,b){this.getPanes().hide().eq(a).show(),b.call()},fade:function(a,b){var c=this.getConf(),d=c.fadeOutSpeed,e=this.getPanes();d?e.fadeOut(d):e.hide(),e.eq(a).fadeIn(c.fadeInSpeed,b)},slide:function(a,b){var c=this.getConf();this.getPanes().slideUp(c.slideUpSpeed),this.getPanes().eq(a).slideDown(c.slideDownSpeed,b)},ajax:function(a,b){this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"),b)}},c,d;a.tools.tabs.addEffect("horizontal",function(b,e){if(c)return;var f=this.getPanes().eq(b),g=this.getCurrentPane();d||(d=this.getPanes().eq(0).width()),c=!0,f.show(),g.animate({width:0},{step:function(a){f.css("width",d-a)},complete:function(){a(this).hide(),e.call(),c=!1}}),g.length||(e.call(),c=!1)}),a.fn.tabs=function(b,c){var d=this.data("tabs");return d&&(d.destroy(),this.removeData("tabs")),a.isFunction(c)&&(c={onBeforeClick:c}),c=a.extend({},a.tools.tabs.conf,c),this.each(function(){d=new e(a(this),b,c),a(this).data("tabs",d)}),c.api?d:this}}(jQuery),function(a){function c(b,c){function i(c){var d=a(c);return d.length<2?d:b.parent().find(c)}function l(){g=setTimeout(function(){f.next()},c.interval)}var d=this,e=b.add(this),f=b.data("tabs"),g,h=!0,j=i(c.next).click(function(){f.next()}),k=i(c.prev).click(function(){f.prev()});a.extend(d,{getTabs:function(){return f},getConf:function(){return c},play:function(){if(g)return d;var b=a.Event("onBeforePlay");return e.trigger(b),b.isDefaultPrevented()?d:(h=!1,e.trigger("onPlay"),e.bind("onClick",l),l(),d)},pause:function(){if(!g)return d;var b=a.Event("onBeforePause");return e.trigger(b),b.isDefaultPrevented()?d:(g=clearTimeout(g),e.trigger("onPause"),e.unbind("onClick",l),d)},resume:function(){h||d.play()},stop:function(){d.pause(),h=!0}}),a.each("onBeforePlay,onPlay,onBeforePause,onPause".split(","),function(b,e){a.isFunction(c[e])&&a(d).bind(e,c[e]),d[e]=function(b){return a(d).bind(e,b)}}),c.autopause&&f.getTabs().add(j).add(k).add(f.getPanes()).hover(d.pause,d.resume),c.autoplay&&d.play(),c.clickable&&f.getPanes().click(function(){f.next()});if(!f.getConf().rotate){var m=c.disabledClass;f.getIndex()||k.addClass(m),f.onBeforeClick(function(a,b){k.toggleClass(m,!b),j.toggleClass(m,b==f.getTabs().length-1)})}}var b;b=a.tools.tabs.slideshow={conf:{next:".forward",prev:".backward",disabledClass:"disabled",autoplay:!1,autopause:!0,interval:3e3,clickable:!0,api:!1}},a.fn.slideshow=function(d){var e=this.data("slideshow");return e?e:(d=a.extend({},b.conf,d),this.each(function(){e=new c(a(this),d),a(this).data("slideshow",e)}),d.api?e:this)}}(jQuery),function(a){function c(){if(a.browser.msie){var b=a(document).height(),c=a(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,b-c<20?c:b]}return[a(document).width(),a(document).height()]}function d(b){if(b)return b.call(a.mask)}a.tools=a.tools||{version:"1.2.6"};var b;b=a.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:!0,closeOnEsc:!0,zIndex:9998,opacity:.8,startOpacity:0,color:"#fff",onLoad:null,onClose:null}};var e,f,g,h,i;a.mask={load:function(j,k){if(g)return this;typeof j=="string"&&(j={color:j}),j=j||h,h=j=a.extend(a.extend({},b.conf),j),e=a("#"+j.maskId),e.length||(e=a("<div/>").attr("id",j.maskId),a("body").append(e));var l=c();return e.css({position:"absolute",top:0,left:0,width:l[0],height:l[1],display:"none",opacity:j.startOpacity,zIndex:j.zIndex}),j.color&&e.css("backgroundColor",j.color),d(j.onBeforeLoad)===!1?this:(j.closeOnEsc&&a(document).bind("keydown.mask",function(b){b.keyCode==27&&a.mask.close(b)}),j.closeOnClick&&e.bind("click.mask",function(b){a.mask.close(b)}),a(window).bind("resize.mask",function(){a.mask.fit()}),k&&k.length&&(i=k.eq(0).css("zIndex"),a.each(k,function(){var b=a(this);/relative|absolute|fixed/i.test(b.css("position"))||b.css("position","relative")}),f=k.css({zIndex:Math.max(j.zIndex+1,i=="auto"?0:i)})),e.css({display:"block"}).fadeTo(j.loadSpeed,j.opacity,function(){a.mask.fit(),d(j.onLoad),g="full"}),g=!0,this)},close:function(){if(g){if(d(h.onBeforeClose)===!1)return this;e.fadeOut(h.closeSpeed,function(){d(h.onClose),f&&f.css({zIndex:i}),g=!1}),a(document).unbind("keydown.mask"),e.unbind("click.mask"),a(window).unbind("resize.mask")}return this},fit:function(){if(g){var a=c();e.css({width:a[0],height:a[1]})}},getMask:function(){return e},isLoaded:function(a){return a?g=="full":g},getConf:function(){return h},getExposed:function(){return f}},a.fn.mask=function(b){return a.mask.load(b),this},a.fn.expose=function(b){return a.mask.load(b,this),this}}(jQuery),function(){function f(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function g(a,b){var c=[];for(var d in a)a.hasOwnProperty(d)&&(c[d]=b(a[d]));return c}function j(c,d,e){if(h.isSupported(d.version))c.innerHTML=h.getHTML(d,e);else if(d.expressInstall&&h.isSupported([6,65]))c.innerHTML=h.getHTML(f(d,{src:d.expressInstall}),{MMredirectURL:location.href,MMplayerType:"PlugIn",MMdoctitle:document.title});else{c.innerHTML.replace(/\s/g,"")||(c.innerHTML="<h2>Flash version "+d.version+" or greater is required</h2>"+"<h3>"+(i[0]>0?"Your version is "+i:"You have no flash plugin installed")+"</h3>"+(c.tagName=="A"?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='"+b+"'>here</a></p>"),c.tagName=="A"&&(c.onclick=function(){location.href=b}));if(d.onFail){var g=d.onFail.call(this);typeof g=="string"&&(c.innerHTML=g)}}a&&(window[d.id]=document.getElementById(d.id)),f(this,{getRoot:function(){return c},getOptions:function(){return d},getConf:function(){return e},getApi:function(){return c.firstChild}})}var a=document.all,b="http://www.adobe.com/go/getflashplayer",c=typeof jQuery=="function",d=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,e={width:"100%",height:"100%",id:"_"+(""+Math.random()).slice(9),allowfullscreen:!0,allowscriptaccess:"always",quality:"high",version:[3,0],onFail:null,expressInstall:null,w3c:!1,cachebusting:!1};window.attachEvent&&window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){},__flash_savedUnloadHandler=function(){}}),window.flashembed=function(a,b,c){typeof a=="string"&&(a=document.getElementById(a.replace("#","")));if(!a)return;return typeof b=="string"&&(b={src:b}),new j(a,f(f({},e),b),c)};var h=f(window.flashembed,{conf:e,getVersion:function(){var a,b;try{b=navigator.plugins["Shockwave Flash"].description.slice(16)}catch(c){try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),b=a&&a.GetVariable("$version")}catch(e){try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),b=a&&a.GetVariable("$version")}catch(f){}}}return b=d.exec(b),b?[b[1],b[3]]:[0,0]},asString:function(a){if(a===null||a===undefined)return null;var b=typeof a;b=="object"&&a.push&&(b="array");switch(b){case"string":return a=a.replace(new RegExp('(["\\\\])',"g"),"\\$1"),a=a.replace(/^\s?(\d+\.?\d*)%/,"$1pct"),'"'+a+'"';case"array":return"["+g(a,function(a){return h.asString(a)}).join(",")+"]";case"function":return'"function()"';case"object":var c=[];for(var d in a)a.hasOwnProperty(d)&&c.push('"'+d+'":'+h.asString(a[d]));return"{"+c.join(",")+"}"}return String(a).replace(/\s/g," ").replace(/\'/g,'"')},getHTML:function(b,c){b=f({},b);var d='<object width="'+b.width+'" height="'+b.height+'" id="'+b.id+'" name="'+b.id+'"';b.cachebusting&&(b.src+=(b.src.indexOf("?")!=-1?"&":"?")+Math.random()),b.w3c||!a?d+=' data="'+b.src+'" type="application/x-shockwave-flash"':d+=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',d+=">";if(b.w3c||a)d+='<param name="movie" value="'+b.src+'" />';b.width=b.height=b.id=b.w3c=b.src=null,b.onFail=b.version=b.expressInstall=null;for(var e in b)b[e]&&(d+='<param name="'+e+'" value="'+b[e]+'" />');var g="";if(c){for(var i in c)if(c[i]){var j=c[i];g+=i+"="+encodeURIComponent(/function|object/.test(typeof j)?h.asString(j):j)+"&"}g=g.slice(0,-1),d+='<param name="flashvars" value=\''+g+"' />"}return d+="</object>",d},isSupported:function(a){return i[0]>a[0]||i[0]==a[0]&&i[1]>=a[1]}}),i=h.getVersion();c&&(jQuery.tools=jQuery.tools||{version:"1.2.6"},jQuery.tools.flashembed={conf:e},jQuery.fn.flashembed=function(a,b){return this.each
(function(){jQuery(this).data("flashembed",flashembed(this,a,b))})})}(),function(a){function f(a){if(a){var b=c.contentWindow.document;b.open().close(),b.location.hash=a}}var b,c,d,e;a.tools=a.tools||{version:"1.2.6"},a.tools.history={init:function(g){if(e)return;a.browser.msie&&a.browser.version<"8"?c||(c=a("<iframe/>").attr("src","javascript:false;").hide().get(0),a("body").prepend(c),setInterval(function(){var d=c.contentWindow.document,e=d.location.hash;b!==e&&a(window).trigger("hash",e)},100),f(location.hash||"#")):setInterval(function(){var c=location.hash;c!==b&&a(window).trigger("hash",c)},100),d=d?d.add(g):g,g.click(function(b){var d=a(this).attr("href");c&&f(d);if(d.slice(0,1)!="#")return location.href="#"+d,b.preventDefault()}),e=!0}},a(window).bind("hash",function(c,e){e?d.filter(function(){var b=a(this).attr("href");return b==e||b==e.replace("#","")}).trigger("history",[e]):d.eq(0).trigger("history",[e]),b=e}),a.fn.history=function(b){return a.tools.history.init(this),this.bind("history",b)}}(jQuery),function(a){function c(b){switch(b.type){case"mousemove":return a.extend(b.data,{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY});case"DOMMouseScroll":a.extend(b,b.data),b.delta=-b.detail/3;break;case"mousewheel":b.delta=b.wheelDelta/120}return b.type="wheel",a.event.handle.call(this,b,b.delta)}a.fn.mousewheel=function(a){return this[a?"bind":"trigger"]("wheel",a)},a.event.special.wheel={setup:function(){a.event.add(this,b,c,{})},teardown:function(){a.event.remove(this,b,c)}};var b=a.browser.mozilla?"DOMMouseScroll"+(a.browser.version<"1.9"?" mousemove":""):"mousewheel"}(jQuery),function(a){function c(b,c,d){var e=d.relative?b.position().top:b.offset().top,f=d.relative?b.position().left:b.offset().left,g=d.position[0];e-=c.outerHeight()-d.offset[0],f+=b.outerWidth()+d.offset[1],/iPad/i.test(navigator.userAgent)&&(e-=a(window).scrollTop());var h=c.outerHeight()+b.outerHeight();g=="center"&&(e+=h/2),g=="bottom"&&(e+=h),g=d.position[1];var i=c.outerWidth()+b.outerWidth();return g=="center"&&(f-=i/2),g=="left"&&(f-=i),{top:e,left:f}}function d(d,e){var f=this,g=d.add(f),h,i=0,j=0,k=d.attr("title"),l=d.attr("data-tooltip"),m=b[e.effect],n,o=d.is(":input"),p=o&&d.is(":checkbox, :radio, select, :button, :submit"),q=d.attr("type"),r=e.events[q]||e.events[o?p?"widget":"input":"def"];if(!m)throw'Nonexistent effect "'+e.effect+'"';r=r.split(/,\s*/);if(r.length!=2)throw"Tooltip: bad events configuration for "+q;d.bind(r[0],function(a){clearTimeout(i),e.predelay?j=setTimeout(function(){f.show(a)},e.predelay):f.show(a)}).bind(r[1],function(a){clearTimeout(j),e.delay?i=setTimeout(function(){f.hide(a)},e.delay):f.hide(a)}),k&&e.cancelDefault&&(d.removeAttr("title"),d.data("title",k)),a.extend(f,{show:function(b){if(!h){l?h=a(l):e.tip?h=a(e.tip).eq(0):k?h=a(e.layout).addClass(e.tipClass).appendTo(document.body).hide().append(k):(h=d.next(),h.length||(h=d.parent().next()));if(!h.length)throw"Cannot find tooltip for "+d}if(f.isShown())return f;h.stop(!0,!0);var o=c(d,h,e);e.tip&&h.html(d.data("title")),b=a.Event(),b.type="onBeforeShow",g.trigger(b,[o]);if(b.isDefaultPrevented())return f;o=c(d,h,e),h.css({position:"absolute",top:o.top,left:o.left}),n=!0,m[0].call(f,function(){b.type="onShow",n="full",g.trigger(b)});var p=e.events.tooltip.split(/,\s*/);return h.data("__set")||(h.unbind(p[0]).bind(p[0],function(){clearTimeout(i),clearTimeout(j)}),p[1]&&!d.is("input:not(:checkbox, :radio), textarea")&&h.unbind(p[1]).bind(p[1],function(a){a.relatedTarget!=d[0]&&d.trigger(r[1].split(" ")[0])}),e.tip||h.data("__set",!0)),f},hide:function(c){if(!h||!f.isShown())return f;c=a.Event(),c.type="onBeforeHide",g.trigger(c);if(c.isDefaultPrevented())return;return n=!1,b[e.effect][1].call(f,function(){c.type="onHide",g.trigger(c)}),f},isShown:function(a){return a?n=="full":n},getConf:function(){return e},getTip:function(){return h},getTrigger:function(){return d}}),a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){return b&&a(f).bind(c,b),f}})}a.tools=a.tools||{version:"1.2.6"},a.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,c,d){b[a]=[c,d]}};var b={toggle:[function(a){var b=this.getConf(),c=this.getTip(),d=b.opacity;d<1&&c.css({opacity:d}),c.show(),a.call()},function(a){this.getTip().hide(),a.call()}],fade:[function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeTo(c.fadeInSpeed,c.opacity,b):(this.getTip().show(),b())},function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeOut(c.fadeOutSpeed,b):(this.getTip().hide(),b())}]};a.fn.tooltip=function(b){var c=this.data("tooltip");return c?c:(b=a.extend(!0,{},a.tools.tooltip.conf,b),typeof b.position=="string"&&(b.position=b.position.split(/,?\s/)),this.each(function(){c=new d(a(this),b),a(this).data("tooltip",c)}),b.api?c:this)}}(jQuery),function(a){function c(b){var c=a(window),d=c.width()+c.scrollLeft(),e=c.height()+c.scrollTop();return[b.offset().top<=c.scrollTop(),d<=b.offset().left+b.width(),e<=b.offset().top+b.height(),c.scrollLeft()>=b.offset().left]}function d(a){var b=a.length;while(b--)if(a[b])return!1;return!0}var b=a.tools.tooltip;b.dynamic={conf:{classNames:"top right bottom left"}},a.fn.dynamic=function(e){typeof e=="number"&&(e={speed:e}),e=a.extend({},b.dynamic.conf,e);var f=a.extend(!0,{},e),g=e.classNames.split(/\s/),h;return this.each(function(){var b=a(this).tooltip().onBeforeShow(function(b,e){var i=this.getTip(),j=this.getConf();h||(h=[j.position[0],j.position[1],j.offset[0],j.offset[1],a.extend({},j)]),a.extend(j,h[4]),j.position=[h[0],h[1]],j.offset=[h[2],h[3]],i.css({visibility:"hidden",position:"absolute",top:e.top,left:e.left}).show();var k=a.extend(!0,{},f),l=c(i);if(!d(l)){l[2]&&(a.extend(j,k.top),j.position[0]="top",i.addClass(g[0])),l[3]&&(a.extend(j,k.right),j.position[1]="right",i.addClass(g[1])),l[0]&&(a.extend(j,k.bottom),j.position[0]="bottom",i.addClass(g[2])),l[1]&&(a.extend(j,k.left),j.position[1]="left",i.addClass(g[3]));if(l[0]||l[2])j.offset[0]*=-1;if(l[1]||l[3])j.offset[1]*=-1}i.css({visibility:"visible"}).hide()});b.onBeforeShow(function(){var a=this.getConf(),b=this.getTip();setTimeout(function(){a.position=[h[0],h[1]],a.offset=[h[2],h[3]]},0)}),b.onHide(function(){var a=this.getTip();a.removeClass(e.classNames)}),ret=b}),e.api?ret:this}}(jQuery),function(a){var b=a.tools.tooltip;a.extend(b.conf,{direction:"up",bounce:!1,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!a.browser.msie});var c={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};b.addEffect("slide",function(a){var b=this.getConf(),d=this.getTip(),e=b.slideFade?{opacity:b.opacity}:{},f=c[b.direction]||c.up;e[f[1]]=f[0]+"="+b.slideOffset,b.slideFade&&d.css({opacity:0}),d.show().animate(e,b.slideInSpeed,a)},function(b){var d=this.getConf(),e=d.slideOffset,f=d.slideFade?{opacity:0}:{},g=c[d.direction]||c.up,h=""+g[0];d.bounce&&(h=h=="+"?"-":"+"),f[g[1]]=h+"="+e,this.getTip().animate(f,d.slideOutSpeed,function(){a(this).hide(),b.call()})})}(jQuery),function(a){function h(b,c,d){var e=b.offset().top,f=b.offset().left,g=d.position.split(/,?\s+/),h=g[0],i=g[1];e-=c.outerHeight()-d.offset[0],f+=b.outerWidth()+d.offset[1],/iPad/i.test(navigator.userAgent)&&(e-=a(window).scrollTop());var j=c.outerHeight()+b.outerHeight();h=="center"&&(e+=j/2),h=="bottom"&&(e+=j);var k=b.outerWidth();return i=="center"&&(f-=(k+c.outerWidth())/2),i=="left"&&(f-=k),{top:e,left:f}}function i(a){function b(){return this.getAttribute("type")==a}return b.key="[type="+a+"]",b}function l(b,c,e){function l(b,c,d){if(!e.grouped&&b.length)return;var f;if(d===!1||a.isArray(d)){f=g.messages[c.key||c]||g.messages["*"],f=f[e.lang]||g.messages["*"].en;var h=f.match(/\$\d/g);h&&a.isArray(d)&&a.each(h,function(a){f=f.replace(this,d[a])})}else f=d[e.lang]||d;b.push(f)}var f=this,i=c.add(f);b=b.not(":button, :image, :reset, :submit"),c.attr("novalidate","novalidate"),a.extend(f,{getConf:function(){return e},getForm:function(){return c},getInputs:function(){return b},reflow:function(){return b.each(function(){var b=a(this),c=b.data("msg.el");if(c){var d=h(b,c,e);c.css({top:d.top,left:d.left})}}),f},invalidate:function(c,d){if(!d){var g=[];a.each(c,function(a,c){var d=b.filter("[name='"+a+"']");d.length&&(d.trigger("OI",[c]),g.push({input:d,messages:[c]}))}),c=g,d=a.Event()}return d.type="onFail",i.trigger(d,[c]),d.isDefaultPrevented()||k[e.effect][0].call(f,c,d),f},reset:function(c){return c=c||b,c.removeClass(e.errorClass).each(function(){var b=a(this).data("msg.el");b&&(b.remove(),a(this).data("msg.el",null))}).unbind(e.errorInputEvent||""),f},destroy:function(){return c.unbind(e.formEvent+".V").unbind("reset.V"),b.unbind(e.inputEvent+".V").unbind("change.V"),f.reset()},checkValidity:function(c,g){c=c||b,c=c.not(":disabled");if(!c.length)return!0;g=g||a.Event(),g.type="onBeforeValidate",i.trigger(g,[c]);if(g.isDefaultPrevented())return g.result;var h=[];c.not(":radio:not(:checked)").each(function(){var b=[],c=a(this).data("messages",b),k=d&&c.is(":date")?"onHide.v":e.errorInputEvent+".v";c.unbind(k),a.each(j,function(){var a=this,d=a[0];if(c.filter(d).length){var h=a[1].call(f,c,c.val());if(h!==!0){g.type="onBeforeFail",i.trigger(g,[c,d]);if(g.isDefaultPrevented())return!1;var j=c.attr(e.messageAttr);if(j)return b=[j],!1;l(b,d,h)}}}),b.length&&(h.push({input:c,messages:b}),c.trigger("OI",[b]),e.errorInputEvent&&c.bind(k,function(a){f.checkValidity(c,a)}));if(e.singleError&&h.length)return!1});var m=k[e.effect];if(!m)throw'Validator: cannot find effect "'+e.effect+'"';return h.length?(f.invalidate(h,g),!1):(m[1].call(f,c,g),g.type="onSuccess",i.trigger(g,[c]),c.unbind(e.errorInputEvent+".v"),!0)}}),a.each("onBeforeValidate,onBeforeFail,onFail,onSuccess".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){return b&&a(f).bind(c,b),f}}),e.formEvent&&c.bind(e.formEvent+".V",function(a){if(!f.checkValidity(null,a))return a.preventDefault();a.target=c,a.type=e.formEvent}),c.bind("reset.V",function(){f.reset()}),b[0]&&b[0].validity&&b.each(function(){this.oninvalid=function(){return!1}}),c[0]&&(c[0].checkValidity=f.checkValidity),e.inputEvent&&b.bind(e.inputEvent+".V",function(b){f.checkValidity(a(this),b)}),b.filter(":checkbox, select").filter("[required]").bind("change.V",function(b){var c=a(this);(this.checked||c.is("select")&&a(this).val())&&k[e.effect][1].call(f,c,b)});var m=b.filter(":radio").change(function(a){f.checkValidity(m,a)});a(window).resize(function(){f.reflow()})}a.tools=a.tools||{version:"1.2.6"};var b=/\[type=([a-z]+)\]/,c=/^-?[0-9]*(\.[0-9]+)?$/,d=a.tools.dateinput,e=/^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,f=/^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#&+_\?\/\w \.\-=]*$/i,g;g=a.tools.validator={conf:{grouped:!1,effect:"default",errorClass:"invalid",inputEvent:null,errorInputEvent:"keyup",formEvent:"submit",lang:"en",message:"<div/>",messageAttr:"data-message",messageClass:"error",offset:[0,0],position:"center right",singleError:!1,speed:"normal"},messages:{"*":{en:"Please correct this value"}},localize:function(b,c){a.each(c,function(a,c){g.messages[a]=g.messages[a]||{},g.messages[a][b]=c})},localizeFn:function(b,c){g.messages[b]=g.messages[b]||{},a.extend(g.messages[b],c)},fn:function(c,d,e){a.isFunction(d)?e=d:(typeof d=="string"&&(d={en:d}),this.messages[c.key||c]=d);var f=b.exec(c);f&&(c=i(f[1])),j.push([c,e])},addEffect:function(a,b,c){k[a]=[b,c]}};var j=[],k={"default":[function(b){var c=this.getConf();a.each(b,function(b,d){var e=d.input;e.addClass(c.errorClass);var f=e.data("msg.el");f||(f=a(c.message).addClass(c.messageClass).appendTo(document.body),e.data("msg.el",f)),f.css({visibility:"hidden"}).find("p").remove(),a.each(d.messages,function(b,c){a("<p/>").html(c).appendTo(f)}),f.outerWidth()==f.parent().width()&&f.add(f.find("p")).css({display:"inline"});var g=h(e,f,c);f.css({visibility:"visible",position:"absolute",top:g.top,left:g.left}).fadeIn(c.speed)})},function(b){var c=this.getConf();b.removeClass(c.errorClass).each(function(){var b=a(this).data("msg.el");b&&b.css({visibility:"hidden"})})}]};a.each("email,url,number".split(","),function(b,c){a.expr[":"][c]=function(a){return a.getAttribute("type")===c}}),a.fn.oninvalid=function(a){return this[a?"bind":"trigger"]("OI",a)},g.fn(":email","Please enter a valid email address",function(a,b){return!b||e.test(b)}),g.fn(":url","Please enter a valid URL",function(a,b){return!b||f.test(b)}),g.fn(":number","Please enter a numeric value.",function(a,b){return c.test(b)}),g.fn("[max]","Please enter a value no larger than $1",function(a,b){if(b===""||d&&a.is(":date"))return!0;var c=a.attr("max");return parseFloat(b)<=parseFloat(c)?!0:[c]}),g.fn("[min]","Please enter a value of at least $1",function(a,b){if(b===""||d&&a.is(":date"))return!0;var c=a.attr("min");return parseFloat(b)>=parseFloat(c)?!0:[c]}),g.fn("[required]","Please complete this mandatory field.",function(a,b){return a.is(":checkbox")?a.is(":checked"):!!b}),g.fn("[pattern]",function(a){var b=new RegExp("^"+a.attr("pattern")+"$");return b.test(a.val())}),a.fn.validator=function(b){var c=this.data("validator");return c&&(c.destroy(),this.removeData("validator")),b=a.extend(!0,{},g.conf,b),this.is("form")?this.each(function(){var d=a(this);c=new l(d.find(":input"),d,b),d.data("validator",c)}):(c=new l(this,this.eq(0).closest("form"),b),this.data("validator",c))}}(jQuery);

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

/*-------------------------------------------------------------------- 
 * JQuery Plugin: "EqualHeights"
 * by:	Scott Jehl, Todd Parker, Maggie Costello Wachs (http://www.filamentgroup.com)
 *
 * Copyright (c) 2008 Filament Group
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-license.php)
 *
 * Description: Compares the heights or widths of the top-level children of a provided element 
 		and sets their min-height to the tallest height (or width to widest width). Sets in em units 
 		by default if pxToEm() method is available.
 * Dependencies: jQuery library, pxToEm method	(article: 
		http://www.filamentgroup.com/lab/retaining_scalable_interfaces_with_pixel_to_em_conversion/)							  
 * Usage Example: $(element).equalHeights();
  		Optional: to set min-height in px, pass a true argument: $(element).equalHeights(true);
 * Version: 2.0, 08.01.2008
--------------------------------------------------------------------*/
(function ($) { // this is a wrapper for Drupal to swap $ functions for jQuery safe-execution
$.fn.equalHeights = function(px) {
	$(this).each(function(){
		var currentTallest = 0;
		$(this).children().each(function(i){
			if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
		});
		//if (!px || !Number.prototype.pxToEm) currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
		// for ie6, set height since min-height isn't supported
		if ($.browser.msie && $.browser.version == 6.0) { $(this).children().css({'height': currentTallest}); }
		$(this).children().css({'min-height': currentTallest}); 
	});
	return this;
};

})(jQuery);;
// Thu Mar 21 09:57:02 2013
// gwu_main/js/script.js

var slideID;

function slideSwitch() {
  var $active = jQuery('div.hero-container img.selected');
  var $activeCaption = jQuery('div.hero-container ul.captions li.selected');
  var $activeRollover = jQuery('div.hero-container ul.menu li.selected');

  if ($active.length == 0) $active = jQuery('div.hero-container img:last');
  if ($activeCaption.length == 0) $activeCaption = jQuery('div.hero-container ul.captions li:first');
  if ($activeRollover == 0) $activeRollover = jQuery('div.hero-container ul.menu li:first');

  var $next = $active.next().length ? $active.next() : jQuery('div.hero-container img:first');
  var $nextCaption = $activeCaption.next().length ? $activeCaption.next() : jQuery('div.hero-container ul.captions li:first');

  if (jQuery('div.hero-container ul.captions').is(":hidden") && (jQuery.trim($nextCaption.html()) !== "")) {
      //$('div.hero-container ul.captions').fadeIn();
      jQuery('div.hero-container ul.captions').show();
    }

  if (jQuery.trim($nextCaption.html()) == "") {
      //$('div.hero-container ul.captions').fadeOut();
      jQuery('div.hero-container ul.captions').hide();
    }

  var $nextRollover = $activeRollover.next().length ? $activeRollover.next() : jQuery('div.hero-container ul.menu li:first');

    $active.addClass('selected');
    jQuery('div.hero-container ul.captions li').hide();

  $active.removeClass('selected');
  $next.addClass('selected');
  $activeCaption.removeClass('selected');
  $nextCaption.addClass('selected').show();
  $activeRollover.removeClass('selected');
  $nextRollover.addClass('selected')
}

function startSlideShow() {
  slideID = setInterval("slideSwitch()", 0);
}

function pauseSlideShow() {
    clearInterval(slideID);
}

(function($) { // this is a wrapper for Drupal to swap $ functions for jQuery safe-execution
  $(document).ready(function() {

//prep scrollable, part of jQuery Tools
  $(".scrollable").scrollable();
  $("#browsable").navigator().height($("#browsable .items").height());;

   //prep circular- scrollable, part of jQuery Tools
    $(".scrollable-circular").scrollable({
      circular: true
    });

// Responsive slider for large main hero
$('.responsive-slider').carouFredSel({
      responsive: true,
      auto: 11000,
      debug: false,
      pagination: {
        container: ".navi"
      },
        items: {
        height: "44%",
          visable: 1
          },
          scroll: {
            duration: 500,
        pauseOnHover: true
          }
        });


// Responsive slider for large main hero
// $('.responsive-slider').carouFredSel({
//       responsive: true,
//       auto: {
//           timeoutDuration: 500,
//           delay: 20000,
//         },
//       debug: false,
//       pagination: {
//       container: ".navi"
//       },
//       items: {
//       height: "44%",
//       visable: 1
//       },
//       scroll: {
//       duration: 500,
//       pauseOnHover: true
//       }
//   });

//give elements max height of tallest child
  $('div.summary-container').equalHeights();
  $('div.selector-links div.link-container').equalHeights();
  $('div.rotating-sidebar div.items').equalHeights();

//search clear and replace
  $('#search input').focus(
    function() {
    search_value = $(this).attr('value');
      $(this).attr('value', '');
  }).blur(
    function() {
      if ($(this).val() == "") $(this).attr('value', '' + search_value + '');
  });

//featured carousel
    $('div.featured-carousel div.slide:not(selected)').click(function() {
    //$(this).siblings('.selected').removeClass('selected');
    $('div.slide-container').find('div.slide.selected').removeClass('selected');
    $(this).addClass('selected');
      var slide_clicked = $(this).index() + 1;
      var set_clicked = $(this).parent().index() + 1;
    $('div.summary-container .summary.selected').removeClass('selected');
      $('div.summary-container .summary:nth-child(' + (((set_clicked - 1) * 3) + slide_clicked) + ')').addClass('selected');
  });


//featured spotlight- stacked
  $(function() {
    $(".tabs").tabs(".items > div");
  $(".tabs .tab:first a").addClass("lasttab");
  $(".tabs .tab").mousedown(function() {
    if ($(this).find('a').hasClass("lasttab")) {
      window.location.href = $(this).find('a').attr('href');
    }
  $(".tabs .lasttab").removeClass("lasttab");
  $(this).find("a").addClass("lasttab");
  });
});

//Add class to featured icons on hover
$('.featured-icons li').hover(

    function() {
      $(this).addClass('hover')
    }, function() {
      $(this).removeClass('hover')
    });

//selector links
    $('div.selector-links select').change(function() {
      var option_clicked = $(this).children(':selected').index() + 1;
    $(this).next().children('ul:visible').removeClass('selected');
      $(this).next().children('ul:nth-child(' + option_clicked + ')').addClass('selected');
  });

//local header
    $('div.hero-container ul.menu li:not(.selected)').live("mouseenter", function() {
    pauseSlideShow();
      var menu_hovered = $(this).index() + 1;

    //reset the menu
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    //set the image
      $(this).parent().siblings('div.images').children(':visible').removeClass('selected').siblings(':nth-child(' + menu_hovered + ')').addClass('selected');

    //set the caption
    //$(this).parent().siblings('ul.captions').children(':visible').removeClass('selected').siblings(':nth-child('+menu_hovered+')').addClass('selected');
      $(this).parent().siblings('ul.captions').children(':visible').removeClass('selected').hide().siblings(':nth-child(' + menu_hovered + ')').addClass('selected').show();
  });
    $('div.hero-container ul.menu').live("mouseleave", function() {
    startSlideShow();
  });

  startSlideShow();


//Change viewport for mobile
  function viewport() {
        if ($(window).width() < 540) {
          $('meta[name=viewport]').attr('content','width=device-width, initial-scale=1.0, minimum-scale=1.0');
      }
    }
    viewport();

//detects window size and adds a body class
    function menuHide() {
      if ($(window).width() > 540) {
        $("body").addClass("non-mobile");
        $("#menu-down").addClass('hide');
        $('#header .logo a').attr('href', 'http://www.gwu.edu');
      } else {
        $("body").removeClass("non-mobile");
        $('#header .logo a').attr('href', '#');
    }
  }

  // Triggers when document first loads
    menuHide();
    $(window).bind("resize", function() {
    menuHide();
  });

  //Mobile Menu
    $('#mobile-nav').click(function() {
    $('#menu-wrapper').slideToggle();
  });

  //Desktop Menu
    $('#menu-top').click(function() {
    $('#menu-down').slideToggle('slow');
  });

  //Add Active Menu class to parent of dropdown hover list
  $("#menu-down li").mouseenter(

    function() {
        var cl = $(this).attr('class').split(' ');
        var cllast = cl.pop();
      $("#menu-top li." + cllast).addClass('active-item');
      }).mouseleave(

    function() {
          var cl = $(this).attr('class').split(' ');
          var cllast = cl.pop();
          $("#menu-top li."+cllast).removeClass('active-item');
      }
  );

});

// Program finder detail buttons
$(document).ready(function() {
    $('div.view-content ul.content li div ul li:nth-child(even)').css({backgroundColor: '#DDDDDD'});
        // Program Finder list
            if($.browser.msie === true && parseInt($.browser.version, 10) < 7) {}
            else {
              $path_name = window.location.pathname;
              if($path_name.toLowerCase().indexOf('all-undergraduate-programs') >= 0 || $path_name.toLowerCase().indexOf('all-graduate-programs') >= 0 ){
          $('#page').before('<style type="text/css" media="all">.views-submit-button input[type="submit"]{margin:0 65px !important;} .views-reset-button input[type="submit"]{display: none;}</style>');
              }

              $('#views-exposed-form-gw-undergraduate-search-panel-pane-1').before('<div class="views-widget"><a class="fieldset-title">Refine your list</div></div>');
              $('#views-exposed-form-gw-graduate-search-panel-pane-1').before('<div class="views-widget"><a class="fieldset-title">Refine your list</div></div>');

                $('div.program-item').each(function(i){
                    $(this)
                        .append('<a href="" class="jsQuickViewOpen">Quick View</a><a href="" class="jsQuickViewClose">Close</a>')
                        .find('a.jsQuickViewOpen')
                            .click(function(){
                                $(this)
                                    .parent()
                                    .find('div.more')
                                    .slideDown(function(){
                                        $(this)
                                            .parent()
                                            .find('a.jsQuickViewClose')
                                            .show();
                                    })
                                    .end()
                                    .end()
                                    .hide();
                                return false;
                            })
                        .end()
                        .find('a.jsQuickViewClose')
                            .click(function(){
                                $(this)
                                    .parent()
                                    .find('div.more')
                                    .slideUp(function(){
                                        $(this)
                                            .parent()
                                            .find('a.jsQuickViewOpen')
                                            .show();
                                    })
                                    .end()
                                    .end()
                                    .hide();
                                return false;
                            })
                        .end()
                        .find('div.more')
                        .hide();
                });

                $('div.program-detail-body').each(function(i){
                    $(this)
                        .append('<a href="" class="jsQuickViewOpen">View More</a><a href="" class="jsQuickViewClose">Close</a>')
                        .find('a.jsQuickViewOpen')
                            .click(function(){
                                $(this)
                                    .parent()
                                    .find('div.more')
                                    .slideDown(function(){
                                        $(this)
                                            .parent()
                                            .find('a.jsQuickViewClose')
                                            .show();
                                    })
                                    .end()
                                    .end()
                                    .hide();
                                return false;
                            })
                        .end()
                        .find('a.jsQuickViewClose')
                            .click(function(){
                                $(this)
                                    .parent()
                                    .find('div.more')
                                    .slideUp(function(){
                                        $(this)
                                            .parent()
                                            .find('a.jsQuickViewOpen')
                                            .show();
                                    })
                                    .end()
                                    .end()
                                    .hide();
                                return false;
                            })
                        .end()
                        .find('div.more')
                        .hide();
                });

            }
});


})(jQuery);
;
(function ($) { // this is a wrapper for Drupal to swap $ functions for jQuery safe-execution
$(document).ready(function(){
	

					
});

})(jQuery);



















;
/*	
 *	jQuery carouFredSel 5.6.4
 *	Demo's and documentation:
 *	caroufredsel.frebsite.nl
 *	
 *	Copyright (c) 2012 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(H($){8($.1P.1J)J;$.1P.1J=H(y,z){8(1g.V==0){1e(N,\'5s 4q 6u 1m "\'+1g.3U+\'".\');J 1g}8(1g.V>1){J 1g.1K(H(){$(1g).1J(y,z)})}F A=1g,$19=1g[0];8(A.1r(\'4r\')){F B=A.1D(\'34\',\'3w\');A.X(\'34\',[\'5t\',[N]])}Q{F B=O}A.3V=H(o,b,c){o=3W($19,o);F e=[\'G\',\'1n\',\'T\',\'17\',\'1a\',\'1b\'];1m(F a=0,l=e.V;a<l;a++){o[e[a]]=3W($19,o[e[a]])}8(K o.1n==\'13\'){8(o.1n<=50)o.1n={\'G\':o.1n};Q o.1n={\'1j\':o.1n}}Q{8(K o.1n==\'1k\')o.1n={\'1G\':o.1n}}8(K o.G==\'13\')o.G={\'P\':o.G};Q 8(o.G==\'1d\')o.G={\'P\':o.G,\'S\':o.G,\'1l\':o.G};8(K o.G!=\'1o\')o.G={};8(b)2u=$.25(N,{},$.1P.1J.4s,o);7=$.25(N,{},$.1P.1J.4s,o);8(K 7.G.12!=\'1o\')7.G.12={};8(7.G.2J==0&&K c==\'13\'){7.G.2J=c}C.4t=(7.2K);C.2k=(7.2k==\'4u\'||7.2k==\'1t\')?\'1a\':\'17\';F f=[[\'S\',\'35\',\'26\',\'1l\',\'5u\',\'2L\',\'1t\',\'2M\',\'1E\',0,1,2,3],[\'1l\',\'5u\',\'2L\',\'S\',\'35\',\'26\',\'2M\',\'1t\',\'3X\',3,2,1,0]];F g=f[0].V,5v=(7.2k==\'2N\'||7.2k==\'1t\')?0:1;7.d={};1m(F d=0;d<g;d++){7.d[f[0][d]]=f[5v][d]}F h=A.11();1x(K 7.G.P){W\'1o\':7.G.12.2O=7.G.P.2O;7.G.12.27=7.G.P.27;7.G.P=O;18;W\'1k\':8(7.G.P==\'1d\'){7.G.12.1d=N}Q{7.G.12.2l=7.G.P}7.G.P=O;18;W\'H\':7.G.12.2l=7.G.P;7.G.P=O;18}8(K 7.G.1v==\'1y\'){7.G.1v=(h.1v(\':2P\').V>0)?\':P\':\'*\'}8(7[7.d[\'S\']]==\'T\'){7[7.d[\'S\']]=3x(h,7,\'26\')}8(3Y(7[7.d[\'S\']])&&!7.2K){7[7.d[\'S\']]=3Z(36($1A.3a(),7,\'35\'),7[7.d[\'S\']]);C.4t=N}8(7[7.d[\'1l\']]==\'T\'){7[7.d[\'1l\']]=3x(h,7,\'2L\')}8(!7.G[7.d[\'S\']]){8(7.2K){1e(N,\'5w a \'+7.d[\'S\']+\' 1m 6v G!\');7.G[7.d[\'S\']]=3x(h,7,\'26\')}Q{7.G[7.d[\'S\']]=(4v(h,7,\'26\'))?\'1d\':h[7.d[\'26\']](N)}}8(!7.G[7.d[\'1l\']]){7.G[7.d[\'1l\']]=(4v(h,7,\'2L\'))?\'1d\':h[7.d[\'2L\']](N)}8(!7[7.d[\'1l\']]){7[7.d[\'1l\']]=7.G[7.d[\'1l\']]}8(!7.G.P&&!7.2K){8(7.G[7.d[\'S\']]==\'1d\'){7.G.12.1d=N}8(!7.G.12.1d){8(K 7[7.d[\'S\']]==\'13\'){7.G.P=1L.3y(7[7.d[\'S\']]/7.G[7.d[\'S\']])}Q{F i=36($1A.3a(),7,\'35\');7.G.P=1L.3y(i/7.G[7.d[\'S\']]);7[7.d[\'S\']]=7.G.P*7.G[7.d[\'S\']];8(!7.G.12.2l)7.1B=O}8(7.G.P==\'6w\'||7.G.P<1){1e(N,\'28 a 4w 13 3z P G: 5w 41 "1d".\');7.G.12.1d=N}}}8(!7[7.d[\'S\']]){7[7.d[\'S\']]=\'1d\';8(!7.2K&&7.G.1v==\'*\'&&!7.G.12.1d&&7.G[7.d[\'S\']]!=\'1d\'){7[7.d[\'S\']]=7.G.P*7.G[7.d[\'S\']];7.1B=O}}8(7.G.12.1d){7.3A=(7[7.d[\'S\']]==\'1d\')?36($1A.3a(),7,\'35\'):7[7.d[\'S\']];8(7.1B===O){7[7.d[\'S\']]=\'1d\'}7.G.P=2Q(h,7,0)}Q 8(7.G.1v!=\'*\'){7.G.12.42=7.G.P;7.G.P=3B(h,7,0)}8(K 7.1B==\'1y\'){7.1B=(7[7.d[\'S\']]==\'1d\')?O:\'4x\'}7.G.P=2R(7.G.P,7,7.G.12.2l,$19);7.G.12.2m=7.G.P;7.1u=O;8(7.2K){8(!7.G.12.2O)7.G.12.2O=7.G.P;8(!7.G.12.27)7.G.12.27=7.G.P;7.1B=O;7.1i=[0,0,0,0];F j=$1A.1W(\':P\');8(j)$1A.3b();F k=3Z(36($1A.3a(),7,\'35\'),7[7.d[\'S\']]);8(K 7[7.d[\'S\']]==\'13\'&&k<7[7.d[\'S\']]){k=7[7.d[\'S\']]}8(j)$1A.3c();F m=4y(1L.2v(k/7.G[7.d[\'S\']]),7.G.12);8(m>h.V){m=h.V}F n=1L.3y(k/m),4z=7[7.d[\'1l\']],5x=3Y(4z);h.1K(H(){F a=$(1g),4A=n-5y(a,7,\'6x\');a[7.d[\'S\']](4A);8(5x){a[7.d[\'1l\']](3Z(4A,4z))}});7.G.P=m;7.G[7.d[\'S\']]=n;7[7.d[\'S\']]=m*n}Q{7.1i=5z(7.1i);8(7.1B==\'2M\')7.1B=\'1t\';8(7.1B==\'4B\')7.1B=\'2N\';1x(7.1B){W\'4x\':W\'1t\':W\'2N\':8(7[7.d[\'S\']]!=\'1d\'){F p=43(3d(h,7),7);7.1u=N;7.1i[7.d[1]]=p[1];7.1i[7.d[3]]=p[0]}18;2w:7.1B=O;7.1u=(7.1i[0]==0&&7.1i[1]==0&&7.1i[2]==0&&7.1i[3]==0)?O:N;18}}8(K 7.2n==\'1s\'&&7.2n)7.2n=\'6y\'+A.6z(\'6A\');8(K 7.G.3e!=\'13\')7.G.3e=7.G.P;8(K 7.1n.1j!=\'13\')7.1n.1j=5A;8(K 7.1n.G==\'1y\')7.1n.G=(7.G.12.1d||7.G.1v!=\'*\')?\'P\':7.G.P;7.T=3C($19,7.T,\'T\');7.17=3C($19,7.17);7.1a=3C($19,7.1a);7.1b=3C($19,7.1b,\'1b\');7.T=$.25(N,{},7.1n,7.T);7.17=$.25(N,{},7.1n,7.17);7.1a=$.25(N,{},7.1n,7.1a);7.1b=$.25(N,{},7.1n,7.1b);8(K 7.1b.44!=\'1s\')7.1b.44=O;8(K 7.1b.3f!=\'H\'&&7.1b.3f!==O)7.1b.3f=$.1P.1J.5B;8(K 7.T.1H!=\'1s\')7.T.1H=N;8(K 7.T.4C!=\'13\')7.T.4C=0;8(K 7.T.45==\'1y\')7.T.45=N;8(K 7.T.4D!=\'1s\')7.T.4D=N;8(K 7.T.3g!=\'13\')7.T.3g=(7.T.1j<10)?6B:7.T.1j*5;8(7.29){7.29=4E(7.29)}8(I.1e){1e(I,\'3h S: \'+7.S);1e(I,\'3h 1l: \'+7.1l);8(7.3A)1e(I,\'6C \'+7.d[\'S\']+\': \'+7.3A);1e(I,\'5C 6D: \'+7.G.S);1e(I,\'5C 6E: \'+7.G.1l);1e(I,\'46 3z G P: \'+7.G.P);8(7.T.1H)1e(I,\'46 3z G 4F 6F: \'+7.T.G);8(7.17.Y)1e(I,\'46 3z G 4F 4G: \'+7.17.G);8(7.1a.Y)1e(I,\'46 3z G 4F 5D: \'+7.1a.G)}};A.5E=H(){A.1r(\'4r\',N);F a={\'4H\':A.16(\'4H\'),\'4I\':A.16(\'4I\'),\'3D\':A.16(\'3D\'),\'2M\':A.16(\'2M\'),\'2N\':A.16(\'2N\'),\'4B\':A.16(\'4B\'),\'1t\':A.16(\'1t\'),\'S\':A.16(\'S\'),\'1l\':A.16(\'1l\'),\'4J\':A.16(\'4J\'),\'1E\':A.16(\'1E\'),\'3X\':A.16(\'3X\'),\'4K\':A.16(\'4K\')};1x(a.3D){W\'4L\':F b=\'4L\';18;W\'5F\':F b=\'5F\';18;2w:F b=\'6G\'}$1A.16(a).16({\'6H\':\'2P\',\'3D\':b});A.1r(\'5G\',a).16({\'4H\':\'1t\',\'4I\':\'47\',\'3D\':\'4L\',\'2M\':0,\'1t\':0,\'4J\':0,\'1E\':0,\'3X\':0,\'4K\':0});8(7.1u){A.11().1K(H(){F m=2o($(1g).16(7.d[\'1E\']));8(2p(m))m=0;$(1g).1r(\'1R\',m)})}};A.5H=H(){A.4M();A.14(L(\'4N\',I),H(e,a){e.1h();8(!C.20){8(7.T.Y){7.T.Y.2S(2q(\'48\',I))}}C.20=N;8(7.T.1H){7.T.1H=O;A.X(L(\'2T\',I),a)}J N});A.14(L(\'4O\',I),H(e){e.1h();8(C.1S){3E(R)}J N});A.14(L(\'2T\',I),H(e,a,b){e.1h();1F=3i(1F);8(a&&C.1S){R.20=N;F c=2x()-R.2U;R.1j-=c;8(R.1p)R.1p.1j-=c;8(R.1Q)R.1Q.1j-=c;3E(R,O)}8(!C.1X&&!C.1S){8(b)1F.3F+=2x()-1F.2U}8(!C.1X){8(7.T.Y){7.T.Y.2S(2q(\'5I\',I))}}C.1X=N;8(7.T.5J){F d=7.T.3g-1F.3F,3G=3H-1L.2v(d*3H/7.T.3g);7.T.5J.1z($19,3G,d)}J N});A.14(L(\'1H\',I),H(e,b,c,d){e.1h();1F=3i(1F);F v=[b,c,d],t=[\'1k\',\'13\',\'1s\'],a=2V(v,t);F b=a[0],c=a[1],d=a[2];8(b!=\'17\'&&b!=\'1a\')b=C.2k;8(K c!=\'13\')c=0;8(K d!=\'1s\')d=O;8(d){C.20=O;7.T.1H=N}8(!7.T.1H){e.21();J 1e(I,\'3h 48: 28 2W.\')}8(C.1X){8(7.T.Y){7.T.Y.2y(2q(\'48\',I));7.T.Y.2y(2q(\'5I\',I))}}C.1X=O;1F.2U=2x();F f=7.T.3g+c;3I=f-1F.3F;3G=3H-1L.2v(3I*3H/f);1F.T=6I(H(){8(7.T.5K){7.T.5K.1z($19,3G,3I)}8(C.1S){A.X(L(\'1H\',I),b)}Q{A.X(L(b,I),7.T)}},3I);8(7.T.5L){7.T.5L.1z($19,3G,3I)}J N});A.14(L(\'2X\',I),H(e){e.1h();8(R.20){R.20=O;C.1X=O;C.1S=N;R.2U=2x();2a(R)}Q{A.X(L(\'1H\',I))}J N});A.14(L(\'17\',I)+\' \'+L(\'1a\',I),H(e,b,f,g){e.1h();8(C.20||A.1W(\':2P\')){e.21();J 1e(I,\'3h 48 6J 2P: 28 2W.\')}8(7.G.3e>=M.U){e.21();J 1e(I,\'28 5M G (\'+M.U+\', \'+7.G.3e+\' 5N): 28 2W.\')}F v=[b,f,g],t=[\'1o\',\'13/1k\',\'H\'],a=2V(v,t);F b=a[0],f=a[1],g=a[2];F h=e.4P.1c(I.3j.3J.V);8(K b!=\'1o\'||b==2b)b=7[h];8(K g==\'H\')b.22=g;8(K f!=\'13\'){8(7.G.1v!=\'*\'){f=\'P\'}Q{F i=[f,b.G,7[h].G];1m(F a=0,l=i.V;a<l;a++){8(K i[a]==\'13\'||i[a]==\'5O\'||i[a]==\'P\'){f=i[a];18}}}1x(f){W\'5O\':e.21();J A.1D(h+\'6K\',[b,g]);18;W\'P\':8(!7.G.12.1d&&7.G.1v==\'*\'){f=7.G.P}18}}8(R.20){A.X(L(\'2X\',I));A.X(L(\'3k\',I),[h,[b,f,g]]);e.21();J 1e(I,\'3h 6L 2W.\')}8(b.1j>0){8(C.1S){8(b.3k)A.X(L(\'3k\',I),[h,[b,f,g]]);e.21();J 1e(I,\'3h 6M 2W.\')}}8(b.4Q&&!b.4Q.1z($19)){e.21();J 1e(I,\'6N "4Q" 6O O.\')}1F.3F=0;A.X(L(\'5P\'+h,I),[b,f]);8(7.29){F s=7.29,c=[b,f];1m(F j=0,l=s.V;j<l;j++){F d=h;8(!s[j][2])d=(d==\'17\')?\'1a\':\'17\';8(!s[j][1])c[0]=s[j][0].1D(\'34\',[\'5Q\',d]);c[1]=f+s[j][3];s[j][0].X(\'34\',[\'5P\'+d,c])}}J N});A.14(L(\'6P\',I),H(e,f,g){e.1h();F h=A.11();8(!7.1M){8(M.Z==0){8(7.3l){A.X(L(\'1a\',I),M.U-1)}J e.21()}}8(7.1u)1N(h,7);8(K g!=\'13\'){8(7.G.12.1d){g=4a(h,7,M.U-1)}Q 8(7.G.1v!=\'*\'){F i=(K f.G==\'13\')?f.G:4R(A,7);g=5R(h,7,M.U-1,i)}Q{g=7.G.P}g=4b(g,7,f.G,$19)}8(!7.1M){8(M.U-g<M.Z){g=M.U-M.Z}}7.G.12.2m=7.G.P;8(7.G.12.1d){F j=2Q(h,7,M.U-g);8(7.G.P+g<=j&&g<M.U){g++;j=2Q(h,7,M.U-g)}7.G.P=2R(j,7,7.G.12.2l,$19)}Q 8(7.G.1v!=\'*\'){F j=3B(h,7,M.U-g);7.G.P=2R(j,7,7.G.12.2l,$19)}8(7.1u)1N(h,7,N);8(g==0){e.21();J 1e(I,\'0 G 41 1n: 28 2W.\')}1e(I,\'5S \'+g+\' G 4G.\');M.Z+=g;23(M.Z>=M.U){M.Z-=M.U}8(!7.1M){8(M.Z==0&&f.4c)f.4c.1z($19);8(!7.3l)2z(7,M.Z,I)}A.11().1c(M.U-g,M.U).6Q(A);8(M.U<7.G.P+g){A.11().1c(0,(7.G.P+g)-M.U).4d(N).3K(A)}F h=A.11(),2r=5T(h,7,g),1T=5U(h,7),2c=h.1O(g-1),2d=2r.2Y(),2A=1T.2Y();8(7.1u)1N(h,7);8(7.1B){F p=43(1T,7),k=p[0],2s=p[1]}Q{F k=0,2s=0}F l=(k<0)?7.1i[7.d[3]]:0;8(f.1I==\'5V\'&&7.G.P<g){F m=h.1c(7.G.12.2m,g),4e=7.G[7.d[\'S\']];m.1K(H(){F a=$(1g);a.1r(\'4f\',a.1W(\':2P\')).3b()});7.G[7.d[\'S\']]=\'1d\'}Q{F m=O}F n=3m(h.1c(0,g),7,\'S\'),2e=4g(2B(1T,7,N),7,!7.1u);8(m)7.G[7.d[\'S\']]=4e;8(7.1u){1N(h,7,N);8(2s>=0){1N(2d,7,7.1i[7.d[1]])}1N(2c,7,7.1i[7.d[3]])}8(7.1B){7.1i[7.d[1]]=2s;7.1i[7.d[3]]=k}F o={},1w=f.1j;8(f.1I==\'47\')1w=0;Q 8(1w==\'T\')1w=7.1n.1j/7.1n.G*g;Q 8(1w<=0)1w=0;Q 8(1w<10)1w=n/1w;R=24(1w,f.1G);8(7[7.d[\'S\']]==\'1d\'||7[7.d[\'1l\']]==\'1d\'){R.1f.1q([$1A,2e])}8(7.1u){F q=7.1i[7.d[3]];8(2A.4S(2c).V){F r={};r[7.d[\'1E\']]=2c.1r(\'1R\');8(k<0)2c.16(r);Q R.1f.1q([2c,r])}8(2A.4S(2d).V){F s={};s[7.d[\'1E\']]=2d.1r(\'1R\');R.1f.1q([2d,s])}8(2s>=0){F t={};t[7.d[\'1E\']]=2A.1r(\'1R\')+7.1i[7.d[1]];R.1f.1q([2A,t])}}Q{F q=0}o[7.d[\'1t\']]=q;F u=[2r,1T,2e,1w];8(f.2f)f.2f.3L($19,u);1Y.2f=3M(1Y.2f,$19,u);1x(f.1I){W\'2C\':W\'2g\':W\'2D\':W\'2h\':R.1p=24(R.1j,R.1G);R.1Q=24(R.1j,R.1G);R.1j=0;18}1x(f.1I){W\'2g\':W\'2D\':W\'2h\':F v=A.4d().3K($1A);18}1x(f.1I){W\'2h\':v.11().1c(0,g).1U();W\'2g\':W\'2D\':v.11().1c(7.G.P).1U();18}1x(f.1I){W\'2C\':R.1p.1f.1q([A,{\'2i\':0}]);18;W\'2g\':v.16({\'2i\':0});R.1p.1f.1q([A,{\'S\':\'+=0\'},H(){v.1U()}]);R.1Q.1f.1q([v,{\'2i\':1}]);18;W\'2D\':R=4T(R,A,v,7,N);18;W\'2h\':R=4U(R,A,v,7,N,g);18}F w=H(){F b=7.G.P+g-M.U;8(b>0){A.11().1c(M.U).1U();2r=$(A.11().1c(M.U-(7.G.P-b)).4h().5W(A.11().1c(0,b).4h()))}8(m){m.1K(H(){F a=$(1g);8(!a.1r(\'4f\'))a.3c()})}8(7.1u){F c=A.11().1O(7.G.P+g-1);c.16(7.d[\'1E\'],c.1r(\'1R\'))}R.1f=[];8(R.1p)R.1p=24(R.4V,R.1G);F d=H(){1x(f.1I){W\'2C\':W\'2g\':A.16(\'1v\',\'\');18}R.1Q=24(0,2b);C.1S=O;F a=[2r,1T,2e];8(f.22)f.22.3L($19,a);1Y.22=3M(1Y.22,$19,a);8(1V.V){A.X(L(1V[0][0],I),1V[0][1]);1V.5X()}8(!C.1X)A.X(L(\'1H\',I))};1x(f.1I){W\'2C\':R.1p.1f.1q([A,{\'2i\':1},d]);2a(R.1p);18;W\'2h\':R.1p.1f.1q([A,{\'S\':\'+=0\'},d]);2a(R.1p);18;2w:d();18}};R.1f.1q([A,o,w]);C.1S=N;A.16(7.d[\'1t\'],-(n-l));1F=3i(1F);2a(R);4W(7.2n,A.1D(L(\'3w\',I)));A.X(L(\'2E\',I),[O,2e]);J N});A.14(L(\'6R\',I),H(e,f,g){e.1h();F h=A.11();8(!7.1M){8(M.Z==7.G.P){8(7.3l){A.X(L(\'17\',I),M.U-1)}J e.21()}}8(7.1u)1N(h,7);8(K g!=\'13\'){8(7.G.1v!=\'*\'){F i=(K f.G==\'13\')?f.G:4R(A,7);g=5Y(h,7,0,i)}Q{g=7.G.P}g=4b(g,7,f.G,$19)}F j=(M.Z==0)?M.U:M.Z;8(!7.1M){8(7.G.12.1d){F k=2Q(h,7,g),i=4a(h,7,j-1)}Q{F k=7.G.P,i=7.G.P}8(g+k>j){g=j-i}}7.G.12.2m=7.G.P;8(7.G.12.1d){F k=4X(h,7,g,j);23(7.G.P-g>=k&&g<M.U){g++;k=4X(h,7,g,j)}7.G.P=2R(k,7,7.G.12.2l,$19)}Q 8(7.G.1v!=\'*\'){F k=3B(h,7,g);7.G.P=2R(k,7,7.G.12.2l,$19)}8(7.1u)1N(h,7,N);8(g==0){e.21();J 1e(I,\'0 G 41 1n: 28 2W.\')}1e(I,\'5S \'+g+\' G 5D.\');M.Z-=g;23(M.Z<0){M.Z+=M.U}8(!7.1M){8(M.Z==7.G.P&&f.4c)f.4c.1z($19);8(!7.3l)2z(7,M.Z,I)}8(M.U<7.G.P+g){A.11().1c(0,(7.G.P+g)-M.U).4d(N).3K(A)}F h=A.11(),2r=4Y(h,7),1T=4Z(h,7,g),2c=h.1O(g-1),2d=2r.2Y(),2A=1T.2Y();8(7.1u)1N(h,7);8(7.1B){F p=43(1T,7),l=p[0],2s=p[1]}Q{F l=0,2s=0}8(f.1I==\'5V\'&&7.G.12.2m<g){F m=h.1c(7.G.12.2m,g),4e=7.G[7.d[\'S\']];m.1K(H(){F a=$(1g);a.1r(\'4f\',a.1W(\':2P\')).3b()});7.G[7.d[\'S\']]=\'1d\'}Q{F m=O}F n=3m(h.1c(0,g),7,\'S\'),2e=4g(2B(1T,7,N),7,!7.1u);8(m)7.G[7.d[\'S\']]=4e;8(7.1B){8(7.1i[7.d[1]]<0){7.1i[7.d[1]]=0}}8(7.1u){1N(h,7,N);1N(2d,7,7.1i[7.d[1]])}8(7.1B){7.1i[7.d[1]]=2s;7.1i[7.d[3]]=l}F o={},1w=f.1j;8(f.1I==\'47\')1w=0;Q 8(1w==\'T\')1w=7.1n.1j/7.1n.G*g;Q 8(1w<=0)1w=0;Q 8(1w<10)1w=n/1w;R=24(1w,f.1G);8(7[7.d[\'S\']]==\'1d\'||7[7.d[\'1l\']]==\'1d\'){R.1f.1q([$1A,2e])}8(7.1u){F q=2A.1r(\'1R\');8(2s>=0){q+=7.1i[7.d[1]]}2A.16(7.d[\'1E\'],q);8(2c.4S(2d).V){F r={};r[7.d[\'1E\']]=2d.1r(\'1R\');R.1f.1q([2d,r])}F s=2c.1r(\'1R\');8(l>=0){s+=7.1i[7.d[3]]}F t={};t[7.d[\'1E\']]=s;R.1f.1q([2c,t])}o[7.d[\'1t\']]=-n;8(l<0){o[7.d[\'1t\']]+=l}F u=[2r,1T,2e,1w];8(f.2f)f.2f.3L($19,u);1Y.2f=3M(1Y.2f,$19,u);1x(f.1I){W\'2C\':W\'2g\':W\'2D\':W\'2h\':R.1p=24(R.1j,R.1G);R.1Q=24(R.1j,R.1G);R.1j=0;18}1x(f.1I){W\'2g\':W\'2D\':W\'2h\':F v=A.4d().3K($1A);18}1x(f.1I){W\'2h\':v.11().1c(7.G.12.2m).1U();18;W\'2g\':W\'2D\':v.11().1c(0,g).1U();v.11().1c(7.G.P).1U();18}1x(f.1I){W\'2C\':R.1p.1f.1q([A,{\'2i\':0}]);18;W\'2g\':v.16({\'2i\':0});R.1p.1f.1q([A,{\'S\':\'+=0\'},H(){v.1U()}]);R.1Q.1f.1q([v,{\'2i\':1}]);18;W\'2D\':R=4T(R,A,v,7,O);18;W\'2h\':R=4U(R,A,v,7,O,g);18}F w=H(){F b=7.G.P+g-M.U,5Z=(7.1u)?7.1i[7.d[3]]:0;A.16(7.d[\'1t\'],5Z);8(b>0){A.11().1c(M.U).1U()}F c=A.11().1c(0,g).3K(A).2Y();8(b>0){1T=3d(h,7)}8(m){m.1K(H(){F a=$(1g);8(!a.1r(\'4f\'))a.3c()})}8(7.1u){8(M.U<7.G.P+g){F d=A.11().1O(7.G.P-1);d.16(7.d[\'1E\'],d.1r(\'1R\')+7.1i[7.d[3]])}c.16(7.d[\'1E\'],c.1r(\'1R\'))}R.1f=[];8(R.1p)R.1p=24(R.4V,R.1G);F e=H(){1x(f.1I){W\'2C\':W\'2g\':A.16(\'1v\',\'\');18}R.1Q=24(0,2b);C.1S=O;F a=[2r,1T,2e];8(f.22)f.22.3L($19,a);1Y.22=3M(1Y.22,$19,a);8(1V.V){A.X(L(1V[0][0],I),1V[0][1]);1V.5X()}8(!C.1X)A.X(L(\'1H\',I))};1x(f.1I){W\'2C\':R.1p.1f.1q([A,{\'2i\':1},e]);2a(R.1p);18;W\'2h\':R.1p.1f.1q([A,{\'S\':\'+=0\'},e]);2a(R.1p);18;2w:e();18}};R.1f.1q([A,o,w]);C.1S=N;1F=3i(1F);2a(R);4W(7.2n,A.1D(L(\'3w\',I)));A.X(L(\'2E\',I),[O,2e]);J N});A.14(L(\'2Z\',I),H(e,b,c,d,f,g,h){e.1h();F v=[b,c,d,f,g,h],t=[\'1k/13/1o\',\'13\',\'1s\',\'1o\',\'1k\',\'H\'],a=2V(v,t);F f=a[3],g=a[4],h=a[5];b=3n(a[0],a[1],a[2],M,A);8(b==0)J;8(K f!=\'1o\')f=O;8(C.1S){8(K f!=\'1o\'||f.1j>0)J O}8(g!=\'17\'&&g!=\'1a\'){8(7.1M){8(b<=M.U/2)g=\'1a\';Q g=\'17\'}Q{8(M.Z==0||M.Z>b)g=\'1a\';Q g=\'17\'}}8(g==\'17\')b=M.U-b;A.X(L(g,I),[f,b,h]);J N});A.14(L(\'6S\',I),H(e,a,b){e.1h();F c=A.1D(L(\'3N\',I));J A.1D(L(\'51\',I),[c-1,a,\'17\',b])});A.14(L(\'6T\',I),H(e,a,b){e.1h();F c=A.1D(L(\'3N\',I));J A.1D(L(\'51\',I),[c+1,a,\'1a\',b])});A.14(L(\'51\',I),H(e,a,b,c,d){e.1h();8(K a!=\'13\')a=A.1D(L(\'3N\',I));F f=7.1b.G||7.G.P,27=1L.2v(M.U/f)-1;8(a<0)a=27;8(a>27)a=0;J A.1D(L(\'2Z\',I),[a*f,0,N,b,c,d])});A.14(L(\'60\',I),H(e,s){e.1h();8(s)s=3n(s,0,N,M,A);Q s=0;s+=M.Z;8(s!=0){23(s>M.U)s-=M.U;A.6U(A.11().1c(s,M.U))}J N});A.14(L(\'29\',I),H(e,s){e.1h();8(s)s=4E(s);Q 8(7.29)s=7.29;Q J 1e(I,\'5s 6V 41 29.\');F n=A.1D(L(\'3w\',I)),x=N;1m(F j=0,l=s.V;j<l;j++){8(!s[j][0].1D(L(\'2Z\',I),[n,s[j][3],N])){x=O}}J x});A.14(L(\'3k\',I),H(e,a,b){e.1h();8(K a==\'H\'){a.1z($19,1V)}Q 8(31(a)){1V=a}Q 8(K a!=\'1y\'){1V.1q([a,b])}J 1V});A.14(L(\'6W\',I),H(e,b,c,d,f){e.1h();F v=[b,c,d,f],t=[\'1k/1o\',\'1k/13/1o\',\'1s\',\'13\'],a=2V(v,t);F b=a[0],c=a[1],d=a[2],f=a[3];8(K b==\'1o\'&&K b.3o==\'1y\')b=$(b);8(K b==\'1k\')b=$(b);8(K b!=\'1o\'||K b.3o==\'1y\'||b.V==0)J 1e(I,\'28 a 4w 1o.\');8(K c==\'1y\')c=\'4i\';8(7.1u){b.1K(H(){F m=2o($(1g).16(7.d[\'1E\']));8(2p(m))m=0;$(1g).1r(\'1R\',m)})}F g=c,3O=\'3O\';8(c==\'4i\'){8(d){8(M.Z==0){c=M.U-1;3O=\'61\'}Q{c=M.Z;M.Z+=b.V}8(c<0)c=0}Q{c=M.U-1;3O=\'61\'}}Q{c=3n(c,f,d,M,A)}8(g!=\'4i\'&&!d){8(c<M.Z)M.Z+=b.V}8(M.Z>=M.U)M.Z-=M.U;F h=A.11().1O(c);8(h.V){h[3O](b)}Q{A.62(b)}M.U=A.11().V;F i=A.1D(\'52\');3p(7,M.U,I);2z(7,M.Z,I);A.X(L(\'53\',I));A.X(L(\'2E\',I),[N,i]);J N});A.14(L(\'63\',I),H(e,c,d,f){e.1h();F v=[c,d,f],t=[\'1k/13/1o\',\'1s\',\'13\'],a=2V(v,t);c=a[0];d=a[1];f=a[2];F g=O;8(c 64 $&&c.V>1){h=$();c.1K(H(i,a){F b=A.X(L(\'63\',I),[$(1g),d,f]);8(b)h=h.6X(b)});J h}8(K c==\'1y\'||c==\'4i\'){h=A.11().2Y()}Q{c=3n(c,f,d,M,A);F h=A.11().1O(c);8(h.V){8(c<M.Z)M.Z-=h.V}}8(h&&h.V){h.6Y();M.U=A.11().V;F j=A.1D(\'52\');3p(7,M.U,I);2z(7,M.Z,I);A.X(L(\'2E\',I),[N,j])}J h});A.14(L(\'2f\',I)+\' \'+L(\'22\',I),H(e,a){e.1h();F b=e.4P.1c(I.3j.3J.V);8(31(a))1Y[b]=a;8(K a==\'H\')1Y[b].1q(a);J 1Y[b]});A.14(L(\'3w\',I),H(e,a){e.1h();8(M.Z==0)F b=0;Q F b=M.U-M.Z;8(K a==\'H\')a.1z($19,b);J b});A.14(L(\'3N\',I),H(e,a){e.1h();F b=7.1b.G||7.G.P;F c=1L.2v(M.U/b-1);8(M.Z==0)F d=0;Q 8(M.Z<M.U%b)F d=0;Q 8(M.Z==b&&!7.1M)F d=c;Q F d=1L.6Z((M.U-M.Z)/b);8(d<0)d=0;8(d>c)d=c;8(K a==\'H\')a.1z($19,d);J d});A.14(L(\'70\',I),H(e,a){e.1h();$i=3d(A.11(),7);8(K a==\'H\')a.1z($19,$i);J $i});A.14(L(\'1c\',I),H(e,f,l,b){e.1h();8(M.U==0)J O;F v=[f,l,b],t=[\'13\',\'13\',\'H\'],a=2V(v,t);f=(K a[0]==\'13\')?a[0]:0;l=(K a[1]==\'13\')?a[1]:M.U;b=a[2];f+=M.Z;l+=M.Z;23(f>M.U){f-=M.U}23(l>M.U){l-=M.U}23(f<0){f+=M.U}23(l<0){l+=M.U}F c=A.11();8(l>f){F d=c.1c(f,l)}Q{F d=$(c.1c(f,M.U).4h().5W(c.1c(0,l).4h()))}8(K b==\'H\')b.1z($19,d);J d});A.14(L(\'1X\',I)+\' \'+L(\'20\',I)+\' \'+L(\'1S\',I),H(e,a){e.1h();F b=e.4P.1c(I.3j.3J.V);8(K a==\'H\')a.1z($19,C[b]);J C[b]});A.14(L(\'5Q\',I),H(e,a,b,c){e.1h();F d=O;8(K a==\'H\'){a.1z($19,7)}Q 8(K a==\'1o\'){2u=$.25(N,{},2u,a);8(b!==O)d=N;Q 7=$.25(N,{},7,a)}Q 8(K a!=\'1y\'){8(K b==\'H\'){F f=4j(\'7.\'+a);8(K f==\'1y\')f=\'\';b.1z($19,f)}Q 8(K b!=\'1y\'){8(K c!==\'1s\')c=N;4j(\'2u.\'+a+\' = b\');8(c!==O)d=N;Q 4j(\'7.\'+a+\' = b\')}Q{J 4j(\'7.\'+a)}}8(d){1N(A.11(),7);A.3V(2u);A.54();F g=3P(A,7,O);A.X(L(\'2E\',I),[N,g])}J 7});A.14(L(\'53\',I),H(e,a,b){e.1h();8(K a==\'1y\'||a.V==0)a=$(\'71\');Q 8(K a==\'1k\')a=$(a);8(K a!=\'1o\')J 1e(I,\'28 a 4w 1o.\');8(K b!=\'1k\'||b.V==0)b=\'a.65\';a.72(b).1K(H(){F h=1g.66||\'\';8(h.V>0&&A.11().68($(h))!=-1){$(1g).1Z(\'55\').55(H(e){e.2j();A.X(L(\'2Z\',I),h)})}});J N});A.14(L(\'2E\',I),H(e,b,c){e.1h();8(!7.1b.1C)J;8(b){F d=7.1b.G||7.G.P,l=1L.2v(M.U/d);8(7.1b.3f){7.1b.1C.11().1U();7.1b.1C.1K(H(){1m(F a=0;a<l;a++){F i=A.11().1O(3n(a*d,0,N,M,A));$(1g).62(7.1b.3f(a+1,i))}})}7.1b.1C.1K(H(){$(1g).11().1Z(7.1b.3q).1K(H(a){$(1g).14(7.1b.3q,H(e){e.2j();A.X(L(\'2Z\',I),[a*d,0,N,7.1b])})})})}7.1b.1C.1K(H(){$(1g).11().2y(2q(\'69\',I)).1O(A.1D(L(\'3N\',I))).2S(2q(\'69\',I))});J N});A.14(L(\'52\',I),H(e){F a=A.11(),3Q=7.G.P;8(7.G.12.1d)3Q=2Q(a,7,0);Q 8(7.G.1v!=\'*\')3Q=3B(a,7,0);8(!7.1M&&M.Z!=0&&3Q>M.Z){8(7.G.12.1d){F b=4a(a,7,M.Z)-M.Z}Q 8(7.G.1v!=\'*\'){F b=6a(a,7,M.Z)-M.Z}Q{b=7.G.P-M.Z}1e(I,\'73 74-1M: 75 \'+b+\' G 4G.\');A.X(\'17\',b)}7.G.P=2R(3Q,7,7.G.12.2l,$19);J 3P(A,7)});A.14(L(\'5t\',I),H(e,a){e.1h();1F=3i(1F);A.1r(\'4r\',O);A.X(L(\'4O\',I));8(a){A.X(L(\'60\',I))}8(7.1u){1N(A.11(),7)}A.16(A.1r(\'5G\'));A.4M();A.56();$1A.76(A);J N});A.14(\'34\',H(e,n,o){e.1h();J A.1D(L(n,I),o)})};A.4M=H(){A.1Z(L(\'\',I));A.1Z(L(\'\',I,O));A.1Z(\'34\')};A.54=H(){A.56();3p(7,M.U,I);2z(7,M.Z,I);8(7.T.2t){F c=3r(7.T.2t);$1A.14(L(\'4k\',I,O),H(){A.X(L(\'2T\',I),c)}).14(L(\'4l\',I,O),H(){A.X(L(\'2X\',I))})}8(7.T.Y){7.T.Y.14(L(7.T.3q,I,O),H(e){e.2j();F a=O,c=2b;8(C.1X){a=\'1H\'}Q 8(7.T.45){a=\'2T\';c=3r(7.T.45)}8(a){A.X(L(a,I),c)}})}8(7.17.Y){7.17.Y.14(L(7.17.3q,I,O),H(e){e.2j();A.X(L(\'17\',I))});8(7.17.2t){F c=3r(7.17.2t);7.17.Y.14(L(\'4k\',I,O),H(){A.X(L(\'2T\',I),c)}).14(L(\'4l\',I,O),H(){A.X(L(\'2X\',I))})}}8(7.1a.Y){7.1a.Y.14(L(7.1a.3q,I,O),H(e){e.2j();A.X(L(\'1a\',I))});8(7.1a.2t){F c=3r(7.1a.2t);7.1a.Y.14(L(\'4k\',I,O),H(){A.X(L(\'2T\',I),c)}).14(L(\'4l\',I,O),H(){A.X(L(\'2X\',I))})}}8($.1P.2F){8(7.17.2F){8(!C.57){C.57=N;$1A.2F(H(e,a){8(a>0){e.2j();F b=59(7.17.2F);A.X(L(\'17\',I),b)}})}}8(7.1a.2F){8(!C.5a){C.5a=N;$1A.2F(H(e,a){8(a<0){e.2j();F b=59(7.1a.2F);A.X(L(\'1a\',I),b)}})}}}8($.1P.3R){F d=(7.17.5b)?H(){A.X(L(\'17\',I))}:2b,3S=(7.1a.5b)?H(){A.X(L(\'1a\',I))}:2b;8(3S||3S){8(!C.3R){C.3R=N;F f={\'77\':30,\'78\':30,\'79\':N};1x(7.2k){W\'4u\':W\'6b\':f.7a=d;f.7b=3S;18;2w:f.7c=3S;f.7d=d}$1A.3R(f)}}}8(7.1b.1C){8(7.1b.2t){F c=3r(7.1b.2t);7.1b.1C.14(L(\'4k\',I,O),H(){A.X(L(\'2T\',I),c)}).14(L(\'4l\',I,O),H(){A.X(L(\'2X\',I))})}}8(7.17.2G||7.1a.2G){$(3T).14(L(\'6c\',I,O,N,N),H(e){F k=e.6d;8(k==7.1a.2G){e.2j();A.X(L(\'1a\',I))}8(k==7.17.2G){e.2j();A.X(L(\'17\',I))}})}8(7.1b.44){$(3T).14(L(\'6c\',I,O,N,N),H(e){F k=e.6d;8(k>=49&&k<58){k=(k-49)*7.G.P;8(k<=M.U){e.2j();A.X(L(\'2Z\',I),[k,0,N,7.1b])}}})}8(7.T.1H){A.X(L(\'1H\',I),7.T.4C)}8(C.4t){F g=$(3s),5c=g.S(),5d=g.1l();g.14(L(\'7e\',I,O,N,N),H(e){8(g.S()!=5c||g.1l()!=5d){A.X(L(\'4O\',I));8(7.T.4D&&!C.1X){A.X(L(\'1H\',I))}1N(A.11(),7);A.3V(2u);F a=3P(A,7,O);3p(7,M.U,I);2z(7,M.Z,I);A.X(L(\'2E\',I),[N,a]);5c=g.S();5d=g.1l()}})}};A.56=H(){F a=L(\'\',I),3t=L(\'\',I,O);5e=L(\'\',I,O,N,N);$(3T).1Z(5e);$(3s).1Z(5e);$1A.1Z(3t);8(7.T.Y)7.T.Y.1Z(3t);8(7.17.Y)7.17.Y.1Z(3t);8(7.1a.Y)7.1a.Y.1Z(3t);8(7.1b.1C){7.1b.1C.1Z(3t);8(7.1b.3f){7.1b.1C.11().1U()}}3p(7,\'3b\',I);2z(7,\'2y\',I)};F C={\'2k\':\'1a\',\'1X\':N,\'1S\':O,\'20\':O,\'5a\':O,\'57\':O,\'3R\':O},M={\'U\':A.11().V,\'Z\':0},1F={\'7f\':2b,\'T\':2b,\'3k\':2b,\'2U\':2x(),\'3F\':0},R={\'20\':O,\'1j\':0,\'2U\':0,\'1G\':\'\',\'1f\':[]},1Y={\'2f\':[],\'22\':[]},1V=[],I=$.25(N,{},$.1P.1J.6e,z),7={},2u=y,$1A=A.7g(\'<\'+I.5f.4q+\' 7h="\'+I.5f.6f+\'" />\').3a();I.3U=A.3U;I.4m=$.1P.1J.4m++;A.3V(2u,N,B);A.5E();A.5H();A.54();8(31(7.G.2J)){F D=7.G.2J}Q{F D=[];8(7.G.2J!=0){D.1q(7.G.2J)}}8(7.2n){D.7i(6g(7.2n))}8(D.V>0){1m(F a=0,l=D.V;a<l;a++){F s=D[a];8(s==0){5g}8(s===N){s=3s.7j.66;8(s.V<1){5g}}Q 8(s===\'6h\'){s=1L.3y(1L.6h()*M.U)}8(A.1D(L(\'2Z\',I),[s,0,N,{1I:\'47\'}])){18}}}F E=3P(A,7,O),6i=3d(A.11(),7);8(7.6j){7.6j.1z($19,6i,E)}A.X(L(\'2E\',I),[N,E]);A.X(L(\'53\',I));J A};$.1P.1J.4m=1;$.1P.1J.4s={\'29\':O,\'3l\':N,\'1M\':N,\'2K\':O,\'2k\':\'1t\',\'G\':{\'2J\':0},\'1n\':{\'1G\':\'7k\',\'1j\':5A,\'2t\':O,\'2F\':O,\'5b\':O,\'3q\':\'55\',\'3k\':O}};$.1P.1J.6e={\'1e\':O,\'3j\':{\'3J\':\'\',\'6k\':\'7l\'},\'5f\':{\'4q\':\'7m\',\'6f\':\'7n\'},\'5h\':{}};$.1P.1J.5B=H(a,b){J\'<a 7o="#"><6l>\'+a+\'</6l></a>\'};H 24(d,e){J{1f:[],1j:d,4V:d,1G:e,2U:2x()}}H 2a(s){8(K s.1p==\'1o\'){2a(s.1p)}1m(F a=0,l=s.1f.V;a<l;a++){F b=s.1f[a];8(!b)5g;8(b[3])b[0].4N();b[0].6m(b[1],{6n:b[2],1j:s.1j,1G:s.1G})}8(K s.1Q==\'1o\'){2a(s.1Q)}}H 3E(s,c){8(K c!=\'1s\')c=N;8(K s.1p==\'1o\'){3E(s.1p,c)}1m(F a=0,l=s.1f.V;a<l;a++){F b=s.1f[a];b[0].4N(N);8(c){b[0].16(b[1]);8(K b[2]==\'H\')b[2]()}}8(K s.1Q==\'1o\'){3E(s.1Q,c)}}H 3i(t){8(t.T)7p(t.T);J t}H 3M(b,t,c){8(b.V){1m(F a=0,l=b.V;a<l;a++){b[a].3L(t,c)}}J[]}H 7q(a,c,x,d,f){F o={\'1j\':d,\'1G\':a.1G};8(K f==\'H\')o.6n=f;c.6m({2i:x},o)}H 4T(a,b,c,o,d){F e=2B(4Y(b.11(),o),o,N)[0],5i=2B(c.11(),o,N)[0],4n=(d)?-5i:e,2H={},3u={};2H[o.d[\'S\']]=5i;2H[o.d[\'1t\']]=4n;3u[o.d[\'1t\']]=0;a.1p.1f.1q([b,{\'2i\':1}]);a.1Q.1f.1q([c,3u,H(){$(1g).1U()}]);c.16(2H);J a}H 4U(a,b,c,o,d,n){F e=2B(4Z(b.11(),o,n),o,N)[0],5j=2B(c.11(),o,N)[0],4n=(d)?-5j:e,2H={},3u={};2H[o.d[\'S\']]=5j;2H[o.d[\'1t\']]=0;3u[o.d[\'1t\']]=4n;a.1Q.1f.1q([c,3u,H(){$(1g).1U()}]);c.16(2H);J a}H 3p(o,t,c){8(t==\'3c\'||t==\'3b\'){F f=t}Q 8(o.G.3e>=t){1e(c,\'28 5M G: 7r 7s (\'+t+\' G, \'+o.G.3e+\' 5N).\');F f=\'3b\'}Q{F f=\'3c\'}F s=(f==\'3c\')?\'2y\':\'2S\',h=2q(\'2P\',c);8(o.T.Y)o.T.Y[f]()[s](h);8(o.17.Y)o.17.Y[f]()[s](h);8(o.1a.Y)o.1a.Y[f]()[s](h);8(o.1b.1C)o.1b.1C[f]()[s](h)}H 2z(o,f,c){8(o.1M||o.3l)J;F a=(f==\'2y\'||f==\'2S\')?f:O,4o=2q(\'7t\',c);8(o.T.Y&&a){o.T.Y[a](4o)}8(o.17.Y){F b=a||(f==0)?\'2S\':\'2y\';o.17.Y[b](4o)}8(o.1a.Y){F b=a||(f==o.G.P)?\'2S\':\'2y\';o.1a.Y[b](4o)}}H 3W(a,b){8(K b==\'H\')b=b.1z(a);8(K b==\'1y\')b={};J b}H 3C(a,b,c){8(K c!=\'1k\')c=\'\';b=3W(a,b);8(K b==\'1k\'){F d=5k(b);8(d==-1)b=$(b);Q b=d}8(c==\'1b\'){8(K b==\'1s\')b={\'44\':b};8(K b.3o!=\'1y\')b={\'1C\':b};8(K b.1C==\'H\')b.1C=b.1C.1z(a);8(K b.1C==\'1k\')b.1C=$(b.1C);8(K b.G!=\'13\')b.G=O}Q 8(c==\'T\'){8(K b.3o!=\'1y\')b={\'Y\':b};8(K b==\'1s\')b={\'1H\':b};8(K b==\'13\')b={\'3g\':b};8(K b.Y==\'H\')b.Y=b.Y.1z(a);8(K b.Y==\'1k\')b.Y=$(b.Y)}Q{8(K b.3o!=\'1y\')b={\'Y\':b};8(K b==\'13\')b={\'2G\':b};8(K b.Y==\'H\')b.Y=b.Y.1z(a);8(K b.Y==\'1k\')b.Y=$(b.Y);8(K b.2G==\'1k\')b.2G=5k(b.2G)}J b}H 3n(a,b,c,d,e){8(K a==\'1k\'){8(2p(a))a=$(a);Q a=2o(a)}8(K a==\'1o\'){8(K a.3o==\'1y\')a=$(a);a=e.11().68(a);8(a==-1)a=0;8(K c!=\'1s\')c=O}Q{8(K c!=\'1s\')c=N}8(2p(a))a=0;Q a=2o(a);8(2p(b))b=0;Q b=2o(b);8(c){a+=d.Z}a+=b;8(d.U>0){23(a>=d.U){a-=d.U}23(a<0){a+=d.U}}J a}H 4a(i,o,s){F t=0,x=0;1m(F a=s;a>=0;a--){F j=i.1O(a);t+=(j.1W(\':P\'))?j[o.d[\'26\']](N):0;8(t>o.3A)J x;8(a==0)a=i.V;x++}}H 6a(i,o,s){J 5l(i,o.G.1v,o.G.12.42,s)}H 5R(i,o,s,m){J 5l(i,o.G.1v,m,s)}H 5l(i,f,m,s){F t=0,x=0;1m(F a=s,l=i.V;a>=0;a--){x++;8(x==l)J x;F j=i.1O(a);8(j.1W(f)){t++;8(t==m)J x}8(a==0)a=l}}H 4R(a,o){J o.G.12.42||a.11().1c(0,o.G.P).1v(o.G.1v).V}H 2Q(i,o,s){F t=0,x=0;1m(F a=s,l=i.V-1;a<=l;a++){F j=i.1O(a);t+=(j.1W(\':P\'))?j[o.d[\'26\']](N):0;8(t>o.3A)J x;x++;8(x==l+1)J x;8(a==l)a=-1}}H 4X(i,o,s,l){F v=2Q(i,o,s);8(!o.1M){8(s+v>l)v=l-s}J v}H 3B(i,o,s){J 5m(i,o.G.1v,o.G.12.42,s,o.1M)}H 5Y(i,o,s,m){J 5m(i,o.G.1v,m+1,s,o.1M)-1}H 5m(i,f,m,s,c){F t=0,x=0;1m(F a=s,l=i.V-1;a<=l;a++){x++;8(x==l)J x;F j=i.1O(a);8(j.1W(f)){t++;8(t==m)J x}8(a==l)a=-1}}H 3d(i,o){J i.1c(0,o.G.P)}H 5T(i,o,n){J i.1c(n,o.G.12.2m+n)}H 5U(i,o){J i.1c(0,o.G.P)}H 4Y(i,o){J i.1c(0,o.G.12.2m)}H 4Z(i,o,n){J i.1c(n,o.G.P+n)}H 1N(i,o,m){F x=(K m==\'1s\')?m:O;8(K m!=\'13\')m=0;i.1K(H(){F j=$(1g);F t=2o(j.16(o.d[\'1E\']));8(2p(t))t=0;j.1r(\'6o\',t);j.16(o.d[\'1E\'],((x)?j.1r(\'6o\'):m+j.1r(\'1R\')))})}H 3P(a,o,p){F b=a.3a(),$i=a.11(),$v=3d($i,o),4p=4g(2B($v,o,N),o,p);b.16(4p);8(o.1u){F p=o.1i,r=p[o.d[1]];8(o.1B){8(r<0)r=0}F c=$v.2Y();c.16(o.d[\'1E\'],c.1r(\'1R\')+r);a.16(o.d[\'2M\'],p[o.d[0]]);a.16(o.d[\'1t\'],p[o.d[3]])}a.16(o.d[\'S\'],4p[o.d[\'S\']]+(3m($i,o,\'S\')*2));a.16(o.d[\'1l\'],5n($i,o,\'1l\'));J 4p}H 2B(i,o,a){F b=3m(i,o,\'S\',a),6p=5n(i,o,\'1l\',a);J[b,6p]}H 5n(i,o,a,b){8(K b!=\'1s\')b=O;8(K o[o.d[a]]==\'13\'&&b)J o[o.d[a]];8(K o.G[o.d[a]]==\'13\')J o.G[o.d[a]];F c=(a.5o().32(\'S\')>-1)?\'26\':\'2L\';J 3x(i,o,c)}H 3x(i,o,b){F s=0;1m(F a=0,l=i.V;a<l;a++){F j=i.1O(a);F m=(j.1W(\':P\'))?j[o.d[b]](N):0;8(s<m)s=m}J s}H 36(b,o,c){8(!b.1W(\':P\'))J 0;F d=b[o.d[c]](),5p=(o.d[c].5o().32(\'S\')>-1)?[\'7u\',\'7v\']:[\'7w\',\'7x\'];1m(F a=0,l=5p.V;a<l;a++){F m=2o(b.16(5p[a]));d-=(2p(m))?0:m}J d}H 3m(i,o,b,c){8(K c!=\'1s\')c=O;8(K o[o.d[b]]==\'13\'&&c)J o[o.d[b]];8(K o.G[o.d[b]]==\'13\')J o.G[o.d[b]]*i.V;F d=(b.5o().32(\'S\')>-1)?\'26\':\'2L\',s=0;1m(F a=0,l=i.V;a<l;a++){F j=i.1O(a);s+=(j.1W(\':P\'))?j[o.d[d]](N):0}J s}H 4v(i,o,b){F s=O,v=O;1m(F a=0,l=i.V;a<l;a++){F j=i.1O(a);F c=(j.1W(\':P\'))?j[o.d[b]](N):0;8(s===O)s=c;Q 8(s!=c)v=N;8(s==0)v=N}J v}H 5y(i,o,d){J i[o.d[\'7y\'+d]](N)-36(i,o,\'7z\'+d)}H 3Y(x){J(K x==\'1k\'&&x.1c(-1)==\'%\')}H 3Z(s,o){8(3Y(o)){o=o.1c(0,-1);8(2p(o))J s;s*=o/3H}J s}H L(n,c,a,b,d){8(K a!=\'1s\')a=N;8(K b!=\'1s\')b=N;8(K d!=\'1s\')d=O;8(a)n=c.3j.3J+n;8(b)n=n+\'.\'+c.3j.6k;8(b&&d)n+=c.4m;J n}H 2q(n,c){J(K c.5h[n]==\'1k\')?c.5h[n]:n}H 4g(a,o,p){8(K p!=\'1s\')p=N;F b=(o.1u&&p)?o.1i:[0,0,0,0];F c={};c[o.d[\'S\']]=a[0]+b[1]+b[3];c[o.d[\'1l\']]=a[1]+b[0]+b[2];J c}H 2V(c,d){F e=[];1m(F a=0,6q=c.V;a<6q;a++){1m(F b=0,6r=d.V;b<6r;b++){8(d[b].32(K c[a])>-1&&K e[b]==\'1y\'){e[b]=c[a];18}}}J e}H 5z(p){8(K p==\'1y\')J[0,0,0,0];8(K p==\'13\')J[p,p,p,p];Q 8(K p==\'1k\')p=p.3v(\'7A\').6s(\'\').3v(\'7B\').6s(\'\').3v(\' \');8(!31(p)){J[0,0,0,0]}1m(F i=0;i<4;i++){p[i]=2o(p[i])}1x(p.V){W 0:J[0,0,0,0];W 1:J[p[0],p[0],p[0],p[0]];W 2:J[p[0],p[1],p[0],p[1]];W 3:J[p[0],p[1],p[2],p[1]];2w:J[p[0],p[1],p[2],p[3]]}}H 43(a,o){F x=(K o[o.d[\'S\']]==\'13\')?1L.2v(o[o.d[\'S\']]-3m(a,o,\'S\')):0;1x(o.1B){W\'1t\':J[0,x];W\'2N\':J[x,0];W\'4x\':2w:J[1L.2v(x/2),1L.3y(x/2)]}}H 4b(x,o,a,b){F v=x;8(K a==\'H\'){v=a.1z(b,v)}Q 8(K a==\'1k\'){F p=a.3v(\'+\'),m=a.3v(\'-\');8(m.V>p.V){F c=N,5q=m[0],2I=m[1]}Q{F c=O,5q=p[0],2I=p[1]}1x(5q){W\'7C\':v=(x%2==1)?x-1:x;18;W\'7D\':v=(x%2==0)?x-1:x;18;2w:v=x;18}2I=2o(2I);8(!2p(2I)){8(c)2I=-2I;v+=2I}}8(K v!=\'13\')v=1;8(v<1)v=1;J v}H 2R(x,o,a,b){J 4y(4b(x,o,a,b),o.G.12)}H 4y(v,i){8(K i.2O==\'13\'&&v<i.2O)v=i.2O;8(K i.27==\'13\'&&v>i.27)v=i.27;8(v<1)v=1;J v}H 4E(s){8(!31(s))s=[[s]];8(!31(s[0]))s=[s];1m(F j=0,l=s.V;j<l;j++){8(K s[j][0]==\'1k\')s[j][0]=$(s[j][0]);8(K s[j][1]!=\'1s\')s[j][1]=N;8(K s[j][2]!=\'1s\')s[j][2]=N;8(K s[j][3]!=\'13\')s[j][3]=0}J s}H 5k(k){8(k==\'2N\')J 39;8(k==\'1t\')J 37;8(k==\'4u\')J 38;8(k==\'6b\')J 40;J-1}H 4W(n,v){8(n)3T.2n=n+\'=\'+v+\'; 7E=/\'}H 6g(n){n+=\'=\';F b=3T.2n.3v(\';\');1m(F a=0,l=b.V;a<l;a++){F c=b[a];23(c.7F(0)==\' \'){c=c.1c(1)}8(c.32(n)==0){J c.1c(n.V)}}J 0}H 3r(p){8(p&&K p==\'1k\'){F i=(p.32(\'7G\')>-1)?N:O,r=(p.32(\'2X\')>-1)?N:O}Q{F i=r=O}J[i,r]}H 59(a){J(K a==\'13\')?a:2b}H 31(a){J K(a)==\'1o\'&&(a 64 7H)}H 2x(){J 7I 7J().2x()}H 1e(d,m){8(K d==\'1o\'){F s=\' (\'+d.3U+\')\';d=d.1e}Q{F s=\'\'}8(!d)J O;8(K m==\'1k\')m=\'1J\'+s+\': \'+m;Q m=[\'1J\'+s+\':\',m];8(3s.5r&&3s.5r.6t)3s.5r.6t(m);J O}$.1P.65=H(o,c){J 1g.1J(o,c)};$.25($.1G,{\'7K\':H(t){F a=t*t;J t*(-a*t+4*a-6*t+4)},\'7L\':H(t){J t*(4*t*t-9*t+6)},\'7M\':H(t){F a=t*t;J t*(33*a*a-7N*a*t+7O*a-67*t+15)}})})(7P);',62,486,'|||||||opts|if|||||||||||||||||||||||||||||||||var|items|function|conf|return|typeof|cf_e|itms|true|false|visible|else|scrl|width|auto|total|length|case|trigger|button|first||children|visibleConf|number|bind||css|prev|break|tt0|next|pagination|slice|variable|debug|anims|this|stopPropagation|padding|duration|string|height|for|scroll|object|pre|push|data|boolean|left|usePadding|filter|a_dur|switch|undefined|call|wrp|align|container|triggerHandler|marginRight|tmrs|easing|play|fx|carouFredSel|each|Math|circular|sz_resetMargin|eq|fn|post|cfs_origCssMargin|isScrolling|c_new|remove|queu|is|isPaused|clbk|unbind|isStopped|stopImmediatePropagation|onAfter|while|sc_setScroll|extend|outerWidth|max|Not|synchronise|sc_startScroll|null|l_cur|l_old|w_siz|onBefore|crossfade|uncover|opacity|preventDefault|direction|adjust|old|cookie|parseInt|isNaN|cf_c|c_old|pR|pauseOnHover|opts_orig|ceil|default|getTime|removeClass|nv_enableNavi|l_new|ms_getSizes|fade|cover|updatePageStatus|mousewheel|key|css_o|adj|start|responsive|outerHeight|top|right|min|hidden|gn_getVisibleItemsNext|cf_getItemsAdjust|addClass|pause|startTime|cf_sortParams|scrolling|resume|last|slideTo||is_array|indexOf||_cfs_triggerEvent|innerWidth|ms_getTrueInnerSize||||parent|hide|show|gi_getCurrentItems|minimum|anchorBuilder|pauseDuration|Carousel|sc_clearTimers|events|queue|infinite|ms_getTotalSize|gn_getItemIndex|jquery|nv_showNavi|event|bt_pauseOnHoverConfig|window|ns2|ani_o|split|currentPosition|ms_getTrueLargestSize|floor|of|maxDimention|gn_getVisibleItemsNextFilter|go_getNaviObject|position|sc_stopScroll|timePassed|perc|100|dur2|prefix|appendTo|apply|sc_callCallbacks|currentPage|before|sz_setSizes|vI|touchwipe|wN|document|selector|_cfs_init|go_getObject|marginBottom|ms_isPercentage|ms_getPercentage||to|org|cf_getAlignPadding|keys|pauseOnEvent|Number|none|stopped||gn_getVisibleItemsPrev|cf_getAdjust|onEnd|clone|orgW|isHidden|cf_mapWrapperSizes|get|end|eval|mouseenter|mouseleave|serialNumber|cur_l|di|sz|element|cfs_isCarousel|defaults|upDateOnWindowResize|up|ms_hasVariableSizes|valid|center|cf_getItemAdjustMinMax|seco|nw|bottom|delay|pauseOnResize|cf_getSynchArr|scrolled|backward|textAlign|float|marginTop|marginLeft|absolute|_cfs_unbind_events|stop|finish|type|conditions|gn_getVisibleOrg|not|fx_cover|fx_uncover|orgDuration|cf_setCookie|gn_getVisibleItemsNextTestCircular|gi_getOldItemsNext|gi_getNewItemsNext||slideToPage|updateSizes|linkAnchors|_cfs_bind_buttons|click|_cfs_unbind_buttons|mousewheelPrev||bt_mousesheelNumber|mousewheelNext|wipe|_windowWidth|_windowHeight|ns3|wrapper|continue|classnames|new_w|old_w|cf_getKeyCode|gn_getItemsPrevFilter|gn_getItemsNextFilter|ms_getLargestSize|toLowerCase|arr|sta|console|No|destroy|innerHeight|dx|Set|secp|ms_getPaddingBorderMargin|cf_getPadding|500|pageAnchorBuilder|Item|forward|_cfs_build|fixed|cfs_origCss|_cfs_bind_events|paused|onPausePause|onPauseEnd|onPauseStart|enough|needed|page|slide_|configuration|gn_getScrollItemsPrevFilter|Scrolling|gi_getOldItemsPrev|gi_getNewItemsPrev|directscroll|concat|shift|gn_getScrollItemsNextFilter|new_m|jumpToStart|after|append|removeItem|instanceof|caroufredsel|hash||index|selected|gn_getVisibleItemsPrevFilter|down|keyup|keyCode|configs|classname|cf_readCookie|random|itm|onCreate|namespace|span|animate|complete|cfs_tempCssMargin|s2|l1|l2|join|log|found|the|Infinity|Width|caroufredsel_cookie_|attr|id|2500|Available|widths|heights|automatically|relative|overflow|setTimeout|or|Page|resumed|currently|Callback|returned|slide_prev|prependTo|slide_next|prevPage|nextPage|prepend|carousel|insertItem|add|detach|round|currentVisible|body|find|Preventing|non|sliding|replaceWith|min_move_x|min_move_y|preventDefaultEvents|wipeUp|wipeDown|wipeLeft|wipeRight|resize|timer|wrap|class|unshift|location|swing|cfs|div|caroufredsel_wrapper|href|clearTimeout|fx_fade|hiding|navigation|disabled|paddingLeft|paddingRight|paddingTop|paddingBottom|outer|inner|px|em|even|odd|path|charAt|immediate|Array|new|Date|quadratic|cubic|elastic|106|126|jQuery'.split('|'),0,{}));
;
