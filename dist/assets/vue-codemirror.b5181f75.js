import { b as z } from './codemirror.95c0b331.js'
import {
  z as g,
  E as h,
  o as T,
  A as E,
  B as F,
  C as P,
  D as V,
  S as W
} from './@codemirror.e2809eba.js'
import {
  D as R,
  I as y,
  t as A,
  q as I,
  f as M,
  w as d,
  x as k,
  a8 as q,
  af as L
} from './@vue.459e27cf.js'
/*!
 * VueCodemirror v6.1.1
 * Copyright (c) Surmon. All rights reserved.
 * Released under the MIT License.
 * Surmon
 */ var N = Object.freeze({
    autofocus: !1,
    disabled: !1,
    indentWithTab: !0,
    tabSize: 2,
    placeholder: '',
    autoDestroy: !0,
    extensions: [z]
  }),
  $ = Symbol('vue-codemirror-global-config'),
  r,
  G = function (t) {
    var a = t.onUpdate,
      s = t.onChange,
      m = t.onFocus,
      f = t.onBlur,
      c = (function (n, l) {
        var o = {}
        for (var e in n)
          Object.prototype.hasOwnProperty.call(n, e) && l.indexOf(e) < 0 && (o[e] = n[e])
        if (n != null && typeof Object.getOwnPropertySymbols == 'function') {
          var i = 0
          for (e = Object.getOwnPropertySymbols(n); i < e.length; i++)
            l.indexOf(e[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(n, e[i]) &&
              (o[e[i]] = n[e[i]])
        }
        return o
      })(t, ['onUpdate', 'onChange', 'onFocus', 'onBlur'])
    return h.create({
      doc: c.doc,
      selection: c.selection,
      extensions: (Array.isArray(c.extensions) ? c.extensions : [c.extensions]).concat([
        g.updateListener.of(function (n) {
          a(n),
            n.docChanged && s(n.state.doc.toString(), n),
            n.focusChanged && (n.view.hasFocus ? m(n) : f(n))
        })
      ])
    })
  },
  b = function (t) {
    var a = new V()
    return {
      compartment: a,
      run: function (s) {
        a.get(t.state)
          ? t.dispatch({ effects: a.reconfigure(s) })
          : t.dispatch({ effects: W.appendConfig.of(a.of(s)) })
      }
    }
  },
  O = function (t, a) {
    var s = b(t),
      m = s.compartment,
      f = s.run
    return function (c) {
      var n = m.get(t.state)
      f((c != null ? c : n !== a) ? a : [])
    }
  },
  v = { type: Boolean, default: void 0 },
  H = {
    autofocus: v,
    disabled: v,
    indentWithTab: v,
    tabSize: Number,
    placeholder: String,
    style: Object,
    autoDestroy: v,
    phrases: Object,
    root: Object,
    extensions: Array,
    selection: Object
  },
  J = { modelValue: { type: String, default: '' } },
  K = Object.assign(Object.assign({}, H), J)
;(function (t) {
  ;(t.Change = 'change'),
    (t.Update = 'update'),
    (t.Focus = 'focus'),
    (t.Blur = 'blur'),
    (t.Ready = 'ready'),
    (t.ModelUpdate = 'update:modelValue')
})(r || (r = {}))
var p = {}
;(p[r.Change] = function (t, a) {
  return !0
}),
  (p[r.Update] = function (t) {
    return !0
  }),
  (p[r.Focus] = function (t) {
    return !0
  }),
  (p[r.Blur] = function (t) {
    return !0
  }),
  (p[r.Ready] = function (t) {
    return !0
  })
var j = {}
j[r.ModelUpdate] = p[r.Change]
var Q = Object.assign(Object.assign({}, p), j),
  X = R({
    name: 'VueCodemirror',
    props: Object.assign({}, K),
    emits: Object.assign({}, Q),
    setup: function (t, a) {
      var s = y(),
        m = y(),
        f = y(),
        c = Object.assign(Object.assign({}, N), A($, {})),
        n = I(function () {
          var l = {}
          return (
            Object.keys(L(t)).forEach(function (o) {
              var e
              o !== 'modelValue' && (l[o] = (e = t[o]) !== null && e !== void 0 ? e : c[o])
            }),
            l
          )
        })
      return (
        M(function () {
          var l
          ;(m.value = G({
            doc: t.modelValue,
            selection: n.value.selection,
            extensions: (l = c.extensions) !== null && l !== void 0 ? l : [],
            onFocus: function (e) {
              return a.emit(r.Focus, e)
            },
            onBlur: function (e) {
              return a.emit(r.Blur, e)
            },
            onUpdate: function (e) {
              return a.emit(r.Update, e)
            },
            onChange: function (e, i) {
              e !== t.modelValue && (a.emit(r.Change, e, i), a.emit(r.ModelUpdate, e, i))
            }
          })),
            (f.value = (function (e) {
              return new g(Object.assign({}, e))
            })({ state: m.value, parent: s.value, root: n.value.root }))
          var o = (function (e) {
            var i = function () {
                return e.state.doc.toString()
              },
              S = b(e).run,
              x = O(e, [g.editable.of(!1), h.readOnly.of(!0)]),
              C = O(e, T.of([E])),
              w = b(e).run,
              D = b(e).run,
              U = b(e).run,
              B = b(e).run
            return {
              focus: function () {
                return e.focus()
              },
              getDoc: i,
              setDoc: function (u) {
                u !== i() && e.dispatch({ changes: { from: 0, to: e.state.doc.length, insert: u } })
              },
              reExtensions: S,
              toggleDisabled: x,
              toggleIndentWithTab: C,
              setTabSize: function (u) {
                w([h.tabSize.of(u), F.of(' '.repeat(u))])
              },
              setPhrases: function (u) {
                D([h.phrases.of(u)])
              },
              setPlaceholder: function (u) {
                U(P(u))
              },
              setStyle: function (u) {
                u === void 0 && (u = {}), B(g.theme({ '&': Object.assign({}, u) }))
              }
            }
          })(f.value)
          d(
            function () {
              return t.modelValue
            },
            function (e) {
              e !== o.getDoc() && o.setDoc(e)
            }
          ),
            d(
              function () {
                return t.extensions
              },
              function (e) {
                return o.reExtensions(e || [])
              },
              { immediate: !0 }
            ),
            d(
              function () {
                return n.value.disabled
              },
              function (e) {
                return o.toggleDisabled(e)
              },
              { immediate: !0 }
            ),
            d(
              function () {
                return n.value.indentWithTab
              },
              function (e) {
                return o.toggleIndentWithTab(e)
              },
              { immediate: !0 }
            ),
            d(
              function () {
                return n.value.tabSize
              },
              function (e) {
                return o.setTabSize(e)
              },
              { immediate: !0 }
            ),
            d(
              function () {
                return n.value.phrases
              },
              function (e) {
                return o.setPhrases(e || {})
              },
              { immediate: !0 }
            ),
            d(
              function () {
                return n.value.placeholder
              },
              function (e) {
                return o.setPlaceholder(e)
              },
              { immediate: !0 }
            ),
            d(
              function () {
                return n.value.style
              },
              function (e) {
                return o.setStyle(e)
              },
              { immediate: !0 }
            ),
            n.value.autofocus && o.focus(),
            a.emit(r.Ready, { state: m.value, view: f.value, container: s.value })
        }),
        k(function () {
          n.value.autoDestroy &&
            f.value &&
            (function (l) {
              l.destroy()
            })(f.value)
        }),
        function () {
          return q('div', { class: 'v-codemirror', style: { display: 'contents' }, ref: s })
        }
      )
    }
  }),
  ee = X
export { ee as T }
