!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return r(this,n)}}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{vrAh:function(t,n,a){"use strict";a.d(n,"a",function(){return F}),a.d(n,"b",function(){return T}),a.d(n,"c",function(){return I}),a.d(n,"d",function(){return L}),a.d(n,"e",function(){return V}),a.d(n,"f",function(){return D});var r=a("YEUz"),l=a("8LU1"),u=a("8Y7J"),h=a("UhP/"),p=a("quSY"),_=a("XNiG"),f=a("NXyV"),v=a("VRyK"),y=a("LRne"),d=a("xgIS"),m=a("1O3W"),b=a("Ht+U"),g=a("SCoL"),O=a("1z/I"),k=(a("s7LF"),a("IzEk")),w=a("eIep"),S=a("pLZG"),C=a("lJxs"),A=a("vkgz"),P=a("3E0/"),E=0,j=function e(t,n){c(this,e),this.source=t,this.option=n},R=Object(h.D)(function e(){c(this,e)}),F=new u.s("mat-autocomplete-default-options",{providedIn:"root",factory:function(){return{autoActiveFirstOption:!1}}}),L=function(e){o(n,e);var t=s(n);function n(){var e;return c(this,n),(e=t.apply(this,arguments))._visibleClass="mat-autocomplete-visible",e._hiddenClass="mat-autocomplete-hidden",e}return n}(function(e){o(n,e);var t=s(n);function n(e,i,o){var a;return c(this,n),(a=t.call(this))._changeDetectorRef=e,a._elementRef=i,a._activeOptionChanges=p.a.EMPTY,a.showPanel=!1,a._isOpen=!1,a.displayWith=null,a.optionSelected=new u.o,a.opened=new u.o,a.closed=new u.o,a.optionActivated=new u.o,a._classList={},a.id="mat-autocomplete-"+E++,a._autoActiveFirstOption=!!o.autoActiveFirstOption,a}return i(n,[{key:"ngAfterContentInit",value:function(){var e=this;this._keyManager=new r.b(this.options).withWrap(),this._activeOptionChanges=this._keyManager.change.subscribe(function(t){e.optionActivated.emit({source:e,option:e.options.toArray()[t]||null})}),this._setVisibility()}},{key:"ngOnDestroy",value:function(){this._activeOptionChanges.unsubscribe()}},{key:"_setScrollTop",value:function(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}},{key:"_getScrollTop",value:function(){return this.panel?this.panel.nativeElement.scrollTop:0}},{key:"_setVisibility",value:function(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()}},{key:"_emitSelectEvent",value:function(e){var t=new j(this,e);this.optionSelected.emit(t)}},{key:"_getPanelAriaLabelledby",value:function(e){return this.ariaLabel?null:this.ariaLabelledby?e+" "+this.ariaLabelledby:e}},{key:"_setVisibilityClasses",value:function(e){e[this._visibleClass]=this.showPanel,e[this._hiddenClass]=!this.showPanel}},{key:"isOpen",get:function(){return this._isOpen&&this.showPanel}},{key:"autoActiveFirstOption",get:function(){return this._autoActiveFirstOption},set:function(e){this._autoActiveFirstOption=Object(l.c)(e)}},{key:"classList",set:function(e){this._classList=e&&e.length?Object(l.g)(e).reduce(function(e,t){return e[t]=!0,e},{}):{},this._setVisibilityClasses(this._classList),this._elementRef.nativeElement.className=""}}]),n}(R)),T=new u.s("mat-autocomplete-scroll-strategy");function I(e){return function(){return e.scrollStrategies.reposition()}}var D=function(e){o(n,e);var t=s(n);function n(){var e;return c(this,n),(e=t.apply(this,arguments))._aboveClass="mat-autocomplete-panel-above",e}return n}(function(){function t(n,i,o,a,s,r,l,u,h,y,d){var m=this;c(this,t),this._element=n,this._overlay=i,this._viewContainerRef=o,this._zone=a,this._changeDetectorRef=s,this._dir=l,this._formField=u,this._document=h,this._viewportRuler=y,this._defaults=d,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=p.a.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new _.a,this._windowBlurHandler=function(){m._canOpenOnNextFocus=m._document.activeElement!==m._element.nativeElement||m.panelOpen},this._onChange=function(){},this._onTouched=function(){},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=Object(f.a)(function(){return m.autocomplete&&m.autocomplete.options?Object(v.a).apply(void 0,e(m.autocomplete.options.map(function(e){return e.onSelectionChange}))):m._zone.onStable.pipe(Object(k.a)(1),Object(w.a)(function(){return m.optionSelections}))}),this._scrollStrategy=r}return i(t,[{key:"ngAfterViewInit",value:function(){var e=this,t=this._getWindow();void 0!==t&&this._zone.runOutsideAngular(function(){return t.addEventListener("blur",e._windowBlurHandler)})}},{key:"ngOnChanges",value:function(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}},{key:"ngOnDestroy",value:function(){var e=this._getWindow();void 0!==e&&e.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}},{key:"openPanel",value:function(){this._attachOverlay(),this._floatLabel()}},{key:"closePanel",value:function(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this.autocomplete.closed.emit(),this.autocomplete._isOpen=this._overlayAttached=!1,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}},{key:"updatePosition",value:function(){this._overlayAttached&&this._overlayRef.updatePosition()}},{key:"_getOutsideClickStream",value:function(){var e=this;return Object(v.a)(Object(d.a)(this._document,"click"),Object(d.a)(this._document,"auxclick"),Object(d.a)(this._document,"touchend")).pipe(Object(S.a)(function(t){var n=e._isInsideShadowRoot&&t.composedPath?t.composedPath()[0]:t.target,i=e._formField?e._formField._elementRef.nativeElement:null,o=e.connectedTo?e.connectedTo.elementRef.nativeElement:null;return e._overlayAttached&&n!==e._element.nativeElement&&(!i||!i.contains(n))&&(!o||!o.contains(n))&&!!e._overlayRef&&!e._overlayRef.overlayElement.contains(n)}))}},{key:"writeValue",value:function(e){var t=this;Promise.resolve(null).then(function(){return t._setTriggerValue(e)})}},{key:"registerOnChange",value:function(e){this._onChange=e}},{key:"registerOnTouched",value:function(e){this._onTouched=e}},{key:"setDisabledState",value:function(e){this._element.nativeElement.disabled=e}},{key:"_handleKeydown",value:function(e){var t=e.keyCode;if(t!==b.f||Object(b.r)(e)||e.preventDefault(),this.activeOption&&t===b.e&&this.panelOpen)this.activeOption._selectViaInteraction(),this._resetActiveItem(),e.preventDefault();else if(this.autocomplete){var n=this.autocomplete._keyManager.activeItem,i=t===b.o||t===b.c;this.panelOpen||t===b.n?this.autocomplete._keyManager.onKeydown(e):i&&this._canOpen()&&this.openPanel(),(i||this.autocomplete._keyManager.activeItem!==n)&&this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0)}}},{key:"_handleInput",value:function(e){var t=e.target,n=t.value;"number"===t.type&&(n=""==n?null:parseFloat(n)),this._previousValue!==n&&(this._previousValue=n,this._onChange(n),this._canOpen()&&this._document.activeElement===e.target&&this.openPanel())}},{key:"_handleFocus",value:function(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}},{key:"_floatLabel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._formField&&"auto"===this._formField.floatLabel&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}},{key:"_resetLabel",value:function(){this._manuallyFloatingLabel&&(this._formField.floatLabel="auto",this._manuallyFloatingLabel=!1)}},{key:"_subscribeToClosingActions",value:function(){var e=this,t=this._zone.onStable.pipe(Object(k.a)(1)),n=this.autocomplete.options.changes.pipe(Object(A.a)(function(){return e._positionStrategy.reapplyLastPosition()}),Object(P.a)(0));return Object(v.a)(t,n).pipe(Object(w.a)(function(){var t=e.panelOpen;return e._resetActiveItem(),e.autocomplete._setVisibility(),e.panelOpen&&(e._overlayRef.updatePosition(),t!==e.panelOpen&&e.autocomplete.opened.emit()),e.panelClosingActions}),Object(k.a)(1)).subscribe(function(t){return e._setValueAndClose(t)})}},{key:"_destroyPanel",value:function(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}},{key:"_setTriggerValue",value:function(e){var t=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(e):e,n=null!=t?t:"";this._formField?this._formField._control.value=n:this._element.nativeElement.value=n,this._previousValue=n}},{key:"_setValueAndClose",value:function(e){e&&e.source&&(this._clearPreviousSelectedOption(e.source),this._setTriggerValue(e.source.value),this._onChange(e.source.value),this._element.nativeElement.focus(),this.autocomplete._emitSelectEvent(e.source)),this.closePanel()}},{key:"_clearPreviousSelectedOption",value:function(e){this.autocomplete.options.forEach(function(t){t!==e&&t.selected&&t.deselect()})}},{key:"_attachOverlay",value:function(){var e,t=this;null==this._isInsideShadowRoot&&(this._isInsideShadowRoot=!!Object(g.c)(this._element.nativeElement));var n=this._overlayRef;n?(this._positionStrategy.setOrigin(this._getConnectedElement()),n.updateSize({width:this._getPanelWidth()})):(this._portal=new O.h(this.autocomplete.template,this._viewContainerRef,{id:null===(e=this._formField)||void 0===e?void 0:e._labelId}),n=this._overlay.create(this._getOverlayConfig()),this._overlayRef=n,n.keydownEvents().subscribe(function(e){(e.keyCode===b.f&&!Object(b.r)(e)||e.keyCode===b.o&&Object(b.r)(e,"altKey"))&&(t._resetActiveItem(),t._closeKeyEventStream.next(),e.stopPropagation(),e.preventDefault())}),this._viewportSubscription=this._viewportRuler.change().subscribe(function(){t.panelOpen&&n&&n.updateSize({width:t._getPanelWidth()})})),n&&!n.hasAttached()&&(n.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());var i=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.panelOpen&&i!==this.panelOpen&&this.autocomplete.opened.emit()}},{key:"_getOverlayConfig",value:function(){var e;return new m.d({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir,panelClass:null===(e=this._defaults)||void 0===e?void 0:e.overlayPanelClass})}},{key:"_getOverlayPosition",value:function(){var e=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(e),this._positionStrategy=e,e}},{key:"_setStrategyPositions",value:function(e){var t,n=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:i},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:i}];t="above"===this.position?o:"below"===this.position?n:[].concat(n,o),e.withPositions(t)}},{key:"_getConnectedElement",value:function(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}},{key:"_getPanelWidth",value:function(){return this.autocomplete.panelWidth||this._getHostWidth()}},{key:"_getHostWidth",value:function(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}},{key:"_resetActiveItem",value:function(){this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption?0:-1)}},{key:"_canOpen",value:function(){var e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this._autocompleteDisabled}},{key:"_getWindow",value:function(){var e;return(null===(e=this._document)||void 0===e?void 0:e.defaultView)||window}},{key:"_scrollToOption",value:function(e){var t=this.autocomplete,n=Object(h.A)(e,t.options,t.optionGroups);if(0===e&&1===n)t._setScrollTop(0);else{var i=t.options.toArray()[e];if(i){var o=i._getHostElement(),a=Object(h.B)(o.offsetTop,o.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(a)}}}},{key:"autocompleteDisabled",get:function(){return this._autocompleteDisabled},set:function(e){this._autocompleteDisabled=Object(l.c)(e)}},{key:"panelOpen",get:function(){return this._overlayAttached&&this.autocomplete.showPanel}},{key:"panelClosingActions",get:function(){var e=this;return Object(v.a)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Object(S.a)(function(){return e._overlayAttached})),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Object(S.a)(function(){return e._overlayAttached})):Object(y.a)()).pipe(Object(C.a)(function(e){return e instanceof h.s?e:null}))}},{key:"activeOption",get:function(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}}]),t}()),V=function e(){c(this,e)}}}])}();