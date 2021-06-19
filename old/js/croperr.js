! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Croppr = e()
}(this, function() {
    "use strict";

    function t(t) {
        t.addEventListener("touchstart", e), t.addEventListener("touchend", e), t.addEventListener("touchmove", e)
    }

    function e(t) {
        t.preventDefault();
        var e = t.changedTouches[0],
            i = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            };
        e.target.dispatchEvent(new MouseEvent(i[t.type], {
            bubbles: !0,
            cancelable: !0,
            view: window,
            clientX: e.clientX,
            clientY: e.clientY,
            screenX: e.screenX,
            screenY: e.screenY
        }))
    }

    function i(t, e) {
        return Number(Math.round(t + "e" + e) + "e-" + e)
    }! function() {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
            var n = (new Date).getTime(),
                o = Math.max(0, 16 - (n - t)),
                s = window.setTimeout(function() {
                    e(n + o)
                }, o);
            return t = n + o, s
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }(),
    function() {
        function t(t, e) {
            e = e || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
        }
        return "function" != typeof window.CustomEvent && (t.prototype = window.Event.prototype, void(window.CustomEvent = t))
    }(),
    function(t) {
        function e(e, i) {
            i = i || {
                bubbles: !1,
                cancelable: !1
            };
            var n = document.createEvent("MouseEvent");
            return n.initMouseEvent(e, i.bubbles, i.cancelable, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n
        }
        try {
            return new CustomEvent("test"), !1
        } catch (t) {}
        e.prototype = Event.prototype, t.MouseEvent = e
    }(window);
    var n = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        s = function t(e, i, n) {
            null === e && (e = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(e, i);
            if (void 0 === o) {
                var s = Object.getPrototypeOf(e);
                return null === s ? void 0 : t(s, i, n)
            }
            if ("value" in o) return o.value;
            var r = o.get;
            if (void 0 !== r) return r.call(n)
        },
        r = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        },
        a = function(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        },
        h = function() {
            function t(t, e) {
                var i = [],
                    n = !0,
                    o = !1,
                    s = void 0;
                try {
                    for (var r, a = t[Symbol.iterator](); !(n = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); n = !0);
                } catch (t) {
                    o = !0, s = t
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o) throw s
                    }
                }
                return i
            }
            return function(e, i) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        l = function t(e, i, o, s) {
            function r(t) {
                t.stopPropagation(), document.addEventListener("mouseup", a), document.addEventListener("mousemove", h), l.eventBus.dispatchEvent(new CustomEvent("handlestart", {
                    detail: {
                        handle: l
                    }
                }))
            }

            function a(t) {
                t.stopPropagation(), document.removeEventListener("mouseup", a), document.removeEventListener("mousemove", h), l.eventBus.dispatchEvent(new CustomEvent("handleend", {
                    detail: {
                        handle: l
                    }
                }))
            }

            function h(t) {
                t.stopPropagation(), l.eventBus.dispatchEvent(new CustomEvent("handlemove", {
                    detail: {
                        mouseX: t.clientX,
                        mouseY: t.clientY
                    }
                }))
            }
            n(this, t);
            var l = this;
            this.position = e, this.constraints = i, this.cursor = o, this.eventBus = s, this.el = document.createElement("div"), this.el.className = "croppr-handle", this.el.style.cursor = o, this.el.addEventListener("mousedown", r)
        },
        u = function() {
            function t(e, i, o, s) {
                n(this, t), this.x1 = e, this.y1 = i, this.x2 = o, this.y2 = s
            }
            return o(t, [{
                key: "set",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    return this.x1 = null == t ? this.x1 : t, this.y1 = null == e ? this.y1 : e, this.x2 = null == i ? this.x2 : i, this.y2 = null == n ? this.y2 : n, this
                }
            }, {
                key: "width",
                value: function() {
                    return Math.abs(this.x2 - this.x1)
                }
            }, {
                key: "height",
                value: function() {
                    return Math.abs(this.y2 - this.y1)
                }
            }, {
                key: "resize",
                value: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [0, 0],
                        n = this.x1 + this.width() * i[0],
                        o = this.y1 + this.height() * i[1];
                    return this.x1 = n - t * i[0], this.y1 = o - e * i[1], this.x2 = this.x1 + t, this.y2 = this.y1 + e, this
                }
            }, {
                key: "scale",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0, 0],
                        i = this.width() * t,
                        n = this.height() * t;
                    return this.resize(i, n, e), this
                }
            }, {
                key: "move",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = this.width(),
                        n = this.height();
                    return t = null === t ? this.x1 : t, e = null === e ? this.y1 : e, this.x1 = t, this.y1 = e, this.x2 = t + i, this.y2 = e + n, this
                }
            }, {
                key: "getRelativePoint",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [0, 0],
                        e = this.width() * t[0],
                        i = this.height() * t[1];
                    return [e, i]
                }
            }, {
                key: "getAbsolutePoint",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [0, 0],
                        e = this.x1 + this.width() * t[0],
                        i = this.y1 + this.height() * t[1];
                    return [e, i]
                }
            }, {
                key: "constrainToRatio",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0, 0],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "height";
                    if (null !== t) {
                        this.width(), this.height();
                        switch (i) {
                            case "height":
                                this.resize(this.width(), this.width() * t, e);
                                break;
                            case "width":
                                this.resize(1 * this.height() / t, this.height(), e);
                                break;
                            default:
                                this.resize(this.width(), this.width() * t, e)
                        }
                        return this
                    }
                }
            }, {
                key: "constrainToBoundary",
                value: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [0, 0],
                        n = this.getAbsolutePoint(i),
                        o = h(n, 2),
                        s = o[0],
                        r = o[1],
                        a = s,
                        l = r,
                        u = t - s,
                        d = e - r,
                        c = -2 * i[0] + 1,
                        p = -2 * i[1] + 1,
                        v = null,
                        m = null;
                    switch (c) {
                        case -1:
                            v = a;
                            break;
                        case 0:
                            v = 2 * Math.min(a, u);
                            break;
                        case 1:
                            v = u
                    }
                    switch (p) {
                        case -1:
                            m = l;
                            break;
                        case 0:
                            m = 2 * Math.min(l, d);
                            break;
                        case 1:
                            m = d
                    }
                    if (this.width() > v) {
                        var f = v / this.width();
                        this.scale(f, i)
                    }
                    if (this.height() > m) {
                        var g = m / this.height();
                        this.scale(g, i)
                    }
                    return this
                }
            }, {
                key: "constrainToSize",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [0, 0],
                        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                    if (s && (s > 1 ? (t = 1 * e / s, n *= s) : s < 1 && (e = t * s, i = 1 * n / s)), t && this.width() > t) {
                        var r = t,
                            a = null === s ? this.height() : e;
                        this.resize(r, a, o)
                    }
                    if (e && this.height() > e) {
                        var h = null === s ? this.width() : t,
                            l = e;
                        this.resize(h, l, o)
                    }
                    if (i && this.width() < i) {
                        var u = i,
                            d = null === s ? this.height() : n;
                        this.resize(u, d, o)
                    }
                    if (n && this.height() < n) {
                        var c = null === s ? this.width() : i,
                            p = n;
                        this.resize(c, p, o)
                    }
                    return this
                }
            }]), t
        }(),
        d = [{
            position: [0, 0],
            constraints: [1, 0, 0, 1],
            cursor: "nw-resize"
        }, {
            position: [.5, 0],
            constraints: [1, 0, 0, 0],
            cursor: "n-resize"
        }, {
            position: [1, 0],
            constraints: [1, 1, 0, 0],
            cursor: "ne-resize"
        }, {
            position: [1, .5],
            constraints: [0, 1, 0, 0],
            cursor: "e-resize"
        }, {
            position: [1, 1],
            constraints: [0, 1, 1, 0],
            cursor: "se-resize"
        }, {
            position: [.5, 1],
            constraints: [0, 0, 1, 0],
            cursor: "s-resize"
        }, {
            position: [0, 1],
            constraints: [0, 0, 1, 1],
            cursor: "sw-resize"
        }, {
            position: [0, .5],
            constraints: [0, 0, 0, 1],
            cursor: "w-resize"
        }],
        c = function() {
            function e(t, i) {
                var o = this,
                    s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (n(this, e), this.options = e.parseOptions(i || {}), !t.nodeName && (t = document.querySelector(t), null == t)) throw "Unable to find element.";
                if (!t.getAttribute("src")) throw "Image src not provided.";
                this._initialized = !1, this._restore = {
                    parent: t.parentNode,
                    element: t
                }, s || (0 === t.width || 0 === t.height ? t.onload = function() {
                    o.initialize(t)
                } : this.initialize(t))
            }
            return o(e, [{
                key: "initialize",
                value: function(t) {
                    this.createDOM(t), this.options.convertToPixels(this.cropperEl), this.attachHandlerEvents(), this.attachRegionEvents(), this.attachOverlayEvents(), this.box = this.initializeBox(this.options), this.redraw(), this._initialized = !0, null !== this.options.onInitialize && this.options.onInitialize(this)
                }
            }, {
                key: "createDOM",
                value: function(e) {
                    this.containerEl = document.createElement("div"), this.containerEl.className = "croppr-container", this.eventBus = this.containerEl, t(this.containerEl), this.cropperEl = document.createElement("div"), this.cropperEl.className = "croppr", this.imageEl = document.createElement("img"), this.imageEl.setAttribute("src", e.getAttribute("src")), this.imageEl.setAttribute("alt", e.getAttribute("alt")), this.imageEl.className = "croppr-image", this.imageClippedEl = this.imageEl.cloneNode(), this.imageClippedEl.className = "croppr-imageClipped", this.regionEl = document.createElement("div"), this.regionEl.className = "croppr-region", this.overlayEl = document.createElement("div"), this.overlayEl.className = "croppr-overlay";
                    var i = document.createElement("div");
                    i.className = "croppr-handleContainer", this.handles = [];
                    for (var n = 0; n < d.length; n++) {
                        var o = new l(d[n].position, d[n].constraints, d[n].cursor, this.eventBus);
                        this.handles.push(o), i.appendChild(o.el)
                    }
                    this.cropperEl.appendChild(this.imageEl), this.cropperEl.appendChild(this.imageClippedEl), this.cropperEl.appendChild(this.regionEl), this.cropperEl.appendChild(this.overlayEl), this.cropperEl.appendChild(i), this.containerEl.appendChild(this.cropperEl), e.parentElement.replaceChild(this.containerEl, e)
                }
            }, {
                key: "setImage",
                value: function(t) {
                    var e = this;
                    return this.imageEl.onload = function() {
                        e.box = e.initializeBox(e.options), e.redraw()
                    }, this.imageEl.src = t, this.imageClippedEl.src = t, this
                }
            }, {
                key: "destroy",
                value: function() {
                    this._restore.parent.replaceChild(this._restore.element, this.containerEl)
                }
            }, {
                key: "initializeBox",
                value: function(t) {
                    var e = t.startSize.width,
                        i = t.startSize.height,
                        n = new u(0, 0, e, i);
                    n.constrainToRatio(t.aspectRatio, [.5, .5]);
                    var o = t.minSize,
                        s = t.maxSize;
                    n.constrainToSize(s.width, s.height, o.width, o.height, [.5, .5], t.aspectRatio);
                    var r = this.cropperEl.offsetWidth,
                        a = this.cropperEl.offsetHeight;
                    n.constrainToBoundary(r, a, [.5, .5]);
                    var h = this.cropperEl.offsetWidth / 2 - n.width() / 2,
                        l = this.cropperEl.offsetHeight / 2 - n.height() / 2;
                    return n.move(h, l), n
                }
            }, {
                key: "redraw",
                value: function() {
                    var t = this,
                        e = Math.round(this.box.width()),
                        i = Math.round(this.box.height()),
                        n = Math.round(this.box.x1),
                        o = Math.round(this.box.y1),
                        s = Math.round(this.box.x2),
                        r = Math.round(this.box.y2);
                    window.requestAnimationFrame(function() {
                        t.regionEl.style.transform = "translate(" + n + "px, " + o + "px)", t.regionEl.style.width = e + "px", t.regionEl.style.height = i + "px", t.imageClippedEl.style.clip = "rect(" + o + "px, " + s + "px, " + r + "px, " + n + "px)";
                        for (var a = t.box.getAbsolutePoint([.5, .5]), h = a[0] - t.cropperEl.offsetWidth / 2 >> 31, l = a[1] - t.cropperEl.offsetHeight / 2 >> 31, u = (h ^ l) + l + l + 4, d = -2 * u + 8, c = 0; c < t.handles.length; c++) {
                            var p = t.handles[c],
                                v = p.el.offsetWidth,
                                m = p.el.offsetHeight,
                                f = n + e * p.position[0] - v / 2,
                                g = o + i * p.position[1] - m / 2;
                            p.el.style.transform = "translate(" + Math.round(f) + "px, " + Math.round(g) + "px)", p.el.style.zIndex = d == c ? 5 : 4
                        }
                    })
                }
            }, {
                key: "attachHandlerEvents",
                value: function() {
                    var t = this.eventBus;
                    t.addEventListener("handlestart", this.onHandleMoveStart.bind(this)), t.addEventListener("handlemove", this.onHandleMoveMoving.bind(this)), t.addEventListener("handleend", this.onHandleMoveEnd.bind(this))
                }
            }, {
                key: "attachRegionEvents",
                value: function() {
                    function t(t) {
                        t.stopPropagation(), document.addEventListener("mouseup", i), document.addEventListener("mousemove", e), n.dispatchEvent(new CustomEvent("regionstart", {
                            detail: {
                                mouseX: t.clientX,
                                mouseY: t.clientY
                            }
                        }))
                    }

                    function e(t) {
                        t.stopPropagation(), n.dispatchEvent(new CustomEvent("regionmove", {
                            detail: {
                                mouseX: t.clientX,
                                mouseY: t.clientY
                            }
                        }))
                    }

                    function i(t) {
                        t.stopPropagation(), document.removeEventListener("mouseup", i), document.removeEventListener("mousemove", e), n.dispatchEvent(new CustomEvent("regionend", {
                            detail: {
                                mouseX: t.clientX,
                                mouseY: t.clientY
                            }
                        }))
                    }
                    var n = this.eventBus;
                    this.regionEl.addEventListener("mousedown", t), n.addEventListener("regionstart", this.onRegionMoveStart.bind(this)), n.addEventListener("regionmove", this.onRegionMoveMoving.bind(this)), n.addEventListener("regionend", this.onRegionMoveEnd.bind(this))
                }
            }, {
                key: "attachOverlayEvents",
                value: function() {
                    function t(t) {
                        t.stopPropagation(), document.addEventListener("mouseup", i), document.addEventListener("mousemove", e);
                        var r = o.cropperEl.getBoundingClientRect(),
                            a = t.clientX - r.left,
                            h = t.clientY - r.top;
                        s = o.box, o.box = new u(a, h, a + 1, h + 1), o.eventBus.dispatchEvent(new CustomEvent("handlestart", {
                            detail: {
                                handle: o.handles[n]
                            }
                        }))
                    }

                    function e(t) {
                        t.stopPropagation(), o.eventBus.dispatchEvent(new CustomEvent("handlemove", {
                            detail: {
                                mouseX: t.clientX,
                                mouseY: t.clientY
                            }
                        }))
                    }

                    function i(t) {
                        return t.stopPropagation(), document.removeEventListener("mouseup", i), document.removeEventListener("mousemove", e), 1 === o.box.width() && 1 === o.box.height() ? void(o.box = s) : void o.eventBus.dispatchEvent(new CustomEvent("handleend", {
                            detail: {
                                mouseX: t.clientX,
                                mouseY: t.clientY
                            }
                        }))
                    }
                    var n = 4,
                        o = this,
                        s = null;
                    this.overlayEl.addEventListener("mousedown", t)
                }
            }, {
                key: "onHandleMoveStart",
                value: function(t) {
                    var e = t.detail.handle,
                        i = [1 - e.position[0], 1 - e.position[1]],
                        n = this.box.getAbsolutePoint(i),
                        o = h(n, 2),
                        s = o[0],
                        r = o[1];
                    this.activeHandle = {
                        handle: e,
                        originPoint: i,
                        originX: s,
                        originY: r
                    }, null !== this.options.onCropStart && this.options.onCropStart(this.getValue())
                }
            }, {
                key: "onHandleMoveMoving",
                value: function(t) {
                    var e = t.detail,
                        i = e.mouseX,
                        n = e.mouseY,
                        o = this.cropperEl.getBoundingClientRect();
                    i -= o.left, n -= o.top, i < 0 ? i = 0 : i > o.width && (i = o.width), n < 0 ? n = 0 : n > o.height && (n = o.height);
                    var s = this.activeHandle.originPoint.slice(),
                        r = this.activeHandle.originX,
                        a = this.activeHandle.originY,
                        h = this.activeHandle.handle,
                        l = 1 === h.constraints[0],
                        d = 1 === h.constraints[1],
                        c = 1 === h.constraints[2],
                        p = 1 === h.constraints[3],
                        v = (p || d) && (l || c),
                        m = p || d ? r : this.box.x1,
                        f = p || d ? r : this.box.x2,
                        g = l || c ? a : this.box.y1,
                        E = l || c ? a : this.box.y2;
                    m = p ? i : m, f = d ? i : f, g = l ? n : g, E = c ? n : E;
                    var w = !1,
                        y = !1;
                    if ((p || d) && (w = p ? i > r : i < r), (l || c) && (y = l ? n > a : n < a), w) {
                        var b = m;
                        m = f, f = b, s[0] = 1 - s[0]
                    }
                    if (y) {
                        var x = g;
                        g = E, E = x, s[1] = 1 - s[1]
                    }
                    var C = new u(m, g, f, E);
                    if (this.options.aspectRatio) {
                        var z = this.options.aspectRatio,
                            M = !1;
                        v ? M = n > C.y1 + z * C.width() || n < C.y2 - z * C.width() : (l || c) && (M = !0);
                        var S = M ? "width" : "height";
                        C.constrainToRatio(z, s, S)
                    }
                    var k = this.options.minSize,
                        R = this.options.maxSize;
                    C.constrainToSize(R.width, R.height, k.width, k.height, s, this.options.aspectRatio);
                    var P = this.cropperEl.offsetWidth,
                        O = this.cropperEl.offsetHeight;
                    C.constrainToBoundary(P, O, s), this.box = C, this.redraw(), null !== this.options.onCropMove && this.options.onCropMove(this.getValue())
                }
            }, {
                key: "onHandleMoveEnd",
                value: function(t) {
                    null !== this.options.onCropEnd && this.options.onCropEnd(this.getValue())
                }
            }, {
                key: "onRegionMoveStart",
                value: function(t) {
                    var e = t.detail,
                        i = e.mouseX,
                        n = e.mouseY,
                        o = this.cropperEl.getBoundingClientRect();
                    i -= o.left, n -= o.top, this.currentMove = {
                        offsetX: i - this.box.x1,
                        offsetY: n - this.box.y1
                    }, null !== this.options.onCropStart && this.options.onCropStart(this.getValue())
                }
            }, {
                key: "onRegionMoveMoving",
                value: function(t) {
                    var e = t.detail,
                        i = e.mouseX,
                        n = e.mouseY,
                        o = this.currentMove,
                        s = o.offsetX,
                        r = o.offsetY,
                        a = this.cropperEl.getBoundingClientRect();
                    i -= a.left, n -= a.top, this.box.move(i - s, n - r), this.box.x1 < 0 && this.box.move(0, null), this.box.x2 > a.width && this.box.move(a.width - this.box.width(), null), this.box.y1 < 0 && this.box.move(null, 0), this.box.y2 > a.height && this.box.move(null, a.height - this.box.height()), this.redraw(), null !== this.options.onCropMove && this.options.onCropMove(this.getValue())
                }
            }, {
                key: "onRegionMoveEnd",
                value: function(t) {
                    null !== this.options.onCropEnd && this.options.onCropEnd(this.getValue())
                }
            }, {
                key: "getValue",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if (null === t && (t = this.options.returnMode), "real" == t) {
                        var e = this.imageEl.naturalWidth,
                            n = this.imageEl.naturalHeight,
                            o = this.imageEl.getBoundingClientRect(),
                            s = o.width,
                            r = o.height,
                            a = e / s,
                            h = n / r;
                        return {
                            x: Math.round(this.box.x1 * a),
                            y: Math.round(this.box.y1 * h),
                            width: Math.round(this.box.width() * a),
                            height: Math.round(this.box.height() * h)
                        }
                    }
                    if ("ratio" == t) {
                        var l = this.imageEl.getBoundingClientRect(),
                            u = l.width,
                            d = l.height;
                        return {
                            x: i(this.box.x1 / u, 3),
                            y: i(this.box.y1 / d, 3),
                            width: i(this.box.width() / u, 3),
                            height: i(this.box.height() / d, 3)
                        }
                    }
                    if ("raw" == t) return {
                        x: Math.round(this.box.x1),
                        y: Math.round(this.box.y1),
                        width: Math.round(this.box.width()),
                        height: Math.round(this.box.height())
                    }
                }
            }], [{
                key: "parseOptions",
                value: function(t) {
                    var e = {
                            aspectRatio: null,
                            maxSize: {
                                width: null,
                                height: null
                            },
                            minSize: {
                                width: null,
                                height: null
                            },
                            startSize: {
                                width: 100,
                                height: 100,
                                unit: "%"
                            },
                            returnMode: "real",
                            onInitialize: null,
                            onCropStart: null,
                            onCropMove: null,
                            onCropEnd: null
                        },
                        i = null;
                    void 0 !== t.aspectRatio && ("number" == typeof t.aspectRatio ? i = t.aspectRatio : t.aspectRatio instanceof Array && (i = t.aspectRatio[1] / t.aspectRatio[0]));
                    var n = null;
                    void 0 !== t.maxSize && null !== t.maxSize && (n = {
                        width: t.maxSize[0] || null,
                        height: t.maxSize[1] || null,
                        unit: t.maxSize[2] || "px"
                    });
                    var o = null;
                    void 0 !== t.minSize && null !== t.minSize && (o = {
                        width: t.minSize[0] || null,
                        height: t.minSize[1] || null,
                        unit: t.minSize[2] || "px"
                    });
                    var s = null;
                    void 0 !== t.startSize && null !== t.startSize && (s = {
                        width: t.startSize[0] || null,
                        height: t.startSize[1] || null,
                        unit: t.startSize[2] || "%"
                    });
                    var r = null;
                    "function" == typeof t.onInitialize && (r = t.onInitialize);
                    var a = null;
                    "function" == typeof t.onCropStart && (a = t.onCropStart);
                    var h = null;
                    "function" == typeof t.onCropEnd && (h = t.onCropEnd);
                    var l = null;
                    "function" == typeof t.onUpdate && (console.warn("Croppr.js: `onUpdate` is deprecated and will be removed in the next major release. Please use `onCropMove` or `onCropEnd` instead."), l = t.onUpdate), "function" == typeof t.onCropMove && (l = t.onCropMove);
                    var u = null;
                    if (void 0 !== t.returnMode) {
                        var d = t.returnMode.toLowerCase();
                        if (["real", "ratio", "raw"].indexOf(d) === -1) throw "Invalid return mode.";
                        u = d
                    }
                    var c = function(t) {
                            for (var e = t.offsetWidth, i = t.offsetHeight, n = ["maxSize", "minSize", "startSize"], o = 0; o < n.length; o++) {
                                var s = n[o];
                                null !== this[s] && ("%" == this[s].unit && (null !== this[s].width && (this[s].width = this[s].width / 100 * e), null !== this[s].height && (this[s].height = this[s].height / 100 * i)), delete this[s].unit)
                            }
                        },
                        p = function(t, e) {
                            return null !== t ? t : e
                        };
                    return {
                        aspectRatio: p(i, e.aspectRatio),
                        maxSize: p(n, e.maxSize),
                        minSize: p(o, e.minSize),
                        startSize: p(s, e.startSize),
                        returnMode: p(u, e.returnMode),
                        onInitialize: p(r, e.onInitialize),
                        onCropStart: p(a, e.onCropStart),
                        onCropMove: p(l, e.onCropMove),
                        onCropEnd: p(h, e.onCropEnd),
                        convertToPixels: c
                    }
                }
            }]), e
        }(),
        p = function(t) {
            function e(t, i) {
                var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return n(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }
            return r(e, t), o(e, [{
                key: "getValue",
                value: function(t) {
                    return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "getValue", this).call(this, t)
                }
            }, {
                key: "setImage",
                value: function(t) {
                    return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setImage", this).call(this, t)
                }
            }, {
                key: "destroy",
                value: function() {
                    return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
                }
            }, {
                key: "moveTo",
                value: function(t, e) {
                    return this.box.move(t, e), this.redraw(), null !== this.options.onCropEnd && this.options.onCropEnd(this.getValue()), this
                }
            }, {
                key: "resizeTo",
                value: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [.5, .5];
                    return this.box.resize(t, e, i), this.redraw(), null !== this.options.onCropEnd && this.options.onCropEnd(this.getValue()), this
                }
            }, {
                key: "scaleBy",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [.5, .5];
                    return this.box.scale(t, e), this.redraw(), null !== this.options.onCropEnd && this.options.onCropEnd(this.getValue()), this
                }
            }, {
                key: "reset",
                value: function() {
                    return this.box = this.initializeBox(this.options), this.redraw(), null !== this.options.onCropEnd && this.options.onCropEnd(this.getValue()), this
                }
            }]), e
        }(c);
    return p
});