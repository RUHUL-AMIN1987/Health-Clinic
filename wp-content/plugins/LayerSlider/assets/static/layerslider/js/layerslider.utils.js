/*
 * LayerSlider Utils
 *
 * (c) 2011-2024 George Krupa, John Gera & Kreatura Media
 *
 * LayerSlider home:		https://layerslider.com/
 * Licensing:			https://layerslider.com/licensing/
 */



;
var LS_oldGS, LS_oldGSQueue, LS_oldGSDefine, LS_GSAP, _initLayerSlider = function(i, t, e) {
    var r = jQuery;
    r(document).ready(function() {
        void 0 === r.fn.layerSlider ? window._layerSlider && window._layerSlider.showNotice && window._layerSlider.showNotice(i, "jquery") : (e && r.each(e, function(t, e) {
            r(i).on(t, e)
        }), r(i).layerSlider(t))
    })
};
"object" == typeof LS_Meta && LS_Meta.fixGSAP && (LS_oldGS = window.GreenSockGlobals, LS_oldGSQueue = window._gsQueue, LS_oldGSDefine = window._gsDefine, window._gsDefine = null, delete window._gsDefine, LS_GSAP = window.GreenSockGlobals = {});
var LS_pp1 = "ht",
    LS_pp2 = "tp:",
    LS_pp3 = "//",
    LS_nsProtocol = LS_pp1 + LS_pp2 + LS_pp3,
    _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var P, y, v, x, g, e, m, t;

        function T(t, e, i, r) {
            i === r && (i = r - (r - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = r, this.da = r - t, this.ca = i - t, this.ba = e - t
        }

        function w(t, e, i, r) {
            var n = {
                    a: t
                },
                s = {},
                a = {},
                o = {
                    c: r
                },
                l = (t + e) / 2,
                h = (i + r) / 2,
                u = ((i = ((u = (e + i) / 2) + h) / 2) - (e = (l + u) / 2)) / 8;
            return n.b = l + (t - l) / 4, s.b = e + u, n.c = s.a = (n.b + s.b) / 2, s.c = a.a = (e + i) / 2, a.b = i - u, o.b = h + (r - h) / 4, a.c = o.a = (a.b + o.b) / 2, [n, s, a, o]
        }

        function f(t, e, i, r, n, s) {
            var a, o, l, h, u, _, f, c, p = {},
                d = [],
                m = s || t[0];
            for (o in n = "string" == typeof n ? "," + n + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) d.push(o);
            if (1 < t.length) {
                for (c = t[t.length - 1], f = !0, a = d.length; - 1 < --a;)
                    if (o = d[a], .05 < Math.abs(m[o] - c[o])) {
                        f = !1;
                        break
                    }
                f && (t = t.concat(), s && t.unshift(s), t.push(t[1]), s = t[t.length - 3])
            }
            for (y.length = v.length = x.length = 0, a = d.length; - 1 < --a;) o = d[a], g[o] = -1 !== n.indexOf("," + o + ","), p[o] = function(t, e, i, r) {
                var n, s, a, o, l, h, u = [];
                if (r)
                    for (s = (t = [r].concat(t)).length; - 1 < --s;) "string" == typeof(h = t[s][e]) && "=" === h.charAt(1) && (t[s][e] = r[e] + Number(h.charAt(0) + h.substr(2)));
                if ((n = t.length - 2) < 0) return u[0] = new T(t[0][e], 0, 0, t[0][e]), u;
                for (s = 0; s < n; s++) a = t[s][e], o = t[s + 1][e], u[s] = new T(a, 0, 0, o), i && (l = t[s + 2][e], y[s] = (y[s] || 0) + (o - a) * (o - a), v[s] = (v[s] || 0) + (l - o) * (l - o));
                return u[s] = new T(t[s][e], 0, 0, t[s + 1][e]), u
            }(t, o, g[o], s);
            for (a = y.length; - 1 < --a;) y[a] = Math.sqrt(y[a]), v[a] = Math.sqrt(v[a]);
            if (!r) {
                for (a = d.length; - 1 < --a;)
                    if (g[o])
                        for (_ = (l = p[d[a]]).length - 1, h = 0; h < _; h++) u = l[h + 1].da / v[h] + l[h].da / y[h] || 0, x[h] = (x[h] || 0) + u * u;
                for (a = x.length; - 1 < --a;) x[a] = Math.sqrt(x[a])
            }
            for (a = d.length, h = i ? 4 : 1; - 1 < --a;)(function(t, e, i, r, n) {
                for (var s, a, o, l, h, u, _, f, c, p = t.length - 1, d = 0, m = t[0].a, g = 0; g < p; g++) s = (o = t[d]).a, a = o.d, h = t[d + 1].d, h = n ? (_ = y[g], c = ((f = v[g]) + _) * e * .25 / (!r && x[g] || .5), a - ((l = a - (a - s) * (r ? .5 * e : 0 !== _ ? c / _ : 0)) + (((c = a + (h - a) * (r ? .5 * e : 0 !== f ? c / f : 0)) - l) * (3 * _ / (_ + f) + .5) / 4 || 0))) : a - ((l = a - (a - s) * e * .5) + (c = a + (h - a) * e * .5)) / 2, l += h, c += h, o.c = h = l, o.b = 0 !== g ? m : m = o.a + .6 * (o.c - o.a), o.da = a - s, o.ca = h - s, o.ba = m - s, i ? (u = w(s, m, h, a), t.splice(d, 1, u[0], u[1], u[2], u[3]), d += 4) : d++, m = c;
                (o = t[d]).b = m, o.c = m + .4 * (o.d - m), o.da = o.d - o.a, o.ca = o.c - o.a, o.ba = m - o.a, i && (u = w(o.a, m, o.c, o.d), t.splice(d, 1, u[0], u[1], u[2], u[3]))
            })(l = p[o = d[a]], e, i, r, g[o]), f && (l.splice(0, h), l.splice(l.length - h, h));
            return p
        }

        function c(t, e) {
            var i, r, n, s, a = [],
                o = [],
                l = 0,
                h = 0,
                u = (e = e >> 0 || 6) - 1,
                _ = [],
                f = [];
            for (i in t) ! function(t, e, i) {
                for (var r, n, s, a, o, l, h, u, _, f = 1 / i, c = t.length; - 1 < --c;)
                    for (n = (u = t[c]).a, s = u.d - n, a = u.c - n, o = u.b - n, r = 0, l = 1; l <= i; l++) h = r - (r = ((_ = f * l) * _ * s + 3 * (h = 1 - _) * (_ * a + h * o)) * _), e[_ = c * i + l - 1] = (e[_] || 0) + h * h
            }(t[i], a, e);
            for (n = a.length, r = 0; r < n; r++) l += Math.sqrt(a[r]), f[s = r % e] = l, s == u && (h += l, _[s = r / e >> 0] = f, o[s] = h, l = 0, f = []);
            return {
                length: h,
                lengths: o,
                segments: _
            }
        }
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(r, u, g) {
            function d(t) {
                for (var e = [], i = t.length, r = 0; r !== i; e.push(t[r++]));
                return e
            }

            function m(t, e, i) {
                var r, n, s = t.cycle;
                for (r in s) n = s[r], t[r] = "function" == typeof n ? n(i, e[i], e) : n[i % n.length];
                delete t.cycle
            }

            function y(t) {
                if ("function" == typeof t) return t;
                var c = "object" == typeof t ? t : {
                        each: t
                    },
                    p = c.ease,
                    d = c.from || 0,
                    m = c.base || 0,
                    g = {},
                    y = isNaN(d),
                    v = c.axis,
                    x = {
                        center: .5,
                        end: 1
                    }[d] || 0;
                return function(t, e, i) {
                    var r, n, s, a, o, l, h, u, _ = (i || c).length,
                        f = g[_];
                    if (!f) {
                        if (!(u = "auto" === c.grid ? 0 : (c.grid || [1 / 0])[0])) {
                            for (l = -1 / 0; l < (l = i[u++].getBoundingClientRect().left) && u < _;);
                            u--
                        }
                        for (f = g[_] = [], r = y ? Math.min(u, _) * x - .5 : d % u, n = y ? _ * x / u - .5 : d / u | 0, h = 1 / (l = 0), o = 0; o < _; o++) s = o % u - r, a = n - (o / u | 0), f[o] = a = v ? Math.abs("y" === v ? a : s) : Math.sqrt(s * s + a * a), l < a && (l = a), a < h && (h = a);
                        f.max = l - h, f.min = h, f.v = _ = c.amount || c.each * (_ < u ? _ - 1 : v ? "y" === v ? _ / u : u : Math.max(u, _ / u)) || 0, f.b = _ < 0 ? m - _ : m
                    }
                    return _ = (f[t] - f.min) / f.max, f.b + (p ? p.getRatio(_) : _) * f.v
                }
            }
            var v = function(t, e, i) {
                    g.call(this, t, e, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = v.prototype.render
                },
                x = 1e-8,
                T = g._internals,
                w = T.isSelector,
                b = T.isArray,
                t = v.prototype = g.to({}, .1, {}),
                P = [];
            v.version = "2.1.3", t.constructor = v, t.kill()._gc = !1, v.killTweensOf = v.killDelayedCallsTo = g.killTweensOf, v.getTweensOf = g.getTweensOf, v.lagSmoothing = g.lagSmoothing, v.ticker = g.ticker, v.render = g.render, v.distribute = y, t.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), g.prototype.invalidate.call(this)
            }, t.updateTo = function(t, e) {
                var i, r = this,
                    n = r.ratio,
                    s = r.vars.immediateRender || t.immediateRender;
                for (i in e && r._startTime < r._timeline._time && (r._startTime = r._timeline._time, r._uncache(!1), r._gc ? r._enabled(!0, !1) : r._timeline.insert(r, r._startTime - r._delay)), t) r.vars[i] = t[i];
                if (r._initted || s)
                    if (e) r._initted = !1, s && r.render(0, !0, !0);
                    else if (r._gc && r._enabled(!0, !1), r._notifyPluginsOfEnabled && r._firstPT && g._onPluginEvent("_onDisable", r), .998 < r._time / r._duration) {
                    e = r._totalTime;
                    r.render(0, !0, !1), r._initted = !1, r.render(e, !0, !1)
                } else if (r._initted = !1, r._init(), 0 < r._time || s)
                    for (var a, o = 1 / (1 - n), l = r._firstPT; l;) a = l.s + l.c, l.c *= o, l.s = a - l.c, l = l._next;
                return r
            }, t.render = function(t, e, i) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var r, n, s, a, o, l, h, u = this,
                    _ = u._dirty ? u.totalDuration() : u._totalDuration,
                    f = u._time,
                    c = u._totalTime,
                    p = u._cycle,
                    d = u._duration,
                    m = u._rawPrevTime;
                if (_ - x <= t && 0 <= t ? (u._totalTime = _, u._cycle = u._repeat, u._yoyo && 0 != (1 & u._cycle) ? (u._time = 0, u.ratio = u._ease._calcEnd ? u._ease.getRatio(0) : 0) : (u._time = d, u.ratio = u._ease._calcEnd ? u._ease.getRatio(1) : 1), u._reversed || (r = !0, n = "onComplete", i = i || u._timeline.autoRemoveChildren), 0 !== d || !u._initted && u.vars.lazy && !i || (u._startTime === u._timeline._duration && (t = 0), (m < 0 || t <= 0 && -x <= t || m === x && "isPause" !== u.data) && m !== t && (i = !0, x < m && (n = "onReverseComplete")), u._rawPrevTime = l = !e || t || m === t ? t : x)) : t < x ? (u._totalTime = u._time = u._cycle = 0, u.ratio = u._ease._calcEnd ? u._ease.getRatio(0) : 0, (0 !== c || 0 === d && 0 < m) && (n = "onReverseComplete", r = u._reversed), -x < t ? t = 0 : t < 0 && (u._active = !1, 0 !== d || !u._initted && u.vars.lazy && !i || (0 <= m && (i = !0), u._rawPrevTime = l = !e || t || m === t ? t : x)), u._initted || (i = !0)) : (u._totalTime = u._time = t, 0 !== u._repeat && (o = d + u._repeatDelay, u._cycle = u._totalTime / o >> 0, 0 !== u._cycle && u._cycle === u._totalTime / o && c <= t && u._cycle--, u._time = u._totalTime - u._cycle * o, u._yoyo && 0 != (1 & u._cycle) && (u._time = d - u._time, (h = u._yoyoEase || u.vars.yoyoEase) && (u._yoyoEase || (!0 !== h || u._initted ? u._yoyoEase = h = !0 === h ? u._ease : h instanceof Ease ? h : Ease.map[h] : (h = u.vars.ease, u._yoyoEase = h = h ? h instanceof Ease ? h : "function" == typeof h ? new Ease(h, u.vars.easeParams) : Ease.map[h] || g.defaultEase : g.defaultEase)), u.ratio = h ? 1 - h.getRatio((d - u._time) / d) : 0)), u._time > d ? u._time = d : u._time < 0 && (u._time = 0)), u._easeType && !h ? (a = u._time / d, (1 === (_ = u._easeType) || 3 === _ && .5 <= a) && (a = 1 - a), 3 === _ && (a *= 2), 1 === (o = u._easePower) ? a *= a : 2 === o ? a *= a * a : 3 === o ? a *= a * a * a : 4 === o && (a *= a * a * a * a), u.ratio = 1 === _ ? 1 - a : 2 === _ ? a : u._time / d < .5 ? a / 2 : 1 - a / 2) : h || (u.ratio = u._ease.getRatio(u._time / d))), f !== u._time || i || p !== u._cycle) {
                    if (!u._initted) {
                        if (u._init(), !u._initted || u._gc) return;
                        if (!i && u._firstPT && (!1 !== u.vars.lazy && u._duration || u.vars.lazy && !u._duration)) return u._time = f, u._totalTime = c, u._rawPrevTime = m, u._cycle = p, T.lazyTweens.push(u), void(u._lazy = [t, e]);
                        !u._time || r || h ? r && this._ease._calcEnd && !h && (u.ratio = u._ease.getRatio(0 === u._time ? 0 : 1)) : u.ratio = u._ease.getRatio(u._time / d)
                    }
                    for (!1 !== u._lazy && (u._lazy = !1), u._active || !u._paused && u._time !== f && 0 <= t && (u._active = !0), 0 === c && (2 === u._initted && 0 < t && u._init(), u._startAt && (0 <= t ? u._startAt.render(t, !0, i) : n = n || "_dummyGS"), !u.vars.onStart || 0 === u._totalTime && 0 !== d || (e || u._callback("onStart"))), s = u._firstPT; s;) s.f ? s.t[s.p](s.c * u.ratio + s.s) : s.t[s.p] = s.c * u.ratio + s.s, s = s._next;
                    u._onUpdate && (t < 0 && u._startAt && u._startTime && u._startAt.render(t, !0, i), e || u._totalTime === c && !n || u._callback("onUpdate")), u._cycle !== p && (e || u._gc || u.vars.onRepeat && u._callback("onRepeat")), !n || u._gc && !i || (t < 0 && u._startAt && !u._onUpdate && u._startTime && u._startAt.render(t, !0, i), r && (u._timeline.autoRemoveChildren && u._enabled(!1, !1), u._active = !1), !e && u.vars[n] && u._callback(n), 0 === d && u._rawPrevTime === x && l !== x && (u._rawPrevTime = 0))
                } else c !== u._totalTime && u._onUpdate && (e || u._callback("onUpdate"))
            }, v.to = function(t, e, i) {
                return new v(t, e, i)
            }, v.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new v(t, e, i)
            }, v.fromTo = function(t, e, i, r) {
                return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new v(t, e, r)
            }, v.staggerTo = v.allTo = function(t, e, i, r, n, s, a) {
                var o, l, h, u, _ = [],
                    f = y(i.stagger || r),
                    c = i.cycle,
                    p = (i.startAt || P).cycle;
                for (b(t) || ("string" == typeof t && (t = g.selector(t) || t), w(t) && (t = d(t))), o = (t = t || []).length - 1, h = 0; h <= o; h++) {
                    for (u in l = {}, i) l[u] = i[u];
                    if (c && (m(l, t, h), null != l.duration && (e = l.duration, delete l.duration)), p) {
                        for (u in p = l.startAt = {}, i.startAt) p[u] = i.startAt[u];
                        m(l.startAt, t, h)
                    }
                    l.delay = f(h, t[h], t) + (l.delay || 0), h === o && n && (l.onComplete = function() {
                        i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments), n.apply(a || i.callbackScope || this, s || P)
                    }), _[h] = new v(t[h], e, l)
                }
                return _
            }, v.staggerFrom = v.allFrom = function(t, e, i, r, n, s, a) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, v.staggerTo(t, e, i, r, n, s, a)
            }, v.staggerFromTo = v.allFromTo = function(t, e, i, r, n, s, a, o) {
                return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, v.staggerTo(t, e, r, n, s, a, o)
            }, v.delayedCall = function(t, e, i, r, n) {
                return new v(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: r,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    useFrames: n,
                    overwrite: 0
                })
            }, v.set = function(t, e) {
                return new v(t, 0, e)
            }, v.isTweening = function(t) {
                return 0 < g.getTweensOf(t, !0).length
            };
            var s = function(t, e) {
                    for (var i = [], r = 0, n = t._first; n;) n instanceof g ? i[r++] = n : (e && (i[r++] = n), r = (i = i.concat(s(n, e))).length), n = n._next;
                    return i
                },
                _ = v.getAllTweens = function(t) {
                    return s(r._rootTimeline, t).concat(s(r._rootFramesTimeline, t))
                };
            v.killAll = function(t, e, i, r) {
                null == e && (e = !0), null == i && (i = !0);
                for (var n, s, a = _(0 != r), o = a.length, l = e && i && r, h = 0; h < o; h++) s = a[h], (l || s instanceof u || (n = s.target === s.vars.onComplete) && i || e && !n) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
            }, v.killChildTweensOf = function(t, e) {
                if (null != t) {
                    var i, r, n, s, a, o = T.tweenLookup;
                    if ("string" == typeof t && (t = g.selector(t) || t), w(t) && (t = d(t)), b(t))
                        for (s = t.length; - 1 < --s;) v.killChildTweensOf(t[s], e);
                    else {
                        for (n in i = [], o)
                            for (r = o[n].target.parentNode; r;) r === t && (i = i.concat(o[n].tweens)), r = r.parentNode;
                        for (a = i.length, s = 0; s < a; s++) e && i[s].totalTime(i[s].totalDuration()), i[s]._enabled(!1, !1)
                    }
                }
            };

            function n(t, e, i, r) {
                e = !1 !== e, i = !1 !== i;
                for (var n, s, a = _(r = !1 !== r), o = e && i && r, l = a.length; - 1 < --l;) s = a[l], (o || s instanceof u || (n = s.target === s.vars.onComplete) && i || e && !n) && s.paused(t)
            }
            return v.pauseAll = function(t, e, i) {
                n(!0, t, e, i)
            }, v.resumeAll = function(t, e, i) {
                n(!1, t, e, i)
            }, v.globalTimeScale = function(t) {
                var e = r._rootTimeline,
                    i = g.ticker.time;
                return arguments.length ? (t = t || x, e._startTime = i - (i - e._startTime) * e._timeScale / t, e = r._rootFramesTimeline, i = g.ticker.frame, e._startTime = i - (i - e._startTime) * e._timeScale / t, e._timeScale = r._rootTimeline._timeScale = t) : e._timeScale
            }, t.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this.duration() ? this._time / this._duration : this.ratio
            }, t.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, t.time = function(t, e) {
                if (!arguments.length) return this._time;
                this._dirty && this.totalDuration();
                var i = this._duration,
                    r = this._cycle,
                    n = r * (i + this._repeatDelay);
                return i < t && (t = i), this.totalTime(this._yoyo && 1 & r ? i - t + n : this._repeat ? t + n : t, e)
            }, t.duration = function(t) {
                return arguments.length ? r.prototype.duration.call(this, t) : this._duration
            }, t.totalDuration = function(t) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, t.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, t.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, t.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, v
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(_, f, p) {
            function d(t) {
                f.call(this, t);
                var e, i, r = this,
                    n = r.vars;
                for (i in r._labels = {}, r.autoRemoveChildren = !!n.autoRemoveChildren, r.smoothChildTiming = !!n.smoothChildTiming, r._sortChildren = !0, r._onUpdate = n.onUpdate, n) e = n[i], c(e) && -1 !== e.join("").indexOf("{self}") && (n[i] = r._swapSelfInParams(e));
                c(n.tweens) && r.add(n.tweens, 0, n.align, n.stagger)
            }

            function m(t) {
                var e, i = {};
                for (e in t) i[e] = t[e];
                return i
            }

            function g(t, e, i) {
                var r, n, s = t.cycle;
                for (r in s) n = s[r], t[r] = "function" == typeof n ? n(i, e[i], e) : n[i % n.length];
                delete t.cycle
            }

            function h(t, e, i, r) {
                var n = "immediateRender";
                return n in e || (e[n] = !(i && !1 === i[n] || r)), e
            }

            function y(t) {
                if ("function" == typeof t) return t;
                var c = "object" == typeof t ? t : {
                        each: t
                    },
                    p = c.ease,
                    d = c.from || 0,
                    m = c.base || 0,
                    g = {},
                    y = isNaN(d),
                    v = c.axis,
                    x = {
                        center: .5,
                        end: 1
                    }[d] || 0;
                return function(t, e, i) {
                    var r, n, s, a, o, l, h, u, _ = (i || c).length,
                        f = g[_];
                    if (!f) {
                        if (!(u = "auto" === c.grid ? 0 : (c.grid || [1 / 0])[0])) {
                            for (l = -1 / 0; l < (l = i[u++].getBoundingClientRect().left) && u < _;);
                            u--
                        }
                        for (f = g[_] = [], r = y ? Math.min(u, _) * x - .5 : d % u, n = y ? _ * x / u - .5 : d / u | 0, h = 1 / (l = 0), o = 0; o < _; o++) s = o % u - r, a = n - (o / u | 0), f[o] = a = v ? Math.abs("y" === v ? a : s) : Math.sqrt(s * s + a * a), l < a && (l = a), a < h && (h = a);
                        f.max = l - h, f.min = h, f.v = _ = c.amount || c.each * (_ < u ? _ - 1 : v ? "y" === v ? _ / u : u : Math.max(u, _ / u)) || 0, f.b = _ < 0 ? m - _ : m
                    }
                    return _ = (f[t] - f.min) / f.max, f.b + (p ? p.getRatio(_) : _) * f.v
                }
            }
            var v = 1e-8,
                t = p._internals,
                e = d._internals = {},
                x = t.isSelector,
                c = t.isArray,
                T = t.lazyTweens,
                w = t.lazyRender,
                a = _gsScope._gsDefine.globals,
                n = e.pauseCallback = function() {},
                e = d.prototype = new f;
            return d.version = "2.1.3", d.distribute = y, e.constructor = d, e.kill()._gc = e._forcingPlayhead = e._hasPause = !1, e.to = function(t, e, i, r) {
                var n = i.repeat && a.TweenMax || p;
                return e ? this.add(new n(t, e, i), r) : this.set(t, i, r)
            }, e.from = function(t, e, i, r) {
                return this.add((i.repeat && a.TweenMax || p).from(t, e, h(0, i)), r)
            }, e.fromTo = function(t, e, i, r, n) {
                var s = r.repeat && a.TweenMax || p;
                return r = h(0, r, i), e ? this.add(s.fromTo(t, e, i, r), n) : this.set(t, r, n)
            }, e.staggerTo = function(t, e, i, r, n, s, a, o) {
                var l, h, u = new d({
                        onComplete: s,
                        onCompleteParams: a,
                        callbackScope: o,
                        smoothChildTiming: this.smoothChildTiming
                    }),
                    _ = y(i.stagger || r),
                    f = i.startAt,
                    c = i.cycle;
                for ("string" == typeof t && (t = p.selector(t) || t), x(t = t || []) && (t = function(t) {
                        for (var e = [], i = t.length, r = 0; r !== i; e.push(t[r++]));
                        return e
                    }(t)), h = 0; h < t.length; h++) l = m(i), f && (l.startAt = m(f), f.cycle && g(l.startAt, t, h)), c && (g(l, t, h), null != l.duration && (e = l.duration, delete l.duration)), u.to(t[h], e, l, _(h, t[h], t));
                return this.add(u, n)
            }, e.staggerFrom = function(t, e, i, r, n, s, a, o) {
                return i.runBackwards = !0, this.staggerTo(t, e, h(0, i), r, n, s, a, o)
            }, e.staggerFromTo = function(t, e, i, r, n, s, a, o, l) {
                return r.startAt = i, this.staggerTo(t, e, h(0, r, i), n, s, a, o, l)
            }, e.call = function(t, e, i, r) {
                return this.add(p.delayedCall(0, t, e, i), r)
            }, e.set = function(t, e, i) {
                return this.add(new p(t, 0, h(0, e, null, !0)), i)
            }, d.exportRoot = function(t, e) {
                null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                var i, r, n, s, a = new d(t),
                    t = a._timeline;
                for (null == e && (e = !0), t._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = t._time, n = t._first; n;) s = n._next, e && n instanceof p && n.target === n.vars.onComplete || ((r = n._startTime - n._delay) < 0 && (i = 1), a.add(n, r)), n = s;
                return t.add(a, 0), i && a.totalDuration(), a
            }, e.add = function(t, e, i, r) {
                var n, s, a, o, l, h, u = this;
                if ("number" != typeof e && (e = u._parseTimeOrLabel(e, 0, !0, t)), !(t instanceof _)) {
                    if (t instanceof Array || t && t.push && c(t)) {
                        for (i = i || "normal", r = r || 0, n = e, s = t.length, a = 0; a < s; a++) c(o = t[a]) && (o = new d({
                            tweens: o
                        })), u.add(o, n), "string" != typeof o && "function" != typeof o && ("sequence" === i ? n = o._startTime + o.totalDuration() / o._timeScale : "start" === i && (o._startTime -= o.delay())), n += r;
                        return u._uncache(!0)
                    }
                    if ("string" == typeof t) return u.addLabel(t, e);
                    if ("function" != typeof t) throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                    t = p.delayedCall(0, t)
                }
                if (f.prototype.add.call(u, t, e), (t._time || !t._duration && t._initted) && (n = (u.rawTime() - t._startTime) * t._timeScale, (!t._duration || 1e-5 < Math.abs(Math.max(0, Math.min(t.totalDuration(), n))) - t._totalTime) && t.render(n, !1, !1)), (u._gc || u._time === u._duration) && !u._paused && u._duration < u.duration())
                    for (h = (l = u).rawTime() > t._startTime; l._timeline;) h && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
                return u
            }, e.remove = function(t) {
                if (t instanceof _) {
                    this._remove(t, !1);
                    var e = t._timeline = t.vars.useFrames ? _._rootFramesTimeline : _._rootTimeline;
                    return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                }
                if (t instanceof Array || t && t.push && c(t)) {
                    for (var i = t.length; - 1 < --i;) this.remove(t[i]);
                    return this
                }
                return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
            }, e._remove = function(t, e) {
                return f.prototype._remove.call(this, t, e), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, e.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, e.insert = e.insertMultiple = function(t, e, i, r) {
                return this.add(t, e || 0, i, r)
            }, e.appendMultiple = function(t, e, i, r) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r)
            }, e.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, e.addPause = function(t, e, i, r) {
                r = p.delayedCall(0, n, i, r || this);
                return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
            }, e.removeLabel = function(t) {
                return delete this._labels[t], this
            }, e.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, e._parseTimeOrLabel = function(t, e, i, r) {
                var n, s;
                if (r instanceof _ && r.timeline === this) this.remove(r);
                else if (r && (r instanceof Array || r.push && c(r)))
                    for (s = r.length; - 1 < --s;) r[s] instanceof _ && r[s].timeline === this && this.remove(r[s]);
                if (n = "number" != typeof t || e ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof e) return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - n : 0, i);
                if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = n);
                else {
                    if (-1 === (s = t.indexOf("="))) return null == this._labels[t] ? i ? this._labels[t] = n + e : e : this._labels[t] + e;
                    e = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = 1 < s ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, i) : n
                }
                return Number(t) + e
            }, e.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
            }, e.stop = function() {
                return this.paused(!0)
            }, e.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }, e.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }, e.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var r, n, s, a, o, l, h, u, _ = this,
                    f = _._time,
                    c = _._dirty ? _.totalDuration() : _._totalDuration,
                    p = _._startTime,
                    d = _._timeScale,
                    m = _._paused;
                if (f !== _._time && (t += _._time - f), _._hasPause && !_._forcingPlayhead && !e) {
                    if (f < t)
                        for (r = _._first; r && r._startTime <= t && !l;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === _._rawPrevTime || (l = r), r = r._next;
                    else
                        for (r = _._last; r && r._startTime >= t && !l;) r._duration || "isPause" === r.data && 0 < r._rawPrevTime && (l = r), r = r._prev;
                    l && (_._time = _._totalTime = t = l._startTime, u = _._startTime + (_._reversed ? _._duration - t : t) / _._timeScale)
                }
                if (c - v <= t && 0 <= t) _._totalTime = _._time = c, _._reversed || _._hasPausedChild() || (n = !0, a = "onComplete", o = !!_._timeline.autoRemoveChildren, 0 === _._duration && (t <= 0 && -v <= t || _._rawPrevTime < 0 || _._rawPrevTime === v) && _._rawPrevTime !== t && _._first && (o = !0, _._rawPrevTime > v && (a = "onReverseComplete"))), _._rawPrevTime = _._duration || !e || t || _._rawPrevTime === t ? t : v, t = c + 1e-4;
                else if (t < v)
                    if (_._totalTime = _._time = 0, -v < t && (t = 0), (0 !== f || 0 === _._duration && _._rawPrevTime !== v && (0 < _._rawPrevTime || t < 0 && 0 <= _._rawPrevTime)) && (a = "onReverseComplete", n = _._reversed), t < 0) _._active = !1, _._timeline.autoRemoveChildren && _._reversed ? (o = n = !0, a = "onReverseComplete") : 0 <= _._rawPrevTime && _._first && (o = !0), _._rawPrevTime = t;
                    else {
                        if (_._rawPrevTime = _._duration || !e || t || _._rawPrevTime === t ? t : v, 0 === t && n)
                            for (r = _._first; r && 0 === r._startTime;) r._duration || (n = !1), r = r._next;
                        t = 0, _._initted || (o = !0)
                    }
                else _._totalTime = _._time = _._rawPrevTime = t;
                if (_._time !== f && _._first || i || o || l) {
                    if (_._initted || (_._initted = !0), _._active || !_._paused && _._time !== f && 0 < t && (_._active = !0), 0 === f && _.vars.onStart && (0 === _._time && _._duration || e || _._callback("onStart")), f <= (h = _._time))
                        for (r = _._first; r && (s = r._next, h === _._time && (!_._paused || m));)(r._active || r._startTime <= h && !r._paused && !r._gc) && (l === r && (_.pause(), _._pauseTime = u), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s;
                    else
                        for (r = _._last; r && (s = r._prev, h === _._time && (!_._paused || m));) {
                            if (r._active || r._startTime <= f && !r._paused && !r._gc) {
                                if (l === r) {
                                    for (l = r._prev; l && l.endTime() > _._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                    l = null, _.pause(), _._pauseTime = u
                                }
                                r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                            }
                            r = s
                        }
                    _._onUpdate && (e || (T.length && w(), _._callback("onUpdate"))), a && (_._gc || p !== _._startTime && d === _._timeScale || !(0 === _._time || c >= _.totalDuration()) || (n && (T.length && w(), _._timeline.autoRemoveChildren && _._enabled(!1, !1), _._active = !1), !e && _.vars[a] && _._callback(a)))
                }
            }, e._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof d && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, e.getChildren = function(t, e, i, r) {
                r = r || -9999999999;
                for (var n = [], s = this._first, a = 0; s;) s._startTime < r || (s instanceof p ? !1 !== e && (n[a++] = s) : (!1 !== i && (n[a++] = s), !1 !== t && (a = (n = n.concat(s.getChildren(!0, e, i))).length))), s = s._next;
                return n
            }, e.getTweensOf = function(t, e) {
                var i, r, n = this._gc,
                    s = [],
                    a = 0;
                for (n && this._enabled(!0, !0), r = (i = p.getTweensOf(t)).length; - 1 < --r;)(i[r].timeline === this || e && this._contains(i[r])) && (s[a++] = i[r]);
                return n && this._enabled(!1, !0), s
            }, e.recent = function() {
                return this._recent
            }, e._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, e.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var r, n = this._first, s = this._labels; n;) n._startTime >= i && (n._startTime += t), n = n._next;
                if (e)
                    for (r in s) s[r] >= i && (s[r] += t);
                return this._uncache(!0)
            }, e._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, n = !1; - 1 < --r;) i[r]._kill(t, e) && (n = !0);
                return n
            }, e.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; - 1 < --i;) e[i]._enabled(!1, !1);
                return !1 !== t && (this._labels = {}), this._uncache(!0)
            }, e.invalidate = function() {
                for (var t = this._first; t;) t.invalidate(), t = t._next;
                return _.prototype.invalidate.call(this)
            }, e._enabled = function(t, e) {
                if (t === this._gc)
                    for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
                return f.prototype._enabled.call(this, t, e)
            }, e.totalTime = function(t, e, i) {
                this._forcingPlayhead = !0;
                var r = _.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, r
            }, e.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, e.totalDuration = function(t) {
                if (arguments.length) return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
                if (this._dirty) {
                    for (var e, i, r = 0, n = this, s = n._last, a = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > a && n._sortChildren && !s._paused && !n._calculatingDuration ? (n._calculatingDuration = 1, n.add(s, s._startTime - s._delay), n._calculatingDuration = 0) : a = s._startTime, s._startTime < 0 && !s._paused && (r -= s._startTime, n._timeline.smoothChildTiming && (n._startTime += s._startTime / n._timeScale, n._time -= s._startTime, n._totalTime -= s._startTime, n._rawPrevTime -= s._startTime), n.shiftChildren(-s._startTime, !1, -9999999999), a = 0), r < (i = s._startTime + s._totalDuration / s._timeScale) && (r = i), s = e;
                    n._duration = n._totalDuration = r, n._dirty = !1
                }
                return this._totalDuration
            }, e.paused = function(t) {
                if (!1 === t && this._paused)
                    for (var e = this._first; e;) e._startTime === this._time && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next;
                return _.prototype.paused.apply(this, arguments)
            }, e.usesFrames = function() {
                for (var t = this._timeline; t._timeline;) t = t._timeline;
                return t === _._rootFramesTimeline
            }, e.rawTime = function(t) {
                return t && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
            }, d
        }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, o, t) {
            function i(t) {
                e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0
            }
            var k = 1e-8,
                r = o._internals,
                C = r.lazyTweens,
                R = r.lazyRender,
                l = _gsScope._gsDefine.globals,
                h = new t(null, null, 1, 0),
                t = i.prototype = new e;
            return t.constructor = i, t.kill()._gc = !1, i.version = "2.1.3", t.invalidate = function() {
                return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
            }, t.addCallback = function(t, e, i, r) {
                return this.add(o.delayedCall(0, t, i, r), e)
            }, t.removeCallback = function(t, e) {
                if (t)
                    if (null == e) this._kill(null, t);
                    else
                        for (var i = this.getTweensOf(t, !1), r = i.length, n = this._parseTimeOrLabel(e); - 1 < --r;) i[r]._startTime === n && i[r]._enabled(!1, !1);
                return this
            }, t.removePause = function(t) {
                return this.removeCallback(e._internals.pauseCallback, t)
            }, t.tweenTo = function(t, e) {
                e = e || {};
                var i, r, n, s = {
                        ease: h,
                        useFrames: this.usesFrames(),
                        immediateRender: !1,
                        lazy: !1
                    },
                    a = e.repeat && l.TweenMax || o;
                for (r in e) s[r] = e[r];
                return s.time = this._parseTimeOrLabel(t), i = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, n = new a(this, i, s), s.onStart = function() {
                    n.target.paused(!0), n.vars.time === n.target.time() || i !== n.duration() || n.isFromTo || n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale).render(n.time(), !0, !0), e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || n, e.onStartParams || [])
                }, n
            }, t.tweenFromTo = function(t, e, i) {
                i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    callbackScope: this
                }, i.immediateRender = !1 !== i.immediateRender;
                i = this.tweenTo(e, i);
                return i.isFromTo = 1, i.duration(Math.abs(i.vars.time - t) / this._timeScale || .001)
            }, t.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var r, n, s, a, o, l, h, u, _ = this,
                    f = _._time,
                    c = _._dirty ? _.totalDuration() : _._totalDuration,
                    p = _._duration,
                    d = _._totalTime,
                    m = _._startTime,
                    g = _._timeScale,
                    y = _._rawPrevTime,
                    v = _._paused,
                    x = _._cycle;
                if (f !== _._time && (t += _._time - f), c - k <= t && 0 <= t) _._locked || (_._totalTime = c, _._cycle = _._repeat), _._reversed || _._hasPausedChild() || (n = !0, a = "onComplete", o = !!_._timeline.autoRemoveChildren, 0 === _._duration && (t <= 0 && -k <= t || y < 0 || y === k) && y !== t && _._first && (o = !0, k < y && (a = "onReverseComplete"))), _._rawPrevTime = _._duration || !e || t || _._rawPrevTime === t ? t : k, _._yoyo && 1 & _._cycle ? _._time = t = 0 : t = (_._time = p) + 1e-4;
                else if (t < k)
                    if (_._locked || (_._totalTime = _._cycle = 0), _._time = 0, -k < t && (t = 0), (0 !== f || 0 === p && y !== k && (0 < y || t < 0 && 0 <= y) && !_._locked) && (a = "onReverseComplete", n = _._reversed), t < 0) _._active = !1, _._timeline.autoRemoveChildren && _._reversed ? (o = n = !0, a = "onReverseComplete") : 0 <= y && _._first && (o = !0), _._rawPrevTime = t;
                    else {
                        if (_._rawPrevTime = p || !e || t || _._rawPrevTime === t ? t : k, 0 === t && n)
                            for (r = _._first; r && 0 === r._startTime;) r._duration || (n = !1), r = r._next;
                        t = 0, _._initted || (o = !0)
                    }
                else 0 === p && y < 0 && (o = !0), _._time = _._rawPrevTime = t, _._locked || (_._totalTime = t, 0 !== _._repeat && (O = p + _._repeatDelay, _._cycle = _._totalTime / O >> 0, _._cycle && _._cycle === _._totalTime / O && d <= t && _._cycle--, _._time = _._totalTime - _._cycle * O, _._yoyo && 1 & _._cycle && (_._time = p - _._time), _._time > p ? t = (_._time = p) + 1e-4 : _._time < 0 ? _._time = t = 0 : t = _._time));
                if (_._hasPause && !_._forcingPlayhead && !e) {
                    if (f < (t = _._time) || _._repeat && x !== _._cycle)
                        for (r = _._first; r && r._startTime <= t && !l;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === _._rawPrevTime || (l = r), r = r._next;
                    else
                        for (r = _._last; r && r._startTime >= t && !l;) r._duration || "isPause" === r.data && 0 < r._rawPrevTime && (l = r), r = r._prev;
                    l && (u = _._startTime + (_._reversed ? _._duration - l._startTime : l._startTime) / _._timeScale, l._startTime < p && (_._time = _._rawPrevTime = t = l._startTime, _._totalTime = t + _._cycle * (_._totalDuration + _._repeatDelay)))
                }
                if (_._cycle !== x && !_._locked) {
                    var T = _._yoyo && 0 != (1 & x),
                        w = T === (_._yoyo && 0 != (1 & _._cycle)),
                        b = _._totalTime,
                        P = _._cycle,
                        S = _._rawPrevTime,
                        O = _._time;
                    if (_._totalTime = x * p, _._cycle < x ? T = !T : _._totalTime += p, _._time = f, _._rawPrevTime = 0 === p ? y - 1e-4 : y, _._cycle = x, _._locked = !0, f = T ? 0 : p, _.render(f, e, 0 === p), e || _._gc || _.vars.onRepeat && (_._cycle = P, _._locked = !1, _._callback("onRepeat")), f !== _._time) return;
                    if (w && (_._cycle = x, _._locked = !0, f = T ? p + 1e-4 : -1e-4, _.render(f, !0, !1)), _._locked = !1, _._paused && !v) return;
                    _._time = O, _._totalTime = b, _._cycle = P, _._rawPrevTime = S
                }
                if (_._time !== f && _._first || i || o || l) {
                    if (_._initted || (_._initted = !0), _._active || !_._paused && _._totalTime !== d && 0 < t && (_._active = !0), 0 === d && _.vars.onStart && (0 === _._totalTime && _._totalDuration || e || _._callback("onStart")), f <= (h = _._time))
                        for (r = _._first; r && (s = r._next, h === _._time && (!_._paused || v));)(r._active || r._startTime <= _._time && !r._paused && !r._gc) && (l === r && (_.pause(), _._pauseTime = u), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s;
                    else
                        for (r = _._last; r && (s = r._prev, h === _._time && (!_._paused || v));) {
                            if (r._active || r._startTime <= f && !r._paused && !r._gc) {
                                if (l === r) {
                                    for (l = r._prev; l && l.endTime() > _._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                    l = null, _.pause(), _._pauseTime = u
                                }
                                r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                            }
                            r = s
                        }
                    _._onUpdate && (e || (C.length && R(), _._callback("onUpdate"))), a && (_._locked || _._gc || m !== _._startTime && g === _._timeScale || !(0 === _._time || c >= _.totalDuration()) || (n && (C.length && R(), _._timeline.autoRemoveChildren && _._enabled(!1, !1), _._active = !1), !e && _.vars[a] && _._callback(a)))
                } else d !== _._totalTime && _._onUpdate && (e || _._callback("onUpdate"))
            }, t.getActive = function(t, e, i) {
                for (var r, n = [], s = this.getChildren(t || null == t, e || null == t, !!i), a = 0, o = s.length, l = 0; l < o; l++)(r = s[l]).isActive() && (n[a++] = r);
                return n
            }, t.getLabelAfter = function(t) {
                t || 0 !== t && (t = this._time);
                for (var e = this.getLabelsArray(), i = e.length, r = 0; r < i; r++)
                    if (e[r].time > t) return e[r].name;
                return null
            }, t.getLabelBefore = function(t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), i = e.length; - 1 < --i;)
                    if (e[i].time < t) return e[i].name;
                return null
            }, t.getLabelsArray = function() {
                var t, e = [],
                    i = 0;
                for (t in this._labels) e[i++] = {
                    time: this._labels[t],
                    name: t
                };
                return e.sort(function(t, e) {
                    return t.time - e.time
                }), e
            }, t.invalidate = function() {
                return this._locked = !1, e.prototype.invalidate.call(this)
            }, t.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
            }, t.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
            }, t.totalDuration = function(t) {
                return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, t.time = function(t, e) {
                if (!arguments.length) return this._time;
                this._dirty && this.totalDuration();
                var i = this._duration,
                    r = this._cycle,
                    n = r * (i + this._repeatDelay);
                return i < t && (t = i), this.totalTime(this._yoyo && 1 & r ? i - t + n : this._repeat ? t + n : t, e)
            }, t.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, t.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, t.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, t.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + k)
            }, i
        }, !0), P = 180 / Math.PI, y = [], v = [], x = [], g = {}, e = _gsScope._gsDefine.globals, m = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.9",
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t, e instanceof Array && (e = {
                    values: e
                }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var r, n, s, a, o, l = e.values || [],
                    h = {},
                    u = l[0],
                    _ = e.autoRotate || i.vars.orientToBezier;
                for (r in this._autoRotate = _ ? _ instanceof Array ? _ : [
                        ["x", "y", "rotation", !0 !== _ && Number(_) || 0]
                    ] : null, u) this._props.push(r);
                for (s = this._props.length; - 1 < --s;) r = this._props[s], this._overwriteProps.push(r), n = this._func[r] = "function" == typeof t[r], h[r] = n ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]), o || h[r] !== l[0][r] && (o = h);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? f(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : function(t, e, i) {
                        var r, n, s, a, o, l, h, u, _, f, c, p = {},
                            d = "cubic" === (e = e || "soft") ? 3 : 2,
                            m = "soft" === e,
                            g = [];
                        if (m && i && (t = [i].concat(t)), null == t || t.length < 1 + d) throw "invalid Bezier data";
                        for (_ in t[0]) g.push(_);
                        for (l = g.length; - 1 < --l;) {
                            for (p[_ = g[l]] = o = [], f = 0, u = t.length, h = 0; h < u; h++) r = null == i ? t[h][_] : "string" == typeof(c = t[h][_]) && "=" === c.charAt(1) ? i[_] + Number(c.charAt(0) + c.substr(2)) : Number(c), m && 1 < h && h < u - 1 && (o[f++] = (r + o[f - 2]) / 2), o[f++] = r;
                            for (u = f - d + 1, h = f = 0; h < u; h += d) r = o[h], n = o[h + 1], s = o[h + 2], a = 2 == d ? 0 : o[h + 3], o[f++] = c = 3 == d ? new T(r, n, s, a) : new T(r, (2 * n + r) / 3, (2 * n + s) / 3, s);
                            o.length = f
                        }
                        return p
                    }(l, e.type, h), this._segCount = this._beziers[r].length, this._timeRes && (e = c(this._beziers, this._timeRes), this._length = e.length, this._lengths = e.lengths, this._segments = e.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length), _ = this._autoRotate)
                    for (this._initialRotations = [], _[0] instanceof Array || (this._autoRotate = _ = [_]), s = _.length; - 1 < --s;) {
                        for (a = 0; a < 3; a++) r = _[s][a], this._func[r] = "function" == typeof t[r] && t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)];
                        r = _[s][2], this._initialRotations[s] = (this._func[r] ? this._func[r].call(this._target) : this._target[r]) || 0, this._overwriteProps.push(r)
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function(t) {
                var e, i, r, n, s, a, o, l, h, u, _ = this._segCount,
                    f = this._func,
                    c = this._target,
                    p = t !== this._startRatio;
                if (this._timeRes) {
                    if (l = this._lengths, h = this._curSeg, u = t * this._length, b = this._li, u > this._l2 && b < _ - 1) {
                        for (o = _ - 1; b < o && (this._l2 = l[++b]) <= u;);
                        this._l1 = l[b - 1], this._li = b, this._curSeg = h = this._segments[b], this._s2 = h[this._s1 = this._si = 0]
                    } else if (u < this._l1 && 0 < b) {
                        for (; 0 < b && (this._l1 = l[--b]) >= u;);
                        0 === b && u < this._l1 ? this._l1 = 0 : b++, this._l2 = l[b], this._li = b, this._curSeg = h = this._segments[b], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                    }
                    if (e = b, u -= this._l1, b = this._si, u > this._s2 && b < h.length - 1) {
                        for (o = h.length - 1; b < o && (this._s2 = h[++b]) <= u;);
                        this._s1 = h[b - 1], this._si = b
                    } else if (u < this._s1 && 0 < b) {
                        for (; 0 < b && (this._s1 = h[--b]) >= u;);
                        0 === b && u < this._s1 ? this._s1 = 0 : b++, this._s2 = h[b], this._si = b
                    }
                    s = 1 === t ? 1 : (b + (u - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else s = (t - (e = t < 0 ? 0 : 1 <= t ? _ - 1 : _ * t >> 0) * (1 / _)) * _;
                for (i = 1 - s, b = this._props.length; - 1 < --b;) r = this._props[b], a = (s * s * (n = this._beziers[r][e]).da + 3 * i * (s * n.ca + i * n.ba)) * s + n.a, this._mod[r] && (a = this._mod[r](a, c)), f[r] ? c[r](a) : c[r] = a;
                if (this._autoRotate)
                    for (var d, m, g, y, v, x, T, w = this._autoRotate, b = w.length; - 1 < --b;) r = w[b][2], x = w[b][3] || 0, T = !0 === w[b][4] ? 1 : P, n = this._beziers[w[b][0]], d = this._beziers[w[b][1]], n && d && (n = n[e], d = d[e], m = n.a + (n.b - n.a) * s, m += ((y = n.b + (n.c - n.b) * s) - m) * s, y += (n.c + (n.d - n.c) * s - y) * s, g = d.a + (d.b - d.a) * s, g += ((v = d.b + (d.c - d.b) * s) - g) * s, v += (d.c + (d.d - d.c) * s - v) * s, a = p ? Math.atan2(v - g, y - m) * T + x : this._initialRotations[b], this._mod[r] && (a = this._mod[r](a, c)), f[r] ? c[r](a) : c[r] = a)
            }
        }), t = m.prototype, m.bezierThrough = f, m.cubicToQuadratic = w, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
            return new T(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, m._cssRegister = function() {
            var c, p, d, t = e.CSSPlugin;
            t && (t = t._internals, c = t._parseToProxy, p = t._setPluginRatio, d = t.CSSPropTween, t._registerComplexSpecialProp("bezier", {
                parser: function(t, e, i, r, n, s) {
                    e instanceof Array && (e = {
                        values: e
                    }), s = new m;
                    var a, o, l, h = e.values,
                        u = h.length - 1,
                        _ = [],
                        f = {};
                    if (u < 0) return n;
                    for (a = 0; a <= u; a++) l = c(t, h[a], r, n, s, u !== a), _[a] = l.end;
                    for (o in e) f[o] = e[o];
                    return f.values = _, (n = new d(t, "bezier", 0, 0, l.pt, 2)).data = l, n.plugin = s, n.setRatio = p, 0 === f.autoRotate && (f.autoRotate = !0), !f.autoRotate || f.autoRotate instanceof Array || (a = !0 === f.autoRotate ? 0 : Number(f.autoRotate), f.autoRotate = null != l.end.left ? [
                        ["left", "top", "rotation", a, !1]
                    ] : null != l.end.x && [
                        ["x", "y", "rotation", a, !1]
                    ]), f.autoRotate && (r._transform || r._enableTransforms(!1), l.autoRotate = r._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, r._overwriteProps.push("rotation")), s._onInitTween(l.proxy, f, r._tween), n
                }
            }))
        }, t._mod = function(t) {
            for (var e, i = this._overwriteProps, r = i.length; - 1 < --r;)(e = t[i[r]]) && "function" == typeof e && (this._mod[i[r]] = e)
        }, t._kill = function(t) {
            var e, i, r = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e], delete this._func[e], i = r.length; - 1 < --i;) r[i] === e && r.splice(i, 1);
            if (r = this._autoRotate)
                for (i = r.length; - 1 < --i;) t[r[i][2]] && r.splice(i, 1);
            return this._super._kill.call(this, t)
        }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(s, A) {
            var f, w, P, _, M = function() {
                    s.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = M.prototype.setRatio
                },
                h = _gsScope._gsDefine.globals,
                c = {},
                t = M.prototype = new s("css");
            (t.constructor = M).version = "2.1.3", M.API = 2, M.defaultTransformPerspective = 0, M.defaultSkewType = "compensated", M.defaultSmoothOrigin = !0, t = "px", M.suffixMap = {
                top: t,
                right: t,
                bottom: t,
                left: t,
                width: t,
                height: t,
                fontSize: t,
                padding: t,
                margin: t,
                perspective: t,
                lineHeight: ""
            };

            function a(t, e) {
                return e.toUpperCase()
            }

            function o(t, e) {
                return (e = tt.createElementNS ? tt.createElementNS(e || LS_nsProtocol + "www.w3.org/1999/xhtml", t) : tt.createElement(t)).style ? e : tt.createElement(t)
            }

            function l(t) {
                return j.test("string" == typeof t ? t : (t.currentStyle || t.style).filter || "") ? parseFloat(RegExp.$1) / 100 : 1
            }

            function p(t) {
                _gsScope.console && console.log(t)
            }

            function b(t, e) {
                var i, r, n = (e = e || et).style;
                if (void 0 !== n[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; - 1 < --r && void 0 === n[i[r] + t];);
                return 0 <= r ? (st = "-" + (at = 3 === r ? "ms" : i[r]).toLowerCase() + "-", at + t) : null
            }

            function d(t) {
                return ot.getComputedStyle(t)
            }

            function m(t, e) {
                var i, r, n = {};
                if (e = e || d(t))
                    if (i = e.length)
                        for (; - 1 < --i;) - 1 !== (r = e[i]).indexOf("-transform") && Ft !== r || (n[r.replace(U, a)] = e.getPropertyValue(r));
                    else
                        for (i in e) - 1 !== i.indexOf("Transform") && Lt !== i || (n[i] = e[i]);
                else if (e = t.currentStyle || t.style)
                    for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(U, a)] = e[i]);
                return nt || (n.opacity = l(t)), t = qt(t, e, !1), n.rotation = t.rotation, n.skewX = t.skewX, n.scaleX = t.scaleX, n.scaleY = t.scaleY, n.x = t.x, n.y = t.y, Et && (n.z = t.z, n.rotationX = t.rotationX, n.rotationY = t.rotationY, n.scaleZ = t.scaleZ), n.filters && delete n.filters, n
            }

            function g(t, e, i, r, n) {
                var s, a, o, l = {},
                    h = t.style;
                for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (s = i[a]) || n && n[a]) && -1 === a.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[a] || "" === e[a].replace(I, "") ? s : 0 : ut(t, a), void 0 !== h[a] && (o = new xt(h, a, h[a], o)));
                if (r)
                    for (a in r) "className" !== a && (l[a] = r[a]);
                return {
                    difs: l,
                    firstMPT: o
                }
            }

            function O(t, e) {
                return "function" == typeof t && (t = t(D, R)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
            }

            function S(t, e) {
                "function" == typeof t && (t = t(D, R));
                var i = "string" == typeof t && "=" === t.charAt(1);
                return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (i ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? t.substr(2) : t) / 100)), null == t ? e : i ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
            }

            function k(t, e, i, r) {
                var n, s, a;
                return "function" == typeof t && (t = t(D, R)), (a = null == t ? e : "number" == typeof t ? t : (n = 360, s = t.split("_"), a = ((a = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : K) - (a ? 0 : e), s.length && (r && (r[i] = e + a), -1 !== t.indexOf("short") && ((a %= n) !== a % 180 && (a = a < 0 ? a + n : a - n)), -1 !== t.indexOf("_cw") && a < 0 ? a = (a + 3599999999640) % n - (a / n | 0) * n : -1 !== t.indexOf("ccw") && 0 < a && (a = (a - 3599999999640) % n - (a / n | 0) * n)), e + a)) < 1e-6 && -1e-6 < a && (a = 0), a
            }

            function u(t, e, i) {
                return 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
            }

            function i(t, e) {
                var i, r, n, s = t.match(mt) || [],
                    a = 0,
                    o = "";
                if (!s.length) return t;
                for (i = 0; i < s.length; i++) r = s[i], a += (n = t.substr(a, t.indexOf(r, a) - a)).length + r.length, 3 === (r = dt(r, e)).length && r.push(1), o += n + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
                return o + t.substr(a)
            }
            var C, y, v, L, x, T, R, D, F = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                z = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                E = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                n = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
                I = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                N = /(?:\d|\-|\+|=|#|\.)*/g,
                j = /opacity *= *([^)]*)/i,
                X = /opacity:([^;]*)/i,
                B = /alpha\(opacity *=.+?\)/i,
                Y = /^(rgb|hsl)/,
                G = /([A-Z])/g,
                U = /-([a-z])/gi,
                V = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                q = /(?:Left|Right|Width)/i,
                Q = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                W = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                H = /,(?=[^\)]*(?:\(|$))/gi,
                Z = /[\s,\(]/i,
                $ = Math.PI / 180,
                K = 180 / Math.PI,
                J = {},
                e = {
                    style: {}
                },
                tt = _gsScope.document || {
                    createElement: function() {
                        return e
                    }
                },
                et = o("div"),
                it = o("img"),
                r = M._internals = {
                    _specialProps: c
                },
                rt = (_gsScope.navigator || {}).userAgent || "",
                nt = (Mt = rt.indexOf("Android"), At = o("a"), v = -1 !== rt.indexOf("Safari") && -1 === rt.indexOf("Chrome") && (-1 === Mt || 3 < parseFloat(rt.substr(Mt + 8, 2))), x = v && parseFloat(rt.substr(rt.indexOf("Version/") + 8, 2)) < 6, L = -1 !== rt.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(rt) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(rt)) && (T = parseFloat(RegExp.$1)), !!At && (At.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(At.style.opacity))),
                st = "",
                at = "",
                ot = "undefined" != typeof window ? window : tt.defaultView || {
                    getComputedStyle: function() {}
                },
                lt = M.getStyle = function(t, e, i, r, n) {
                    var s;
                    return nt || "opacity" !== e ? (!r && t.style[e] ? s = t.style[e] : (i = i || d(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(G, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == n || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : n) : l(t)
                },
                ht = r.convertToPixels = function(t, e, i, r, n) {
                    if ("px" === r || !r && "lineHeight" !== e) return i;
                    if ("auto" === r || !i) return 0;
                    var s, a, o, l = q.test(e),
                        h = t,
                        u = et.style,
                        _ = i < 0,
                        f = 1 === i;
                    if (_ && (i = -i), f && (i *= 100), "lineHeight" !== e || r)
                        if ("%" === r && -1 !== e.indexOf("border")) s = i / 100 * (l ? t.clientWidth : t.clientHeight);
                        else {
                            if (u.cssText = "border:0 solid red;position:" + lt(t, "position") + ";line-height:0;", "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r) u[l ? "borderLeftWidth" : "borderTopWidth"] = i + r;
                            else {
                                if (h = t.parentNode || tt.body, -1 !== lt(h, "display").indexOf("flex") && (u.position = "absolute"), a = h._gsCache, o = A.ticker.frame, a && l && a.time === o) return a.width * i / 100;
                                u[l ? "width" : "height"] = i + r
                            }
                            h.appendChild(et), s = parseFloat(et[l ? "offsetWidth" : "offsetHeight"]), h.removeChild(et), l && "%" === r && !1 !== M.cacheWidths && ((a = h._gsCache = h._gsCache || {}).time = o, a.width = s / i * 100), 0 !== s || n || (s = ht(t, e, i, r, !0))
                        }
                    else a = d(t).lineHeight, t.style.lineHeight = i, s = parseFloat(d(t).lineHeight), t.style.lineHeight = a;
                    return f && (s /= 100), _ ? -s : s
                },
                ut = r.calculateOffset = function(t, e, i) {
                    if ("absolute" !== lt(t, "position", i)) return 0;
                    var r = "left" === e ? "Left" : "Top",
                        i = lt(t, "margin" + r, i);
                    return t["offset" + r] - (ht(t, e, parseFloat(i), i.replace(N, "")) || 0)
                },
                _t = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                ft = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ct = function(t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    null != t && "" !== t || (t = "0 0");
                    var i, r = t.split(" "),
                        n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : r[0],
                        s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : r[1];
                    if (3 < r.length && !e) {
                        for (r = t.split(", ").join(",").split(","), t = [], i = 0; i < r.length; i++) t.push(ct(r[i]));
                        return t.join(",")
                    }
                    return null == s ? s = "center" === n ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + s + (2 < r.length ? " " + r[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(n.replace(I, "")), e.oy = parseFloat(s.replace(I, "")), e.v = t), e || t
                },
                pt = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                dt = M.parseColor = function(t, e) {
                    var i, r, n, s, a, o, l, h;
                    if (t)
                        if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                        else {
                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), pt[t]) i = pt[t];
                            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (r = t.charAt(1)) + r + (n = t.charAt(2)) + n + (s = t.charAt(3)) + s), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                            else if ("hsl" === t.substr(0, 3))
                                if (i = h = t.match(F), e) {
                                    if (-1 !== t.indexOf("=")) return t.match(z)
                                } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, r = 2 * (l = Number(i[2]) / 100) - (n = l <= .5 ? l * (o + 1) : l + o - l * o), 3 < i.length && (i[3] = Number(i[3])), i[0] = u(a + 1 / 3, r, n), i[1] = u(a, r, n), i[2] = u(a - 1 / 3, r, n);
                            else i = t.match(F) || pt.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), 3 < i.length && (i[3] = Number(i[3]))
                        }
                    else i = pt.black;
                    return e && !h && (r = i[0] / 255, n = i[1] / 255, s = i[2] / 255, l = ((t = Math.max(r, n, s)) + (e = Math.min(r, n, s))) / 2, t === e ? a = o = 0 : (h = t - e, o = .5 < l ? h / (2 - t - e) : h / (t + e), a = t === r ? (n - s) / h + (n < s ? 6 : 0) : t === n ? (s - r) / h + 2 : (r - n) / h + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
                },
                mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in pt) mt += "|" + t + "\\b";
            mt = new RegExp(mt + ")", "gi"), M.colorStringFilter = function(t) {
                var e = t[0] + " " + t[1];
                mt.test(e) && (e = -1 !== e.indexOf("hsl(") || -1 !== e.indexOf("hsla("), t[0] = i(t[0], e), t[1] = i(t[1], e)), mt.lastIndex = 0
            }, A.defaultStringFilter || (A.defaultStringFilter = M.colorStringFilter);

            function gt(t, e, s, a) {
                if (null == t) return function(t) {
                    return t
                };
                var o, l = e ? (t.match(mt) || [""])[0] : "",
                    h = t.split(l).join("").match(E) || [],
                    u = t.substr(0, t.indexOf(h[0])),
                    _ = ")" === t.charAt(t.length - 1) ? ")" : "",
                    f = -1 !== t.indexOf(" ") ? " " : ",",
                    c = h.length,
                    p = 0 < c ? h[0].replace(F, "") : "";
                return c ? o = e ? function(t) {
                    var e, i, r, n;
                    if ("number" == typeof t) t += p;
                    else if (a && H.test(t)) {
                        for (n = t.replace(H, "|").split("|"), r = 0; r < n.length; r++) n[r] = o(n[r]);
                        return n.join(",")
                    }
                    if (e = (t.match(mt) || [l])[0], r = (i = t.split(e).join("").match(E) || []).length, c > r--)
                        for (; ++r < c;) i[r] = s ? i[(r - 1) / 2 | 0] : h[r];
                    return u + i.join(f) + f + e + _ + (-1 !== t.indexOf("inset") ? " inset" : "")
                } : function(t) {
                    var e, i, r;
                    if ("number" == typeof t) t += p;
                    else if (a && H.test(t)) {
                        for (i = t.replace(H, "|").split("|"), r = 0; r < i.length; r++) i[r] = o(i[r]);
                        return i.join(",")
                    }
                    if (r = (e = t.match("," == f ? E : n) || []).length, c > r--)
                        for (; ++r < c;) e[r] = s ? e[(r - 1) / 2 | 0] : h[r];
                    return (u && "none" !== t && t.substr(0, t.indexOf(e[0])) || u) + e.join(f) + _
                } : function(t) {
                    return t
                }
            }

            function yt(h) {
                return h = h.split(","),
                    function(t, e, i, r, n, s, a) {
                        var o, l = (e + "").split(" ");
                        for (a = {}, o = 0; o < 4; o++) a[h[o]] = l[o] = l[o] || l[(o - 1) / 2 >> 0];
                        return r.parse(t, a, n, s)
                    }
            }

            function vt(t, e, i, r, n, s) {
                return (s = new Tt(t, e, i, r - i, n, -1, s)).b = i, s.e = s.xs0 = r, s
            }
            var xt = (r._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, r, n, s, a = this.data, o = a.proxy, l = a.firstMPT; l;) e = o[l.v], l.r ? e = l.r(e) : e < 1e-6 && -1e-6 < e && (e = 0), l.t[l.p] = e, l = l._next;
                    if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, o.rotation, this.t, this._tween) : o.rotation), 1 === t || 0 === t)
                        for (l = a.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                            if ((i = l.t).type) {
                                if (1 === i.type) {
                                    for (n = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                    i[s] = n
                                }
                            } else i[s] = i.s + i.xs0;
                            l = l._next
                        }
                }, function(t, e, i, r, n) {
                    this.t = t, this.p = e, this.v = i, this.r = n, r && ((r._prev = this)._next = r)
                }),
                Tt = (r._parseToProxy = function(t, e, i, r, n, s) {
                    var a, o, l, h, u = r,
                        _ = {},
                        f = {},
                        c = i._transform,
                        p = J;
                    for (i._transform = null, J = e, r = n = i.parse(t, e, r, n), J = p, s && (i._transform = c, u && (u._prev = null, u._prev && (u._prev._next = null))); r && r !== u;) {
                        if (r.type <= 1 && (f[o = r.p] = r.s + r.c, _[o] = r.s, s || (h = new xt(r, "s", o, h, r.r), r.c = 0), 1 === r.type))
                            for (a = r.l; 0 < --a;) l = "xn" + a, f[o = r.p + "_" + l] = r.data[l], _[o] = r[l], s || (h = new xt(r, l, o, h, r.rxp[l]));
                        r = r._next
                    }
                    return {
                        proxy: _,
                        end: f,
                        firstMPT: h,
                        pt: n
                    }
                }, r.CSSPropTween = function(t, e, i, r, n, s, a, o, l, h, u) {
                    this.t = t, this.p = e, this.s = i, this.c = r, this.n = a || e, t instanceof Tt || _.push(this.n), this.r = o && ("function" == typeof o ? o : Math.round), this.type = s || 0, l && (this.pr = l, f = !0), this.b = void 0 === h ? i : h, this.e = void 0 === u ? i + r : u, n && ((this._next = n)._prev = this)
                }),
                wt = M.parseComplex = function(t, e, i, r, n, s, a, o, l, h) {
                    i = i || s || "", "function" == typeof r && (r = r(D, R)), a = new Tt(t, e, 0, 0, a, h ? 2 : 1, null, !1, o, i, r), r += "", n && mt.test(r + i) && (r = [i, r], M.colorStringFilter(r), i = r[0], r = r[1]);
                    var u, _, f, c, p, d, m, g, y, v, x, T, w = i.split(", ").join(",").split(" "),
                        b = r.split(", ").join(",").split(" "),
                        P = w.length,
                        S = !1 !== C;
                    for (-1 === r.indexOf(",") && -1 === i.indexOf(",") || (b = -1 !== (r + i).indexOf("rgb") || -1 !== (r + i).indexOf("hsl") ? (w = w.join(" ").replace(H, ", ").split(" "), b.join(" ").replace(H, ", ").split(" ")) : (w = w.join(" ").split(",").join(", ").split(" "), b.join(" ").split(",").join(", ").split(" ")), P = w.length), P !== b.length && (P = (w = (s || "").split(" ")).length), a.plugin = l, a.setRatio = h, u = mt.lastIndex = 0; u < P; u++)
                        if (c = w[u], p = b[u] + "", (g = parseFloat(c)) || 0 === g) a.appendXtra("", g, O(p, g), p.replace(z, ""), S && -1 !== p.indexOf("px") && Math.round, !0);
                        else if (n && mt.test(c)) x = ")" + ((x = p.indexOf(")") + 1) ? p.substr(x) : ""), T = -1 !== p.indexOf("hsl") && nt, y = p, c = dt(c, T), p = dt(p, T), (g = 6 < c.length + p.length) && !nt && 0 === p[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(b[u]).join("transparent")) : (nt || (g = !1), T ? a.appendXtra(y.substr(0, y.indexOf("hsl")) + (g ? "hsla(" : "hsl("), c[0], O(p[0], c[0]), ",", !1, !0).appendXtra("", c[1], O(p[1], c[1]), "%,", !1).appendXtra("", c[2], O(p[2], c[2]), g ? "%," : "%" + x, !1) : a.appendXtra(y.substr(0, y.indexOf("rgb")) + (g ? "rgba(" : "rgb("), c[0], p[0] - c[0], ",", Math.round, !0).appendXtra("", c[1], p[1] - c[1], ",", Math.round).appendXtra("", c[2], p[2] - c[2], g ? "," : x, Math.round), g && (c = c.length < 4 ? 1 : c[3], a.appendXtra("", c, (p.length < 4 ? 1 : p[3]) - c, x, !1))), mt.lastIndex = 0;
                    else if (d = c.match(F)) {
                        if (!(m = p.match(z)) || m.length !== d.length) return a;
                        for (_ = f = 0; _ < d.length; _++) v = d[_], y = c.indexOf(v, f), a.appendXtra(c.substr(f, y - f), Number(v), O(m[_], v), "", S && "px" === c.substr(y + v.length, 2) && Math.round, 0 === _), f = y + v.length;
                        a["xs" + a.l] += c.substr(f)
                    } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + p : p;
                    if (-1 !== r.indexOf("=") && a.data) {
                        for (x = a.xs0 + a.data.s, u = 1; u < a.l; u++) x += a["xs" + u] + a.data["xn" + u];
                        a.e = x + a["xs" + u]
                    }
                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                },
                bt = 9;
            for ((t = Tt.prototype).l = t.pr = 0; 0 < --bt;) t["xn" + bt] = 0, t["xs" + bt] = "";
            t.xs0 = "", t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null, t.appendXtra = function(t, e, i, r, n, s) {
                var a = this,
                    o = a.l;
                return a["xs" + o] += s && (o || a["xs" + o]) ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", 0 < o ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = n, a["xn" + o] = e, a.plugin || (a.xfirst = new Tt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, n, a.pr), a.xfirst.xs0 = 0)) : (a.data = {
                    s: e + i
                }, a.rxp = {}, a.s = e, a.c = i, a.r = n)) : a["xs" + o] += e + (r || ""), a
            };

            function Pt(t, e) {
                e = e || {}, this.p = e.prefix && b(t) || t, (c[t] = c[this.p] = this).format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.allowFunc = e.allowFunc, this.pr = e.priority || 0
            }
            var St = r._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var r, n = t.split(","),
                        s = e.defaultValue;
                    for (i = i || [s], r = 0; r < n.length; r++) e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || s, new Pt(n[r], e)
                },
                Ot = r._registerPluginProp = function(t) {
                    var l;
                    c[t] || (l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin", St(t, {
                        parser: function(t, e, i, r, n, s, a) {
                            var o = h.com.greensock.plugins[l];
                            return o ? (o._cssRegister(), c[i].parse(t, e, i, r, n, s, a)) : (p("Error: " + l + " js file not loaded."), n)
                        }
                    }))
                };
            (t = Pt.prototype).parseComplex = function(t, e, i, r, n, s) {
                var a, o, l, h, u, _, f = this.keyword;
                if (this.multi && (H.test(i) || H.test(e) ? (o = e.replace(H, "|").split("|"), l = i.replace(H, "|").split("|")) : f && (o = [e], l = [i])), l) {
                    for (h = (l.length > o.length ? l : o).length, a = 0; a < h; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, f && ((u = e.indexOf(f)) !== (_ = i.indexOf(f)) && (-1 === _ ? o[a] = o[a].split(f).join("") : -1 === u && (o[a] += " " + f)));
                    e = o.join(", "), i = l.join(", ")
                }
                return wt(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, n, s)
            }, t.parse = function(t, e, i, r, n, s, a) {
                return this.parseComplex(t.style, this.format(lt(t, this.p, P, !1, this.dflt)), this.format(e), n, s)
            }, M.registerSpecialProp = function(t, o, l) {
                St(t, {
                    parser: function(t, e, i, r, n, s, a) {
                        n = new Tt(t, i, 0, 0, n, 2, i, !1, l);
                        return n.plugin = s, n.setRatio = o(t, e, r._tween, i), n
                    },
                    priority: l
                })
            }, M.useSVGTransformAttr = !0;

            function kt(t, e, i, r, n, s) {
                var a, o, l, h, u, _, f, c, p, d, m, g, y = t._gsTransform,
                    v = Vt(t, !0);
                y && (m = y.xOrigin, g = y.yOrigin), (!r || (a = r.split(" ")).length < 2) && (0 === (f = t.getBBox()).x && 0 === f.y && f.width + f.height === 0 && (f = {
                    x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                    y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                    width: 0,
                    height: 0
                }), a = [(-1 !== (e = ct(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = h = parseFloat(a[0]), i.yOrigin = u = parseFloat(a[1]), r && v !== Ut && (_ = v[0], f = v[1], c = v[2], p = v[3], d = v[4], e = v[5], (r = _ * p - f * c) && (o = h * (p / r) + u * (-c / r) + (c * e - p * d) / r, l = h * (-f / r) + u * (_ / r) - (_ * e - f * d) / r, h = i.xOrigin = a[0] = o, u = i.yOrigin = a[1] = l)), y && (s && (i.xOffset = y.xOffset, i.yOffset = y.yOffset, y = i), n || !1 !== n && !1 !== M.defaultSmoothOrigin ? (o = h - m, l = u - g, y.xOffset += o * v[0] + l * v[2] - o, y.yOffset += o * v[1] + l * v[3] - l) : y.xOffset = y.yOffset = 0), s || t.setAttribute("data-svg-origin", a.join(" "))
            }

            function Ct(t) {
                var e, i, r = this.data,
                    n = (d = -r.rotation * $) + r.skewX * $,
                    s = 1e5,
                    a = (Math.cos(d) * r.scaleX * s | 0) / s,
                    o = (Math.sin(d) * r.scaleX * s | 0) / s,
                    l = (Math.sin(n) * -r.scaleY * s | 0) / s,
                    h = (Math.cos(n) * r.scaleY * s | 0) / s,
                    u = this.t.style,
                    _ = this.t.currentStyle;
                if (_) {
                    i = o, o = -l, l = -i, e = _.filter, u.filter = "";
                    var f = this.t.offsetWidth,
                        c = this.t.offsetHeight,
                        p = "absolute" !== _.position,
                        d = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + o + ", M21=" + l + ", M22=" + h,
                        n = r.x + f * r.xPercent / 100,
                        s = r.y + c * r.yPercent / 100;
                    if (null != r.ox && (n += (v = (r.oxp ? f * r.ox * .01 : r.ox) - f / 2) - (v * a + (x = (r.oyp ? c * r.oy * .01 : r.oy) - c / 2) * o), s += x - (v * l + x * h)), p ? d += ", Dx=" + ((v = f / 2) - (v * a + (x = c / 2) * o) + n) + ", Dy=" + (x - (v * l + x * h) + s) + ")" : d += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(W, d) : u.filter = d + " " + e, 0 !== t && 1 !== t || 1 != a || 0 != o || 0 != l || 1 != h || (p && -1 === d.indexOf("Dx=0, Dy=0") || j.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !p) {
                        var m, g, y = T < 8 ? 1 : -1,
                            v = r.ieOffsetX || 0,
                            x = r.ieOffsetY || 0;
                        for (r.ieOffsetX = Math.round((f - ((a < 0 ? -a : a) * f + (o < 0 ? -o : o) * c)) / 2 + n), r.ieOffsetY = Math.round((c - ((h < 0 ? -h : h) * c + (l < 0 ? -l : l) * f)) / 2 + s), bt = 0; bt < 4; bt++) g = (i = -1 !== (g = _[m = ft[bt]]).indexOf("px") ? parseFloat(g) : ht(this.t, m, parseFloat(g), g.replace(N, "")) || 0) !== r[m] ? bt < 2 ? -r.ieOffsetX : -r.ieOffsetY : bt < 2 ? v - r.ieOffsetX : x - r.ieOffsetY, u[m] = (r[m] = Math.round(i - g * (0 === bt || 2 === bt ? 1 : y))) + "px"
                    }
                }
            }
            var Rt, At, Mt, Dt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Lt = b("transform"),
                Ft = st + "transform",
                zt = b("transformOrigin"),
                Et = null !== b("perspective"),
                It = r.Transform = function() {
                    this.perspective = parseFloat(M.defaultTransformPerspective) || 0, this.force3D = !(!1 === M.defaultForce3D || !Et) && (M.defaultForce3D || "auto")
                },
                Nt = _gsScope.SVGElement,
                jt = function(t, e, i) {
                    var r, n = tt.createElementNS(LS_nsProtocol + "www.w3.org/2000/svg", t),
                        s = /([a-z])([A-Z])/g;
                    for (r in i) n.setAttributeNS(null, r.replace(s, "$1-$2").toLowerCase(), i[r]);
                    return e.appendChild(n), n
                },
                Xt = tt.documentElement || {},
                Bt = (Mt = T || /Android/i.test(rt) && !_gsScope.chrome, tt.createElementNS && Xt.appendChild && !Mt && (At = jt("svg", Xt), jt = (rt = jt("rect", At, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, rt.style[zt] = "50% 50%", rt.style[Lt] = "scaleX(0.5)", Mt = jt === rt.getBoundingClientRect().width && !(L && Et), Xt.removeChild(At)), Mt),
                Yt = function(t) {
                    var e, i = o("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || LS_nsProtocol + "www.w3.org/2000/svg"),
                        r = this.parentNode,
                        n = this.nextSibling,
                        s = this.style.cssText;
                    if (Xt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                        e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Yt
                    } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                    return n ? r.insertBefore(this, n) : r.appendChild(this), Xt.removeChild(i), this.style.cssText = s, e
                },
                Gt = function(t) {
                    return !(!Nt || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(e) {
                        try {
                            return e.getBBox()
                        } catch (t) {
                            return Yt.call(e, !0)
                        }
                    }(t))
                },
                Ut = [1, 0, 0, 1, 0, 0],
                Vt = function(t, e) {
                    var i, r, n, s, a, o, l, h = t._gsTransform || new It,
                        u = t.style;
                    if (Lt ? r = lt(t, Ft, null, !0) : t.currentStyle && (r = (r = t.currentStyle.filter.match(Q)) && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), h.x || 0, h.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, Lt && i && !t.offsetParent && t !== Xt && (s = u.display, u.display = "block", (l = t.parentNode) && t.offsetParent || (a = 1, o = t.nextSibling, Xt.appendChild(t)), i = !(r = lt(t, Ft, null, !0)) || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, s ? u.display = s : Zt(u, "display"), a && (o ? l.insertBefore(t, o) : l ? l.appendChild(t) : Xt.removeChild(t))), (h.svg || t.getCTM && Gt(t)) && (i && -1 !== (u[Lt] + "").indexOf("matrix") && (r = u[Lt], i = 0), n = t.getAttribute("transform"), i && n && (r = "matrix(" + (n = t.transform.baseVal.consolidate().matrix).a + "," + n.b + "," + n.c + "," + n.d + "," + n.e + "," + n.f + ")", i = 0)), i) return Ut;
                    for (n = (r || "").match(F) || [], bt = n.length; - 1 < --bt;) s = Number(n[bt]), n[bt] = (a = s - (s |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + s : s;
                    return e && 6 < n.length ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
                },
                qt = r.getTransform = function(t, e, i, r) {
                    if (t._gsTransform && i && !r) return t._gsTransform;
                    var n, s, a, o, l, h, u, _, f, c, p, d, m, g, y, v, x, T, w, b, P, S, O = i && t._gsTransform || new It,
                        k = O.scaleX < 0,
                        C = Et && (parseFloat(lt(t, zt, e, !1, "0 0 0").split(" ")[2]) || O.zOrigin) || 0,
                        R = parseFloat(M.defaultTransformPerspective) || 0;
                    if (O.svg = !(!t.getCTM || !Gt(t)), O.svg && (kt(t, lt(t, zt, e, !1, "50% 50%") + "", O, t.getAttribute("data-svg-origin")), Rt = M.useSVGTransformAttr || Bt), s = Vt(t), s !== Ut)
                        for (n in 16 === s.length ? (b = s[0], S = s[1], _ = s[2], f = s[3], P = s[4], c = s[5], p = s[6], d = s[7], m = s[8], g = s[9], y = s[10], v = s[12], T = s[13], w = s[14], x = s[11], e = Math.atan2(p, y), O.zOrigin && (v = m * (w = -O.zOrigin) - s[12], T = g * w - s[13], w = y * w + O.zOrigin - s[14]), O.rotationX = e * K, e && (a = P * (h = Math.cos(-e)) + m * (u = Math.sin(-e)), o = c * h + g * u, l = p * h + y * u, m = P * -u + m * h, g = c * -u + g * h, y = p * -u + y * h, x = d * -u + x * h, P = a, c = o, p = l), e = Math.atan2(-_, y), O.rotationY = e * K, e && (o = S * (h = Math.cos(-e)) - g * (u = Math.sin(-e)), l = _ * h - y * u, g = S * u + g * h, y = _ * u + y * h, x = f * u + x * h, b = a = b * h - m * u, S = o, _ = l), e = Math.atan2(S, b), O.rotation = e * K, e && (a = b * (h = Math.cos(e)) + S * (u = Math.sin(e)), o = P * h + c * u, l = m * h + g * u, S = S * h - b * u, c = c * h - P * u, g = g * h - m * u, b = a, P = o, m = l), O.rotationX && 359.9 < Math.abs(O.rotationX) + Math.abs(O.rotation) && (O.rotationX = O.rotation = 0, O.rotationY = 180 - O.rotationY), e = Math.atan2(P, c), O.scaleX = (1e5 * Math.sqrt(b * b + S * S + _ * _) + .5 | 0) / 1e5, O.scaleY = (1e5 * Math.sqrt(c * c + p * p) + .5 | 0) / 1e5, O.scaleZ = (1e5 * Math.sqrt(m * m + g * g + y * y) + .5 | 0) / 1e5, b /= O.scaleX, P /= O.scaleY, S /= O.scaleX, c /= O.scaleY, 2e-5 < Math.abs(e) ? (O.skewX = e * K, P = 0, "simple" !== O.skewType && (O.scaleY *= 1 / Math.cos(e))) : O.skewX = 0, O.perspective = x ? 1 / (x < 0 ? -x : x) : 0, O.x = v, O.y = T, O.z = w, O.svg && (O.x -= O.xOrigin - (O.xOrigin * b - O.yOrigin * P), O.y -= O.yOrigin - (O.yOrigin * S - O.xOrigin * c))) : Et && !r && s.length && O.x === s[4] && O.y === s[5] && (O.rotationX || O.rotationY) || (w = (T = 6 <= s.length) ? s[0] : 1, b = s[1] || 0, P = s[2] || 0, S = T ? s[3] : 1, O.x = s[4] || 0, O.y = s[5] || 0, c = Math.sqrt(w * w + b * b), r = Math.sqrt(S * S + P * P), T = w || b ? Math.atan2(b, w) * K : O.rotation || 0, s = P || S ? Math.atan2(P, S) * K + T : O.skewX || 0, O.scaleX = c, O.scaleY = r, O.rotation = T, O.skewX = s, Et && (O.rotationX = O.rotationY = O.z = 0, O.perspective = R, O.scaleZ = 1), O.svg && (O.x -= O.xOrigin - (O.xOrigin * w + O.yOrigin * P), O.y -= O.yOrigin - (O.xOrigin * b + O.yOrigin * S))), 90 < Math.abs(O.skewX) && Math.abs(O.skewX) < 270 && (k ? (O.scaleX *= -1, O.skewX += O.rotation <= 0 ? 180 : -180, O.rotation += O.rotation <= 0 ? 180 : -180) : (O.scaleY *= -1, O.skewX += O.skewX <= 0 ? 180 : -180)), O.zOrigin = C, O) O[n] < 2e-5 && -2e-5 < O[n] && (O[n] = 0);
                    return i && ((t._gsTransform = O).svg && (Rt && t.style[Lt] ? A.delayedCall(.001, function() {
                        Zt(t.style, Lt)
                    }) : !Rt && t.getAttribute("transform") && A.delayedCall(.001, function() {
                        t.removeAttribute("transform")
                    }))), O
                },
                Qt = r.set3DTransformRatio = r.setTransformRatio = function(t) {
                    var e, i, r, n, s, a, o, l, h, u, _, f, c, p, d, m, g = this.data,
                        y = this.t.style,
                        v = g.rotation,
                        x = g.rotationX,
                        T = g.rotationY,
                        w = g.scaleX,
                        b = g.scaleY,
                        P = g.scaleZ,
                        S = g.x,
                        O = g.y,
                        k = g.z,
                        C = g.svg,
                        R = g.perspective,
                        A = g.force3D,
                        M = g.skewY,
                        D = g.skewX;
                    if (M && (D += M, v += M), !((1 !== t && 0 !== t || "auto" !== A || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && A || k || R || T || x || 1 !== P) || Rt && C || !Et) v || D || C ? (v *= $, d = D * $, m = 1e5, i = Math.cos(v) * w, n = Math.sin(v) * w, r = Math.sin(v - d) * -b, s = Math.cos(v - d) * b, d && "simple" === g.skewType && (e = Math.tan(d - M * $), r *= e = Math.sqrt(1 + e * e), s *= e, M && (e = Math.tan(M * $), i *= e = Math.sqrt(1 + e * e), n *= e)), C && (S += g.xOrigin - (g.xOrigin * i + g.yOrigin * r) + g.xOffset, O += g.yOrigin - (g.xOrigin * n + g.yOrigin * s) + g.yOffset, Rt && (g.xPercent || g.yPercent) && (_ = this.t.getBBox(), S += .01 * g.xPercent * _.width, O += .01 * g.yPercent * _.height), S < (_ = 1e-6) && -_ < S && (S = 0), O < _ && -_ < O && (O = 0)), p = (i * m | 0) / m + "," + (n * m | 0) / m + "," + (r * m | 0) / m + "," + (s * m | 0) / m + "," + S + "," + O + ")", C && Rt ? this.t.setAttribute("transform", "matrix(" + p) : y[Lt] = (g.xPercent || g.yPercent ? "translate(" + g.xPercent + "%," + g.yPercent + "%) matrix(" : "matrix(") + p) : y[Lt] = (g.xPercent || g.yPercent ? "translate(" + g.xPercent + "%," + g.yPercent + "%) matrix(" : "matrix(") + w + ",0,0," + b + "," + S + "," + O + ")";
                    else {
                        if (L && (w < (_ = 1e-4) && -_ < w && (w = P = 2e-5), b < _ && -_ < b && (b = P = 2e-5), !R || g.z || g.rotationX || g.rotationY || (R = 0)), v || D) v *= $, f = i = Math.cos(v), c = n = Math.sin(v), D && (v -= D * $, f = Math.cos(v), c = Math.sin(v), "simple" === g.skewType && (e = Math.tan((D - M) * $), f *= e = Math.sqrt(1 + e * e), c *= e, g.skewY && (e = Math.tan(M * $), i *= e = Math.sqrt(1 + e * e), n *= e))), r = -c, s = f;
                        else {
                            if (!(T || x || 1 !== P || R || C)) return void(y[Lt] = (g.xPercent || g.yPercent ? "translate(" + g.xPercent + "%," + g.yPercent + "%) translate3d(" : "translate3d(") + S + "px," + O + "px," + k + "px)" + (1 !== w || 1 !== b ? " scale(" + w + "," + b + ")" : ""));
                            i = s = 1, r = n = 0
                        }
                        l = 1, A = t = a = o = h = u = 0, d = R ? -1 / R : 0, m = g.zOrigin, _ = 1e-6, D = ",", M = "0", (v = T * $) && (f = Math.cos(v), h = d * (a = -(c = Math.sin(v))), A = i * c, t = n * c, d *= l = f, i *= f, n *= f), (v = x * $) && (e = r * (f = Math.cos(v)) + A * (c = Math.sin(v)), v = s * f + t * c, o = l * c, u = d * c, A = r * -c + A * f, t = s * -c + t * f, l *= f, d *= f, r = e, s = v), 1 !== P && (A *= P, t *= P, l *= P, d *= P), 1 !== b && (r *= b, s *= b, o *= b, u *= b), 1 !== w && (i *= w, n *= w, a *= w, h *= w), (m || C) && (m && (S += A * -m, O += t * -m, k += l * -m + m), C && (S += g.xOrigin - (g.xOrigin * i + g.yOrigin * r) + g.xOffset, O += g.yOrigin - (g.xOrigin * n + g.yOrigin * s) + g.yOffset), S < _ && -_ < S && (S = M), O < _ && -_ < O && (O = M), k < _ && -_ < k && (k = 0)), p = g.xPercent || g.yPercent ? "translate(" + g.xPercent + "%," + g.yPercent + "%) matrix3d(" : "matrix3d(", p += (i < _ && -_ < i ? M : i) + D + (n < _ && -_ < n ? M : n) + D + (a < _ && -_ < a ? M : a), p += D + (h < _ && -_ < h ? M : h) + D + (r < _ && -_ < r ? M : r) + D + (s < _ && -_ < s ? M : s), x || T || 1 !== P ? (p += D + (o < _ && -_ < o ? M : o) + D + (u < _ && -_ < u ? M : u) + D + (A < _ && -_ < A ? M : A), p += D + (t < _ && -_ < t ? M : t) + D + (l < _ && -_ < l ? M : l) + D + (d < _ && -_ < d ? M : d) + D) : p += ",0,0,0,0,1,0,", p += S + D + O + D + k + D + (R ? 1 + -k / R : 1) + ")", y[Lt] = p
                    }
                };
            (t = It.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = t.xOffset = t.yOffset = 0, t.scaleX = t.scaleY = t.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(t, e, i, r, n, s, a) {
                    if (r._lastParsedTransform === a) return n;
                    var o = (r._lastParsedTransform = a).scale && "function" == typeof a.scale ? a.scale : 0;
                    o && (a.scale = o(D, t));
                    var l, h, u, _, f, c, p, d, m = t._gsTransform,
                        g = t.style,
                        y = Dt.length,
                        v = a,
                        x = {},
                        T = "transformOrigin",
                        w = qt(t, P, !0, v.parseTransform),
                        b = v.transform && ("function" == typeof v.transform ? v.transform(D, R) : v.transform);
                    if (w.skewType = v.skewType || w.skewType || M.defaultSkewType, r._transform = w, "rotationZ" in v && (v.rotation = v.rotationZ), b && "string" == typeof b && Lt)(h = et.style)[Lt] = b, h.display = "block", h.position = "absolute", -1 !== b.indexOf("%") && (h.width = lt(t, "width"), h.height = lt(t, "height")), tt.body.appendChild(et), l = qt(et, null, !1), "simple" === w.skewType && (l.scaleY *= Math.cos(l.skewX * $)), w.svg && (f = w.xOrigin, c = w.yOrigin, l.x -= w.xOffset, l.y -= w.yOffset, (v.transformOrigin || v.svgOrigin) && (b = {}, kt(t, ct(v.transformOrigin), b, v.svgOrigin, v.smoothOrigin, !0), f = b.xOrigin, c = b.yOrigin, l.x -= b.xOffset - w.xOffset, l.y -= b.yOffset - w.yOffset), (f || c) && (p = Vt(et, !0), l.x -= f - (f * p[0] + c * p[2]), l.y -= c - (f * p[1] + c * p[3]))), tt.body.removeChild(et), l.perspective || (l.perspective = w.perspective), null != v.xPercent && (l.xPercent = S(v.xPercent, w.xPercent)), null != v.yPercent && (l.yPercent = S(v.yPercent, w.yPercent));
                    else if ("object" == typeof v) {
                        if (l = {
                                scaleX: S(null != v.scaleX ? v.scaleX : v.scale, w.scaleX),
                                scaleY: S(null != v.scaleY ? v.scaleY : v.scale, w.scaleY),
                                scaleZ: S(v.scaleZ, w.scaleZ),
                                x: S(v.x, w.x),
                                y: S(v.y, w.y),
                                z: S(v.z, w.z),
                                xPercent: S(v.xPercent, w.xPercent),
                                yPercent: S(v.yPercent, w.yPercent),
                                perspective: S(v.transformPerspective, w.perspective)
                            }, null != (_ = v.directionalRotation))
                            if ("object" == typeof _)
                                for (h in _) v[h] = _[h];
                            else v.rotation = _;
                        "string" == typeof v.x && -1 !== v.x.indexOf("%") && (l.x = 0, l.xPercent = S(v.x, w.xPercent)), "string" == typeof v.y && -1 !== v.y.indexOf("%") && (l.y = 0, l.yPercent = S(v.y, w.yPercent)), l.rotation = k("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : w.rotation, w.rotation, "rotation", x), Et && (l.rotationX = k("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : w.rotationX || 0, w.rotationX, "rotationX", x), l.rotationY = k("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : w.rotationY || 0, w.rotationY, "rotationY", x)), l.skewX = k(v.skewX, w.skewX), l.skewY = k(v.skewY, w.skewY)
                    }
                    for (Et && null != v.force3D && (w.force3D = v.force3D, u = !0), (p = w.force3D || w.z || w.rotationX || w.rotationY || l.z || l.rotationX || l.rotationY || l.perspective) || null == v.scale || (l.scaleZ = 1); - 1 < --y;)(1e-6 < (b = l[d = Dt[y]] - w[d]) || b < -1e-6 || null != v[d] || null != J[d]) && (u = !0, n = new Tt(w, d, w[d], b, n), d in x && (n.e = x[d]), n.xs0 = 0, n.plugin = s, r._overwriteProps.push(n.n));
                    return b = "function" == typeof v.transformOrigin ? v.transformOrigin(D, R) : v.transformOrigin, w.svg && (b || v.svgOrigin) && (f = w.xOffset, c = w.yOffset, kt(t, ct(b), l, v.svgOrigin, v.smoothOrigin), n = vt(w, "xOrigin", (m ? w : l).xOrigin, l.xOrigin, n, T), n = vt(w, "yOrigin", (m ? w : l).yOrigin, l.yOrigin, n, T), f === w.xOffset && c === w.yOffset || (n = vt(w, "xOffset", m ? f : w.xOffset, w.xOffset, n, T), n = vt(w, "yOffset", m ? c : w.yOffset, w.yOffset, n, T)), b = "0px 0px"), (b || Et && p && w.zOrigin) && (Lt ? (u = !0, d = zt, b || (b = (b = (lt(t, d, P, !1, "50% 50%") + "").split(" "))[0] + " " + b[1] + " " + w.zOrigin + "px"), b += "", (n = new Tt(g, d, 0, 0, n, -1, T)).b = g[d], n.plugin = s, Et ? (h = w.zOrigin, b = b.split(" "), w.zOrigin = (2 < b.length ? parseFloat(b[2]) : h) || 0, n.xs0 = n.e = b[0] + " " + (b[1] || "50%") + " 0px", (n = new Tt(w, "zOrigin", 0, 0, n, -1, n.n)).b = h, n.xs0 = n.e = w.zOrigin) : n.xs0 = n.e = b) : ct(b + "", w)), u && (r._transformType = w.svg && Rt || !p && 3 !== this._transformType ? 2 : 3), o && (a.scale = o), n
                },
                allowFunc: !0,
                prefix: !0
            }), St("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), St("clipPath", {
                defaultValue: "inset(0%)",
                prefix: !0,
                multi: !0,
                formatter: gt("inset(0% 0% 0% 0%)", !1, !0)
            }), St("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, r, n, s) {
                    e = this.format(e);
                    for (var a, o, l, h, u, _, f, c, p, d, m = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], g = t.style, y = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), x = e.split(" "), T = 0; T < m.length; T++) this.p.indexOf("border") && (m[T] = b(m[T])), -1 !== (l = o = lt(t, m[T], P, !1, "0px")).indexOf(" ") && (l = (o = l.split(" "))[0], o = o[1]), h = a = x[T], p = parseFloat(l), d = l.substr((p + "").length), "" === (_ = (f = "=" === h.charAt(1)) ? (u = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), u *= parseFloat(h), h.substr((u + "").length - (u < 0 ? 1 : 0)) || "") : (u = parseFloat(h), h.substr((u + "").length))) && (_ = w[i] || d), _ !== d && (c = ht(t, "borderLeft", p, d), p = ht(t, "borderTop", p, d), o = "%" === _ ? (l = c / y * 100 + "%", p / v * 100 + "%") : "em" === _ ? (l = c / (d = ht(t, "borderLeft", 1, "em")) + "em", p / d + "em") : (l = c + "px", p + "px"), f && (h = parseFloat(l) + u + _, a = parseFloat(o) + u + _)), n = wt(g, m[T], l + " " + o, h + " " + a, !1, "0px", n);
                    return n
                },
                prefix: !0,
                formatter: gt("0px 0px 0px 0px", !1, !0)
            }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, r, n, s) {
                    return wt(t.style, i, this.format(lt(t, i, P, !1, "0px 0px")), this.format(e), !1, "0px", n)
                },
                prefix: !0,
                formatter: gt("0px 0px", !1, !0)
            }), St("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, r, n, s) {
                    var a, o, l, h, u, _, f = "background-position",
                        c = P || d(t),
                        p = this.format((c ? T ? c.getPropertyValue(f + "-x") + " " + c.getPropertyValue(f + "-y") : c.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        e = this.format(e);
                    if (-1 !== p.indexOf("%") != (-1 !== e.indexOf("%")) && e.split(",").length < 2 && ((_ = lt(t, "backgroundImage").replace(V, "")) && "none" !== _)) {
                        for (a = p.split(" "), o = e.split(" "), it.setAttribute("src", _), l = 2; - 1 < --l;)(h = -1 !== (p = a[l]).indexOf("%")) != (-1 !== o[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - it.width : t.offsetHeight - it.height, a[l] = h ? parseFloat(p) / 100 * u + "px" : parseFloat(p) / u * 100 + "%");
                        p = a.join(" ")
                    }
                    return this.parseComplex(t.style, p, e, n, s)
                },
                formatter: ct
            }), St("backgroundSize", {
                defaultValue: "0 0",
                formatter: function(t) {
                    return "co" === (t += "").substr(0, 2) ? t : ct(-1 === t.indexOf(" ") ? t + " " + t : t)
                }
            }), St("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), St("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), St("transformStyle", {
                prefix: !0
            }), St("backfaceVisibility", {
                prefix: !0
            }), St("userSelect", {
                prefix: !0
            }), St("margin", {
                parser: yt("marginTop,marginRight,marginBottom,marginLeft")
            }), St("padding", {
                parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), St("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, i, r, n, s) {
                    var a, o;
                    return e = T < 9 ? (a = t.currentStyle, o = T < 8 ? " " : ",", a = "rect(" + a.clipTop + o + a.clipRight + o + a.clipBottom + o + a.clipLeft + ")", this.format(e).split(",").join(o)) : (a = this.format(lt(t, this.p, P, !1, this.dflt)), this.format(e)), this.parseComplex(t.style, a, e, n, s)
                }
            }), St("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), St("autoRound,strictUnits", {
                parser: function(t, e, i, r, n) {
                    return n
                }
            }), St("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, r, n, s) {
                    var a = lt(t, "borderTopWidth", P, !1, "0px"),
                        o = this.format(e).split(" "),
                        e = o[0].replace(N, "");
                    return "px" !== e && (a = parseFloat(a) / ht(t, "borderTopWidth", 1, e) + e), this.parseComplex(t.style, this.format(a + " " + lt(t, "borderTopStyle", P, !1, "solid") + " " + lt(t, "borderTopColor", P, !1, "#000")), o.join(" "), n, s)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0]
                }
            }), St("borderWidth", {
                parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), St("float,cssFloat,styleFloat", {
                parser: function(t, e, i, r, n, s) {
                    var a = t.style,
                        t = "cssFloat" in a ? "cssFloat" : "styleFloat";
                    return new Tt(a, t, 0, 0, n, -1, i, !1, 0, a[t], e)
                }
            });

            function Wt(t) {
                var e, i = this.t,
                    r = i.filter || lt(this.data, "filter") || "";
                100 == (t = this.s + this.c * t | 0) && (e = -1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), !lt(this.data, "filter")) : (i.filter = r.replace(B, ""), !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + t + ")"), -1 === r.indexOf("pacity") ? 0 == t && this.xn1 || (i.filter = r + " alpha(opacity=" + t + ")") : i.filter = r.replace(j, "opacity=" + t))
            }
            St("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, r, n, s) {
                    var a = parseFloat(lt(t, "opacity", P, !1, "1")),
                        o = t.style,
                        l = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), l && 1 === a && "hidden" === lt(t, "visibility", P) && 0 !== e && (a = 0), nt ? n = new Tt(o, "opacity", a, e - a, n) : ((n = new Tt(o, "opacity", 100 * a, 100 * (e - a), n)).xn1 = l ? 1 : 0, o.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = s, n.setRatio = Wt), l && ((n = new Tt(o, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n
                }
            });

            function Ht(t) {
                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                    for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Zt(i, e.p), e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            }
            var Zt = function(t, e) {
                e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(G, "-$1").toLowerCase())) : t.removeAttribute(e))
            };
            St("className", {
                parser: function(t, e, i, r, n, s, a) {
                    var o, l, h, u = t.getAttribute("class") || "",
                        _ = t.style.cssText;
                    if ((n = r._classNamePT = new Tt(t, i, 0, 0, n, 2)).setRatio = Ht, n.pr = -11, f = !0, n.b = u, o = m(t, P), i = t._gsClassPT) {
                        for (l = {}, h = i.data; h;) l[h.p] = 1, h = h._next;
                        i.setRatio(1)
                    }
                    return (t._gsClassPT = n).e = "=" !== e.charAt(1) ? e : u.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", n.e), a = g(t, o, m(t), a, l), t.setAttribute("class", u), n.data = a.firstMPT, t.style.cssText !== _ && (t.style.cssText = _), n.xfirst = r.parse(t, a.difs, n, s)
                }
            });

            function $t(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, r, n, s = this.t.style,
                        a = c.transform.parse;
                    if ("all" === this.e) n = !(s.cssText = "");
                    else
                        for (r = (e = this.e.split(" ").join("").split(",")).length; - 1 < --r;) i = e[r], c[i] && (c[i].parse === a ? n = !0 : i = "transformOrigin" === i ? zt : c[i].p), Zt(s, i);
                    n && (Zt(s, Lt), (t = this.t._gsTransform) && (t.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            }
            for (St("clearProps", {
                    parser: function(t, e, i, r, n) {
                        return (n = new Tt(t, i, 0, 0, n, 2)).setRatio = $t, n.e = e, n.pr = -10, n.data = r._tween, f = !0, n
                    }
                }), t = "bezier,throwProps,physicsProps,physics2D".split(","), bt = t.length; bt--;) Ot(t[bt]);
            (t = M.prototype)._firstPT = t._lastParsedTransform = t._transform = null, t._onInitTween = function(t, e, i, r) {
                if (!t.nodeType) return !1;
                this._target = R = t, this._tween = i, this._vars = e, D = r, C = e.autoRound, f = !1, w = e.suffixMap || M.suffixMap, P = d(t), _ = this._overwriteProps;
                var n, s, a, o, l, h, r = t.style;
                if (y && "" === r.zIndex && ("auto" !== (h = lt(t, "zIndex", P)) && "" !== h || this._addLazySet(r, "zIndex", 0)), "string" == typeof e && (a = r.cssText, h = m(t, P), r.cssText = a + ";" + e, h = g(t, h, m(t)).difs, !nt && X.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, r.cssText = a), e.className ? this._firstPT = n = c.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = n = this.parse(t, e, null), this._transformType) {
                    for (h = 3 === this._transformType, Lt ? v && (y = !0, "" === r.zIndex && ("auto" !== (e = lt(t, "zIndex", P)) && "" !== e || this._addLazySet(r, "zIndex", 0)), x && this._addLazySet(r, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (h ? "visible" : "hidden"))) : r.zoom = 1, s = n; s && s._next;) s = s._next;
                    r = new Tt(t, "transform", 0, 0, null, 2), this._linkCSSP(r, null, s), r.setRatio = Lt ? Qt : Ct, r.data = this._transform || qt(t, P, !0), r.tween = i, r.pr = -1, _.pop()
                }
                if (f) {
                    for (; n;) {
                        for (l = n._next, s = a; s && s.pr > n.pr;) s = s._next;
                        (n._prev = s ? s._prev : o) ? n._prev._next = n: a = n, (n._next = s) ? s._prev = n : o = n, n = l
                    }
                    this._firstPT = a
                }
                return !0
            }, t.parse = function(t, e, i, r) {
                var n, s, a, o, l, h, u, _, f = t.style;
                for (n in e) {
                    if (l = e[n], _ = c[n], "function" != typeof l || _ && _.allowFunc || (l = l(D, R)), _) i = _.parse(t, l, n, this, i, r, e);
                    else {
                        if ("--" === n.substr(0, 2)) {
                            this._tween._propLookup[n] = this._addTween.call(this._tween, t.style, "setProperty", d(t).getPropertyValue(n) + "", l + "", n, !1, n);
                            continue
                        }
                        o = lt(t, n, P) + "", u = "string" == typeof l, "color" === n || "fill" === n || "stroke" === n || -1 !== n.indexOf("Color") || u && Y.test(l) ? (u || (l = (3 < (l = dt(l)).length ? "rgba(" : "rgb(") + l.join(",") + ")"), i = wt(f, n, o, l, !0, "transparent", i, 0, r)) : u && Z.test(l) ? i = wt(f, n, o, l, !0, null, i, 0, r) : (h = (s = parseFloat(o)) || 0 === s ? o.substr((s + "").length) : "", "" !== o && "auto" !== o || (h = "width" === n || "height" === n ? (s = function(t, e, i) {
                            if ("svg" === (t.nodeName + "").toLowerCase()) return (i || d(t))[e] || 0;
                            if (t.getCTM && Gt(t)) return t.getBBox()[e] || 0;
                            var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                                n = _t[e],
                                s = n.length;
                            for (i = i || d(t); - 1 < --s;) r -= parseFloat(lt(t, "padding" + n[s], i, !0)) || 0, r -= parseFloat(lt(t, "border" + n[s] + "Width", i, !0)) || 0;
                            return r
                        }(t, n, P), "px") : "left" === n || "top" === n ? (s = ut(t, n, P), "px") : (s = "opacity" !== n ? 0 : 1, "")), "" === (u = (_ = u && "=" === l.charAt(1)) ? (a = parseInt(l.charAt(0) + "1", 10), l = l.substr(2), a *= parseFloat(l), l.replace(N, "")) : (a = parseFloat(l), u ? l.replace(N, "") : "")) && (u = n in w ? w[n] : h), l = a || 0 === a ? (_ ? a + s : a) + u : e[n], h === u || "" === u && "lineHeight" !== n || !a && 0 !== a || !s || (s = ht(t, n, s, h), "%" === u ? (s /= ht(t, n, 100, "%") / 100, !0 !== e.strictUnits && (o = s + "%")) : "em" === u || "rem" === u || "vw" === u || "vh" === u ? s /= ht(t, n, 1, u) : "px" !== u && (a = ht(t, n, a, u), u = "px"), _ && (a || 0 === a) && (l = a + s + u)), _ && (a += s), !s && 0 !== s || !a && 0 !== a ? void 0 !== f[n] && (l || l + "" != "NaN" && null != l) ? (i = new Tt(f, n, a || s || 0, 0, i, -1, n, !1, 0, o, l)).xs0 = "none" !== l || "display" !== n && -1 === n.indexOf("Style") ? l : o : p("invalid " + n + " tween value: " + e[n]) : (i = new Tt(f, n, s, a - s, i, 0, n, !1 !== C && ("px" === u || "zIndex" === n), 0, o, l)).xs0 = u)
                    }
                    r && i && !i.plugin && (i.plugin = r)
                }
                return i
            }, t.setRatio = function(t) {
                var e, i, r, n = this._firstPT;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; n;) {
                            if (e = n.c * t + n.s, n.r ? e = n.r(e) : e < 1e-6 && -1e-6 < e && (e = 0), n.type)
                                if (1 === n.type)
                                    if (2 === (r = n.l)) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                    else if (3 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                            else if (4 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                            else if (5 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                            else {
                                for (i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                n.t[n.p] = i
                            } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                            else n.t[n.p] = e + n.xs0;
                            n = n._next
                        } else
                            for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
                    else
                        for (; n;) {
                            if (2 !== n.type)
                                if (n.r && -1 !== n.type)
                                    if (e = n.r(n.s + n.c), n.type) {
                                        if (1 === n.type) {
                                            for (r = n.l, i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                            n.t[n.p] = i
                                        }
                                    } else n.t[n.p] = e + n.xs0;
                            else n.t[n.p] = n.e;
                            else n.setRatio(t);
                            n = n._next
                        }
            }, t._enableTransforms = function(t) {
                this._transform = this._transform || qt(this._target, P, !0), this._transformType = this._transform.svg && Rt || !t && 3 !== this._transformType ? 2 : 3
            };

            function Kt(t) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            }
            t._addLazySet = function(t, e, i) {
                e = this._firstPT = new Tt(t, e, 0, 0, this._firstPT, 2);
                e.e = i, e.setRatio = Kt, e.data = this
            }, t._linkCSSP = function(t, e, i, r) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, t._mod = function(t) {
                for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next
            }, t._kill = function(t) {
                var e, i, r, n = t;
                if (t.autoAlpha || t.alpha) {
                    for (i in n = {}, t) n[i] = t[i];
                    n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                }
                for (t.className && (e = this._classNamePT) && ((r = e.xfirst) && r._prev ? this._linkCSSP(r._prev, e._next, r._prev._prev) : r === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, r._prev), this._classNamePT = null), e = this._firstPT; e;) e.plugin && e.plugin !== i && e.plugin._kill && (e.plugin._kill(t), i = e.plugin), e = e._next;
                return s.prototype._kill.call(this, n)
            };
            var Jt = function(t, e, i) {
                var r, n, s, a;
                if (t.slice)
                    for (n = t.length; - 1 < --n;) Jt(t[n], e, i);
                else
                    for (n = (r = t.childNodes).length; - 1 < --n;) a = (s = r[n]).type, s.style && (e.push(m(s)), i && i.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || Jt(s, e, i)
            };
            return M.cascadeTo = function(t, e, i) {
                var r, n, s, a, o = A.to(t, e, i),
                    l = [o],
                    h = [],
                    u = [],
                    _ = [],
                    f = A._internals.reservedProps;
                for (t = o._targets || o.target, Jt(t, h, _), o.render(e, !0, !0), Jt(t, u), o.render(0, !0, !0), o._enabled(!0), r = _.length; - 1 < --r;)
                    if ((n = g(_[r], h[r], u[r])).firstMPT) {
                        for (s in n = n.difs, i) f[s] && (n[s] = i[s]);
                        for (s in a = {}, n) a[s] = h[r][s];
                        l.push(A.fromTo(_[r], e, a, n))
                    }
                return l
            }, s.activate([M]), M
        }, !0), (t = (t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.7.0",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
                return this._tween = i, !0
            }
        })).prototype)._onInitAllProps = function() {
            var t, e, i, r, n = this._tween,
                s = n.vars.roundProps,
                a = {},
                o = n._propLookup.roundProps;
            if ("object" != typeof s || s.push)
                for ("string" == typeof s && (s = s.split(",")), i = s.length; - 1 < --i;) a[s[i]] = Math.round;
            else
                for (r in s) a[r] = function(e) {
                    var i = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
                    return function(t) {
                        return (Math.round(t / e) * e * i | 0) / i
                    }
                }(s[r]);
            for (r in a)
                for (t = n._firstPT; t;) e = t._next, t.pg ? t.t._mod(a) : t.n === r && (2 === t.f && t.t ? function(t, e) {
                    for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next
                }(t.t._firstPT, a[r]) : (this._add(t.t, r, t.s, t.c, a[r]), e && (e._prev = t._prev), t._prev ? t._prev._next = e : n._firstPT === t && (n._firstPT = e), t._next = t._prev = null, n._propLookup[r] = o)), t = e;
            return !1
        }, t._add = function(t, e, i, r, n) {
            this._addTween(t, e, i, i + r, e, n || Math.round), this._overwriteProps.push(e)
        }, _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",
            init: function(t, e, i, r) {
                var n, s;
                if ("function" != typeof t.setAttribute) return !1;
                for (n in e) s = e[n], "function" == typeof s && (s = s(r, t)), this._addTween(t, "setAttribute", t.getAttribute(n) + "", s + "", n, !1, n), this._overwriteProps.push(n);
                return !0
            }
        }), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function(t, e, i, r) {
                "object" != typeof e && (e = {
                    rotation: e
                }), this.finals = {};
                var n, s, a, o, l, h = !0 === e.useRadians ? 2 * Math.PI : 360;
                for (n in e) "useRadians" !== n && (o = e[n], "function" == typeof o && (o = o(r, t)), l = (o + "").split("_"), s = l[0], a = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), o = this.finals[n] = "string" == typeof s && "=" === s.charAt(1) ? a + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, o = o - a, l.length && (s = l.join("_"), -1 !== s.indexOf("short") && (o %= h, o !== o % (h / 2) && (o = o < 0 ? o + h : o - h)), -1 !== s.indexOf("_cw") && o < 0 ? o = (o + 9999999999 * h) % h - (o / h | 0) * h : -1 !== s.indexOf("ccw") && 0 < o && (o = (o - 9999999999 * h) % h - (o / h | 0) * h)), (1e-6 < o || o < -1e-6) && (this._addTween(t, n, a, a + o, n), this._overwriteProps.push(n)));
                return !0
            },
            set: function(t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t);
                else
                    for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(m) {
            function t(t, e) {
                var i = h("easing." + t, function() {}, !0);
                return (t = i.prototype = new m).constructor = i, t.getRatio = e, i
            }

            function e(t, e, i, r, n) {
                return r = h("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new r
                }, !0), u(r, t), r
            }

            function g(t, e, i) {
                this.t = t, this.v = e, i && (((this.next = i).prev = this).c = i.v - e, this.gap = i.t - t)
            }
            var i, r, n, s = _gsScope.GreenSockGlobals || _gsScope,
                a = s.com.greensock,
                o = 2 * Math.PI,
                l = Math.PI / 2,
                h = a._class,
                u = m.register || function() {},
                _ = function(t, e) {
                    var i = h("easing." + t, function(t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        t = i.prototype = new m;
                    return t.constructor = i, t.getRatio = e, t.config = function(t) {
                        return new i(t)
                    }, i
                },
                a = e("Back", _("BackOut", function(t) {
                    return --t * t * ((this._p1 + 1) * t + this._p1) + 1
                }), _("BackIn", function(t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), _("BackInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
                f = h("easing.SlowMo", function(t, e, i) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : 1 < t && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                }, !0),
                _ = f.prototype = new m;
            return _.constructor = f, _.getRatio = function(t) {
                var e = t + (.5 - t) * this._p;
                return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, f.ease = new f(.7, .7), _.config = f.config = function(t, e, i) {
                return new f(t, e, i)
            }, (_ = (i = h("easing.SteppedEase", function(t, e) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
            }, !0)).prototype = new m).constructor = i, _.getRatio = function(t) {
                return t < 0 ? t = 0 : 1 <= t && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
            }, _.config = i.config = function(t, e) {
                return new i(t, e)
            }, (_ = (r = h("easing.ExpoScaleEase", function(t, e, i) {
                this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i
            }, !0)).prototype = new m).constructor = r, _.getRatio = function(t) {
                return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
            }, _.config = r.config = function(t, e, i) {
                return new r(t, e, i)
            }, (_ = (n = h("easing.RoughEase", function(t) {
                for (var e, i, r, n, s, a, o = (t = t || {}).taper || "none", l = [], h = 0, u = 0 | (t.points || 20), _ = u, f = !1 !== t.randomize, c = !0 === t.clamp, p = t.template instanceof m ? t.template : null, d = "number" == typeof t.strength ? .4 * t.strength : .4; - 1 < --_;) e = f ? Math.random() : 1 / u * _, i = p ? p.getRatio(e) : e, r = "none" === o ? d : "out" === o ? (n = 1 - e) * n * d : "in" === o ? e * e * d : (n = e < .5 ? 2 * e : 2 * (1 - e)) * n * .5 * d, f ? i += Math.random() * r - .5 * r : _ % 2 ? i += .5 * r : i -= .5 * r, c && (1 < i ? i = 1 : i < 0 && (i = 0)), l[h++] = {
                    x: e,
                    y: i
                };
                for (l.sort(function(t, e) {
                        return t.x - e.x
                    }), a = new g(1, 1, null), _ = u; - 1 < --_;) s = l[_], a = new g(s.x, s.y, a);
                this._prev = new g(0, 0, 0 !== a.t ? a : a.next)
            }, !0)).prototype = new m).constructor = n, _.getRatio = function(t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && t <= e.t;) e = e.prev;
                return (this._prev = e).v + (t - e.t) / e.gap * e.c
            }, _.config = function(t) {
                return new n(t)
            }, n.ease = new n, e("Bounce", t("BounceOut", function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), t("BounceIn", function(t) {
                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), t("BounceInOut", function(t) {
                var e = t < .5;
                return t = (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), e("Circ", t("CircOut", function(t) {
                return Math.sqrt(1 - --t * t)
            }), t("CircIn", function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), t("CircInOut", function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), e("Elastic", (_ = function(t, e, i) {
                var r = h("easing." + t, function(t, e) {
                        this._p1 = 1 <= t ? t : 1, this._p2 = (e || i) / (t < 1 ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                    }, !0),
                    t = r.prototype = new m;
                return t.constructor = r, t.getRatio = e, t.config = function(t, e) {
                    return new r(t, e)
                }, r
            })("ElasticOut", function(t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            }, .3), _("ElasticIn", function(t) {
                return -(this._p1 * Math.pow(2, 10 * --t) * Math.sin((t - this._p3) * this._p2))
            }, .3), _("ElasticInOut", function(t) {
                return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * --t) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * --t) * Math.sin((t - this._p3) * this._p2) * .5 + 1
            }, .45)), e("Expo", t("ExpoOut", function(t) {
                return 1 - Math.pow(2, -10 * t)
            }), t("ExpoIn", function(t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), t("ExpoInOut", function(t) {
                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), e("Sine", t("SineOut", function(t) {
                return Math.sin(t * l)
            }), t("SineIn", function(t) {
                return 1 - Math.cos(t * l)
            }), t("SineInOut", function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), h("easing.EaseLookup", {
                find: function(t) {
                    return m.map[t]
                }
            }, !0), u(s.SlowMo, "SlowMo", "ease,"), u(n, "RoughEase", "ease,"), u(i, "SteppedEase", "ease,"), a
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(f, c) {
        "use strict";
        var p = {},
            d = f.document,
            m = f.GreenSockGlobals = f.GreenSockGlobals || f;
        if (U = m[c]) return "undefined" != typeof module && module.exports && (module.exports = U);

        function g(t) {
            for (var e = t.split("."), i = m, r = 0; r < e.length; r++) i[e[r]] = i = i[e[r]] || {};
            return i
        }

        function o(t) {
            for (var e = [], i = t.length, r = 0; r !== i; e.push(t[r++]));
            return e
        }

        function y() {}
        var v, e, i, _ = g("com.greensock"),
            x = 1e-8,
            T = (e = Object.prototype.toString, i = e.call([]), function(t) {
                return null != t && (t instanceof Array || "object" == typeof t && !!t.push && e.call(t) === i)
            }),
            w = {},
            b = function(o, l, h, u) {
                this.sc = w[o] ? w[o].sc : [], (w[o] = this).gsClass = null, this.func = h;
                var _ = [];
                this.check = function(t) {
                    for (var e, i, r, n, s = l.length, a = s; - 1 < --s;)(e = w[l[s]] || new b(l[s], [])).gsClass ? (_[s] = e.gsClass, a--) : t && e.sc.push(this);
                    if (0 === a && h) {
                        if (r = (i = ("com.greensock." + o).split(".")).pop(), n = g(i.join("."))[r] = this.gsClass = h.apply(h, _), u)
                            if (m[r] = p[r] = n, "undefined" != typeof module && module.exports)
                                if (o === c)
                                    for (s in module.exports = p[c] = n, p) n[s] = p[s];
                                else p[c] && (p[c][r] = n);
                        else "function" == typeof define && define.amd && define((f.GreenSockAMDPath ? f.GreenSockAMDPath + "/" : "") + o.split(".").pop(), [], function() {
                            return n
                        });
                        for (s = 0; s < this.sc.length; s++) this.sc[s].check()
                    }
                }, this.check(!0)
            },
            r = f._gsDefine = function(t, e, i, r) {
                return new b(t, e, i, r)
            },
            P = _._class = function(t, e, i) {
                return e = e || function() {}, r(t, [], function() {
                    return e
                }, i), e
            };
        r.globals = m;
        var t, n = [0, 0, 1, 1],
            S = P("easing.Ease", function(t, e, i, r) {
                this._func = t, this._type = i || 0, this._power = r || 0, this._params = e ? n.concat(e) : n
            }, !0),
            O = S.map = {},
            s = S.register = function(t, e, i, r) {
                for (var n, s, a, o, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); - 1 < --h;)
                    for (s = l[h], n = r ? P("easing." + s, null, !0) : _.easing[s] || {}, a = u.length; - 1 < --a;) o = u[a], O[s + "." + o] = O[o + s] = n[o] = t.getRatio ? t : t[o] || new t
            };
        for ((t = S.prototype)._calcEnd = !1, t.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    r = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : t < .5 ? r / 2 : 1 - r / 2
            }, l = (a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --l;) t = a[l] + ",Power" + l, s(new S(null, null, 1, l), t, "easeOut", !0), s(new S(null, null, 2, l), t, "easeIn" + (0 === l ? ",easeNone" : "")), s(new S(null, null, 3, l), t, "easeInOut");
        O.linear = _.easing.Linear.easeIn, O.swing = _.easing.Quad.easeInOut;
        var k = P("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        (t = k.prototype).addEventListener = function(t, e, i, r, n) {
            n = n || 0;
            var s, a, o = this._listeners[t],
                l = 0;
            for (this !== D || v || D.wake(), null == o && (this._listeners[t] = o = []), a = o.length; - 1 < --a;)(s = o[a]).c === e && s.s === i ? o.splice(a, 1) : 0 === l && s.pr < n && (l = a + 1);
            o.splice(l, 0, {
                c: e,
                s: i,
                up: r,
                pr: n
            })
        }, t.removeEventListener = function(t, e) {
            var i, r = this._listeners[t];
            if (r)
                for (i = r.length; - 1 < --i;)
                    if (r[i].c === e) return void r.splice(i, 1)
        }, t.dispatchEvent = function(t) {
            var e, i, r, n = this._listeners[t];
            if (n)
                for (1 < (e = n.length) && (n = n.slice(0)), i = this._eventTarget; - 1 < --e;)(r = n[e]) && (r.up ? r.c.call(r.s || i, {
                    type: t,
                    target: i
                }) : r.c.call(r.s || i))
        };
        for (var a, C = f.requestAnimationFrame, R = f.cancelAnimationFrame, A = Date.now || function() {
                return (new Date).getTime()
            }, M = A(), l = (a = ["ms", "moz", "webkit", "o"]).length; - 1 < --l && !C;) C = f[a[l] + "RequestAnimationFrame"], R = f[a[l] + "CancelAnimationFrame"] || f[a[l] + "CancelRequestAnimationFrame"];
        P("Ticker", function(t, e) {
            var r, n, s, a, o, l = this,
                h = A(),
                i = !(!1 === e || !C) && "auto",
                u = 500,
                _ = 33,
                f = function(t) {
                    var e, i = A() - M;
                    u < i && (h += i - _), M += i, l.time = (M - h) / 1e3, i = l.time - o, (!r || 0 < i || !0 === t) && (l.frame++, o += i + (a <= i ? .004 : a - i), e = !0), !0 !== t && (s = n(f)), e && l.dispatchEvent("tick")
                };
            k.call(l), l.time = l.frame = 0, l.tick = function() {
                f(!0)
            }, l.lagSmoothing = function(t, e) {
                return arguments.length ? (u = t || 1e8, void(_ = Math.min(e, u, 0))) : u < 1e8
            }, l.sleep = function() {
                null != s && ((i && R ? R : clearTimeout)(s), n = y, s = null, l === D && (v = !1))
            }, l.wake = function(t) {
                null !== s ? l.sleep() : t ? h += -M + (M = A()) : 10 < l.frame && (M = A() - u + 5), n = 0 === r ? y : i && C ? C : function(t) {
                    return setTimeout(t, 1e3 * (o - l.time) + 1 | 0)
                }, l === D && (v = !0), f(2)
            }, l.fps = function(t) {
                return arguments.length ? (a = 1 / ((r = t) || 60), o = this.time + a, void l.wake()) : r
            }, l.useRAF = function(t) {
                return arguments.length ? (l.sleep(), i = t, void l.fps(r)) : i
            }, l.fps(t), setTimeout(function() {
                "auto" === i && l.frame < 5 && "hidden" !== (d || {}).visibilityState && l.useRAF(!1)
            }, 1500)
        }), (t = _.Ticker.prototype = new _.events.EventDispatcher).constructor = _.Ticker;
        var h = P("core.Animation", function(t, e) {
                this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !!e.immediateRender, this.data = e.data, this._reversed = !!e.reversed, $ && (v || D.wake(), (e = this.vars.useFrames ? Z : $).add(this, e._time), this.vars.paused && this.paused(!0))
            }),
            D = h.ticker = new _.Ticker;
        (t = h.prototype)._dirty = t._gc = t._initted = t._paused = !1, t._totalTime = t._time = 0, t._rawPrevTime = -1, t._next = t._last = t._onUpdate = t._timeline = t.timeline = null, t._paused = !1;
        var u = function() {
            v && 2e3 < A() - M && ("hidden" !== (d || {}).visibilityState || !D.lagSmoothing()) && D.wake();
            var t = setTimeout(u, 2e3);
            t.unref && t.unref()
        };
        u(), t.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, t.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, t.resume = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, t.seek = function(t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }, t.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }, t.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, t.render = function(t, e, i) {}, t.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
        }, t.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - x
        }, t._enabled = function(t, e) {
            return v || D.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, t._kill = function(t, e) {
            return this._enabled(!1, !1)
        }, t.kill = function(t, e) {
            return this._kill(t, e), this
        }, t._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, t._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); - 1 < --e;) "{self}" === t[e] && (i[e] = this);
            return i
        }, t._callback = function(t) {
            var e = this.vars,
                i = e[t],
                r = e[t + "Params"],
                n = e[t + "Scope"] || e.callbackScope || this;
            switch (r ? r.length : 0) {
                case 0:
                    i.call(n);
                    break;
                case 1:
                    i.call(n, r[0]);
                    break;
                case 2:
                    i.call(n, r[0], r[1]);
                    break;
                default:
                    i.apply(n, r)
            }
        }, t.eventCallback = function(t, e, i, r) {
            if ("on" === (t || "").substr(0, 2)) {
                var n = this.vars;
                if (1 === arguments.length) return n[t];
                null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = T(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, t.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, t.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, t.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, t.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, t.totalTime = function(t, e, i) {
            if (v || D.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var r = this._totalDuration,
                        n = this._timeline;
                    if (r < t && !i && (t = r), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? r - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                        for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                }
                this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (X.length && J(), this.render(t, e, !1), X.length && J())
            }
            return this
        }, t.progress = t.totalProgress = function(t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }, t.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, t.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, t.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            var e, i;
            for (t = t || x, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
            return this
        }, t.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, t.paused = function(t) {
            if (!arguments.length) return this._paused;
            var e, i, r = this._timeline;
            return t != this._paused && r && (v || t || D.wake(), i = (e = r.rawTime()) - this._pauseTime, !t && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 != i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
        };
        var L = P("core.SimpleTimeline", function(t) {
            h.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });

        function F(t) {
            return t && t.length && t !== f && t[0] && (t[0] === f || t[0].nodeType && t[0].style && !t.nodeType)
        }(t = L.prototype = new h).constructor = L, t.kill()._gc = !1, t._first = t._last = t._recent = null, t._sortChildren = !1, t.add = t.insert = function(t, e, i, r) {
            var n, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
                for (s = t._startTime; n && n._startTime > s;) n = n._prev;
            return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this
        }, t._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, t.render = function(t, e, i) {
            var r, n = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; n;) r = n._next, (n._active || t >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r
        }, t.rawTime = function() {
            return v || D.wake(), this._totalTime
        };
        var z = P("TweenLite", function(t, e, i) {
            if (h.call(this, e, i), this.render = z.prototype.render, null == t) throw "Cannot tween a null target.";
            this.target = t = "string" == typeof t && z.selector(t) || t;
            var r, n, s, i = t.jquery || t.length && t !== f && t[0] && (t[0] === f || t[0].nodeType && t[0].style && !t.nodeType),
                a = this.vars.overwrite;
            if (this._overwrite = a = null == a ? H[z.defaultOverwrite] : "number" == typeof a ? a >> 0 : H[a], (i || t instanceof Array || t.push && T(t)) && "number" != typeof t[0])
                for (this._targets = s = o(t), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++)(n = s[r]) ? "string" != typeof n ? n.length && n !== f && n[0] && (n[0] === f || n[0].nodeType && n[0].style && !n.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(o(n))) : (this._siblings[r] = et(n, this, !1), 1 === a && 1 < this._siblings[r].length && it(n, this, null, 1, this._siblings[r])) : "string" == typeof(n = s[r--] = z.selector(n)) && s.splice(r + 1, 1) : s.splice(r--, 1);
            else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === a && 1 < this._siblings.length && it(t, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -x, this.render(Math.min(0, -this._delay)))
        }, !0);

        function E(t) {
            for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && -1e-6 < e && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
        }

        function I(t) {
            return (1e3 * t | 0) / 1e3 + ""
        }

        function N(t, e, i, r) {
            var n, s, a, o, l, h, u = [],
                _ = 0,
                f = "",
                c = 0;
            for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, n = t.match(Y) || [], s = e.match(Y) || [], r && (r._next = null, r.blob = 1, u._firstPT = u._applyPT = r), o = s.length, a = 0; a < o; a++) h = s[a], f += (l = e.substr(_, e.indexOf(h, _) - _)) || !a ? l : ",", _ += l.length, c ? c = (c + 1) % 5 : "rgba(" === l.substr(-5) && (c = 1), h === n[a] || n.length <= a ? f += h : (f && (u.push(f), f = ""), l = parseFloat(n[a]), u.push(l), u._firstPT = {
                _next: u._firstPT,
                t: u,
                p: u.length - 1,
                s: l,
                c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - l) || 0,
                f: 0,
                m: c && c < 4 ? Math.round : I
            }), _ += h.length;
            return (f += e.substr(_)) && u.push(f), u.setRatio = E, G.test(e) && (u.end = null), u
        }

        function j(t, e, i, r, n, s, a, o, l) {
            "function" == typeof r && (r = r(l || 0, t));
            var h = typeof t[e],
                l = "function" != h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                i = "get" !== i ? i : l ? a ? t[l](a) : t[l]() : t[e],
                l = "string" == typeof r && "=" === r.charAt(1),
                s = {
                    t: t,
                    p: e,
                    s: i,
                    f: "function" == h,
                    pg: 0,
                    n: n || e,
                    m: s ? "function" == typeof s ? s : Math.round : 0,
                    pr: 0,
                    c: l ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - i || 0
                };
            return "number" == typeof i && ("number" == typeof r || l) || (a || isNaN(i) || !l && isNaN(r) || "boolean" == typeof i || "boolean" == typeof r ? (s.fp = a, s = {
                t: N(i, l ? parseFloat(s.s) + s.c + (s.s + "").replace(/[0-9\-\.]/g, "") : r, o || z.defaultStringFilter, s),
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: n || e,
                pr: 0,
                m: 0
            }) : (s.s = parseFloat(i), l || (s.c = parseFloat(r) - s.s || 0))), s.c ? ((s._next = this._firstPT) && (s._next._prev = s), this._firstPT = s) : void 0
        }(t = z.prototype = new h).constructor = z, t.kill()._gc = !1, t.ratio = 0, t._firstPT = t._targets = t._overwrittenProps = t._startAt = null, t._notifyPluginsOfEnabled = t._lazy = !1, z.version = "2.1.3", z.defaultEase = t._ease = new S(null, null, 1, 1), z.defaultOverwrite = "auto", z.ticker = D, z.autoSleep = 120, z.lagSmoothing = function(t, e) {
            D.lagSmoothing(t, e)
        }, z.selector = f.$ || f.jQuery || function(t) {
            var e = f.$ || f.jQuery;
            return e ? (z.selector = e)(t) : (d = d || f.document) ? d.querySelectorAll ? d.querySelectorAll(t) : d.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t
        };
        var X = [],
            B = {},
            Y = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            G = /[\+-]=-?[\.\d]/,
            U = z._internals = {
                isArray: T,
                isSelector: F,
                lazyTweens: X,
                blobDif: N
            },
            V = z._plugins = {},
            q = U.tweenLookup = {},
            Q = 0,
            W = U.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1,
                stagger: 1
            },
            H = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            },
            Z = h._rootFramesTimeline = new L,
            $ = h._rootTimeline = new L,
            K = 30,
            J = U.lazyRender = function() {
                var t, e, i = X.length;
                for (B = {}, t = 0; t < i; t++)(e = X[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                X.length = 0
            };

        function tt(t, e, i, r) {
            var n, s, a = t.vars.onOverwrite;
            return a && (n = a(t, e, i, r)), (a = z.onOverwrite) && (s = a(t, e, i, r)), !1 !== n && !1 !== s
        }
        $._startTime = D.time, Z._startTime = D.frame, $._active = Z._active = !0, setTimeout(J, 1), h._updateRoot = z.render = function() {
            var t, e, i;
            if (X.length && J(), $.render((D.time - $._startTime) * $._timeScale, !1, !1), Z.render((D.frame - Z._startTime) * Z._timeScale, !1, !1), X.length && J(), D.frame >= K) {
                for (i in K = D.frame + (parseInt(z.autoSleep, 10) || 120), q) {
                    for (t = (e = q[i].tweens).length; - 1 < --t;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete q[i]
                }
                if ((!(i = $._first) || i._paused) && z.autoSleep && !Z._first && 1 === D._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || D.sleep()
                }
            }
        }, D.addEventListener("tick", h._updateRoot);
        var et = function(t, e, i) {
                var r, n, s = t._gsTweenID;
                if (q[s || (t._gsTweenID = s = "t" + Q++)] || (q[s] = {
                        target: t,
                        tweens: []
                    }), e && ((r = q[s].tweens)[n = r.length] = e, i))
                    for (; - 1 < --n;) r[n] === e && r.splice(n, 1);
                return q[s].tweens
            },
            it = function(t, e, i, r, n) {
                var s, a, o;
                if (1 === r || 4 <= r) {
                    for (o = n.length, c = 0; c < o; c++)
                        if ((a = n[c]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
                        else if (5 === r) break;
                    return s
                }
                for (var l, h = e._startTime + x, u = [], _ = 0, f = 0 === e._duration, c = n.length; - 1 < --c;)(a = n[c]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (l = l || rt(e, 0, f), 0 === rt(a, l, f) && (u[_++] = a)) : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((f || !a._initted) && h - a._startTime <= 2e-8 || (u[_++] = a)));
                for (c = _; - 1 < --c;)
                    if (o = (a = u[c])._firstPT, 2 === r && a._kill(i, t, e) && (s = !0), 2 !== r || !a._firstPT && a._initted && o) {
                        if (2 !== r && !tt(a, e)) continue;
                        a._enabled(!1, !1) && (s = !0)
                    }
                return s
            },
            rt = function(t, e, i) {
                for (var r = t._timeline, n = r._timeScale, s = t._startTime; r._timeline;) {
                    if (s += r._startTime, n *= r._timeScale, r._paused) return -100;
                    r = r._timeline
                }
                return e < (s /= n) ? s - e : i && s === e || !t._initted && s - e < 2e-8 ? x : (s += t.totalDuration() / t._timeScale / n) > e + x ? 0 : s - e - x
            };
        t._init = function() {
            var t, e, i, r, n, s, a = this.vars,
                o = this._overwrittenProps,
                l = this._duration,
                h = !!a.immediateRender,
                u = a.ease,
                _ = this._startAt;
            if (a.startAt) {
                for (r in _ && (_.render(-1, !0), _.kill()), n = {}, a.startAt) n[r] = a.startAt[r];
                if (n.data = "isStart", n.overwrite = !1, n.immediateRender = !0, n.lazy = h && !1 !== a.lazy, n.startAt = n.delay = null, n.onUpdate = a.onUpdate, n.onUpdateParams = a.onUpdateParams, n.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = z.to(this.target || {}, 0, n), h)
                    if (0 < this._time) this._startAt = null;
                    else if (0 !== l) return
            } else if (a.runBackwards && 0 !== l)
                if (_) _.render(-1, !0), _.kill(), this._startAt = null;
                else {
                    for (r in 0 !== this._time && (h = !1), i = {}, a) W[r] && "autoCSS" !== r || (i[r] = a[r]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== a.lazy, i.immediateRender = h, this._startAt = z.to(this.target, 0, i), h) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = u = u ? u instanceof S ? u : "function" == typeof u ? new S(u, a.easeParams) : O[u] || z.defaultEase : z.defaultEase, a.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
            if (e && z._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = a.onUpdate, this._initted = !0
        }, t._initProps = function(t, e, i, r, n) {
            var s, a, o, l, h, u;
            if (null == t) return !1;
            for (s in B[t._gsTweenID] && J(), this.vars.css || t.style && t !== f && t.nodeType && V.css && !1 !== this.vars.autoCSS && function(t, e) {
                    var i, r = {};
                    for (i in t) W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!V[i] || V[i] && V[i]._autoCSS) || (r[i] = t[i], delete t[i]);
                    t.css = r
                }(this.vars, t), this.vars)
                if (u = this.vars[s], W[s]) u && (u instanceof Array || u.push && T(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[s] = u = this._swapSelfInParams(u, this));
                else if (V[s] && (l = new V[s])._onInitTween(t, this.vars[s], this, n)) {
                for (this._firstPT = h = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: s,
                        pg: 1,
                        pr: l._priority,
                        m: 0
                    }, a = l._overwriteProps.length; - 1 < --a;) e[l._overwriteProps[a]] = this._firstPT;
                (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
            } else e[s] = j.call(this, t, s, "get", u, s, 0, null, this.vars.stringFilter, n);
            return r && this._kill(r, t) ? this._initProps(t, e, i, r, n) : 1 < this._overwrite && this._firstPT && 1 < i.length && it(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, r, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (B[t._gsTweenID] = !0), o)
        }, t.render = function(t, e, i) {
            var r, n, s, a, o, l, h, u = this,
                _ = u._time,
                f = u._duration,
                c = u._rawPrevTime;
            if (f - x <= t && 0 <= t ? (u._totalTime = u._time = f, u.ratio = u._ease._calcEnd ? u._ease.getRatio(1) : 1, u._reversed || (r = !0, n = "onComplete", i = i || u._timeline.autoRemoveChildren), 0 !== f || !u._initted && u.vars.lazy && !i || (u._startTime === u._timeline._duration && (t = 0), (c < 0 || t <= 0 && -x <= t || c === x && "isPause" !== u.data) && c !== t && (i = !0, x < c && (n = "onReverseComplete")), u._rawPrevTime = a = !e || t || c === t ? t : x)) : t < x ? (u._totalTime = u._time = 0, u.ratio = u._ease._calcEnd ? u._ease.getRatio(0) : 0, (0 !== _ || 0 === f && 0 < c) && (n = "onReverseComplete", r = u._reversed), -x < t ? t = 0 : t < 0 && (u._active = !1, 0 !== f || !u._initted && u.vars.lazy && !i || (0 <= c && (c !== x || "isPause" !== u.data) && (i = !0), u._rawPrevTime = a = !e || t || c === t ? t : x)), (!u._initted || u._startAt && u._startAt.progress()) && (i = !0)) : (u._totalTime = u._time = t, u._easeType ? (o = t / f, (1 === (l = u._easeType) || 3 === l && .5 <= o) && (o = 1 - o), 3 === l && (o *= 2), 1 === (h = u._easePower) ? o *= o : 2 === h ? o *= o * o : 3 === h ? o *= o * o * o : 4 === h && (o *= o * o * o * o), u.ratio = 1 === l ? 1 - o : 2 === l ? o : t / f < .5 ? o / 2 : 1 - o / 2) : u.ratio = u._ease.getRatio(t / f)), u._time !== _ || i) {
                if (!u._initted) {
                    if (u._init(), !u._initted || u._gc) return;
                    if (!i && u._firstPT && (!1 !== u.vars.lazy && u._duration || u.vars.lazy && !u._duration)) return u._time = u._totalTime = _, u._rawPrevTime = c, X.push(u), void(u._lazy = [t, e]);
                    u._time && !r ? u.ratio = u._ease.getRatio(u._time / f) : r && u._ease._calcEnd && (u.ratio = u._ease.getRatio(0 === u._time ? 0 : 1))
                }
                for (!1 !== u._lazy && (u._lazy = !1), u._active || !u._paused && u._time !== _ && 0 <= t && (u._active = !0), 0 === _ && (u._startAt && (0 <= t ? u._startAt.render(t, !0, i) : n = n || "_dummyGS"), !u.vars.onStart || 0 === u._time && 0 !== f || (e || u._callback("onStart"))), s = u._firstPT; s;) s.f ? s.t[s.p](s.c * u.ratio + s.s) : s.t[s.p] = s.c * u.ratio + s.s, s = s._next;
                u._onUpdate && (t < 0 && u._startAt && -1e-4 !== t && u._startAt.render(t, !0, i), e || (u._time !== _ || r || i) && u._callback("onUpdate")), !n || u._gc && !i || (t < 0 && u._startAt && !u._onUpdate && -1e-4 !== t && u._startAt.render(t, !0, i), r && (u._timeline.autoRemoveChildren && u._enabled(!1, !1), u._active = !1), !e && u.vars[n] && u._callback(n), 0 === f && u._rawPrevTime === x && a !== x && (u._rawPrevTime = 0))
            }
        }, t._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : z.selector(e) || e;
            var r, n, s, a, o, l, h, u, _, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                c = this._firstPT;
            if ((T(e) || F(e)) && "number" != typeof e[0])
                for (r = e.length; - 1 < --r;) this._kill(t, e[r], i) && (l = !0);
            else {
                if (this._targets) {
                    for (r = this._targets.length; - 1 < --r;)
                        if (e === this._targets[r]) {
                            o = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    o = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    if (h = t || o, u = t !== n && "all" !== n && t !== o && ("object" != typeof t || !t._tempKill), i && (z.onOverwrite || this.vars.onOverwrite)) {
                        for (s in h) o[s] && (_ = _ || [], _.push(s));
                        if ((_ || !t) && !tt(this, i, e, _)) return !1
                    }
                    for (s in h)(a = o[s]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[s]), u && (n[s] = 1);
                    !this._firstPT && this._initted && c && this._enabled(!1, !1)
                }
            }
            return l
        }, t.invalidate = function() {
            this._notifyPluginsOfEnabled && z._onPluginEvent("_onDisable", this);
            var t = this._time;
            return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], h.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -x, this.render(t, !1, !1 !== this.vars.lazy)), this
        }, t._enabled = function(t, e) {
            if (v || D.wake(), t && this._gc) {
                var i, r = this._targets;
                if (r)
                    for (i = r.length; - 1 < --i;) this._siblings[i] = et(r[i], this, !0);
                else this._siblings = et(this.target, this, !0)
            }
            return h.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && z._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, z.to = function(t, e, i) {
            return new z(t, e, i)
        }, z.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new z(t, e, i)
        }, z.fromTo = function(t, e, i, r) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new z(t, e, r)
        }, z.delayedCall = function(t, e, i, r, n) {
            return new z(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: r,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: n,
                overwrite: 0
            })
        }, z.set = function(t, e) {
            return new z(t, 0, e)
        }, z.getTweensOf = function(t, e) {
            if (null == t) return [];
            var i, r, n, s;
            if (t = "string" == typeof t && z.selector(t) || t, (T(t) || F(t)) && "number" != typeof t[0]) {
                for (i = t.length, r = []; - 1 < --i;) r = r.concat(z.getTweensOf(t[i], e));
                for (i = r.length; - 1 < --i;)
                    for (s = r[i], n = i; - 1 < --n;) s === r[n] && r.splice(i, 1)
            } else if (t._gsTweenID)
                for (i = (r = et(t).concat()).length; - 1 < --i;)(r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
            return r || []
        }, z.killTweensOf = z.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var r = z.getTweensOf(t, e), n = r.length; - 1 < --n;) r[n]._kill(i, t)
        };
        var nt = P("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = nt.prototype
        }, !0);
        if (t = nt.prototype, nt.version = "1.19.0", nt.API = 2, t._firstPT = null, t._addTween = j, t.setRatio = E, t._kill = function(t) {
                var e, i = this._overwriteProps,
                    r = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; - 1 < --e;) null != t[i[e]] && i.splice(e, 1);
                for (; r;) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
                return !1
            }, t._mod = t._roundProps = function(t) {
                for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
            }, z._onPluginEvent = function(t, e) {
                var i, r, n, s, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, r = n; r && r.pr > o.pr;) r = r._next;
                        (o._prev = r ? r._prev : s) ? o._prev._next = o: n = o, (o._next = r) ? r._prev = o : s = o, o = a
                    }
                    o = e._firstPT = n
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, nt.activate = function(t) {
                for (var e = t.length; - 1 < --e;) t[e].API === nt.API && (V[(new t[e])._propName] = t[e]);
                return !0
            }, r.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    r = t.priority || 0,
                    n = t.overwriteProps,
                    s = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    },
                    a = P("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        nt.call(this, i, r), this._overwriteProps = n || []
                    }, !0 === t.global),
                    o = a.prototype = new nt(i);
                for (e in (o.constructor = a).API = t.API, s) "function" == typeof t[e] && (o[s[e]] = t[e]);
                return a.version = t.version, nt.activate([a]), a
            }, a = f._gsQueue) {
            for (l = 0; l < a.length; l++) a[l]();
            for (t in w) w[t].func || f.console.log("GSAP encountered missing dependency: " + t)
        }
        v = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(t) {
        "function" == typeof define && define.amd ? define(t) : "undefined" != typeof exports ? module.exports = t() : t()
    }(function() {
        (void 0 !== LS_GSAP ? LS_GSAP : window).SplitType = function(P, l, n) {
            function o(t) {
                return null !== t && "object" == typeof t
            }

            function h(t) {
                return o(t) && "number" == typeof t.length && 0 < t.length
            }

            function u(t) {
                return o(t) && /^(1|3|11)$/.test(t.nodeType)
            }

            function S(t, e, i) {
                for (var r = Object(t), n = h(r) ? r : o(t = r) && "[object Object]" === Object.prototype.toString.call(t) ? f(r) : [r], s = parseInt(n.length) || 0, a = 0; a < s; a++) e.call(i, n[a], a, r)
            }

            function i(i, r) {
                return i = Object(i), r = Object(r), Object.getOwnPropertyNames(i).reduce(function(t, e) {
                    return c(t, e, p(r, e) || p(i, e))
                }, {})
            }

            function O(t, e, i) {
                var r = {};
                return o(t) && (t = t[a] || (t[a] = ++s), r = _[t] || (_[t] = {})), i === n ? e === n ? r : r[e] : e !== n ? r[e] = i : void 0
            }

            function k(t, i) {
                var r = l.createElement(t);
                return i === n || S(i, function(t) {
                    var e = i[t];
                    if (null !== e) switch (t) {
                        case "textContent":
                            r.textContent = e;
                            break;
                        case "innerHTML":
                            r.innerHTML = e;
                            break;
                        case "children":
                            S(e, function(t) {
                                u(t) && r.appendChild(t)
                            });
                            break;
                        default:
                            r.setAttribute(t, e)
                    }
                }), r
            }

            function r(t, e) {
                return this instanceof r ? (this.isSplit = !1, this.settings = i(d, e), this.elements = function(t) {
                    var e, i, r, n, s, a, o = [];
                    if ("string" == typeof t && (t = "#" === (e = t.trim())[0] && !/[^\w]/.test(i = e.slice(1)) ? l.getElementById(i) : l.querySelectorAll(e)), e || u(t)) return u(t) ? [t] : R.call(t);
                    if (h(t))
                        for (s = 0, r = t.length; s < r; s++)
                            if (h(t[s]))
                                for (a = 0, n = t[s].length; a < n; a++) u(t[s][a]) && o.push(t[s][a]);
                            else u(t[s]) && o.push(t[s]);
                    return o
                }(t), void(this.elements.length && (this.originals = this.elements.map(function(t) {
                    return O(t).html = O(t).html || t.innerHTML
                }), this.split()))) : new r(t, e)
            }
            if (l.addEventListener && Function.prototype.bind) {
                var a = "splitType" + +new Date,
                    _ = {},
                    s = 0,
                    C = Array.prototype.push,
                    R = Array.prototype.slice,
                    f = Object.keys,
                    c = (Object.prototype.hasOwnProperty, Object.defineProperty),
                    p = (Object.defineProperties, Object.getOwnPropertyDescriptor),
                    A = l.createDocumentFragment.bind(l),
                    M = l.createTextNode.bind(l),
                    d = {
                        splitClass: "",
                        lineClass: "ls-ln",
                        wordClass: "ls-wd",
                        charClass: "ls-ch",
                        split: "lines, words, chars",
                        position: "relative",
                        absolute: !1,
                        tagName: "ls-tb",
                        DEBUG: !1
                    };
                return c(r, "defaults", {
                    get: function() {
                        return d
                    },
                    set: function(t) {
                        d = i(d, t)
                    }
                }), r.prototype.split = function(t) {
                    this.revert(), this.lines = [], this.words = [], this.chars = [], t !== n && (this.settings = i(this.settings, t)), S(this.elements, function(t) {
                        (function(t) {
                            var e, i, r, n, s, a, o, l, h, u, _, f = this.settings,
                                c = f.tagName,
                                p = "B" + +new Date + "R",
                                d = f.split,
                                m = -1 !== d.indexOf("lines"),
                                g = -1 !== d.indexOf("words"),
                                y = -1 !== d.indexOf("chars"),
                                v = "absolute" === f.position || !0 === f.absolute,
                                x = k("div"),
                                T = [],
                                w = [],
                                b = m ? k("div") : A();
                            x.innerHTML = t.innerHTML.replace(/<br\s*\/?>/g, " " + p + " "), T = x.textContent.replace(/\s+/g, " ").trim().split(" ").map(function(t) {
                                return t === p ? (b.appendChild(k("br")), null) : (y && (e = t.split("").map(function(t) {
                                    return k(c, {
                                        class: f.charClass + " " + f.splitClass,
                                        style: "display: inline-block;",
                                        textContent: t
                                    })
                                }), C.apply(w, e)), g || m ? (i = k(c, {
                                    class: f.wordClass + " " + f.splitClass,
                                    style: "display: inline-block; position:" + (g ? "relative" : "static;"),
                                    children: y ? e : null,
                                    textContent: y ? null : t
                                }), b.appendChild(i)) : S(e, function(t) {
                                    b.appendChild(t)
                                }), b.appendChild(M(" ")), i);
                                var e
                            }, this).filter(function(t) {
                                return t
                            }), t.innerHTML = "", t.appendChild(b), C.apply(this.words, T), C.apply(this.chars, w), (v || m) && (u = [], d = O(t).nodes = t.getElementsByTagName(c), x = t.parentElement, T = t.nextElementSibling, _ = P.getComputedStyle(t).textAlign, v && (o = {
                                left: b.offsetLeft,
                                top: b.offsetTop,
                                width: b.offsetWidth
                            }, h = t.offsetWidth, l = t.offsetHeight, O(t).cssWidth = t.style.width, O(t).cssHeight = t.style.height), S(d, function(t) {
                                var e, i;
                                t !== b && (i = t.parentElement === b, m && i && ((e = O(t).top = t.offsetTop) !== s && (s = e, u.push(n = [])), n.push(t)), v && (O(t).top = e || t.offsetTop, O(t).left = t.offsetLeft, O(t).width = t.offsetWidth, O(t).height = a = a || t.offsetHeight))
                            }), x.removeChild(t), m && (b = A(), r = u.map(function(t) {
                                return b.appendChild(e = k(c, {
                                    class: f.lineClass + " " + f.splitClass,
                                    style: "display: block; text-align:" + _ + "; width: 100%;"
                                })), v && (O(e).type = "line", O(e).top = O(t[0]).top, O(e).height = a), S(t, function(t) {
                                    g ? e.appendChild(t) : y ? R.call(t.children).forEach(function(t) {
                                        e.appendChild(t)
                                    }) : e.appendChild(M(t.textContent)), e.appendChild(M(" "))
                                }), e
                            }), t.replaceChild(b, t.firstChild), C.apply(this.lines, r)), v && (t.style.width = t.style.width || h + "px", t.style.height = l + "px", S(d, function(t) {
                                var e = "line" === O(t).type,
                                    i = !e && "line" === O(t.parentElement).type;
                                t.style.top = i ? 0 : O(t).top + "px", t.style.left = e ? o.left + "px" : (i ? O(t).left - o.left : O(t).left) + "px", t.style.height = O(t).height + "px", t.style.width = e ? o.width + "px" : O(t).width + "px", t.style.position = "absolute"
                            })), T ? x.insertBefore(t, T) : x.appendChild(t))
                        }).call(this, t), O(t).isSplit = !0
                    }, this), this.isSplit = !0, S(this.elements, function(t) {
                        for (var e, i, r = O(t).nodes || [], n = 0, s = r.length; n < s; n++) i = void 0, (i = (e = r[n]) && e[a]) && (delete e[i], delete _[i])
                    })
                }, r.prototype.revert = function() {
                    this.isSplit && (this.lines = this.words = this.chars = null), S(this.elements, function(t) {
                        O(t).isSplit && O(t).html && (t.innerHTML = O(t).html, t.style.height = O(t).cssHeight || "", t.style.width = O(t).cssWidth || "", this.isSplit = !1)
                    }, this)
                }, r
            }
        }(window, document)
    }), "object" == typeof LS_Meta && LS_Meta.fixGSAP && (window.GreenSockGlobals = null, window._gsQueue = null, window._gsDefine = null, delete window.GreenSockGlobals, delete window._gsQueue, delete window._gsDefine, window.GreenSockGlobals = LS_oldGS, window._gsQueue = LS_oldGSQueue, window._gsDefine = LS_oldGSDefine), window._layerSlider = {
        globals: {
            youTubeIsReady: !1,
            vimeoIsReady: !1
        },
        GSAP: void 0 !== LS_GSAP && LS_GSAP,
        pluginsLoaded: [],
        pluginsNotLoaded: [],
        pluginsBeingLoaded: [],
        plugins: {},
        slidersList: {},
        closePopupsOnEsc: {},
        currentScript: document.currentScript,
        lsScript: jQuery('script[src*="layerslider.kreaturamedia.jquery.js"]')[0],
        scriptPath: "",
        pluginsPath: !1,
        showNotice: function(t, e, i, r) {
            var n, s, a, t = jQuery(t),
                o = "ls-issue-" + e;
            switch (e) {
                case "jquery":
                    a = "Multiple jQuery issue", s = 'It looks like that another plugin or your theme loads an extra copy of the jQuery library causing problems for LayerSlider to show your sliders. Please navigate from your WordPress admin sidebar to LayerSlider -> Options -> Advanced and enable the "Include scripts in the footer" option.';
                    break;
                case "oldjquery":
                    a = "Old jQuery issue", s = "It looks like you are using an old version (" + i + ") of the jQuery library. LayerSlider requires at least version " + r + " or newer. Please update jQuery to 1.10.x or higher. Important: Please do not use the jQuery Updater plugin on WordPress as it can cause issues in certain cases."
            }
            t.each(function() {
                (n = jQuery(this)).hasClass(o) || (n.addClass(o), jQuery('<div class="ls-slider-notification"><i class="ls-slider-notification-logo">!</i><strong>LayerSlider: ' + a + "</strong><span>" + s + "</span></div>").insertBefore(n))
            })
        },
        removeSlider: function(t) {
            this.slidersList[t] = null, delete this.slidersList[t]
        },
        checkVersions: function(t, e) {
            for (var i = t.split("."), r = e.split("."), n = 0; n < i.length; ++n) {
                if (r.length == n) return !1;
                if (parseInt(i[n]) != parseInt(r[n])) return !(parseInt(i[n]) > parseInt(r[n]))
            }
            return i.length, r.length, !0
        }
    }, Number.prototype.indexOf = function(t) {
        return ("" + this).indexOf(t)
    };