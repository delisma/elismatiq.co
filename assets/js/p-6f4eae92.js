const t = "ionicons";
let e,
	n,
	l = 0,
	s = !1;
const o = "undefined" != typeof window ? window : {},
	c = o.CSS,
	r = o.document || { head: {} },
	i = {
		t: 0,
		l: "",
		jmp: (t) => t(),
		raf: (t) => requestAnimationFrame(t),
		ael: (t, e, n, l) => t.addEventListener(e, n, l),
		rel: (t, e, n, l) => t.removeEventListener(e, n, l),
	},
	a = (() => (r.head.attachShadow + "").indexOf("[native") > -1)(),
	u = (t) => Promise.resolve(t),
	f = (() => {
		try {
			return new CSSStyleSheet(), !0;
		} catch (t) {}
		return !1;
	})(),
	d = new WeakMap(),
	$ = (t) => "sc-" + t.s,
	h = {},
	p = (t) => "object" == (t = typeof t) || "function" === t,
	y = (t, e, ...n) => {
		let l = null,
			s = !1,
			o = !1,
			c = [];
		const r = (e) => {
			for (let n = 0; n < e.length; n++)
				(l = e[n]),
					Array.isArray(l)
						? r(l)
						: null != l &&
						  "boolean" != typeof l &&
						  ((s = "function" != typeof t && !p(l)) && (l += ""),
						  s && o ? (c[c.length - 1].o += l) : c.push(s ? m(null, l) : l),
						  (o = s));
		};
		if ((r(n), e)) {
			const t = e.className || e.class;
			t &&
				(e.class =
					"object" != typeof t
						? t
						: Object.keys(t)
								.filter((e) => t[e])
								.join(" "));
		}
		const i = m(t, null);
		return (i.i = e), c.length > 0 && (i.u = c), i;
	},
	m = (t, e) => ({ t: 0, $: t, o: e, h: null, u: null, i: null }),
	w = {},
	b = (t, e, n, l, s, o) => {
		if (n !== l) {
			let r = I(t, e);
			if ((e.toLowerCase(), "class" === e)) {
				const e = t.classList,
					s = j(n),
					o = j(l);
				e.remove(...s.filter((t) => t && !o.includes(t))),
					e.add(...o.filter((t) => t && !s.includes(t)));
			} else {
				const i = p(l);
				if ((r || (i && null !== l)) && !s)
					try {
						if (t.tagName.includes("-")) t[e] = l;
						else {
							let s = null == l ? "" : l;
							"list" === e ? (r = !1) : (null != n && t[e] == s) || (t[e] = s);
						}
					} catch (c) {}
				null == l || !1 === l
					? (!1 === l && "" !== t.getAttribute(e)) || t.removeAttribute(e)
					: (!r || 4 & o || s) &&
					  !i &&
					  t.setAttribute(e, (l = !0 === l ? "" : l));
			}
		}
	},
	g = /\s/,
	j = (t) => (t ? t.split(g) : []),
	v = (t, e, n, l) => {
		const s = 11 === e.h.nodeType && e.h.host ? e.h.host : e.h,
			o = (t && t.i) || h,
			c = e.i || h;
		for (l in o) l in c || b(s, l, o[l], void 0, n, e.t);
		for (l in c) b(s, l, o[l], c[l], n, e.t);
	},
	M = (t, n, l) => {
		let s,
			o,
			c = n.u[l],
			i = 0;
		if (null !== c.o) s = c.h = r.createTextNode(c.o);
		else if (
			((s = c.h = r.createElement(c.$)),
			v(null, c, !1),
			null != e && s["s-si"] !== e && s.classList.add((s["s-si"] = e)),
			c.u)
		)
			for (i = 0; i < c.u.length; ++i) (o = M(t, c, i)), o && s.appendChild(o);
		return s;
	},
	S = (t, e, l, s, o, c) => {
		let r,
			i = t;
		for (i.shadowRoot && i.tagName === n && (i = i.shadowRoot); o <= c; ++o)
			s[o] && ((r = M(null, l, o)), r && ((s[o].h = r), i.insertBefore(r, e)));
	},
	_ = (t, e, n, l) => {
		for (; e <= n; ++e) (l = t[e]) && l.h.remove();
	},
	k = (t, e) => t.$ === e.$,
	C = (t, e) => {
		const n = (e.h = t.h),
			l = t.u,
			s = e.u,
			o = e.o;
		null === o
			? (v(t, e, !1),
			  null !== l && null !== s
					? ((t, e, n, l) => {
							let s,
								o = 0,
								c = 0,
								r = e.length - 1,
								i = e[0],
								a = e[r],
								u = l.length - 1,
								f = l[0],
								d = l[u];
							for (; o <= r && c <= u; )
								null == i
									? (i = e[++o])
									: null == a
									? (a = e[--r])
									: null == f
									? (f = l[++c])
									: null == d
									? (d = l[--u])
									: k(i, f)
									? (C(i, f), (i = e[++o]), (f = l[++c]))
									: k(a, d)
									? (C(a, d), (a = e[--r]), (d = l[--u]))
									: k(i, d)
									? (C(i, d),
									  t.insertBefore(i.h, a.h.nextSibling),
									  (i = e[++o]),
									  (d = l[--u]))
									: k(a, f)
									? (C(a, f),
									  t.insertBefore(a.h, i.h),
									  (a = e[--r]),
									  (f = l[++c]))
									: ((s = M(e && e[c], n, c)),
									  (f = l[++c]),
									  s && i.h.parentNode.insertBefore(s, i.h));
							o > r
								? S(t, null == l[u + 1] ? null : l[u + 1].h, n, l, c, u)
								: c > u && _(e, o, r);
					  })(n, l, e, s)
					: null !== s
					? (null !== t.o && (n.textContent = ""),
					  S(n, null, e, s, 0, s.length - 1))
					: null !== l && _(l, 0, l.length - 1))
			: t.o !== o && (n.data = o);
	},
	O = (t) => B(t).p,
	P = (t, e) => {
		e && !t.m && e["s-p"] && e["s-p"].push(new Promise((e) => (t.m = e)));
	},
	R = (t, e) => {
		if (((t.t |= 16), !(4 & t.t))) return P(t, t.g), ot(() => U(t, e));
		t.t |= 512;
	},
	U = (t, e) => {
		const n = t.j;
		return H(void 0, () => x(t, n, e));
	},
	x = (t, l, s) => {
		const o = t.p,
			c = o["s-rc"];
		s &&
			((t) => {
				const e = t.v,
					n = t.p,
					l = e.t,
					s = ((t, e) => {
						let n = $(e),
							l = X.get(n);
						if (((t = 11 === t.nodeType ? t : r), l))
							if ("string" == typeof l) {
								let e,
									s = d.get((t = t.head || t));
								s || d.set(t, (s = new Set())),
									s.has(n) ||
										((e = r.createElement("style")),
										(e.innerHTML = l),
										t.insertBefore(e, t.querySelector("link")),
										s && s.add(n));
							} else
								t.adoptedStyleSheets.includes(l) ||
									(t.adoptedStyleSheets = [...t.adoptedStyleSheets, l]);
						return n;
					})(a && n.shadowRoot ? n.shadowRoot : n.getRootNode(), e);
				10 & l && ((n["s-sc"] = s), n.classList.add(s + "-h"));
			})(t),
			((t, l) => {
				const s = t.p,
					o = t.v,
					c = t.M || m(null, null),
					r = ((t) => t && t.$ === w)(l) ? l : y(null, null, l);
				(n = s.tagName),
					o.S && ((r.i = r.i || {}), o.S.map(([t, e]) => (r.i[e] = s[t]))),
					(r.$ = null),
					(r.t |= 4),
					(t.M = r),
					(r.h = c.h = s.shadowRoot || s),
					(e = s["s-sc"]),
					C(c, r);
			})(t, E(t, l)),
			c && (c.map((t) => t()), (o["s-rc"] = void 0));
		{
			const e = o["s-p"],
				n = () => L(t);
			0 === e.length
				? n()
				: (Promise.all(e).then(n), (t.t |= 4), (e.length = 0));
		}
	},
	E = (t, e) => {
		try {
			(e = e.render()), (t.t &= -17), (t.t |= 2);
		} catch (n) {
			J(n);
		}
		return e;
	},
	L = (t) => {
		const e = t.p,
			n = t.g;
		64 & t.t || ((t.t |= 64), N(e), t._(e), n || T()),
			t.m && (t.m(), (t.m = void 0)),
			512 & t.t && st(() => R(t, !1)),
			(t.t &= -517);
	},
	T = () => {
		N(r.documentElement),
			(i.t |= 2),
			st(() =>
				((t) => {
					const e = new CustomEvent("appload", {
						detail: { namespace: "ionicons" },
					});
					return t.dispatchEvent(e), e;
				})(o)
			);
	},
	A = (t, e, n) => {
		if (t && t[e])
			try {
				return t[e](n);
			} catch (l) {
				J(l);
			}
	},
	H = (t, e) => (t && t.then ? t.then(e) : e()),
	N = (t) => t.classList.add("hydrated"),
	W = (t, e, n) => {
		if (e.k) {
			t.watchers && (e.C = t.watchers);
			const l = Object.entries(e.k),
				s = t.prototype;
			if (
				(l.map(([t, [l]]) => {
					(31 & l || (2 & n && 32 & l)) &&
						Object.defineProperty(s, t, {
							get() {
								return ((t, e) => B(this).O.get(e))(0, t);
							},
							set(n) {
								((t, e, n, l) => {
									const s = B(this),
										o = s.O.get(e),
										c = s.t,
										r = s.j;
									if (
										((n = ((t, e) =>
											null == t || p(t)
												? t
												: 4 & e
												? "false" !== t && ("" === t || !!t)
												: 1 & e
												? t + ""
												: t)(n, l.k[e][0])),
										!((8 & c && void 0 !== o) || n === o) && (s.O.set(e, n), r))
									) {
										if (l.C && 128 & c) {
											const t = l.C[e];
											t &&
												t.map((t) => {
													try {
														r[t](n, o, e);
													} catch (l) {
														J(l);
													}
												});
										}
										2 == (18 & c) && R(s, !1);
									}
								})(0, t, n, e);
							},
							configurable: !0,
							enumerable: !0,
						});
				}),
				1 & n)
			) {
				const n = new Map();
				(s.attributeChangedCallback = function (t, e, l) {
					i.jmp(() => {
						const e = n.get(t);
						this[e] = (null !== l || "boolean" != typeof this[e]) && l;
					});
				}),
					(t.observedAttributes = l
						.filter(([t, e]) => 15 & e[0])
						.map(([t, l]) => {
							const s = l[1] || t;
							return n.set(s, t), 512 & l[0] && e.S.push([t, s]), s;
						}));
			}
		}
		return t;
	},
	q = (t) => {
		A(t, "connectedCallback");
	},
	F = (t, e = {}) => {
		const n = [],
			l = e.exclude || [],
			s = o.customElements,
			c = r.head,
			u = c.querySelector("meta[charset]"),
			d = r.createElement("style"),
			h = [];
		let p,
			y = !0;
		Object.assign(i, e),
			(i.l = new URL(e.resourcesUrl || "./", r.baseURI).href),
			e.syncQueue && (i.t |= 4),
			t.map((t) =>
				t[1].map((e) => {
					const o = { t: e[0], s: e[1], k: e[2], P: e[3] };
					(o.k = e[2]), (o.S = []), (o.C = {}), !a && 1 & o.t && (o.t |= 8);
					const c = o.s,
						r = class extends HTMLElement {
							constructor(t) {
								super(t),
									G((t = this), o),
									1 & o.t &&
										(a
											? t.attachShadow({ mode: "open" })
											: "shadowRoot" in t || (t.shadowRoot = t));
							}
							connectedCallback() {
								p && (clearTimeout(p), (p = null)),
									y
										? h.push(this)
										: i.jmp(() =>
												((t) => {
													if (0 == (1 & i.t)) {
														const e = B(t),
															n = e.v,
															l = () => {};
														if (1 & e.t) q(e.j);
														else {
															e.t |= 1;
															{
																let n = t;
																for (; (n = n.parentNode || n.host); )
																	if (n["s-p"]) {
																		P(e, (e.g = n));
																		break;
																	}
															}
															n.k &&
																Object.entries(n.k).map(([e, [n]]) => {
																	if (31 & n && t.hasOwnProperty(e)) {
																		const n = t[e];
																		delete t[e], (t[e] = n);
																	}
																}),
																st(() =>
																	(async (t, e, n, l, s) => {
																		if (0 == (32 & e.t)) {
																			e.t |= 32;
																			{
																				if ((s = Q(n)).then) {
																					const t = () => {};
																					(s = await s), t();
																				}
																				s.isProxied ||
																					((n.C = s.watchers),
																					W(s, n, 2),
																					(s.isProxied = !0));
																				const t = () => {};
																				e.t |= 8;
																				try {
																					new s(e);
																				} catch (r) {
																					J(r);
																				}
																				(e.t &= -9), (e.t |= 128), t(), q(e.j);
																			}
																			if (s.style) {
																				let t = s.style;
																				const e = $(n);
																				if (!X.has(e)) {
																					const l = () => {};
																					8 & n.t &&
																						(t = await __sc_import_ionicons(
																							"./p-3833d40d.js"
																						).then((n) =>
																							n.scopeCss(t, e, !1)
																						)),
																						((t, e, n) => {
																							let l = X.get(t);
																							f && n
																								? ((l =
																										l || new CSSStyleSheet()),
																								  l.replace(e))
																								: (l = e),
																								X.set(t, l);
																						})(e, t, !!(1 & n.t)),
																						l();
																				}
																			}
																		}
																		const o = e.g,
																			c = () => R(e, !0);
																		o && o["s-rc"] ? o["s-rc"].push(c) : c();
																	})(0, e, n)
																);
														}
														l();
													}
												})(this)
										  );
							}
							disconnectedCallback() {
								i.jmp(() =>
									(() => {
										0 == (1 & i.t) && A(B(this).j, "disconnectedCallback");
									})()
								);
							}
							forceUpdate() {
								(() => {
									{
										const t = B(this);
										t.p.isConnected && 2 == (18 & t.t) && R(t, !1);
									}
								})();
							}
							componentOnReady() {
								return B(this).R;
							}
						};
					(o.U = t[0]),
						l.includes(c) || s.get(c) || (n.push(c), s.define(c, W(r, o, 1)));
				})
			),
			(d.innerHTML = n + "{visibility:hidden}.hydrated{visibility:inherit}"),
			d.setAttribute("data-styles", ""),
			c.insertBefore(d, u ? u.nextSibling : c.firstChild),
			(y = !1),
			h.length
				? h.map((t) => t.connectedCallback())
				: i.jmp(() => (p = setTimeout(T, 30)));
	},
	V = (t) => {
		const e = new URL(t, i.l);
		return e.origin !== o.location.origin ? e.href : e.pathname;
	},
	z = new WeakMap(),
	B = (t) => z.get(t),
	D = (t, e) => z.set((e.j = t), e),
	G = (t, e) => {
		const n = { t: 0, p: t, v: e, O: new Map() };
		return (
			(n.R = new Promise((t) => (n._ = t))),
			(t["s-p"] = []),
			(t["s-rc"] = []),
			z.set(t, n)
		);
	},
	I = (t, e) => e in t,
	J = (t) => console.error(t),
	K = new Map(),
	Q = (t) => {
		const e = t.s.replace(/-/g, "_"),
			n = t.U,
			l = K.get(n);
		return l
			? l[e]
			: __sc_import_ionicons(`./${n}.entry.js`).then(
					(t) => (K.set(n, t), t[e]),
					J
			  );
	},
	X = new Map(),
	Y = [],
	Z = [],
	tt = [],
	et = (t, e) => (n) => {
		t.push(n), s || ((s = !0), e && 4 & i.t ? st(lt) : i.raf(lt));
	},
	nt = (t, e) => {
		let n = 0,
			l = 0;
		for (; n < t.length && (l = performance.now()) < e; )
			try {
				t[n++](l);
			} catch (s) {
				J(s);
			}
		n === t.length ? (t.length = 0) : 0 !== n && t.splice(0, n);
	},
	lt = () => {
		l++,
			((t) => {
				for (let n = 0; n < t.length; n++)
					try {
						t[n](performance.now());
					} catch (e) {
						J(e);
					}
				t.length = 0;
			})(Y);
		{
			const t =
				2 == (6 & i.t) ? performance.now() + 14 * Math.ceil(0.1 * l) : 1 / 0;
			nt(Z, t),
				nt(tt, t),
				Z.length > 0 && (tt.push(...Z), (Z.length = 0)),
				(s = Y.length + Z.length + tt.length > 0) ? i.raf(lt) : (l = 0);
		}
	},
	st = (t) => u().then(t),
	ot = et(Z, !0);
export {
	c as C,
	w as H,
	t as N,
	u as a,
	F as b,
	O as c,
	r as d,
	V as g,
	y as h,
	i as p,
	D as r,
	o as w,
};
