import {
  i as Je,
  h as zt,
  j as xe,
  k as Er,
  l as Co,
  m as $r,
  N as ln,
  p as lt,
  q as S,
  e as at,
  r as N,
  s as Fe,
  u as o,
  t as Ce,
  w as ce,
  f as De,
  v as fl,
  x as It,
  y as Qe,
  z as Tr,
  A as to,
  B as Ir,
  b as Pr,
  C as Or,
  D as Q,
  o as C,
  c as A,
  E as fe,
  F as bt,
  G as Oo,
  H as Ln,
  I as Ft,
  n as we,
  J as Ve,
  K as ot,
  L as G,
  M as Pe,
  O as w,
  a as F,
  P as oe,
  Q as W,
  R as je,
  S as H,
  T as Le,
  U as he,
  V as $e,
  W as Pt,
  X as yt,
  Y as pl,
  Z as Mr,
  _ as Ka,
  $ as _r,
  a0 as Mo,
  d as Ha,
  a1 as Nr,
  a2 as Kl,
  a3 as qe,
  a4 as dt,
  a5 as Wa,
  a6 as Ut,
  a7 as We,
  a8 as ct,
  a9 as vl,
  aa as Ke,
  ab as Vr,
  ac as Br,
  ad as Hl,
  ae as Ar,
  af as So,
  ag as Hn,
  ah as zo,
  ai as Lr,
  aj as Dr,
  ak as Wl,
  al as Rr,
  am as Fr,
  an as zr,
  ao as Ya,
  ap as Yl
} from './@vue.459e27cf.js'
import {
  s as ja,
  w as xa,
  c as Ua,
  i as qa,
  l as ml,
  a as Kr,
  b as _o,
  d as mn,
  v as Hr,
  h as Wr,
  e as Yr,
  f as jr,
  g as xr,
  j as Ga,
  k as no,
  m as Tn,
  n as Gn,
  o as En,
  p as In,
  q as Ur,
  r as qr,
  z as Gr,
  t as Xr,
  u as Jr,
  x as Zr,
  y as Qr,
  A as ei,
  B as jl
} from './@element-plus.52ff3d2f.js'
import {
  i as Re,
  a as Be,
  b as Mt,
  t as ti,
  u as Dn,
  c as Tt,
  d as Xa,
  o as Ja,
  e as Za,
  f as Jo,
  r as ni
} from './@vueuse.b3f314cf.js'
import {
  d as Se,
  l as oi,
  a as li,
  c as ai,
  w as si,
  b as ri,
  e as ii,
  i as ui,
  f as ci
} from './dayjs.6d6bf3b5.js'
import {
  g as $t,
  s as di,
  f as Qa,
  i as _t,
  a as Eo,
  d as Pn,
  b as fi,
  c as Zo,
  e as xl,
  t as jn
} from './lodash-es.2fa8789e.js'
import { T as pi } from './@ctrl.82a509e0.js'
import { S as vi } from './async-validator.fb49d0f5.js'
const Ze =
    (e, t, { checkForDefaultPrevented: n = !0 } = {}) =>
    a => {
      const s = e == null ? void 0 : e(a)
      if (n === !1 || !s) return t == null ? void 0 : t(a)
    },
  Ul = e => t => t.pointerType === 'mouse' ? e(t) : void 0,
  mi = (e, t) => {
    if (!Re || !e || !t) return !1
    const n = e.getBoundingClientRect()
    let l
    return (
      t instanceof Element
        ? (l = t.getBoundingClientRect())
        : (l = { top: 0, right: window.innerWidth, bottom: window.innerHeight, left: 0 }),
      n.top < l.bottom && n.bottom > l.top && n.right > l.left && n.left < l.right
    )
  },
  ql = e => {
    let t = 0,
      n = e
    for (; n; ) (t += n.offsetTop), (n = n.offsetParent)
    return t
  },
  gi = (e, t) => Math.abs(ql(e) - ql(t)),
  gl = e => {
    let t, n
    return (
      e.type === 'touchend'
        ? ((n = e.changedTouches[0].clientY), (t = e.changedTouches[0].clientX))
        : e.type.startsWith('touch')
        ? ((n = e.touches[0].clientY), (t = e.touches[0].clientX))
        : ((n = e.clientY), (t = e.clientX)),
      { clientX: t, clientY: n }
    )
  },
  on = e => e === void 0,
  es = e => (!e && e !== 0) || (Je(e) && e.length === 0) || (zt(e) && !Object.keys(e).length),
  gn = e => (typeof Element > 'u' ? !1 : e instanceof Element),
  hi = (e = '') => e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d'),
  Qo = e => Object.keys(e),
  Ko = (e, t, n) => ({
    get value() {
      return $t(e, t, n)
    },
    set value(l) {
      di(e, t, l)
    }
  })
class bi extends Error {
  constructor(t) {
    super(t), (this.name = 'ElementPlusError')
  }
}
function bn(e, t) {
  throw new bi(`[${e}] ${t}`)
}
const ts = (e = '') => e.split(' ').filter(t => !!t.trim()),
  $o = (e, t) => {
    if (!e || !t) return !1
    if (t.includes(' ')) throw new Error('className should not contain space.')
    return e.classList.contains(t)
  },
  el = (e, t) => {
    !e || !t.trim() || e.classList.add(...ts(t))
  },
  Xn = (e, t) => {
    !e || !t.trim() || e.classList.remove(...ts(t))
  },
  fn = (e, t) => {
    var n
    if (!Re || !e || !t) return ''
    let l = Er(t)
    l === 'float' && (l = 'cssFloat')
    try {
      const a = e.style[l]
      if (a) return a
      const s = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, '')
      return s ? s[l] : ''
    } catch {
      return e.style[l]
    }
  }
function Kt(e, t = 'px') {
  if (!e) return ''
  if (xe(e)) return e
  if (Be(e)) return `${e}${t}`
}
const yi = (e, t) => {
    if (!Re) return !1
    const n = { undefined: 'overflow', true: 'overflow-y', false: 'overflow-x' }[String(t)],
      l = fn(e, n)
    return ['scroll', 'auto', 'overlay'].some(a => l.includes(a))
  },
  ns = (e, t) => {
    if (!Re) return
    let n = e
    for (; n; ) {
      if ([window, document, document.documentElement].includes(n)) return window
      if (yi(n, t)) return n
      n = n.parentNode
    }
    return n
  }
let io
const wi = e => {
  var t
  if (!Re) return 0
  if (io !== void 0) return io
  const n = document.createElement('div')
  ;(n.className = `${e}-scrollbar__wrap`),
    (n.style.visibility = 'hidden'),
    (n.style.width = '100px'),
    (n.style.position = 'absolute'),
    (n.style.top = '-9999px'),
    document.body.appendChild(n)
  const l = n.offsetWidth
  n.style.overflow = 'scroll'
  const a = document.createElement('div')
  ;(a.style.width = '100%'), n.appendChild(a)
  const s = a.offsetWidth
  return (t = n.parentNode) == null || t.removeChild(n), (io = l - s), io
}
function ki(e, t) {
  if (!Re) return
  if (!t) {
    e.scrollTop = 0
    return
  }
  const n = []
  let l = t.offsetParent
  for (; l !== null && e !== l && e.contains(l); ) n.push(l), (l = l.offsetParent)
  const a = t.offsetTop + n.reduce((u, f) => u + f.offsetTop, 0),
    s = a + t.offsetHeight,
    r = e.scrollTop,
    i = r + e.clientHeight
  a < r ? (e.scrollTop = a) : s > i && (e.scrollTop = s - e.clientHeight)
}
const os = '__epPropKey',
  re = e => e,
  Ci = e => zt(e) && !!e[os],
  No = (e, t) => {
    if (!zt(e) || Ci(e)) return e
    const { values: n, required: l, default: a, type: s, validator: r } = e,
      u = {
        type: s,
        required: !!l,
        validator:
          n || r
            ? f => {
                let m = !1,
                  p = []
                if (
                  (n &&
                    ((p = Array.from(n)), Co(e, 'default') && p.push(a), m || (m = p.includes(f))),
                  r && (m || (m = r(f))),
                  !m && p.length > 0)
                ) {
                  const h = [...new Set(p)].map(c => JSON.stringify(c)).join(', ')
                  $r(
                    `Invalid prop: validation failed${
                      t ? ` for prop "${t}"` : ''
                    }. Expected one of [${h}], got value ${JSON.stringify(f)}.`
                  )
                }
                return m
              }
            : void 0,
        [os]: !0
      }
    return Co(e, 'default') && (u.default = a), u
  },
  ge = e => Qa(Object.entries(e).map(([t, n]) => [t, No(n, t)])),
  ft = re([String, Object, Function]),
  Si = { Close: mn },
  Ei = { Close: mn, SuccessFilled: ja, InfoFilled: qa, WarningFilled: xa, CircleCloseFilled: Ua },
  Gl = { success: ja, warning: xa, error: Ua, info: qa },
  $i = { validating: ml, success: Kr, error: _o },
  Ue = (e, t) => {
    if (
      ((e.install = n => {
        for (const l of [e, ...Object.values(t != null ? t : {})]) n.component(l.name, l)
      }),
      t)
    )
      for (const [n, l] of Object.entries(t)) e[n] = l
    return e
  },
  Ti = (e, t) => (
    (e.install = n => {
      ;(e._context = n._context), (n.config.globalProperties[t] = e)
    }),
    e
  ),
  Jt = e => ((e.install = ln), e),
  hl =
    (...e) =>
    t => {
      e.forEach(n => {
        lt(n) ? n(t) : (n.value = t)
      })
    },
  ke = {
    tab: 'Tab',
    enter: 'Enter',
    space: 'Space',
    left: 'ArrowLeft',
    up: 'ArrowUp',
    right: 'ArrowRight',
    down: 'ArrowDown',
    esc: 'Escape',
    delete: 'Delete',
    backspace: 'Backspace',
    numpadEnter: 'NumpadEnter',
    pageUp: 'PageUp',
    pageDown: 'PageDown',
    home: 'Home',
    end: 'End'
  },
  Ii = [
    'year',
    'month',
    'date',
    'dates',
    'week',
    'datetime',
    'datetimerange',
    'daterange',
    'monthrange'
  ],
  Ae = 'update:modelValue',
  Ht = 'change',
  jt = 'input',
  Rn = ['', 'default', 'small', 'large'],
  Pi = { large: 40, default: 32, small: 24 },
  Oi = e => Pi[e || 'default'],
  ls = e => ['', ...Rn].includes(e)
var bo = (e => (
  (e[(e.TEXT = 1)] = 'TEXT'),
  (e[(e.CLASS = 2)] = 'CLASS'),
  (e[(e.STYLE = 4)] = 'STYLE'),
  (e[(e.PROPS = 8)] = 'PROPS'),
  (e[(e.FULL_PROPS = 16)] = 'FULL_PROPS'),
  (e[(e.HYDRATE_EVENTS = 32)] = 'HYDRATE_EVENTS'),
  (e[(e.STABLE_FRAGMENT = 64)] = 'STABLE_FRAGMENT'),
  (e[(e.KEYED_FRAGMENT = 128)] = 'KEYED_FRAGMENT'),
  (e[(e.UNKEYED_FRAGMENT = 256)] = 'UNKEYED_FRAGMENT'),
  (e[(e.NEED_PATCH = 512)] = 'NEED_PATCH'),
  (e[(e.DYNAMIC_SLOTS = 1024)] = 'DYNAMIC_SLOTS'),
  (e[(e.HOISTED = -1)] = 'HOISTED'),
  (e[(e.BAIL = -2)] = 'BAIL'),
  e
))(bo || {})
const Xl = e => e ** 3,
  Mi = e => (e < 0.5 ? Xl(e * 2) / 2 : 1 - Xl((1 - e) * 2) / 2),
  pn = e => (!e && e !== 0 ? [] : Array.isArray(e) ? e : [e]),
  _i = () => Re && /firefox/i.test(window.navigator.userAgent),
  as = e => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e),
  Ni = () => Math.floor(Math.random() * 1e4),
  Fn = e => e,
  Vi = ['class', 'style'],
  Bi = /^on[A-Z]/,
  ss = (e = {}) => {
    const { excludeListeners: t = !1, excludeKeys: n } = e,
      l = S(() => ((n == null ? void 0 : n.value) || []).concat(Vi)),
      a = at()
    return a
      ? S(() => {
          var s
          return Qa(
            Object.entries((s = a.proxy) == null ? void 0 : s.$attrs).filter(
              ([r]) => !l.value.includes(r) && !(t && Bi.test(r))
            )
          )
        })
      : S(() => ({}))
  },
  rs = Symbol('buttonGroupContextKey'),
  is = Symbol(),
  us = Symbol('dialogInjectionKey'),
  zn = Symbol('formContextKey'),
  hn = Symbol('formItemContextKey'),
  cs = Symbol('elPaginationKey'),
  ds = Symbol('radioGroupKey'),
  fs = Symbol('scrollbarContextKey'),
  ps = Symbol('sliderContextKey'),
  bl = Symbol('popper'),
  vs = Symbol('popperContent'),
  Vo = Symbol('elTooltip'),
  yl = Symbol(),
  ms = e => {
    const t = at()
    return S(() => {
      var n, l
      return (l = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? l : void 0
    })
  },
  To = N()
function Zt(e, t = void 0) {
  const n = at() ? Ce(is, To) : To
  return e
    ? S(() => {
        var l, a
        return (a = (l = n.value) == null ? void 0 : l[e]) != null ? a : t
      })
    : n
}
const Ai = (e, t, n = !1) => {
    var l
    const a = !!at(),
      s = a ? Zt() : void 0,
      r = (l = t == null ? void 0 : t.provide) != null ? l : a ? Fe : void 0
    if (!r) return
    const i = S(() => {
      const u = o(e)
      return s != null && s.value ? Li(s.value, u) : u
    })
    return r(is, i), (n || !To.value) && (To.value = i.value), i
  },
  Li = (e, t) => {
    var n
    const l = [...new Set([...Qo(e), ...Qo(t)])],
      a = {}
    for (const s of l) a[s] = (n = t[s]) != null ? n : e[s]
    return a
  },
  qt = No({ type: String, values: Rn, required: !1 }),
  Ot = (e, t = {}) => {
    const n = N(void 0),
      l = t.prop ? n : ms('size'),
      a = t.global ? n : Zt('size'),
      s = t.form ? { size: void 0 } : Ce(zn, void 0),
      r = t.formItem ? { size: void 0 } : Ce(hn, void 0)
    return S(
      () =>
        l.value ||
        o(e) ||
        (r == null ? void 0 : r.size) ||
        (s == null ? void 0 : s.size) ||
        a.value ||
        ''
    )
  },
  yn = e => {
    const t = ms('disabled'),
      n = Ce(zn, void 0)
    return S(() => t.value || o(e) || (n == null ? void 0 : n.disabled) || !1)
  },
  On = ({ from: e, replacement: t, scope: n, version: l, ref: a, type: s = 'API' }, r) => {
    ce(
      () => o(r),
      i => {},
      { immediate: !0 }
    )
  },
  Di = (e, t, n) => {
    let l = { offsetX: 0, offsetY: 0 }
    const a = i => {
        const u = i.clientX,
          f = i.clientY,
          { offsetX: m, offsetY: p } = l,
          h = e.value.getBoundingClientRect(),
          c = h.left,
          d = h.top,
          v = h.width,
          y = h.height,
          T = document.documentElement.clientWidth,
          E = document.documentElement.clientHeight,
          g = -c + m,
          $ = -d + p,
          k = T - c - v + m,
          P = E - d - y + p,
          L = x => {
            const Y = Math.min(Math.max(m + x.clientX - u, g), k),
              X = Math.min(Math.max(p + x.clientY - f, $), P)
            ;(l = { offsetX: Y, offsetY: X }),
              (e.value.style.transform = `translate(${Kt(Y)}, ${Kt(X)})`)
          },
          V = () => {
            document.removeEventListener('mousemove', L), document.removeEventListener('mouseup', V)
          }
        document.addEventListener('mousemove', L), document.addEventListener('mouseup', V)
      },
      s = () => {
        t.value && e.value && t.value.addEventListener('mousedown', a)
      },
      r = () => {
        t.value && e.value && t.value.removeEventListener('mousedown', a)
      }
    De(() => {
      fl(() => {
        n.value ? s() : r()
      })
    }),
      It(() => {
        r()
      })
  },
  Ri = e => ({
    focus: () => {
      var t, n
      ;(n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t)
    }
  }),
  Bo = 'el',
  Fi = 'is-',
  cn = (e, t, n, l, a) => {
    let s = `${e}-${t}`
    return n && (s += `-${n}`), l && (s += `__${l}`), a && (s += `--${a}`), s
  },
  ve = e => {
    const t = Zt('namespace', Bo)
    return {
      namespace: t,
      b: (d = '') => cn(t.value, e, d, '', ''),
      e: d => (d ? cn(t.value, e, '', d, '') : ''),
      m: d => (d ? cn(t.value, e, '', '', d) : ''),
      be: (d, v) => (d && v ? cn(t.value, e, d, v, '') : ''),
      em: (d, v) => (d && v ? cn(t.value, e, '', d, v) : ''),
      bm: (d, v) => (d && v ? cn(t.value, e, d, '', v) : ''),
      bem: (d, v, y) => (d && v && y ? cn(t.value, e, d, v, y) : ''),
      is: (d, ...v) => {
        const y = v.length >= 1 ? v[0] : !0
        return d && y ? `${Fi}${d}` : ''
      },
      cssVar: d => {
        const v = {}
        for (const y in d) d[y] && (v[`--${t.value}-${y}`] = d[y])
        return v
      },
      cssVarName: d => `--${t.value}-${d}`,
      cssVarBlock: d => {
        const v = {}
        for (const y in d) d[y] && (v[`--${t.value}-${e}-${y}`] = d[y])
        return v
      },
      cssVarBlockName: d => `--${t.value}-${e}-${d}`
    }
  },
  zi = { prefix: Math.floor(Math.random() * 1e4), current: 0 },
  Ki = Symbol('elIdInjection'),
  an = e => {
    const t = Ce(Ki, zi),
      n = Zt('namespace', Bo)
    return S(() => o(e) || `${n.value}-id-${t.prefix}-${t.current++}`)
  },
  Qt = () => {
    const e = Ce(zn, void 0),
      t = Ce(hn, void 0)
    return { form: e, formItem: t }
  },
  oo = (e, { formItemContext: t, disableIdGeneration: n, disableIdManagement: l }) => {
    n || (n = N(!1)), l || (l = N(!1))
    const a = N()
    let s
    const r = S(() => {
      var i
      return !!(!e.label && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1)
    })
    return (
      De(() => {
        s = ce(
          [Qe(e, 'id'), n],
          ([i, u]) => {
            const f = i != null ? i : u ? void 0 : an().value
            f !== a.value &&
              (t != null &&
                t.removeInputId &&
                (a.value && t.removeInputId(a.value),
                !(l != null && l.value) && !u && f && t.addInputId(f)),
              (a.value = f))
          },
          { immediate: !0 }
        )
      }),
      Tr(() => {
        s && s(), t != null && t.removeInputId && a.value && t.removeInputId(a.value)
      }),
      { isLabeledByFormItem: r, inputId: a }
    )
  }
var Hi = {
  name: 'en',
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Clear',
      defaultLabel: 'color picker',
      description: 'current color is {color}. press enter to select a new color.'
    },
    datepicker: {
      now: 'Now',
      today: 'Today',
      cancel: 'Cancel',
      clear: 'Clear',
      confirm: 'OK',
      dateTablePrompt: 'Use the arrow keys and enter to select the day of the month',
      monthTablePrompt: 'Use the arrow keys and enter to select the month',
      yearTablePrompt: 'Use the arrow keys and enter to select the year',
      selectedDate: 'Selected date',
      selectDate: 'Select date',
      selectTime: 'Select time',
      startDate: 'Start Date',
      startTime: 'Start Time',
      endDate: 'End Date',
      endTime: 'End Time',
      prevYear: 'Previous Year',
      nextYear: 'Next Year',
      prevMonth: 'Previous Month',
      nextMonth: 'Next Month',
      year: '',
      month1: 'January',
      month2: 'February',
      month3: 'March',
      month4: 'April',
      month5: 'May',
      month6: 'June',
      month7: 'July',
      month8: 'August',
      month9: 'September',
      month10: 'October',
      month11: 'November',
      month12: 'December',
      week: 'week',
      weeks: { sun: 'Sun', mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat' },
      weeksFull: {
        sun: 'Sunday',
        mon: 'Monday',
        tue: 'Tuesday',
        wed: 'Wednesday',
        thu: 'Thursday',
        fri: 'Friday',
        sat: 'Saturday'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'May',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Oct',
        nov: 'Nov',
        dec: 'Dec'
      }
    },
    inputNumber: { decrease: 'decrease number', increase: 'increase number' },
    select: {
      loading: 'Loading',
      noMatch: 'No matching data',
      noData: 'No data',
      placeholder: 'Select'
    },
    dropdown: { toggleDropdown: 'Toggle Dropdown' },
    cascader: {
      noMatch: 'No matching data',
      loading: 'Loading',
      placeholder: 'Select',
      noData: 'No data'
    },
    pagination: {
      goto: 'Go to',
      pagesize: '/page',
      total: 'Total {total}',
      pageClassifier: '',
      deprecationWarning:
        'Deprecated usages detected, please refer to the el-pagination documentation for more details'
    },
    dialog: { close: 'Close this dialog' },
    drawer: { close: 'Close this dialog' },
    messagebox: {
      title: 'Message',
      confirm: 'OK',
      cancel: 'Cancel',
      error: 'Illegal input',
      close: 'Close this dialog'
    },
    upload: {
      deleteTip: 'press delete to remove',
      delete: 'Delete',
      preview: 'Preview',
      continue: 'Continue'
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}',
      defaultRangeStartLabel: 'pick start value',
      defaultRangeEndLabel: 'pick end value'
    },
    table: {
      emptyText: 'No Data',
      confirmFilter: 'Confirm',
      resetFilter: 'Reset',
      clearFilter: 'All',
      sumText: 'Sum'
    },
    tree: { emptyText: 'No Data' },
    transfer: {
      noMatch: 'No matching data',
      noData: 'No data',
      titles: ['List 1', 'List 2'],
      filterPlaceholder: 'Enter keyword',
      noCheckedFormat: '{total} items',
      hasCheckedFormat: '{checked}/{total} checked'
    },
    image: { error: 'FAILED' },
    pageHeader: { title: 'Back' },
    popconfirm: { confirmButtonText: 'Yes', cancelButtonText: 'No' }
  }
}
const Wi = e => (t, n) => Yi(t, n, o(e)),
  Yi = (e, t, n) =>
    $t(n, e, e).replace(/\{(\w+)\}/g, (l, a) => {
      var s
      return `${(s = t == null ? void 0 : t[a]) != null ? s : `{${a}}`}`
    }),
  ji = e => {
    const t = S(() => o(e).name),
      n = to(e) ? e : N(e)
    return { lang: t, locale: n, t: Wi(e) }
  },
  Ye = () => {
    const e = Zt('locale')
    return ji(S(() => e.value || Hi))
  },
  xi = e => {
    to(e) || bn('[useLockscreen]', 'You need to pass a ref param to this function')
    const t = ve('popup'),
      n = Ir(() => t.bm('parent', 'hidden'))
    if (!Re || $o(document.body, n.value)) return
    let l = 0,
      a = !1,
      s = '0'
    const r = () => {
      setTimeout(() => {
        Xn(document.body, n.value), a && (document.body.style.width = s)
      }, 200)
    }
    ce(e, i => {
      if (!i) {
        r()
        return
      }
      ;(a = !$o(document.body, n.value)),
        a && (s = document.body.style.width),
        (l = wi(t.namespace.value))
      const u = document.documentElement.clientHeight < document.body.scrollHeight,
        f = fn(document.body, 'overflowY')
      l > 0 && (u || f === 'scroll') && a && (document.body.style.width = `calc(100% - ${l}px)`),
        el(document.body, n.value)
    }),
      Pr(() => r())
  },
  Ui = No({ type: re(Boolean), default: null }),
  qi = No({ type: re(Function) }),
  Gi = e => {
    const t = `update:${e}`,
      n = `onUpdate:${e}`,
      l = [t],
      a = { [e]: Ui, [n]: qi }
    return {
      useModelToggle: ({
        indicator: r,
        toggleReason: i,
        shouldHideWhenRouteChanges: u,
        shouldProceed: f,
        onShow: m,
        onHide: p
      }) => {
        const h = at(),
          { emit: c } = h,
          d = h.props,
          v = S(() => lt(d[n])),
          y = S(() => d[e] === null),
          T = L => {
            r.value !== !0 && ((r.value = !0), i && (i.value = L), lt(m) && m(L))
          },
          E = L => {
            r.value !== !1 && ((r.value = !1), i && (i.value = L), lt(p) && p(L))
          },
          g = L => {
            if (d.disabled === !0 || (lt(f) && !f())) return
            const V = v.value && Re
            V && c(t, !0), (y.value || !V) && T(L)
          },
          $ = L => {
            if (d.disabled === !0 || !Re) return
            const V = v.value && Re
            V && c(t, !1), (y.value || !V) && E(L)
          },
          k = L => {
            !Mt(L) || (d.disabled && L ? v.value && c(t, !1) : r.value !== L && (L ? T() : E()))
          },
          P = () => {
            r.value ? $() : g()
          }
        return (
          ce(() => d[e], k),
          u &&
            h.appContext.config.globalProperties.$route !== void 0 &&
            ce(
              () => ({ ...h.proxy.$route }),
              () => {
                u.value && r.value && $()
              }
            ),
          De(() => {
            k(d[e])
          }),
          { hide: $, show: g, toggle: P, hasUpdateHandler: v }
        )
      },
      useModelToggleProps: a,
      useModelToggleEmits: l
    }
  },
  gs = e => {
    if (!e) return { onClick: ln, onMousedown: ln, onMouseup: ln }
    let t = !1,
      n = !1
    return {
      onClick: r => {
        t && n && e(r), (t = n = !1)
      },
      onMousedown: r => {
        t = r.target === r.currentTarget
      },
      onMouseup: r => {
        n = r.target === r.currentTarget
      }
    }
  }
function Xi() {
  let e
  const t = (l, a) => {
      n(), (e = window.setTimeout(l, a))
    },
    n = () => window.clearTimeout(e)
  return ti(() => n()), { registerTimeout: t, cancelTimeout: n }
}
let kn = []
const Jl = e => {
    const t = e
    t.key === ke.esc && kn.forEach(n => n(t))
  },
  Ji = e => {
    De(() => {
      kn.length === 0 && document.addEventListener('keydown', Jl), Re && kn.push(e)
    }),
      It(() => {
        ;(kn = kn.filter(t => t !== e)),
          kn.length === 0 && Re && document.removeEventListener('keydown', Jl)
      })
  }
let Zl
const Zi = Zt('namespace', Bo),
  hs = `${Zi.value}-popper-container-${Ni()}`,
  bs = `#${hs}`,
  Qi = () => {
    const e = document.createElement('div')
    return (e.id = hs), document.body.appendChild(e), e
  },
  eu = () => {
    Or(() => {
      !Re || ((!Zl || !document.body.querySelector(bs)) && (Zl = Qi()))
    })
  },
  tu = ge({ showAfter: { type: Number, default: 0 }, hideAfter: { type: Number, default: 200 } }),
  nu = ({ showAfter: e, hideAfter: t, open: n, close: l }) => {
    const { registerTimeout: a } = Xi()
    return {
      onOpen: i => {
        a(() => {
          n(i)
        }, o(e))
      },
      onClose: i => {
        a(() => {
          l(i)
        }, o(t))
      }
    }
  },
  ys = Symbol('elForwardRef'),
  ou = e => {
    Fe(ys, {
      setForwardRef: n => {
        e.value = n
      }
    })
  },
  lu = e => ({
    mounted(t) {
      e(t)
    },
    updated(t) {
      e(t)
    },
    unmounted() {
      e(null)
    }
  }),
  Ql = N(0),
  lo = () => {
    const e = Zt('zIndex', 2e3),
      t = S(() => e.value + Ql.value)
    return { initialZIndex: e, currentZIndex: t, nextZIndex: () => (Ql.value++, t.value) }
  }
function au(e) {
  const t = N()
  function n() {
    if (e.value == null) return
    const { selectionStart: a, selectionEnd: s, value: r } = e.value
    if (a == null || s == null) return
    const i = r.slice(0, Math.max(0, a)),
      u = r.slice(Math.max(0, s))
    t.value = { selectionStart: a, selectionEnd: s, value: r, beforeTxt: i, afterTxt: u }
  }
  function l() {
    if (e.value == null || t.value == null) return
    const { value: a } = e.value,
      { beforeTxt: s, afterTxt: r, selectionStart: i } = t.value
    if (s == null || r == null || i == null) return
    let u = a.length
    if (a.endsWith(r)) u = a.length - r.length
    else if (a.startsWith(s)) u = s.length
    else {
      const f = s[i - 1],
        m = a.indexOf(f, i - 1)
      m !== -1 && (u = m + 1)
    }
    e.value.setSelectionRange(u, u)
  }
  return [n, l]
}
var me = (e, t) => {
  const n = e.__vccOpts || e
  for (const [l, a] of t) n[l] = a
  return n
}
const su = ge({ size: { type: re([Number, String]) }, color: { type: String } }),
  ru = Q({ name: 'ElIcon', inheritAttrs: !1 }),
  iu = Q({
    ...ru,
    props: su,
    setup(e) {
      const t = e,
        n = ve('icon'),
        l = S(() => {
          const { size: a, color: s } = t
          return !a && !s ? {} : { fontSize: on(a) ? void 0 : Kt(a), '--color': s }
        })
      return (a, s) => (
        C(), A('i', bt({ class: o(n).b(), style: o(l) }, a.$attrs), [fe(a.$slots, 'default')], 16)
      )
    }
  })
var uu = me(iu, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue']
])
const be = Ue(uu)
let Lt
const cu = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,
  du = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing'
  ]
function fu(e) {
  const t = window.getComputedStyle(e),
    n = t.getPropertyValue('box-sizing'),
    l =
      Number.parseFloat(t.getPropertyValue('padding-bottom')) +
      Number.parseFloat(t.getPropertyValue('padding-top')),
    a =
      Number.parseFloat(t.getPropertyValue('border-bottom-width')) +
      Number.parseFloat(t.getPropertyValue('border-top-width'))
  return {
    contextStyle: du.map(r => `${r}:${t.getPropertyValue(r)}`).join(';'),
    paddingSize: l,
    borderSize: a,
    boxSizing: n
  }
}
function ea(e, t = 1, n) {
  var l
  Lt || ((Lt = document.createElement('textarea')), document.body.appendChild(Lt))
  const { paddingSize: a, borderSize: s, boxSizing: r, contextStyle: i } = fu(e)
  Lt.setAttribute('style', `${i};${cu}`), (Lt.value = e.value || e.placeholder || '')
  let u = Lt.scrollHeight
  const f = {}
  r === 'border-box' ? (u = u + s) : r === 'content-box' && (u = u - a), (Lt.value = '')
  const m = Lt.scrollHeight - a
  if (Be(t)) {
    let p = m * t
    r === 'border-box' && (p = p + a + s), (u = Math.max(p, u)), (f.minHeight = `${p}px`)
  }
  if (Be(n)) {
    let p = m * n
    r === 'border-box' && (p = p + a + s), (u = Math.min(p, u))
  }
  return (f.height = `${u}px`), (l = Lt.parentNode) == null || l.removeChild(Lt), (Lt = void 0), f
}
const pu = ge({
    id: { type: String, default: void 0 },
    size: qt,
    disabled: Boolean,
    modelValue: { type: re([String, Number, Object]), default: '' },
    type: { type: String, default: 'text' },
    resize: { type: String, values: ['none', 'both', 'horizontal', 'vertical'] },
    autosize: { type: re([Boolean, Object]), default: !1 },
    autocomplete: { type: String, default: 'off' },
    formatter: { type: Function },
    parser: { type: Function },
    placeholder: { type: String },
    form: { type: String },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    showWordLimit: { type: Boolean, default: !1 },
    suffixIcon: { type: ft },
    prefixIcon: { type: ft },
    containerRole: { type: String, default: void 0 },
    label: { type: String, default: void 0 },
    tabindex: { type: [String, Number], default: 0 },
    validateEvent: { type: Boolean, default: !0 },
    inputStyle: { type: re([Object, Array, String]), default: () => Fn({}) }
  }),
  vu = {
    [Ae]: e => xe(e),
    input: e => xe(e),
    change: e => xe(e),
    focus: e => e instanceof FocusEvent,
    blur: e => e instanceof FocusEvent,
    clear: () => !0,
    mouseleave: e => e instanceof MouseEvent,
    mouseenter: e => e instanceof MouseEvent,
    keydown: e => e instanceof Event,
    compositionstart: e => e instanceof CompositionEvent,
    compositionupdate: e => e instanceof CompositionEvent,
    compositionend: e => e instanceof CompositionEvent
  },
  mu = ['role'],
  gu = [
    'id',
    'type',
    'disabled',
    'formatter',
    'parser',
    'readonly',
    'autocomplete',
    'tabindex',
    'aria-label',
    'placeholder',
    'form'
  ],
  hu = [
    'id',
    'tabindex',
    'disabled',
    'readonly',
    'autocomplete',
    'aria-label',
    'placeholder',
    'form'
  ],
  bu = Q({ name: 'ElInput', inheritAttrs: !1 }),
  yu = Q({
    ...bu,
    props: pu,
    emits: vu,
    setup(e, { expose: t, emit: n }) {
      const l = e,
        a = Oo(),
        s = Ln(),
        r = S(() => {
          const Z = {}
          return (
            l.containerRole === 'combobox' &&
              ((Z['aria-haspopup'] = a['aria-haspopup']),
              (Z['aria-owns'] = a['aria-owns']),
              (Z['aria-expanded'] = a['aria-expanded'])),
            Z
          )
        }),
        i = ss({ excludeKeys: S(() => Object.keys(r.value)) }),
        { form: u, formItem: f } = Qt(),
        { inputId: m } = oo(l, { formItemContext: f }),
        p = Ot(),
        h = yn(),
        c = ve('input'),
        d = ve('textarea'),
        v = Ft(),
        y = Ft(),
        T = N(!1),
        E = N(!1),
        g = N(!1),
        $ = N(!1),
        k = N(),
        P = Ft(l.inputStyle),
        L = S(() => v.value || y.value),
        V = S(() => {
          var Z
          return (Z = u == null ? void 0 : u.statusIcon) != null ? Z : !1
        }),
        x = S(() => (f == null ? void 0 : f.validateState) || ''),
        Y = S(() => x.value && $i[x.value]),
        X = S(() => ($.value ? Hr : Wr)),
        te = S(() => [a.style, l.inputStyle]),
        _ = S(() => [l.inputStyle, P.value, { resize: l.resize }]),
        D = S(() => (_t(l.modelValue) ? '' : String(l.modelValue))),
        U = S(() => l.clearable && !h.value && !l.readonly && !!D.value && (T.value || E.value)),
        J = S(
          () => l.showPassword && !h.value && !l.readonly && !!D.value && (!!D.value || T.value)
        ),
        B = S(
          () =>
            l.showWordLimit &&
            !!i.value.maxlength &&
            (l.type === 'text' || l.type === 'textarea') &&
            !h.value &&
            !l.readonly &&
            !l.showPassword
        ),
        R = S(() => Array.from(D.value).length),
        O = S(() => !!B.value && R.value > Number(i.value.maxlength)),
        q = S(
          () =>
            !!s.suffix ||
            !!l.suffixIcon ||
            U.value ||
            l.showPassword ||
            B.value ||
            (!!x.value && V.value)
        ),
        [ee, M] = au(v)
      Dn(y, Z => {
        if (!B.value || l.resize !== 'both') return
        const Ie = Z[0],
          { width: Xe } = Ie.contentRect
        k.value = { right: `calc(100% - ${Xe + 15 + 6}px)` }
      })
      const j = () => {
          const { type: Z, autosize: Ie } = l
          if (!(!Re || Z !== 'textarea'))
            if (Ie) {
              const Xe = zt(Ie) ? Ie.minRows : void 0,
                tt = zt(Ie) ? Ie.maxRows : void 0
              P.value = { ...ea(y.value, Xe, tt) }
            } else P.value = { minHeight: ea(y.value).minHeight }
        },
        le = () => {
          const Z = L.value
          !Z || Z.value === D.value || (Z.value = D.value)
        },
        ie = async Z => {
          ee()
          let { value: Ie } = Z.target
          if (
            (l.formatter && ((Ie = l.parser ? l.parser(Ie) : Ie), (Ie = l.formatter(Ie))), !g.value)
          ) {
            if (Ie === D.value) {
              le()
              return
            }
            n(Ae, Ie), n('input', Ie), await we(), le(), M()
          }
        },
        se = Z => {
          n('change', Z.target.value)
        },
        ae = Z => {
          n('compositionstart', Z), (g.value = !0)
        },
        ue = Z => {
          var Ie
          n('compositionupdate', Z)
          const Xe = (Ie = Z.target) == null ? void 0 : Ie.value,
            tt = Xe[Xe.length - 1] || ''
          g.value = !as(tt)
        },
        ye = Z => {
          n('compositionend', Z), g.value && ((g.value = !1), ie(Z))
        },
        pe = () => {
          ;($.value = !$.value), Me()
        },
        Me = async () => {
          var Z
          await we(), (Z = L.value) == null || Z.focus()
        },
        Ne = () => {
          var Z
          return (Z = L.value) == null ? void 0 : Z.blur()
        },
        He = Z => {
          ;(T.value = !0), n('focus', Z)
        },
        et = Z => {
          var Ie
          ;(T.value = !1),
            n('blur', Z),
            l.validateEvent &&
              ((Ie = f == null ? void 0 : f.validate) == null ||
                Ie.call(f, 'blur').catch(Xe => void 0))
        },
        Et = Z => {
          ;(E.value = !1), n('mouseleave', Z)
        },
        Ge = Z => {
          ;(E.value = !0), n('mouseenter', Z)
        },
        Te = Z => {
          n('keydown', Z)
        },
        it = () => {
          var Z
          ;(Z = L.value) == null || Z.select()
        },
        ze = () => {
          n(Ae, ''), n('change', ''), n('clear'), n('input', '')
        }
      return (
        ce(
          () => l.modelValue,
          () => {
            var Z
            we(() => j()),
              l.validateEvent &&
                ((Z = f == null ? void 0 : f.validate) == null ||
                  Z.call(f, 'change').catch(Ie => void 0))
          }
        ),
        ce(D, () => le()),
        ce(
          () => l.type,
          async () => {
            await we(), le(), j()
          }
        ),
        De(() => {
          !l.formatter && l.parser, le(), we(j)
        }),
        t({
          input: v,
          textarea: y,
          ref: L,
          textareaStyle: _,
          autosize: Qe(l, 'autosize'),
          focus: Me,
          blur: Ne,
          select: it,
          clear: ze,
          resizeTextarea: j
        }),
        (Z, Ie) =>
          Ve(
            (C(),
            A(
              'div',
              bt(o(r), {
                class: [
                  Z.type === 'textarea' ? o(d).b() : o(c).b(),
                  o(c).m(o(p)),
                  o(c).is('disabled', o(h)),
                  o(c).is('exceed', o(O)),
                  {
                    [o(c).b('group')]: Z.$slots.prepend || Z.$slots.append,
                    [o(c).bm('group', 'append')]: Z.$slots.append,
                    [o(c).bm('group', 'prepend')]: Z.$slots.prepend,
                    [o(c).m('prefix')]: Z.$slots.prefix || Z.prefixIcon,
                    [o(c).m('suffix')]:
                      Z.$slots.suffix || Z.suffixIcon || Z.clearable || Z.showPassword,
                    [o(c).bm('suffix', 'password-clear')]: o(U) && o(J)
                  },
                  Z.$attrs.class
                ],
                style: o(te),
                role: Z.containerRole,
                onMouseenter: Ge,
                onMouseleave: Et
              }),
              [
                G(' input '),
                Z.type !== 'textarea'
                  ? (C(),
                    A(
                      Pe,
                      { key: 0 },
                      [
                        G(' prepend slot '),
                        Z.$slots.prepend
                          ? (C(),
                            A(
                              'div',
                              { key: 0, class: w(o(c).be('group', 'prepend')) },
                              [fe(Z.$slots, 'prepend')],
                              2
                            ))
                          : G('v-if', !0),
                        F(
                          'div',
                          { class: w([o(c).e('wrapper'), o(c).is('focus', T.value)]) },
                          [
                            G(' prefix slot '),
                            Z.$slots.prefix || Z.prefixIcon
                              ? (C(),
                                A(
                                  'span',
                                  { key: 0, class: w(o(c).e('prefix')) },
                                  [
                                    F(
                                      'span',
                                      { class: w(o(c).e('prefix-inner')) },
                                      [
                                        fe(Z.$slots, 'prefix'),
                                        Z.prefixIcon
                                          ? (C(),
                                            oe(
                                              o(be),
                                              { key: 0, class: w(o(c).e('icon')) },
                                              {
                                                default: W(() => [(C(), oe(je(Z.prefixIcon)))]),
                                                _: 1
                                              },
                                              8,
                                              ['class']
                                            ))
                                          : G('v-if', !0)
                                      ],
                                      2
                                    )
                                  ],
                                  2
                                ))
                              : G('v-if', !0),
                            F(
                              'input',
                              bt(
                                { id: o(m), ref_key: 'input', ref: v, class: o(c).e('inner') },
                                o(i),
                                {
                                  type: Z.showPassword ? ($.value ? 'text' : 'password') : Z.type,
                                  disabled: o(h),
                                  formatter: Z.formatter,
                                  parser: Z.parser,
                                  readonly: Z.readonly,
                                  autocomplete: Z.autocomplete,
                                  tabindex: Z.tabindex,
                                  'aria-label': Z.label,
                                  placeholder: Z.placeholder,
                                  style: Z.inputStyle,
                                  form: l.form,
                                  onCompositionstart: ae,
                                  onCompositionupdate: ue,
                                  onCompositionend: ye,
                                  onInput: ie,
                                  onFocus: He,
                                  onBlur: et,
                                  onChange: se,
                                  onKeydown: Te
                                }
                              ),
                              null,
                              16,
                              gu
                            ),
                            G(' suffix slot '),
                            o(q)
                              ? (C(),
                                A(
                                  'span',
                                  { key: 1, class: w(o(c).e('suffix')) },
                                  [
                                    F(
                                      'span',
                                      { class: w(o(c).e('suffix-inner')) },
                                      [
                                        !o(U) || !o(J) || !o(B)
                                          ? (C(),
                                            A(
                                              Pe,
                                              { key: 0 },
                                              [
                                                fe(Z.$slots, 'suffix'),
                                                Z.suffixIcon
                                                  ? (C(),
                                                    oe(
                                                      o(be),
                                                      { key: 0, class: w(o(c).e('icon')) },
                                                      {
                                                        default: W(() => [
                                                          (C(), oe(je(Z.suffixIcon)))
                                                        ]),
                                                        _: 1
                                                      },
                                                      8,
                                                      ['class']
                                                    ))
                                                  : G('v-if', !0)
                                              ],
                                              64
                                            ))
                                          : G('v-if', !0),
                                        o(U)
                                          ? (C(),
                                            oe(
                                              o(be),
                                              {
                                                key: 1,
                                                class: w([o(c).e('icon'), o(c).e('clear')]),
                                                onMousedown: Le(o(ln), ['prevent']),
                                                onClick: ze
                                              },
                                              { default: W(() => [H(o(_o))]), _: 1 },
                                              8,
                                              ['class', 'onMousedown']
                                            ))
                                          : G('v-if', !0),
                                        o(J)
                                          ? (C(),
                                            oe(
                                              o(be),
                                              {
                                                key: 2,
                                                class: w([o(c).e('icon'), o(c).e('password')]),
                                                onClick: pe
                                              },
                                              { default: W(() => [(C(), oe(je(o(X))))]), _: 1 },
                                              8,
                                              ['class']
                                            ))
                                          : G('v-if', !0),
                                        o(B)
                                          ? (C(),
                                            A(
                                              'span',
                                              { key: 3, class: w(o(c).e('count')) },
                                              [
                                                F(
                                                  'span',
                                                  { class: w(o(c).e('count-inner')) },
                                                  he(o(R)) + ' / ' + he(o(i).maxlength),
                                                  3
                                                )
                                              ],
                                              2
                                            ))
                                          : G('v-if', !0),
                                        o(x) && o(Y) && o(V)
                                          ? (C(),
                                            oe(
                                              o(be),
                                              {
                                                key: 4,
                                                class: w([
                                                  o(c).e('icon'),
                                                  o(c).e('validateIcon'),
                                                  o(c).is('loading', o(x) === 'validating')
                                                ])
                                              },
                                              { default: W(() => [(C(), oe(je(o(Y))))]), _: 1 },
                                              8,
                                              ['class']
                                            ))
                                          : G('v-if', !0)
                                      ],
                                      2
                                    )
                                  ],
                                  2
                                ))
                              : G('v-if', !0)
                          ],
                          2
                        ),
                        G(' append slot '),
                        Z.$slots.append
                          ? (C(),
                            A(
                              'div',
                              { key: 1, class: w(o(c).be('group', 'append')) },
                              [fe(Z.$slots, 'append')],
                              2
                            ))
                          : G('v-if', !0)
                      ],
                      64
                    ))
                  : (C(),
                    A(
                      Pe,
                      { key: 1 },
                      [
                        G(' textarea '),
                        F(
                          'textarea',
                          bt(
                            { id: o(m), ref_key: 'textarea', ref: y, class: o(d).e('inner') },
                            o(i),
                            {
                              tabindex: Z.tabindex,
                              disabled: o(h),
                              readonly: Z.readonly,
                              autocomplete: Z.autocomplete,
                              style: o(_),
                              'aria-label': Z.label,
                              placeholder: Z.placeholder,
                              form: l.form,
                              onCompositionstart: ae,
                              onCompositionupdate: ue,
                              onCompositionend: ye,
                              onInput: ie,
                              onFocus: He,
                              onBlur: et,
                              onChange: se,
                              onKeydown: Te
                            }
                          ),
                          null,
                          16,
                          hu
                        ),
                        o(B)
                          ? (C(),
                            A(
                              'span',
                              { key: 0, style: $e(k.value), class: w(o(c).e('count')) },
                              he(o(R)) + ' / ' + he(o(i).maxlength),
                              7
                            ))
                          : G('v-if', !0)
                      ],
                      64
                    ))
              ],
              16,
              mu
            )),
            [[ot, Z.type !== 'hidden']]
          )
      )
    }
  })
var wu = me(yu, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue']
])
const Rt = Ue(wu),
  Sn = 4,
  ku = {
    vertical: {
      offset: 'offsetHeight',
      scroll: 'scrollTop',
      scrollSize: 'scrollHeight',
      size: 'height',
      key: 'vertical',
      axis: 'Y',
      client: 'clientY',
      direction: 'top'
    },
    horizontal: {
      offset: 'offsetWidth',
      scroll: 'scrollLeft',
      scrollSize: 'scrollWidth',
      size: 'width',
      key: 'horizontal',
      axis: 'X',
      client: 'clientX',
      direction: 'left'
    }
  },
  Cu = ({ move: e, size: t, bar: n }) => ({ [n.size]: t, transform: `translate${n.axis}(${e}%)` }),
  Su = ge({
    vertical: Boolean,
    size: String,
    move: Number,
    ratio: { type: Number, required: !0 },
    always: Boolean
  }),
  Eu = 'Thumb',
  $u = Q({
    __name: 'thumb',
    props: Su,
    setup(e) {
      const t = e,
        n = Ce(fs),
        l = ve('scrollbar')
      n || bn(Eu, 'can not inject scrollbar context')
      const a = N(),
        s = N(),
        r = N({}),
        i = N(!1)
      let u = !1,
        f = !1,
        m = Re ? document.onselectstart : null
      const p = S(() => ku[t.vertical ? 'vertical' : 'horizontal']),
        h = S(() => Cu({ size: t.size, move: t.move, bar: p.value })),
        c = S(
          () =>
            a.value[p.value.offset] ** 2 /
            n.wrapElement[p.value.scrollSize] /
            t.ratio /
            s.value[p.value.offset]
        ),
        d = P => {
          var L
          if ((P.stopPropagation(), P.ctrlKey || [1, 2].includes(P.button))) return
          ;(L = window.getSelection()) == null || L.removeAllRanges(), y(P)
          const V = P.currentTarget
          !V ||
            (r.value[p.value.axis] =
              V[p.value.offset] -
              (P[p.value.client] - V.getBoundingClientRect()[p.value.direction]))
        },
        v = P => {
          if (!s.value || !a.value || !n.wrapElement) return
          const L = Math.abs(
              P.target.getBoundingClientRect()[p.value.direction] - P[p.value.client]
            ),
            V = s.value[p.value.offset] / 2,
            x = ((L - V) * 100 * c.value) / a.value[p.value.offset]
          n.wrapElement[p.value.scroll] = (x * n.wrapElement[p.value.scrollSize]) / 100
        },
        y = P => {
          P.stopImmediatePropagation(),
            (u = !0),
            document.addEventListener('mousemove', T),
            document.addEventListener('mouseup', E),
            (m = document.onselectstart),
            (document.onselectstart = () => !1)
        },
        T = P => {
          if (!a.value || !s.value || u === !1) return
          const L = r.value[p.value.axis]
          if (!L) return
          const V = (a.value.getBoundingClientRect()[p.value.direction] - P[p.value.client]) * -1,
            x = s.value[p.value.offset] - L,
            Y = ((V - x) * 100 * c.value) / a.value[p.value.offset]
          n.wrapElement[p.value.scroll] = (Y * n.wrapElement[p.value.scrollSize]) / 100
        },
        E = () => {
          ;(u = !1),
            (r.value[p.value.axis] = 0),
            document.removeEventListener('mousemove', T),
            document.removeEventListener('mouseup', E),
            k(),
            f && (i.value = !1)
        },
        g = () => {
          ;(f = !1), (i.value = !!t.size)
        },
        $ = () => {
          ;(f = !0), (i.value = u)
        }
      It(() => {
        k(), document.removeEventListener('mouseup', E)
      })
      const k = () => {
        document.onselectstart !== m && (document.onselectstart = m)
      }
      return (
        Tt(Qe(n, 'scrollbarElement'), 'mousemove', g),
        Tt(Qe(n, 'scrollbarElement'), 'mouseleave', $),
        (P, L) => (
          C(),
          oe(
            Pt,
            { name: o(l).b('fade'), persisted: '' },
            {
              default: W(() => [
                Ve(
                  F(
                    'div',
                    {
                      ref_key: 'instance',
                      ref: a,
                      class: w([o(l).e('bar'), o(l).is(o(p).key)]),
                      onMousedown: v
                    },
                    [
                      F(
                        'div',
                        {
                          ref_key: 'thumb',
                          ref: s,
                          class: w(o(l).e('thumb')),
                          style: $e(o(h)),
                          onMousedown: d
                        },
                        null,
                        38
                      )
                    ],
                    34
                  ),
                  [[ot, P.always || i.value]]
                )
              ]),
              _: 1
            },
            8,
            ['name']
          )
        )
      )
    }
  })
var ta = me($u, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue'
  ]
])
const Tu = ge({
    always: { type: Boolean, default: !0 },
    width: String,
    height: String,
    ratioX: { type: Number, default: 1 },
    ratioY: { type: Number, default: 1 }
  }),
  Iu = Q({
    __name: 'bar',
    props: Tu,
    setup(e, { expose: t }) {
      const n = e,
        l = N(0),
        a = N(0)
      return (
        t({
          handleScroll: r => {
            if (r) {
              const i = r.offsetHeight - Sn,
                u = r.offsetWidth - Sn
              ;(a.value = ((r.scrollTop * 100) / i) * n.ratioY),
                (l.value = ((r.scrollLeft * 100) / u) * n.ratioX)
            }
          }
        }),
        (r, i) => (
          C(),
          A(
            Pe,
            null,
            [
              H(ta, { move: l.value, ratio: r.ratioX, size: r.width, always: r.always }, null, 8, [
                'move',
                'ratio',
                'size',
                'always'
              ]),
              H(
                ta,
                { move: a.value, ratio: r.ratioY, size: r.height, vertical: '', always: r.always },
                null,
                8,
                ['move', 'ratio', 'size', 'always']
              )
            ],
            64
          )
        )
      )
    }
  })
var Pu = me(Iu, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue'
  ]
])
const Ou = ge({
    height: { type: [String, Number], default: '' },
    maxHeight: { type: [String, Number], default: '' },
    native: Boolean,
    wrapStyle: { type: re([String, Object, Array]), default: '' },
    wrapClass: { type: [String, Array], default: '' },
    viewClass: { type: [String, Array], default: '' },
    viewStyle: { type: [String, Array, Object], default: '' },
    noresize: Boolean,
    tag: { type: String, default: 'div' },
    always: Boolean,
    minSize: { type: Number, default: 20 }
  }),
  Mu = { scroll: ({ scrollTop: e, scrollLeft: t }) => [e, t].every(Be) },
  _u = Q({ name: 'ElScrollbar' }),
  Nu = Q({
    ..._u,
    props: Ou,
    emits: Mu,
    setup(e, { expose: t, emit: n }) {
      const l = e,
        a = ve('scrollbar')
      let s, r
      const i = N(),
        u = N(),
        f = N(),
        m = N('0'),
        p = N('0'),
        h = N(),
        c = N(1),
        d = N(1),
        v = S(() => {
          const k = {}
          return (
            l.height && (k.height = Kt(l.height)),
            l.maxHeight && (k.maxHeight = Kt(l.maxHeight)),
            [l.wrapStyle, k]
          )
        }),
        y = () => {
          var k
          u.value &&
            ((k = h.value) == null || k.handleScroll(u.value),
            n('scroll', { scrollTop: u.value.scrollTop, scrollLeft: u.value.scrollLeft }))
        }
      function T(k, P) {
        zt(k) ? u.value.scrollTo(k) : Be(k) && Be(P) && u.value.scrollTo(k, P)
      }
      const E = k => {
          !Be(k) || (u.value.scrollTop = k)
        },
        g = k => {
          !Be(k) || (u.value.scrollLeft = k)
        },
        $ = () => {
          if (!u.value) return
          const k = u.value.offsetHeight - Sn,
            P = u.value.offsetWidth - Sn,
            L = k ** 2 / u.value.scrollHeight,
            V = P ** 2 / u.value.scrollWidth,
            x = Math.max(L, l.minSize),
            Y = Math.max(V, l.minSize)
          ;(c.value = L / (k - L) / (x / (k - x))),
            (d.value = V / (P - V) / (Y / (P - Y))),
            (p.value = x + Sn < k ? `${x}px` : ''),
            (m.value = Y + Sn < P ? `${Y}px` : '')
        }
      return (
        ce(
          () => l.noresize,
          k => {
            k
              ? (s == null || s(), r == null || r())
              : (({ stop: s } = Dn(f, $)), (r = Tt('resize', $)))
          },
          { immediate: !0 }
        ),
        ce(
          () => [l.maxHeight, l.height],
          () => {
            l.native ||
              we(() => {
                var k
                $(), u.value && ((k = h.value) == null || k.handleScroll(u.value))
              })
          }
        ),
        Fe(fs, yt({ scrollbarElement: i, wrapElement: u })),
        De(() => {
          l.native ||
            we(() => {
              $()
            })
        }),
        pl(() => $()),
        t({ wrap$: u, update: $, scrollTo: T, setScrollTop: E, setScrollLeft: g, handleScroll: y }),
        (k, P) => (
          C(),
          A(
            'div',
            { ref_key: 'scrollbar$', ref: i, class: w(o(a).b()) },
            [
              F(
                'div',
                {
                  ref_key: 'wrap$',
                  ref: u,
                  class: w([
                    k.wrapClass,
                    o(a).e('wrap'),
                    { [o(a).em('wrap', 'hidden-default')]: !k.native }
                  ]),
                  style: $e(o(v)),
                  onScroll: y
                },
                [
                  (C(),
                  oe(
                    je(k.tag),
                    {
                      ref_key: 'resize$',
                      ref: f,
                      class: w([o(a).e('view'), k.viewClass]),
                      style: $e(k.viewStyle)
                    },
                    { default: W(() => [fe(k.$slots, 'default')]), _: 3 },
                    8,
                    ['class', 'style']
                  ))
                ],
                38
              ),
              k.native
                ? G('v-if', !0)
                : (C(),
                  oe(
                    Pu,
                    {
                      key: 0,
                      ref_key: 'barRef',
                      ref: h,
                      height: p.value,
                      width: m.value,
                      always: k.always,
                      'ratio-x': d.value,
                      'ratio-y': c.value
                    },
                    null,
                    8,
                    ['height', 'width', 'always', 'ratio-x', 'ratio-y']
                  ))
            ],
            2
          )
        )
      )
    }
  })
var Vu = me(Nu, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue'
  ]
])
const wl = Ue(Vu),
  Bu = ['dialog', 'grid', 'group', 'listbox', 'menu', 'navigation', 'tooltip', 'tree'],
  ws = ge({ role: { type: String, values: Bu, default: 'tooltip' } }),
  Au = Q({ name: 'ElPopperRoot', inheritAttrs: !1 }),
  Lu = Q({
    ...Au,
    props: ws,
    setup(e, { expose: t }) {
      const n = e,
        l = N(),
        a = N(),
        s = N(),
        r = N(),
        i = S(() => n.role),
        u = { triggerRef: l, popperInstanceRef: a, contentRef: s, referenceRef: r, role: i }
      return t(u), Fe(bl, u), (f, m) => fe(f.$slots, 'default')
    }
  })
var Du = me(Lu, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue'
  ]
])
const ks = ge({ arrowOffset: { type: Number, default: 5 } }),
  Ru = Q({ name: 'ElPopperArrow', inheritAttrs: !1 }),
  Fu = Q({
    ...Ru,
    props: ks,
    setup(e, { expose: t }) {
      const n = e,
        l = ve('popper'),
        { arrowOffset: a, arrowRef: s } = Ce(vs, void 0)
      return (
        ce(
          () => n.arrowOffset,
          r => {
            a.value = r
          }
        ),
        It(() => {
          s.value = void 0
        }),
        t({ arrowRef: s }),
        (r, i) => (
          C(),
          A(
            'span',
            { ref_key: 'arrowRef', ref: s, class: w(o(l).e('arrow')), 'data-popper-arrow': '' },
            null,
            2
          )
        )
      )
    }
  })
var zu = me(Fu, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue']
])
const Ku = 'ElOnlyChild',
  Cs = Q({
    name: Ku,
    setup(e, { slots: t, attrs: n }) {
      var l
      const a = Ce(ys),
        s = lu((l = a == null ? void 0 : a.setForwardRef) != null ? l : ln)
      return () => {
        var r
        const i = (r = t.default) == null ? void 0 : r.call(t, n)
        if (!i || i.length > 1) return null
        const u = Ss(i)
        return u ? Ve(Mr(u, n), [[s]]) : null
      }
    }
  })
function Ss(e) {
  if (!e) return null
  const t = e
  for (const n of t) {
    if (zt(n))
      switch (n.type) {
        case _r:
          continue
        case Ka:
        case 'svg':
          return na(n)
        case Pe:
          return Ss(n.children)
        default:
          return n
      }
    return na(n)
  }
  return null
}
function na(e) {
  const t = ve('only-child')
  return H('span', { class: t.e('content') }, [e])
}
const Es = ge({
    virtualRef: { type: re(Object) },
    virtualTriggering: Boolean,
    onMouseenter: { type: re(Function) },
    onMouseleave: { type: re(Function) },
    onClick: { type: re(Function) },
    onKeydown: { type: re(Function) },
    onFocus: { type: re(Function) },
    onBlur: { type: re(Function) },
    onContextmenu: { type: re(Function) },
    id: String,
    open: Boolean
  }),
  Hu = Q({ name: 'ElPopperTrigger', inheritAttrs: !1 }),
  Wu = Q({
    ...Hu,
    props: Es,
    setup(e, { expose: t }) {
      const n = e,
        { role: l, triggerRef: a } = Ce(bl, void 0)
      ou(a)
      const s = S(() => (i.value ? n.id : void 0)),
        r = S(() => {
          if (l && l.value === 'tooltip') return n.open && n.id ? n.id : void 0
        }),
        i = S(() => {
          if (l && l.value !== 'tooltip') return l.value
        }),
        u = S(() => (i.value ? `${n.open}` : void 0))
      let f
      return (
        De(() => {
          ce(
            () => n.virtualRef,
            m => {
              m && (a.value = Xa(m))
            },
            { immediate: !0 }
          ),
            ce(
              a,
              (m, p) => {
                f == null || f(),
                  (f = void 0),
                  gn(m) &&
                    ([
                      'onMouseenter',
                      'onMouseleave',
                      'onClick',
                      'onKeydown',
                      'onFocus',
                      'onBlur',
                      'onContextmenu'
                    ].forEach(h => {
                      var c
                      const d = n[h]
                      d &&
                        (m.addEventListener(h.slice(2).toLowerCase(), d),
                        (c = p == null ? void 0 : p.removeEventListener) == null ||
                          c.call(p, h.slice(2).toLowerCase(), d))
                    }),
                    (f = ce(
                      [s, r, i, u],
                      h => {
                        ;[
                          'aria-controls',
                          'aria-describedby',
                          'aria-haspopup',
                          'aria-expanded'
                        ].forEach((c, d) => {
                          _t(h[d]) ? m.removeAttribute(c) : m.setAttribute(c, h[d])
                        })
                      },
                      { immediate: !0 }
                    ))),
                  gn(p) &&
                    ['aria-controls', 'aria-describedby', 'aria-haspopup', 'aria-expanded'].forEach(
                      h => p.removeAttribute(h)
                    )
              },
              { immediate: !0 }
            )
        }),
        It(() => {
          f == null || f(), (f = void 0)
        }),
        t({ triggerRef: a }),
        (m, p) =>
          m.virtualTriggering
            ? G('v-if', !0)
            : (C(),
              oe(
                o(Cs),
                bt({ key: 0 }, m.$attrs, {
                  'aria-controls': o(s),
                  'aria-describedby': o(r),
                  'aria-expanded': o(u),
                  'aria-haspopup': o(i)
                }),
                { default: W(() => [fe(m.$slots, 'default')]), _: 3 },
                16,
                ['aria-controls', 'aria-describedby', 'aria-expanded', 'aria-haspopup']
              ))
      )
    }
  })
var Yu = me(Wu, [
    [
      '__file',
      '/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue'
    ]
  ]),
  Ct = 'top',
  Vt = 'bottom',
  Bt = 'right',
  St = 'left',
  kl = 'auto',
  ao = [Ct, Vt, Bt, St],
  Mn = 'start',
  Jn = 'end',
  ju = 'clippingParents',
  $s = 'viewport',
  Wn = 'popper',
  xu = 'reference',
  oa = ao.reduce(function (e, t) {
    return e.concat([t + '-' + Mn, t + '-' + Jn])
  }, []),
  Kn = [].concat(ao, [kl]).reduce(function (e, t) {
    return e.concat([t, t + '-' + Mn, t + '-' + Jn])
  }, []),
  Uu = 'beforeRead',
  qu = 'read',
  Gu = 'afterRead',
  Xu = 'beforeMain',
  Ju = 'main',
  Zu = 'afterMain',
  Qu = 'beforeWrite',
  ec = 'write',
  tc = 'afterWrite',
  nc = [Uu, qu, Gu, Xu, Ju, Zu, Qu, ec, tc]
function Gt(e) {
  return e ? (e.nodeName || '').toLowerCase() : null
}
function Wt(e) {
  if (e == null) return window
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument
    return (t && t.defaultView) || window
  }
  return e
}
function _n(e) {
  var t = Wt(e).Element
  return e instanceof t || e instanceof Element
}
function Nt(e) {
  var t = Wt(e).HTMLElement
  return e instanceof t || e instanceof HTMLElement
}
function Cl(e) {
  if (typeof ShadowRoot > 'u') return !1
  var t = Wt(e).ShadowRoot
  return e instanceof t || e instanceof ShadowRoot
}
function oc(e) {
  var t = e.state
  Object.keys(t.elements).forEach(function (n) {
    var l = t.styles[n] || {},
      a = t.attributes[n] || {},
      s = t.elements[n]
    !Nt(s) ||
      !Gt(s) ||
      (Object.assign(s.style, l),
      Object.keys(a).forEach(function (r) {
        var i = a[r]
        i === !1 ? s.removeAttribute(r) : s.setAttribute(r, i === !0 ? '' : i)
      }))
  })
}
function lc(e) {
  var t = e.state,
    n = {
      popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
      arrow: { position: 'absolute' },
      reference: {}
    }
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (l) {
        var a = t.elements[l],
          s = t.attributes[l] || {},
          r = Object.keys(t.styles.hasOwnProperty(l) ? t.styles[l] : n[l]),
          i = r.reduce(function (u, f) {
            return (u[f] = ''), u
          }, {})
        !Nt(a) ||
          !Gt(a) ||
          (Object.assign(a.style, i),
          Object.keys(s).forEach(function (u) {
            a.removeAttribute(u)
          }))
      })
    }
  )
}
var Ts = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: oc,
  effect: lc,
  requires: ['computeStyles']
}
function xt(e) {
  return e.split('-')[0]
}
var vn = Math.max,
  Io = Math.min,
  Nn = Math.round
function Vn(e, t) {
  t === void 0 && (t = !1)
  var n = e.getBoundingClientRect(),
    l = 1,
    a = 1
  if (Nt(e) && t) {
    var s = e.offsetHeight,
      r = e.offsetWidth
    r > 0 && (l = Nn(n.width) / r || 1), s > 0 && (a = Nn(n.height) / s || 1)
  }
  return {
    width: n.width / l,
    height: n.height / a,
    top: n.top / a,
    right: n.right / l,
    bottom: n.bottom / a,
    left: n.left / l,
    x: n.left / l,
    y: n.top / a
  }
}
function Sl(e) {
  var t = Vn(e),
    n = e.offsetWidth,
    l = e.offsetHeight
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - l) <= 1 && (l = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: l }
  )
}
function Is(e, t) {
  var n = t.getRootNode && t.getRootNode()
  if (e.contains(t)) return !0
  if (n && Cl(n)) {
    var l = t
    do {
      if (l && e.isSameNode(l)) return !0
      l = l.parentNode || l.host
    } while (l)
  }
  return !1
}
function Xt(e) {
  return Wt(e).getComputedStyle(e)
}
function ac(e) {
  return ['table', 'td', 'th'].indexOf(Gt(e)) >= 0
}
function rn(e) {
  return ((_n(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function Ao(e) {
  return Gt(e) === 'html' ? e : e.assignedSlot || e.parentNode || (Cl(e) ? e.host : null) || rn(e)
}
function la(e) {
  return !Nt(e) || Xt(e).position === 'fixed' ? null : e.offsetParent
}
function sc(e) {
  var t = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1,
    n = navigator.userAgent.indexOf('Trident') !== -1
  if (n && Nt(e)) {
    var l = Xt(e)
    if (l.position === 'fixed') return null
  }
  var a = Ao(e)
  for (Cl(a) && (a = a.host); Nt(a) && ['html', 'body'].indexOf(Gt(a)) < 0; ) {
    var s = Xt(a)
    if (
      s.transform !== 'none' ||
      s.perspective !== 'none' ||
      s.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(s.willChange) !== -1 ||
      (t && s.willChange === 'filter') ||
      (t && s.filter && s.filter !== 'none')
    )
      return a
    a = a.parentNode
  }
  return null
}
function so(e) {
  for (var t = Wt(e), n = la(e); n && ac(n) && Xt(n).position === 'static'; ) n = la(n)
  return n && (Gt(n) === 'html' || (Gt(n) === 'body' && Xt(n).position === 'static'))
    ? t
    : n || sc(e) || t
}
function El(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
}
function xn(e, t, n) {
  return vn(e, Io(t, n))
}
function rc(e, t, n) {
  var l = xn(e, t, n)
  return l > n ? n : l
}
function Ps() {
  return { top: 0, right: 0, bottom: 0, left: 0 }
}
function Os(e) {
  return Object.assign({}, Ps(), e)
}
function Ms(e, t) {
  return t.reduce(function (n, l) {
    return (n[l] = e), n
  }, {})
}
var ic = function (e, t) {
  return (
    (e = typeof e == 'function' ? e(Object.assign({}, t.rects, { placement: t.placement })) : e),
    Os(typeof e != 'number' ? e : Ms(e, ao))
  )
}
function uc(e) {
  var t,
    n = e.state,
    l = e.name,
    a = e.options,
    s = n.elements.arrow,
    r = n.modifiersData.popperOffsets,
    i = xt(n.placement),
    u = El(i),
    f = [St, Bt].indexOf(i) >= 0,
    m = f ? 'height' : 'width'
  if (!(!s || !r)) {
    var p = ic(a.padding, n),
      h = Sl(s),
      c = u === 'y' ? Ct : St,
      d = u === 'y' ? Vt : Bt,
      v = n.rects.reference[m] + n.rects.reference[u] - r[u] - n.rects.popper[m],
      y = r[u] - n.rects.reference[u],
      T = so(s),
      E = T ? (u === 'y' ? T.clientHeight || 0 : T.clientWidth || 0) : 0,
      g = v / 2 - y / 2,
      $ = p[c],
      k = E - h[m] - p[d],
      P = E / 2 - h[m] / 2 + g,
      L = xn($, P, k),
      V = u
    n.modifiersData[l] = ((t = {}), (t[V] = L), (t.centerOffset = L - P), t)
  }
}
function cc(e) {
  var t = e.state,
    n = e.options,
    l = n.element,
    a = l === void 0 ? '[data-popper-arrow]' : l
  a != null &&
    ((typeof a == 'string' && ((a = t.elements.popper.querySelector(a)), !a)) ||
      !Is(t.elements.popper, a) ||
      (t.elements.arrow = a))
}
var dc = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: uc,
  effect: cc,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
}
function Bn(e) {
  return e.split('-')[1]
}
var fc = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
function pc(e) {
  var t = e.x,
    n = e.y,
    l = window,
    a = l.devicePixelRatio || 1
  return { x: Nn(t * a) / a || 0, y: Nn(n * a) / a || 0 }
}
function aa(e) {
  var t,
    n = e.popper,
    l = e.popperRect,
    a = e.placement,
    s = e.variation,
    r = e.offsets,
    i = e.position,
    u = e.gpuAcceleration,
    f = e.adaptive,
    m = e.roundOffsets,
    p = e.isFixed,
    h = r.x,
    c = h === void 0 ? 0 : h,
    d = r.y,
    v = d === void 0 ? 0 : d,
    y = typeof m == 'function' ? m({ x: c, y: v }) : { x: c, y: v }
  ;(c = y.x), (v = y.y)
  var T = r.hasOwnProperty('x'),
    E = r.hasOwnProperty('y'),
    g = St,
    $ = Ct,
    k = window
  if (f) {
    var P = so(n),
      L = 'clientHeight',
      V = 'clientWidth'
    if (
      (P === Wt(n) &&
        ((P = rn(n)),
        Xt(P).position !== 'static' &&
          i === 'absolute' &&
          ((L = 'scrollHeight'), (V = 'scrollWidth'))),
      (P = P),
      a === Ct || ((a === St || a === Bt) && s === Jn))
    ) {
      $ = Vt
      var x = p && P === k && k.visualViewport ? k.visualViewport.height : P[L]
      ;(v -= x - l.height), (v *= u ? 1 : -1)
    }
    if (a === St || ((a === Ct || a === Vt) && s === Jn)) {
      g = Bt
      var Y = p && P === k && k.visualViewport ? k.visualViewport.width : P[V]
      ;(c -= Y - l.width), (c *= u ? 1 : -1)
    }
  }
  var X = Object.assign({ position: i }, f && fc),
    te = m === !0 ? pc({ x: c, y: v }) : { x: c, y: v }
  if (((c = te.x), (v = te.y), u)) {
    var _
    return Object.assign(
      {},
      X,
      ((_ = {}),
      (_[$] = E ? '0' : ''),
      (_[g] = T ? '0' : ''),
      (_.transform =
        (k.devicePixelRatio || 1) <= 1
          ? 'translate(' + c + 'px, ' + v + 'px)'
          : 'translate3d(' + c + 'px, ' + v + 'px, 0)'),
      _)
    )
  }
  return Object.assign(
    {},
    X,
    ((t = {}), (t[$] = E ? v + 'px' : ''), (t[g] = T ? c + 'px' : ''), (t.transform = ''), t)
  )
}
function vc(e) {
  var t = e.state,
    n = e.options,
    l = n.gpuAcceleration,
    a = l === void 0 ? !0 : l,
    s = n.adaptive,
    r = s === void 0 ? !0 : s,
    i = n.roundOffsets,
    u = i === void 0 ? !0 : i,
    f = {
      placement: xt(t.placement),
      variation: Bn(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === 'fixed'
    }
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      aa(
        Object.assign({}, f, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: r,
          roundOffsets: u
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        aa(
          Object.assign({}, f, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: u
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement
    }))
}
var _s = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: vc, data: {} },
  uo = { passive: !0 }
function mc(e) {
  var t = e.state,
    n = e.instance,
    l = e.options,
    a = l.scroll,
    s = a === void 0 ? !0 : a,
    r = l.resize,
    i = r === void 0 ? !0 : r,
    u = Wt(t.elements.popper),
    f = [].concat(t.scrollParents.reference, t.scrollParents.popper)
  return (
    s &&
      f.forEach(function (m) {
        m.addEventListener('scroll', n.update, uo)
      }),
    i && u.addEventListener('resize', n.update, uo),
    function () {
      s &&
        f.forEach(function (m) {
          m.removeEventListener('scroll', n.update, uo)
        }),
        i && u.removeEventListener('resize', n.update, uo)
    }
  )
}
var Ns = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: mc,
    data: {}
  },
  gc = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function yo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return gc[t]
  })
}
var hc = { start: 'end', end: 'start' }
function sa(e) {
  return e.replace(/start|end/g, function (t) {
    return hc[t]
  })
}
function $l(e) {
  var t = Wt(e),
    n = t.pageXOffset,
    l = t.pageYOffset
  return { scrollLeft: n, scrollTop: l }
}
function Tl(e) {
  return Vn(rn(e)).left + $l(e).scrollLeft
}
function bc(e) {
  var t = Wt(e),
    n = rn(e),
    l = t.visualViewport,
    a = n.clientWidth,
    s = n.clientHeight,
    r = 0,
    i = 0
  return (
    l &&
      ((a = l.width),
      (s = l.height),
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        ((r = l.offsetLeft), (i = l.offsetTop))),
    { width: a, height: s, x: r + Tl(e), y: i }
  )
}
function yc(e) {
  var t,
    n = rn(e),
    l = $l(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    s = vn(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    r = vn(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    i = -l.scrollLeft + Tl(e),
    u = -l.scrollTop
  return (
    Xt(a || n).direction === 'rtl' && (i += vn(n.clientWidth, a ? a.clientWidth : 0) - s),
    { width: s, height: r, x: i, y: u }
  )
}
function Il(e) {
  var t = Xt(e),
    n = t.overflow,
    l = t.overflowX,
    a = t.overflowY
  return /auto|scroll|overlay|hidden/.test(n + a + l)
}
function Vs(e) {
  return ['html', 'body', '#document'].indexOf(Gt(e)) >= 0
    ? e.ownerDocument.body
    : Nt(e) && Il(e)
    ? e
    : Vs(Ao(e))
}
function Un(e, t) {
  var n
  t === void 0 && (t = [])
  var l = Vs(e),
    a = l === ((n = e.ownerDocument) == null ? void 0 : n.body),
    s = Wt(l),
    r = a ? [s].concat(s.visualViewport || [], Il(l) ? l : []) : l,
    i = t.concat(r)
  return a ? i : i.concat(Un(Ao(r)))
}
function tl(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height })
}
function wc(e) {
  var t = Vn(e)
  return (
    (t.top = t.top + e.clientTop),
    (t.left = t.left + e.clientLeft),
    (t.bottom = t.top + e.clientHeight),
    (t.right = t.left + e.clientWidth),
    (t.width = e.clientWidth),
    (t.height = e.clientHeight),
    (t.x = t.left),
    (t.y = t.top),
    t
  )
}
function ra(e, t) {
  return t === $s ? tl(bc(e)) : _n(t) ? wc(t) : tl(yc(rn(e)))
}
function kc(e) {
  var t = Un(Ao(e)),
    n = ['absolute', 'fixed'].indexOf(Xt(e).position) >= 0,
    l = n && Nt(e) ? so(e) : e
  return _n(l)
    ? t.filter(function (a) {
        return _n(a) && Is(a, l) && Gt(a) !== 'body'
      })
    : []
}
function Cc(e, t, n) {
  var l = t === 'clippingParents' ? kc(e) : [].concat(t),
    a = [].concat(l, [n]),
    s = a[0],
    r = a.reduce(function (i, u) {
      var f = ra(e, u)
      return (
        (i.top = vn(f.top, i.top)),
        (i.right = Io(f.right, i.right)),
        (i.bottom = Io(f.bottom, i.bottom)),
        (i.left = vn(f.left, i.left)),
        i
      )
    }, ra(e, s))
  return (
    (r.width = r.right - r.left), (r.height = r.bottom - r.top), (r.x = r.left), (r.y = r.top), r
  )
}
function Bs(e) {
  var t = e.reference,
    n = e.element,
    l = e.placement,
    a = l ? xt(l) : null,
    s = l ? Bn(l) : null,
    r = t.x + t.width / 2 - n.width / 2,
    i = t.y + t.height / 2 - n.height / 2,
    u
  switch (a) {
    case Ct:
      u = { x: r, y: t.y - n.height }
      break
    case Vt:
      u = { x: r, y: t.y + t.height }
      break
    case Bt:
      u = { x: t.x + t.width, y: i }
      break
    case St:
      u = { x: t.x - n.width, y: i }
      break
    default:
      u = { x: t.x, y: t.y }
  }
  var f = a ? El(a) : null
  if (f != null) {
    var m = f === 'y' ? 'height' : 'width'
    switch (s) {
      case Mn:
        u[f] = u[f] - (t[m] / 2 - n[m] / 2)
        break
      case Jn:
        u[f] = u[f] + (t[m] / 2 - n[m] / 2)
        break
    }
  }
  return u
}
function Zn(e, t) {
  t === void 0 && (t = {})
  var n = t,
    l = n.placement,
    a = l === void 0 ? e.placement : l,
    s = n.boundary,
    r = s === void 0 ? ju : s,
    i = n.rootBoundary,
    u = i === void 0 ? $s : i,
    f = n.elementContext,
    m = f === void 0 ? Wn : f,
    p = n.altBoundary,
    h = p === void 0 ? !1 : p,
    c = n.padding,
    d = c === void 0 ? 0 : c,
    v = Os(typeof d != 'number' ? d : Ms(d, ao)),
    y = m === Wn ? xu : Wn,
    T = e.rects.popper,
    E = e.elements[h ? y : m],
    g = Cc(_n(E) ? E : E.contextElement || rn(e.elements.popper), r, u),
    $ = Vn(e.elements.reference),
    k = Bs({ reference: $, element: T, strategy: 'absolute', placement: a }),
    P = tl(Object.assign({}, T, k)),
    L = m === Wn ? P : $,
    V = {
      top: g.top - L.top + v.top,
      bottom: L.bottom - g.bottom + v.bottom,
      left: g.left - L.left + v.left,
      right: L.right - g.right + v.right
    },
    x = e.modifiersData.offset
  if (m === Wn && x) {
    var Y = x[a]
    Object.keys(V).forEach(function (X) {
      var te = [Bt, Vt].indexOf(X) >= 0 ? 1 : -1,
        _ = [Ct, Vt].indexOf(X) >= 0 ? 'y' : 'x'
      V[X] += Y[_] * te
    })
  }
  return V
}
function Sc(e, t) {
  t === void 0 && (t = {})
  var n = t,
    l = n.placement,
    a = n.boundary,
    s = n.rootBoundary,
    r = n.padding,
    i = n.flipVariations,
    u = n.allowedAutoPlacements,
    f = u === void 0 ? Kn : u,
    m = Bn(l),
    p = m
      ? i
        ? oa
        : oa.filter(function (d) {
            return Bn(d) === m
          })
      : ao,
    h = p.filter(function (d) {
      return f.indexOf(d) >= 0
    })
  h.length === 0 && (h = p)
  var c = h.reduce(function (d, v) {
    return (d[v] = Zn(e, { placement: v, boundary: a, rootBoundary: s, padding: r })[xt(v)]), d
  }, {})
  return Object.keys(c).sort(function (d, v) {
    return c[d] - c[v]
  })
}
function Ec(e) {
  if (xt(e) === kl) return []
  var t = yo(e)
  return [sa(e), t, sa(t)]
}
function $c(e) {
  var t = e.state,
    n = e.options,
    l = e.name
  if (!t.modifiersData[l]._skip) {
    for (
      var a = n.mainAxis,
        s = a === void 0 ? !0 : a,
        r = n.altAxis,
        i = r === void 0 ? !0 : r,
        u = n.fallbackPlacements,
        f = n.padding,
        m = n.boundary,
        p = n.rootBoundary,
        h = n.altBoundary,
        c = n.flipVariations,
        d = c === void 0 ? !0 : c,
        v = n.allowedAutoPlacements,
        y = t.options.placement,
        T = xt(y),
        E = T === y,
        g = u || (E || !d ? [yo(y)] : Ec(y)),
        $ = [y].concat(g).reduce(function (le, ie) {
          return le.concat(
            xt(ie) === kl
              ? Sc(t, {
                  placement: ie,
                  boundary: m,
                  rootBoundary: p,
                  padding: f,
                  flipVariations: d,
                  allowedAutoPlacements: v
                })
              : ie
          )
        }, []),
        k = t.rects.reference,
        P = t.rects.popper,
        L = new Map(),
        V = !0,
        x = $[0],
        Y = 0;
      Y < $.length;
      Y++
    ) {
      var X = $[Y],
        te = xt(X),
        _ = Bn(X) === Mn,
        D = [Ct, Vt].indexOf(te) >= 0,
        U = D ? 'width' : 'height',
        J = Zn(t, { placement: X, boundary: m, rootBoundary: p, altBoundary: h, padding: f }),
        B = D ? (_ ? Bt : St) : _ ? Vt : Ct
      k[U] > P[U] && (B = yo(B))
      var R = yo(B),
        O = []
      if (
        (s && O.push(J[te] <= 0),
        i && O.push(J[B] <= 0, J[R] <= 0),
        O.every(function (le) {
          return le
        }))
      ) {
        ;(x = X), (V = !1)
        break
      }
      L.set(X, O)
    }
    if (V)
      for (
        var q = d ? 3 : 1,
          ee = function (le) {
            var ie = $.find(function (se) {
              var ae = L.get(se)
              if (ae)
                return ae.slice(0, le).every(function (ue) {
                  return ue
                })
            })
            if (ie) return (x = ie), 'break'
          },
          M = q;
        M > 0;
        M--
      ) {
        var j = ee(M)
        if (j === 'break') break
      }
    t.placement !== x && ((t.modifiersData[l]._skip = !0), (t.placement = x), (t.reset = !0))
  }
}
var Tc = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: $c,
  requiresIfExists: ['offset'],
  data: { _skip: !1 }
}
function ia(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    }
  )
}
function ua(e) {
  return [Ct, Bt, Vt, St].some(function (t) {
    return e[t] >= 0
  })
}
function Ic(e) {
  var t = e.state,
    n = e.name,
    l = t.rects.reference,
    a = t.rects.popper,
    s = t.modifiersData.preventOverflow,
    r = Zn(t, { elementContext: 'reference' }),
    i = Zn(t, { altBoundary: !0 }),
    u = ia(r, l),
    f = ia(i, a, s),
    m = ua(u),
    p = ua(f)
  ;(t.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: f,
    isReferenceHidden: m,
    hasPopperEscaped: p
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': m,
      'data-popper-escaped': p
    }))
}
var Pc = { name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: Ic }
function Oc(e, t, n) {
  var l = xt(e),
    a = [St, Ct].indexOf(l) >= 0 ? -1 : 1,
    s = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
    r = s[0],
    i = s[1]
  return (
    (r = r || 0), (i = (i || 0) * a), [St, Bt].indexOf(l) >= 0 ? { x: i, y: r } : { x: r, y: i }
  )
}
function Mc(e) {
  var t = e.state,
    n = e.options,
    l = e.name,
    a = n.offset,
    s = a === void 0 ? [0, 0] : a,
    r = Kn.reduce(function (m, p) {
      return (m[p] = Oc(p, t.rects, s)), m
    }, {}),
    i = r[t.placement],
    u = i.x,
    f = i.y
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += u), (t.modifiersData.popperOffsets.y += f)),
    (t.modifiersData[l] = r)
}
var _c = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: Mc }
function Nc(e) {
  var t = e.state,
    n = e.name
  t.modifiersData[n] = Bs({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement
  })
}
var As = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: Nc, data: {} }
function Vc(e) {
  return e === 'x' ? 'y' : 'x'
}
function Bc(e) {
  var t = e.state,
    n = e.options,
    l = e.name,
    a = n.mainAxis,
    s = a === void 0 ? !0 : a,
    r = n.altAxis,
    i = r === void 0 ? !1 : r,
    u = n.boundary,
    f = n.rootBoundary,
    m = n.altBoundary,
    p = n.padding,
    h = n.tether,
    c = h === void 0 ? !0 : h,
    d = n.tetherOffset,
    v = d === void 0 ? 0 : d,
    y = Zn(t, { boundary: u, rootBoundary: f, padding: p, altBoundary: m }),
    T = xt(t.placement),
    E = Bn(t.placement),
    g = !E,
    $ = El(T),
    k = Vc($),
    P = t.modifiersData.popperOffsets,
    L = t.rects.reference,
    V = t.rects.popper,
    x = typeof v == 'function' ? v(Object.assign({}, t.rects, { placement: t.placement })) : v,
    Y =
      typeof x == 'number'
        ? { mainAxis: x, altAxis: x }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, x),
    X = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    te = { x: 0, y: 0 }
  if (P) {
    if (s) {
      var _,
        D = $ === 'y' ? Ct : St,
        U = $ === 'y' ? Vt : Bt,
        J = $ === 'y' ? 'height' : 'width',
        B = P[$],
        R = B + y[D],
        O = B - y[U],
        q = c ? -V[J] / 2 : 0,
        ee = E === Mn ? L[J] : V[J],
        M = E === Mn ? -V[J] : -L[J],
        j = t.elements.arrow,
        le = c && j ? Sl(j) : { width: 0, height: 0 },
        ie = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Ps(),
        se = ie[D],
        ae = ie[U],
        ue = xn(0, L[J], le[J]),
        ye = g ? L[J] / 2 - q - ue - se - Y.mainAxis : ee - ue - se - Y.mainAxis,
        pe = g ? -L[J] / 2 + q + ue + ae + Y.mainAxis : M + ue + ae + Y.mainAxis,
        Me = t.elements.arrow && so(t.elements.arrow),
        Ne = Me ? ($ === 'y' ? Me.clientTop || 0 : Me.clientLeft || 0) : 0,
        He = (_ = X == null ? void 0 : X[$]) != null ? _ : 0,
        et = B + ye - He - Ne,
        Et = B + pe - He,
        Ge = xn(c ? Io(R, et) : R, B, c ? vn(O, Et) : O)
      ;(P[$] = Ge), (te[$] = Ge - B)
    }
    if (i) {
      var Te,
        it = $ === 'x' ? Ct : St,
        ze = $ === 'x' ? Vt : Bt,
        Z = P[k],
        Ie = k === 'y' ? 'height' : 'width',
        Xe = Z + y[it],
        tt = Z - y[ze],
        st = [Ct, St].indexOf(T) !== -1,
        wt = (Te = X == null ? void 0 : X[k]) != null ? Te : 0,
        pt = st ? Xe : Z - L[Ie] - V[Ie] - wt + Y.altAxis,
        rt = st ? Z + L[Ie] + V[Ie] - wt - Y.altAxis : tt,
        K = c && st ? rc(pt, Z, rt) : xn(c ? pt : Xe, Z, c ? rt : tt)
      ;(P[k] = K), (te[k] = K - Z)
    }
    t.modifiersData[l] = te
  }
}
var Ac = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: Bc,
  requiresIfExists: ['offset']
}
function Lc(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
}
function Dc(e) {
  return e === Wt(e) || !Nt(e) ? $l(e) : Lc(e)
}
function Rc(e) {
  var t = e.getBoundingClientRect(),
    n = Nn(t.width) / e.offsetWidth || 1,
    l = Nn(t.height) / e.offsetHeight || 1
  return n !== 1 || l !== 1
}
function Fc(e, t, n) {
  n === void 0 && (n = !1)
  var l = Nt(t),
    a = Nt(t) && Rc(t),
    s = rn(t),
    r = Vn(e, a),
    i = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 }
  return (
    (l || (!l && !n)) &&
      ((Gt(t) !== 'body' || Il(s)) && (i = Dc(t)),
      Nt(t) ? ((u = Vn(t, !0)), (u.x += t.clientLeft), (u.y += t.clientTop)) : s && (u.x = Tl(s))),
    {
      x: r.left + i.scrollLeft - u.x,
      y: r.top + i.scrollTop - u.y,
      width: r.width,
      height: r.height
    }
  )
}
function zc(e) {
  var t = new Map(),
    n = new Set(),
    l = []
  e.forEach(function (s) {
    t.set(s.name, s)
  })
  function a(s) {
    n.add(s.name)
    var r = [].concat(s.requires || [], s.requiresIfExists || [])
    r.forEach(function (i) {
      if (!n.has(i)) {
        var u = t.get(i)
        u && a(u)
      }
    }),
      l.push(s)
  }
  return (
    e.forEach(function (s) {
      n.has(s.name) || a(s)
    }),
    l
  )
}
function Kc(e) {
  var t = zc(e)
  return nc.reduce(function (n, l) {
    return n.concat(
      t.filter(function (a) {
        return a.phase === l
      })
    )
  }, [])
}
function Hc(e) {
  var t
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            ;(t = void 0), n(e())
          })
        })),
      t
    )
  }
}
function Wc(e) {
  var t = e.reduce(function (n, l) {
    var a = n[l.name]
    return (
      (n[l.name] = a
        ? Object.assign({}, a, l, {
            options: Object.assign({}, a.options, l.options),
            data: Object.assign({}, a.data, l.data)
          })
        : l),
      n
    )
  }, {})
  return Object.keys(t).map(function (n) {
    return t[n]
  })
}
var ca = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
function da() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  return !t.some(function (l) {
    return !(l && typeof l.getBoundingClientRect == 'function')
  })
}
function Pl(e) {
  e === void 0 && (e = {})
  var t = e,
    n = t.defaultModifiers,
    l = n === void 0 ? [] : n,
    a = t.defaultOptions,
    s = a === void 0 ? ca : a
  return function (r, i, u) {
    u === void 0 && (u = s)
    var f = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, ca, s),
        modifiersData: {},
        elements: { reference: r, popper: i },
        attributes: {},
        styles: {}
      },
      m = [],
      p = !1,
      h = {
        state: f,
        setOptions: function (v) {
          var y = typeof v == 'function' ? v(f.options) : v
          d(),
            (f.options = Object.assign({}, s, f.options, y)),
            (f.scrollParents = {
              reference: _n(r) ? Un(r) : r.contextElement ? Un(r.contextElement) : [],
              popper: Un(i)
            })
          var T = Kc(Wc([].concat(l, f.options.modifiers)))
          return (
            (f.orderedModifiers = T.filter(function (E) {
              return E.enabled
            })),
            c(),
            h.update()
          )
        },
        forceUpdate: function () {
          if (!p) {
            var v = f.elements,
              y = v.reference,
              T = v.popper
            if (da(y, T)) {
              ;(f.rects = {
                reference: Fc(y, so(T), f.options.strategy === 'fixed'),
                popper: Sl(T)
              }),
                (f.reset = !1),
                (f.placement = f.options.placement),
                f.orderedModifiers.forEach(function (V) {
                  return (f.modifiersData[V.name] = Object.assign({}, V.data))
                })
              for (var E = 0; E < f.orderedModifiers.length; E++) {
                if (f.reset === !0) {
                  ;(f.reset = !1), (E = -1)
                  continue
                }
                var g = f.orderedModifiers[E],
                  $ = g.fn,
                  k = g.options,
                  P = k === void 0 ? {} : k,
                  L = g.name
                typeof $ == 'function' &&
                  (f = $({ state: f, options: P, name: L, instance: h }) || f)
              }
            }
          }
        },
        update: Hc(function () {
          return new Promise(function (v) {
            h.forceUpdate(), v(f)
          })
        }),
        destroy: function () {
          d(), (p = !0)
        }
      }
    if (!da(r, i)) return h
    h.setOptions(u).then(function (v) {
      !p && u.onFirstUpdate && u.onFirstUpdate(v)
    })
    function c() {
      f.orderedModifiers.forEach(function (v) {
        var y = v.name,
          T = v.options,
          E = T === void 0 ? {} : T,
          g = v.effect
        if (typeof g == 'function') {
          var $ = g({ state: f, name: y, instance: h, options: E }),
            k = function () {}
          m.push($ || k)
        }
      })
    }
    function d() {
      m.forEach(function (v) {
        return v()
      }),
        (m = [])
    }
    return h
  }
}
Pl()
var Yc = [Ns, As, _s, Ts]
Pl({ defaultModifiers: Yc })
var jc = [Ns, As, _s, Ts, _c, Tc, Ac, dc, Pc],
  xc = Pl({ defaultModifiers: jc })
const Ho = 'focus-trap.focus-after-trapped',
  Wo = 'focus-trap.focus-after-released',
  Uc = 'focus-trap.focusout-prevented',
  fa = { cancelable: !0, bubbles: !1 },
  qc = { cancelable: !0, bubbles: !1 },
  pa = 'focusAfterTrapped',
  va = 'focusAfterReleased',
  Ol = Symbol('elFocusTrap'),
  Ml = N(),
  Lo = N(0),
  _l = N(0)
let co = 0
const Ls = e => {
    const t = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: l => {
          const a = l.tagName === 'INPUT' && l.type === 'hidden'
          return l.disabled || l.hidden || a
            ? NodeFilter.FILTER_SKIP
            : l.tabIndex >= 0 || l === document.activeElement
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP
        }
      })
    for (; n.nextNode(); ) t.push(n.currentNode)
    return t
  },
  ma = (e, t) => {
    for (const n of e) if (!Gc(n, t)) return n
  },
  Gc = (e, t) => {
    if (getComputedStyle(e).visibility === 'hidden') return !0
    for (; e; ) {
      if (t && e === t) return !1
      if (getComputedStyle(e).display === 'none') return !0
      e = e.parentElement
    }
    return !1
  },
  Xc = e => {
    const t = Ls(e),
      n = ma(t, e),
      l = ma(t.reverse(), e)
    return [n, l]
  },
  Jc = e => e instanceof HTMLInputElement && 'select' in e,
  tn = (e, t) => {
    if (e && e.focus) {
      const n = document.activeElement
      e.focus({ preventScroll: !0 }),
        (_l.value = window.performance.now()),
        e !== n && Jc(e) && t && e.select()
    }
  }
function ga(e, t) {
  const n = [...e],
    l = e.indexOf(t)
  return l !== -1 && n.splice(l, 1), n
}
const Zc = () => {
    let e = []
    return {
      push: l => {
        const a = e[0]
        a && l !== a && a.pause(), (e = ga(e, l)), e.unshift(l)
      },
      remove: l => {
        var a, s
        ;(e = ga(e, l)), (s = (a = e[0]) == null ? void 0 : a.resume) == null || s.call(a)
      }
    }
  },
  Qc = (e, t = !1) => {
    const n = document.activeElement
    for (const l of e) if ((tn(l, t), document.activeElement !== n)) return
  },
  ha = Zc(),
  ed = () => Lo.value > _l.value,
  fo = () => {
    ;(Ml.value = 'pointer'), (Lo.value = window.performance.now())
  },
  ba = () => {
    ;(Ml.value = 'keyboard'), (Lo.value = window.performance.now())
  },
  td = () => (
    De(() => {
      co === 0 &&
        (document.addEventListener('mousedown', fo),
        document.addEventListener('touchstart', fo),
        document.addEventListener('keydown', ba)),
        co++
    }),
    It(() => {
      co--,
        co <= 0 &&
          (document.removeEventListener('mousedown', fo),
          document.removeEventListener('touchstart', fo),
          document.removeEventListener('keydown', ba))
    }),
    { focusReason: Ml, lastUserFocusTimestamp: Lo, lastAutomatedFocusTimestamp: _l }
  ),
  po = e => new CustomEvent(Uc, { ...qc, detail: e }),
  nd = Q({
    name: 'ElFocusTrap',
    inheritAttrs: !1,
    props: {
      loop: Boolean,
      trapped: Boolean,
      focusTrapEl: Object,
      focusStartEl: { type: [Object, String], default: 'first' }
    },
    emits: [pa, va, 'focusin', 'focusout', 'focusout-prevented', 'release-requested'],
    setup(e, { emit: t }) {
      const n = N()
      let l, a
      const { focusReason: s } = td()
      Ji(d => {
        e.trapped && !r.paused && t('release-requested', d)
      })
      const r = {
          paused: !1,
          pause() {
            this.paused = !0
          },
          resume() {
            this.paused = !1
          }
        },
        i = d => {
          if ((!e.loop && !e.trapped) || r.paused) return
          const { key: v, altKey: y, ctrlKey: T, metaKey: E, currentTarget: g, shiftKey: $ } = d,
            { loop: k } = e,
            P = v === ke.tab && !y && !T && !E,
            L = document.activeElement
          if (P && L) {
            const V = g,
              [x, Y] = Xc(V)
            if (x && Y) {
              if (!$ && L === Y) {
                const te = po({ focusReason: s.value })
                t('focusout-prevented', te),
                  te.defaultPrevented || (d.preventDefault(), k && tn(x, !0))
              } else if ($ && [x, V].includes(L)) {
                const te = po({ focusReason: s.value })
                t('focusout-prevented', te),
                  te.defaultPrevented || (d.preventDefault(), k && tn(Y, !0))
              }
            } else if (L === V) {
              const te = po({ focusReason: s.value })
              t('focusout-prevented', te), te.defaultPrevented || d.preventDefault()
            }
          }
        }
      Fe(Ol, { focusTrapRef: n, onKeydown: i }),
        ce(
          () => e.focusTrapEl,
          d => {
            d && (n.value = d)
          },
          { immediate: !0 }
        ),
        ce([n], ([d], [v]) => {
          d &&
            (d.addEventListener('keydown', i),
            d.addEventListener('focusin', m),
            d.addEventListener('focusout', p)),
            v &&
              (v.removeEventListener('keydown', i),
              v.removeEventListener('focusin', m),
              v.removeEventListener('focusout', p))
        })
      const u = d => {
          t(pa, d)
        },
        f = d => t(va, d),
        m = d => {
          const v = o(n)
          if (!v) return
          const y = d.target,
            T = d.relatedTarget,
            E = y && v.contains(y)
          e.trapped || (T && v.contains(T)) || (l = T),
            E && t('focusin', d),
            !r.paused && e.trapped && (E ? (a = y) : tn(a, !0))
        },
        p = d => {
          const v = o(n)
          if (!(r.paused || !v))
            if (e.trapped) {
              const y = d.relatedTarget
              !_t(y) &&
                !v.contains(y) &&
                setTimeout(() => {
                  if (!r.paused && e.trapped) {
                    const T = po({ focusReason: s.value })
                    t('focusout-prevented', T), T.defaultPrevented || tn(a, !0)
                  }
                }, 0)
            } else {
              const y = d.target
              ;(y && v.contains(y)) || t('focusout', d)
            }
        }
      async function h() {
        await we()
        const d = o(n)
        if (d) {
          ha.push(r)
          const v = d.contains(document.activeElement) ? l : document.activeElement
          if (((l = v), !d.contains(v))) {
            const T = new Event(Ho, fa)
            d.addEventListener(Ho, u),
              d.dispatchEvent(T),
              T.defaultPrevented ||
                we(() => {
                  let E = e.focusStartEl
                  xe(E) || (tn(E), document.activeElement !== E && (E = 'first')),
                    E === 'first' && Qc(Ls(d), !0),
                    (document.activeElement === v || E === 'container') && tn(d)
                })
          }
        }
      }
      function c() {
        const d = o(n)
        if (d) {
          d.removeEventListener(Ho, u)
          const v = new CustomEvent(Wo, { ...fa, detail: { focusReason: s.value } })
          d.addEventListener(Wo, f),
            d.dispatchEvent(v),
            !v.defaultPrevented &&
              (s.value == 'keyboard' || !ed()) &&
              tn(l != null ? l : document.body, !0),
            d.removeEventListener(Wo, u),
            ha.remove(r)
        }
      }
      return (
        De(() => {
          e.trapped && h(),
            ce(
              () => e.trapped,
              d => {
                d ? h() : c()
              }
            )
        }),
        It(() => {
          e.trapped && c()
        }),
        { onKeydown: i }
      )
    }
  })
function od(e, t, n, l, a, s) {
  return fe(e.$slots, 'default', { handleKeydown: e.onKeydown })
}
var Nl = me(nd, [
  ['render', od],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue'
  ]
])
const ld = ['fixed', 'absolute'],
  ad = ge({
    boundariesPadding: { type: Number, default: 0 },
    fallbackPlacements: { type: re(Array), default: void 0 },
    gpuAcceleration: { type: Boolean, default: !0 },
    offset: { type: Number, default: 12 },
    placement: { type: String, values: Kn, default: 'bottom' },
    popperOptions: { type: re(Object), default: () => ({}) },
    strategy: { type: String, values: ld, default: 'absolute' }
  }),
  Ds = ge({
    ...ad,
    id: String,
    style: { type: re([String, Array, Object]) },
    className: { type: re([String, Array, Object]) },
    effect: { type: String, default: 'dark' },
    visible: Boolean,
    enterable: { type: Boolean, default: !0 },
    pure: Boolean,
    focusOnShow: { type: Boolean, default: !1 },
    trapping: { type: Boolean, default: !1 },
    popperClass: { type: re([String, Array, Object]) },
    popperStyle: { type: re([String, Array, Object]) },
    referenceEl: { type: re(Object) },
    triggerTargetEl: { type: re(Object) },
    stopPopperMouseEvent: { type: Boolean, default: !0 },
    ariaLabel: { type: String, default: void 0 },
    virtualTriggering: Boolean,
    zIndex: Number
  }),
  sd = {
    mouseenter: e => e instanceof MouseEvent,
    mouseleave: e => e instanceof MouseEvent,
    focus: () => !0,
    blur: () => !0,
    close: () => !0
  },
  ya = (e, t) => {
    const { placement: n, strategy: l, popperOptions: a } = e,
      s = { placement: n, strategy: l, ...a, modifiers: id(e) }
    return ud(s, t), cd(s, a == null ? void 0 : a.modifiers), s
  },
  rd = e => {
    if (!!Re) return Xa(e)
  }
function id(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: l } = e
  return [
    { name: 'offset', options: { offset: [0, t != null ? t : 12] } },
    { name: 'preventOverflow', options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } },
    { name: 'flip', options: { padding: 5, fallbackPlacements: l } },
    { name: 'computeStyles', options: { gpuAcceleration: n, adaptive: n } }
  ]
}
function ud(e, { arrowEl: t, arrowOffset: n }) {
  e.modifiers.push({ name: 'arrow', options: { element: t, padding: n != null ? n : 5 } })
}
function cd(e, t) {
  t && (e.modifiers = [...e.modifiers, ...(t != null ? t : [])])
}
const dd = Q({ name: 'ElPopperContent' }),
  fd = Q({
    ...dd,
    props: Ds,
    emits: sd,
    setup(e, { expose: t, emit: n }) {
      const l = e,
        { popperInstanceRef: a, contentRef: s, triggerRef: r, role: i } = Ce(bl, void 0),
        u = Ce(hn, void 0),
        { nextZIndex: f } = lo(),
        m = ve('popper'),
        p = N(),
        h = N('first'),
        c = N(),
        d = N()
      Fe(vs, { arrowRef: c, arrowOffset: d }),
        u &&
          (u.addInputId || u.removeInputId) &&
          Fe(hn, { ...u, addInputId: ln, removeInputId: ln })
      const v = N(l.zIndex || f()),
        y = N(!1)
      let T
      const E = S(() => rd(l.referenceEl) || o(r)),
        g = S(() => [{ zIndex: o(v) }, l.popperStyle]),
        $ = S(() => [m.b(), m.is('pure', l.pure), m.is(l.effect), l.popperClass]),
        k = S(() => (i && i.value === 'dialog' ? 'false' : void 0)),
        P = ({ referenceEl: D, popperContentEl: U, arrowEl: J }) => {
          const B = ya(l, { arrowEl: J, arrowOffset: o(d) })
          return xc(D, U, B)
        },
        L = (D = !0) => {
          var U
          ;(U = o(a)) == null || U.update(), D && (v.value = l.zIndex || f())
        },
        V = () => {
          var D, U
          const J = { name: 'eventListeners', enabled: l.visible }
          ;(U = (D = o(a)) == null ? void 0 : D.setOptions) == null ||
            U.call(D, B => ({ ...B, modifiers: [...(B.modifiers || []), J] })),
            L(!1),
            l.visible && l.focusOnShow ? (y.value = !0) : l.visible === !1 && (y.value = !1)
        },
        x = () => {
          n('focus')
        },
        Y = D => {
          var U
          ;((U = D.detail) == null ? void 0 : U.focusReason) !== 'pointer' &&
            ((h.value = 'first'), n('blur'))
        },
        X = D => {
          l.visible && !y.value && (D.target && (h.value = D.target), (y.value = !0))
        },
        te = D => {
          l.trapping || (D.detail.focusReason === 'pointer' && D.preventDefault(), (y.value = !1))
        },
        _ = () => {
          ;(y.value = !1), n('close')
        }
      return (
        De(() => {
          let D
          ce(
            E,
            U => {
              var J
              D == null || D()
              const B = o(a)
              if (((J = B == null ? void 0 : B.destroy) == null || J.call(B), U)) {
                const R = o(p)
                ;(s.value = R),
                  (a.value = P({ referenceEl: U, popperContentEl: R, arrowEl: o(c) })),
                  (D = ce(
                    () => U.getBoundingClientRect(),
                    () => L(),
                    { immediate: !0 }
                  ))
              } else a.value = void 0
            },
            { immediate: !0 }
          ),
            ce(
              () => l.triggerTargetEl,
              (U, J) => {
                T == null || T(), (T = void 0)
                const B = o(U || p.value),
                  R = o(J || p.value)
                gn(B) &&
                  (T = ce(
                    [i, () => l.ariaLabel, k, () => l.id],
                    O => {
                      ;['role', 'aria-label', 'aria-modal', 'id'].forEach((q, ee) => {
                        _t(O[ee]) ? B.removeAttribute(q) : B.setAttribute(q, O[ee])
                      })
                    },
                    { immediate: !0 }
                  )),
                  R !== B &&
                    gn(R) &&
                    ['role', 'aria-label', 'aria-modal', 'id'].forEach(O => {
                      R.removeAttribute(O)
                    })
              },
              { immediate: !0 }
            ),
            ce(() => l.visible, V, { immediate: !0 }),
            ce(
              () => ya(l, { arrowEl: o(c), arrowOffset: o(d) }),
              U => {
                var J
                return (J = a.value) == null ? void 0 : J.setOptions(U)
              }
            )
        }),
        It(() => {
          T == null || T(), (T = void 0)
        }),
        t({ popperContentRef: p, popperInstanceRef: a, updatePopper: L, contentStyle: g }),
        (D, U) => (
          C(),
          A(
            'div',
            {
              ref_key: 'popperContentRef',
              ref: p,
              style: $e(o(g)),
              class: w(o($)),
              tabindex: '-1',
              onMouseenter: U[0] || (U[0] = J => D.$emit('mouseenter', J)),
              onMouseleave: U[1] || (U[1] = J => D.$emit('mouseleave', J))
            },
            [
              H(
                o(Nl),
                {
                  trapped: y.value,
                  'trap-on-focus-in': !0,
                  'focus-trap-el': p.value,
                  'focus-start-el': h.value,
                  onFocusAfterTrapped: x,
                  onFocusAfterReleased: Y,
                  onFocusin: X,
                  onFocusoutPrevented: te,
                  onReleaseRequested: _
                },
                { default: W(() => [fe(D.$slots, 'default')]), _: 3 },
                8,
                ['trapped', 'focus-trap-el', 'focus-start-el']
              )
            ],
            38
          )
        )
      )
    }
  })
var pd = me(fd, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue'
  ]
])
const vd = Ue(Du),
  md = ve('tooltip'),
  Do = ge({
    ...tu,
    ...Ds,
    appendTo: { type: re([String, Object]), default: bs },
    content: { type: String, default: '' },
    rawContent: { type: Boolean, default: !1 },
    persistent: Boolean,
    ariaLabel: String,
    visible: { type: re(Boolean), default: null },
    transition: { type: String, default: `${md.namespace.value}-fade-in-linear` },
    teleported: { type: Boolean, default: !0 },
    disabled: { type: Boolean }
  }),
  Vl = ge({
    ...Es,
    disabled: Boolean,
    trigger: { type: re([String, Array]), default: 'hover' },
    triggerKeys: { type: re(Array), default: () => [ke.enter, ke.space] }
  }),
  { useModelToggleProps: gd, useModelToggleEmits: hd, useModelToggle: bd } = Gi('visible'),
  yd = ge({
    ...ws,
    ...gd,
    ...Do,
    ...Vl,
    ...ks,
    openDelay: { type: Number },
    visibleArrow: { type: Boolean, default: void 0 },
    showArrow: { type: Boolean, default: !0 }
  }),
  wd = [...hd, 'before-show', 'before-hide', 'show', 'hide', 'open', 'close'],
  kd = (e, t) => (Je(e) ? e.includes(t) : e === t),
  wn = (e, t, n) => l => {
    kd(o(e), t) && n(l)
  },
  Cd = Q({ name: 'ElTooltipTrigger' }),
  Sd = Q({
    ...Cd,
    props: Vl,
    setup(e, { expose: t }) {
      const n = e,
        l = ve('tooltip'),
        { controlled: a, id: s, open: r, onOpen: i, onClose: u, onToggle: f } = Ce(Vo, void 0),
        m = N(null),
        p = () => {
          if (o(a) || n.disabled) return !0
        },
        h = Qe(n, 'trigger'),
        c = Ze(p, wn(h, 'hover', i)),
        d = Ze(p, wn(h, 'hover', u)),
        v = Ze(
          p,
          wn(h, 'click', $ => {
            $.button === 0 && f($)
          })
        ),
        y = Ze(p, wn(h, 'focus', i)),
        T = Ze(p, wn(h, 'focus', u)),
        E = Ze(
          p,
          wn(h, 'contextmenu', $ => {
            $.preventDefault(), f($)
          })
        ),
        g = Ze(p, $ => {
          const { code: k } = $
          n.triggerKeys.includes(k) && ($.preventDefault(), f($))
        })
      return (
        t({ triggerRef: m }),
        ($, k) => (
          C(),
          oe(
            o(Yu),
            {
              id: o(s),
              'virtual-ref': $.virtualRef,
              open: o(r),
              'virtual-triggering': $.virtualTriggering,
              class: w(o(l).e('trigger')),
              onBlur: o(T),
              onClick: o(v),
              onContextmenu: o(E),
              onFocus: o(y),
              onMouseenter: o(c),
              onMouseleave: o(d),
              onKeydown: o(g)
            },
            { default: W(() => [fe($.$slots, 'default')]), _: 3 },
            8,
            [
              'id',
              'virtual-ref',
              'open',
              'virtual-triggering',
              'class',
              'onBlur',
              'onClick',
              'onContextmenu',
              'onFocus',
              'onMouseenter',
              'onMouseleave',
              'onKeydown'
            ]
          )
        )
      )
    }
  })
var Ed = me(Sd, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue'
  ]
])
const $d = Q({ name: 'ElTooltipContent', inheritAttrs: !1 }),
  Td = Q({
    ...$d,
    props: Do,
    setup(e, { expose: t }) {
      const n = e,
        l = N(null),
        a = N(!1),
        {
          controlled: s,
          id: r,
          open: i,
          trigger: u,
          onClose: f,
          onOpen: m,
          onShow: p,
          onHide: h,
          onBeforeShow: c,
          onBeforeHide: d
        } = Ce(Vo, void 0),
        v = S(() => n.persistent)
      It(() => {
        a.value = !0
      })
      const y = S(() => (o(v) ? !0 : o(i))),
        T = S(() => (n.disabled ? !1 : o(i))),
        E = S(() => {
          var _
          return (_ = n.style) != null ? _ : {}
        }),
        g = S(() => !o(i)),
        $ = () => {
          h()
        },
        k = () => {
          if (o(s)) return !0
        },
        P = Ze(k, () => {
          n.enterable && o(u) === 'hover' && m()
        }),
        L = Ze(k, () => {
          o(u) === 'hover' && f()
        }),
        V = () => {
          var _, D
          ;(D = (_ = l.value) == null ? void 0 : _.updatePopper) == null || D.call(_),
            c == null || c()
        },
        x = () => {
          d == null || d()
        },
        Y = () => {
          p(),
            (te = Ja(
              S(() => {
                var _
                return (_ = l.value) == null ? void 0 : _.popperContentRef
              }),
              () => {
                if (o(s)) return
                o(u) !== 'hover' && f()
              }
            ))
        },
        X = () => {
          n.virtualTriggering || f()
        }
      let te
      return (
        ce(
          () => o(i),
          _ => {
            _ || te == null || te()
          },
          { flush: 'post' }
        ),
        ce(
          () => n.content,
          () => {
            var _, D
            ;(D = (_ = l.value) == null ? void 0 : _.updatePopper) == null || D.call(_)
          }
        ),
        t({ contentRef: l }),
        (_, D) => (
          C(),
          oe(
            Mo,
            { disabled: !_.teleported, to: _.appendTo },
            [
              H(
                Pt,
                {
                  name: _.transition,
                  onAfterLeave: $,
                  onBeforeEnter: V,
                  onAfterEnter: Y,
                  onBeforeLeave: x
                },
                {
                  default: W(() => [
                    o(y)
                      ? Ve(
                          (C(),
                          oe(
                            o(pd),
                            bt({ key: 0, id: o(r), ref_key: 'contentRef', ref: l }, _.$attrs, {
                              'aria-label': _.ariaLabel,
                              'aria-hidden': o(g),
                              'boundaries-padding': _.boundariesPadding,
                              'fallback-placements': _.fallbackPlacements,
                              'gpu-acceleration': _.gpuAcceleration,
                              offset: _.offset,
                              placement: _.placement,
                              'popper-options': _.popperOptions,
                              strategy: _.strategy,
                              effect: _.effect,
                              enterable: _.enterable,
                              pure: _.pure,
                              'popper-class': _.popperClass,
                              'popper-style': [_.popperStyle, o(E)],
                              'reference-el': _.referenceEl,
                              'trigger-target-el': _.triggerTargetEl,
                              visible: o(T),
                              'z-index': _.zIndex,
                              onMouseenter: o(P),
                              onMouseleave: o(L),
                              onBlur: X,
                              onClose: o(f)
                            }),
                            {
                              default: W(() => [
                                G(' Workaround bug #6378 '),
                                a.value ? G('v-if', !0) : fe(_.$slots, 'default', { key: 0 })
                              ]),
                              _: 3
                            },
                            16,
                            [
                              'id',
                              'aria-label',
                              'aria-hidden',
                              'boundaries-padding',
                              'fallback-placements',
                              'gpu-acceleration',
                              'offset',
                              'placement',
                              'popper-options',
                              'strategy',
                              'effect',
                              'enterable',
                              'pure',
                              'popper-class',
                              'popper-style',
                              'reference-el',
                              'trigger-target-el',
                              'visible',
                              'z-index',
                              'onMouseenter',
                              'onMouseleave',
                              'onClose'
                            ]
                          )),
                          [[ot, o(T)]]
                        )
                      : G('v-if', !0)
                  ]),
                  _: 3
                },
                8,
                ['name']
              )
            ],
            8,
            ['disabled', 'to']
          )
        )
      )
    }
  })
var Id = me(Td, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue'
  ]
])
const Pd = ['innerHTML'],
  Od = { key: 1 },
  Md = Q({ name: 'ElTooltip' }),
  _d = Q({
    ...Md,
    props: yd,
    emits: wd,
    setup(e, { expose: t, emit: n }) {
      const l = e
      eu()
      const a = S(() => (on(l.openDelay), l.openDelay || l.showAfter)),
        s = S(() => (on(l.visibleArrow), Mt(l.visibleArrow) ? l.visibleArrow : l.showArrow)),
        r = an(),
        i = N(),
        u = N(),
        f = () => {
          var g
          const $ = o(i)
          $ && ((g = $.popperInstanceRef) == null || g.update())
        },
        m = N(!1),
        p = N(),
        { show: h, hide: c, hasUpdateHandler: d } = bd({ indicator: m, toggleReason: p }),
        { onOpen: v, onClose: y } = nu({
          showAfter: a,
          hideAfter: Qe(l, 'hideAfter'),
          open: h,
          close: c
        }),
        T = S(() => Mt(l.visible) && !d.value)
      Fe(Vo, {
        controlled: T,
        id: r,
        open: Ha(m),
        trigger: Qe(l, 'trigger'),
        onOpen: g => {
          v(g)
        },
        onClose: g => {
          y(g)
        },
        onToggle: g => {
          o(m) ? y(g) : v(g)
        },
        onShow: () => {
          n('show', p.value)
        },
        onHide: () => {
          n('hide', p.value)
        },
        onBeforeShow: () => {
          n('before-show', p.value)
        },
        onBeforeHide: () => {
          n('before-hide', p.value)
        },
        updatePopper: f
      }),
        ce(
          () => l.disabled,
          g => {
            g && m.value && (m.value = !1)
          }
        )
      const E = () => {
        var g, $
        const k =
          ($ = (g = u.value) == null ? void 0 : g.contentRef) == null ? void 0 : $.popperContentRef
        return k && k.contains(document.activeElement)
      }
      return (
        Nr(() => m.value && c()),
        t({
          popperRef: i,
          contentRef: u,
          isFocusInsideContent: E,
          updatePopper: f,
          onOpen: v,
          onClose: y,
          hide: c
        }),
        (g, $) => (
          C(),
          oe(
            o(vd),
            { ref_key: 'popperRef', ref: i, role: g.role },
            {
              default: W(() => [
                H(
                  Ed,
                  {
                    disabled: g.disabled,
                    trigger: g.trigger,
                    'trigger-keys': g.triggerKeys,
                    'virtual-ref': g.virtualRef,
                    'virtual-triggering': g.virtualTriggering
                  },
                  {
                    default: W(() => [
                      g.$slots.default ? fe(g.$slots, 'default', { key: 0 }) : G('v-if', !0)
                    ]),
                    _: 3
                  },
                  8,
                  ['disabled', 'trigger', 'trigger-keys', 'virtual-ref', 'virtual-triggering']
                ),
                H(
                  Id,
                  {
                    ref_key: 'contentRef',
                    ref: u,
                    'aria-label': g.ariaLabel,
                    'boundaries-padding': g.boundariesPadding,
                    content: g.content,
                    disabled: g.disabled,
                    effect: g.effect,
                    enterable: g.enterable,
                    'fallback-placements': g.fallbackPlacements,
                    'hide-after': g.hideAfter,
                    'gpu-acceleration': g.gpuAcceleration,
                    offset: g.offset,
                    persistent: g.persistent,
                    'popper-class': g.popperClass,
                    'popper-style': g.popperStyle,
                    placement: g.placement,
                    'popper-options': g.popperOptions,
                    pure: g.pure,
                    'raw-content': g.rawContent,
                    'reference-el': g.referenceEl,
                    'trigger-target-el': g.triggerTargetEl,
                    'show-after': o(a),
                    strategy: g.strategy,
                    teleported: g.teleported,
                    transition: g.transition,
                    'virtual-triggering': g.virtualTriggering,
                    'z-index': g.zIndex,
                    'append-to': g.appendTo
                  },
                  {
                    default: W(() => [
                      fe(g.$slots, 'content', {}, () => [
                        g.rawContent
                          ? (C(), A('span', { key: 0, innerHTML: g.content }, null, 8, Pd))
                          : (C(), A('span', Od, he(g.content), 1))
                      ]),
                      o(s)
                        ? (C(),
                          oe(o(zu), { key: 0, 'arrow-offset': g.arrowOffset }, null, 8, [
                            'arrow-offset'
                          ]))
                        : G('v-if', !0)
                    ]),
                    _: 3
                  },
                  8,
                  [
                    'aria-label',
                    'boundaries-padding',
                    'content',
                    'disabled',
                    'effect',
                    'enterable',
                    'fallback-placements',
                    'hide-after',
                    'gpu-acceleration',
                    'offset',
                    'persistent',
                    'popper-class',
                    'popper-style',
                    'placement',
                    'popper-options',
                    'pure',
                    'raw-content',
                    'reference-el',
                    'trigger-target-el',
                    'show-after',
                    'strategy',
                    'teleported',
                    'transition',
                    'virtual-triggering',
                    'z-index',
                    'append-to'
                  ]
                )
              ]),
              _: 3
            },
            8,
            ['role']
          )
        )
      )
    }
  })
var Nd = me(_d, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue'
  ]
])
const ro = Ue(Nd),
  Vd = {
    visibilityHeight: { type: Number, default: 200 },
    target: { type: String, default: '' },
    right: { type: Number, default: 40 },
    bottom: { type: Number, default: 40 }
  },
  Bd = { click: e => e instanceof MouseEvent },
  Ad = (e, t, n) => {
    const l = Ft(),
      a = Ft(),
      s = N(!1),
      r = () => {
        if (!l.value) return
        const m = Date.now(),
          p = l.value.scrollTop,
          h = () => {
            if (!l.value) return
            const c = (Date.now() - m) / 500
            c < 1
              ? ((l.value.scrollTop = p * (1 - Mi(c))), requestAnimationFrame(h))
              : (l.value.scrollTop = 0)
          }
        requestAnimationFrame(h)
      },
      i = () => {
        l.value && (s.value = l.value.scrollTop >= e.visibilityHeight)
      },
      u = m => {
        r(), t('click', m)
      },
      f = Za(i, 300, !0)
    return (
      Tt(a, 'scroll', f),
      De(() => {
        var m
        ;(a.value = document),
          (l.value = document.documentElement),
          e.target &&
            ((l.value = (m = document.querySelector(e.target)) != null ? m : void 0),
            l.value || bn(n, `target does not exist: ${e.target}`),
            (a.value = l.value))
      }),
      { visible: s, handleClick: u }
    )
  },
  Rs = 'ElBacktop',
  Ld = Q({ name: Rs }),
  Dd = Q({
    ...Ld,
    props: Vd,
    emits: Bd,
    setup(e, { emit: t }) {
      const n = e,
        l = ve('backtop'),
        { handleClick: a, visible: s } = Ad(n, t, Rs),
        r = S(() => ({ right: `${n.right}px`, bottom: `${n.bottom}px` }))
      return (i, u) => (
        C(),
        oe(
          Pt,
          { name: `${o(l).namespace.value}-fade-in` },
          {
            default: W(() => [
              o(s)
                ? (C(),
                  A(
                    'div',
                    {
                      key: 0,
                      style: $e(o(r)),
                      class: w(o(l).b()),
                      onClick: u[0] || (u[0] = Le((...f) => o(a) && o(a)(...f), ['stop']))
                    },
                    [
                      fe(i.$slots, 'default', {}, () => [
                        H(
                          o(be),
                          { class: w(o(l).e('icon')) },
                          { default: W(() => [H(o(Yr))]), _: 1 },
                          8,
                          ['class']
                        )
                      ])
                    ],
                    6
                  ))
                : G('v-if', !0)
            ]),
            _: 3
          },
          8,
          ['name']
        )
      )
    }
  })
var Rd = me(Dd, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue'
  ]
])
const Nb = Ue(Rd),
  Fd = ge({
    value: { type: [String, Number], default: '' },
    max: { type: Number, default: 99 },
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      values: ['primary', 'success', 'warning', 'info', 'danger'],
      default: 'danger'
    }
  }),
  zd = ['textContent'],
  Kd = Q({ name: 'ElBadge' }),
  Hd = Q({
    ...Kd,
    props: Fd,
    setup(e, { expose: t }) {
      const n = e,
        l = ve('badge'),
        a = S(() =>
          n.isDot
            ? ''
            : Be(n.value) && Be(n.max)
            ? n.max < n.value
              ? `${n.max}+`
              : `${n.value}`
            : `${n.value}`
        )
      return (
        t({ content: a }),
        (s, r) => (
          C(),
          A(
            'div',
            { class: w(o(l).b()) },
            [
              fe(s.$slots, 'default'),
              H(
                Pt,
                { name: `${o(l).namespace.value}-zoom-in-center`, persisted: '' },
                {
                  default: W(() => [
                    Ve(
                      F(
                        'sup',
                        {
                          class: w([
                            o(l).e('content'),
                            o(l).em('content', s.type),
                            o(l).is('fixed', !!s.$slots.default),
                            o(l).is('dot', s.isDot)
                          ]),
                          textContent: he(o(a))
                        },
                        null,
                        10,
                        zd
                      ),
                      [[ot, !s.hidden && (o(a) || s.isDot)]]
                    )
                  ]),
                  _: 1
                },
                8,
                ['name']
              )
            ],
            2
          )
        )
      )
    }
  })
var Wd = me(Hd, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue']
])
const Yd = Ue(Wd),
  jd = (e, t) => {
    On(
      {
        from: 'type.text',
        replacement: 'link',
        version: '3.0.0',
        scope: 'props',
        ref: 'https://element-plus.org/en-US/component/button.html#button-attributes'
      },
      S(() => e.type === 'text')
    )
    const n = Ce(rs, void 0),
      l = Zt('button'),
      { form: a } = Qt(),
      s = Ot(S(() => (n == null ? void 0 : n.size))),
      r = yn(),
      i = N(),
      u = Ln(),
      f = S(() => e.type || (n == null ? void 0 : n.type) || ''),
      m = S(() => {
        var c, d, v
        return (v =
          (d = e.autoInsertSpace) != null
            ? d
            : (c = l.value) == null
            ? void 0
            : c.autoInsertSpace) != null
          ? v
          : !1
      }),
      p = S(() => {
        var c
        const d = (c = u.default) == null ? void 0 : c.call(u)
        if (m.value && (d == null ? void 0 : d.length) === 1) {
          const v = d[0]
          if ((v == null ? void 0 : v.type) === Ka) {
            const y = v.children
            return /^\p{Unified_Ideograph}{2}$/u.test(y.trim())
          }
        }
        return !1
      })
    return {
      _disabled: r,
      _size: s,
      _type: f,
      _ref: i,
      shouldAddSpace: p,
      handleClick: c => {
        e.nativeType === 'reset' && (a == null || a.resetFields()), t('click', c)
      }
    }
  },
  xd = ['default', 'primary', 'success', 'warning', 'info', 'danger', 'text', ''],
  Ud = ['button', 'submit', 'reset'],
  nl = ge({
    size: qt,
    disabled: Boolean,
    type: { type: String, values: xd, default: '' },
    icon: { type: ft },
    nativeType: { type: String, values: Ud, default: 'button' },
    loading: Boolean,
    loadingIcon: { type: ft, default: () => ml },
    plain: Boolean,
    text: Boolean,
    link: Boolean,
    bg: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    color: String,
    dark: Boolean,
    autoInsertSpace: { type: Boolean, default: void 0 }
  }),
  qd = { click: e => e instanceof MouseEvent }
function en(e, t = 20) {
  return e.mix('#141414', t).toString()
}
function Gd(e) {
  const t = yn(),
    n = ve('button')
  return S(() => {
    let l = {}
    const a = e.color
    if (a) {
      const s = new pi(a),
        r = e.dark ? s.tint(20).toString() : en(s, 20)
      if (e.plain)
        (l = n.cssVarBlock({
          'bg-color': e.dark ? en(s, 90) : s.tint(90).toString(),
          'text-color': a,
          'border-color': e.dark ? en(s, 50) : s.tint(50).toString(),
          'hover-text-color': `var(${n.cssVarName('color-white')})`,
          'hover-bg-color': a,
          'hover-border-color': a,
          'active-bg-color': r,
          'active-text-color': `var(${n.cssVarName('color-white')})`,
          'active-border-color': r
        })),
          t.value &&
            ((l[n.cssVarBlockName('disabled-bg-color')] = e.dark
              ? en(s, 90)
              : s.tint(90).toString()),
            (l[n.cssVarBlockName('disabled-text-color')] = e.dark
              ? en(s, 50)
              : s.tint(50).toString()),
            (l[n.cssVarBlockName('disabled-border-color')] = e.dark
              ? en(s, 80)
              : s.tint(80).toString()))
      else {
        const i = e.dark ? en(s, 30) : s.tint(30).toString(),
          u = s.isDark()
            ? `var(${n.cssVarName('color-white')})`
            : `var(${n.cssVarName('color-black')})`
        if (
          ((l = n.cssVarBlock({
            'bg-color': a,
            'text-color': u,
            'border-color': a,
            'hover-bg-color': i,
            'hover-text-color': u,
            'hover-border-color': i,
            'active-bg-color': r,
            'active-border-color': r
          })),
          t.value)
        ) {
          const f = e.dark ? en(s, 50) : s.tint(50).toString()
          ;(l[n.cssVarBlockName('disabled-bg-color')] = f),
            (l[n.cssVarBlockName('disabled-text-color')] = e.dark
              ? 'rgba(255, 255, 255, 0.5)'
              : `var(${n.cssVarName('color-white')})`),
            (l[n.cssVarBlockName('disabled-border-color')] = f)
        }
      }
    }
    return l
  })
}
const Xd = ['aria-disabled', 'disabled', 'autofocus', 'type'],
  Jd = Q({ name: 'ElButton' }),
  Zd = Q({
    ...Jd,
    props: nl,
    emits: qd,
    setup(e, { expose: t, emit: n }) {
      const l = e,
        a = Gd(l),
        s = ve('button'),
        { _ref: r, _size: i, _type: u, _disabled: f, shouldAddSpace: m, handleClick: p } = jd(l, n)
      return (
        t({ ref: r, size: i, type: u, disabled: f, shouldAddSpace: m }),
        (h, c) => (
          C(),
          A(
            'button',
            {
              ref_key: '_ref',
              ref: r,
              class: w([
                o(s).b(),
                o(s).m(o(u)),
                o(s).m(o(i)),
                o(s).is('disabled', o(f)),
                o(s).is('loading', h.loading),
                o(s).is('plain', h.plain),
                o(s).is('round', h.round),
                o(s).is('circle', h.circle),
                o(s).is('text', h.text),
                o(s).is('link', h.link),
                o(s).is('has-bg', h.bg)
              ]),
              'aria-disabled': o(f) || h.loading,
              disabled: o(f) || h.loading,
              autofocus: h.autofocus,
              type: h.nativeType,
              style: $e(o(a)),
              onClick: c[0] || (c[0] = (...d) => o(p) && o(p)(...d))
            },
            [
              h.loading
                ? (C(),
                  A(
                    Pe,
                    { key: 0 },
                    [
                      h.$slots.loading
                        ? fe(h.$slots, 'loading', { key: 0 })
                        : (C(),
                          oe(
                            o(be),
                            { key: 1, class: w(o(s).is('loading')) },
                            { default: W(() => [(C(), oe(je(h.loadingIcon)))]), _: 1 },
                            8,
                            ['class']
                          ))
                    ],
                    64
                  ))
                : h.icon || h.$slots.icon
                ? (C(),
                  oe(
                    o(be),
                    { key: 1 },
                    {
                      default: W(() => [
                        h.icon
                          ? (C(), oe(je(h.icon), { key: 0 }))
                          : fe(h.$slots, 'icon', { key: 1 })
                      ]),
                      _: 3
                    }
                  ))
                : G('v-if', !0),
              h.$slots.default
                ? (C(),
                  A(
                    'span',
                    { key: 2, class: w({ [o(s).em('text', 'expand')]: o(m) }) },
                    [fe(h.$slots, 'default')],
                    2
                  ))
                : G('v-if', !0)
            ],
            14,
            Xd
          )
        )
      )
    }
  })
var Qd = me(Zd, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue'
  ]
])
const ef = { size: nl.size, type: nl.type },
  tf = Q({ name: 'ElButtonGroup' }),
  nf = Q({
    ...tf,
    props: ef,
    setup(e) {
      const t = e
      Fe(rs, yt({ size: Qe(t, 'size'), type: Qe(t, 'type') }))
      const n = ve('button')
      return (l, a) => (
        C(), A('div', { class: w(`${o(n).b('group')}`) }, [fe(l.$slots, 'default')], 2)
      )
    }
  })
var Fs = me(nf, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue'
  ]
])
const sn = Ue(Qd, { ButtonGroup: Fs })
Jt(Fs)
const wa = ['hours', 'minutes', 'seconds'],
  ka = 'HH:mm:ss',
  Cn = 'YYYY-MM-DD',
  of = {
    date: Cn,
    dates: Cn,
    week: 'gggg[w]ww',
    year: 'YYYY',
    month: 'YYYY-MM',
    datetime: `${Cn} ${ka}`,
    monthrange: 'YYYY-MM',
    daterange: Cn,
    datetimerange: `${Cn} ${ka}`
  },
  Yo = (e, t) => [e > 0 ? e - 1 : void 0, e, e < t ? e + 1 : void 0],
  zs = e => Array.from(Array.from({ length: e }).keys()),
  Ks = e =>
    e
      .replace(/\W?m{1,2}|\W?ZZ/g, '')
      .replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, '')
      .trim(),
  Hs = e => e.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, '').trim(),
  Ca = function (e, t) {
    const n = Kl(e),
      l = Kl(t)
    return n && l ? e.getTime() === t.getTime() : !n && !l ? e === t : !1
  },
  Sa = function (e, t) {
    const n = Je(e),
      l = Je(t)
    return n && l
      ? e.length !== t.length
        ? !1
        : e.every((a, s) => Ca(a, t[s]))
      : !n && !l
      ? Ca(e, t)
      : !1
  },
  Ea = function (e, t, n) {
    const l = es(t) || t === 'x' ? Se(e).locale(n) : Se(e, t).locale(n)
    return l.isValid() ? l : void 0
  },
  $a = function (e, t, n) {
    return es(t) ? e : t === 'x' ? +e : Se(e).locale(n).format(t)
  },
  jo = (e, t) => {
    var n
    const l = [],
      a = t == null ? void 0 : t()
    for (let s = 0; s < e; s++) l.push((n = a == null ? void 0 : a.includes(s)) != null ? n : !1)
    return l
  },
  Ws = ge({
    disabledHours: { type: re(Function) },
    disabledMinutes: { type: re(Function) },
    disabledSeconds: { type: re(Function) }
  }),
  lf = ge({
    visible: Boolean,
    actualVisible: { type: Boolean, default: void 0 },
    format: { type: String, default: '' }
  }),
  Ys = ge({
    id: { type: re([Array, String]) },
    name: { type: re([Array, String]), default: '' },
    popperClass: { type: String, default: '' },
    format: String,
    valueFormat: String,
    type: { type: String, default: '' },
    clearable: { type: Boolean, default: !0 },
    clearIcon: { type: re([String, Object]), default: _o },
    editable: { type: Boolean, default: !0 },
    prefixIcon: { type: re([String, Object]), default: '' },
    size: qt,
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: { type: String, default: '' },
    popperOptions: { type: re(Object), default: () => ({}) },
    modelValue: { type: re([Date, Array, String, Number]), default: '' },
    rangeSeparator: { type: String, default: '-' },
    startPlaceholder: String,
    endPlaceholder: String,
    defaultValue: { type: re([Date, Array]) },
    defaultTime: { type: re([Date, Array]) },
    isRange: { type: Boolean, default: !1 },
    ...Ws,
    disabledDate: { type: Function },
    cellClassName: { type: Function },
    shortcuts: { type: Array, default: () => [] },
    arrowControl: { type: Boolean, default: !1 },
    label: { type: String, default: void 0 },
    tabindex: { type: re([String, Number]), default: 0 },
    validateEvent: { type: Boolean, default: !0 },
    unlinkPanels: Boolean
  }),
  af = ['id', 'name', 'placeholder', 'value', 'disabled', 'readonly'],
  sf = ['id', 'name', 'placeholder', 'value', 'disabled', 'readonly'],
  rf = Q({ name: 'Picker' }),
  uf = Q({
    ...rf,
    props: Ys,
    emits: [
      'update:modelValue',
      'change',
      'focus',
      'blur',
      'calendar-change',
      'panel-change',
      'visible-change',
      'keydown'
    ],
    setup(e, { expose: t, emit: n }) {
      const l = e,
        { lang: a } = Ye(),
        s = ve('date'),
        r = ve('input'),
        i = ve('range'),
        { form: u, formItem: f } = Qt(),
        m = Ce('ElPopperOptions', {}),
        p = N(),
        h = N(),
        c = N(!1),
        d = N(!1),
        v = N(null)
      let y = !1,
        T = !1
      ce(c, b => {
        b
          ? we(() => {
              b && (v.value = l.modelValue)
            })
          : ((Te.value = null),
            we(() => {
              E(l.modelValue)
            }))
      })
      const E = (b, I) => {
          ;(I || !Sa(b, v.value)) &&
            (n('change', b),
            l.validateEvent && (f == null || f.validate('change').catch(z => void 0)))
        },
        g = b => {
          if (!Sa(l.modelValue, b)) {
            let I
            Je(b)
              ? (I = b.map(z => $a(z, l.valueFormat, a.value)))
              : b && (I = $a(b, l.valueFormat, a.value)),
              n('update:modelValue', b && I, a.value)
          }
        },
        $ = b => {
          n('keydown', b)
        },
        k = S(() => {
          if (h.value) {
            const b = He.value ? h.value : h.value.$el
            return Array.from(b.querySelectorAll('input'))
          }
          return []
        }),
        P = (b, I, z) => {
          const ne = k.value
          !ne.length ||
            (!z || z === 'min'
              ? (ne[0].setSelectionRange(b, I), ne[0].focus())
              : z === 'max' && (ne[1].setSelectionRange(b, I), ne[1].focus()))
        },
        L = () => {
          U(!0, !0),
            we(() => {
              T = !1
            })
        },
        V = (b = '', I = !1) => {
          I || (T = !0), (c.value = I)
          let z
          Je(b) ? (z = b.map(ne => ne.toDate())) : (z = b && b.toDate()), (Te.value = null), g(z)
        },
        x = () => {
          d.value = !0
        },
        Y = () => {
          n('visible-change', !0)
        },
        X = b => {
          ;(b == null ? void 0 : b.key) === ke.esc && U(!0, !0)
        },
        te = () => {
          ;(d.value = !1), (c.value = !1), (T = !1), n('visible-change', !1)
        },
        _ = () => {
          c.value = !0
        },
        D = () => {
          c.value = !1
        },
        U = (b = !0, I = !1) => {
          T = I
          const [z, ne] = o(k)
          let _e = z
          !b && He.value && (_e = ne), _e && _e.focus()
        },
        J = b => {
          l.readonly || O.value || c.value || T || ((c.value = !0), n('focus', b))
        }
      let B
      const R = b => {
          const I = async () => {
            setTimeout(() => {
              var z
              B === I &&
                (!(((z = p.value) == null ? void 0 : z.isFocusInsideContent()) && !y) &&
                  k.value.filter(ne => ne.contains(document.activeElement)).length === 0 &&
                  (it(),
                  (c.value = !1),
                  n('blur', b),
                  l.validateEvent && (f == null || f.validate('blur').catch(ne => void 0))),
                (y = !1))
            }, 0)
          }
          ;(B = I), I()
        },
        O = S(() => l.disabled || (u == null ? void 0 : u.disabled)),
        q = S(() => {
          let b
          if (
            (ue.value
              ? K.value.getDefaultValue && (b = K.value.getDefaultValue())
              : Je(l.modelValue)
              ? (b = l.modelValue.map(I => Ea(I, l.valueFormat, a.value)))
              : (b = Ea(l.modelValue, l.valueFormat, a.value)),
            K.value.getRangeAvailableTime)
          ) {
            const I = K.value.getRangeAvailableTime(b)
            Eo(I, b) || ((b = I), g(Je(b) ? b.map(z => z.toDate()) : b.toDate()))
          }
          return Je(b) && b.some(I => !I) && (b = []), b
        }),
        ee = S(() => {
          if (!K.value.panelReady) return ''
          const b = Z(q.value)
          return Je(Te.value)
            ? [Te.value[0] || (b && b[0]) || '', Te.value[1] || (b && b[1]) || '']
            : Te.value !== null
            ? Te.value
            : (!j.value && ue.value) || (!c.value && ue.value)
            ? ''
            : b
            ? le.value
              ? b.join(', ')
              : b
            : ''
        }),
        M = S(() => l.type.includes('time')),
        j = S(() => l.type.startsWith('time')),
        le = S(() => l.type === 'dates'),
        ie = S(() => l.prefixIcon || (M.value ? jr : xr)),
        se = N(!1),
        ae = b => {
          l.readonly ||
            O.value ||
            (se.value &&
              (b.stopPropagation(),
              L(),
              g(null),
              E(null, !0),
              (se.value = !1),
              (c.value = !1),
              K.value.handleClear && K.value.handleClear()))
        },
        ue = S(() => {
          const { modelValue: b } = l
          return !b || (Je(b) && !b.filter(Boolean).length)
        }),
        ye = async b => {
          var I
          l.readonly ||
            O.value ||
            ((((I = b.target) == null ? void 0 : I.tagName) !== 'INPUT' ||
              k.value.includes(document.activeElement)) &&
              (c.value = !0))
        },
        pe = () => {
          l.readonly || O.value || (!ue.value && l.clearable && (se.value = !0))
        },
        Me = () => {
          se.value = !1
        },
        Ne = b => {
          var I
          l.readonly ||
            O.value ||
            ((((I = b.touches[0].target) == null ? void 0 : I.tagName) !== 'INPUT' ||
              k.value.includes(document.activeElement)) &&
              (c.value = !0))
        },
        He = S(() => l.type.includes('range')),
        et = Ot(),
        Et = S(() => {
          var b, I
          return (I = (b = o(p)) == null ? void 0 : b.popperRef) == null ? void 0 : I.contentRef
        }),
        Ge = S(() => {
          var b
          return o(He) ? o(h) : (b = o(h)) == null ? void 0 : b.$el
        })
      Ja(Ge, b => {
        const I = o(Et),
          z = o(Ge)
        ;(I && (b.target === I || b.composedPath().includes(I))) ||
          b.target === z ||
          b.composedPath().includes(z) ||
          (c.value = !1)
      })
      const Te = N(null),
        it = () => {
          if (Te.value) {
            const b = ze(ee.value)
            b && Ie(b) && (g(Je(b) ? b.map(I => I.toDate()) : b.toDate()), (Te.value = null))
          }
          Te.value === '' && (g(null), E(null), (Te.value = null))
        },
        ze = b => (b ? K.value.parseUserInput(b) : null),
        Z = b => (b ? K.value.formatToString(b) : null),
        Ie = b => K.value.isValidValue(b),
        Xe = async b => {
          if (l.readonly || O.value) return
          const { code: I } = b
          if (($(b), I === ke.esc)) {
            c.value === !0 && ((c.value = !1), b.preventDefault(), b.stopPropagation())
            return
          }
          if (
            I === ke.down &&
            (K.value.handleFocusPicker && (b.preventDefault(), b.stopPropagation()),
            c.value === !1 && ((c.value = !0), await we()),
            K.value.handleFocusPicker)
          ) {
            K.value.handleFocusPicker()
            return
          }
          if (I === ke.tab) {
            y = !0
            return
          }
          if (I === ke.enter || I === ke.numpadEnter) {
            ;(Te.value === null || Te.value === '' || Ie(ze(ee.value))) && (it(), (c.value = !1)),
              b.stopPropagation()
            return
          }
          if (Te.value) {
            b.stopPropagation()
            return
          }
          K.value.handleKeydownInput && K.value.handleKeydownInput(b)
        },
        tt = b => {
          ;(Te.value = b), c.value || (c.value = !0)
        },
        st = b => {
          const I = b.target
          Te.value ? (Te.value = [I.value, Te.value[1]]) : (Te.value = [I.value, null])
        },
        wt = b => {
          const I = b.target
          Te.value ? (Te.value = [Te.value[0], I.value]) : (Te.value = [null, I.value])
        },
        pt = () => {
          var b
          const I = Te.value,
            z = ze(I && I[0]),
            ne = o(q)
          if (z && z.isValid()) {
            Te.value = [Z(z), ((b = ee.value) == null ? void 0 : b[1]) || null]
            const _e = [z, ne && (ne[1] || null)]
            Ie(_e) && (g(_e), (Te.value = null))
          }
        },
        rt = () => {
          var b
          const I = o(Te),
            z = ze(I && I[1]),
            ne = o(q)
          if (z && z.isValid()) {
            Te.value = [((b = o(ee)) == null ? void 0 : b[0]) || null, Z(z)]
            const _e = [ne && ne[0], z]
            Ie(_e) && (g(_e), (Te.value = null))
          }
        },
        K = N({}),
        de = b => {
          ;(K.value[b[0]] = b[1]), (K.value.panelReady = !0)
        },
        Ee = b => {
          n('calendar-change', b)
        },
        nt = (b, I, z) => {
          n('panel-change', b, I, z)
        }
      return (
        Fe('EP_PICKER_BASE', { props: l }),
        t({
          focus: U,
          handleFocusInput: J,
          handleBlurInput: R,
          handleOpen: _,
          handleClose: D,
          onPick: V
        }),
        (b, I) => (
          C(),
          oe(
            o(ro),
            bt(
              {
                ref_key: 'refPopper',
                ref: p,
                visible: c.value,
                effect: 'light',
                pure: '',
                trigger: 'click'
              },
              b.$attrs,
              {
                role: 'dialog',
                teleported: '',
                transition: `${o(s).namespace.value}-zoom-in-top`,
                'popper-class': [`${o(s).namespace.value}-picker__popper`, b.popperClass],
                'popper-options': o(m),
                'fallback-placements': ['bottom', 'top', 'right', 'left'],
                'gpu-acceleration': !1,
                'stop-popper-mouse-event': !1,
                'hide-after': 0,
                persistent: '',
                onBeforeShow: x,
                onShow: Y,
                onHide: te
              }
            ),
            {
              default: W(() => [
                o(He)
                  ? (C(),
                    A(
                      'div',
                      {
                        key: 1,
                        ref_key: 'inputRef',
                        ref: h,
                        class: w([
                          o(s).b('editor'),
                          o(s).bm('editor', b.type),
                          o(r).e('wrapper'),
                          o(s).is('disabled', o(O)),
                          o(s).is('active', c.value),
                          o(i).b('editor'),
                          o(et) ? o(i).bm('editor', o(et)) : '',
                          b.$attrs.class
                        ]),
                        style: $e(b.$attrs.style),
                        onClick: J,
                        onMouseenter: pe,
                        onMouseleave: Me,
                        onTouchstart: Ne,
                        onKeydown: Xe
                      },
                      [
                        o(ie)
                          ? (C(),
                            oe(
                              o(be),
                              {
                                key: 0,
                                class: w([o(r).e('icon'), o(i).e('icon')]),
                                onMousedown: Le(ye, ['prevent']),
                                onTouchstart: Ne
                              },
                              { default: W(() => [(C(), oe(je(o(ie))))]), _: 1 },
                              8,
                              ['class', 'onMousedown']
                            ))
                          : G('v-if', !0),
                        F(
                          'input',
                          {
                            id: b.id && b.id[0],
                            autocomplete: 'off',
                            name: b.name && b.name[0],
                            placeholder: b.startPlaceholder,
                            value: o(ee) && o(ee)[0],
                            disabled: o(O),
                            readonly: !b.editable || b.readonly,
                            class: w(o(i).b('input')),
                            onMousedown: ye,
                            onInput: st,
                            onChange: pt,
                            onFocus: J,
                            onBlur: R
                          },
                          null,
                          42,
                          af
                        ),
                        fe(b.$slots, 'range-separator', {}, () => [
                          F('span', { class: w(o(i).b('separator')) }, he(b.rangeSeparator), 3)
                        ]),
                        F(
                          'input',
                          {
                            id: b.id && b.id[1],
                            autocomplete: 'off',
                            name: b.name && b.name[1],
                            placeholder: b.endPlaceholder,
                            value: o(ee) && o(ee)[1],
                            disabled: o(O),
                            readonly: !b.editable || b.readonly,
                            class: w(o(i).b('input')),
                            onMousedown: ye,
                            onFocus: J,
                            onBlur: R,
                            onInput: wt,
                            onChange: rt
                          },
                          null,
                          42,
                          sf
                        ),
                        b.clearIcon
                          ? (C(),
                            oe(
                              o(be),
                              {
                                key: 1,
                                class: w([
                                  o(r).e('icon'),
                                  o(i).e('close-icon'),
                                  { [o(i).e('close-icon--hidden')]: !se.value }
                                ]),
                                onClick: ae
                              },
                              { default: W(() => [(C(), oe(je(b.clearIcon)))]), _: 1 },
                              8,
                              ['class']
                            ))
                          : G('v-if', !0)
                      ],
                      38
                    ))
                  : (C(),
                    oe(
                      o(Rt),
                      {
                        key: 0,
                        id: b.id,
                        ref_key: 'inputRef',
                        ref: h,
                        'container-role': 'combobox',
                        'model-value': o(ee),
                        name: b.name,
                        size: o(et),
                        disabled: o(O),
                        placeholder: b.placeholder,
                        class: w([o(s).b('editor'), o(s).bm('editor', b.type), b.$attrs.class]),
                        style: $e(b.$attrs.style),
                        readonly: !b.editable || b.readonly || o(le) || b.type === 'week',
                        label: b.label,
                        tabindex: b.tabindex,
                        'validate-event': !1,
                        onInput: tt,
                        onFocus: J,
                        onBlur: R,
                        onKeydown: Xe,
                        onChange: it,
                        onMousedown: ye,
                        onMouseenter: pe,
                        onMouseleave: Me,
                        onTouchstart: Ne,
                        onClick: I[0] || (I[0] = Le(() => {}, ['stop']))
                      },
                      {
                        prefix: W(() => [
                          o(ie)
                            ? (C(),
                              oe(
                                o(be),
                                {
                                  key: 0,
                                  class: w(o(r).e('icon')),
                                  onMousedown: Le(ye, ['prevent']),
                                  onTouchstart: Ne
                                },
                                { default: W(() => [(C(), oe(je(o(ie))))]), _: 1 },
                                8,
                                ['class', 'onMousedown']
                              ))
                            : G('v-if', !0)
                        ]),
                        suffix: W(() => [
                          se.value && b.clearIcon
                            ? (C(),
                              oe(
                                o(be),
                                {
                                  key: 0,
                                  class: w(`${o(r).e('icon')} clear-icon`),
                                  onClick: Le(ae, ['stop'])
                                },
                                { default: W(() => [(C(), oe(je(b.clearIcon)))]), _: 1 },
                                8,
                                ['class', 'onClick']
                              ))
                            : G('v-if', !0)
                        ]),
                        _: 1
                      },
                      8,
                      [
                        'id',
                        'model-value',
                        'name',
                        'size',
                        'disabled',
                        'placeholder',
                        'class',
                        'style',
                        'readonly',
                        'label',
                        'tabindex',
                        'onKeydown'
                      ]
                    ))
              ]),
              content: W(() => [
                fe(b.$slots, 'default', {
                  visible: c.value,
                  actualVisible: d.value,
                  parsedValue: o(q),
                  format: b.format,
                  unlinkPanels: b.unlinkPanels,
                  type: b.type,
                  defaultValue: b.defaultValue,
                  onPick: V,
                  onSelectRange: P,
                  onSetPickerOption: de,
                  onCalendarChange: Ee,
                  onPanelChange: nt,
                  onKeydown: X,
                  onMousedown: I[1] || (I[1] = Le(() => {}, ['stop']))
                })
              ]),
              _: 3
            },
            16,
            ['visible', 'transition', 'popper-class', 'popper-options']
          )
        )
      )
    }
  })
var cf = me(uf, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue'
  ]
])
const df = ge({ ...lf, datetimeRole: String, parsedValue: { type: re(Object) } }),
  ff = ({ getAvailableHours: e, getAvailableMinutes: t, getAvailableSeconds: n }) => {
    const l = (r, i, u, f) => {
        const m = { hour: e, minute: t, second: n }
        let p = r
        return (
          ['hour', 'minute', 'second'].forEach(h => {
            if (m[h]) {
              let c
              const d = m[h]
              switch (h) {
                case 'minute': {
                  c = d(p.hour(), i, f)
                  break
                }
                case 'second': {
                  c = d(p.hour(), p.minute(), i, f)
                  break
                }
                default: {
                  c = d(i, f)
                  break
                }
              }
              if ((c == null ? void 0 : c.length) && !c.includes(p[h]())) {
                const v = u ? 0 : c.length - 1
                p = p[h](c[v])
              }
            }
          }),
          p
        )
      },
      a = {}
    return {
      timePickerOptions: a,
      getAvailableTime: l,
      onSetOption: ([r, i]) => {
        a[r] = i
      }
    }
  },
  xo = e => {
    const t = (l, a) => l || a,
      n = l => l !== !0
    return e.map(t).filter(n)
  },
  js = (e, t, n) => ({
    getHoursList: (r, i) => jo(24, e && (() => (e == null ? void 0 : e(r, i)))),
    getMinutesList: (r, i, u) => jo(60, t && (() => (t == null ? void 0 : t(r, i, u)))),
    getSecondsList: (r, i, u, f) => jo(60, n && (() => (n == null ? void 0 : n(r, i, u, f))))
  }),
  pf = (e, t, n) => {
    const { getHoursList: l, getMinutesList: a, getSecondsList: s } = js(e, t, n)
    return {
      getAvailableHours: (f, m) => xo(l(f, m)),
      getAvailableMinutes: (f, m, p) => xo(a(f, m, p)),
      getAvailableSeconds: (f, m, p, h) => xo(s(f, m, p, h))
    }
  },
  vf = e => {
    const t = N(e.parsedValue)
    return (
      ce(
        () => e.visible,
        n => {
          n || (t.value = e.parsedValue)
        }
      ),
      t
    )
  },
  nn = new Map()
let Ta
Re &&
  (document.addEventListener('mousedown', e => (Ta = e)),
  document.addEventListener('mouseup', e => {
    for (const t of nn.values()) for (const { documentHandler: n } of t) n(e, Ta)
  }))
function Ia(e, t) {
  let n = []
  return (
    Array.isArray(t.arg) ? (n = t.arg) : gn(t.arg) && n.push(t.arg),
    function (l, a) {
      const s = t.instance.popperRef,
        r = l.target,
        i = a == null ? void 0 : a.target,
        u = !t || !t.instance,
        f = !r || !i,
        m = e.contains(r) || e.contains(i),
        p = e === r,
        h =
          (n.length && n.some(d => (d == null ? void 0 : d.contains(r)))) ||
          (n.length && n.includes(i)),
        c = s && (s.contains(r) || s.contains(i))
      u || f || m || p || h || c || t.value(l, a)
    }
  )
}
const Qn = {
    beforeMount(e, t) {
      nn.has(e) || nn.set(e, []), nn.get(e).push({ documentHandler: Ia(e, t), bindingFn: t.value })
    },
    updated(e, t) {
      nn.has(e) || nn.set(e, [])
      const n = nn.get(e),
        l = n.findIndex(s => s.bindingFn === t.oldValue),
        a = { documentHandler: Ia(e, t), bindingFn: t.value }
      l >= 0 ? n.splice(l, 1, a) : n.push(a)
    },
    unmounted(e) {
      nn.delete(e)
    }
  },
  mf = 100,
  gf = 600,
  Po = {
    beforeMount(e, t) {
      const n = t.value,
        { interval: l = mf, delay: a = gf } = lt(n) ? {} : n
      let s, r
      const i = () => (lt(n) ? n() : n.handler()),
        u = () => {
          r && (clearTimeout(r), (r = void 0)), s && (clearInterval(s), (s = void 0))
        }
      e.addEventListener('mousedown', f => {
        f.button === 0 &&
          (u(),
          i(),
          document.addEventListener('mouseup', () => u(), { once: !0 }),
          (r = setTimeout(() => {
            s = setInterval(() => {
              i()
            }, l)
          }, a)))
      })
    }
  },
  hf = ge({
    role: { type: String, required: !0 },
    spinnerDate: { type: re(Object), required: !0 },
    showSeconds: { type: Boolean, default: !0 },
    arrowControl: Boolean,
    amPmMode: { type: re(String), default: '' },
    ...Ws
  }),
  bf = ['onClick'],
  yf = ['onMouseenter'],
  wf = Q({
    __name: 'basic-time-spinner',
    props: hf,
    emits: ['change', 'select-range', 'set-option'],
    setup(e, { emit: t }) {
      const n = e,
        l = ve('time'),
        {
          getHoursList: a,
          getMinutesList: s,
          getSecondsList: r
        } = js(n.disabledHours, n.disabledMinutes, n.disabledSeconds)
      let i = !1
      const u = N(),
        f = N(),
        m = N(),
        p = N(),
        h = { hours: f, minutes: m, seconds: p },
        c = S(() => (n.showSeconds ? wa : wa.slice(0, 2))),
        d = S(() => {
          const { spinnerDate: O } = n,
            q = O.hour(),
            ee = O.minute(),
            M = O.second()
          return { hours: q, minutes: ee, seconds: M }
        }),
        v = S(() => {
          const { hours: O, minutes: q } = o(d)
          return { hours: a(n.role), minutes: s(O, n.role), seconds: r(O, q, n.role) }
        }),
        y = S(() => {
          const { hours: O, minutes: q, seconds: ee } = o(d)
          return { hours: Yo(O, 23), minutes: Yo(q, 59), seconds: Yo(ee, 59) }
        }),
        T = Pn(O => {
          ;(i = !1), $(O)
        }, 200),
        E = O => {
          if (!!!n.amPmMode) return ''
          const ee = n.amPmMode === 'A'
          let M = O < 12 ? ' am' : ' pm'
          return ee && (M = M.toUpperCase()), M
        },
        g = O => {
          let q
          switch (O) {
            case 'hours':
              q = [0, 2]
              break
            case 'minutes':
              q = [3, 5]
              break
            case 'seconds':
              q = [6, 8]
              break
          }
          const [ee, M] = q
          t('select-range', ee, M), (u.value = O)
        },
        $ = O => {
          L(O, o(d)[O])
        },
        k = () => {
          $('hours'), $('minutes'), $('seconds')
        },
        P = O => O.querySelector(`.${l.namespace.value}-scrollbar__wrap`),
        L = (O, q) => {
          if (n.arrowControl) return
          const ee = o(h[O])
          ee && ee.$el && (P(ee.$el).scrollTop = Math.max(0, q * V(O)))
        },
        V = O => {
          const q = o(h[O])
          return (q == null ? void 0 : q.$el.querySelector('li').offsetHeight) || 0
        },
        x = () => {
          X(1)
        },
        Y = () => {
          X(-1)
        },
        X = O => {
          u.value || g('hours')
          const q = u.value,
            ee = o(d)[q],
            M = u.value === 'hours' ? 24 : 60,
            j = te(q, ee, O, M)
          _(q, j), L(q, j), we(() => g(q))
        },
        te = (O, q, ee, M) => {
          let j = (q + ee + M) % M
          const le = o(v)[O]
          for (; le[j] && j !== q; ) j = (j + ee + M) % M
          return j
        },
        _ = (O, q) => {
          if (o(v)[O][q]) return
          const { hours: j, minutes: le, seconds: ie } = o(d)
          let se
          switch (O) {
            case 'hours':
              se = n.spinnerDate.hour(q).minute(le).second(ie)
              break
            case 'minutes':
              se = n.spinnerDate.hour(j).minute(q).second(ie)
              break
            case 'seconds':
              se = n.spinnerDate.hour(j).minute(le).second(q)
              break
          }
          t('change', se)
        },
        D = (O, { value: q, disabled: ee }) => {
          ee || (_(O, q), g(O), L(O, q))
        },
        U = O => {
          ;(i = !0), T(O)
          const q = Math.min(
            Math.round((P(o(h[O]).$el).scrollTop - (J(O) * 0.5 - 10) / V(O) + 3) / V(O)),
            O === 'hours' ? 23 : 59
          )
          _(O, q)
        },
        J = O => o(h[O]).$el.offsetHeight,
        B = () => {
          const O = q => {
            const ee = o(h[q])
            ee &&
              ee.$el &&
              (P(ee.$el).onscroll = () => {
                U(q)
              })
          }
          O('hours'), O('minutes'), O('seconds')
        }
      De(() => {
        we(() => {
          !n.arrowControl && B(), k(), n.role === 'start' && g('hours')
        })
      })
      const R = (O, q) => {
        h[q].value = O
      }
      return (
        t('set-option', [`${n.role}_scrollDown`, X]),
        t('set-option', [`${n.role}_emitSelectRange`, g]),
        ce(
          () => n.spinnerDate,
          () => {
            i || k()
          }
        ),
        (O, q) => (
          C(),
          A(
            'div',
            { class: w([o(l).b('spinner'), { 'has-seconds': O.showSeconds }]) },
            [
              O.arrowControl
                ? G('v-if', !0)
                : (C(!0),
                  A(
                    Pe,
                    { key: 0 },
                    qe(
                      o(c),
                      ee => (
                        C(),
                        oe(
                          o(wl),
                          {
                            key: ee,
                            ref_for: !0,
                            ref: M => R(M, ee),
                            class: w(o(l).be('spinner', 'wrapper')),
                            'wrap-style': 'max-height: inherit;',
                            'view-class': o(l).be('spinner', 'list'),
                            noresize: '',
                            tag: 'ul',
                            onMouseenter: M => g(ee),
                            onMousemove: M => $(ee)
                          },
                          {
                            default: W(() => [
                              (C(!0),
                              A(
                                Pe,
                                null,
                                qe(
                                  o(v)[ee],
                                  (M, j) => (
                                    C(),
                                    A(
                                      'li',
                                      {
                                        key: j,
                                        class: w([
                                          o(l).be('spinner', 'item'),
                                          o(l).is('active', j === o(d)[ee]),
                                          o(l).is('disabled', M)
                                        ]),
                                        onClick: le => D(ee, { value: j, disabled: M })
                                      },
                                      [
                                        ee === 'hours'
                                          ? (C(),
                                            A(
                                              Pe,
                                              { key: 0 },
                                              [
                                                dt(
                                                  he(
                                                    ('0' + (O.amPmMode ? j % 12 || 12 : j)).slice(
                                                      -2
                                                    )
                                                  ) + he(E(j)),
                                                  1
                                                )
                                              ],
                                              64
                                            ))
                                          : (C(),
                                            A(Pe, { key: 1 }, [dt(he(('0' + j).slice(-2)), 1)], 64))
                                      ],
                                      10,
                                      bf
                                    )
                                  )
                                ),
                                128
                              ))
                            ]),
                            _: 2
                          },
                          1032,
                          ['class', 'view-class', 'onMouseenter', 'onMousemove']
                        )
                      )
                    ),
                    128
                  )),
              O.arrowControl
                ? (C(!0),
                  A(
                    Pe,
                    { key: 1 },
                    qe(
                      o(c),
                      ee => (
                        C(),
                        A(
                          'div',
                          {
                            key: ee,
                            class: w([o(l).be('spinner', 'wrapper'), o(l).is('arrow')]),
                            onMouseenter: M => g(ee)
                          },
                          [
                            Ve(
                              (C(),
                              oe(
                                o(be),
                                { class: w(['arrow-up', o(l).be('spinner', 'arrow')]) },
                                { default: W(() => [H(o(Ga))]), _: 1 },
                                8,
                                ['class']
                              )),
                              [[o(Po), Y]]
                            ),
                            Ve(
                              (C(),
                              oe(
                                o(be),
                                { class: w(['arrow-down', o(l).be('spinner', 'arrow')]) },
                                { default: W(() => [H(o(no))]), _: 1 },
                                8,
                                ['class']
                              )),
                              [[o(Po), x]]
                            ),
                            F(
                              'ul',
                              { class: w(o(l).be('spinner', 'list')) },
                              [
                                (C(!0),
                                A(
                                  Pe,
                                  null,
                                  qe(
                                    o(y)[ee],
                                    (M, j) => (
                                      C(),
                                      A(
                                        'li',
                                        {
                                          key: j,
                                          class: w([
                                            o(l).be('spinner', 'item'),
                                            o(l).is('active', M === o(d)[ee]),
                                            o(l).is('disabled', o(v)[ee][M])
                                          ])
                                        },
                                        [
                                          typeof M == 'number'
                                            ? (C(),
                                              A(
                                                Pe,
                                                { key: 0 },
                                                [
                                                  ee === 'hours'
                                                    ? (C(),
                                                      A(
                                                        Pe,
                                                        { key: 0 },
                                                        [
                                                          dt(
                                                            he(
                                                              (
                                                                '0' +
                                                                (O.amPmMode ? M % 12 || 12 : M)
                                                              ).slice(-2)
                                                            ) + he(E(M)),
                                                            1
                                                          )
                                                        ],
                                                        64
                                                      ))
                                                    : (C(),
                                                      A(
                                                        Pe,
                                                        { key: 1 },
                                                        [dt(he(('0' + M).slice(-2)), 1)],
                                                        64
                                                      ))
                                                ],
                                                64
                                              ))
                                            : G('v-if', !0)
                                        ],
                                        2
                                      )
                                    )
                                  ),
                                  128
                                ))
                              ],
                              2
                            )
                          ],
                          42,
                          yf
                        )
                      )
                    ),
                    128
                  ))
                : G('v-if', !0)
            ],
            2
          )
        )
      )
    }
  })
var kf = me(wf, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue'
  ]
])
const Cf = Q({
  __name: 'panel-time-pick',
  props: df,
  emits: ['pick', 'select-range', 'set-picker-option'],
  setup(e, { emit: t }) {
    const n = e,
      l = Ce('EP_PICKER_BASE'),
      {
        arrowControl: a,
        disabledHours: s,
        disabledMinutes: r,
        disabledSeconds: i,
        defaultValue: u
      } = l.props,
      { getAvailableHours: f, getAvailableMinutes: m, getAvailableSeconds: p } = pf(s, r, i),
      h = ve('time'),
      { t: c, lang: d } = Ye(),
      v = N([0, 2]),
      y = vf(n),
      T = S(() => (on(n.actualVisible) ? `${h.namespace.value}-zoom-in-top` : '')),
      E = S(() => n.format.includes('ss')),
      g = S(() => (n.format.includes('A') ? 'A' : n.format.includes('a') ? 'a' : '')),
      $ = R => {
        const O = Se(R).locale(d.value),
          q = D(O)
        return O.isSame(q)
      },
      k = () => {
        t('pick', y.value, !1)
      },
      P = (R = !1, O = !1) => {
        O || t('pick', n.parsedValue, R)
      },
      L = R => {
        if (!n.visible) return
        const O = D(R).millisecond(0)
        t('pick', O, !0)
      },
      V = (R, O) => {
        t('select-range', R, O), (v.value = [R, O])
      },
      x = R => {
        const O = [0, 3].concat(E.value ? [6] : []),
          q = ['hours', 'minutes'].concat(E.value ? ['seconds'] : []),
          M = (O.indexOf(v.value[0]) + R + O.length) % O.length
        X.start_emitSelectRange(q[M])
      },
      Y = R => {
        const O = R.code,
          { left: q, right: ee, up: M, down: j } = ke
        if ([q, ee].includes(O)) {
          x(O === q ? -1 : 1), R.preventDefault()
          return
        }
        if ([M, j].includes(O)) {
          const le = O === M ? -1 : 1
          X.start_scrollDown(le), R.preventDefault()
          return
        }
      },
      {
        timePickerOptions: X,
        onSetOption: te,
        getAvailableTime: _
      } = ff({ getAvailableHours: f, getAvailableMinutes: m, getAvailableSeconds: p }),
      D = R => _(R, n.datetimeRole || '', !0),
      U = R => (R ? Se(R, n.format).locale(d.value) : null),
      J = R => (R ? R.format(n.format) : null),
      B = () => Se(u).locale(d.value)
    return (
      t('set-picker-option', ['isValidValue', $]),
      t('set-picker-option', ['formatToString', J]),
      t('set-picker-option', ['parseUserInput', U]),
      t('set-picker-option', ['handleKeydownInput', Y]),
      t('set-picker-option', ['getRangeAvailableTime', D]),
      t('set-picker-option', ['getDefaultValue', B]),
      (R, O) => (
        C(),
        oe(
          Pt,
          { name: o(T) },
          {
            default: W(() => [
              R.actualVisible || R.visible
                ? (C(),
                  A(
                    'div',
                    { key: 0, class: w(o(h).b('panel')) },
                    [
                      F(
                        'div',
                        { class: w([o(h).be('panel', 'content'), { 'has-seconds': o(E) }]) },
                        [
                          H(
                            kf,
                            {
                              ref: 'spinner',
                              role: R.datetimeRole || 'start',
                              'arrow-control': o(a),
                              'show-seconds': o(E),
                              'am-pm-mode': o(g),
                              'spinner-date': R.parsedValue,
                              'disabled-hours': o(s),
                              'disabled-minutes': o(r),
                              'disabled-seconds': o(i),
                              onChange: L,
                              onSetOption: o(te),
                              onSelectRange: V
                            },
                            null,
                            8,
                            [
                              'role',
                              'arrow-control',
                              'show-seconds',
                              'am-pm-mode',
                              'spinner-date',
                              'disabled-hours',
                              'disabled-minutes',
                              'disabled-seconds',
                              'onSetOption'
                            ]
                          )
                        ],
                        2
                      ),
                      F(
                        'div',
                        { class: w(o(h).be('panel', 'footer')) },
                        [
                          F(
                            'button',
                            {
                              type: 'button',
                              class: w([o(h).be('panel', 'btn'), 'cancel']),
                              onClick: k
                            },
                            he(o(c)('el.datepicker.cancel')),
                            3
                          ),
                          F(
                            'button',
                            {
                              type: 'button',
                              class: w([o(h).be('panel', 'btn'), 'confirm']),
                              onClick: O[0] || (O[0] = q => P())
                            },
                            he(o(c)('el.datepicker.confirm')),
                            3
                          )
                        ],
                        2
                      )
                    ],
                    2
                  ))
                : G('v-if', !0)
            ]),
            _: 1
          },
          8,
          ['name']
        )
      )
    )
  }
})
var ol = me(Cf, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue'
  ]
])
const Sf = ge({
    header: { type: String, default: '' },
    bodyStyle: { type: re([String, Object, Array]), default: '' },
    shadow: { type: String, values: ['always', 'hover', 'never'], default: 'always' }
  }),
  Ef = Q({ name: 'ElCard' }),
  $f = Q({
    ...Ef,
    props: Sf,
    setup(e) {
      const t = ve('card')
      return (n, l) => (
        C(),
        A(
          'div',
          { class: w([o(t).b(), o(t).is(`${n.shadow}-shadow`)]) },
          [
            n.$slots.header || n.header
              ? (C(),
                A(
                  'div',
                  { key: 0, class: w(o(t).e('header')) },
                  [fe(n.$slots, 'header', {}, () => [dt(he(n.header), 1)])],
                  2
                ))
              : G('v-if', !0),
            F(
              'div',
              { class: w(o(t).e('body')), style: $e(n.bodyStyle) },
              [fe(n.$slots, 'default')],
              6
            )
          ],
          2
        )
      )
    }
  })
var Tf = me($f, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue']
])
const Vb = Ue(Tf),
  xs = ge({ size: qt, disabled: Boolean, label: { type: [String, Number, Boolean], default: '' } }),
  If = ge({
    ...xs,
    modelValue: { type: [String, Number, Boolean], default: '' },
    name: { type: String, default: '' },
    border: Boolean
  }),
  Us = { [Ae]: e => xe(e) || Be(e) || Mt(e), [Ht]: e => xe(e) || Be(e) || Mt(e) },
  qs = (e, t) => {
    const n = N(),
      l = Ce(ds, void 0),
      a = S(() => !!l),
      s = S({
        get() {
          return a.value ? l.modelValue : e.modelValue
        },
        set(m) {
          a.value ? l.changeEvent(m) : t && t(Ae, m), (n.value.checked = e.modelValue === e.label)
        }
      }),
      r = Ot(S(() => (l == null ? void 0 : l.size))),
      i = yn(S(() => (l == null ? void 0 : l.disabled))),
      u = N(!1),
      f = S(() => (i.value || (a.value && s.value !== e.label) ? -1 : 0))
    return {
      radioRef: n,
      isGroup: a,
      radioGroup: l,
      focus: u,
      size: r,
      disabled: i,
      tabIndex: f,
      modelValue: s
    }
  },
  Pf = ['value', 'name', 'disabled'],
  Of = Q({ name: 'ElRadio' }),
  Mf = Q({
    ...Of,
    props: If,
    emits: Us,
    setup(e, { emit: t }) {
      const n = e,
        l = ve('radio'),
        { radioRef: a, radioGroup: s, focus: r, size: i, disabled: u, modelValue: f } = qs(n, t)
      function m() {
        we(() => t('change', f.value))
      }
      return (p, h) => {
        var c
        return (
          C(),
          A(
            'label',
            {
              class: w([
                o(l).b(),
                o(l).is('disabled', o(u)),
                o(l).is('focus', o(r)),
                o(l).is('bordered', p.border),
                o(l).is('checked', o(f) === p.label),
                o(l).m(o(i))
              ])
            },
            [
              F(
                'span',
                {
                  class: w([
                    o(l).e('input'),
                    o(l).is('disabled', o(u)),
                    o(l).is('checked', o(f) === p.label)
                  ])
                },
                [
                  Ve(
                    F(
                      'input',
                      {
                        ref_key: 'radioRef',
                        ref: a,
                        'onUpdate:modelValue': h[0] || (h[0] = d => (to(f) ? (f.value = d) : null)),
                        class: w(o(l).e('original')),
                        value: p.label,
                        name: p.name || ((c = o(s)) == null ? void 0 : c.name),
                        disabled: o(u),
                        type: 'radio',
                        onFocus: h[1] || (h[1] = d => (r.value = !0)),
                        onBlur: h[2] || (h[2] = d => (r.value = !1)),
                        onChange: m
                      },
                      null,
                      42,
                      Pf
                    ),
                    [[Wa, o(f)]]
                  ),
                  F('span', { class: w(o(l).e('inner')) }, null, 2)
                ],
                2
              ),
              F(
                'span',
                { class: w(o(l).e('label')), onKeydown: h[3] || (h[3] = Le(() => {}, ['stop'])) },
                [fe(p.$slots, 'default', {}, () => [dt(he(p.label), 1)])],
                34
              )
            ],
            2
          )
        )
      }
    }
  })
var _f = me(Mf, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue']
])
const Nf = ge({ ...xs, name: { type: String, default: '' } }),
  Vf = ['value', 'name', 'disabled'],
  Bf = Q({ name: 'ElRadioButton' }),
  Af = Q({
    ...Bf,
    props: Nf,
    setup(e) {
      const t = e,
        n = ve('radio'),
        { radioRef: l, focus: a, size: s, disabled: r, modelValue: i, radioGroup: u } = qs(t),
        f = S(() => ({
          backgroundColor: (u == null ? void 0 : u.fill) || '',
          borderColor: (u == null ? void 0 : u.fill) || '',
          boxShadow: u != null && u.fill ? `-1px 0 0 0 ${u.fill}` : '',
          color: (u == null ? void 0 : u.textColor) || ''
        }))
      return (m, p) => {
        var h
        return (
          C(),
          A(
            'label',
            {
              class: w([
                o(n).b('button'),
                o(n).is('active', o(i) === m.label),
                o(n).is('disabled', o(r)),
                o(n).is('focus', o(a)),
                o(n).bm('button', o(s))
              ])
            },
            [
              Ve(
                F(
                  'input',
                  {
                    ref_key: 'radioRef',
                    ref: l,
                    'onUpdate:modelValue': p[0] || (p[0] = c => (to(i) ? (i.value = c) : null)),
                    class: w(o(n).be('button', 'original-radio')),
                    value: m.label,
                    type: 'radio',
                    name: m.name || ((h = o(u)) == null ? void 0 : h.name),
                    disabled: o(r),
                    onFocus: p[1] || (p[1] = c => (a.value = !0)),
                    onBlur: p[2] || (p[2] = c => (a.value = !1))
                  },
                  null,
                  42,
                  Vf
                ),
                [[Wa, o(i)]]
              ),
              F(
                'span',
                {
                  class: w(o(n).be('button', 'inner')),
                  style: $e(o(i) === m.label ? o(f) : {}),
                  onKeydown: p[3] || (p[3] = Le(() => {}, ['stop']))
                },
                [fe(m.$slots, 'default', {}, () => [dt(he(m.label), 1)])],
                38
              )
            ],
            2
          )
        )
      }
    }
  })
var Gs = me(Af, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue'
  ]
])
const Lf = ge({
    id: { type: String, default: void 0 },
    size: qt,
    disabled: Boolean,
    modelValue: { type: [String, Number, Boolean], default: '' },
    fill: { type: String, default: '' },
    label: { type: String, default: void 0 },
    textColor: { type: String, default: '' },
    name: { type: String, default: void 0 },
    validateEvent: { type: Boolean, default: !0 }
  }),
  Df = Us,
  Rf = ['id', 'aria-label', 'aria-labelledby'],
  Ff = Q({ name: 'ElRadioGroup' }),
  zf = Q({
    ...Ff,
    props: Lf,
    emits: Df,
    setup(e, { emit: t }) {
      const n = e,
        l = ve('radio'),
        a = an(),
        s = N(),
        { formItem: r } = Qt(),
        { inputId: i, isLabeledByFormItem: u } = oo(n, { formItemContext: r }),
        f = p => {
          t(Ae, p), we(() => t('change', p))
        }
      De(() => {
        const p = s.value.querySelectorAll('[type=radio]'),
          h = p[0]
        !Array.from(p).some(c => c.checked) && h && (h.tabIndex = 0)
      })
      const m = S(() => n.name || a.value)
      return (
        Fe(ds, yt({ ...Ut(n), changeEvent: f, name: m })),
        ce(
          () => n.modelValue,
          () => {
            n.validateEvent && (r == null || r.validate('change').catch(p => void 0))
          }
        ),
        (p, h) => (
          C(),
          A(
            'div',
            {
              id: o(i),
              ref_key: 'radioGroupRef',
              ref: s,
              class: w(o(l).b('group')),
              role: 'radiogroup',
              'aria-label': o(u) ? void 0 : p.label || 'radio-group',
              'aria-labelledby': o(u) ? o(r).labelId : void 0
            },
            [fe(p.$slots, 'default')],
            10,
            Rf
          )
        )
      )
    }
  })
var Xs = me(zf, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue'
  ]
])
const Bb = Ue(_f, { RadioButton: Gs, RadioGroup: Xs }),
  Ab = Jt(Xs)
Jt(Gs)
const Js = ge({
    closable: Boolean,
    type: { type: String, values: ['success', 'info', 'warning', 'danger', ''], default: '' },
    hit: Boolean,
    disableTransitions: Boolean,
    color: { type: String, default: '' },
    size: { type: String, values: Rn, default: '' },
    effect: { type: String, values: ['dark', 'light', 'plain'], default: 'light' },
    round: Boolean
  }),
  Kf = { close: e => e instanceof MouseEvent, click: e => e instanceof MouseEvent },
  Hf = Q({ name: 'ElTag' }),
  Wf = Q({
    ...Hf,
    props: Js,
    emits: Kf,
    setup(e, { emit: t }) {
      const n = e,
        l = Ot(),
        a = ve('tag'),
        s = S(() => {
          const { type: u, hit: f, effect: m, closable: p, round: h } = n
          return [
            a.b(),
            a.is('closable', p),
            a.m(u),
            a.m(l.value),
            a.m(m),
            a.is('hit', f),
            a.is('round', h)
          ]
        }),
        r = u => {
          t('close', u)
        },
        i = u => {
          t('click', u)
        }
      return (u, f) =>
        u.disableTransitions
          ? (C(),
            A(
              'span',
              { key: 0, class: w(o(s)), style: $e({ backgroundColor: u.color }), onClick: i },
              [
                F('span', { class: w(o(a).e('content')) }, [fe(u.$slots, 'default')], 2),
                u.closable
                  ? (C(),
                    oe(
                      o(be),
                      { key: 0, class: w(o(a).e('close')), onClick: Le(r, ['stop']) },
                      { default: W(() => [H(o(mn))]), _: 1 },
                      8,
                      ['class', 'onClick']
                    ))
                  : G('v-if', !0)
              ],
              6
            ))
          : (C(),
            oe(
              Pt,
              { key: 1, name: `${o(a).namespace.value}-zoom-in-center`, appear: '' },
              {
                default: W(() => [
                  F(
                    'span',
                    { class: w(o(s)), style: $e({ backgroundColor: u.color }), onClick: i },
                    [
                      F('span', { class: w(o(a).e('content')) }, [fe(u.$slots, 'default')], 2),
                      u.closable
                        ? (C(),
                          oe(
                            o(be),
                            { key: 0, class: w(o(a).e('close')), onClick: Le(r, ['stop']) },
                            { default: W(() => [H(o(mn))]), _: 1 },
                            8,
                            ['class', 'onClick']
                          ))
                        : G('v-if', !0)
                    ],
                    6
                  )
                ]),
                _: 3
              },
              8,
              ['name']
            ))
    }
  })
var Yf = me(Wf, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue']
])
const jf = Ue(Yf)
let Uo = !1
function eo(e, t) {
  if (!Re) return
  const n = function (s) {
      var r
      ;(r = t.drag) == null || r.call(t, s)
    },
    l = function (s) {
      var r
      document.removeEventListener('mousemove', n),
        document.removeEventListener('mouseup', l),
        document.removeEventListener('touchmove', n),
        document.removeEventListener('touchend', l),
        (document.onselectstart = null),
        (document.ondragstart = null),
        (Uo = !1),
        (r = t.end) == null || r.call(t, s)
    },
    a = function (s) {
      var r
      Uo ||
        (s.preventDefault(),
        (document.onselectstart = () => !1),
        (document.ondragstart = () => !1),
        document.addEventListener('mousemove', n),
        document.addEventListener('mouseup', l),
        document.addEventListener('touchmove', n),
        document.addEventListener('touchend', l),
        (Uo = !0),
        (r = t.start) == null || r.call(t, s))
    }
  e.addEventListener('mousedown', a), e.addEventListener('touchstart', a)
}
const xf = Q({
  name: 'ElColorAlphaSlider',
  props: { color: { type: Object, required: !0 }, vertical: { type: Boolean, default: !1 } },
  setup(e) {
    const t = ve('color-alpha-slider'),
      n = at(),
      l = Ft(),
      a = Ft(),
      s = N(0),
      r = N(0),
      i = N()
    ce(
      () => e.color.get('alpha'),
      () => {
        c()
      }
    ),
      ce(
        () => e.color.value,
        () => {
          c()
        }
      )
    function u() {
      if (!l.value || e.vertical) return 0
      const d = n.vnode.el,
        v = e.color.get('alpha')
      return d ? Math.round((v * (d.offsetWidth - l.value.offsetWidth / 2)) / 100) : 0
    }
    function f() {
      if (!l.value) return 0
      const d = n.vnode.el
      if (!e.vertical) return 0
      const v = e.color.get('alpha')
      return d ? Math.round((v * (d.offsetHeight - l.value.offsetHeight / 2)) / 100) : 0
    }
    function m() {
      if (e.color && e.color.value) {
        const { r: d, g: v, b: y } = e.color.toRgb()
        return `linear-gradient(to right, rgba(${d}, ${v}, ${y}, 0) 0%, rgba(${d}, ${v}, ${y}, 1) 100%)`
      }
      return ''
    }
    function p(d) {
      d.target !== l.value && h(d)
    }
    function h(d) {
      if (!a.value || !l.value) return
      const y = n.vnode.el.getBoundingClientRect(),
        { clientX: T, clientY: E } = gl(d)
      if (e.vertical) {
        let g = E - y.top
        ;(g = Math.max(l.value.offsetHeight / 2, g)),
          (g = Math.min(g, y.height - l.value.offsetHeight / 2)),
          e.color.set(
            'alpha',
            Math.round(((g - l.value.offsetHeight / 2) / (y.height - l.value.offsetHeight)) * 100)
          )
      } else {
        let g = T - y.left
        ;(g = Math.max(l.value.offsetWidth / 2, g)),
          (g = Math.min(g, y.width - l.value.offsetWidth / 2)),
          e.color.set(
            'alpha',
            Math.round(((g - l.value.offsetWidth / 2) / (y.width - l.value.offsetWidth)) * 100)
          )
      }
    }
    function c() {
      ;(s.value = u()), (r.value = f()), (i.value = m())
    }
    return (
      De(() => {
        if (!a.value || !l.value) return
        const d = {
          drag: v => {
            h(v)
          },
          end: v => {
            h(v)
          }
        }
        eo(a.value, d), eo(l.value, d), c()
      }),
      {
        thumb: l,
        bar: a,
        thumbLeft: s,
        thumbTop: r,
        background: i,
        handleClick: p,
        update: c,
        ns: t
      }
    )
  }
})
function Uf(e, t, n, l, a, s) {
  return (
    C(),
    A(
      'div',
      { class: w([e.ns.b(), e.ns.is('vertical', e.vertical)]) },
      [
        F(
          'div',
          {
            ref: 'bar',
            class: w(e.ns.e('bar')),
            style: $e({ background: e.background }),
            onClick: t[0] || (t[0] = (...r) => e.handleClick && e.handleClick(...r))
          },
          null,
          6
        ),
        F(
          'div',
          {
            ref: 'thumb',
            class: w(e.ns.e('thumb')),
            style: $e({ left: e.thumbLeft + 'px', top: e.thumbTop + 'px' })
          },
          null,
          6
        )
      ],
      2
    )
  )
}
var qf = me(xf, [
  ['render', Uf],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/alpha-slider.vue'
  ]
])
const Gf = Q({
  name: 'ElColorHueSlider',
  props: { color: { type: Object, required: !0 }, vertical: Boolean },
  setup(e) {
    const t = ve('color-hue-slider'),
      n = at(),
      l = N(),
      a = N(),
      s = N(0),
      r = N(0),
      i = S(() => e.color.get('hue'))
    ce(
      () => i.value,
      () => {
        h()
      }
    )
    function u(c) {
      c.target !== l.value && f(c)
    }
    function f(c) {
      if (!a.value || !l.value) return
      const v = n.vnode.el.getBoundingClientRect(),
        { clientX: y, clientY: T } = gl(c)
      let E
      if (e.vertical) {
        let g = T - v.top
        ;(g = Math.min(g, v.height - l.value.offsetHeight / 2)),
          (g = Math.max(l.value.offsetHeight / 2, g)),
          (E = Math.round(
            ((g - l.value.offsetHeight / 2) / (v.height - l.value.offsetHeight)) * 360
          ))
      } else {
        let g = y - v.left
        ;(g = Math.min(g, v.width - l.value.offsetWidth / 2)),
          (g = Math.max(l.value.offsetWidth / 2, g)),
          (E = Math.round(((g - l.value.offsetWidth / 2) / (v.width - l.value.offsetWidth)) * 360))
      }
      e.color.set('hue', E)
    }
    function m() {
      if (!l.value) return 0
      const c = n.vnode.el
      if (e.vertical) return 0
      const d = e.color.get('hue')
      return c ? Math.round((d * (c.offsetWidth - l.value.offsetWidth / 2)) / 360) : 0
    }
    function p() {
      if (!l.value) return 0
      const c = n.vnode.el
      if (!e.vertical) return 0
      const d = e.color.get('hue')
      return c ? Math.round((d * (c.offsetHeight - l.value.offsetHeight / 2)) / 360) : 0
    }
    function h() {
      ;(s.value = m()), (r.value = p())
    }
    return (
      De(() => {
        if (!a.value || !l.value) return
        const c = {
          drag: d => {
            f(d)
          },
          end: d => {
            f(d)
          }
        }
        eo(a.value, c), eo(l.value, c), h()
      }),
      { bar: a, thumb: l, thumbLeft: s, thumbTop: r, hueValue: i, handleClick: u, update: h, ns: t }
    )
  }
})
function Xf(e, t, n, l, a, s) {
  return (
    C(),
    A(
      'div',
      { class: w([e.ns.b(), e.ns.is('vertical', e.vertical)]) },
      [
        F(
          'div',
          {
            ref: 'bar',
            class: w(e.ns.e('bar')),
            onClick: t[0] || (t[0] = (...r) => e.handleClick && e.handleClick(...r))
          },
          null,
          2
        ),
        F(
          'div',
          {
            ref: 'thumb',
            class: w(e.ns.e('thumb')),
            style: $e({ left: e.thumbLeft + 'px', top: e.thumbTop + 'px' })
          },
          null,
          6
        )
      ],
      2
    )
  )
}
var Jf = me(Gf, [
  ['render', Xf],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/hue-slider.vue'
  ]
])
const Zf = ge({
    modelValue: String,
    id: String,
    showAlpha: Boolean,
    colorFormat: String,
    disabled: Boolean,
    size: qt,
    popperClass: { type: String, default: '' },
    label: { type: String, default: void 0 },
    tabindex: { type: [String, Number], default: 0 },
    predefine: { type: re(Array) },
    validateEvent: { type: Boolean, default: !0 }
  }),
  Qf = { [Ae]: e => xe(e) || _t(e), [Ht]: e => xe(e) || _t(e), activeChange: e => xe(e) || _t(e) },
  Zs = Symbol('colorPickerContextKey'),
  Pa = function (e, t, n) {
    return [e, (t * n) / ((e = (2 - t) * n) < 1 ? e : 2 - e) || 0, e / 2]
  },
  ep = function (e) {
    return typeof e == 'string' && e.includes('.') && Number.parseFloat(e) === 1
  },
  tp = function (e) {
    return typeof e == 'string' && e.includes('%')
  },
  $n = function (e, t) {
    ep(e) && (e = '100%')
    const n = tp(e)
    return (
      (e = Math.min(t, Math.max(0, Number.parseFloat(`${e}`)))),
      n && (e = Number.parseInt(`${e * t}`, 10) / 100),
      Math.abs(e - t) < 1e-6 ? 1 : (e % t) / Number.parseFloat(t)
    )
  },
  Oa = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' },
  wo = e => {
    e = Math.min(Math.round(e), 255)
    const t = Math.floor(e / 16),
      n = e % 16
    return `${Oa[t] || t}${Oa[n] || n}`
  },
  Ma = function ({ r: e, g: t, b: n }) {
    return Number.isNaN(+e) || Number.isNaN(+t) || Number.isNaN(+n)
      ? ''
      : `#${wo(e)}${wo(t)}${wo(n)}`
  },
  qo = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 },
  dn = function (e) {
    return e.length === 2
      ? (qo[e[0].toUpperCase()] || +e[0]) * 16 + (qo[e[1].toUpperCase()] || +e[1])
      : qo[e[1].toUpperCase()] || +e[1]
  },
  np = function (e, t, n) {
    ;(t = t / 100), (n = n / 100)
    let l = t
    const a = Math.max(n, 0.01)
    ;(n *= 2), (t *= n <= 1 ? n : 2 - n), (l *= a <= 1 ? a : 2 - a)
    const s = (n + t) / 2,
      r = n === 0 ? (2 * l) / (a + l) : (2 * t) / (n + t)
    return { h: e, s: r * 100, v: s * 100 }
  },
  _a = (e, t, n) => {
    ;(e = $n(e, 255)), (t = $n(t, 255)), (n = $n(n, 255))
    const l = Math.max(e, t, n),
      a = Math.min(e, t, n)
    let s
    const r = l,
      i = l - a,
      u = l === 0 ? 0 : i / l
    if (l === a) s = 0
    else {
      switch (l) {
        case e: {
          s = (t - n) / i + (t < n ? 6 : 0)
          break
        }
        case t: {
          s = (n - e) / i + 2
          break
        }
        case n: {
          s = (e - t) / i + 4
          break
        }
      }
      s /= 6
    }
    return { h: s * 360, s: u * 100, v: r * 100 }
  },
  Yn = function (e, t, n) {
    ;(e = $n(e, 360) * 6), (t = $n(t, 100)), (n = $n(n, 100))
    const l = Math.floor(e),
      a = e - l,
      s = n * (1 - t),
      r = n * (1 - a * t),
      i = n * (1 - (1 - a) * t),
      u = l % 6,
      f = [n, r, s, s, i, n][u],
      m = [i, n, n, r, s, s][u],
      p = [s, s, i, n, n, r][u]
    return { r: Math.round(f * 255), g: Math.round(m * 255), b: Math.round(p * 255) }
  }
class qn {
  constructor(t = {}) {
    ;(this._hue = 0),
      (this._saturation = 100),
      (this._value = 100),
      (this._alpha = 100),
      (this.enableAlpha = !1),
      (this.format = 'hex'),
      (this.value = '')
    for (const n in t) Co(t, n) && (this[n] = t[n])
    t.value ? this.fromString(t.value) : this.doOnChange()
  }
  set(t, n) {
    if (arguments.length === 1 && typeof t == 'object') {
      for (const l in t) Co(t, l) && this.set(l, t[l])
      return
    }
    ;(this[`_${t}`] = n), this.doOnChange()
  }
  get(t) {
    return t === 'alpha' ? Math.floor(this[`_${t}`]) : this[`_${t}`]
  }
  toRgb() {
    return Yn(this._hue, this._saturation, this._value)
  }
  fromString(t) {
    if (!t) {
      ;(this._hue = 0), (this._saturation = 100), (this._value = 100), this.doOnChange()
      return
    }
    const n = (l, a, s) => {
      ;(this._hue = Math.max(0, Math.min(360, l))),
        (this._saturation = Math.max(0, Math.min(100, a))),
        (this._value = Math.max(0, Math.min(100, s))),
        this.doOnChange()
    }
    if (t.includes('hsl')) {
      const l = t
        .replace(/hsla|hsl|\(|\)/gm, '')
        .split(/\s|,/g)
        .filter(a => a !== '')
        .map((a, s) => (s > 2 ? Number.parseFloat(a) : Number.parseInt(a, 10)))
      if (
        (l.length === 4
          ? (this._alpha = Number.parseFloat(l[3]) * 100)
          : l.length === 3 && (this._alpha = 100),
        l.length >= 3)
      ) {
        const { h: a, s, v: r } = np(l[0], l[1], l[2])
        n(a, s, r)
      }
    } else if (t.includes('hsv')) {
      const l = t
        .replace(/hsva|hsv|\(|\)/gm, '')
        .split(/\s|,/g)
        .filter(a => a !== '')
        .map((a, s) => (s > 2 ? Number.parseFloat(a) : Number.parseInt(a, 10)))
      l.length === 4
        ? (this._alpha = Number.parseFloat(l[3]) * 100)
        : l.length === 3 && (this._alpha = 100),
        l.length >= 3 && n(l[0], l[1], l[2])
    } else if (t.includes('rgb')) {
      const l = t
        .replace(/rgba|rgb|\(|\)/gm, '')
        .split(/\s|,/g)
        .filter(a => a !== '')
        .map((a, s) => (s > 2 ? Number.parseFloat(a) : Number.parseInt(a, 10)))
      if (
        (l.length === 4
          ? (this._alpha = Number.parseFloat(l[3]) * 100)
          : l.length === 3 && (this._alpha = 100),
        l.length >= 3)
      ) {
        const { h: a, s, v: r } = _a(l[0], l[1], l[2])
        n(a, s, r)
      }
    } else if (t.includes('#')) {
      const l = t.replace('#', '').trim()
      if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(l)) return
      let a, s, r
      l.length === 3
        ? ((a = dn(l[0] + l[0])), (s = dn(l[1] + l[1])), (r = dn(l[2] + l[2])))
        : (l.length === 6 || l.length === 8) &&
          ((a = dn(l.slice(0, 2))), (s = dn(l.slice(2, 4))), (r = dn(l.slice(4, 6)))),
        l.length === 8
          ? (this._alpha = (dn(l.slice(6)) / 255) * 100)
          : (l.length === 3 || l.length === 6) && (this._alpha = 100)
      const { h: i, s: u, v: f } = _a(a, s, r)
      n(i, u, f)
    }
  }
  compare(t) {
    return (
      Math.abs(t._hue - this._hue) < 2 &&
      Math.abs(t._saturation - this._saturation) < 1 &&
      Math.abs(t._value - this._value) < 1 &&
      Math.abs(t._alpha - this._alpha) < 1
    )
  }
  doOnChange() {
    const { _hue: t, _saturation: n, _value: l, _alpha: a, format: s } = this
    if (this.enableAlpha)
      switch (s) {
        case 'hsl': {
          const r = Pa(t, n / 100, l / 100)
          this.value = `hsla(${t}, ${Math.round(r[1] * 100)}%, ${Math.round(r[2] * 100)}%, ${
            this.get('alpha') / 100
          })`
          break
        }
        case 'hsv': {
          this.value = `hsva(${t}, ${Math.round(n)}%, ${Math.round(l)}%, ${
            this.get('alpha') / 100
          })`
          break
        }
        case 'hex': {
          this.value = `${Ma(Yn(t, n, l))}${wo((a * 255) / 100)}`
          break
        }
        default: {
          const { r, g: i, b: u } = Yn(t, n, l)
          this.value = `rgba(${r}, ${i}, ${u}, ${this.get('alpha') / 100})`
        }
      }
    else
      switch (s) {
        case 'hsl': {
          const r = Pa(t, n / 100, l / 100)
          this.value = `hsl(${t}, ${Math.round(r[1] * 100)}%, ${Math.round(r[2] * 100)}%)`
          break
        }
        case 'hsv': {
          this.value = `hsv(${t}, ${Math.round(n)}%, ${Math.round(l)}%)`
          break
        }
        case 'rgb': {
          const { r, g: i, b: u } = Yn(t, n, l)
          this.value = `rgb(${r}, ${i}, ${u})`
          break
        }
        default:
          this.value = Ma(Yn(t, n, l))
      }
  }
}
const op = Q({
    props: { colors: { type: Array, required: !0 }, color: { type: Object, required: !0 } },
    setup(e) {
      const t = ve('color-predefine'),
        { currentColor: n } = Ce(Zs),
        l = N(s(e.colors, e.color))
      ce(
        () => n.value,
        r => {
          const i = new qn()
          i.fromString(r),
            l.value.forEach(u => {
              u.selected = i.compare(u)
            })
        }
      ),
        fl(() => {
          l.value = s(e.colors, e.color)
        })
      function a(r) {
        e.color.fromString(e.colors[r])
      }
      function s(r, i) {
        return r.map(u => {
          const f = new qn()
          return (
            (f.enableAlpha = !0),
            (f.format = 'rgba'),
            f.fromString(u),
            (f.selected = f.value === i.value),
            f
          )
        })
      }
      return { rgbaColors: l, handleSelect: a, ns: t }
    }
  }),
  lp = ['onClick']
function ap(e, t, n, l, a, s) {
  return (
    C(),
    A(
      'div',
      { class: w(e.ns.b()) },
      [
        F(
          'div',
          { class: w(e.ns.e('colors')) },
          [
            (C(!0),
            A(
              Pe,
              null,
              qe(
                e.rgbaColors,
                (r, i) => (
                  C(),
                  A(
                    'div',
                    {
                      key: e.colors[i],
                      class: w([
                        e.ns.e('color-selector'),
                        e.ns.is('alpha', r._alpha < 100),
                        { selected: r.selected }
                      ]),
                      onClick: u => e.handleSelect(i)
                    },
                    [F('div', { style: $e({ backgroundColor: r.value }) }, null, 4)],
                    10,
                    lp
                  )
                )
              ),
              128
            ))
          ],
          2
        )
      ],
      2
    )
  )
}
var sp = me(op, [
  ['render', ap],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/predefine.vue'
  ]
])
const rp = Q({
    name: 'ElSlPanel',
    props: { color: { type: Object, required: !0 } },
    setup(e) {
      const t = ve('color-svpanel'),
        n = at(),
        l = N(0),
        a = N(0),
        s = N('hsl(0, 100%, 50%)'),
        r = S(() => {
          const f = e.color.get('hue'),
            m = e.color.get('value')
          return { hue: f, value: m }
        })
      function i() {
        const f = e.color.get('saturation'),
          m = e.color.get('value'),
          p = n.vnode.el,
          { clientWidth: h, clientHeight: c } = p
        ;(a.value = (f * h) / 100),
          (l.value = ((100 - m) * c) / 100),
          (s.value = `hsl(${e.color.get('hue')}, 100%, 50%)`)
      }
      function u(f) {
        const p = n.vnode.el.getBoundingClientRect(),
          { clientX: h, clientY: c } = gl(f)
        let d = h - p.left,
          v = c - p.top
        ;(d = Math.max(0, d)),
          (d = Math.min(d, p.width)),
          (v = Math.max(0, v)),
          (v = Math.min(v, p.height)),
          (a.value = d),
          (l.value = v),
          e.color.set({ saturation: (d / p.width) * 100, value: 100 - (v / p.height) * 100 })
      }
      return (
        ce(
          () => r.value,
          () => {
            i()
          }
        ),
        De(() => {
          eo(n.vnode.el, {
            drag: f => {
              u(f)
            },
            end: f => {
              u(f)
            }
          }),
            i()
        }),
        {
          cursorTop: l,
          cursorLeft: a,
          background: s,
          colorValue: r,
          handleDrag: u,
          update: i,
          ns: t
        }
      )
    }
  }),
  ip = F('div', null, null, -1),
  up = [ip]
function cp(e, t, n, l, a, s) {
  return (
    C(),
    A(
      'div',
      { class: w(e.ns.b()), style: $e({ backgroundColor: e.background }) },
      [
        F('div', { class: w(e.ns.e('white')) }, null, 2),
        F('div', { class: w(e.ns.e('black')) }, null, 2),
        F(
          'div',
          {
            class: w(e.ns.e('cursor')),
            style: $e({ top: e.cursorTop + 'px', left: e.cursorLeft + 'px' })
          },
          up,
          6
        )
      ],
      6
    )
  )
}
var dp = me(rp, [
  ['render', cp],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/sv-panel.vue'
  ]
])
const fp = ['id', 'aria-label', 'aria-labelledby', 'aria-description', 'tabindex', 'onKeydown'],
  pp = Q({ name: 'ElColorPicker' }),
  vp = Q({
    ...pp,
    props: Zf,
    emits: Qf,
    setup(e, { expose: t, emit: n }) {
      const l = e,
        { t: a } = Ye(),
        s = ve('color'),
        { formItem: r } = Qt(),
        i = Ot(),
        u = yn(),
        { inputId: f, isLabeledByFormItem: m } = oo(l, { formItemContext: r }),
        p = N(),
        h = N(),
        c = N(),
        d = N()
      let v = !0
      const y = yt(
          new qn({ enableAlpha: l.showAlpha, format: l.colorFormat || '', value: l.modelValue })
        ),
        T = N(!1),
        E = N(!1),
        g = N(''),
        $ = S(() => (!l.modelValue && !E.value ? 'transparent' : V(y, l.showAlpha))),
        k = S(() => (!l.modelValue && !E.value ? '' : y.value)),
        P = S(() => (m.value ? void 0 : l.label || a('el.colorpicker.defaultLabel'))),
        L = S(() => (m.value ? (r == null ? void 0 : r.labelId) : void 0))
      function V(B, R) {
        if (!(B instanceof qn)) throw new TypeError('color should be instance of _color Class')
        const { r: O, g: q, b: ee } = B.toRgb()
        return R ? `rgba(${O}, ${q}, ${ee}, ${B.get('alpha') / 100})` : `rgb(${O}, ${q}, ${ee})`
      }
      function x(B) {
        T.value = B
      }
      const Y = Pn(x, 100)
      function X() {
        Y(!1), te()
      }
      function te() {
        we(() => {
          l.modelValue
            ? y.fromString(l.modelValue)
            : ((y.value = ''),
              we(() => {
                E.value = !1
              }))
        })
      }
      function _() {
        u.value || Y(!T.value)
      }
      function D() {
        y.fromString(g.value)
      }
      function U() {
        const B = y.value
        n(Ae, B),
          n('change', B),
          l.validateEvent && (r == null || r.validate('change').catch(R => void 0)),
          Y(!1),
          we(() => {
            const R = new qn({
              enableAlpha: l.showAlpha,
              format: l.colorFormat || '',
              value: l.modelValue
            })
            y.compare(R) || te()
          })
      }
      function J() {
        Y(!1),
          n(Ae, null),
          n('change', null),
          l.modelValue !== null &&
            l.validateEvent &&
            (r == null || r.validate('change').catch(B => void 0)),
          te()
      }
      return (
        De(() => {
          l.modelValue && (g.value = k.value)
        }),
        ce(
          () => l.modelValue,
          B => {
            B ? B && B !== y.value && ((v = !1), y.fromString(B)) : (E.value = !1)
          }
        ),
        ce(
          () => k.value,
          B => {
            ;(g.value = B), v && n('activeChange', B), (v = !0)
          }
        ),
        ce(
          () => y.value,
          () => {
            !l.modelValue && !E.value && (E.value = !0)
          }
        ),
        ce(
          () => T.value,
          () => {
            we(() => {
              var B, R, O
              ;(B = p.value) == null || B.update(),
                (R = h.value) == null || R.update(),
                (O = c.value) == null || O.update()
            })
          }
        ),
        Fe(Zs, { currentColor: k }),
        t({ color: y }),
        (B, R) => (
          C(),
          oe(
            o(ro),
            {
              ref_key: 'popper',
              ref: d,
              visible: T.value,
              'show-arrow': !1,
              'fallback-placements': ['bottom', 'top', 'right', 'left'],
              offset: 0,
              'gpu-acceleration': !1,
              'popper-class': [o(s).be('picker', 'panel'), o(s).b('dropdown'), B.popperClass],
              'stop-popper-mouse-event': !1,
              effect: 'light',
              trigger: 'click',
              transition: `${o(s).namespace.value}-zoom-in-top`,
              persistent: ''
            },
            {
              content: W(() => [
                Ve(
                  (C(),
                  A('div', null, [
                    F(
                      'div',
                      { class: w(o(s).be('dropdown', 'main-wrapper')) },
                      [
                        H(
                          Jf,
                          {
                            ref_key: 'hue',
                            ref: p,
                            class: 'hue-slider',
                            color: o(y),
                            vertical: ''
                          },
                          null,
                          8,
                          ['color']
                        ),
                        H(dp, { ref: 'svPanel', color: o(y) }, null, 8, ['color'])
                      ],
                      2
                    ),
                    B.showAlpha
                      ? (C(),
                        oe(qf, { key: 0, ref_key: 'alpha', ref: c, color: o(y) }, null, 8, [
                          'color'
                        ]))
                      : G('v-if', !0),
                    B.predefine
                      ? (C(),
                        oe(
                          sp,
                          { key: 1, ref: 'predefine', color: o(y), colors: B.predefine },
                          null,
                          8,
                          ['color', 'colors']
                        ))
                      : G('v-if', !0),
                    F(
                      'div',
                      { class: w(o(s).be('dropdown', 'btns')) },
                      [
                        F(
                          'span',
                          { class: w(o(s).be('dropdown', 'value')) },
                          [
                            H(
                              o(Rt),
                              {
                                modelValue: g.value,
                                'onUpdate:modelValue': R[0] || (R[0] = O => (g.value = O)),
                                'validate-event': !1,
                                size: 'small',
                                onKeyup: We(D, ['enter']),
                                onBlur: D
                              },
                              null,
                              8,
                              ['modelValue', 'onKeyup']
                            )
                          ],
                          2
                        ),
                        H(
                          o(sn),
                          {
                            class: w(o(s).be('dropdown', 'link-btn')),
                            text: '',
                            size: 'small',
                            onClick: J
                          },
                          { default: W(() => [dt(he(o(a)('el.colorpicker.clear')), 1)]), _: 1 },
                          8,
                          ['class']
                        ),
                        H(
                          o(sn),
                          {
                            plain: '',
                            size: 'small',
                            class: w(o(s).be('dropdown', 'btn')),
                            onClick: U
                          },
                          { default: W(() => [dt(he(o(a)('el.colorpicker.confirm')), 1)]), _: 1 },
                          8,
                          ['class']
                        )
                      ],
                      2
                    )
                  ])),
                  [[o(Qn), X]]
                )
              ]),
              default: W(() => [
                F(
                  'div',
                  {
                    id: o(f),
                    class: w([
                      o(s).b('picker'),
                      o(s).is('disabled', o(u)),
                      o(s).bm('picker', o(i))
                    ]),
                    role: 'button',
                    'aria-label': o(P),
                    'aria-labelledby': o(L),
                    'aria-description': o(a)('el.colorpicker.description', {
                      color: B.modelValue || ''
                    }),
                    tabindex: B.tabindex,
                    onKeydown: We(_, ['enter'])
                  },
                  [
                    o(u)
                      ? (C(), A('div', { key: 0, class: w(o(s).be('picker', 'mask')) }, null, 2))
                      : G('v-if', !0),
                    F(
                      'div',
                      { class: w(o(s).be('picker', 'trigger')), onClick: _ },
                      [
                        F(
                          'span',
                          { class: w([o(s).be('picker', 'color'), o(s).is('alpha', B.showAlpha)]) },
                          [
                            F(
                              'span',
                              {
                                class: w(o(s).be('picker', 'color-inner')),
                                style: $e({ backgroundColor: o($) })
                              },
                              [
                                Ve(
                                  H(
                                    o(be),
                                    {
                                      class: w([
                                        o(s).be('picker', 'icon'),
                                        o(s).is('icon-arrow-down')
                                      ])
                                    },
                                    { default: W(() => [H(o(no))]), _: 1 },
                                    8,
                                    ['class']
                                  ),
                                  [[ot, B.modelValue || E.value]]
                                ),
                                !B.modelValue && !E.value
                                  ? (C(),
                                    oe(
                                      o(be),
                                      {
                                        key: 0,
                                        class: w([
                                          o(s).be('picker', 'empty'),
                                          o(s).is('icon-close')
                                        ])
                                      },
                                      { default: W(() => [H(o(mn))]), _: 1 },
                                      8,
                                      ['class']
                                    ))
                                  : G('v-if', !0)
                              ],
                              6
                            )
                          ],
                          2
                        )
                      ],
                      2
                    )
                  ],
                  42,
                  fp
                )
              ]),
              _: 1
            },
            8,
            ['visible', 'popper-class', 'transition']
          )
        )
      )
    }
  })
var mp = me(vp, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/color-picker.vue'
  ]
])
const Lb = Ue(mp),
  ll = {},
  gp = ge({
    a11y: { type: Boolean, default: !0 },
    locale: { type: re(Object) },
    size: qt,
    button: { type: re(Object) },
    experimentalFeatures: { type: re(Object) },
    keyboardNavigation: { type: Boolean, default: !0 },
    message: { type: re(Object) },
    zIndex: Number,
    namespace: { type: String, default: 'el' }
  })
Q({
  name: 'ElConfigProvider',
  props: gp,
  setup(e, { slots: t }) {
    ce(
      () => e.message,
      l => {
        Object.assign(ll, l != null ? l : {})
      },
      { immediate: !0, deep: !0 }
    )
    const n = Ai(e)
    return () => fe(t, 'default', { config: n == null ? void 0 : n.value })
  }
})
const hp = ge({ type: { type: re(String), default: 'date' } }),
  bp = ['date', 'dates', 'year', 'month', 'week', 'range'],
  Bl = ge({
    disabledDate: { type: re(Function) },
    date: { type: re(Object), required: !0 },
    minDate: { type: re(Object) },
    maxDate: { type: re(Object) },
    parsedValue: { type: re([Object, Array]) },
    rangeState: { type: re(Object), default: () => ({ endDate: null, selecting: !1 }) }
  }),
  Qs = ge({ type: { type: re(String), required: !0, values: Ii } }),
  er = ge({ unlinkPanels: Boolean, parsedValue: { type: re(Array) } }),
  tr = e => ({ type: String, values: bp, default: e }),
  yp = ge({
    ...Qs,
    parsedValue: { type: re([Object, Array]) },
    visible: { type: Boolean },
    format: { type: String, default: '' }
  }),
  wp = ge({
    ...Bl,
    cellClassName: { type: re(Function) },
    showWeekNumber: Boolean,
    selectionMode: tr('date')
  }),
  al = e => {
    if (!Je(e)) return !1
    const [t, n] = e
    return Se.isDayjs(t) && Se.isDayjs(n) && t.isSameOrBefore(n)
  },
  nr = (e, { lang: t, unit: n, unlinkPanels: l }) => {
    let a
    if (Je(e)) {
      let [s, r] = e.map(i => Se(i).locale(t))
      return l || (r = s.add(1, n)), [s, r]
    } else e ? (a = Se(e)) : (a = Se())
    return (a = a.locale(t)), [a, a.add(1, n)]
  },
  kp = (
    e,
    t,
    {
      columnIndexOffset: n,
      startDate: l,
      nextEndDate: a,
      now: s,
      unit: r,
      relativeDateGetter: i,
      setCellMetadata: u,
      setRowMetadata: f
    }
  ) => {
    for (let m = 0; m < e.row; m++) {
      const p = t[m]
      for (let h = 0; h < e.column; h++) {
        let c = p[h + n]
        c || (c = { row: m, column: h, type: 'normal', inRange: !1, start: !1, end: !1 })
        const d = m * e.column + h,
          v = i(d)
        ;(c.dayjs = v),
          (c.date = v.toDate()),
          (c.timestamp = v.valueOf()),
          (c.type = 'normal'),
          (c.inRange =
            !!(l && v.isSameOrAfter(l, r) && a && v.isSameOrBefore(a, r)) ||
            !!(l && v.isSameOrBefore(l, r) && a && v.isSameOrAfter(a, r))),
          l != null && l.isSameOrAfter(a)
            ? ((c.start = !!a && v.isSame(a, r)), (c.end = l && v.isSame(l, r)))
            : ((c.start = !!l && v.isSame(l, r)), (c.end = !!a && v.isSame(a, r))),
          v.isSame(s, r) && (c.type = 'today'),
          u == null || u(c, { rowIndex: m, columnIndex: h }),
          (p[h + n] = c)
      }
      f == null || f(p)
    }
  },
  Cp = ge({ cell: { type: re(Object) } })
var Sp = Q({
  name: 'ElDatePickerCell',
  props: Cp,
  setup(e) {
    const t = ve('date-table-cell'),
      { slots: n } = Ce(yl)
    return () => {
      const { cell: l } = e
      if (n.default) {
        const a = n
          .default(l)
          .filter(s => s.patchFlag !== -2 && s.type.toString() !== 'Symbol(Comment)')
        if (a.length) return a
      }
      return H('div', { class: t.b() }, [
        H('span', { class: t.e('text') }, [l == null ? void 0 : l.text])
      ])
    }
  }
})
const Ep = ['aria-label'],
  $p = { key: 0, scope: 'col' },
  Tp = ['aria-label'],
  Ip = ['aria-current', 'aria-selected', 'tabindex'],
  Pp = Q({
    __name: 'basic-date-table',
    props: wp,
    emits: ['changerange', 'pick', 'select'],
    setup(e, { expose: t, emit: n }) {
      const l = e,
        a = ve('date-table'),
        { t: s, lang: r } = Ye(),
        i = N(),
        u = N(),
        f = N(),
        m = N(),
        p = N([[], [], [], [], [], []])
      let h = !1
      const c = l.date.$locale().weekStart || 7,
        d = l.date
          .locale('en')
          .localeData()
          .weekdaysShort()
          .map(M => M.toLowerCase()),
        v = S(() => (c > 3 ? 7 - c : -c)),
        y = S(() => {
          const M = l.date.startOf('month')
          return M.subtract(M.day() || 7, 'day')
        }),
        T = S(() => d.concat(d).slice(c, c + 7)),
        E = S(() => fi(V.value).some(M => M.isCurrent)),
        g = S(() => {
          const M = l.date.startOf('month'),
            j = M.day() || 7,
            le = M.daysInMonth(),
            ie = M.subtract(1, 'month').daysInMonth()
          return { startOfMonthDay: j, dateCountOfMonth: le, dateCountOfLastMonth: ie }
        }),
        $ = S(() => (l.selectionMode === 'dates' ? pn(l.parsedValue) : [])),
        k = (M, { count: j, rowIndex: le, columnIndex: ie }) => {
          const { startOfMonthDay: se, dateCountOfMonth: ae, dateCountOfLastMonth: ue } = o(g),
            ye = o(v)
          if (le >= 0 && le <= 1) {
            const pe = se + ye < 0 ? 7 + se + ye : se + ye
            if (ie + le * 7 >= pe) return (M.text = j), !0
            ;(M.text = ue - (pe - (ie % 7)) + 1 + le * 7), (M.type = 'prev-month')
          } else return j <= ae ? (M.text = j) : ((M.text = j - ae), (M.type = 'next-month')), !0
          return !1
        },
        P = (M, { columnIndex: j, rowIndex: le }, ie) => {
          const { disabledDate: se, cellClassName: ae } = l,
            ue = o($),
            ye = k(M, { count: ie, rowIndex: le, columnIndex: j }),
            pe = M.dayjs.toDate()
          return (
            (M.selected = ue.find(Me => Me.valueOf() === M.dayjs.valueOf())),
            (M.isSelected = !!M.selected),
            (M.isCurrent = X(M)),
            (M.disabled = se == null ? void 0 : se(pe)),
            (M.customClass = ae == null ? void 0 : ae(pe)),
            ye
          )
        },
        L = M => {
          if (l.selectionMode === 'week') {
            const [j, le] = l.showWeekNumber ? [1, 7] : [0, 6],
              ie = ee(M[j + 1])
            ;(M[j].inRange = ie), (M[j].start = ie), (M[le].inRange = ie), (M[le].end = ie)
          }
        },
        V = S(() => {
          const { minDate: M, maxDate: j, rangeState: le, showWeekNumber: ie } = l,
            se = v.value,
            ae = p.value,
            ue = 'day'
          let ye = 1
          if (ie)
            for (let pe = 0; pe < 6; pe++)
              ae[pe][0] || (ae[pe][0] = { type: 'week', text: y.value.add(pe * 7 + 1, ue).week() })
          return (
            kp({ row: 6, column: 7 }, ae, {
              startDate: M,
              columnIndexOffset: ie ? 1 : 0,
              nextEndDate: le.endDate || j || (le.selecting && M) || null,
              now: Se().locale(o(r)).startOf(ue),
              unit: ue,
              relativeDateGetter: pe => y.value.add(pe - se, ue),
              setCellMetadata: (...pe) => {
                P(...pe, ye) && (ye += 1)
              },
              setRowMetadata: L
            }),
            ae
          )
        })
      ce(
        () => l.date,
        async () => {
          var M, j
          ;(M = i.value) != null &&
            M.contains(document.activeElement) &&
            (await we(), (j = u.value) == null || j.focus())
        }
      )
      const x = async () => {
          var M
          ;(M = u.value) == null || M.focus()
        },
        Y = (M = '') => ['normal', 'today'].includes(M),
        X = M => l.selectionMode === 'date' && Y(M.type) && te(M, l.parsedValue),
        te = (M, j) =>
          j
            ? Se(j)
                .locale(r.value)
                .isSame(l.date.date(Number(M.text)), 'day')
            : !1,
        _ = M => {
          const j = []
          return (
            Y(M.type) && !M.disabled
              ? (j.push('available'), M.type === 'today' && j.push('today'))
              : j.push(M.type),
            X(M) && j.push('current'),
            M.inRange &&
              (Y(M.type) || l.selectionMode === 'week') &&
              (j.push('in-range'), M.start && j.push('start-date'), M.end && j.push('end-date')),
            M.disabled && j.push('disabled'),
            M.selected && j.push('selected'),
            M.customClass && j.push(M.customClass),
            j.join(' ')
          )
        },
        D = (M, j) => {
          const le = M * 7 + (j - (l.showWeekNumber ? 1 : 0)) - v.value
          return y.value.add(le, 'day')
        },
        U = M => {
          var j
          if (!l.rangeState.selecting) return
          let le = M.target
          if (
            (le.tagName === 'SPAN' && (le = (j = le.parentNode) == null ? void 0 : j.parentNode),
            le.tagName === 'DIV' && (le = le.parentNode),
            le.tagName !== 'TD')
          )
            return
          const ie = le.parentNode.rowIndex - 1,
            se = le.cellIndex
          V.value[ie][se].disabled ||
            ((ie !== f.value || se !== m.value) &&
              ((f.value = ie),
              (m.value = se),
              n('changerange', { selecting: !0, endDate: D(ie, se) })))
        },
        J = M =>
          (!E.value && (M == null ? void 0 : M.text) === 1 && M.type === 'normal') || M.isCurrent,
        B = M => {
          h || E.value || l.selectionMode !== 'date' || q(M, !0)
        },
        R = M => {
          !M.target.closest('td') || (h = !0)
        },
        O = M => {
          !M.target.closest('td') || (h = !1)
        },
        q = (M, j = !1) => {
          const le = M.target.closest('td')
          if (!le) return
          const ie = le.parentNode.rowIndex - 1,
            se = le.cellIndex,
            ae = V.value[ie][se]
          if (ae.disabled || ae.type === 'week') return
          const ue = D(ie, se)
          if (l.selectionMode === 'range')
            !l.rangeState.selecting || !l.minDate
              ? (n('pick', { minDate: ue, maxDate: null }), n('select', !0))
              : (ue >= l.minDate
                  ? n('pick', { minDate: l.minDate, maxDate: ue })
                  : n('pick', { minDate: ue, maxDate: l.minDate }),
                n('select', !1))
          else if (l.selectionMode === 'date') n('pick', ue, j)
          else if (l.selectionMode === 'week') {
            const ye = ue.week(),
              pe = `${ue.year()}w${ye}`
            n('pick', { year: ue.year(), week: ye, value: pe, date: ue.startOf('week') })
          } else if (l.selectionMode === 'dates') {
            const ye = ae.selected
              ? pn(l.parsedValue).filter(
                  pe => (pe == null ? void 0 : pe.valueOf()) !== ue.valueOf()
                )
              : pn(l.parsedValue).concat([ue])
            n('pick', ye)
          }
        },
        ee = M => {
          if (l.selectionMode !== 'week') return !1
          let j = l.date.startOf('day')
          if (
            (M.type === 'prev-month' && (j = j.subtract(1, 'month')),
            M.type === 'next-month' && (j = j.add(1, 'month')),
            (j = j.date(Number.parseInt(M.text, 10))),
            l.parsedValue && !Array.isArray(l.parsedValue))
          ) {
            const le = ((l.parsedValue.day() - c + 7) % 7) - 1
            return l.parsedValue.subtract(le, 'day').isSame(j, 'day')
          }
          return !1
        }
      return (
        t({ focus: x }),
        (M, j) => (
          C(),
          A(
            'table',
            {
              role: 'grid',
              'aria-label': o(s)('el.datepicker.dateTablePrompt'),
              cellspacing: '0',
              cellpadding: '0',
              class: w([o(a).b(), { 'is-week-mode': M.selectionMode === 'week' }]),
              onClick: q,
              onMousemove: U,
              onMousedown: R,
              onMouseup: O
            },
            [
              F(
                'tbody',
                { ref_key: 'tbodyRef', ref: i },
                [
                  F('tr', null, [
                    M.showWeekNumber
                      ? (C(), A('th', $p, he(o(s)('el.datepicker.week')), 1))
                      : G('v-if', !0),
                    (C(!0),
                    A(
                      Pe,
                      null,
                      qe(
                        o(T),
                        (le, ie) => (
                          C(),
                          A(
                            'th',
                            {
                              key: ie,
                              scope: 'col',
                              'aria-label': o(s)('el.datepicker.weeksFull.' + le)
                            },
                            he(o(s)('el.datepicker.weeks.' + le)),
                            9,
                            Tp
                          )
                        )
                      ),
                      128
                    ))
                  ]),
                  (C(!0),
                  A(
                    Pe,
                    null,
                    qe(
                      o(V),
                      (le, ie) => (
                        C(),
                        A(
                          'tr',
                          { key: ie, class: w([o(a).e('row'), { current: ee(le[1]) }]) },
                          [
                            (C(!0),
                            A(
                              Pe,
                              null,
                              qe(
                                le,
                                (se, ae) => (
                                  C(),
                                  A(
                                    'td',
                                    {
                                      key: `${ie}.${ae}`,
                                      ref_for: !0,
                                      ref: ue => J(se) && (u.value = ue),
                                      class: w(_(se)),
                                      'aria-current': se.isCurrent ? 'date' : void 0,
                                      'aria-selected': se.isCurrent,
                                      tabindex: J(se) ? 0 : -1,
                                      onFocus: B
                                    },
                                    [H(o(Sp), { cell: se }, null, 8, ['cell'])],
                                    42,
                                    Ip
                                  )
                                )
                              ),
                              128
                            ))
                          ],
                          2
                        )
                      )
                    ),
                    128
                  ))
                ],
                512
              )
            ],
            42,
            Ep
          )
        )
      )
    }
  })
var sl = me(Pp, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-date-table.vue'
  ]
])
const Op = ge({ ...Bl, selectionMode: tr('month') }),
  Mp = ['aria-label'],
  _p = ['aria-selected', 'aria-label', 'tabindex', 'onKeydown'],
  Np = { class: 'cell' },
  Vp = Q({
    __name: 'basic-month-table',
    props: Op,
    emits: ['changerange', 'pick', 'select'],
    setup(e, { expose: t, emit: n }) {
      const l = e,
        a = ($, k, P) => {
          const L = Se().locale(P).startOf('month').month(k).year($),
            V = L.daysInMonth()
          return zs(V).map(x => L.add(x, 'day').toDate())
        },
        s = ve('month-table'),
        { t: r, lang: i } = Ye(),
        u = N(),
        f = N(),
        m = N(
          l.date
            .locale('en')
            .localeData()
            .monthsShort()
            .map($ => $.toLowerCase())
        ),
        p = N([[], [], []]),
        h = N(),
        c = N(),
        d = S(() => {
          var $, k
          const P = p.value,
            L = Se().locale(i.value).startOf('month')
          for (let V = 0; V < 3; V++) {
            const x = P[V]
            for (let Y = 0; Y < 4; Y++) {
              const X =
                x[Y] ||
                (x[Y] = {
                  row: V,
                  column: Y,
                  type: 'normal',
                  inRange: !1,
                  start: !1,
                  end: !1,
                  text: -1,
                  disabled: !1
                })
              X.type = 'normal'
              const te = V * 4 + Y,
                _ = l.date.startOf('year').month(te),
                D =
                  l.rangeState.endDate || l.maxDate || (l.rangeState.selecting && l.minDate) || null
              ;(X.inRange =
                !!(
                  l.minDate &&
                  _.isSameOrAfter(l.minDate, 'month') &&
                  D &&
                  _.isSameOrBefore(D, 'month')
                ) ||
                !!(
                  l.minDate &&
                  _.isSameOrBefore(l.minDate, 'month') &&
                  D &&
                  _.isSameOrAfter(D, 'month')
                )),
                ($ = l.minDate) != null && $.isSameOrAfter(D)
                  ? ((X.start = !!(D && _.isSame(D, 'month'))),
                    (X.end = l.minDate && _.isSame(l.minDate, 'month')))
                  : ((X.start = !!(l.minDate && _.isSame(l.minDate, 'month'))),
                    (X.end = !!(D && _.isSame(D, 'month')))),
                L.isSame(_) && (X.type = 'today'),
                (X.text = te),
                (X.disabled = ((k = l.disabledDate) == null ? void 0 : k.call(l, _.toDate())) || !1)
            }
          }
          return P
        }),
        v = () => {
          var $
          ;($ = f.value) == null || $.focus()
        },
        y = $ => {
          const k = {},
            P = l.date.year(),
            L = new Date(),
            V = $.text
          return (
            (k.disabled = l.disabledDate ? a(P, V, i.value).every(l.disabledDate) : !1),
            (k.current =
              pn(l.parsedValue).findIndex(
                x => Se.isDayjs(x) && x.year() === P && x.month() === V
              ) >= 0),
            (k.today = L.getFullYear() === P && L.getMonth() === V),
            $.inRange &&
              ((k['in-range'] = !0),
              $.start && (k['start-date'] = !0),
              $.end && (k['end-date'] = !0)),
            k
          )
        },
        T = $ => {
          const k = l.date.year(),
            P = $.text
          return pn(l.date).findIndex(L => L.year() === k && L.month() === P) >= 0
        },
        E = $ => {
          var k
          if (!l.rangeState.selecting) return
          let P = $.target
          if (
            (P.tagName === 'A' && (P = (k = P.parentNode) == null ? void 0 : k.parentNode),
            P.tagName === 'DIV' && (P = P.parentNode),
            P.tagName !== 'TD')
          )
            return
          const L = P.parentNode.rowIndex,
            V = P.cellIndex
          d.value[L][V].disabled ||
            ((L !== h.value || V !== c.value) &&
              ((h.value = L),
              (c.value = V),
              n('changerange', {
                selecting: !0,
                endDate: l.date.startOf('year').month(L * 4 + V)
              })))
        },
        g = $ => {
          var k
          const P = (k = $.target) == null ? void 0 : k.closest('td')
          if ((P == null ? void 0 : P.tagName) !== 'TD' || $o(P, 'disabled')) return
          const L = P.cellIndex,
            x = P.parentNode.rowIndex * 4 + L,
            Y = l.date.startOf('year').month(x)
          l.selectionMode === 'range'
            ? l.rangeState.selecting
              ? (l.minDate && Y >= l.minDate
                  ? n('pick', { minDate: l.minDate, maxDate: Y })
                  : n('pick', { minDate: Y, maxDate: l.minDate }),
                n('select', !1))
              : (n('pick', { minDate: Y, maxDate: null }), n('select', !0))
            : n('pick', x)
        }
      return (
        ce(
          () => l.date,
          async () => {
            var $, k
            ;($ = u.value) != null &&
              $.contains(document.activeElement) &&
              (await we(), (k = f.value) == null || k.focus())
          }
        ),
        t({ focus: v }),
        ($, k) => (
          C(),
          A(
            'table',
            {
              role: 'grid',
              'aria-label': o(r)('el.datepicker.monthTablePrompt'),
              class: w(o(s).b()),
              onClick: g,
              onMousemove: E
            },
            [
              F(
                'tbody',
                { ref_key: 'tbodyRef', ref: u },
                [
                  (C(!0),
                  A(
                    Pe,
                    null,
                    qe(
                      o(d),
                      (P, L) => (
                        C(),
                        A('tr', { key: L }, [
                          (C(!0),
                          A(
                            Pe,
                            null,
                            qe(
                              P,
                              (V, x) => (
                                C(),
                                A(
                                  'td',
                                  {
                                    key: x,
                                    ref_for: !0,
                                    ref: Y => T(V) && (f.value = Y),
                                    class: w(y(V)),
                                    'aria-selected': `${T(V)}`,
                                    'aria-label': o(r)(`el.datepicker.month${+V.text + 1}`),
                                    tabindex: T(V) ? 0 : -1,
                                    onKeydown: [
                                      We(Le(g, ['prevent', 'stop']), ['space']),
                                      We(Le(g, ['prevent', 'stop']), ['enter'])
                                    ]
                                  },
                                  [
                                    F('div', null, [
                                      F(
                                        'span',
                                        Np,
                                        he(o(r)('el.datepicker.months.' + m.value[V.text])),
                                        1
                                      )
                                    ])
                                  ],
                                  42,
                                  _p
                                )
                              )
                            ),
                            128
                          ))
                        ])
                      )
                    ),
                    128
                  ))
                ],
                512
              )
            ],
            42,
            Mp
          )
        )
      )
    }
  })
var rl = me(Vp, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-month-table.vue'
  ]
])
const { date: Bp, disabledDate: Ap, parsedValue: Lp } = Bl,
  Dp = ge({ date: Bp, disabledDate: Ap, parsedValue: Lp }),
  Rp = ['aria-label'],
  Fp = ['aria-selected', 'tabindex', 'onKeydown'],
  zp = { class: 'cell' },
  Kp = { key: 1 },
  Hp = Q({
    __name: 'basic-year-table',
    props: Dp,
    emits: ['pick'],
    setup(e, { expose: t, emit: n }) {
      const l = e,
        a = (v, y) => {
          const T = Se(String(v)).locale(y).startOf('year'),
            g = T.endOf('year').dayOfYear()
          return zs(g).map($ => T.add($, 'day').toDate())
        },
        s = ve('year-table'),
        { t: r, lang: i } = Ye(),
        u = N(),
        f = N(),
        m = S(() => Math.floor(l.date.year() / 10) * 10),
        p = () => {
          var v
          ;(v = f.value) == null || v.focus()
        },
        h = v => {
          const y = {},
            T = Se().locale(i.value)
          return (
            (y.disabled = l.disabledDate ? a(v, i.value).every(l.disabledDate) : !1),
            (y.current = pn(l.parsedValue).findIndex(E => E.year() === v) >= 0),
            (y.today = T.year() === v),
            y
          )
        },
        c = v =>
          (v === m.value && l.date.year() < m.value && l.date.year() > m.value + 9) ||
          pn(l.date).findIndex(y => y.year() === v) >= 0,
        d = v => {
          const T = v.target.closest('td')
          if (T && T.textContent) {
            if ($o(T, 'disabled')) return
            const E = T.textContent || T.innerText
            n('pick', Number(E))
          }
        }
      return (
        ce(
          () => l.date,
          async () => {
            var v, y
            ;(v = u.value) != null &&
              v.contains(document.activeElement) &&
              (await we(), (y = f.value) == null || y.focus())
          }
        ),
        t({ focus: p }),
        (v, y) => (
          C(),
          A(
            'table',
            {
              role: 'grid',
              'aria-label': o(r)('el.datepicker.yearTablePrompt'),
              class: w(o(s).b()),
              onClick: d
            },
            [
              F(
                'tbody',
                { ref_key: 'tbodyRef', ref: u },
                [
                  (C(),
                  A(
                    Pe,
                    null,
                    qe(3, (T, E) =>
                      F('tr', { key: E }, [
                        (C(),
                        A(
                          Pe,
                          null,
                          qe(
                            4,
                            (g, $) => (
                              C(),
                              A(
                                Pe,
                                { key: E + '_' + $ },
                                [
                                  E * 4 + $ < 10
                                    ? (C(),
                                      A(
                                        'td',
                                        {
                                          key: 0,
                                          ref_for: !0,
                                          ref: k => c(o(m) + E * 4 + $) && (f.value = k),
                                          class: w(['available', h(o(m) + E * 4 + $)]),
                                          'aria-selected': `${c(o(m) + E * 4 + $)}`,
                                          tabindex: c(o(m) + E * 4 + $) ? 0 : -1,
                                          onKeydown: [
                                            We(Le(d, ['prevent', 'stop']), ['space']),
                                            We(Le(d, ['prevent', 'stop']), ['enter'])
                                          ]
                                        },
                                        [F('span', zp, he(o(m) + E * 4 + $), 1)],
                                        42,
                                        Fp
                                      ))
                                    : (C(), A('td', Kp))
                                ],
                                64
                              )
                            )
                          ),
                          64
                        ))
                      ])
                    ),
                    64
                  ))
                ],
                512
              )
            ],
            10,
            Rp
          )
        )
      )
    }
  })
var Wp = me(Hp, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-year-table.vue'
  ]
])
const Yp = ['onClick'],
  jp = ['aria-label'],
  xp = ['aria-label'],
  Up = ['aria-label'],
  qp = ['aria-label'],
  Gp = Q({
    __name: 'panel-date-pick',
    props: yp,
    emits: ['pick', 'set-picker-option', 'panel-change'],
    setup(e, { emit: t }) {
      const n = e,
        l = (K, de, Ee) => !0,
        a = ve('picker-panel'),
        s = ve('date-picker'),
        r = Oo(),
        i = Ln(),
        { t: u, lang: f } = Ye(),
        m = Ce('EP_PICKER_BASE'),
        p = Ce(Vo),
        {
          shortcuts: h,
          disabledDate: c,
          cellClassName: d,
          defaultTime: v,
          arrowControl: y
        } = m.props,
        T = Qe(m.props, 'defaultValue'),
        E = N(),
        g = N(Se().locale(f.value)),
        $ = S(() => Se(v).locale(f.value)),
        k = S(() => g.value.month()),
        P = S(() => g.value.year()),
        L = N([]),
        V = N(null),
        x = N(null),
        Y = K => (L.value.length > 0 ? l(K, L.value, n.format || 'HH:mm:ss') : !0),
        X = K =>
          v && !Me.value
            ? $.value.year(K.year()).month(K.month()).date(K.date())
            : ie.value
            ? K.millisecond(0)
            : K.startOf('day'),
        te = (K, ...de) => {
          if (!K) t('pick', K, ...de)
          else if (Je(K)) {
            const Ee = K.map(X)
            t('pick', Ee, ...de)
          } else t('pick', X(K), ...de)
          ;(V.value = null), (x.value = null)
        },
        _ = (K, de) => {
          if (O.value === 'date') {
            K = K
            let Ee = n.parsedValue
              ? n.parsedValue.year(K.year()).month(K.month()).date(K.date())
              : K
            Y(Ee) || (Ee = L.value[0][0].year(K.year()).month(K.month()).date(K.date())),
              (g.value = Ee),
              te(Ee, ie.value || de)
          } else O.value === 'week' ? te(K.date) : O.value === 'dates' && te(K, !0)
        },
        D = K => {
          const de = K ? 'add' : 'subtract'
          ;(g.value = g.value[de](1, 'month')), rt('month')
        },
        U = K => {
          const de = g.value,
            Ee = K ? 'add' : 'subtract'
          ;(g.value = J.value === 'year' ? de[Ee](10, 'year') : de[Ee](1, 'year')), rt('year')
        },
        J = N('date'),
        B = S(() => {
          const K = u('el.datepicker.year')
          if (J.value === 'year') {
            const de = Math.floor(P.value / 10) * 10
            return K ? `${de} ${K} - ${de + 9} ${K}` : `${de} - ${de + 9}`
          }
          return `${P.value} ${K}`
        }),
        R = K => {
          const de = lt(K.value) ? K.value() : K.value
          if (de) {
            te(Se(de).locale(f.value))
            return
          }
          K.onClick && K.onClick({ attrs: r, slots: i, emit: t })
        },
        O = S(() => {
          const { type: K } = n
          return ['week', 'month', 'year', 'dates'].includes(K) ? K : 'date'
        }),
        q = S(() => (O.value === 'date' ? J.value : O.value)),
        ee = S(() => !!h.length),
        M = async K => {
          ;(g.value = g.value.startOf('month').month(K)),
            O.value === 'month'
              ? te(g.value, !1)
              : ((J.value = 'date'),
                ['month', 'year', 'date', 'week'].includes(O.value) &&
                  (te(g.value, !0), await we(), st())),
            rt('month')
        },
        j = async K => {
          O.value === 'year'
            ? ((g.value = g.value.startOf('year').year(K)), te(g.value, !1))
            : ((g.value = g.value.year(K)),
              (J.value = 'month'),
              ['month', 'year', 'date', 'week'].includes(O.value) &&
                (te(g.value, !0), await we(), st())),
            rt('year')
        },
        le = async K => {
          ;(J.value = K), await we(), st()
        },
        ie = S(() => n.type === 'datetime' || n.type === 'datetimerange'),
        se = S(() => ie.value || O.value === 'dates'),
        ae = () => {
          if (O.value === 'dates') te(n.parsedValue)
          else {
            let K = n.parsedValue
            if (!K) {
              const de = Se(v).locale(f.value),
                Ee = tt()
              K = de.year(Ee.year()).month(Ee.month()).date(Ee.date())
            }
            ;(g.value = K), te(K)
          }
        },
        ue = () => {
          const de = Se().locale(f.value).toDate()
          ;(!c || !c(de)) && Y(de) && ((g.value = Se().locale(f.value)), te(g.value))
        },
        ye = S(() => Hs(n.format)),
        pe = S(() => Ks(n.format)),
        Me = S(() => {
          if (x.value) return x.value
          if (!(!n.parsedValue && !T.value)) return (n.parsedValue || g.value).format(ye.value)
        }),
        Ne = S(() => {
          if (V.value) return V.value
          if (!(!n.parsedValue && !T.value)) return (n.parsedValue || g.value).format(pe.value)
        }),
        He = N(!1),
        et = () => {
          He.value = !0
        },
        Et = () => {
          He.value = !1
        },
        Ge = K => ({
          hour: K.hour(),
          minute: K.minute(),
          second: K.second(),
          year: K.year(),
          month: K.month(),
          date: K.date()
        }),
        Te = (K, de, Ee) => {
          const { hour: nt, minute: b, second: I } = Ge(K),
            z = n.parsedValue ? n.parsedValue.hour(nt).minute(b).second(I) : K
          ;(g.value = z), te(g.value, !0), Ee || (He.value = de)
        },
        it = K => {
          const de = Se(K, ye.value).locale(f.value)
          if (de.isValid() && Y(de)) {
            const { year: Ee, month: nt, date: b } = Ge(g.value)
            ;(g.value = de.year(Ee).month(nt).date(b)),
              (x.value = null),
              (He.value = !1),
              te(g.value, !0)
          }
        },
        ze = K => {
          const de = Se(K, pe.value).locale(f.value)
          if (de.isValid()) {
            if (c && c(de.toDate())) return
            const { hour: Ee, minute: nt, second: b } = Ge(g.value)
            ;(g.value = de.hour(Ee).minute(nt).second(b)), (V.value = null), te(g.value, !0)
          }
        },
        Z = K => Se.isDayjs(K) && K.isValid() && (c ? !c(K.toDate()) : !0),
        Ie = K => (O.value === 'dates' ? K.map(de => de.format(n.format)) : K.format(n.format)),
        Xe = K => Se(K, n.format).locale(f.value),
        tt = () => {
          const K = Se(T.value).locale(f.value)
          if (!T.value) {
            const de = $.value
            return Se().hour(de.hour()).minute(de.minute()).second(de.second()).locale(f.value)
          }
          return K
        },
        st = async () => {
          var K
          ;['week', 'month', 'year', 'date'].includes(O.value) &&
            ((K = E.value) == null || K.focus(), O.value === 'week' && pt(ke.down))
        },
        wt = K => {
          const { code: de } = K
          ;[ke.up, ke.down, ke.left, ke.right, ke.home, ke.end, ke.pageUp, ke.pageDown].includes(
            de
          ) && (pt(de), K.stopPropagation(), K.preventDefault()),
            [ke.enter, ke.space].includes(de) &&
              V.value === null &&
              x.value === null &&
              (K.preventDefault(), te(g.value, !1))
        },
        pt = K => {
          var de
          const {
              up: Ee,
              down: nt,
              left: b,
              right: I,
              home: z,
              end: ne,
              pageUp: _e,
              pageDown: ut
            } = ke,
            vt = {
              year: {
                [Ee]: -4,
                [nt]: 4,
                [b]: -1,
                [I]: 1,
                offset: (Oe, gt) => Oe.setFullYear(Oe.getFullYear() + gt)
              },
              month: {
                [Ee]: -4,
                [nt]: 4,
                [b]: -1,
                [I]: 1,
                offset: (Oe, gt) => Oe.setMonth(Oe.getMonth() + gt)
              },
              week: {
                [Ee]: -1,
                [nt]: 1,
                [b]: -1,
                [I]: 1,
                offset: (Oe, gt) => Oe.setDate(Oe.getDate() + gt * 7)
              },
              date: {
                [Ee]: -7,
                [nt]: 7,
                [b]: -1,
                [I]: 1,
                [z]: Oe => -Oe.getDay(),
                [ne]: Oe => -Oe.getDay() + 6,
                [_e]: Oe => -new Date(Oe.getFullYear(), Oe.getMonth(), 0).getDate(),
                [ut]: Oe => new Date(Oe.getFullYear(), Oe.getMonth() + 1, 0).getDate(),
                offset: (Oe, gt) => Oe.setDate(Oe.getDate() + gt)
              }
            },
            mt = g.value.toDate()
          for (; Math.abs(g.value.diff(mt, 'year', !0)) < 1; ) {
            const Oe = vt[q.value]
            if (!Oe) return
            if ((Oe.offset(mt, lt(Oe[K]) ? Oe[K](mt) : (de = Oe[K]) != null ? de : 0), c && c(mt)))
              break
            const gt = Se(mt).locale(f.value)
            ;(g.value = gt), t('pick', gt, !0)
            break
          }
        },
        rt = K => {
          t('panel-change', g.value.toDate(), K, J.value)
        }
      return (
        ce(
          () => O.value,
          K => {
            if (['month', 'year'].includes(K)) {
              J.value = K
              return
            }
            J.value = 'date'
          },
          { immediate: !0 }
        ),
        ce(
          () => J.value,
          () => {
            p == null || p.updatePopper()
          }
        ),
        ce(
          () => T.value,
          K => {
            K && (g.value = tt())
          },
          { immediate: !0 }
        ),
        ce(
          () => n.parsedValue,
          K => {
            if (K) {
              if (O.value === 'dates' || Array.isArray(K)) return
              g.value = K
            } else g.value = tt()
          },
          { immediate: !0 }
        ),
        t('set-picker-option', ['isValidValue', Z]),
        t('set-picker-option', ['formatToString', Ie]),
        t('set-picker-option', ['parseUserInput', Xe]),
        t('set-picker-option', ['handleFocusPicker', st]),
        (K, de) => (
          C(),
          A(
            'div',
            {
              class: w([
                o(a).b(),
                o(s).b(),
                { 'has-sidebar': K.$slots.sidebar || o(ee), 'has-time': o(ie) }
              ])
            },
            [
              F(
                'div',
                { class: w(o(a).e('body-wrapper')) },
                [
                  fe(K.$slots, 'sidebar', { class: w(o(a).e('sidebar')) }),
                  o(ee)
                    ? (C(),
                      A(
                        'div',
                        { key: 0, class: w(o(a).e('sidebar')) },
                        [
                          (C(!0),
                          A(
                            Pe,
                            null,
                            qe(
                              o(h),
                              (Ee, nt) => (
                                C(),
                                A(
                                  'button',
                                  {
                                    key: nt,
                                    type: 'button',
                                    class: w(o(a).e('shortcut')),
                                    onClick: b => R(Ee)
                                  },
                                  he(Ee.text),
                                  11,
                                  Yp
                                )
                              )
                            ),
                            128
                          ))
                        ],
                        2
                      ))
                    : G('v-if', !0),
                  F(
                    'div',
                    { class: w(o(a).e('body')) },
                    [
                      o(ie)
                        ? (C(),
                          A(
                            'div',
                            { key: 0, class: w(o(s).e('time-header')) },
                            [
                              F(
                                'span',
                                { class: w(o(s).e('editor-wrap')) },
                                [
                                  H(
                                    o(Rt),
                                    {
                                      placeholder: o(u)('el.datepicker.selectDate'),
                                      'model-value': o(Ne),
                                      size: 'small',
                                      'validate-event': !1,
                                      onInput: de[0] || (de[0] = Ee => (V.value = Ee)),
                                      onChange: ze
                                    },
                                    null,
                                    8,
                                    ['placeholder', 'model-value']
                                  )
                                ],
                                2
                              ),
                              Ve(
                                (C(),
                                A(
                                  'span',
                                  { class: w(o(s).e('editor-wrap')) },
                                  [
                                    H(
                                      o(Rt),
                                      {
                                        placeholder: o(u)('el.datepicker.selectTime'),
                                        'model-value': o(Me),
                                        size: 'small',
                                        'validate-event': !1,
                                        onFocus: et,
                                        onInput: de[1] || (de[1] = Ee => (x.value = Ee)),
                                        onChange: it
                                      },
                                      null,
                                      8,
                                      ['placeholder', 'model-value']
                                    ),
                                    H(
                                      o(ol),
                                      {
                                        visible: He.value,
                                        format: o(ye),
                                        'time-arrow-control': o(y),
                                        'parsed-value': g.value,
                                        onPick: Te
                                      },
                                      null,
                                      8,
                                      ['visible', 'format', 'time-arrow-control', 'parsed-value']
                                    )
                                  ],
                                  2
                                )),
                                [[o(Qn), Et]]
                              )
                            ],
                            2
                          ))
                        : G('v-if', !0),
                      Ve(
                        F(
                          'div',
                          {
                            class: w([
                              o(s).e('header'),
                              (J.value === 'year' || J.value === 'month') &&
                                o(s).e('header--bordered')
                            ])
                          },
                          [
                            F(
                              'span',
                              { class: w(o(s).e('prev-btn')) },
                              [
                                F(
                                  'button',
                                  {
                                    type: 'button',
                                    'aria-label': o(u)('el.datepicker.prevYear'),
                                    class: w(['d-arrow-left', o(a).e('icon-btn')]),
                                    onClick: de[2] || (de[2] = Ee => U(!1))
                                  },
                                  [H(o(be), null, { default: W(() => [H(o(Tn))]), _: 1 })],
                                  10,
                                  jp
                                ),
                                Ve(
                                  F(
                                    'button',
                                    {
                                      type: 'button',
                                      'aria-label': o(u)('el.datepicker.prevMonth'),
                                      class: w([o(a).e('icon-btn'), 'arrow-left']),
                                      onClick: de[3] || (de[3] = Ee => D(!1))
                                    },
                                    [H(o(be), null, { default: W(() => [H(o(Gn))]), _: 1 })],
                                    10,
                                    xp
                                  ),
                                  [[ot, J.value === 'date']]
                                )
                              ],
                              2
                            ),
                            F(
                              'span',
                              {
                                role: 'button',
                                class: w(o(s).e('header-label')),
                                'aria-live': 'polite',
                                tabindex: '0',
                                onKeydown: de[4] || (de[4] = We(Ee => le('year'), ['enter'])),
                                onClick: de[5] || (de[5] = Ee => le('year'))
                              },
                              he(o(B)),
                              35
                            ),
                            Ve(
                              F(
                                'span',
                                {
                                  role: 'button',
                                  'aria-live': 'polite',
                                  tabindex: '0',
                                  class: w([
                                    o(s).e('header-label'),
                                    { active: J.value === 'month' }
                                  ]),
                                  onKeydown: de[6] || (de[6] = We(Ee => le('month'), ['enter'])),
                                  onClick: de[7] || (de[7] = Ee => le('month'))
                                },
                                he(o(u)(`el.datepicker.month${o(k) + 1}`)),
                                35
                              ),
                              [[ot, J.value === 'date']]
                            ),
                            F(
                              'span',
                              { class: w(o(s).e('next-btn')) },
                              [
                                Ve(
                                  F(
                                    'button',
                                    {
                                      type: 'button',
                                      'aria-label': o(u)('el.datepicker.nextMonth'),
                                      class: w([o(a).e('icon-btn'), 'arrow-right']),
                                      onClick: de[8] || (de[8] = Ee => D(!0))
                                    },
                                    [H(o(be), null, { default: W(() => [H(o(En))]), _: 1 })],
                                    10,
                                    Up
                                  ),
                                  [[ot, J.value === 'date']]
                                ),
                                F(
                                  'button',
                                  {
                                    type: 'button',
                                    'aria-label': o(u)('el.datepicker.nextYear'),
                                    class: w([o(a).e('icon-btn'), 'd-arrow-right']),
                                    onClick: de[9] || (de[9] = Ee => U(!0))
                                  },
                                  [H(o(be), null, { default: W(() => [H(o(In))]), _: 1 })],
                                  10,
                                  qp
                                )
                              ],
                              2
                            )
                          ],
                          2
                        ),
                        [[ot, J.value !== 'time']]
                      ),
                      F(
                        'div',
                        { class: w(o(a).e('content')), onKeydown: wt },
                        [
                          J.value === 'date'
                            ? (C(),
                              oe(
                                sl,
                                {
                                  key: 0,
                                  ref_key: 'currentViewRef',
                                  ref: E,
                                  'selection-mode': o(O),
                                  date: g.value,
                                  'parsed-value': K.parsedValue,
                                  'disabled-date': o(c),
                                  'cell-class-name': o(d),
                                  onPick: _
                                },
                                null,
                                8,
                                [
                                  'selection-mode',
                                  'date',
                                  'parsed-value',
                                  'disabled-date',
                                  'cell-class-name'
                                ]
                              ))
                            : G('v-if', !0),
                          J.value === 'year'
                            ? (C(),
                              oe(
                                Wp,
                                {
                                  key: 1,
                                  ref_key: 'currentViewRef',
                                  ref: E,
                                  date: g.value,
                                  'disabled-date': o(c),
                                  'parsed-value': K.parsedValue,
                                  onPick: j
                                },
                                null,
                                8,
                                ['date', 'disabled-date', 'parsed-value']
                              ))
                            : G('v-if', !0),
                          J.value === 'month'
                            ? (C(),
                              oe(
                                rl,
                                {
                                  key: 2,
                                  ref_key: 'currentViewRef',
                                  ref: E,
                                  date: g.value,
                                  'parsed-value': K.parsedValue,
                                  'disabled-date': o(c),
                                  onPick: M
                                },
                                null,
                                8,
                                ['date', 'parsed-value', 'disabled-date']
                              ))
                            : G('v-if', !0)
                        ],
                        34
                      )
                    ],
                    2
                  )
                ],
                2
              ),
              Ve(
                F(
                  'div',
                  { class: w(o(a).e('footer')) },
                  [
                    Ve(
                      H(
                        o(sn),
                        { text: '', size: 'small', class: w(o(a).e('link-btn')), onClick: ue },
                        { default: W(() => [dt(he(o(u)('el.datepicker.now')), 1)]), _: 1 },
                        8,
                        ['class']
                      ),
                      [[ot, o(O) !== 'dates']]
                    ),
                    H(
                      o(sn),
                      { plain: '', size: 'small', class: w(o(a).e('link-btn')), onClick: ae },
                      { default: W(() => [dt(he(o(u)('el.datepicker.confirm')), 1)]), _: 1 },
                      8,
                      ['class']
                    )
                  ],
                  2
                ),
                [[ot, o(se) && J.value === 'date']]
              )
            ],
            2
          )
        )
      )
    }
  })
var Xp = me(Gp, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-pick.vue'
  ]
])
const Jp = ge({ ...Qs, ...er }),
  Zp = e => {
    const { emit: t } = at(),
      n = Oo(),
      l = Ln()
    return s => {
      const r = lt(s.value) ? s.value() : s.value
      if (r) {
        t('pick', [Se(r[0]).locale(e.value), Se(r[1]).locale(e.value)])
        return
      }
      s.onClick && s.onClick({ attrs: n, slots: l, emit: t })
    }
  },
  or = (e, { defaultValue: t, leftDate: n, rightDate: l, unit: a, onParsedValueChanged: s }) => {
    const { emit: r } = at(),
      { pickerNs: i } = Ce(yl),
      u = ve('date-range-picker'),
      { t: f, lang: m } = Ye(),
      p = Zp(m),
      h = N(),
      c = N(),
      d = N({ endDate: null, selecting: !1 }),
      v = g => {
        d.value = g
      },
      y = (g = !1) => {
        const $ = o(h),
          k = o(c)
        al([$, k]) && r('pick', [$, k], g)
      },
      T = g => {
        ;(d.value.selecting = g), g || (d.value.endDate = null)
      },
      E = () => {
        const [g, $] = nr(o(t), { lang: o(m), unit: a, unlinkPanels: e.unlinkPanels })
        ;(h.value = void 0), (c.value = void 0), (n.value = g), (l.value = $)
      }
    return (
      ce(
        t,
        g => {
          g && E()
        },
        { immediate: !0 }
      ),
      ce(
        () => e.parsedValue,
        g => {
          if (Je(g) && g.length === 2) {
            const [$, k] = g
            ;(h.value = $), (n.value = $), (c.value = k), s(o(h), o(c))
          } else E()
        },
        { immediate: !0 }
      ),
      {
        minDate: h,
        maxDate: c,
        rangeState: d,
        lang: m,
        ppNs: i,
        drpNs: u,
        handleChangeRange: v,
        handleRangeConfirm: y,
        handleShortcutClick: p,
        onSelect: T,
        t: f
      }
    )
  },
  Qp = ['onClick'],
  ev = ['disabled'],
  tv = ['disabled'],
  nv = ['disabled'],
  ov = ['disabled'],
  vo = 'month',
  lv = Q({
    __name: 'panel-date-range',
    props: Jp,
    emits: ['pick', 'set-picker-option', 'calendar-change', 'panel-change'],
    setup(e, { emit: t }) {
      const n = e,
        l = Ce('EP_PICKER_BASE'),
        {
          disabledDate: a,
          cellClassName: s,
          format: r,
          defaultTime: i,
          arrowControl: u,
          clearable: f
        } = l.props,
        m = Qe(l.props, 'shortcuts'),
        p = Qe(l.props, 'defaultValue'),
        { lang: h } = Ye(),
        c = N(Se().locale(h.value)),
        d = N(Se().locale(h.value).add(1, vo)),
        {
          minDate: v,
          maxDate: y,
          rangeState: T,
          ppNs: E,
          drpNs: g,
          handleChangeRange: $,
          handleRangeConfirm: k,
          handleShortcutClick: P,
          onSelect: L,
          t: V
        } = or(n, {
          defaultValue: p,
          leftDate: c,
          rightDate: d,
          unit: vo,
          onParsedValueChanged: b
        }),
        x = N({ min: null, max: null }),
        Y = N({ min: null, max: null }),
        X = S(
          () =>
            `${c.value.year()} ${V('el.datepicker.year')} ${V(
              `el.datepicker.month${c.value.month() + 1}`
            )}`
        ),
        te = S(
          () =>
            `${d.value.year()} ${V('el.datepicker.year')} ${V(
              `el.datepicker.month${d.value.month() + 1}`
            )}`
        ),
        _ = S(() => c.value.year()),
        D = S(() => c.value.month()),
        U = S(() => d.value.year()),
        J = S(() => d.value.month()),
        B = S(() => !!m.value.length),
        R = S(() => (x.value.min !== null ? x.value.min : v.value ? v.value.format(j.value) : '')),
        O = S(() =>
          x.value.max !== null
            ? x.value.max
            : y.value || v.value
            ? (y.value || v.value).format(j.value)
            : ''
        ),
        q = S(() => (Y.value.min !== null ? Y.value.min : v.value ? v.value.format(M.value) : '')),
        ee = S(() =>
          Y.value.max !== null
            ? Y.value.max
            : y.value || v.value
            ? (y.value || v.value).format(M.value)
            : ''
        ),
        M = S(() => Hs(r)),
        j = S(() => Ks(r)),
        le = () => {
          ;(c.value = c.value.subtract(1, 'year')),
            n.unlinkPanels || (d.value = c.value.add(1, 'month')),
            Ne('year')
        },
        ie = () => {
          ;(c.value = c.value.subtract(1, 'month')),
            n.unlinkPanels || (d.value = c.value.add(1, 'month')),
            Ne('month')
        },
        se = () => {
          n.unlinkPanels
            ? (d.value = d.value.add(1, 'year'))
            : ((c.value = c.value.add(1, 'year')), (d.value = c.value.add(1, 'month'))),
            Ne('year')
        },
        ae = () => {
          n.unlinkPanels
            ? (d.value = d.value.add(1, 'month'))
            : ((c.value = c.value.add(1, 'month')), (d.value = c.value.add(1, 'month'))),
            Ne('month')
        },
        ue = () => {
          ;(c.value = c.value.add(1, 'year')), Ne('year')
        },
        ye = () => {
          ;(c.value = c.value.add(1, 'month')), Ne('month')
        },
        pe = () => {
          ;(d.value = d.value.subtract(1, 'year')), Ne('year')
        },
        Me = () => {
          ;(d.value = d.value.subtract(1, 'month')), Ne('month')
        },
        Ne = I => {
          t('panel-change', [c.value.toDate(), d.value.toDate()], I)
        },
        He = S(() => {
          const I = (D.value + 1) % 12,
            z = D.value + 1 >= 12 ? 1 : 0
          return n.unlinkPanels && new Date(_.value + z, I) < new Date(U.value, J.value)
        }),
        et = S(() => n.unlinkPanels && U.value * 12 + J.value - (_.value * 12 + D.value + 1) >= 12),
        Et = S(() => !(v.value && y.value && !T.value.selecting && al([v.value, y.value]))),
        Ge = S(() => n.type === 'datetime' || n.type === 'datetimerange'),
        Te = (I, z) => {
          if (!!I)
            return i
              ? Se(i[z] || i)
                  .locale(h.value)
                  .year(I.year())
                  .month(I.month())
                  .date(I.date())
              : I
        },
        it = (I, z = !0) => {
          const ne = I.minDate,
            _e = I.maxDate,
            ut = Te(ne, 0),
            vt = Te(_e, 1)
          ;(y.value === vt && v.value === ut) ||
            (t('calendar-change', [ne.toDate(), _e && _e.toDate()]),
            (y.value = vt),
            (v.value = ut),
            !(!z || Ge.value) && k())
        },
        ze = N(!1),
        Z = N(!1),
        Ie = () => {
          ze.value = !1
        },
        Xe = () => {
          Z.value = !1
        },
        tt = (I, z) => {
          x.value[z] = I
          const ne = Se(I, j.value).locale(h.value)
          if (ne.isValid()) {
            if (a && a(ne.toDate())) return
            z === 'min'
              ? ((c.value = ne),
                (v.value = (v.value || c.value).year(ne.year()).month(ne.month()).date(ne.date())),
                n.unlinkPanels ||
                  ((d.value = ne.add(1, 'month')), (y.value = v.value.add(1, 'month'))))
              : ((d.value = ne),
                (y.value = (y.value || d.value).year(ne.year()).month(ne.month()).date(ne.date())),
                n.unlinkPanels ||
                  ((c.value = ne.subtract(1, 'month')), (v.value = y.value.subtract(1, 'month'))))
          }
        },
        st = (I, z) => {
          x.value[z] = null
        },
        wt = (I, z) => {
          Y.value[z] = I
          const ne = Se(I, M.value).locale(h.value)
          ne.isValid() &&
            (z === 'min'
              ? ((ze.value = !0),
                (v.value = (v.value || c.value)
                  .hour(ne.hour())
                  .minute(ne.minute())
                  .second(ne.second())),
                (!y.value || y.value.isBefore(v.value)) && (y.value = v.value))
              : ((Z.value = !0),
                (y.value = (y.value || d.value)
                  .hour(ne.hour())
                  .minute(ne.minute())
                  .second(ne.second())),
                (d.value = y.value),
                y.value && y.value.isBefore(v.value) && (v.value = y.value)))
        },
        pt = (I, z) => {
          ;(Y.value[z] = null),
            z === 'min'
              ? ((c.value = v.value), (ze.value = !1))
              : ((d.value = y.value), (Z.value = !1))
        },
        rt = (I, z, ne) => {
          Y.value.min ||
            (I &&
              ((c.value = I),
              (v.value = (v.value || c.value)
                .hour(I.hour())
                .minute(I.minute())
                .second(I.second()))),
            ne || (ze.value = z),
            (!y.value || y.value.isBefore(v.value)) && ((y.value = v.value), (d.value = I)))
        },
        K = (I, z, ne) => {
          Y.value.max ||
            (I &&
              ((d.value = I),
              (y.value = (y.value || d.value)
                .hour(I.hour())
                .minute(I.minute())
                .second(I.second()))),
            ne || (Z.value = z),
            y.value && y.value.isBefore(v.value) && (v.value = y.value))
        },
        de = () => {
          ;(c.value = nr(o(p), { lang: o(h), unit: 'month', unlinkPanels: n.unlinkPanels })[0]),
            (d.value = c.value.add(1, 'month')),
            t('pick', null)
        },
        Ee = I => (Je(I) ? I.map(z => z.format(r)) : I.format(r)),
        nt = I => (Je(I) ? I.map(z => Se(z, r).locale(h.value)) : Se(I, r).locale(h.value))
      function b(I, z) {
        if (n.unlinkPanels && z) {
          const ne = (I == null ? void 0 : I.year()) || 0,
            _e = (I == null ? void 0 : I.month()) || 0,
            ut = z.year(),
            vt = z.month()
          d.value = ne === ut && _e === vt ? z.add(1, vo) : z
        } else
          (d.value = c.value.add(1, vo)),
            z && (d.value = d.value.hour(z.hour()).minute(z.minute()).second(z.second()))
      }
      return (
        t('set-picker-option', ['isValidValue', al]),
        t('set-picker-option', ['parseUserInput', nt]),
        t('set-picker-option', ['formatToString', Ee]),
        t('set-picker-option', ['handleClear', de]),
        (I, z) => (
          C(),
          A(
            'div',
            {
              class: w([
                o(E).b(),
                o(g).b(),
                { 'has-sidebar': I.$slots.sidebar || o(B), 'has-time': o(Ge) }
              ])
            },
            [
              F(
                'div',
                { class: w(o(E).e('body-wrapper')) },
                [
                  fe(I.$slots, 'sidebar', { class: w(o(E).e('sidebar')) }),
                  o(B)
                    ? (C(),
                      A(
                        'div',
                        { key: 0, class: w(o(E).e('sidebar')) },
                        [
                          (C(!0),
                          A(
                            Pe,
                            null,
                            qe(
                              o(m),
                              (ne, _e) => (
                                C(),
                                A(
                                  'button',
                                  {
                                    key: _e,
                                    type: 'button',
                                    class: w(o(E).e('shortcut')),
                                    onClick: ut => o(P)(ne)
                                  },
                                  he(ne.text),
                                  11,
                                  Qp
                                )
                              )
                            ),
                            128
                          ))
                        ],
                        2
                      ))
                    : G('v-if', !0),
                  F(
                    'div',
                    { class: w(o(E).e('body')) },
                    [
                      o(Ge)
                        ? (C(),
                          A(
                            'div',
                            { key: 0, class: w(o(g).e('time-header')) },
                            [
                              F(
                                'span',
                                { class: w(o(g).e('editors-wrap')) },
                                [
                                  F(
                                    'span',
                                    { class: w(o(g).e('time-picker-wrap')) },
                                    [
                                      H(
                                        o(Rt),
                                        {
                                          size: 'small',
                                          disabled: o(T).selecting,
                                          placeholder: o(V)('el.datepicker.startDate'),
                                          class: w(o(g).e('editor')),
                                          'model-value': o(R),
                                          'validate-event': !1,
                                          onInput: z[0] || (z[0] = ne => tt(ne, 'min')),
                                          onChange: z[1] || (z[1] = ne => st(ne, 'min'))
                                        },
                                        null,
                                        8,
                                        ['disabled', 'placeholder', 'class', 'model-value']
                                      )
                                    ],
                                    2
                                  ),
                                  Ve(
                                    (C(),
                                    A(
                                      'span',
                                      { class: w(o(g).e('time-picker-wrap')) },
                                      [
                                        H(
                                          o(Rt),
                                          {
                                            size: 'small',
                                            class: w(o(g).e('editor')),
                                            disabled: o(T).selecting,
                                            placeholder: o(V)('el.datepicker.startTime'),
                                            'model-value': o(q),
                                            'validate-event': !1,
                                            onFocus: z[2] || (z[2] = ne => (ze.value = !0)),
                                            onInput: z[3] || (z[3] = ne => wt(ne, 'min')),
                                            onChange: z[4] || (z[4] = ne => pt(ne, 'min'))
                                          },
                                          null,
                                          8,
                                          ['class', 'disabled', 'placeholder', 'model-value']
                                        ),
                                        H(
                                          o(ol),
                                          {
                                            visible: ze.value,
                                            format: o(M),
                                            'datetime-role': 'start',
                                            'time-arrow-control': o(u),
                                            'parsed-value': c.value,
                                            onPick: rt
                                          },
                                          null,
                                          8,
                                          [
                                            'visible',
                                            'format',
                                            'time-arrow-control',
                                            'parsed-value'
                                          ]
                                        )
                                      ],
                                      2
                                    )),
                                    [[o(Qn), Ie]]
                                  )
                                ],
                                2
                              ),
                              F('span', null, [
                                H(o(be), null, { default: W(() => [H(o(En))]), _: 1 })
                              ]),
                              F(
                                'span',
                                { class: w([o(g).e('editors-wrap'), 'is-right']) },
                                [
                                  F(
                                    'span',
                                    { class: w(o(g).e('time-picker-wrap')) },
                                    [
                                      H(
                                        o(Rt),
                                        {
                                          size: 'small',
                                          class: w(o(g).e('editor')),
                                          disabled: o(T).selecting,
                                          placeholder: o(V)('el.datepicker.endDate'),
                                          'model-value': o(O),
                                          readonly: !o(v),
                                          'validate-event': !1,
                                          onInput: z[5] || (z[5] = ne => tt(ne, 'max')),
                                          onChange: z[6] || (z[6] = ne => st(ne, 'max'))
                                        },
                                        null,
                                        8,
                                        [
                                          'class',
                                          'disabled',
                                          'placeholder',
                                          'model-value',
                                          'readonly'
                                        ]
                                      )
                                    ],
                                    2
                                  ),
                                  Ve(
                                    (C(),
                                    A(
                                      'span',
                                      { class: w(o(g).e('time-picker-wrap')) },
                                      [
                                        H(
                                          o(Rt),
                                          {
                                            size: 'small',
                                            class: w(o(g).e('editor')),
                                            disabled: o(T).selecting,
                                            placeholder: o(V)('el.datepicker.endTime'),
                                            'model-value': o(ee),
                                            readonly: !o(v),
                                            'validate-event': !1,
                                            onFocus: z[7] || (z[7] = ne => o(v) && (Z.value = !0)),
                                            onInput: z[8] || (z[8] = ne => wt(ne, 'max')),
                                            onChange: z[9] || (z[9] = ne => pt(ne, 'max'))
                                          },
                                          null,
                                          8,
                                          [
                                            'class',
                                            'disabled',
                                            'placeholder',
                                            'model-value',
                                            'readonly'
                                          ]
                                        ),
                                        H(
                                          o(ol),
                                          {
                                            'datetime-role': 'end',
                                            visible: Z.value,
                                            format: o(M),
                                            'time-arrow-control': o(u),
                                            'parsed-value': d.value,
                                            onPick: K
                                          },
                                          null,
                                          8,
                                          [
                                            'visible',
                                            'format',
                                            'time-arrow-control',
                                            'parsed-value'
                                          ]
                                        )
                                      ],
                                      2
                                    )),
                                    [[o(Qn), Xe]]
                                  )
                                ],
                                2
                              )
                            ],
                            2
                          ))
                        : G('v-if', !0),
                      F(
                        'div',
                        { class: w([[o(E).e('content'), o(g).e('content')], 'is-left']) },
                        [
                          F(
                            'div',
                            { class: w(o(g).e('header')) },
                            [
                              F(
                                'button',
                                {
                                  type: 'button',
                                  class: w([o(E).e('icon-btn'), 'd-arrow-left']),
                                  onClick: le
                                },
                                [H(o(be), null, { default: W(() => [H(o(Tn))]), _: 1 })],
                                2
                              ),
                              F(
                                'button',
                                {
                                  type: 'button',
                                  class: w([o(E).e('icon-btn'), 'arrow-left']),
                                  onClick: ie
                                },
                                [H(o(be), null, { default: W(() => [H(o(Gn))]), _: 1 })],
                                2
                              ),
                              I.unlinkPanels
                                ? (C(),
                                  A(
                                    'button',
                                    {
                                      key: 0,
                                      type: 'button',
                                      disabled: !o(et),
                                      class: w([
                                        [o(E).e('icon-btn'), { 'is-disabled': !o(et) }],
                                        'd-arrow-right'
                                      ]),
                                      onClick: ue
                                    },
                                    [H(o(be), null, { default: W(() => [H(o(In))]), _: 1 })],
                                    10,
                                    ev
                                  ))
                                : G('v-if', !0),
                              I.unlinkPanels
                                ? (C(),
                                  A(
                                    'button',
                                    {
                                      key: 1,
                                      type: 'button',
                                      disabled: !o(He),
                                      class: w([
                                        [o(E).e('icon-btn'), { 'is-disabled': !o(He) }],
                                        'arrow-right'
                                      ]),
                                      onClick: ye
                                    },
                                    [H(o(be), null, { default: W(() => [H(o(En))]), _: 1 })],
                                    10,
                                    tv
                                  ))
                                : G('v-if', !0),
                              F('div', null, he(o(X)), 1)
                            ],
                            2
                          ),
                          H(
                            sl,
                            {
                              'selection-mode': 'range',
                              date: c.value,
                              'min-date': o(v),
                              'max-date': o(y),
                              'range-state': o(T),
                              'disabled-date': o(a),
                              'cell-class-name': o(s),
                              onChangerange: o($),
                              onPick: it,
                              onSelect: o(L)
                            },
                            null,
                            8,
                            [
                              'date',
                              'min-date',
                              'max-date',
                              'range-state',
                              'disabled-date',
                              'cell-class-name',
                              'onChangerange',
                              'onSelect'
                            ]
                          )
                        ],
                        2
                      ),
                      F(
                        'div',
                        { class: w([[o(E).e('content'), o(g).e('content')], 'is-right']) },
                        [
                          F(
                            'div',
                            { class: w(o(g).e('header')) },
                            [
                              I.unlinkPanels
                                ? (C(),
                                  A(
                                    'button',
                                    {
                                      key: 0,
                                      type: 'button',
                                      disabled: !o(et),
                                      class: w([
                                        [o(E).e('icon-btn'), { 'is-disabled': !o(et) }],
                                        'd-arrow-left'
                                      ]),
                                      onClick: pe
                                    },
                                    [H(o(be), null, { default: W(() => [H(o(Tn))]), _: 1 })],
                                    10,
                                    nv
                                  ))
                                : G('v-if', !0),
                              I.unlinkPanels
                                ? (C(),
                                  A(
                                    'button',
                                    {
                                      key: 1,
                                      type: 'button',
                                      disabled: !o(He),
                                      class: w([
                                        [o(E).e('icon-btn'), { 'is-disabled': !o(He) }],
                                        'arrow-left'
                                      ]),
                                      onClick: Me
                                    },
                                    [H(o(be), null, { default: W(() => [H(o(Gn))]), _: 1 })],
                                    10,
                                    ov
                                  ))
                                : G('v-if', !0),
                              F(
                                'button',
                                {
                                  type: 'button',
                                  class: w([o(E).e('icon-btn'), 'd-arrow-right']),
                                  onClick: se
                                },
                                [H(o(be), null, { default: W(() => [H(o(In))]), _: 1 })],
                                2
                              ),
                              F(
                                'button',
                                {
                                  type: 'button',
                                  class: w([o(E).e('icon-btn'), 'arrow-right']),
                                  onClick: ae
                                },
                                [H(o(be), null, { default: W(() => [H(o(En))]), _: 1 })],
                                2
                              ),
                              F('div', null, he(o(te)), 1)
                            ],
                            2
                          ),
                          H(
                            sl,
                            {
                              'selection-mode': 'range',
                              date: d.value,
                              'min-date': o(v),
                              'max-date': o(y),
                              'range-state': o(T),
                              'disabled-date': o(a),
                              'cell-class-name': o(s),
                              onChangerange: o($),
                              onPick: it,
                              onSelect: o(L)
                            },
                            null,
                            8,
                            [
                              'date',
                              'min-date',
                              'max-date',
                              'range-state',
                              'disabled-date',
                              'cell-class-name',
                              'onChangerange',
                              'onSelect'
                            ]
                          )
                        ],
                        2
                      )
                    ],
                    2
                  )
                ],
                2
              ),
              o(Ge)
                ? (C(),
                  A(
                    'div',
                    { key: 0, class: w(o(E).e('footer')) },
                    [
                      o(f)
                        ? (C(),
                          oe(
                            o(sn),
                            {
                              key: 0,
                              text: '',
                              size: 'small',
                              class: w(o(E).e('link-btn')),
                              onClick: de
                            },
                            { default: W(() => [dt(he(o(V)('el.datepicker.clear')), 1)]), _: 1 },
                            8,
                            ['class']
                          ))
                        : G('v-if', !0),
                      H(
                        o(sn),
                        {
                          plain: '',
                          size: 'small',
                          class: w(o(E).e('link-btn')),
                          disabled: o(Et),
                          onClick: z[10] || (z[10] = ne => o(k)(!1))
                        },
                        { default: W(() => [dt(he(o(V)('el.datepicker.confirm')), 1)]), _: 1 },
                        8,
                        ['class', 'disabled']
                      )
                    ],
                    2
                  ))
                : G('v-if', !0)
            ],
            2
          )
        )
      )
    }
  })
var av = me(lv, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-range.vue'
  ]
])
const sv = ge({ ...er }),
  rv = ['pick', 'set-picker-option'],
  iv = ({ unlinkPanels: e, leftDate: t, rightDate: n }) => {
    const { t: l } = Ye(),
      a = () => {
        ;(t.value = t.value.subtract(1, 'year')), e || (n.value = n.value.subtract(1, 'year'))
      },
      s = () => {
        e || (t.value = t.value.add(1, 'year')), (n.value = n.value.add(1, 'year'))
      },
      r = () => {
        t.value = t.value.add(1, 'year')
      },
      i = () => {
        n.value = n.value.subtract(1, 'year')
      },
      u = S(() => `${t.value.year()} ${l('el.datepicker.year')}`),
      f = S(() => `${n.value.year()} ${l('el.datepicker.year')}`),
      m = S(() => t.value.year()),
      p = S(() => (n.value.year() === t.value.year() ? t.value.year() + 1 : n.value.year()))
    return {
      leftPrevYear: a,
      rightNextYear: s,
      leftNextYear: r,
      rightPrevYear: i,
      leftLabel: u,
      rightLabel: f,
      leftYear: m,
      rightYear: p
    }
  },
  uv = ['onClick'],
  cv = ['disabled'],
  dv = ['disabled'],
  mo = 'year',
  fv = Q({ name: 'DatePickerMonthRange' }),
  pv = Q({
    ...fv,
    props: sv,
    emits: rv,
    setup(e, { emit: t }) {
      const n = e,
        { lang: l } = Ye(),
        a = Ce('EP_PICKER_BASE'),
        { shortcuts: s, disabledDate: r, format: i } = a.props,
        u = Qe(a.props, 'defaultValue'),
        f = N(Se().locale(l.value)),
        m = N(Se().locale(l.value).add(1, mo)),
        {
          minDate: p,
          maxDate: h,
          rangeState: c,
          ppNs: d,
          drpNs: v,
          handleChangeRange: y,
          handleRangeConfirm: T,
          handleShortcutClick: E,
          onSelect: g
        } = or(n, {
          defaultValue: u,
          leftDate: f,
          rightDate: m,
          unit: mo,
          onParsedValueChanged: J
        }),
        $ = S(() => !!s.length),
        {
          leftPrevYear: k,
          rightNextYear: P,
          leftNextYear: L,
          rightPrevYear: V,
          leftLabel: x,
          rightLabel: Y,
          leftYear: X,
          rightYear: te
        } = iv({ unlinkPanels: Qe(n, 'unlinkPanels'), leftDate: f, rightDate: m }),
        _ = S(() => n.unlinkPanels && te.value > X.value + 1),
        D = (B, R = !0) => {
          const O = B.minDate,
            q = B.maxDate
          ;(h.value === q && p.value === O) || ((h.value = q), (p.value = O), R && T())
        },
        U = B => B.map(R => R.format(i))
      function J(B, R) {
        if (n.unlinkPanels && R) {
          const O = (B == null ? void 0 : B.year()) || 0,
            q = R.year()
          m.value = O === q ? R.add(1, mo) : R
        } else m.value = f.value.add(1, mo)
      }
      return (
        t('set-picker-option', ['formatToString', U]),
        (B, R) => (
          C(),
          A(
            'div',
            {
              class: w([o(d).b(), o(v).b(), { 'has-sidebar': Boolean(B.$slots.sidebar) || o($) }])
            },
            [
              F(
                'div',
                { class: w(o(d).e('body-wrapper')) },
                [
                  fe(B.$slots, 'sidebar', { class: w(o(d).e('sidebar')) }),
                  o($)
                    ? (C(),
                      A(
                        'div',
                        { key: 0, class: w(o(d).e('sidebar')) },
                        [
                          (C(!0),
                          A(
                            Pe,
                            null,
                            qe(
                              o(s),
                              (O, q) => (
                                C(),
                                A(
                                  'button',
                                  {
                                    key: q,
                                    type: 'button',
                                    class: w(o(d).e('shortcut')),
                                    onClick: ee => o(E)(O)
                                  },
                                  he(O.text),
                                  11,
                                  uv
                                )
                              )
                            ),
                            128
                          ))
                        ],
                        2
                      ))
                    : G('v-if', !0),
                  F(
                    'div',
                    { class: w(o(d).e('body')) },
                    [
                      F(
                        'div',
                        { class: w([[o(d).e('content'), o(v).e('content')], 'is-left']) },
                        [
                          F(
                            'div',
                            { class: w(o(v).e('header')) },
                            [
                              F(
                                'button',
                                {
                                  type: 'button',
                                  class: w([o(d).e('icon-btn'), 'd-arrow-left']),
                                  onClick: R[0] || (R[0] = (...O) => o(k) && o(k)(...O))
                                },
                                [H(o(be), null, { default: W(() => [H(o(Tn))]), _: 1 })],
                                2
                              ),
                              B.unlinkPanels
                                ? (C(),
                                  A(
                                    'button',
                                    {
                                      key: 0,
                                      type: 'button',
                                      disabled: !o(_),
                                      class: w([
                                        [o(d).e('icon-btn'), { [o(d).is('disabled')]: !o(_) }],
                                        'd-arrow-right'
                                      ]),
                                      onClick: R[1] || (R[1] = (...O) => o(L) && o(L)(...O))
                                    },
                                    [H(o(be), null, { default: W(() => [H(o(In))]), _: 1 })],
                                    10,
                                    cv
                                  ))
                                : G('v-if', !0),
                              F('div', null, he(o(x)), 1)
                            ],
                            2
                          ),
                          H(
                            rl,
                            {
                              'selection-mode': 'range',
                              date: f.value,
                              'min-date': o(p),
                              'max-date': o(h),
                              'range-state': o(c),
                              'disabled-date': o(r),
                              onChangerange: o(y),
                              onPick: D,
                              onSelect: o(g)
                            },
                            null,
                            8,
                            [
                              'date',
                              'min-date',
                              'max-date',
                              'range-state',
                              'disabled-date',
                              'onChangerange',
                              'onSelect'
                            ]
                          )
                        ],
                        2
                      ),
                      F(
                        'div',
                        { class: w([[o(d).e('content'), o(v).e('content')], 'is-right']) },
                        [
                          F(
                            'div',
                            { class: w(o(v).e('header')) },
                            [
                              B.unlinkPanels
                                ? (C(),
                                  A(
                                    'button',
                                    {
                                      key: 0,
                                      type: 'button',
                                      disabled: !o(_),
                                      class: w([
                                        [o(d).e('icon-btn'), { 'is-disabled': !o(_) }],
                                        'd-arrow-left'
                                      ]),
                                      onClick: R[2] || (R[2] = (...O) => o(V) && o(V)(...O))
                                    },
                                    [H(o(be), null, { default: W(() => [H(o(Tn))]), _: 1 })],
                                    10,
                                    dv
                                  ))
                                : G('v-if', !0),
                              F(
                                'button',
                                {
                                  type: 'button',
                                  class: w([o(d).e('icon-btn'), 'd-arrow-right']),
                                  onClick: R[3] || (R[3] = (...O) => o(P) && o(P)(...O))
                                },
                                [H(o(be), null, { default: W(() => [H(o(In))]), _: 1 })],
                                2
                              ),
                              F('div', null, he(o(Y)), 1)
                            ],
                            2
                          ),
                          H(
                            rl,
                            {
                              'selection-mode': 'range',
                              date: m.value,
                              'min-date': o(p),
                              'max-date': o(h),
                              'range-state': o(c),
                              'disabled-date': o(r),
                              onChangerange: o(y),
                              onPick: D,
                              onSelect: o(g)
                            },
                            null,
                            8,
                            [
                              'date',
                              'min-date',
                              'max-date',
                              'range-state',
                              'disabled-date',
                              'onChangerange',
                              'onSelect'
                            ]
                          )
                        ],
                        2
                      )
                    ],
                    2
                  )
                ],
                2
              )
            ],
            2
          )
        )
      )
    }
  })
var vv = me(pv, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-month-range.vue'
  ]
])
const mv = function (e) {
  switch (e) {
    case 'daterange':
    case 'datetimerange':
      return av
    case 'monthrange':
      return vv
    default:
      return Xp
  }
}
Se.extend(oi)
Se.extend(li)
Se.extend(ai)
Se.extend(si)
Se.extend(ri)
Se.extend(ii)
Se.extend(ui)
Se.extend(ci)
var gv = Q({
  name: 'ElDatePicker',
  install: null,
  props: { ...Ys, ...hp },
  emits: ['update:modelValue'],
  setup(e, { expose: t, emit: n, slots: l }) {
    const a = ve('picker-panel')
    Fe('ElPopperOptions', yt(Qe(e, 'popperOptions'))), Fe(yl, { slots: l, pickerNs: a })
    const s = N()
    t({
      focus: (u = !0) => {
        var f
        ;(f = s.value) == null || f.focus(u)
      },
      handleOpen: () => {
        var u
        ;(u = s.value) == null || u.handleOpen()
      },
      handleClose: () => {
        var u
        ;(u = s.value) == null || u.handleClose()
      }
    })
    const i = u => {
      n('update:modelValue', u)
    }
    return () => {
      var u
      const f = (u = e.format) != null ? u : of[e.type] || Cn,
        m = mv(e.type)
      return H(cf, bt(e, { format: f, type: e.type, ref: s, 'onUpdate:modelValue': i }), {
        default: p => H(m, p, null),
        'range-separator': l['range-separator']
      })
    }
  }
})
const ko = gv
ko.install = e => {
  e.component(ko.name, ko)
}
const Db = ko,
  hv = ge({
    mask: { type: Boolean, default: !0 },
    customMaskEvent: { type: Boolean, default: !1 },
    overlayClass: { type: re([String, Array, Object]) },
    zIndex: { type: re([String, Number]) }
  }),
  bv = { click: e => e instanceof MouseEvent }
var yv = Q({
  name: 'ElOverlay',
  props: hv,
  emits: bv,
  setup(e, { slots: t, emit: n }) {
    const l = ve('overlay'),
      a = u => {
        n('click', u)
      },
      { onClick: s, onMousedown: r, onMouseup: i } = gs(e.customMaskEvent ? void 0 : a)
    return () =>
      e.mask
        ? H(
            'div',
            {
              class: [l.b(), e.overlayClass],
              style: { zIndex: e.zIndex },
              onClick: s,
              onMousedown: r,
              onMouseup: i
            },
            [fe(t, 'default')],
            bo.STYLE | bo.CLASS | bo.PROPS,
            ['onClick', 'onMouseup', 'onMousedown']
          )
        : ct(
            'div',
            {
              class: e.overlayClass,
              style: {
                zIndex: e.zIndex,
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px'
              }
            },
            [fe(t, 'default')]
          )
  }
})
const lr = yv,
  ar = ge({
    center: { type: Boolean, default: !1 },
    alignCenter: { type: Boolean, default: !1 },
    closeIcon: { type: ft },
    customClass: { type: String, default: '' },
    draggable: { type: Boolean, default: !1 },
    fullscreen: { type: Boolean, default: !1 },
    showClose: { type: Boolean, default: !0 },
    title: { type: String, default: '' }
  }),
  wv = { close: () => !0 },
  kv = ['aria-label'],
  Cv = ['id'],
  Sv = Q({ name: 'ElDialogContent' }),
  Ev = Q({
    ...Sv,
    props: ar,
    emits: wv,
    setup(e) {
      const t = e,
        { t: n } = Ye(),
        { Close: l } = Si,
        { dialogRef: a, headerRef: s, bodyId: r, ns: i, style: u } = Ce(us),
        { focusTrapRef: f } = Ce(Ol),
        m = hl(f, a),
        p = S(() => t.draggable)
      return (
        Di(a, s, p),
        (h, c) => (
          C(),
          A(
            'div',
            {
              ref: o(m),
              class: w([
                o(i).b(),
                o(i).is('fullscreen', h.fullscreen),
                o(i).is('draggable', o(p)),
                o(i).is('align-center', h.alignCenter),
                { [o(i).m('center')]: h.center },
                h.customClass
              ]),
              style: $e(o(u)),
              tabindex: '-1'
            },
            [
              F(
                'header',
                { ref_key: 'headerRef', ref: s, class: w(o(i).e('header')) },
                [
                  fe(h.$slots, 'header', {}, () => [
                    F('span', { role: 'heading', class: w(o(i).e('title')) }, he(h.title), 3)
                  ]),
                  h.showClose
                    ? (C(),
                      A(
                        'button',
                        {
                          key: 0,
                          'aria-label': o(n)('el.dialog.close'),
                          class: w(o(i).e('headerbtn')),
                          type: 'button',
                          onClick: c[0] || (c[0] = d => h.$emit('close'))
                        },
                        [
                          H(
                            o(be),
                            { class: w(o(i).e('close')) },
                            { default: W(() => [(C(), oe(je(h.closeIcon || o(l))))]), _: 1 },
                            8,
                            ['class']
                          )
                        ],
                        10,
                        kv
                      ))
                    : G('v-if', !0)
                ],
                2
              ),
              F('div', { id: o(r), class: w(o(i).e('body')) }, [fe(h.$slots, 'default')], 10, Cv),
              h.$slots.footer
                ? (C(),
                  A('footer', { key: 0, class: w(o(i).e('footer')) }, [fe(h.$slots, 'footer')], 2))
                : G('v-if', !0)
            ],
            6
          )
        )
      )
    }
  })
var $v = me(Ev, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue'
  ]
])
const sr = ge({
    ...ar,
    appendToBody: { type: Boolean, default: !1 },
    beforeClose: { type: re(Function) },
    destroyOnClose: { type: Boolean, default: !1 },
    closeOnClickModal: { type: Boolean, default: !0 },
    closeOnPressEscape: { type: Boolean, default: !0 },
    lockScroll: { type: Boolean, default: !0 },
    modal: { type: Boolean, default: !0 },
    openDelay: { type: Number, default: 0 },
    closeDelay: { type: Number, default: 0 },
    top: { type: String },
    modelValue: { type: Boolean, default: !1 },
    modalClass: String,
    width: { type: [String, Number] },
    zIndex: { type: Number },
    trapFocus: { type: Boolean, default: !1 }
  }),
  rr = {
    open: () => !0,
    opened: () => !0,
    close: () => !0,
    closed: () => !0,
    [Ae]: e => Mt(e),
    openAutoFocus: () => !0,
    closeAutoFocus: () => !0
  },
  ir = (e, t) => {
    const l = at().emit,
      { nextZIndex: a } = lo()
    let s = ''
    const r = an(),
      i = an(),
      u = N(!1),
      f = N(!1),
      m = N(!1),
      p = N(e.zIndex || a())
    let h, c
    const d = Zt('namespace', Bo),
      v = S(() => {
        const D = {},
          U = `--${d.value}-dialog`
        return (
          e.fullscreen ||
            (e.top && (D[`${U}-margin-top`] = e.top), e.width && (D[`${U}-width`] = Kt(e.width))),
          D
        )
      }),
      y = S(() => (e.alignCenter ? { display: 'flex' } : {}))
    function T() {
      l('opened')
    }
    function E() {
      l('closed'), l(Ae, !1), e.destroyOnClose && (m.value = !1)
    }
    function g() {
      l('close')
    }
    function $() {
      c == null || c(),
        h == null || h(),
        e.openDelay && e.openDelay > 0 ? ({ stop: h } = Jo(() => V(), e.openDelay)) : V()
    }
    function k() {
      h == null || h(),
        c == null || c(),
        e.closeDelay && e.closeDelay > 0 ? ({ stop: c } = Jo(() => x(), e.closeDelay)) : x()
    }
    function P() {
      function D(U) {
        U || ((f.value = !0), (u.value = !1))
      }
      e.beforeClose ? e.beforeClose(D) : k()
    }
    function L() {
      e.closeOnClickModal && P()
    }
    function V() {
      !Re || (u.value = !0)
    }
    function x() {
      u.value = !1
    }
    function Y() {
      l('openAutoFocus')
    }
    function X() {
      l('closeAutoFocus')
    }
    function te(D) {
      var U
      ;((U = D.detail) == null ? void 0 : U.focusReason) === 'pointer' && D.preventDefault()
    }
    e.lockScroll && xi(u)
    function _() {
      e.closeOnPressEscape && P()
    }
    return (
      ce(
        () => e.modelValue,
        D => {
          D
            ? ((f.value = !1),
              $(),
              (m.value = !0),
              (p.value = e.zIndex ? p.value++ : a()),
              we(() => {
                l('open'), t.value && (t.value.scrollTop = 0)
              }))
            : u.value && k()
        }
      ),
      ce(
        () => e.fullscreen,
        D => {
          !t.value ||
            (D
              ? ((s = t.value.style.transform), (t.value.style.transform = ''))
              : (t.value.style.transform = s))
        }
      ),
      De(() => {
        e.modelValue && ((u.value = !0), (m.value = !0), $())
      }),
      {
        afterEnter: T,
        afterLeave: E,
        beforeLeave: g,
        handleClose: P,
        onModalClick: L,
        close: k,
        doClose: x,
        onOpenAutoFocus: Y,
        onCloseAutoFocus: X,
        onCloseRequested: _,
        onFocusoutPrevented: te,
        titleId: r,
        bodyId: i,
        closed: f,
        style: v,
        overlayDialogStyle: y,
        rendered: m,
        visible: u,
        zIndex: p
      }
    )
  },
  Tv = ['aria-label', 'aria-labelledby', 'aria-describedby'],
  Iv = Q({ name: 'ElDialog', inheritAttrs: !1 }),
  Pv = Q({
    ...Iv,
    props: sr,
    emits: rr,
    setup(e, { expose: t }) {
      const n = e,
        l = Ln()
      On(
        {
          scope: 'el-dialog',
          from: 'the title slot',
          replacement: 'the header slot',
          version: '3.0.0',
          ref: 'https://element-plus.org/en-US/component/dialog.html#slots'
        },
        S(() => !!l.title)
      ),
        On(
          {
            scope: 'el-dialog',
            from: 'custom-class',
            replacement: 'class',
            version: '2.3.0',
            ref: 'https://element-plus.org/en-US/component/dialog.html#attributes',
            type: 'Attribute'
          },
          S(() => !!n.customClass)
        )
      const a = ve('dialog'),
        s = N(),
        r = N(),
        i = N(),
        {
          visible: u,
          titleId: f,
          bodyId: m,
          style: p,
          overlayDialogStyle: h,
          rendered: c,
          zIndex: d,
          afterEnter: v,
          afterLeave: y,
          beforeLeave: T,
          handleClose: E,
          onModalClick: g,
          onOpenAutoFocus: $,
          onCloseAutoFocus: k,
          onCloseRequested: P,
          onFocusoutPrevented: L
        } = ir(n, s)
      Fe(us, { dialogRef: s, headerRef: r, bodyId: m, ns: a, rendered: c, style: p })
      const V = gs(g),
        x = S(() => n.draggable && !n.fullscreen)
      return (
        t({ visible: u, dialogContentRef: i }),
        (Y, X) => (
          C(),
          oe(
            Mo,
            { to: 'body', disabled: !Y.appendToBody },
            [
              H(
                Pt,
                {
                  name: 'dialog-fade',
                  onAfterEnter: o(v),
                  onAfterLeave: o(y),
                  onBeforeLeave: o(T),
                  persisted: ''
                },
                {
                  default: W(() => [
                    Ve(
                      H(
                        o(lr),
                        {
                          'custom-mask-event': '',
                          mask: Y.modal,
                          'overlay-class': Y.modalClass,
                          'z-index': o(d)
                        },
                        {
                          default: W(() => [
                            F(
                              'div',
                              {
                                role: 'dialog',
                                'aria-modal': 'true',
                                'aria-label': Y.title || void 0,
                                'aria-labelledby': Y.title ? void 0 : o(f),
                                'aria-describedby': o(m),
                                class: w(`${o(a).namespace.value}-overlay-dialog`),
                                style: $e(o(h)),
                                onClick:
                                  X[0] || (X[0] = (...te) => o(V).onClick && o(V).onClick(...te)),
                                onMousedown:
                                  X[1] ||
                                  (X[1] = (...te) => o(V).onMousedown && o(V).onMousedown(...te)),
                                onMouseup:
                                  X[2] ||
                                  (X[2] = (...te) => o(V).onMouseup && o(V).onMouseup(...te))
                              },
                              [
                                H(
                                  o(Nl),
                                  {
                                    loop: '',
                                    trapped: o(u),
                                    'focus-start-el': 'container',
                                    onFocusAfterTrapped: o($),
                                    onFocusAfterReleased: o(k),
                                    onFocusoutPrevented: o(L),
                                    onReleaseRequested: o(P)
                                  },
                                  {
                                    default: W(() => [
                                      o(c)
                                        ? (C(),
                                          oe(
                                            $v,
                                            bt(
                                              { key: 0, ref_key: 'dialogContentRef', ref: i },
                                              Y.$attrs,
                                              {
                                                'custom-class': Y.customClass,
                                                center: Y.center,
                                                'align-center': Y.alignCenter,
                                                'close-icon': Y.closeIcon,
                                                draggable: o(x),
                                                fullscreen: Y.fullscreen,
                                                'show-close': Y.showClose,
                                                title: Y.title,
                                                onClose: o(E)
                                              }
                                            ),
                                            vl(
                                              {
                                                header: W(() => [
                                                  Y.$slots.title
                                                    ? fe(Y.$slots, 'title', { key: 1 })
                                                    : fe(Y.$slots, 'header', {
                                                        key: 0,
                                                        close: o(E),
                                                        titleId: o(f),
                                                        titleClass: o(a).e('title')
                                                      })
                                                ]),
                                                default: W(() => [fe(Y.$slots, 'default')]),
                                                _: 2
                                              },
                                              [
                                                Y.$slots.footer
                                                  ? {
                                                      name: 'footer',
                                                      fn: W(() => [fe(Y.$slots, 'footer')])
                                                    }
                                                  : void 0
                                              ]
                                            ),
                                            1040,
                                            [
                                              'custom-class',
                                              'center',
                                              'align-center',
                                              'close-icon',
                                              'draggable',
                                              'fullscreen',
                                              'show-close',
                                              'title',
                                              'onClose'
                                            ]
                                          ))
                                        : G('v-if', !0)
                                    ]),
                                    _: 3
                                  },
                                  8,
                                  [
                                    'trapped',
                                    'onFocusAfterTrapped',
                                    'onFocusAfterReleased',
                                    'onFocusoutPrevented',
                                    'onReleaseRequested'
                                  ]
                                )
                              ],
                              46,
                              Tv
                            )
                          ]),
                          _: 3
                        },
                        8,
                        ['mask', 'overlay-class', 'z-index']
                      ),
                      [[ot, o(u)]]
                    )
                  ]),
                  _: 3
                },
                8,
                ['onAfterEnter', 'onAfterLeave', 'onBeforeLeave']
              )
            ],
            8,
            ['disabled']
          )
        )
      )
    }
  })
var Ov = me(Pv, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue'
  ]
])
const Rb = Ue(Ov),
  Mv = ge({
    ...sr,
    direction: { type: String, default: 'rtl', values: ['ltr', 'rtl', 'ttb', 'btt'] },
    size: { type: [String, Number], default: '30%' },
    withHeader: { type: Boolean, default: !0 },
    modalFade: { type: Boolean, default: !0 }
  }),
  _v = rr,
  Nv = Q({
    name: 'ElDrawer',
    components: { ElOverlay: lr, ElFocusTrap: Nl, ElIcon: be, Close: mn },
    props: Mv,
    emits: _v,
    setup(e, { slots: t }) {
      On(
        {
          scope: 'el-drawer',
          from: 'the title slot',
          replacement: 'the header slot',
          version: '3.0.0',
          ref: 'https://element-plus.org/en-US/component/drawer.html#slots'
        },
        S(() => !!t.title)
      )
      const n = N(),
        l = N(),
        a = ve('drawer'),
        { t: s } = Ye(),
        r = S(() => e.direction === 'rtl' || e.direction === 'ltr'),
        i = S(() => Kt(e.size))
      return {
        ...ir(e, n),
        drawerRef: n,
        focusStartRef: l,
        isHorizontal: r,
        drawerSize: i,
        ns: a,
        t: s
      }
    }
  }),
  Vv = ['aria-label', 'aria-labelledby', 'aria-describedby'],
  Bv = ['id'],
  Av = ['aria-label'],
  Lv = ['id']
function Dv(e, t, n, l, a, s) {
  const r = Ke('close'),
    i = Ke('el-icon'),
    u = Ke('el-focus-trap'),
    f = Ke('el-overlay')
  return (
    C(),
    oe(
      Mo,
      { to: 'body', disabled: !e.appendToBody },
      [
        H(
          Pt,
          {
            name: e.ns.b('fade'),
            onAfterEnter: e.afterEnter,
            onAfterLeave: e.afterLeave,
            onBeforeLeave: e.beforeLeave,
            persisted: ''
          },
          {
            default: W(() => [
              Ve(
                H(
                  f,
                  {
                    mask: e.modal,
                    'overlay-class': e.modalClass,
                    'z-index': e.zIndex,
                    onClick: e.onModalClick
                  },
                  {
                    default: W(() => [
                      H(
                        u,
                        {
                          loop: '',
                          trapped: e.visible,
                          'focus-trap-el': e.drawerRef,
                          'focus-start-el': e.focusStartRef,
                          onReleaseRequested: e.onCloseRequested
                        },
                        {
                          default: W(() => [
                            F(
                              'div',
                              {
                                ref: 'drawerRef',
                                'aria-modal': 'true',
                                'aria-label': e.title || void 0,
                                'aria-labelledby': e.title ? void 0 : e.titleId,
                                'aria-describedby': e.bodyId,
                                class: w([
                                  e.ns.b(),
                                  e.direction,
                                  e.visible && 'open',
                                  e.customClass
                                ]),
                                style: $e(
                                  e.isHorizontal
                                    ? 'width: ' + e.drawerSize
                                    : 'height: ' + e.drawerSize
                                ),
                                role: 'dialog',
                                onClick: t[1] || (t[1] = Le(() => {}, ['stop']))
                              },
                              [
                                F(
                                  'span',
                                  {
                                    ref: 'focusStartRef',
                                    class: w(e.ns.e('sr-focus')),
                                    tabindex: '-1'
                                  },
                                  null,
                                  2
                                ),
                                e.withHeader
                                  ? (C(),
                                    A(
                                      'header',
                                      { key: 0, class: w(e.ns.e('header')) },
                                      [
                                        e.$slots.title
                                          ? fe(e.$slots, 'title', { key: 1 }, () => [
                                              G(' DEPRECATED SLOT ')
                                            ])
                                          : fe(
                                              e.$slots,
                                              'header',
                                              {
                                                key: 0,
                                                close: e.handleClose,
                                                titleId: e.titleId,
                                                titleClass: e.ns.e('title')
                                              },
                                              () => [
                                                e.$slots.title
                                                  ? G('v-if', !0)
                                                  : (C(),
                                                    A(
                                                      'span',
                                                      {
                                                        key: 0,
                                                        id: e.titleId,
                                                        role: 'heading',
                                                        class: w(e.ns.e('title'))
                                                      },
                                                      he(e.title),
                                                      11,
                                                      Bv
                                                    ))
                                              ]
                                            ),
                                        e.showClose
                                          ? (C(),
                                            A(
                                              'button',
                                              {
                                                key: 2,
                                                'aria-label': e.t('el.drawer.close'),
                                                class: w(e.ns.e('close-btn')),
                                                type: 'button',
                                                onClick:
                                                  t[0] ||
                                                  (t[0] = (...m) =>
                                                    e.handleClose && e.handleClose(...m))
                                              },
                                              [
                                                H(
                                                  i,
                                                  { class: w(e.ns.e('close')) },
                                                  { default: W(() => [H(r)]), _: 1 },
                                                  8,
                                                  ['class']
                                                )
                                              ],
                                              10,
                                              Av
                                            ))
                                          : G('v-if', !0)
                                      ],
                                      2
                                    ))
                                  : G('v-if', !0),
                                e.rendered
                                  ? (C(),
                                    A(
                                      'div',
                                      { key: 1, id: e.bodyId, class: w(e.ns.e('body')) },
                                      [fe(e.$slots, 'default')],
                                      10,
                                      Lv
                                    ))
                                  : G('v-if', !0),
                                e.$slots.footer
                                  ? (C(),
                                    A(
                                      'div',
                                      { key: 2, class: w(e.ns.e('footer')) },
                                      [fe(e.$slots, 'footer')],
                                      2
                                    ))
                                  : G('v-if', !0)
                              ],
                              14,
                              Vv
                            )
                          ]),
                          _: 3
                        },
                        8,
                        ['trapped', 'focus-trap-el', 'focus-start-el', 'onReleaseRequested']
                      )
                    ]),
                    _: 3
                  },
                  8,
                  ['mask', 'overlay-class', 'z-index', 'onClick']
                ),
                [[ot, e.visible]]
              )
            ]),
            _: 3
          },
          8,
          ['name', 'onAfterEnter', 'onAfterLeave', 'onBeforeLeave']
        )
      ],
      8,
      ['disabled']
    )
  )
}
var Rv = me(Nv, [
  ['render', Dv],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue'
  ]
])
const Fb = Ue(Rv),
  Fv = Q({ inheritAttrs: !1 })
function zv(e, t, n, l, a, s) {
  return fe(e.$slots, 'default')
}
var Kv = me(Fv, [
  ['render', zv],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue'
  ]
])
const Hv = Q({ name: 'ElCollectionItem', inheritAttrs: !1 })
function Wv(e, t, n, l, a, s) {
  return fe(e.$slots, 'default')
}
var Yv = me(Hv, [
  ['render', Wv],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue'
  ]
])
const ur = 'data-el-collection-item',
  cr = e => {
    const t = `El${e}Collection`,
      n = `${t}Item`,
      l = Symbol(t),
      a = Symbol(n),
      s = {
        ...Kv,
        name: t,
        setup() {
          const i = N(null),
            u = new Map()
          Fe(l, {
            itemMap: u,
            getItems: () => {
              const m = o(i)
              if (!m) return []
              const p = Array.from(m.querySelectorAll(`[${ur}]`))
              return [...u.values()].sort((c, d) => p.indexOf(c.ref) - p.indexOf(d.ref))
            },
            collectionRef: i
          })
        }
      },
      r = {
        ...Yv,
        name: n,
        setup(i, { attrs: u }) {
          const f = N(null),
            m = Ce(l, void 0)
          Fe(a, { collectionItemRef: f }),
            De(() => {
              const p = o(f)
              p && m.itemMap.set(p, { ref: p, ...u })
            }),
            It(() => {
              const p = o(f)
              m.itemMap.delete(p)
            })
        }
      }
    return {
      COLLECTION_INJECTION_KEY: l,
      COLLECTION_ITEM_INJECTION_KEY: a,
      ElCollection: s,
      ElCollectionItem: r
    }
  },
  jv = ge({
    style: { type: re([String, Array, Object]) },
    currentTabId: { type: re(String) },
    defaultCurrentTabId: String,
    loop: Boolean,
    dir: { type: String, values: ['ltr', 'rtl'], default: 'ltr' },
    orientation: { type: re(String) },
    onBlur: Function,
    onFocus: Function,
    onMousedown: Function
  }),
  {
    ElCollection: xv,
    ElCollectionItem: Uv,
    COLLECTION_INJECTION_KEY: Al,
    COLLECTION_ITEM_INJECTION_KEY: qv
  } = cr('RovingFocusGroup'),
  Ll = Symbol('elRovingFocusGroup'),
  dr = Symbol('elRovingFocusGroupItem'),
  Gv = {
    ArrowLeft: 'prev',
    ArrowUp: 'prev',
    ArrowRight: 'next',
    ArrowDown: 'next',
    PageUp: 'first',
    Home: 'first',
    PageDown: 'last',
    End: 'last'
  },
  Xv = (e, t) => {
    if (t !== 'rtl') return e
    switch (e) {
      case ke.right:
        return ke.left
      case ke.left:
        return ke.right
      default:
        return e
    }
  },
  Jv = (e, t, n) => {
    const l = Xv(e.key, n)
    if (
      !(t === 'vertical' && [ke.left, ke.right].includes(l)) &&
      !(t === 'horizontal' && [ke.up, ke.down].includes(l))
    )
      return Gv[l]
  },
  Zv = (e, t) => e.map((n, l) => e[(l + t) % e.length]),
  Dl = e => {
    const { activeElement: t } = document
    for (const n of e) if (n === t || (n.focus(), t !== document.activeElement)) return
  },
  Na = 'currentTabIdChange',
  Va = 'rovingFocusGroup.entryFocus',
  Qv = { bubbles: !1, cancelable: !0 },
  em = Q({
    name: 'ElRovingFocusGroupImpl',
    inheritAttrs: !1,
    props: jv,
    emits: [Na, 'entryFocus'],
    setup(e, { emit: t }) {
      var n
      const l = N((n = e.currentTabId || e.defaultCurrentTabId) != null ? n : null),
        a = N(!1),
        s = N(!1),
        r = N(null),
        { getItems: i } = Ce(Al, void 0),
        u = S(() => [{ outline: 'none' }, e.style]),
        f = v => {
          t(Na, v)
        },
        m = () => {
          a.value = !0
        },
        p = Ze(
          v => {
            var y
            ;(y = e.onMousedown) == null || y.call(e, v)
          },
          () => {
            s.value = !0
          }
        ),
        h = Ze(
          v => {
            var y
            ;(y = e.onFocus) == null || y.call(e, v)
          },
          v => {
            const y = !o(s),
              { target: T, currentTarget: E } = v
            if (T === E && y && !o(a)) {
              const g = new Event(Va, Qv)
              if ((E == null || E.dispatchEvent(g), !g.defaultPrevented)) {
                const $ = i().filter(x => x.focusable),
                  k = $.find(x => x.active),
                  P = $.find(x => x.id === o(l)),
                  V = [k, P, ...$].filter(Boolean).map(x => x.ref)
                Dl(V)
              }
            }
            s.value = !1
          }
        ),
        c = Ze(
          v => {
            var y
            ;(y = e.onBlur) == null || y.call(e, v)
          },
          () => {
            a.value = !1
          }
        ),
        d = (...v) => {
          t('entryFocus', ...v)
        }
      Fe(Ll, {
        currentTabbedId: Ha(l),
        loop: Qe(e, 'loop'),
        tabIndex: S(() => (o(a) ? -1 : 0)),
        rovingFocusGroupRef: r,
        rovingFocusGroupRootStyle: u,
        orientation: Qe(e, 'orientation'),
        dir: Qe(e, 'dir'),
        onItemFocus: f,
        onItemShiftTab: m,
        onBlur: c,
        onFocus: h,
        onMousedown: p
      }),
        ce(
          () => e.currentTabId,
          v => {
            l.value = v != null ? v : null
          }
        ),
        Tt(r, Va, d)
    }
  })
function tm(e, t, n, l, a, s) {
  return fe(e.$slots, 'default')
}
var nm = me(em, [
  ['render', tm],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue'
  ]
])
const om = Q({
  name: 'ElRovingFocusGroup',
  components: { ElFocusGroupCollection: xv, ElRovingFocusGroupImpl: nm }
})
function lm(e, t, n, l, a, s) {
  const r = Ke('el-roving-focus-group-impl'),
    i = Ke('el-focus-group-collection')
  return (
    C(),
    oe(i, null, {
      default: W(() => [
        H(r, Vr(Br(e.$attrs)), { default: W(() => [fe(e.$slots, 'default')]), _: 3 }, 16)
      ]),
      _: 3
    })
  )
}
var am = me(om, [
  ['render', lm],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue'
  ]
])
const sm = Q({
  components: { ElRovingFocusCollectionItem: Uv },
  props: { focusable: { type: Boolean, default: !0 }, active: { type: Boolean, default: !1 } },
  emits: ['mousedown', 'focus', 'keydown'],
  setup(e, { emit: t }) {
    const { currentTabbedId: n, loop: l, onItemFocus: a, onItemShiftTab: s } = Ce(Ll, void 0),
      { getItems: r } = Ce(Al, void 0),
      i = an(),
      u = N(null),
      f = Ze(
        c => {
          t('mousedown', c)
        },
        c => {
          e.focusable ? a(o(i)) : c.preventDefault()
        }
      ),
      m = Ze(
        c => {
          t('focus', c)
        },
        () => {
          a(o(i))
        }
      ),
      p = Ze(
        c => {
          t('keydown', c)
        },
        c => {
          const { key: d, shiftKey: v, target: y, currentTarget: T } = c
          if (d === ke.tab && v) {
            s()
            return
          }
          if (y !== T) return
          const E = Jv(c)
          if (E) {
            c.preventDefault()
            let $ = r()
              .filter(k => k.focusable)
              .map(k => k.ref)
            switch (E) {
              case 'last': {
                $.reverse()
                break
              }
              case 'prev':
              case 'next': {
                E === 'prev' && $.reverse()
                const k = $.indexOf(T)
                $ = l.value ? Zv($, k + 1) : $.slice(k + 1)
                break
              }
            }
            we(() => {
              Dl($)
            })
          }
        }
      ),
      h = S(() => n.value === o(i))
    return (
      Fe(dr, {
        rovingFocusGroupItemRef: u,
        tabIndex: S(() => (o(h) ? 0 : -1)),
        handleMousedown: f,
        handleFocus: m,
        handleKeydown: p
      }),
      { id: i, handleKeydown: p, handleFocus: m, handleMousedown: f }
    )
  }
})
function rm(e, t, n, l, a, s) {
  const r = Ke('el-roving-focus-collection-item')
  return (
    C(),
    oe(
      r,
      { id: e.id, focusable: e.focusable, active: e.active },
      { default: W(() => [fe(e.$slots, 'default')]), _: 3 },
      8,
      ['id', 'focusable', 'active']
    )
  )
}
var im = me(sm, [
  ['render', rm],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue'
  ]
])
const um = ge({
    trigger: Vl.trigger,
    effect: { ...Do.effect, default: 'light' },
    type: { type: re(String) },
    placement: { type: re(String), default: 'bottom' },
    popperOptions: { type: re(Object), default: () => ({}) },
    id: String,
    size: { type: String, default: '' },
    splitButton: Boolean,
    hideOnClick: { type: Boolean, default: !0 },
    loop: { type: Boolean, default: !0 },
    showTimeout: { type: Number, default: 150 },
    hideTimeout: { type: Number, default: 150 },
    tabindex: { type: re([Number, String]), default: 0 },
    maxHeight: { type: re([Number, String]), default: '' },
    popperClass: { type: String, default: '' },
    disabled: { type: Boolean, default: !1 },
    role: { type: String, default: 'menu' },
    buttonProps: { type: re(Object) }
  }),
  fr = ge({
    command: { type: [Object, String, Number], default: () => ({}) },
    disabled: Boolean,
    divided: Boolean,
    textValue: String,
    icon: { type: ft }
  }),
  cm = ge({ onKeydown: { type: re(Function) } }),
  dm = [ke.down, ke.pageDown, ke.home],
  pr = [ke.up, ke.pageUp, ke.end],
  fm = [...dm, ...pr],
  {
    ElCollection: pm,
    ElCollectionItem: vm,
    COLLECTION_INJECTION_KEY: mm,
    COLLECTION_ITEM_INJECTION_KEY: gm
  } = cr('Dropdown'),
  Ro = Symbol('elDropdown'),
  { ButtonGroup: hm } = sn,
  bm = Q({
    name: 'ElDropdown',
    components: {
      ElButton: sn,
      ElButtonGroup: hm,
      ElScrollbar: wl,
      ElDropdownCollection: pm,
      ElTooltip: ro,
      ElRovingFocusGroup: am,
      ElOnlyChild: Cs,
      ElIcon: be,
      ArrowDown: no
    },
    props: um,
    emits: ['visible-change', 'click', 'command'],
    setup(e, { emit: t }) {
      const n = at(),
        l = ve('dropdown'),
        { t: a } = Ye(),
        s = N(),
        r = N(),
        i = N(null),
        u = N(null),
        f = N(null),
        m = N(null),
        p = N(!1),
        h = [ke.enter, ke.space, ke.down],
        c = S(() => ({ maxHeight: Kt(e.maxHeight) })),
        d = S(() => [l.m($.value)]),
        v = an().value,
        y = S(() => e.id || v)
      function T() {
        E()
      }
      function E() {
        var U
        ;(U = i.value) == null || U.onClose()
      }
      function g() {
        var U
        ;(U = i.value) == null || U.onOpen()
      }
      const $ = Ot()
      function k(...U) {
        t('command', ...U)
      }
      function P() {}
      function L() {
        const U = o(u)
        U == null || U.focus(), (m.value = null)
      }
      function V(U) {
        m.value = U
      }
      function x(U) {
        p.value || (U.preventDefault(), U.stopImmediatePropagation())
      }
      function Y() {
        t('visible-change', !0)
      }
      function X(U) {
        ;(U == null ? void 0 : U.type) === 'keydown' && u.value.focus()
      }
      function te() {
        t('visible-change', !1)
      }
      return (
        Fe(Ro, {
          contentRef: u,
          role: S(() => e.role),
          triggerId: y,
          isUsingKeyboard: p,
          onItemEnter: P,
          onItemLeave: L
        }),
        Fe('elDropdown', {
          instance: n,
          dropdownSize: $,
          handleClick: T,
          commandHandler: k,
          trigger: Qe(e, 'trigger'),
          hideOnClick: Qe(e, 'hideOnClick')
        }),
        {
          t: a,
          ns: l,
          scrollbar: f,
          wrapStyle: c,
          dropdownTriggerKls: d,
          dropdownSize: $,
          triggerId: y,
          triggerKeys: h,
          currentTabId: m,
          handleCurrentTabIdChange: V,
          handlerMainButtonClick: U => {
            t('click', U)
          },
          handleEntryFocus: x,
          handleClose: E,
          handleOpen: g,
          handleBeforeShowTooltip: Y,
          handleShowTooltip: X,
          handleBeforeHideTooltip: te,
          onFocusAfterTrapped: U => {
            var J, B
            U.preventDefault(),
              (B = (J = u.value) == null ? void 0 : J.focus) == null ||
                B.call(J, { preventScroll: !0 })
          },
          popperRef: i,
          contentRef: u,
          triggeringElementRef: s,
          referenceElementRef: r
        }
      )
    }
  })
function ym(e, t, n, l, a, s) {
  var r
  const i = Ke('el-dropdown-collection'),
    u = Ke('el-roving-focus-group'),
    f = Ke('el-scrollbar'),
    m = Ke('el-only-child'),
    p = Ke('el-tooltip'),
    h = Ke('el-button'),
    c = Ke('arrow-down'),
    d = Ke('el-icon'),
    v = Ke('el-button-group')
  return (
    C(),
    A(
      'div',
      { class: w([e.ns.b(), e.ns.is('disabled', e.disabled)]) },
      [
        H(
          p,
          {
            ref: 'popperRef',
            role: e.role,
            effect: e.effect,
            'fallback-placements': ['bottom', 'top'],
            'popper-options': e.popperOptions,
            'gpu-acceleration': !1,
            'hide-after': e.trigger === 'hover' ? e.hideTimeout : 0,
            'manual-mode': !0,
            placement: e.placement,
            'popper-class': [e.ns.e('popper'), e.popperClass],
            'reference-element': (r = e.referenceElementRef) == null ? void 0 : r.$el,
            trigger: e.trigger,
            'trigger-keys': e.triggerKeys,
            'trigger-target-el': e.contentRef,
            'show-after': e.trigger === 'hover' ? e.showTimeout : 0,
            'stop-popper-mouse-event': !1,
            'virtual-ref': e.triggeringElementRef,
            'virtual-triggering': e.splitButton,
            disabled: e.disabled,
            transition: `${e.ns.namespace.value}-zoom-in-top`,
            teleported: '',
            pure: '',
            persistent: '',
            onBeforeShow: e.handleBeforeShowTooltip,
            onShow: e.handleShowTooltip,
            onBeforeHide: e.handleBeforeHideTooltip
          },
          vl(
            {
              content: W(() => [
                H(
                  f,
                  {
                    ref: 'scrollbar',
                    'wrap-style': e.wrapStyle,
                    tag: 'div',
                    'view-class': e.ns.e('list')
                  },
                  {
                    default: W(() => [
                      H(
                        u,
                        {
                          loop: e.loop,
                          'current-tab-id': e.currentTabId,
                          orientation: 'horizontal',
                          onCurrentTabIdChange: e.handleCurrentTabIdChange,
                          onEntryFocus: e.handleEntryFocus
                        },
                        {
                          default: W(() => [
                            H(i, null, { default: W(() => [fe(e.$slots, 'dropdown')]), _: 3 })
                          ]),
                          _: 3
                        },
                        8,
                        ['loop', 'current-tab-id', 'onCurrentTabIdChange', 'onEntryFocus']
                      )
                    ]),
                    _: 3
                  },
                  8,
                  ['wrap-style', 'view-class']
                )
              ]),
              _: 2
            },
            [
              e.splitButton
                ? void 0
                : {
                    name: 'default',
                    fn: W(() => [
                      H(
                        m,
                        { id: e.triggerId, role: 'button', tabindex: e.tabindex },
                        { default: W(() => [fe(e.$slots, 'default')]), _: 3 },
                        8,
                        ['id', 'tabindex']
                      )
                    ])
                  }
            ]
          ),
          1032,
          [
            'role',
            'effect',
            'popper-options',
            'hide-after',
            'placement',
            'popper-class',
            'reference-element',
            'trigger',
            'trigger-keys',
            'trigger-target-el',
            'show-after',
            'virtual-ref',
            'virtual-triggering',
            'disabled',
            'transition',
            'onBeforeShow',
            'onShow',
            'onBeforeHide'
          ]
        ),
        e.splitButton
          ? (C(),
            oe(
              v,
              { key: 0 },
              {
                default: W(() => [
                  H(
                    h,
                    bt({ ref: 'referenceElementRef' }, e.buttonProps, {
                      size: e.dropdownSize,
                      type: e.type,
                      disabled: e.disabled,
                      tabindex: e.tabindex,
                      onClick: e.handlerMainButtonClick
                    }),
                    { default: W(() => [fe(e.$slots, 'default')]), _: 3 },
                    16,
                    ['size', 'type', 'disabled', 'tabindex', 'onClick']
                  ),
                  H(
                    h,
                    bt({ id: e.triggerId, ref: 'triggeringElementRef' }, e.buttonProps, {
                      role: 'button',
                      size: e.dropdownSize,
                      type: e.type,
                      class: e.ns.e('caret-button'),
                      disabled: e.disabled,
                      tabindex: e.tabindex,
                      'aria-label': e.t('el.dropdown.toggleDropdown')
                    }),
                    {
                      default: W(() => [
                        H(d, { class: w(e.ns.e('icon')) }, { default: W(() => [H(c)]), _: 1 }, 8, [
                          'class'
                        ])
                      ]),
                      _: 1
                    },
                    16,
                    ['id', 'size', 'type', 'class', 'disabled', 'tabindex', 'aria-label']
                  )
                ]),
                _: 3
              }
            ))
          : G('v-if', !0)
      ],
      2
    )
  )
}
var wm = me(bm, [
  ['render', ym],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue'
  ]
])
const km = Q({
    name: 'DropdownItemImpl',
    components: { ElIcon: be },
    props: fr,
    emits: ['pointermove', 'pointerleave', 'click', 'clickimpl'],
    setup(e, { emit: t }) {
      const n = ve('dropdown'),
        { role: l } = Ce(Ro, void 0),
        { collectionItemRef: a } = Ce(gm, void 0),
        { collectionItemRef: s } = Ce(qv, void 0),
        {
          rovingFocusGroupItemRef: r,
          tabIndex: i,
          handleFocus: u,
          handleKeydown: f,
          handleMousedown: m
        } = Ce(dr, void 0),
        p = hl(a, s, r),
        h = S(() =>
          l.value === 'menu' ? 'menuitem' : l.value === 'navigation' ? 'link' : 'button'
        ),
        c = Ze(d => {
          const { code: v } = d
          if (v === ke.enter || v === ke.space)
            return d.preventDefault(), d.stopImmediatePropagation(), t('clickimpl', d), !0
        }, f)
      return {
        ns: n,
        itemRef: p,
        dataset: { [ur]: '' },
        role: h,
        tabIndex: i,
        handleFocus: u,
        handleKeydown: c,
        handleMousedown: m
      }
    }
  }),
  Cm = ['aria-disabled', 'tabindex', 'role']
function Sm(e, t, n, l, a, s) {
  const r = Ke('el-icon')
  return (
    C(),
    A(
      Pe,
      null,
      [
        e.divided
          ? (C(),
            A(
              'li',
              bt(
                { key: 0, role: 'separator', class: e.ns.bem('menu', 'item', 'divided') },
                e.$attrs
              ),
              null,
              16
            ))
          : G('v-if', !0),
        F(
          'li',
          bt(
            { ref: e.itemRef },
            { ...e.dataset, ...e.$attrs },
            {
              'aria-disabled': e.disabled,
              class: [e.ns.be('menu', 'item'), e.ns.is('disabled', e.disabled)],
              tabindex: e.tabIndex,
              role: e.role,
              onClick: t[0] || (t[0] = i => e.$emit('clickimpl', i)),
              onFocus: t[1] || (t[1] = (...i) => e.handleFocus && e.handleFocus(...i)),
              onKeydown: t[2] || (t[2] = (...i) => e.handleKeydown && e.handleKeydown(...i)),
              onMousedown: t[3] || (t[3] = (...i) => e.handleMousedown && e.handleMousedown(...i)),
              onPointermove: t[4] || (t[4] = i => e.$emit('pointermove', i)),
              onPointerleave: t[5] || (t[5] = i => e.$emit('pointerleave', i))
            }
          ),
          [
            e.icon
              ? (C(), oe(r, { key: 0 }, { default: W(() => [(C(), oe(je(e.icon)))]), _: 1 }))
              : G('v-if', !0),
            fe(e.$slots, 'default')
          ],
          16,
          Cm
        )
      ],
      64
    )
  )
}
var Em = me(km, [
  ['render', Sm],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue'
  ]
])
const vr = () => {
    const e = Ce('elDropdown', {}),
      t = S(() => (e == null ? void 0 : e.dropdownSize))
    return { elDropdown: e, _elDropdownSize: t }
  },
  $m = Q({
    name: 'ElDropdownItem',
    components: { ElDropdownCollectionItem: vm, ElRovingFocusItem: im, ElDropdownItemImpl: Em },
    inheritAttrs: !1,
    props: fr,
    emits: ['pointermove', 'pointerleave', 'click'],
    setup(e, { emit: t, attrs: n }) {
      const { elDropdown: l } = vr(),
        a = at(),
        s = N(null),
        r = S(() => {
          var c, d
          return (d = (c = o(s)) == null ? void 0 : c.textContent) != null ? d : ''
        }),
        { onItemEnter: i, onItemLeave: u } = Ce(Ro, void 0),
        f = Ze(
          c => (t('pointermove', c), c.defaultPrevented),
          Ul(c => {
            var d
            e.disabled
              ? u(c)
              : (i(c), c.defaultPrevented || (d = c.currentTarget) == null || d.focus())
          })
        ),
        m = Ze(
          c => (t('pointerleave', c), c.defaultPrevented),
          Ul(c => {
            u(c)
          })
        ),
        p = Ze(
          c => (t('click', c), c.type !== 'keydown' && c.defaultPrevented),
          c => {
            var d, v, y
            if (e.disabled) {
              c.stopImmediatePropagation()
              return
            }
            ;(d = l == null ? void 0 : l.hideOnClick) != null &&
              d.value &&
              ((v = l.handleClick) == null || v.call(l)),
              (y = l.commandHandler) == null || y.call(l, e.command, a, c)
          }
        ),
        h = S(() => ({ ...e, ...n }))
      return {
        handleClick: p,
        handlePointerMove: f,
        handlePointerLeave: m,
        textContent: r,
        propsAndAttrs: h
      }
    }
  })
function Tm(e, t, n, l, a, s) {
  var r
  const i = Ke('el-dropdown-item-impl'),
    u = Ke('el-roving-focus-item'),
    f = Ke('el-dropdown-collection-item')
  return (
    C(),
    oe(
      f,
      { disabled: e.disabled, 'text-value': (r = e.textValue) != null ? r : e.textContent },
      {
        default: W(() => [
          H(
            u,
            { focusable: !e.disabled },
            {
              default: W(() => [
                H(
                  i,
                  bt(e.propsAndAttrs, {
                    onPointerleave: e.handlePointerLeave,
                    onPointermove: e.handlePointerMove,
                    onClickimpl: e.handleClick
                  }),
                  { default: W(() => [fe(e.$slots, 'default')]), _: 3 },
                  16,
                  ['onPointerleave', 'onPointermove', 'onClickimpl']
                )
              ]),
              _: 3
            },
            8,
            ['focusable']
          )
        ]),
        _: 3
      },
      8,
      ['disabled', 'text-value']
    )
  )
}
var mr = me($m, [
  ['render', Tm],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue'
  ]
])
const Im = Q({
    name: 'ElDropdownMenu',
    props: cm,
    setup(e) {
      const t = ve('dropdown'),
        { _elDropdownSize: n } = vr(),
        l = n.value,
        { focusTrapRef: a, onKeydown: s } = Ce(Ol, void 0),
        { contentRef: r, role: i, triggerId: u } = Ce(Ro, void 0),
        { collectionRef: f, getItems: m } = Ce(mm, void 0),
        {
          rovingFocusGroupRef: p,
          rovingFocusGroupRootStyle: h,
          tabIndex: c,
          onBlur: d,
          onFocus: v,
          onMousedown: y
        } = Ce(Ll, void 0),
        { collectionRef: T } = Ce(Al, void 0),
        E = S(() => [t.b('menu'), t.bm('menu', l == null ? void 0 : l.value)]),
        g = hl(r, f, a, p, T),
        $ = Ze(
          P => {
            var L
            ;(L = e.onKeydown) == null || L.call(e, P)
          },
          P => {
            const { currentTarget: L, code: V, target: x } = P
            if (
              (L.contains(x),
              ke.tab === V && P.stopImmediatePropagation(),
              P.preventDefault(),
              x !== o(r) || !fm.includes(V))
            )
              return
            const X = m()
              .filter(te => !te.disabled)
              .map(te => te.ref)
            pr.includes(V) && X.reverse(), Dl(X)
          }
        )
      return {
        size: l,
        rovingFocusGroupRootStyle: h,
        tabIndex: c,
        dropdownKls: E,
        role: i,
        triggerId: u,
        dropdownListWrapperRef: g,
        handleKeydown: P => {
          $(P), s(P)
        },
        onBlur: d,
        onFocus: v,
        onMousedown: y
      }
    }
  }),
  Pm = ['role', 'aria-labelledby']
function Om(e, t, n, l, a, s) {
  return (
    C(),
    A(
      'ul',
      {
        ref: e.dropdownListWrapperRef,
        class: w(e.dropdownKls),
        style: $e(e.rovingFocusGroupRootStyle),
        tabindex: -1,
        role: e.role,
        'aria-labelledby': e.triggerId,
        onBlur: t[0] || (t[0] = (...r) => e.onBlur && e.onBlur(...r)),
        onFocus: t[1] || (t[1] = (...r) => e.onFocus && e.onFocus(...r)),
        onKeydown: t[2] || (t[2] = (...r) => e.handleKeydown && e.handleKeydown(...r)),
        onMousedown: t[3] || (t[3] = (...r) => e.onMousedown && e.onMousedown(...r))
      },
      [fe(e.$slots, 'default')],
      46,
      Pm
    )
  )
}
var gr = me(Im, [
  ['render', Om],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue'
  ]
])
const zb = Ue(wm, { DropdownItem: mr, DropdownMenu: gr }),
  Kb = Jt(mr),
  Hb = Jt(gr),
  Mm = ge({
    model: Object,
    rules: { type: re(Object) },
    labelPosition: { type: String, values: ['left', 'right', 'top'], default: 'right' },
    requireAsteriskPosition: { type: String, values: ['left', 'right'], default: 'left' },
    labelWidth: { type: [String, Number], default: '' },
    labelSuffix: { type: String, default: '' },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: { type: Boolean, default: !0 },
    size: { type: String, values: Rn },
    disabled: Boolean,
    validateOnRuleChange: { type: Boolean, default: !0 },
    hideRequiredAsterisk: { type: Boolean, default: !1 },
    scrollToError: Boolean
  }),
  _m = { validate: (e, t, n) => (Je(e) || xe(e)) && Mt(t) && xe(n) }
function Nm() {
  const e = N([]),
    t = S(() => {
      if (!e.value.length) return '0'
      const s = Math.max(...e.value)
      return s ? `${s}px` : ''
    })
  function n(s) {
    const r = e.value.indexOf(s)
    return r === -1 && t.value, r
  }
  function l(s, r) {
    if (s && r) {
      const i = n(r)
      e.value.splice(i, 1, s)
    } else s && e.value.push(s)
  }
  function a(s) {
    const r = n(s)
    r > -1 && e.value.splice(r, 1)
  }
  return { autoLabelWidth: t, registerLabelWidth: l, deregisterLabelWidth: a }
}
const go = (e, t) => {
    const n = Zo(t)
    return n.length > 0 ? e.filter(l => l.prop && n.includes(l.prop)) : e
  },
  Vm = 'ElForm',
  Bm = Q({ name: Vm }),
  Am = Q({
    ...Bm,
    props: Mm,
    emits: _m,
    setup(e, { expose: t, emit: n }) {
      const l = e,
        a = [],
        s = Ot(),
        r = ve('form'),
        i = S(() => {
          const { labelPosition: E, inline: g } = l
          return [r.b(), r.m(s.value || 'default'), { [r.m(`label-${E}`)]: E, [r.m('inline')]: g }]
        }),
        u = E => {
          a.push(E)
        },
        f = E => {
          E.prop && a.splice(a.indexOf(E), 1)
        },
        m = (E = []) => {
          !l.model || go(a, E).forEach(g => g.resetField())
        },
        p = (E = []) => {
          go(a, E).forEach(g => g.clearValidate())
        },
        h = S(() => !!l.model),
        c = E => {
          if (a.length === 0) return []
          const g = go(a, E)
          return g.length ? g : []
        },
        d = async E => y(void 0, E),
        v = async (E = []) => {
          if (!h.value) return !1
          const g = c(E)
          if (g.length === 0) return !0
          let $ = {}
          for (const k of g)
            try {
              await k.validate('')
            } catch (P) {
              $ = { ...$, ...P }
            }
          return Object.keys($).length === 0 ? !0 : Promise.reject($)
        },
        y = async (E = [], g) => {
          const $ = !lt(g)
          try {
            const k = await v(E)
            return k === !0 && (g == null || g(k)), k
          } catch (k) {
            const P = k
            return (
              l.scrollToError && T(Object.keys(P)[0]), g == null || g(!1, P), $ && Promise.reject(P)
            )
          }
        },
        T = E => {
          var g
          const $ = go(a, E)[0]
          $ && ((g = $.$el) == null || g.scrollIntoView())
        }
      return (
        ce(
          () => l.rules,
          () => {
            l.validateOnRuleChange && d().catch(E => void 0)
          },
          { deep: !0 }
        ),
        Fe(
          zn,
          yt({
            ...Ut(l),
            emit: n,
            resetFields: m,
            clearValidate: p,
            validateField: y,
            addField: u,
            removeField: f,
            ...Nm()
          })
        ),
        t({ validate: d, validateField: y, resetFields: m, clearValidate: p, scrollToField: T }),
        (E, g) => (C(), A('form', { class: w(o(i)) }, [fe(E.$slots, 'default')], 2))
      )
    }
  })
var Lm = me(Am, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue']
])
const Dm = ['', 'error', 'validating', 'success'],
  Rm = ge({
    label: String,
    labelWidth: { type: [String, Number], default: '' },
    prop: { type: re([String, Array]) },
    required: { type: Boolean, default: void 0 },
    rules: { type: re([Object, Array]) },
    error: String,
    validateStatus: { type: String, values: Dm },
    for: String,
    inlineMessage: { type: [String, Boolean], default: '' },
    showMessage: { type: Boolean, default: !0 },
    size: { type: String, values: Rn }
  }),
  Ba = 'ElLabelWrap'
var Fm = Q({
  name: Ba,
  props: { isAutoWidth: Boolean, updateAll: Boolean },
  setup(e, { slots: t }) {
    const n = Ce(zn, void 0),
      l = Ce(hn)
    l || bn(Ba, 'usage: <el-form-item><label-wrap /></el-form-item>')
    const a = ve('form'),
      s = N(),
      r = N(0),
      i = () => {
        var m
        if ((m = s.value) != null && m.firstElementChild) {
          const p = window.getComputedStyle(s.value.firstElementChild).width
          return Math.ceil(Number.parseFloat(p))
        } else return 0
      },
      u = (m = 'update') => {
        we(() => {
          t.default &&
            e.isAutoWidth &&
            (m === 'update'
              ? (r.value = i())
              : m === 'remove' && (n == null || n.deregisterLabelWidth(r.value)))
        })
      },
      f = () => u('update')
    return (
      De(() => {
        f()
      }),
      It(() => {
        u('remove')
      }),
      pl(() => f()),
      ce(r, (m, p) => {
        e.updateAll && (n == null || n.registerLabelWidth(m, p))
      }),
      Dn(
        S(() => {
          var m, p
          return (p = (m = s.value) == null ? void 0 : m.firstElementChild) != null ? p : null
        }),
        f
      ),
      () => {
        var m, p
        if (!t) return null
        const { isAutoWidth: h } = e
        if (h) {
          const c = n == null ? void 0 : n.autoLabelWidth,
            d = l == null ? void 0 : l.hasLabel,
            v = {}
          if (d && c && c !== 'auto') {
            const y = Math.max(0, Number.parseInt(c, 10) - r.value),
              T = n.labelPosition === 'left' ? 'marginRight' : 'marginLeft'
            y && (v[T] = `${y}px`)
          }
          return H('div', { ref: s, class: [a.be('item', 'label-wrap')], style: v }, [
            (m = t.default) == null ? void 0 : m.call(t)
          ])
        } else return H(Pe, { ref: s }, [(p = t.default) == null ? void 0 : p.call(t)])
      }
    )
  }
})
const zm = ['role', 'aria-labelledby'],
  Km = Q({ name: 'ElFormItem' }),
  Hm = Q({
    ...Km,
    props: Rm,
    setup(e, { expose: t }) {
      const n = e,
        l = Ln(),
        a = Ce(zn, void 0),
        s = Ce(hn, void 0),
        r = Ot(void 0, { formItem: !1 }),
        i = ve('form-item'),
        u = an().value,
        f = N([]),
        m = N(''),
        p = ni(m, 100),
        h = N(''),
        c = N()
      let d,
        v = !1
      const y = S(() => {
          if ((a == null ? void 0 : a.labelPosition) === 'top') return {}
          const ae = Kt(n.labelWidth || (a == null ? void 0 : a.labelWidth) || '')
          return ae ? { width: ae } : {}
        }),
        T = S(() => {
          if ((a == null ? void 0 : a.labelPosition) === 'top' || (a == null ? void 0 : a.inline))
            return {}
          if (!n.label && !n.labelWidth && x) return {}
          const ae = Kt(n.labelWidth || (a == null ? void 0 : a.labelWidth) || '')
          return !n.label && !l.label ? { marginLeft: ae } : {}
        }),
        E = S(() => [
          i.b(),
          i.m(r.value),
          i.is('error', m.value === 'error'),
          i.is('validating', m.value === 'validating'),
          i.is('success', m.value === 'success'),
          i.is('required', D.value || n.required),
          i.is('no-asterisk', a == null ? void 0 : a.hideRequiredAsterisk),
          (a == null ? void 0 : a.requireAsteriskPosition) === 'right'
            ? 'asterisk-right'
            : 'asterisk-left',
          { [i.m('feedback')]: a == null ? void 0 : a.statusIcon }
        ]),
        g = S(() =>
          Mt(n.inlineMessage) ? n.inlineMessage : (a == null ? void 0 : a.inlineMessage) || !1
        ),
        $ = S(() => [i.e('error'), { [i.em('error', 'inline')]: g.value }]),
        k = S(() => (n.prop ? (xe(n.prop) ? n.prop : n.prop.join('.')) : '')),
        P = S(() => !!(n.label || l.label)),
        L = S(() => (n.for || f.value.length === 1 ? f.value[0] : void 0)),
        V = S(() => !L.value && P.value),
        x = !!s,
        Y = S(() => {
          const ae = a == null ? void 0 : a.model
          if (!(!ae || !n.prop)) return Ko(ae, n.prop).value
        }),
        X = S(() => {
          const { required: ae } = n,
            ue = []
          n.rules && ue.push(...Zo(n.rules))
          const ye = a == null ? void 0 : a.rules
          if (ye && n.prop) {
            const pe = Ko(ye, n.prop).value
            pe && ue.push(...Zo(pe))
          }
          if (ae !== void 0) {
            const pe = ue
              .map((Me, Ne) => [Me, Ne])
              .filter(([Me]) => Object.keys(Me).includes('required'))
            if (pe.length > 0)
              for (const [Me, Ne] of pe) Me.required !== ae && (ue[Ne] = { ...Me, required: ae })
            else ue.push({ required: ae })
          }
          return ue
        }),
        te = S(() => X.value.length > 0),
        _ = ae =>
          X.value
            .filter(ye =>
              !ye.trigger || !ae
                ? !0
                : Array.isArray(ye.trigger)
                ? ye.trigger.includes(ae)
                : ye.trigger === ae
            )
            .map(({ trigger: ye, ...pe }) => pe),
        D = S(() => X.value.some(ae => ae.required)),
        U = S(() => {
          var ae
          return (
            p.value === 'error' &&
            n.showMessage &&
            ((ae = a == null ? void 0 : a.showMessage) != null ? ae : !0)
          )
        }),
        J = S(() => `${n.label || ''}${(a == null ? void 0 : a.labelSuffix) || ''}`),
        B = ae => {
          m.value = ae
        },
        R = ae => {
          var ue, ye
          const { errors: pe, fields: Me } = ae
          ;(!pe || !Me) && console.error(ae),
            B('error'),
            (h.value = pe
              ? (ye = (ue = pe == null ? void 0 : pe[0]) == null ? void 0 : ue.message) != null
                ? ye
                : `${n.prop} is required`
              : ''),
            a == null || a.emit('validate', n.prop, !1, h.value)
        },
        O = () => {
          B('success'), a == null || a.emit('validate', n.prop, !0, '')
        },
        q = async ae => {
          const ue = k.value
          return new vi({ [ue]: ae })
            .validate({ [ue]: Y.value }, { firstFields: !0 })
            .then(() => (O(), !0))
            .catch(pe => (R(pe), Promise.reject(pe)))
        },
        ee = async (ae, ue) => {
          if (v || !n.prop) return !1
          const ye = lt(ue)
          if (!te.value) return ue == null || ue(!1), !1
          const pe = _(ae)
          return pe.length === 0
            ? (ue == null || ue(!0), !0)
            : (B('validating'),
              q(pe)
                .then(() => (ue == null || ue(!0), !0))
                .catch(Me => {
                  const { fields: Ne } = Me
                  return ue == null || ue(!1, Ne), ye ? !1 : Promise.reject(Ne)
                }))
        },
        M = () => {
          B(''), (h.value = ''), (v = !1)
        },
        j = async () => {
          const ae = a == null ? void 0 : a.model
          if (!ae || !n.prop) return
          const ue = Ko(ae, n.prop)
          ;(v = !0), (ue.value = xl(d)), await we(), M(), (v = !1)
        },
        le = ae => {
          f.value.includes(ae) || f.value.push(ae)
        },
        ie = ae => {
          f.value = f.value.filter(ue => ue !== ae)
        }
      ce(
        () => n.error,
        ae => {
          ;(h.value = ae || ''), B(ae ? 'error' : '')
        },
        { immediate: !0 }
      ),
        ce(
          () => n.validateStatus,
          ae => B(ae || '')
        )
      const se = yt({
        ...Ut(n),
        $el: c,
        size: r,
        validateState: m,
        labelId: u,
        inputIds: f,
        isGroup: V,
        hasLabel: P,
        addInputId: le,
        removeInputId: ie,
        resetField: j,
        clearValidate: M,
        validate: ee
      })
      return (
        Fe(hn, se),
        De(() => {
          n.prop && (a == null || a.addField(se), (d = xl(Y.value)))
        }),
        It(() => {
          a == null || a.removeField(se)
        }),
        t({
          size: r,
          validateMessage: h,
          validateState: m,
          validate: ee,
          clearValidate: M,
          resetField: j
        }),
        (ae, ue) => {
          var ye
          return (
            C(),
            A(
              'div',
              {
                ref_key: 'formItemRef',
                ref: c,
                class: w(o(E)),
                role: o(V) ? 'group' : void 0,
                'aria-labelledby': o(V) ? o(u) : void 0
              },
              [
                H(
                  o(Fm),
                  {
                    'is-auto-width': o(y).width === 'auto',
                    'update-all': ((ye = o(a)) == null ? void 0 : ye.labelWidth) === 'auto'
                  },
                  {
                    default: W(() => [
                      o(P)
                        ? (C(),
                          oe(
                            je(o(L) ? 'label' : 'div'),
                            {
                              key: 0,
                              id: o(u),
                              for: o(L),
                              class: w(o(i).e('label')),
                              style: $e(o(y))
                            },
                            {
                              default: W(() => [
                                fe(ae.$slots, 'label', { label: o(J) }, () => [dt(he(o(J)), 1)])
                              ]),
                              _: 3
                            },
                            8,
                            ['id', 'for', 'class', 'style']
                          ))
                        : G('v-if', !0)
                    ]),
                    _: 3
                  },
                  8,
                  ['is-auto-width', 'update-all']
                ),
                F(
                  'div',
                  { class: w(o(i).e('content')), style: $e(o(T)) },
                  [
                    fe(ae.$slots, 'default'),
                    H(
                      Pt,
                      { name: `${o(i).namespace.value}-zoom-in-top` },
                      {
                        default: W(() => [
                          o(U)
                            ? fe(ae.$slots, 'error', { key: 0, error: h.value }, () => [
                                F('div', { class: w(o($)) }, he(h.value), 3)
                              ])
                            : G('v-if', !0)
                        ]),
                        _: 3
                      },
                      8,
                      ['name']
                    )
                  ],
                  6
                )
              ],
              10,
              zm
            )
          )
        }
      )
    }
  })
var hr = me(Hm, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue'
  ]
])
const Wb = Ue(Lm, { FormItem: hr }),
  Yb = Jt(hr),
  Wm = ge({
    urlList: { type: re(Array), default: () => Fn([]) },
    zIndex: { type: Number },
    initialIndex: { type: Number, default: 0 },
    infinite: { type: Boolean, default: !0 },
    hideOnClickModal: { type: Boolean, default: !1 },
    teleported: { type: Boolean, default: !1 },
    closeOnPressEscape: { type: Boolean, default: !0 }
  }),
  Ym = { close: () => !0, switch: e => Be(e) },
  jm = ['src'],
  xm = Q({ name: 'ElImageViewer' }),
  Um = Q({
    ...xm,
    props: Wm,
    emits: Ym,
    setup(e, { expose: t, emit: n }) {
      const l = e,
        a = {
          CONTAIN: { name: 'contain', icon: Hl(Ur) },
          ORIGINAL: { name: 'original', icon: Hl(qr) }
        },
        s = _i() ? 'DOMMouseScroll' : 'mousewheel',
        { t: r } = Ye(),
        i = ve('image-viewer'),
        { nextZIndex: u } = lo(),
        f = N(),
        m = N([]),
        p = Ar(),
        h = N(!0),
        c = N(l.initialIndex),
        d = Ft(a.CONTAIN),
        v = N({ scale: 1, deg: 0, offsetX: 0, offsetY: 0, enableTransition: !1 }),
        y = S(() => {
          const { urlList: R } = l
          return R.length <= 1
        }),
        T = S(() => c.value === 0),
        E = S(() => c.value === l.urlList.length - 1),
        g = S(() => l.urlList[c.value]),
        $ = S(() => {
          const { scale: R, deg: O, offsetX: q, offsetY: ee, enableTransition: M } = v.value
          let j = q / R,
            le = ee / R
          switch (O % 360) {
            case 90:
            case -270:
              ;[j, le] = [le, -j]
              break
            case 180:
            case -180:
              ;[j, le] = [-j, -le]
              break
            case 270:
            case -90:
              ;[j, le] = [-le, j]
              break
          }
          const ie = {
            transform: `scale(${R}) rotate(${O}deg) translate(${j}px, ${le}px)`,
            transition: M ? 'transform .3s' : ''
          }
          return d.value.name === a.CONTAIN.name && (ie.maxWidth = ie.maxHeight = '100%'), ie
        }),
        k = S(() => (Be(l.zIndex) ? l.zIndex : u()))
      function P() {
        V(), n('close')
      }
      function L() {
        const R = jn(q => {
            switch (q.code) {
              case ke.esc:
                l.closeOnPressEscape && P()
                break
              case ke.space:
                _()
                break
              case ke.left:
                U()
                break
              case ke.up:
                B('zoomIn')
                break
              case ke.right:
                J()
                break
              case ke.down:
                B('zoomOut')
                break
            }
          }),
          O = jn(q => {
            ;(q.wheelDelta ? q.wheelDelta : -q.detail) > 0
              ? B('zoomIn', { zoomRate: 1.2, enableTransition: !1 })
              : B('zoomOut', { zoomRate: 1.2, enableTransition: !1 })
          })
        p.run(() => {
          Tt(document, 'keydown', R), Tt(document, s, O)
        })
      }
      function V() {
        p.stop()
      }
      function x() {
        h.value = !1
      }
      function Y(R) {
        ;(h.value = !1), (R.target.alt = r('el.image.error'))
      }
      function X(R) {
        if (h.value || R.button !== 0 || !f.value) return
        v.value.enableTransition = !1
        const { offsetX: O, offsetY: q } = v.value,
          ee = R.pageX,
          M = R.pageY,
          j = jn(ie => {
            v.value = { ...v.value, offsetX: O + ie.pageX - ee, offsetY: q + ie.pageY - M }
          }),
          le = Tt(document, 'mousemove', j)
        Tt(document, 'mouseup', () => {
          le()
        }),
          R.preventDefault()
      }
      function te() {
        v.value = { scale: 1, deg: 0, offsetX: 0, offsetY: 0, enableTransition: !1 }
      }
      function _() {
        if (h.value) return
        const R = Qo(a),
          O = Object.values(a),
          q = d.value.name,
          M = (O.findIndex(j => j.name === q) + 1) % R.length
        ;(d.value = a[R[M]]), te()
      }
      function D(R) {
        const O = l.urlList.length
        c.value = (R + O) % O
      }
      function U() {
        ;(T.value && !l.infinite) || D(c.value - 1)
      }
      function J() {
        ;(E.value && !l.infinite) || D(c.value + 1)
      }
      function B(R, O = {}) {
        if (h.value) return
        const {
          zoomRate: q,
          rotateDeg: ee,
          enableTransition: M
        } = { zoomRate: 1.4, rotateDeg: 90, enableTransition: !0, ...O }
        switch (R) {
          case 'zoomOut':
            v.value.scale > 0.2 &&
              (v.value.scale = Number.parseFloat((v.value.scale / q).toFixed(3)))
            break
          case 'zoomIn':
            v.value.scale < 7 && (v.value.scale = Number.parseFloat((v.value.scale * q).toFixed(3)))
            break
          case 'clockwise':
            v.value.deg += ee
            break
          case 'anticlockwise':
            v.value.deg -= ee
            break
        }
        v.value.enableTransition = M
      }
      return (
        ce(g, () => {
          we(() => {
            const R = m.value[0]
            ;(R != null && R.complete) || (h.value = !0)
          })
        }),
        ce(c, R => {
          te(), n('switch', R)
        }),
        De(() => {
          var R, O
          L(), (O = (R = f.value) == null ? void 0 : R.focus) == null || O.call(R)
        }),
        t({ setActiveItem: D }),
        (R, O) => (
          C(),
          oe(
            Mo,
            { to: 'body', disabled: !R.teleported },
            [
              H(
                Pt,
                { name: 'viewer-fade', appear: '' },
                {
                  default: W(() => [
                    F(
                      'div',
                      {
                        ref_key: 'wrapper',
                        ref: f,
                        tabindex: -1,
                        class: w(o(i).e('wrapper')),
                        style: $e({ zIndex: o(k) })
                      },
                      [
                        F(
                          'div',
                          {
                            class: w(o(i).e('mask')),
                            onClick: O[0] || (O[0] = Le(q => R.hideOnClickModal && P(), ['self']))
                          },
                          null,
                          2
                        ),
                        G(' CLOSE '),
                        F(
                          'span',
                          { class: w([o(i).e('btn'), o(i).e('close')]), onClick: P },
                          [H(o(be), null, { default: W(() => [H(o(mn))]), _: 1 })],
                          2
                        ),
                        G(' ARROW '),
                        o(y)
                          ? G('v-if', !0)
                          : (C(),
                            A(
                              Pe,
                              { key: 0 },
                              [
                                F(
                                  'span',
                                  {
                                    class: w([
                                      o(i).e('btn'),
                                      o(i).e('prev'),
                                      o(i).is('disabled', !R.infinite && o(T))
                                    ]),
                                    onClick: U
                                  },
                                  [H(o(be), null, { default: W(() => [H(o(Gn))]), _: 1 })],
                                  2
                                ),
                                F(
                                  'span',
                                  {
                                    class: w([
                                      o(i).e('btn'),
                                      o(i).e('next'),
                                      o(i).is('disabled', !R.infinite && o(E))
                                    ]),
                                    onClick: J
                                  },
                                  [H(o(be), null, { default: W(() => [H(o(En))]), _: 1 })],
                                  2
                                )
                              ],
                              64
                            )),
                        G(' ACTIONS '),
                        F(
                          'div',
                          { class: w([o(i).e('btn'), o(i).e('actions')]) },
                          [
                            F(
                              'div',
                              { class: w(o(i).e('actions__inner')) },
                              [
                                H(
                                  o(be),
                                  { onClick: O[1] || (O[1] = q => B('zoomOut')) },
                                  { default: W(() => [H(o(Gr))]), _: 1 }
                                ),
                                H(
                                  o(be),
                                  { onClick: O[2] || (O[2] = q => B('zoomIn')) },
                                  { default: W(() => [H(o(Xr))]), _: 1 }
                                ),
                                F('i', { class: w(o(i).e('actions__divider')) }, null, 2),
                                H(
                                  o(be),
                                  { onClick: _ },
                                  { default: W(() => [(C(), oe(je(o(d).icon)))]), _: 1 }
                                ),
                                F('i', { class: w(o(i).e('actions__divider')) }, null, 2),
                                H(
                                  o(be),
                                  { onClick: O[3] || (O[3] = q => B('anticlockwise')) },
                                  { default: W(() => [H(o(Jr))]), _: 1 }
                                ),
                                H(
                                  o(be),
                                  { onClick: O[4] || (O[4] = q => B('clockwise')) },
                                  { default: W(() => [H(o(Zr))]), _: 1 }
                                )
                              ],
                              2
                            )
                          ],
                          2
                        ),
                        G(' CANVAS '),
                        F(
                          'div',
                          { class: w(o(i).e('canvas')) },
                          [
                            (C(!0),
                            A(
                              Pe,
                              null,
                              qe(R.urlList, (q, ee) =>
                                Ve(
                                  (C(),
                                  A(
                                    'img',
                                    {
                                      ref_for: !0,
                                      ref: M => (m.value[ee] = M),
                                      key: q,
                                      src: q,
                                      style: $e(o($)),
                                      class: w(o(i).e('img')),
                                      onLoad: x,
                                      onError: Y,
                                      onMousedown: X
                                    },
                                    null,
                                    46,
                                    jm
                                  )),
                                  [[ot, ee === c.value]]
                                )
                              ),
                              128
                            ))
                          ],
                          2
                        ),
                        fe(R.$slots, 'default')
                      ],
                      6
                    )
                  ]),
                  _: 3
                }
              )
            ],
            8,
            ['disabled']
          )
        )
      )
    }
  })
var qm = me(Um, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue'
  ]
])
const Gm = Ue(qm),
  Xm = ge({
    hideOnClickModal: { type: Boolean, default: !1 },
    src: { type: String, default: '' },
    fit: {
      type: String,
      values: ['', 'contain', 'cover', 'fill', 'none', 'scale-down'],
      default: ''
    },
    loading: { type: String, values: ['eager', 'lazy'] },
    lazy: { type: Boolean, default: !1 },
    scrollContainer: { type: re([String, Object]) },
    previewSrcList: { type: re(Array), default: () => Fn([]) },
    previewTeleported: { type: Boolean, default: !1 },
    zIndex: { type: Number },
    initialIndex: { type: Number, default: 0 },
    infinite: { type: Boolean, default: !0 },
    closeOnPressEscape: { type: Boolean, default: !0 }
  }),
  Jm = {
    load: e => e instanceof Event,
    error: e => e instanceof Event,
    switch: e => Be(e),
    close: () => !0,
    show: () => !0
  },
  Zm = ['src', 'loading'],
  Qm = { key: 0 },
  eg = Q({ name: 'ElImage', inheritAttrs: !1 }),
  tg = Q({
    ...eg,
    props: Xm,
    emits: Jm,
    setup(e, { emit: t }) {
      const n = e
      let l = ''
      const { t: a } = Ye(),
        s = ve('image'),
        r = Oo(),
        i = ss(),
        u = N(),
        f = N(!1),
        m = N(!0),
        p = N(!1),
        h = N(),
        c = N(),
        d = Re && 'loading' in HTMLImageElement.prototype
      let v, y
      const T = S(() => r.style),
        E = S(() => {
          const { fit: B } = n
          return Re && B ? { objectFit: B } : {}
        }),
        g = S(() => {
          const { previewSrcList: B } = n
          return Array.isArray(B) && B.length > 0
        }),
        $ = S(() => {
          const { previewSrcList: B, initialIndex: R } = n
          let O = R
          return R > B.length - 1 && (O = 0), O
        }),
        k = S(() => (n.loading === 'eager' ? !1 : (!d && n.loading === 'lazy') || n.lazy)),
        P = () => {
          !Re || ((m.value = !0), (f.value = !1), (u.value = n.src))
        }
      function L(B) {
        ;(m.value = !1), (f.value = !1), t('load', B)
      }
      function V(B) {
        ;(m.value = !1), (f.value = !0), t('error', B)
      }
      function x() {
        mi(h.value, c.value) && (P(), te())
      }
      const Y = Za(x, 200)
      async function X() {
        var B
        if (!Re) return
        await we()
        const { scrollContainer: R } = n
        gn(R)
          ? (c.value = R)
          : xe(R) && R !== ''
          ? (c.value = (B = document.querySelector(R)) != null ? B : void 0)
          : h.value && (c.value = ns(h.value)),
          c.value && ((v = Tt(c, 'scroll', Y)), setTimeout(() => x(), 100))
      }
      function te() {
        !Re || !c.value || !Y || (v == null || v(), (c.value = void 0))
      }
      function _(B) {
        if (!!B.ctrlKey) {
          if (B.deltaY < 0) return B.preventDefault(), !1
          if (B.deltaY > 0) return B.preventDefault(), !1
        }
      }
      function D() {
        !g.value ||
          ((y = Tt('wheel', _, { passive: !1 })),
          (l = document.body.style.overflow),
          (document.body.style.overflow = 'hidden'),
          (p.value = !0),
          t('show'))
      }
      function U() {
        y == null || y(), (document.body.style.overflow = l), (p.value = !1), t('close')
      }
      function J(B) {
        t('switch', B)
      }
      return (
        ce(
          () => n.src,
          () => {
            k.value ? ((m.value = !0), (f.value = !1), te(), X()) : P()
          }
        ),
        De(() => {
          k.value ? X() : P()
        }),
        (B, R) => (
          C(),
          A(
            'div',
            { ref_key: 'container', ref: h, class: w([o(s).b(), B.$attrs.class]), style: $e(o(T)) },
            [
              u.value !== void 0 && !f.value
                ? (C(),
                  A(
                    'img',
                    bt({ key: 0 }, o(i), {
                      src: u.value,
                      loading: B.loading,
                      style: o(E),
                      class: [
                        o(s).e('inner'),
                        o(g) && o(s).e('preview'),
                        m.value && o(s).is('loading')
                      ],
                      onClick: D,
                      onLoad: L,
                      onError: V
                    }),
                    null,
                    16,
                    Zm
                  ))
                : G('v-if', !0),
              m.value || f.value
                ? (C(),
                  A(
                    'div',
                    { key: 1, class: w(o(s).e('wrapper')) },
                    [
                      m.value
                        ? fe(B.$slots, 'placeholder', { key: 0 }, () => [
                            F('div', { class: w(o(s).e('placeholder')) }, null, 2)
                          ])
                        : f.value
                        ? fe(B.$slots, 'error', { key: 1 }, () => [
                            F('div', { class: w(o(s).e('error')) }, he(o(a)('el.image.error')), 3)
                          ])
                        : G('v-if', !0)
                    ],
                    2
                  ))
                : G('v-if', !0),
              o(g)
                ? (C(),
                  A(
                    Pe,
                    { key: 2 },
                    [
                      p.value
                        ? (C(),
                          oe(
                            o(Gm),
                            {
                              key: 0,
                              'z-index': B.zIndex,
                              'initial-index': o($),
                              infinite: B.infinite,
                              'url-list': B.previewSrcList,
                              'hide-on-click-modal': B.hideOnClickModal,
                              teleported: B.previewTeleported,
                              'close-on-press-escape': B.closeOnPressEscape,
                              onClose: U,
                              onSwitch: J
                            },
                            {
                              default: W(() => [
                                B.$slots.viewer
                                  ? (C(), A('div', Qm, [fe(B.$slots, 'viewer')]))
                                  : G('v-if', !0)
                              ]),
                              _: 3
                            },
                            8,
                            [
                              'z-index',
                              'initial-index',
                              'infinite',
                              'url-list',
                              'hide-on-click-modal',
                              'teleported',
                              'close-on-press-escape'
                            ]
                          ))
                        : G('v-if', !0)
                    ],
                    64
                  ))
                : G('v-if', !0)
            ],
            6
          )
        )
      )
    }
  })
var ng = me(tg, [
  ['__file', '/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue']
])
const jb = Ue(ng),
  og = ge({
    id: { type: String, default: void 0 },
    step: { type: Number, default: 1 },
    stepStrictly: Boolean,
    max: { type: Number, default: Number.POSITIVE_INFINITY },
    min: { type: Number, default: Number.NEGATIVE_INFINITY },
    modelValue: Number,
    readonly: Boolean,
    disabled: Boolean,
    size: qt,
    controls: { type: Boolean, default: !0 },
    controlsPosition: { type: String, default: '', values: ['', 'right'] },
    valueOnClear: {
      type: [String, Number, null],
      validator: e => e === null || Be(e) || ['min', 'max'].includes(e),
      default: null
    },
    name: String,
    label: String,
    placeholder: String,
    precision: { type: Number, validator: e => e >= 0 && e === Number.parseInt(`${e}`, 10) },
    validateEvent: { type: Boolean, default: !0 }
  }),
  lg = {
    [Ht]: (e, t) => e !== t,
    blur: e => e instanceof FocusEvent,
    focus: e => e instanceof FocusEvent,
    [jt]: e => Be(e) || _t(e),
    [Ae]: e => Be(e) || _t(e)
  },
  ag = ['aria-label', 'onKeydown'],
  sg = ['aria-label', 'onKeydown'],
  rg = Q({ name: 'ElInputNumber' }),
  ig = Q({
    ...rg,
    props: og,
    emits: lg,
    setup(e, { expose: t, emit: n }) {
      const l = e,
        { t: a } = Ye(),
        s = ve('input-number'),
        r = N(),
        i = yt({ currentValue: l.modelValue, userInput: null }),
        { formItem: u } = Qt(),
        f = S(() => Be(l.modelValue) && E(l.modelValue, -1) < l.min),
        m = S(() => Be(l.modelValue) && E(l.modelValue) > l.max),
        p = S(() => {
          const _ = T(l.step)
          return on(l.precision) ? Math.max(T(l.modelValue), _) : (_ > l.precision, l.precision)
        }),
        h = S(() => l.controls && l.controlsPosition === 'right'),
        c = Ot(),
        d = yn(),
        v = S(() => {
          if (i.userInput !== null) return i.userInput
          let _ = i.currentValue
          if (_t(_)) return ''
          if (Be(_)) {
            if (Number.isNaN(_)) return ''
            on(l.precision) || (_ = _.toFixed(l.precision))
          }
          return _
        }),
        y = (_, D) => {
          if ((on(D) && (D = p.value), D === 0)) return Math.round(_)
          let U = String(_)
          const J = U.indexOf('.')
          if (J === -1 || !U.replace('.', '').split('')[J + D]) return _
          const O = U.length
          return (
            U.charAt(O - 1) === '5' && (U = `${U.slice(0, Math.max(0, O - 1))}6`),
            Number.parseFloat(Number(U).toFixed(D))
          )
        },
        T = _ => {
          if (_t(_)) return 0
          const D = _.toString(),
            U = D.indexOf('.')
          let J = 0
          return U !== -1 && (J = D.length - U - 1), J
        },
        E = (_, D = 1) => (Be(_) ? y(_ + l.step * D) : i.currentValue),
        g = () => {
          if (l.readonly || d.value || m.value) return
          const _ = l.modelValue || 0,
            D = E(_)
          P(D), n(jt, i.currentValue)
        },
        $ = () => {
          if (l.readonly || d.value || f.value) return
          const _ = l.modelValue || 0,
            D = E(_, -1)
          P(D), n(jt, i.currentValue)
        },
        k = (_, D) => {
          const { max: U, min: J, step: B, precision: R, stepStrictly: O, valueOnClear: q } = l
          let ee = Number(_)
          if (_t(_) || Number.isNaN(ee)) return null
          if (_ === '') {
            if (q === null) return null
            ee = xe(q) ? { min: J, max: U }[q] : q
          }
          return (
            O && (ee = y(Math.round(ee / B) * B, R)),
            on(R) || (ee = y(ee, R)),
            (ee > U || ee < J) && ((ee = ee > U ? U : J), D && n(Ae, ee)),
            ee
          )
        },
        P = _ => {
          var D
          const U = i.currentValue,
            J = k(_)
          U !== J &&
            ((i.userInput = null),
            n(Ae, J),
            n(Ht, J, U),
            l.validateEvent &&
              ((D = u == null ? void 0 : u.validate) == null ||
                D.call(u, 'change').catch(B => void 0)),
            (i.currentValue = J))
        },
        L = _ => {
          ;(i.userInput = _), n(jt, _ === '' ? null : Number(_))
        },
        V = _ => {
          const D = _ !== '' ? Number(_) : ''
          ;((Be(D) && !Number.isNaN(D)) || _ === '') && P(D), (i.userInput = null)
        },
        x = () => {
          var _, D
          ;(D = (_ = r.value) == null ? void 0 : _.focus) == null || D.call(_)
        },
        Y = () => {
          var _, D
          ;(D = (_ = r.value) == null ? void 0 : _.blur) == null || D.call(_)
        },
        X = _ => {
          n('focus', _)
        },
        te = _ => {
          var D
          n('blur', _),
            l.validateEvent &&
              ((D = u == null ? void 0 : u.validate) == null ||
                D.call(u, 'blur').catch(U => void 0))
        }
      return (
        ce(
          () => l.modelValue,
          _ => {
            ;(i.currentValue = k(_, !0)), (i.userInput = null)
          },
          { immediate: !0 }
        ),
        De(() => {
          var _
          const { min: D, max: U, modelValue: J } = l,
            B = (_ = r.value) == null ? void 0 : _.input
          if (
            (B.setAttribute('role', 'spinbutton'),
            Number.isFinite(U)
              ? B.setAttribute('aria-valuemax', String(U))
              : B.removeAttribute('aria-valuemax'),
            Number.isFinite(D)
              ? B.setAttribute('aria-valuemin', String(D))
              : B.removeAttribute('aria-valuemin'),
            B.setAttribute('aria-valuenow', String(i.currentValue)),
            B.setAttribute('aria-disabled', String(d.value)),
            !Be(J) && J != null)
          ) {
            let R = Number(J)
            Number.isNaN(R) && (R = null), n(Ae, R)
          }
        }),
        pl(() => {
          var _
          const D = (_ = r.value) == null ? void 0 : _.input
          D == null || D.setAttribute('aria-valuenow', `${i.currentValue}`)
        }),
        t({ focus: x, blur: Y }),
        (_, D) => (
          C(),
          A(
            'div',
            {
              class: w([
                o(s).b(),
                o(s).m(o(c)),
                o(s).is('disabled', o(d)),
                o(s).is('without-controls', !_.controls),
                o(s).is('controls-right', o(h))
              ]),
              onDragstart: D[0] || (D[0] = Le(() => {}, ['prevent']))
            },
            [
              _.controls
                ? Ve(
                    (C(),
                    A(
                      'span',
                      {
                        key: 0,
                        role: 'button',
                        'aria-label': o(a)('el.inputNumber.decrease'),
                        class: w([o(s).e('decrease'), o(s).is('disabled', o(f))]),
                        onKeydown: We($, ['enter'])
                      },
                      [
                        H(o(be), null, {
                          default: W(() => [
                            o(h) ? (C(), oe(o(no), { key: 0 })) : (C(), oe(o(Qr), { key: 1 }))
                          ]),
                          _: 1
                        })
                      ],
                      42,
                      ag
                    )),
                    [[o(Po), $]]
                  )
                : G('v-if', !0),
              _.controls
                ? Ve(
                    (C(),
                    A(
                      'span',
                      {
                        key: 1,
                        role: 'button',
                        'aria-label': o(a)('el.inputNumber.increase'),
                        class: w([o(s).e('increase'), o(s).is('disabled', o(m))]),
                        onKeydown: We(g, ['enter'])
                      },
                      [
                        H(o(be), null, {
                          default: W(() => [
                            o(h) ? (C(), oe(o(Ga), { key: 0 })) : (C(), oe(o(ei), { key: 1 }))
                          ]),
                          _: 1
                        })
                      ],
                      42,
                      sg
                    )),
                    [[o(Po), g]]
                  )
                : G('v-if', !0),
              H(
                o(Rt),
                {
                  id: _.id,
                  ref_key: 'input',
                  ref: r,
                  type: 'number',
                  step: _.step,
                  'model-value': o(v),
                  placeholder: _.placeholder,
                  readonly: _.readonly,
                  disabled: o(d),
                  size: o(c),
                  max: _.max,
                  min: _.min,
                  name: _.name,
                  label: _.label,
                  'validate-event': !1,
                  onKeydown: [We(Le(g, ['prevent']), ['up']), We(Le($, ['prevent']), ['down'])],
                  onBlur: te,
                  onFocus: X,
                  onInput: L,
                  onChange: V
                },
                null,
                8,
                [
                  'id',
                  'step',
                  'model-value',
                  'placeholder',
                  'readonly',
                  'disabled',
                  'size',
                  'max',
                  'min',
                  'name',
                  'label',
                  'onKeydown'
                ]
              )
            ],
            34
          )
        )
      )
    }
  })
var ug = me(ig, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue'
  ]
])
const cg = Ue(ug),
  dg = ge({
    disabled: Boolean,
    currentPage: { type: Number, default: 1 },
    prevText: { type: String },
    prevIcon: { type: ft }
  }),
  fg = { click: e => e instanceof MouseEvent },
  pg = ['disabled', 'aria-disabled'],
  vg = { key: 0 },
  mg = Q({ name: 'ElPaginationPrev' }),
  gg = Q({
    ...mg,
    props: dg,
    emits: fg,
    setup(e) {
      const t = e,
        n = S(() => t.disabled || t.currentPage <= 1)
      return (l, a) => (
        C(),
        A(
          'button',
          {
            type: 'button',
            class: 'btn-prev',
            disabled: o(n),
            'aria-disabled': o(n),
            onClick: a[0] || (a[0] = s => l.$emit('click', s))
          },
          [
            l.prevText
              ? (C(), A('span', vg, he(l.prevText), 1))
              : (C(),
                oe(o(be), { key: 1 }, { default: W(() => [(C(), oe(je(l.prevIcon)))]), _: 1 }))
          ],
          8,
          pg
        )
      )
    }
  })
var hg = me(gg, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue'
  ]
])
const bg = ge({
    disabled: Boolean,
    currentPage: { type: Number, default: 1 },
    pageCount: { type: Number, default: 50 },
    nextText: { type: String },
    nextIcon: { type: ft }
  }),
  yg = ['disabled', 'aria-disabled'],
  wg = { key: 0 },
  kg = Q({ name: 'ElPaginationNext' }),
  Cg = Q({
    ...kg,
    props: bg,
    emits: ['click'],
    setup(e) {
      const t = e,
        n = S(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0)
      return (l, a) => (
        C(),
        A(
          'button',
          {
            type: 'button',
            class: 'btn-next',
            disabled: o(n),
            'aria-disabled': o(n),
            onClick: a[0] || (a[0] = s => l.$emit('click', s))
          },
          [
            l.nextText
              ? (C(), A('span', wg, he(l.nextText), 1))
              : (C(),
                oe(o(be), { key: 1 }, { default: W(() => [(C(), oe(je(l.nextIcon)))]), _: 1 }))
          ],
          8,
          yg
        )
      )
    }
  })
var Sg = me(Cg, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue'
  ]
])
const br = 'ElSelectGroup',
  Fo = 'ElSelect'
function Eg(e, t) {
  const n = Ce(Fo),
    l = Ce(br, { disabled: !1 }),
    a = S(() => Object.prototype.toString.call(e.value).toLowerCase() === '[object object]'),
    s = S(() =>
      n.props.multiple ? p(n.props.modelValue, e.value) : h(e.value, n.props.modelValue)
    ),
    r = S(() => {
      if (n.props.multiple) {
        const v = n.props.modelValue || []
        return !s.value && v.length >= n.props.multipleLimit && n.props.multipleLimit > 0
      } else return !1
    }),
    i = S(() => e.label || (a.value ? '' : e.value)),
    u = S(() => e.value || e.label || ''),
    f = S(() => e.disabled || t.groupDisabled || r.value),
    m = at(),
    p = (v = [], y) => {
      if (a.value) {
        const T = n.props.valueKey
        return v && v.some(E => So($t(E, T)) === $t(y, T))
      } else return v && v.includes(y)
    },
    h = (v, y) => {
      if (a.value) {
        const { valueKey: T } = n.props
        return $t(v, T) === $t(y, T)
      } else return v === y
    },
    c = () => {
      !e.disabled && !l.disabled && (n.hoverIndex = n.optionsArray.indexOf(m.proxy))
    }
  ce(
    () => i.value,
    () => {
      !e.created && !n.props.remote && n.setSelected()
    }
  ),
    ce(
      () => e.value,
      (v, y) => {
        const { remote: T, valueKey: E } = n.props
        if (
          (Object.is(v, y) || (n.onOptionDestroy(y, m.proxy), n.onOptionCreate(m.proxy)),
          !e.created && !T)
        ) {
          if (E && typeof v == 'object' && typeof y == 'object' && v[E] === y[E]) return
          n.setSelected()
        }
      }
    ),
    ce(
      () => l.disabled,
      () => {
        t.groupDisabled = l.disabled
      },
      { immediate: !0 }
    )
  const { queryChange: d } = So(n)
  return (
    ce(d, v => {
      const { query: y } = o(v),
        T = new RegExp(hi(y), 'i')
      ;(t.visible = T.test(i.value) || e.created), t.visible || n.filteredOptionsCount--
    }),
    { select: n, currentLabel: i, currentValue: u, itemSelected: s, isDisabled: f, hoverItem: c }
  )
}
const $g = Q({
  name: 'ElOption',
  componentName: 'ElOption',
  props: {
    value: { required: !0, type: [String, Number, Boolean, Object] },
    label: [String, Number],
    created: Boolean,
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = ve('select'),
      n = yt({ index: -1, groupDisabled: !1, visible: !0, hitState: !1, hover: !1 }),
      { currentLabel: l, itemSelected: a, isDisabled: s, select: r, hoverItem: i } = Eg(e, n),
      { visible: u, hover: f } = Ut(n),
      m = at().proxy
    r.onOptionCreate(m),
      It(() => {
        const h = m.value,
          { selected: c } = r,
          v = (r.props.multiple ? c : [c]).some(y => y.value === m.value)
        we(() => {
          r.cachedOptions.get(h) === m && !v && r.cachedOptions.delete(h)
        }),
          r.onOptionDestroy(h, m)
      })
    function p() {
      e.disabled !== !0 && n.groupDisabled !== !0 && r.handleOptionSelect(m, !0)
    }
    return {
      ns: t,
      currentLabel: l,
      itemSelected: a,
      isDisabled: s,
      select: r,
      hoverItem: i,
      visible: u,
      hover: f,
      selectOptionClick: p,
      states: n
    }
  }
})
function Tg(e, t, n, l, a, s) {
  return Ve(
    (C(),
    A(
      'li',
      {
        class: w([
          e.ns.be('dropdown', 'item'),
          e.ns.is('disabled', e.isDisabled),
          { selected: e.itemSelected, hover: e.hover }
        ]),
        onMouseenter: t[0] || (t[0] = (...r) => e.hoverItem && e.hoverItem(...r)),
        onClick:
          t[1] || (t[1] = Le((...r) => e.selectOptionClick && e.selectOptionClick(...r), ['stop']))
      },
      [fe(e.$slots, 'default', {}, () => [F('span', null, he(e.currentLabel), 1)])],
      34
    )),
    [[ot, e.visible]]
  )
}
var Rl = me($g, [
  ['render', Tg],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue'
  ]
])
const Ig = Q({
  name: 'ElSelectDropdown',
  componentName: 'ElSelectDropdown',
  setup() {
    const e = Ce(Fo),
      t = ve('select'),
      n = S(() => e.props.popperClass),
      l = S(() => e.props.multiple),
      a = S(() => e.props.fitInputWidth),
      s = N('')
    function r() {
      var i
      s.value = `${(i = e.selectWrapper) == null ? void 0 : i.offsetWidth}px`
    }
    return (
      De(() => {
        r(), Dn(e.selectWrapper, r)
      }),
      { ns: t, minWidth: s, popperClass: n, isMultiple: l, isFitInputWidth: a }
    )
  }
})
function Pg(e, t, n, l, a, s) {
  return (
    C(),
    A(
      'div',
      {
        class: w([e.ns.b('dropdown'), e.ns.is('multiple', e.isMultiple), e.popperClass]),
        style: $e({ [e.isFitInputWidth ? 'width' : 'minWidth']: e.minWidth })
      },
      [fe(e.$slots, 'default')],
      6
    )
  )
}
var Og = me(Ig, [
  ['render', Pg],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue'
  ]
])
function Mg(e) {
  const { t } = Ye()
  return yt({
    options: new Map(),
    cachedOptions: new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    softFocus: !1,
    selectedLabel: '',
    hoverIndex: -1,
    query: '',
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: '',
    currentPlaceholder: t('el.select.placeholder'),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    isSilentBlur: !1,
    prefixWidth: 11,
    tagInMultiLine: !1,
    mouseEnter: !1
  })
}
const _g = (e, t, n) => {
    const { t: l } = Ye(),
      a = ve('select')
    On(
      {
        from: 'suffixTransition',
        replacement: 'override style scheme',
        version: '2.3.0',
        scope: 'props',
        ref: 'https://element-plus.org/en-US/component/select.html#select-attributes'
      },
      S(() => e.suffixTransition === !1)
    )
    const s = N(null),
      r = N(null),
      i = N(null),
      u = N(null),
      f = N(null),
      m = N(null),
      p = N(-1),
      h = Ft({ query: '' }),
      c = Ft(''),
      { form: d, formItem: v } = Qt(),
      y = S(() => !e.filterable || e.multiple || !t.visible),
      T = S(() => e.disabled || (d == null ? void 0 : d.disabled)),
      E = S(() => {
        const b = e.multiple
          ? Array.isArray(e.modelValue) && e.modelValue.length > 0
          : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== ''
        return e.clearable && !T.value && t.inputHovering && b
      }),
      g = S(() => (e.remote && e.filterable && !e.remoteShowSuffix ? '' : e.suffixIcon)),
      $ = S(() => a.is('reverse', g.value && t.visible && e.suffixTransition)),
      k = S(() => (e.remote ? 300 : 0)),
      P = S(() =>
        e.loading
          ? e.loadingText || l('el.select.loading')
          : e.remote && t.query === '' && t.options.size === 0
          ? !1
          : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0
          ? e.noMatchText || l('el.select.noMatch')
          : t.options.size === 0
          ? e.noDataText || l('el.select.noData')
          : null
      ),
      L = S(() => Array.from(t.options.values())),
      V = S(() => Array.from(t.cachedOptions.values())),
      x = S(() => {
        const b = L.value.filter(I => !I.created).some(I => I.currentLabel === t.query)
        return e.filterable && e.allowCreate && t.query !== '' && !b
      }),
      Y = Ot(),
      X = S(() => (['small'].includes(Y.value) ? 'small' : 'default')),
      te = S({
        get() {
          return t.visible && P.value !== !1
        },
        set(b) {
          t.visible = b
        }
      })
    ce([() => T.value, () => Y.value, () => (d == null ? void 0 : d.size)], () => {
      we(() => {
        _()
      })
    }),
      ce(
        () => e.placeholder,
        b => {
          t.cachedPlaceHolder = t.currentPlaceholder = b
        }
      ),
      ce(
        () => e.modelValue,
        (b, I) => {
          e.multiple &&
            (_(),
            (b && b.length > 0) || (r.value && t.query !== '')
              ? (t.currentPlaceholder = '')
              : (t.currentPlaceholder = t.cachedPlaceHolder),
            e.filterable && !e.reserveKeyword && ((t.query = ''), D(t.query))),
            B(),
            e.filterable && !e.multiple && (t.inputLength = 20),
            !Eo(b, I) && e.validateEvent && (v == null || v.validate('change').catch(z => void 0))
        },
        { flush: 'post', deep: !0 }
      ),
      ce(
        () => t.visible,
        b => {
          var I, z, ne
          b
            ? ((z = (I = i.value) == null ? void 0 : I.updatePopper) == null || z.call(I),
              e.filterable &&
                ((t.filteredOptionsCount = t.optionsCount),
                (t.query = e.remote ? '' : t.selectedLabel),
                e.multiple
                  ? (ne = r.value) == null || ne.focus()
                  : t.selectedLabel &&
                    ((t.currentPlaceholder = `${t.selectedLabel}`), (t.selectedLabel = '')),
                D(t.query),
                !e.multiple && !e.remote && ((h.value.query = ''), Hn(h), Hn(c))))
            : (e.filterable &&
                (lt(e.filterMethod) && e.filterMethod(), lt(e.remoteMethod) && e.remoteMethod()),
              r.value && r.value.blur(),
              (t.query = ''),
              (t.previousQuery = null),
              (t.selectedLabel = ''),
              (t.inputLength = 20),
              (t.menuVisibleOnFocus = !1),
              O(),
              we(() => {
                r.value &&
                  r.value.value === '' &&
                  t.selected.length === 0 &&
                  (t.currentPlaceholder = t.cachedPlaceHolder)
              }),
              e.multiple ||
                (t.selected &&
                  (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel
                    ? (t.selectedLabel = t.createdLabel)
                    : (t.selectedLabel = t.selected.currentLabel),
                  e.filterable && (t.query = t.selectedLabel)),
                e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))),
            n.emit('visible-change', b)
        }
      ),
      ce(
        () => t.options.entries(),
        () => {
          var b, I, z
          if (!Re) return
          ;(I = (b = i.value) == null ? void 0 : b.updatePopper) == null || I.call(b),
            e.multiple && _()
          const ne = ((z = f.value) == null ? void 0 : z.querySelectorAll('input')) || []
          Array.from(ne).includes(document.activeElement) || B(),
            e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && J()
        },
        { flush: 'post' }
      ),
      ce(
        () => t.hoverIndex,
        b => {
          typeof b == 'number' && b > -1 ? (p.value = L.value[b] || {}) : (p.value = {}),
            L.value.forEach(I => {
              I.hover = p.value === I
            })
        }
      )
    const _ = () => {
        ;(e.collapseTags && !e.filterable) ||
          we(() => {
            var b, I
            if (!s.value) return
            const z = s.value.$el.querySelector('input'),
              ne = u.value,
              _e = Oi(Y.value || (d == null ? void 0 : d.size))
            ;(z.style.height = `${
              (t.selected.length === 0
                ? _e
                : Math.max(ne ? ne.clientHeight + (ne.clientHeight > _e ? 6 : 0) : 0, _e)) - 2
            }px`),
              (t.tagInMultiLine = Number.parseFloat(z.style.height) >= _e),
              t.visible &&
                P.value !== !1 &&
                ((I = (b = i.value) == null ? void 0 : b.updatePopper) == null || I.call(b))
          })
      },
      D = async b => {
        if (!(t.previousQuery === b || t.isOnComposition)) {
          if (
            t.previousQuery === null &&
            (typeof e.filterMethod == 'function' || typeof e.remoteMethod == 'function')
          ) {
            t.previousQuery = b
            return
          }
          ;(t.previousQuery = b),
            we(() => {
              var I, z
              t.visible &&
                ((z = (I = i.value) == null ? void 0 : I.updatePopper) == null || z.call(I))
            }),
            (t.hoverIndex = -1),
            e.multiple &&
              e.filterable &&
              we(() => {
                const I = r.value.value.length * 15 + 20
                ;(t.inputLength = e.collapseTags ? Math.min(50, I) : I), U(), _()
              }),
            e.remote && typeof e.remoteMethod == 'function'
              ? ((t.hoverIndex = -1), e.remoteMethod(b))
              : typeof e.filterMethod == 'function'
              ? (e.filterMethod(b), Hn(c))
              : ((t.filteredOptionsCount = t.optionsCount), (h.value.query = b), Hn(h), Hn(c)),
            e.defaultFirstOption &&
              (e.filterable || e.remote) &&
              t.filteredOptionsCount &&
              (await we(), J())
        }
      },
      U = () => {
        t.currentPlaceholder !== '' &&
          (t.currentPlaceholder = r.value.value ? '' : t.cachedPlaceHolder)
      },
      J = () => {
        const b = L.value.filter(ne => ne.visible && !ne.disabled && !ne.states.groupDisabled),
          I = b.find(ne => ne.created),
          z = b[0]
        t.hoverIndex = pe(L.value, I || z)
      },
      B = () => {
        var b
        if (e.multiple) t.selectedLabel = ''
        else {
          const z = R(e.modelValue)
          ;(b = z.props) != null && b.created
            ? ((t.createdLabel = z.props.value), (t.createdSelected = !0))
            : (t.createdSelected = !1),
            (t.selectedLabel = z.currentLabel),
            (t.selected = z),
            e.filterable && (t.query = t.selectedLabel)
          return
        }
        const I = []
        Array.isArray(e.modelValue) &&
          e.modelValue.forEach(z => {
            I.push(R(z))
          }),
          (t.selected = I),
          we(() => {
            _()
          })
      },
      R = b => {
        let I
        const z = zo(b).toLowerCase() === 'object',
          ne = zo(b).toLowerCase() === 'null',
          _e = zo(b).toLowerCase() === 'undefined'
        for (let mt = t.cachedOptions.size - 1; mt >= 0; mt--) {
          const Oe = V.value[mt]
          if (z ? $t(Oe.value, e.valueKey) === $t(b, e.valueKey) : Oe.value === b) {
            I = { value: b, currentLabel: Oe.currentLabel, isDisabled: Oe.isDisabled }
            break
          }
        }
        if (I) return I
        const ut = z ? b.label : !ne && !_e ? b : '',
          vt = { value: b, currentLabel: ut }
        return e.multiple && (vt.hitState = !1), vt
      },
      O = () => {
        setTimeout(() => {
          const b = e.valueKey
          e.multiple
            ? t.selected.length > 0
              ? (t.hoverIndex = Math.min.apply(
                  null,
                  t.selected.map(I => L.value.findIndex(z => $t(z, b) === $t(I, b)))
                ))
              : (t.hoverIndex = -1)
            : (t.hoverIndex = L.value.findIndex(I => rt(I) === rt(t.selected)))
        }, 300)
      },
      q = () => {
        var b, I
        ee(),
          (I = (b = i.value) == null ? void 0 : b.updatePopper) == null || I.call(b),
          e.multiple && !e.filterable && _()
      },
      ee = () => {
        var b
        t.inputWidth = (b = s.value) == null ? void 0 : b.$el.getBoundingClientRect().width
      },
      M = () => {
        e.filterable && t.query !== t.selectedLabel && ((t.query = t.selectedLabel), D(t.query))
      },
      j = Pn(() => {
        M()
      }, k.value),
      le = Pn(b => {
        D(b.target.value)
      }, k.value),
      ie = b => {
        Eo(e.modelValue, b) || n.emit(Ht, b)
      },
      se = b => {
        if (b.target.value.length <= 0 && !Ge()) {
          const I = e.modelValue.slice()
          I.pop(), n.emit(Ae, I), ie(I)
        }
        b.target.value.length === 1 &&
          e.modelValue.length === 0 &&
          (t.currentPlaceholder = t.cachedPlaceHolder)
      },
      ae = (b, I) => {
        const z = t.selected.indexOf(I)
        if (z > -1 && !T.value) {
          const ne = e.modelValue.slice()
          ne.splice(z, 1), n.emit(Ae, ne), ie(ne), n.emit('remove-tag', I.value)
        }
        b.stopPropagation()
      },
      ue = b => {
        b.stopPropagation()
        const I = e.multiple ? [] : ''
        if (typeof I != 'string') for (const z of t.selected) z.isDisabled && I.push(z.value)
        n.emit(Ae, I), ie(I), (t.hoverIndex = -1), (t.visible = !1), n.emit('clear')
      },
      ye = (b, I) => {
        var z
        if (e.multiple) {
          const ne = (e.modelValue || []).slice(),
            _e = pe(ne, b.value)
          _e > -1
            ? ne.splice(_e, 1)
            : (e.multipleLimit <= 0 || ne.length < e.multipleLimit) && ne.push(b.value),
            n.emit(Ae, ne),
            ie(ne),
            b.created && ((t.query = ''), D(''), (t.inputLength = 20)),
            e.filterable && ((z = r.value) == null || z.focus())
        } else n.emit(Ae, b.value), ie(b.value), (t.visible = !1)
        ;(t.isSilentBlur = I),
          Me(),
          !t.visible &&
            we(() => {
              Ne(b)
            })
      },
      pe = (b = [], I) => {
        if (!zt(I)) return b.indexOf(I)
        const z = e.valueKey
        let ne = -1
        return b.some((_e, ut) => (So($t(_e, z)) === $t(I, z) ? ((ne = ut), !0) : !1)), ne
      },
      Me = () => {
        t.softFocus = !0
        const b = r.value || s.value
        b && (b == null || b.focus())
      },
      Ne = b => {
        var I, z, ne, _e, ut
        const vt = Array.isArray(b) ? b[0] : b
        let mt = null
        if (vt != null && vt.value) {
          const Oe = L.value.filter(gt => gt.value === vt.value)
          Oe.length > 0 && (mt = Oe[0].$el)
        }
        if (i.value && mt) {
          const Oe =
            (_e =
              (ne =
                (z = (I = i.value) == null ? void 0 : I.popperRef) == null
                  ? void 0
                  : z.contentRef) == null
                ? void 0
                : ne.querySelector) == null
              ? void 0
              : _e.call(ne, `.${a.be('dropdown', 'wrap')}`)
          Oe && ki(Oe, mt)
        }
        ;(ut = m.value) == null || ut.handleScroll()
      },
      He = b => {
        t.optionsCount++,
          t.filteredOptionsCount++,
          t.options.set(b.value, b),
          t.cachedOptions.set(b.value, b)
      },
      et = (b, I) => {
        t.options.get(b) === I && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(b))
      },
      Et = b => {
        b.code !== ke.backspace && Ge(!1), (t.inputLength = r.value.value.length * 15 + 20), _()
      },
      Ge = b => {
        if (!Array.isArray(t.selected)) return
        const I = t.selected[t.selected.length - 1]
        if (!!I)
          return b === !0 || b === !1
            ? ((I.hitState = b), b)
            : ((I.hitState = !I.hitState), I.hitState)
      },
      Te = b => {
        const I = b.target.value
        if (b.type === 'compositionend') (t.isOnComposition = !1), we(() => D(I))
        else {
          const z = I[I.length - 1] || ''
          t.isOnComposition = !as(z)
        }
      },
      it = () => {
        we(() => Ne(t.selected))
      },
      ze = b => {
        t.softFocus
          ? (t.softFocus = !1)
          : ((e.automaticDropdown || e.filterable) &&
              (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), (t.visible = !0)),
            n.emit('focus', b))
      },
      Z = () => {
        var b
        ;(t.visible = !1), (b = s.value) == null || b.blur()
      },
      Ie = b => {
        we(() => {
          t.isSilentBlur ? (t.isSilentBlur = !1) : n.emit('blur', b)
        }),
          (t.softFocus = !1)
      },
      Xe = b => {
        ue(b)
      },
      tt = () => {
        t.visible = !1
      },
      st = b => {
        t.visible && (b.preventDefault(), b.stopPropagation(), (t.visible = !1))
      },
      wt = b => {
        var I
        ;(b && !t.mouseEnter) ||
          T.value ||
          (t.menuVisibleOnFocus
            ? (t.menuVisibleOnFocus = !1)
            : (!i.value || !i.value.isFocusInsideContent()) && (t.visible = !t.visible),
          t.visible && ((I = r.value || s.value) == null || I.focus()))
      },
      pt = () => {
        t.visible ? L.value[t.hoverIndex] && ye(L.value[t.hoverIndex], void 0) : wt()
      },
      rt = b => (zt(b.value) ? $t(b.value, e.valueKey) : b.value),
      K = S(() => L.value.filter(b => b.visible).every(b => b.disabled)),
      de = b => {
        if (!t.visible) {
          t.visible = !0
          return
        }
        if (
          !(t.options.size === 0 || t.filteredOptionsCount === 0) &&
          !t.isOnComposition &&
          !K.value
        ) {
          b === 'next'
            ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0))
            : b === 'prev' &&
              (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1))
          const I = L.value[t.hoverIndex]
          ;(I.disabled === !0 || I.states.groupDisabled === !0 || !I.visible) && de(b),
            we(() => Ne(p.value))
        }
      }
    return {
      optionsArray: L,
      selectSize: Y,
      handleResize: q,
      debouncedOnInputChange: j,
      debouncedQueryChange: le,
      deletePrevTag: se,
      deleteTag: ae,
      deleteSelected: ue,
      handleOptionSelect: ye,
      scrollToOption: Ne,
      readonly: y,
      resetInputHeight: _,
      showClose: E,
      iconComponent: g,
      iconReverse: $,
      showNewOption: x,
      collapseTagSize: X,
      setSelected: B,
      managePlaceholder: U,
      selectDisabled: T,
      emptyText: P,
      toggleLastOptionHitState: Ge,
      resetInputState: Et,
      handleComposition: Te,
      onOptionCreate: He,
      onOptionDestroy: et,
      handleMenuEnter: it,
      handleFocus: ze,
      blur: Z,
      handleBlur: Ie,
      handleClearClick: Xe,
      handleClose: tt,
      handleKeydownEscape: st,
      toggleMenu: wt,
      selectOption: pt,
      getValueKey: rt,
      navigateOptions: de,
      dropMenuVisible: te,
      queryChange: h,
      groupQueryChange: c,
      reference: s,
      input: r,
      tooltipRef: i,
      tags: u,
      selectWrapper: f,
      scrollbar: m,
      handleMouseEnter: () => {
        t.mouseEnter = !0
      },
      handleMouseLeave: () => {
        t.mouseEnter = !1
      }
    }
  },
  Aa = 'ElSelect',
  Ng = Q({
    name: Aa,
    componentName: Aa,
    components: {
      ElInput: Rt,
      ElSelectMenu: Og,
      ElOption: Rl,
      ElTag: jf,
      ElScrollbar: wl,
      ElTooltip: ro,
      ElIcon: be
    },
    directives: { ClickOutside: Qn },
    props: {
      name: String,
      id: String,
      modelValue: { type: [Array, String, Number, Boolean, Object], default: void 0 },
      autocomplete: { type: String, default: 'off' },
      automaticDropdown: Boolean,
      size: { type: String, validator: ls },
      effect: { type: String, default: 'light' },
      disabled: Boolean,
      clearable: Boolean,
      filterable: Boolean,
      allowCreate: Boolean,
      loading: Boolean,
      popperClass: { type: String, default: '' },
      remote: Boolean,
      loadingText: String,
      noMatchText: String,
      noDataText: String,
      remoteMethod: Function,
      filterMethod: Function,
      multiple: Boolean,
      multipleLimit: { type: Number, default: 0 },
      placeholder: { type: String },
      defaultFirstOption: Boolean,
      reserveKeyword: { type: Boolean, default: !0 },
      valueKey: { type: String, default: 'value' },
      collapseTags: Boolean,
      collapseTagsTooltip: { type: Boolean, default: !1 },
      teleported: Do.teleported,
      persistent: { type: Boolean, default: !0 },
      clearIcon: { type: ft, default: _o },
      fitInputWidth: { type: Boolean, default: !1 },
      suffixIcon: { type: ft, default: no },
      tagType: { ...Js.type, default: 'info' },
      validateEvent: { type: Boolean, default: !0 },
      remoteShowSuffix: { type: Boolean, default: !1 },
      suffixTransition: { type: Boolean, default: !0 },
      placement: { type: String, values: Kn, default: 'bottom-start' }
    },
    emits: [Ae, Ht, 'remove-tag', 'clear', 'visible-change', 'focus', 'blur'],
    setup(e, t) {
      const n = ve('select'),
        l = ve('input'),
        { t: a } = Ye(),
        s = Mg(e),
        {
          optionsArray: r,
          selectSize: i,
          readonly: u,
          handleResize: f,
          collapseTagSize: m,
          debouncedOnInputChange: p,
          debouncedQueryChange: h,
          deletePrevTag: c,
          deleteTag: d,
          deleteSelected: v,
          handleOptionSelect: y,
          scrollToOption: T,
          setSelected: E,
          resetInputHeight: g,
          managePlaceholder: $,
          showClose: k,
          selectDisabled: P,
          iconComponent: L,
          iconReverse: V,
          showNewOption: x,
          emptyText: Y,
          toggleLastOptionHitState: X,
          resetInputState: te,
          handleComposition: _,
          onOptionCreate: D,
          onOptionDestroy: U,
          handleMenuEnter: J,
          handleFocus: B,
          blur: R,
          handleBlur: O,
          handleClearClick: q,
          handleClose: ee,
          handleKeydownEscape: M,
          toggleMenu: j,
          selectOption: le,
          getValueKey: ie,
          navigateOptions: se,
          dropMenuVisible: ae,
          reference: ue,
          input: ye,
          tooltipRef: pe,
          tags: Me,
          selectWrapper: Ne,
          scrollbar: He,
          queryChange: et,
          groupQueryChange: Et,
          handleMouseEnter: Ge,
          handleMouseLeave: Te
        } = _g(e, s, t),
        { focus: it } = Ri(ue),
        {
          inputWidth: ze,
          selected: Z,
          inputLength: Ie,
          filteredOptionsCount: Xe,
          visible: tt,
          softFocus: st,
          selectedLabel: wt,
          hoverIndex: pt,
          query: rt,
          inputHovering: K,
          currentPlaceholder: de,
          menuVisibleOnFocus: Ee,
          isOnComposition: nt,
          isSilentBlur: b,
          options: I,
          cachedOptions: z,
          optionsCount: ne,
          prefixWidth: _e,
          tagInMultiLine: ut
        } = Ut(s),
        vt = S(() => {
          const At = [n.b()],
            un = o(i)
          return un && At.push(n.m(un)), e.disabled && At.push(n.m('disabled')), At
        }),
        mt = S(() => ({ maxWidth: `${o(ze) - 32}px`, width: '100%' })),
        Oe = S(() => ({ maxWidth: `${o(ze) > 123 ? o(ze) - 123 : o(ze) - 75}px` }))
      Fe(
        Fo,
        yt({
          props: e,
          options: I,
          optionsArray: r,
          cachedOptions: z,
          optionsCount: ne,
          filteredOptionsCount: Xe,
          hoverIndex: pt,
          handleOptionSelect: y,
          onOptionCreate: D,
          onOptionDestroy: U,
          selectWrapper: Ne,
          selected: Z,
          setSelected: E,
          queryChange: et,
          groupQueryChange: Et
        })
      ),
        De(() => {
          ;(s.cachedPlaceHolder = de.value = e.placeholder || a('el.select.placeholder')),
            e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (de.value = ''),
            Dn(Ne, f),
            e.remote && e.multiple && g(),
            we(() => {
              const At = ue.value && ue.value.$el
              if (!!At && ((ze.value = At.getBoundingClientRect().width), t.slots.prefix)) {
                const un = At.querySelector(`.${l.e('prefix')}`)
                _e.value = Math.max(un.getBoundingClientRect().width + 5, 30)
              }
            }),
            E()
        }),
        e.multiple && !Array.isArray(e.modelValue) && t.emit(Ae, []),
        !e.multiple && Array.isArray(e.modelValue) && t.emit(Ae, '')
      const gt = S(() => {
        var At, un
        return (un = (At = pe.value) == null ? void 0 : At.popperRef) == null
          ? void 0
          : un.contentRef
      })
      return {
        tagInMultiLine: ut,
        prefixWidth: _e,
        selectSize: i,
        readonly: u,
        handleResize: f,
        collapseTagSize: m,
        debouncedOnInputChange: p,
        debouncedQueryChange: h,
        deletePrevTag: c,
        deleteTag: d,
        deleteSelected: v,
        handleOptionSelect: y,
        scrollToOption: T,
        inputWidth: ze,
        selected: Z,
        inputLength: Ie,
        filteredOptionsCount: Xe,
        visible: tt,
        softFocus: st,
        selectedLabel: wt,
        hoverIndex: pt,
        query: rt,
        inputHovering: K,
        currentPlaceholder: de,
        menuVisibleOnFocus: Ee,
        isOnComposition: nt,
        isSilentBlur: b,
        options: I,
        resetInputHeight: g,
        managePlaceholder: $,
        showClose: k,
        selectDisabled: P,
        iconComponent: L,
        iconReverse: V,
        showNewOption: x,
        emptyText: Y,
        toggleLastOptionHitState: X,
        resetInputState: te,
        handleComposition: _,
        handleMenuEnter: J,
        handleFocus: B,
        blur: R,
        handleBlur: O,
        handleClearClick: q,
        handleClose: ee,
        handleKeydownEscape: M,
        toggleMenu: j,
        selectOption: le,
        getValueKey: ie,
        navigateOptions: se,
        dropMenuVisible: ae,
        focus: it,
        reference: ue,
        input: ye,
        tooltipRef: pe,
        popperPaneRef: gt,
        tags: Me,
        selectWrapper: Ne,
        scrollbar: He,
        wrapperKls: vt,
        selectTagsStyle: mt,
        nsSelect: n,
        tagTextStyle: Oe,
        handleMouseEnter: Ge,
        handleMouseLeave: Te
      }
    }
  }),
  Vg = ['disabled', 'autocomplete'],
  Bg = {
    style: { height: '100%', display: 'flex', 'justify-content': 'center', 'align-items': 'center' }
  }
function Ag(e, t, n, l, a, s) {
  const r = Ke('el-tag'),
    i = Ke('el-tooltip'),
    u = Ke('el-icon'),
    f = Ke('el-input'),
    m = Ke('el-option'),
    p = Ke('el-scrollbar'),
    h = Ke('el-select-menu'),
    c = Lr('click-outside')
  return Ve(
    (C(),
    A(
      'div',
      {
        ref: 'selectWrapper',
        class: w(e.wrapperKls),
        onMouseenter: t[22] || (t[22] = (...d) => e.handleMouseEnter && e.handleMouseEnter(...d)),
        onMouseleave: t[23] || (t[23] = (...d) => e.handleMouseLeave && e.handleMouseLeave(...d)),
        onClick: t[24] || (t[24] = Le((...d) => e.toggleMenu && e.toggleMenu(...d), ['stop']))
      },
      [
        H(
          i,
          {
            ref: 'tooltipRef',
            visible: e.dropMenuVisible,
            placement: e.placement,
            teleported: e.teleported,
            'popper-class': [e.nsSelect.e('popper'), e.popperClass],
            'fallback-placements': ['bottom-start', 'top-start', 'right', 'left'],
            effect: e.effect,
            pure: '',
            trigger: 'click',
            transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
            'stop-popper-mouse-event': !1,
            'gpu-acceleration': !1,
            persistent: e.persistent,
            onShow: e.handleMenuEnter
          },
          {
            default: W(() => [
              F(
                'div',
                {
                  class: 'select-trigger',
                  onMouseenter: t[20] || (t[20] = d => (e.inputHovering = !0)),
                  onMouseleave: t[21] || (t[21] = d => (e.inputHovering = !1))
                },
                [
                  e.multiple
                    ? (C(),
                      A(
                        'div',
                        {
                          key: 0,
                          ref: 'tags',
                          class: w(e.nsSelect.e('tags')),
                          style: $e(e.selectTagsStyle)
                        },
                        [
                          e.collapseTags && e.selected.length
                            ? (C(),
                              A(
                                'span',
                                {
                                  key: 0,
                                  class: w([
                                    e.nsSelect.b('tags-wrapper'),
                                    { 'has-prefix': e.prefixWidth && e.selected.length }
                                  ])
                                },
                                [
                                  H(
                                    r,
                                    {
                                      closable: !e.selectDisabled && !e.selected[0].isDisabled,
                                      size: e.collapseTagSize,
                                      hit: e.selected[0].hitState,
                                      type: e.tagType,
                                      'disable-transitions': '',
                                      onClose: t[0] || (t[0] = d => e.deleteTag(d, e.selected[0]))
                                    },
                                    {
                                      default: W(() => [
                                        F(
                                          'span',
                                          {
                                            class: w(e.nsSelect.e('tags-text')),
                                            style: $e(e.tagTextStyle)
                                          },
                                          he(e.selected[0].currentLabel),
                                          7
                                        )
                                      ]),
                                      _: 1
                                    },
                                    8,
                                    ['closable', 'size', 'hit', 'type']
                                  ),
                                  e.selected.length > 1
                                    ? (C(),
                                      oe(
                                        r,
                                        {
                                          key: 0,
                                          closable: !1,
                                          size: e.collapseTagSize,
                                          type: e.tagType,
                                          'disable-transitions': ''
                                        },
                                        {
                                          default: W(() => [
                                            e.collapseTagsTooltip
                                              ? (C(),
                                                oe(
                                                  i,
                                                  {
                                                    key: 0,
                                                    disabled: e.dropMenuVisible,
                                                    'fallback-placements': [
                                                      'bottom',
                                                      'top',
                                                      'right',
                                                      'left'
                                                    ],
                                                    effect: e.effect,
                                                    placement: 'bottom',
                                                    teleported: e.teleported
                                                  },
                                                  {
                                                    default: W(() => [
                                                      F(
                                                        'span',
                                                        { class: w(e.nsSelect.e('tags-text')) },
                                                        '+ ' + he(e.selected.length - 1),
                                                        3
                                                      )
                                                    ]),
                                                    content: W(() => [
                                                      F(
                                                        'div',
                                                        { class: w(e.nsSelect.e('collapse-tags')) },
                                                        [
                                                          (C(!0),
                                                          A(
                                                            Pe,
                                                            null,
                                                            qe(
                                                              e.selected.slice(1),
                                                              (d, v) => (
                                                                C(),
                                                                A(
                                                                  'div',
                                                                  {
                                                                    key: v,
                                                                    class: w(
                                                                      e.nsSelect.e('collapse-tag')
                                                                    )
                                                                  },
                                                                  [
                                                                    (C(),
                                                                    oe(
                                                                      r,
                                                                      {
                                                                        key: e.getValueKey(d),
                                                                        class: 'in-tooltip',
                                                                        closable:
                                                                          !e.selectDisabled &&
                                                                          !d.isDisabled,
                                                                        size: e.collapseTagSize,
                                                                        hit: d.hitState,
                                                                        type: e.tagType,
                                                                        'disable-transitions': '',
                                                                        style: { margin: '2px' },
                                                                        onClose: y =>
                                                                          e.deleteTag(y, d)
                                                                      },
                                                                      {
                                                                        default: W(() => [
                                                                          F(
                                                                            'span',
                                                                            {
                                                                              class: w(
                                                                                e.nsSelect.e(
                                                                                  'tags-text'
                                                                                )
                                                                              ),
                                                                              style: $e({
                                                                                maxWidth:
                                                                                  e.inputWidth -
                                                                                  75 +
                                                                                  'px'
                                                                              })
                                                                            },
                                                                            he(d.currentLabel),
                                                                            7
                                                                          )
                                                                        ]),
                                                                        _: 2
                                                                      },
                                                                      1032,
                                                                      [
                                                                        'closable',
                                                                        'size',
                                                                        'hit',
                                                                        'type',
                                                                        'onClose'
                                                                      ]
                                                                    ))
                                                                  ],
                                                                  2
                                                                )
                                                              )
                                                            ),
                                                            128
                                                          ))
                                                        ],
                                                        2
                                                      )
                                                    ]),
                                                    _: 1
                                                  },
                                                  8,
                                                  ['disabled', 'effect', 'teleported']
                                                ))
                                              : (C(),
                                                A(
                                                  'span',
                                                  { key: 1, class: w(e.nsSelect.e('tags-text')) },
                                                  '+ ' + he(e.selected.length - 1),
                                                  3
                                                ))
                                          ]),
                                          _: 1
                                        },
                                        8,
                                        ['size', 'type']
                                      ))
                                    : G('v-if', !0)
                                ],
                                2
                              ))
                            : G('v-if', !0),
                          G(' <div> '),
                          e.collapseTags
                            ? G('v-if', !0)
                            : (C(),
                              oe(
                                Pt,
                                { key: 1, onAfterLeave: e.resetInputHeight },
                                {
                                  default: W(() => [
                                    F(
                                      'span',
                                      {
                                        class: w([
                                          e.nsSelect.b('tags-wrapper'),
                                          { 'has-prefix': e.prefixWidth && e.selected.length }
                                        ])
                                      },
                                      [
                                        (C(!0),
                                        A(
                                          Pe,
                                          null,
                                          qe(
                                            e.selected,
                                            d => (
                                              C(),
                                              oe(
                                                r,
                                                {
                                                  key: e.getValueKey(d),
                                                  closable: !e.selectDisabled && !d.isDisabled,
                                                  size: e.collapseTagSize,
                                                  hit: d.hitState,
                                                  type: e.tagType,
                                                  'disable-transitions': '',
                                                  onClose: v => e.deleteTag(v, d)
                                                },
                                                {
                                                  default: W(() => [
                                                    F(
                                                      'span',
                                                      {
                                                        class: w(e.nsSelect.e('tags-text')),
                                                        style: $e({
                                                          maxWidth: e.inputWidth - 75 + 'px'
                                                        })
                                                      },
                                                      he(d.currentLabel),
                                                      7
                                                    )
                                                  ]),
                                                  _: 2
                                                },
                                                1032,
                                                ['closable', 'size', 'hit', 'type', 'onClose']
                                              )
                                            )
                                          ),
                                          128
                                        ))
                                      ],
                                      2
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['onAfterLeave']
                              )),
                          G(' </div> '),
                          e.filterable
                            ? Ve(
                                (C(),
                                A(
                                  'input',
                                  {
                                    key: 2,
                                    ref: 'input',
                                    'onUpdate:modelValue': t[1] || (t[1] = d => (e.query = d)),
                                    type: 'text',
                                    class: w([e.nsSelect.e('input'), e.nsSelect.is(e.selectSize)]),
                                    disabled: e.selectDisabled,
                                    autocomplete: e.autocomplete,
                                    style: $e({
                                      marginLeft:
                                        (e.prefixWidth && !e.selected.length) || e.tagInMultiLine
                                          ? `${e.prefixWidth}px`
                                          : '',
                                      flexGrow: 1,
                                      width: `${e.inputLength / (e.inputWidth - 32)}%`,
                                      maxWidth: `${e.inputWidth - 42}px`
                                    }),
                                    onFocus:
                                      t[2] ||
                                      (t[2] = (...d) => e.handleFocus && e.handleFocus(...d)),
                                    onBlur:
                                      t[3] || (t[3] = (...d) => e.handleBlur && e.handleBlur(...d)),
                                    onKeyup:
                                      t[4] ||
                                      (t[4] = (...d) =>
                                        e.managePlaceholder && e.managePlaceholder(...d)),
                                    onKeydown: [
                                      t[5] ||
                                        (t[5] = (...d) =>
                                          e.resetInputState && e.resetInputState(...d)),
                                      t[6] ||
                                        (t[6] = We(
                                          Le(d => e.navigateOptions('next'), ['prevent']),
                                          ['down']
                                        )),
                                      t[7] ||
                                        (t[7] = We(
                                          Le(d => e.navigateOptions('prev'), ['prevent']),
                                          ['up']
                                        )),
                                      t[8] ||
                                        (t[8] = We(
                                          (...d) =>
                                            e.handleKeydownEscape && e.handleKeydownEscape(...d),
                                          ['esc']
                                        )),
                                      t[9] ||
                                        (t[9] = We(
                                          Le(
                                            (...d) => e.selectOption && e.selectOption(...d),
                                            ['stop', 'prevent']
                                          ),
                                          ['enter']
                                        )),
                                      t[10] ||
                                        (t[10] = We(
                                          (...d) => e.deletePrevTag && e.deletePrevTag(...d),
                                          ['delete']
                                        )),
                                      t[11] || (t[11] = We(d => (e.visible = !1), ['tab']))
                                    ],
                                    onCompositionstart:
                                      t[12] ||
                                      (t[12] = (...d) =>
                                        e.handleComposition && e.handleComposition(...d)),
                                    onCompositionupdate:
                                      t[13] ||
                                      (t[13] = (...d) =>
                                        e.handleComposition && e.handleComposition(...d)),
                                    onCompositionend:
                                      t[14] ||
                                      (t[14] = (...d) =>
                                        e.handleComposition && e.handleComposition(...d)),
                                    onInput:
                                      t[15] ||
                                      (t[15] = (...d) =>
                                        e.debouncedQueryChange && e.debouncedQueryChange(...d))
                                  },
                                  null,
                                  46,
                                  Vg
                                )),
                                [[Dr, e.query]]
                              )
                            : G('v-if', !0)
                        ],
                        6
                      ))
                    : G('v-if', !0),
                  H(
                    f,
                    {
                      id: e.id,
                      ref: 'reference',
                      modelValue: e.selectedLabel,
                      'onUpdate:modelValue': t[16] || (t[16] = d => (e.selectedLabel = d)),
                      type: 'text',
                      placeholder: e.currentPlaceholder,
                      name: e.name,
                      autocomplete: e.autocomplete,
                      size: e.selectSize,
                      disabled: e.selectDisabled,
                      readonly: e.readonly,
                      'validate-event': !1,
                      class: w([e.nsSelect.is('focus', e.visible)]),
                      tabindex: e.multiple && e.filterable ? -1 : void 0,
                      onFocus: e.handleFocus,
                      onBlur: e.handleBlur,
                      onInput: e.debouncedOnInputChange,
                      onPaste: e.debouncedOnInputChange,
                      onCompositionstart: e.handleComposition,
                      onCompositionupdate: e.handleComposition,
                      onCompositionend: e.handleComposition,
                      onKeydown: [
                        t[17] ||
                          (t[17] = We(
                            Le(d => e.navigateOptions('next'), ['stop', 'prevent']),
                            ['down']
                          )),
                        t[18] ||
                          (t[18] = We(
                            Le(d => e.navigateOptions('prev'), ['stop', 'prevent']),
                            ['up']
                          )),
                        We(Le(e.selectOption, ['stop', 'prevent']), ['enter']),
                        We(e.handleKeydownEscape, ['esc']),
                        t[19] || (t[19] = We(d => (e.visible = !1), ['tab']))
                      ]
                    },
                    vl(
                      {
                        suffix: W(() => [
                          e.iconComponent && !e.showClose
                            ? (C(),
                              oe(
                                u,
                                {
                                  key: 0,
                                  class: w([
                                    e.nsSelect.e('caret'),
                                    e.nsSelect.e('icon'),
                                    e.iconReverse
                                  ])
                                },
                                { default: W(() => [(C(), oe(je(e.iconComponent)))]), _: 1 },
                                8,
                                ['class']
                              ))
                            : G('v-if', !0),
                          e.showClose && e.clearIcon
                            ? (C(),
                              oe(
                                u,
                                {
                                  key: 1,
                                  class: w([e.nsSelect.e('caret'), e.nsSelect.e('icon')]),
                                  onClick: e.handleClearClick
                                },
                                { default: W(() => [(C(), oe(je(e.clearIcon)))]), _: 1 },
                                8,
                                ['class', 'onClick']
                              ))
                            : G('v-if', !0)
                        ]),
                        _: 2
                      },
                      [
                        e.$slots.prefix
                          ? {
                              name: 'prefix',
                              fn: W(() => [F('div', Bg, [fe(e.$slots, 'prefix')])])
                            }
                          : void 0
                      ]
                    ),
                    1032,
                    [
                      'id',
                      'modelValue',
                      'placeholder',
                      'name',
                      'autocomplete',
                      'size',
                      'disabled',
                      'readonly',
                      'class',
                      'tabindex',
                      'onFocus',
                      'onBlur',
                      'onInput',
                      'onPaste',
                      'onCompositionstart',
                      'onCompositionupdate',
                      'onCompositionend',
                      'onKeydown'
                    ]
                  )
                ],
                32
              )
            ]),
            content: W(() => [
              H(h, null, {
                default: W(() => [
                  Ve(
                    H(
                      p,
                      {
                        ref: 'scrollbar',
                        tag: 'ul',
                        'wrap-class': e.nsSelect.be('dropdown', 'wrap'),
                        'view-class': e.nsSelect.be('dropdown', 'list'),
                        class: w([
                          e.nsSelect.is(
                            'empty',
                            !e.allowCreate && Boolean(e.query) && e.filteredOptionsCount === 0
                          )
                        ])
                      },
                      {
                        default: W(() => [
                          e.showNewOption
                            ? (C(),
                              oe(m, { key: 0, value: e.query, created: !0 }, null, 8, ['value']))
                            : G('v-if', !0),
                          fe(e.$slots, 'default')
                        ]),
                        _: 3
                      },
                      8,
                      ['wrap-class', 'view-class', 'class']
                    ),
                    [[ot, e.options.size > 0 && !e.loading]]
                  ),
                  e.emptyText &&
                  (!e.allowCreate || e.loading || (e.allowCreate && e.options.size === 0))
                    ? (C(),
                      A(
                        Pe,
                        { key: 0 },
                        [
                          e.$slots.empty
                            ? fe(e.$slots, 'empty', { key: 0 })
                            : (C(),
                              A(
                                'p',
                                { key: 1, class: w(e.nsSelect.be('dropdown', 'empty')) },
                                he(e.emptyText),
                                3
                              ))
                        ],
                        64
                      ))
                    : G('v-if', !0)
                ]),
                _: 3
              })
            ]),
            _: 3
          },
          8,
          [
            'visible',
            'placement',
            'teleported',
            'popper-class',
            'effect',
            'transition',
            'persistent',
            'onShow'
          ]
        )
      ],
      34
    )),
    [[c, e.handleClose, e.popperPaneRef]]
  )
}
var Lg = me(Ng, [
  ['render', Ag],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue'
  ]
])
const Dg = Q({
  name: 'ElOptionGroup',
  componentName: 'ElOptionGroup',
  props: { label: String, disabled: { type: Boolean, default: !1 } },
  setup(e) {
    const t = ve('select'),
      n = N(!0),
      l = at(),
      a = N([])
    Fe(br, yt({ ...Ut(e) }))
    const s = Ce(Fo)
    De(() => {
      a.value = r(l.subTree)
    })
    const r = u => {
        const f = []
        return (
          Array.isArray(u.children) &&
            u.children.forEach(m => {
              var p
              m.type && m.type.name === 'ElOption' && m.component && m.component.proxy
                ? f.push(m.component.proxy)
                : (p = m.children) != null && p.length && f.push(...r(m))
            }),
          f
        )
      },
      { groupQueryChange: i } = So(s)
    return (
      ce(
        i,
        () => {
          n.value = a.value.some(u => u.visible === !0)
        },
        { flush: 'post' }
      ),
      { visible: n, ns: t }
    )
  }
})
function Rg(e, t, n, l, a, s) {
  return Ve(
    (C(),
    A(
      'ul',
      { class: w(e.ns.be('group', 'wrap')) },
      [
        F('li', { class: w(e.ns.be('group', 'title')) }, he(e.label), 3),
        F('li', null, [F('ul', { class: w(e.ns.b('group')) }, [fe(e.$slots, 'default')], 2)])
      ],
      2
    )),
    [[ot, e.visible]]
  )
}
var yr = me(Dg, [
  ['render', Rg],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue'
  ]
])
const Fg = Ue(Lg, { Option: Rl, OptionGroup: yr }),
  zg = Jt(Rl)
Jt(yr)
const Fl = () => Ce(cs, {}),
  Kg = ge({
    pageSize: { type: Number, required: !0 },
    pageSizes: { type: re(Array), default: () => Fn([10, 20, 30, 40, 50, 100]) },
    popperClass: { type: String },
    disabled: Boolean,
    size: { type: String, values: Rn }
  }),
  Hg = Q({ name: 'ElPaginationSizes' }),
  Wg = Q({
    ...Hg,
    props: Kg,
    emits: ['page-size-change'],
    setup(e, { emit: t }) {
      const n = e,
        { t: l } = Ye(),
        a = ve('pagination'),
        s = Fl(),
        r = N(n.pageSize)
      ce(
        () => n.pageSizes,
        (f, m) => {
          if (!Eo(f, m) && Array.isArray(f)) {
            const p = f.includes(n.pageSize) ? n.pageSize : n.pageSizes[0]
            t('page-size-change', p)
          }
        }
      ),
        ce(
          () => n.pageSize,
          f => {
            r.value = f
          }
        )
      const i = S(() => n.pageSizes)
      function u(f) {
        var m
        f !== r.value && ((r.value = f), (m = s.handleSizeChange) == null || m.call(s, Number(f)))
      }
      return (f, m) => (
        C(),
        A(
          'span',
          { class: w(o(a).e('sizes')) },
          [
            H(
              o(Fg),
              {
                'model-value': r.value,
                disabled: f.disabled,
                'popper-class': f.popperClass,
                size: f.size,
                'validate-event': !1,
                onChange: u
              },
              {
                default: W(() => [
                  (C(!0),
                  A(
                    Pe,
                    null,
                    qe(
                      o(i),
                      p => (
                        C(),
                        oe(
                          o(zg),
                          { key: p, value: p, label: p + o(l)('el.pagination.pagesize') },
                          null,
                          8,
                          ['value', 'label']
                        )
                      )
                    ),
                    128
                  ))
                ]),
                _: 1
              },
              8,
              ['model-value', 'disabled', 'popper-class', 'size']
            )
          ],
          2
        )
      )
    }
  })
var Yg = me(Wg, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue'
  ]
])
const jg = ['disabled'],
  xg = Q({ name: 'ElPaginationJumper' }),
  Ug = Q({
    ...xg,
    setup(e) {
      const { t } = Ye(),
        n = ve('pagination'),
        { pageCount: l, disabled: a, currentPage: s, changeEvent: r } = Fl(),
        i = N(),
        u = S(() => {
          var p
          return (p = i.value) != null ? p : s == null ? void 0 : s.value
        })
      function f(p) {
        i.value = +p
      }
      function m(p) {
        ;(p = Math.trunc(+p)), r == null || r(+p), (i.value = void 0)
      }
      return (p, h) => (
        C(),
        A(
          'span',
          { class: w(o(n).e('jump')), disabled: o(a) },
          [
            dt(he(o(t)('el.pagination.goto')) + ' ', 1),
            H(
              o(Rt),
              {
                size: 'small',
                class: w([o(n).e('editor'), o(n).is('in-pagination')]),
                min: 1,
                max: o(l),
                disabled: o(a),
                'model-value': o(u),
                'validate-event': !1,
                type: 'number',
                'onUpdate:modelValue': f,
                onChange: m
              },
              null,
              8,
              ['class', 'max', 'disabled', 'model-value']
            ),
            dt(' ' + he(o(t)('el.pagination.pageClassifier')), 1)
          ],
          10,
          jg
        )
      )
    }
  })
var qg = me(Ug, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue'
  ]
])
const Gg = ge({ total: { type: Number, default: 1e3 } }),
  Xg = ['disabled'],
  Jg = Q({ name: 'ElPaginationTotal' }),
  Zg = Q({
    ...Jg,
    props: Gg,
    setup(e) {
      const { t } = Ye(),
        n = ve('pagination'),
        { disabled: l } = Fl()
      return (a, s) => (
        C(),
        A(
          'span',
          { class: w(o(n).e('total')), disabled: o(l) },
          he(o(t)('el.pagination.total', { total: a.total })),
          11,
          Xg
        )
      )
    }
  })
var Qg = me(Zg, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue'
  ]
])
const eh = ge({
    currentPage: { type: Number, default: 1 },
    pageCount: { type: Number, required: !0 },
    pagerCount: { type: Number, default: 7 },
    disabled: Boolean
  }),
  th = ['onKeyup'],
  nh = ['aria-current', 'tabindex'],
  oh = ['tabindex'],
  lh = ['aria-current', 'tabindex'],
  ah = ['tabindex'],
  sh = ['aria-current', 'tabindex'],
  rh = Q({ name: 'ElPaginationPager' }),
  ih = Q({
    ...rh,
    props: eh,
    emits: ['change'],
    setup(e, { emit: t }) {
      const n = e,
        l = ve('pager'),
        a = ve('icon'),
        s = N(!1),
        r = N(!1),
        i = N(!1),
        u = N(!1),
        f = N(!1),
        m = N(!1),
        p = S(() => {
          const T = n.pagerCount,
            E = (T - 1) / 2,
            g = Number(n.currentPage),
            $ = Number(n.pageCount)
          let k = !1,
            P = !1
          $ > T && (g > T - E && (k = !0), g < $ - E && (P = !0))
          const L = []
          if (k && !P) {
            const V = $ - (T - 2)
            for (let x = V; x < $; x++) L.push(x)
          } else if (!k && P) for (let V = 2; V < T; V++) L.push(V)
          else if (k && P) {
            const V = Math.floor(T / 2) - 1
            for (let x = g - V; x <= g + V; x++) L.push(x)
          } else for (let V = 2; V < $; V++) L.push(V)
          return L
        }),
        h = S(() => (n.disabled ? -1 : 0))
      fl(() => {
        const T = (n.pagerCount - 1) / 2
        ;(s.value = !1),
          (r.value = !1),
          n.pageCount > n.pagerCount &&
            (n.currentPage > n.pagerCount - T && (s.value = !0),
            n.currentPage < n.pageCount - T && (r.value = !0))
      })
      function c(T = !1) {
        n.disabled || (T ? (i.value = !0) : (u.value = !0))
      }
      function d(T = !1) {
        T ? (f.value = !0) : (m.value = !0)
      }
      function v(T) {
        const E = T.target
        if (E.tagName.toLowerCase() === 'li' && Array.from(E.classList).includes('number')) {
          const g = Number(E.textContent)
          g !== n.currentPage && t('change', g)
        } else E.tagName.toLowerCase() === 'li' && Array.from(E.classList).includes('more') && y(T)
      }
      function y(T) {
        const E = T.target
        if (E.tagName.toLowerCase() === 'ul' || n.disabled) return
        let g = Number(E.textContent)
        const $ = n.pageCount,
          k = n.currentPage,
          P = n.pagerCount - 2
        E.className.includes('more') &&
          (E.className.includes('quickprev')
            ? (g = k - P)
            : E.className.includes('quicknext') && (g = k + P)),
          Number.isNaN(+g) || (g < 1 && (g = 1), g > $ && (g = $)),
          g !== k && t('change', g)
      }
      return (T, E) => (
        C(),
        A(
          'ul',
          { class: w(o(l).b()), onClick: y, onKeyup: We(v, ['enter']) },
          [
            T.pageCount > 0
              ? (C(),
                A(
                  'li',
                  {
                    key: 0,
                    class: w([
                      [o(l).is('active', T.currentPage === 1), o(l).is('disabled', T.disabled)],
                      'number'
                    ]),
                    'aria-current': T.currentPage === 1,
                    tabindex: o(h)
                  },
                  ' 1 ',
                  10,
                  nh
                ))
              : G('v-if', !0),
            s.value
              ? (C(),
                A(
                  'li',
                  {
                    key: 1,
                    class: w(['more', 'btn-quickprev', o(a).b(), o(l).is('disabled', T.disabled)]),
                    tabindex: o(h),
                    onMouseenter: E[0] || (E[0] = g => c(!0)),
                    onMouseleave: E[1] || (E[1] = g => (i.value = !1)),
                    onFocus: E[2] || (E[2] = g => d(!0)),
                    onBlur: E[3] || (E[3] = g => (f.value = !1))
                  },
                  [
                    i.value || f.value ? (C(), oe(o(Tn), { key: 0 })) : (C(), oe(o(jl), { key: 1 }))
                  ],
                  42,
                  oh
                ))
              : G('v-if', !0),
            (C(!0),
            A(
              Pe,
              null,
              qe(
                o(p),
                g => (
                  C(),
                  A(
                    'li',
                    {
                      key: g,
                      class: w([
                        [o(l).is('active', T.currentPage === g), o(l).is('disabled', T.disabled)],
                        'number'
                      ]),
                      'aria-current': T.currentPage === g,
                      tabindex: o(h)
                    },
                    he(g),
                    11,
                    lh
                  )
                )
              ),
              128
            )),
            r.value
              ? (C(),
                A(
                  'li',
                  {
                    key: 2,
                    class: w(['more', 'btn-quicknext', o(a).b(), o(l).is('disabled', T.disabled)]),
                    tabindex: o(h),
                    onMouseenter: E[4] || (E[4] = g => c()),
                    onMouseleave: E[5] || (E[5] = g => (u.value = !1)),
                    onFocus: E[6] || (E[6] = g => d()),
                    onBlur: E[7] || (E[7] = g => (m.value = !1))
                  },
                  [
                    u.value || m.value ? (C(), oe(o(In), { key: 0 })) : (C(), oe(o(jl), { key: 1 }))
                  ],
                  42,
                  ah
                ))
              : G('v-if', !0),
            T.pageCount > 1
              ? (C(),
                A(
                  'li',
                  {
                    key: 3,
                    class: w([
                      [
                        o(l).is('active', T.currentPage === T.pageCount),
                        o(l).is('disabled', T.disabled)
                      ],
                      'number'
                    ]),
                    'aria-current': T.currentPage === T.pageCount,
                    tabindex: o(h)
                  },
                  he(T.pageCount),
                  11,
                  sh
                ))
              : G('v-if', !0)
          ],
          42,
          th
        )
      )
    }
  })
var uh = me(ih, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue'
  ]
])
const ht = e => typeof e != 'number',
  ch = ge({
    total: Number,
    pageSize: Number,
    defaultPageSize: Number,
    currentPage: Number,
    defaultCurrentPage: Number,
    pageCount: Number,
    pagerCount: {
      type: Number,
      validator: e => typeof e == 'number' && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
      default: 7
    },
    layout: {
      type: String,
      default: ['prev', 'pager', 'next', 'jumper', '->', 'total'].join(', ')
    },
    pageSizes: { type: re(Array), default: () => Fn([10, 20, 30, 40, 50, 100]) },
    popperClass: { type: String, default: '' },
    prevText: { type: String, default: '' },
    prevIcon: { type: ft, default: () => Gn },
    nextText: { type: String, default: '' },
    nextIcon: { type: ft, default: () => En },
    small: Boolean,
    background: Boolean,
    disabled: Boolean,
    hideOnSinglePage: Boolean
  }),
  dh = {
    'update:current-page': e => typeof e == 'number',
    'update:page-size': e => typeof e == 'number',
    'size-change': e => typeof e == 'number',
    'current-change': e => typeof e == 'number',
    'prev-click': e => typeof e == 'number',
    'next-click': e => typeof e == 'number'
  },
  La = 'ElPagination'
var fh = Q({
  name: La,
  props: ch,
  emits: dh,
  setup(e, { emit: t, slots: n }) {
    const { t: l } = Ye(),
      a = ve('pagination'),
      s = at().vnode.props || {},
      r = 'onUpdate:currentPage' in s || 'onUpdate:current-page' in s || 'onCurrentChange' in s,
      i = 'onUpdate:pageSize' in s || 'onUpdate:page-size' in s || 'onSizeChange' in s,
      u = S(() => {
        if ((ht(e.total) && ht(e.pageCount)) || (!ht(e.currentPage) && !r)) return !1
        if (e.layout.includes('sizes')) {
          if (ht(e.pageCount)) {
            if (!ht(e.total) && !ht(e.pageSize) && !i) return !1
          } else if (!i) return !1
        }
        return !0
      }),
      f = N(ht(e.defaultPageSize) ? 10 : e.defaultPageSize),
      m = N(ht(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage),
      p = S({
        get() {
          return ht(e.pageSize) ? f.value : e.pageSize
        },
        set(g) {
          ht(e.pageSize) && (f.value = g), i && (t('update:page-size', g), t('size-change', g))
        }
      }),
      h = S(() => {
        let g = 0
        return (
          ht(e.pageCount)
            ? ht(e.total) || (g = Math.max(1, Math.ceil(e.total / p.value)))
            : (g = e.pageCount),
          g
        )
      }),
      c = S({
        get() {
          return ht(e.currentPage) ? m.value : e.currentPage
        },
        set(g) {
          let $ = g
          g < 1 ? ($ = 1) : g > h.value && ($ = h.value),
            ht(e.currentPage) && (m.value = $),
            r && (t('update:current-page', $), t('current-change', $))
        }
      })
    ce(h, g => {
      c.value > g && (c.value = g)
    })
    function d(g) {
      c.value = g
    }
    function v(g) {
      p.value = g
      const $ = h.value
      c.value > $ && (c.value = $)
    }
    function y() {
      e.disabled || ((c.value -= 1), t('prev-click', c.value))
    }
    function T() {
      e.disabled || ((c.value += 1), t('next-click', c.value))
    }
    function E(g, $) {
      g && (g.props || (g.props = {}), (g.props.class = [g.props.class, $].join(' ')))
    }
    return (
      Fe(cs, {
        pageCount: h,
        disabled: S(() => e.disabled),
        currentPage: c,
        changeEvent: d,
        handleSizeChange: v
      }),
      () => {
        var g, $
        if (!u.value) return l('el.pagination.deprecationWarning'), null
        if (!e.layout || (e.hideOnSinglePage && h.value <= 1)) return null
        const k = [],
          P = [],
          L = ct('div', { class: a.e('rightwrapper') }, P),
          V = {
            prev: ct(hg, {
              disabled: e.disabled,
              currentPage: c.value,
              prevText: e.prevText,
              prevIcon: e.prevIcon,
              onClick: y
            }),
            jumper: ct(qg),
            pager: ct(uh, {
              currentPage: c.value,
              pageCount: h.value,
              pagerCount: e.pagerCount,
              onChange: d,
              disabled: e.disabled
            }),
            next: ct(Sg, {
              disabled: e.disabled,
              currentPage: c.value,
              pageCount: h.value,
              nextText: e.nextText,
              nextIcon: e.nextIcon,
              onClick: T
            }),
            sizes: ct(Yg, {
              pageSize: p.value,
              pageSizes: e.pageSizes,
              popperClass: e.popperClass,
              disabled: e.disabled,
              size: e.small ? 'small' : 'default'
            }),
            slot:
              ($ = (g = n == null ? void 0 : n.default) == null ? void 0 : g.call(n)) != null
                ? $
                : null,
            total: ct(Qg, { total: ht(e.total) ? 0 : e.total })
          },
          x = e.layout.split(',').map(X => X.trim())
        let Y = !1
        return (
          x.forEach(X => {
            if (X === '->') {
              Y = !0
              return
            }
            Y ? P.push(V[X]) : k.push(V[X])
          }),
          E(k[0], a.is('first')),
          E(k[k.length - 1], a.is('last')),
          Y &&
            P.length > 0 &&
            (E(P[0], a.is('first')), E(P[P.length - 1], a.is('last')), k.push(L)),
          ct(
            'div',
            {
              role: 'pagination',
              'aria-label': 'pagination',
              class: [a.b(), a.is('background', e.background), { [a.m('small')]: e.small }]
            },
            k
          )
        )
      }
    )
  }
})
const xb = Ue(fh),
  ph = ge({
    modelValue: { type: re([Number, Array]), default: 0 },
    id: { type: String, default: void 0 },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number, default: 1 },
    showInput: Boolean,
    showInputControls: { type: Boolean, default: !0 },
    size: qt,
    inputSize: qt,
    showStops: Boolean,
    showTooltip: { type: Boolean, default: !0 },
    formatTooltip: { type: re(Function), default: void 0 },
    disabled: Boolean,
    range: Boolean,
    vertical: Boolean,
    height: String,
    debounce: { type: Number, default: 300 },
    label: { type: String, default: void 0 },
    rangeStartLabel: { type: String, default: void 0 },
    rangeEndLabel: { type: String, default: void 0 },
    formatValueText: { type: re(Function), default: void 0 },
    tooltipClass: { type: String, default: void 0 },
    placement: { type: String, values: Kn, default: 'top' },
    marks: { type: re(Object) },
    validateEvent: { type: Boolean, default: !0 }
  }),
  Go = e => Be(e) || (Je(e) && e.every(Be)),
  vh = { [Ae]: Go, [jt]: Go, [Ht]: Go },
  mh = (e, t, n) => {
    const l = N()
    return (
      De(async () => {
        e.range
          ? (Array.isArray(e.modelValue)
              ? ((t.firstValue = Math.max(e.min, e.modelValue[0])),
                (t.secondValue = Math.min(e.max, e.modelValue[1])))
              : ((t.firstValue = e.min), (t.secondValue = e.max)),
            (t.oldValue = [t.firstValue, t.secondValue]))
          : (typeof e.modelValue != 'number' || Number.isNaN(e.modelValue)
              ? (t.firstValue = e.min)
              : (t.firstValue = Math.min(e.max, Math.max(e.min, e.modelValue))),
            (t.oldValue = t.firstValue)),
          Tt(window, 'resize', n),
          await we(),
          n()
      }),
      { sliderWrapper: l }
    )
  },
  gh = e =>
    S(() =>
      e.marks
        ? Object.keys(e.marks)
            .map(Number.parseFloat)
            .sort((n, l) => n - l)
            .filter(n => n <= e.max && n >= e.min)
            .map(n => ({
              point: n,
              position: ((n - e.min) * 100) / (e.max - e.min),
              mark: e.marks[n]
            }))
        : []
    ),
  hh = (e, t, n) => {
    const { form: l, formItem: a } = Qt(),
      s = Ft(),
      r = N(),
      i = N(),
      u = { firstButton: r, secondButton: i },
      f = S(() => e.disabled || (l == null ? void 0 : l.disabled) || !1),
      m = S(() => Math.min(t.firstValue, t.secondValue)),
      p = S(() => Math.max(t.firstValue, t.secondValue)),
      h = S(() =>
        e.range
          ? `${(100 * (p.value - m.value)) / (e.max - e.min)}%`
          : `${(100 * (t.firstValue - e.min)) / (e.max - e.min)}%`
      ),
      c = S(() => (e.range ? `${(100 * (m.value - e.min)) / (e.max - e.min)}%` : '0%')),
      d = S(() => (e.vertical ? { height: e.height } : {})),
      v = S(() =>
        e.vertical ? { height: h.value, bottom: c.value } : { width: h.value, left: c.value }
      ),
      y = () => {
        s.value && (t.sliderSize = s.value[`client${e.vertical ? 'Height' : 'Width'}`])
      },
      T = X => {
        const te = e.min + (X * (e.max - e.min)) / 100
        if (!e.range) return r
        let _
        return (
          Math.abs(m.value - te) < Math.abs(p.value - te)
            ? (_ = t.firstValue < t.secondValue ? 'firstButton' : 'secondButton')
            : (_ = t.firstValue > t.secondValue ? 'firstButton' : 'secondButton'),
          u[_]
        )
      },
      E = X => {
        const te = T(X)
        return te.value.setPosition(X), te
      },
      g = X => {
        ;(t.firstValue = X), k(e.range ? [m.value, p.value] : X)
      },
      $ = X => {
        ;(t.secondValue = X), e.range && k([m.value, p.value])
      },
      k = X => {
        n(Ae, X), n(jt, X)
      },
      P = async () => {
        await we(), n(Ht, e.range ? [m.value, p.value] : e.modelValue)
      },
      L = X => {
        var te, _, D, U, J, B
        if (f.value || t.dragging) return
        y()
        let R = 0
        if (e.vertical) {
          const O =
            (D =
              (_ = (te = X.touches) == null ? void 0 : te.item(0)) == null ? void 0 : _.clientY) !=
            null
              ? D
              : X.clientY
          R = ((s.value.getBoundingClientRect().bottom - O) / t.sliderSize) * 100
        } else {
          const O =
              (B =
                (J = (U = X.touches) == null ? void 0 : U.item(0)) == null ? void 0 : J.clientX) !=
              null
                ? B
                : X.clientX,
            q = s.value.getBoundingClientRect().left
          R = ((O - q) / t.sliderSize) * 100
        }
        if (!(R < 0 || R > 100)) return E(R)
      }
    return {
      elFormItem: a,
      slider: s,
      firstButton: r,
      secondButton: i,
      sliderDisabled: f,
      minValue: m,
      maxValue: p,
      runwayStyle: d,
      barStyle: v,
      resetSize: y,
      setPosition: E,
      emitChange: P,
      onSliderWrapperPrevent: X => {
        var te, _
        ;(((te = u.firstButton.value) == null ? void 0 : te.dragging) ||
          ((_ = u.secondButton.value) == null ? void 0 : _.dragging)) &&
          X.preventDefault()
      },
      onSliderClick: X => {
        L(X) && P()
      },
      onSliderDown: async X => {
        const te = L(X)
        te && (await we(), te.value.onButtonDown(X))
      },
      setFirstValue: g,
      setSecondValue: $
    }
  },
  { left: bh, down: yh, right: wh, up: kh, home: Ch, end: Sh, pageUp: Eh, pageDown: $h } = ke,
  Th = (e, t, n) => {
    const l = N(),
      a = N(!1),
      s = S(() => t.value instanceof Function),
      r = S(() => (s.value && t.value(e.modelValue)) || e.modelValue),
      i = Pn(() => {
        n.value && (a.value = !0)
      }, 50),
      u = Pn(() => {
        n.value && (a.value = !1)
      }, 50)
    return { tooltip: l, tooltipVisible: a, formatValue: r, displayTooltip: i, hideTooltip: u }
  },
  Ih = (e, t, n) => {
    const {
        disabled: l,
        min: a,
        max: s,
        step: r,
        showTooltip: i,
        precision: u,
        sliderSize: f,
        formatTooltip: m,
        emitChange: p,
        resetSize: h,
        updateDragging: c
      } = Ce(ps),
      {
        tooltip: d,
        tooltipVisible: v,
        formatValue: y,
        displayTooltip: T,
        hideTooltip: E
      } = Th(e, m, i),
      g = N(),
      $ = S(() => `${((e.modelValue - a.value) / (s.value - a.value)) * 100}%`),
      k = S(() => (e.vertical ? { bottom: $.value } : { left: $.value })),
      P = () => {
        ;(t.hovering = !0), T()
      },
      L = () => {
        ;(t.hovering = !1), t.dragging || E()
      },
      V = M => {
        l.value ||
          (M.preventDefault(),
          R(M),
          window.addEventListener('mousemove', O),
          window.addEventListener('touchmove', O),
          window.addEventListener('mouseup', q),
          window.addEventListener('touchend', q),
          window.addEventListener('contextmenu', q),
          g.value.focus())
      },
      x = M => {
        l.value ||
          ((t.newPosition = Number.parseFloat($.value) + (M / (s.value - a.value)) * 100),
          ee(t.newPosition),
          p())
      },
      Y = () => {
        x(-r.value)
      },
      X = () => {
        x(r.value)
      },
      te = () => {
        x(-r.value * 4)
      },
      _ = () => {
        x(r.value * 4)
      },
      D = () => {
        l.value || (ee(0), p())
      },
      U = () => {
        l.value || (ee(100), p())
      },
      J = M => {
        let j = !0
        ;[bh, yh].includes(M.key)
          ? Y()
          : [wh, kh].includes(M.key)
          ? X()
          : M.key === Ch
          ? D()
          : M.key === Sh
          ? U()
          : M.key === $h
          ? te()
          : M.key === Eh
          ? _()
          : (j = !1),
          j && M.preventDefault()
      },
      B = M => {
        let j, le
        return (
          M.type.startsWith('touch')
            ? ((le = M.touches[0].clientY), (j = M.touches[0].clientX))
            : ((le = M.clientY), (j = M.clientX)),
          { clientX: j, clientY: le }
        )
      },
      R = M => {
        ;(t.dragging = !0), (t.isClick = !0)
        const { clientX: j, clientY: le } = B(M)
        e.vertical ? (t.startY = le) : (t.startX = j),
          (t.startPosition = Number.parseFloat($.value)),
          (t.newPosition = t.startPosition)
      },
      O = M => {
        if (t.dragging) {
          ;(t.isClick = !1), T(), h()
          let j
          const { clientX: le, clientY: ie } = B(M)
          e.vertical
            ? ((t.currentY = ie), (j = ((t.startY - t.currentY) / f.value) * 100))
            : ((t.currentX = le), (j = ((t.currentX - t.startX) / f.value) * 100)),
            (t.newPosition = t.startPosition + j),
            ee(t.newPosition)
        }
      },
      q = () => {
        t.dragging &&
          (setTimeout(() => {
            ;(t.dragging = !1), t.hovering || E(), t.isClick || ee(t.newPosition), p()
          }, 0),
          window.removeEventListener('mousemove', O),
          window.removeEventListener('touchmove', O),
          window.removeEventListener('mouseup', q),
          window.removeEventListener('touchend', q),
          window.removeEventListener('contextmenu', q))
      },
      ee = async M => {
        if (M === null || Number.isNaN(+M)) return
        M < 0 ? (M = 0) : M > 100 && (M = 100)
        const j = 100 / ((s.value - a.value) / r.value)
        let ie = Math.round(M / j) * j * (s.value - a.value) * 0.01 + a.value
        ;(ie = Number.parseFloat(ie.toFixed(u.value))),
          ie !== e.modelValue && n(Ae, ie),
          !t.dragging && e.modelValue !== t.oldValue && (t.oldValue = e.modelValue),
          await we(),
          t.dragging && T(),
          d.value.updatePopper()
      }
    return (
      ce(
        () => t.dragging,
        M => {
          c(M)
        }
      ),
      {
        disabled: l,
        button: g,
        tooltip: d,
        tooltipVisible: v,
        showTooltip: i,
        wrapperStyle: k,
        formatValue: y,
        handleMouseEnter: P,
        handleMouseLeave: L,
        onButtonDown: V,
        onKeyDown: J,
        setPosition: ee
      }
    )
  },
  Ph = (e, t, n, l) => ({
    stops: S(() => {
      if (!e.showStops || e.min > e.max) return []
      if (e.step === 0) return []
      const r = (e.max - e.min) / e.step,
        i = (100 * e.step) / (e.max - e.min),
        u = Array.from({ length: r - 1 }).map((f, m) => (m + 1) * i)
      return e.range
        ? u.filter(
            f =>
              f < (100 * (n.value - e.min)) / (e.max - e.min) ||
              f > (100 * (l.value - e.min)) / (e.max - e.min)
          )
        : u.filter(f => f > (100 * (t.firstValue - e.min)) / (e.max - e.min))
    }),
    getStopStyle: r => (e.vertical ? { bottom: `${r}%` } : { left: `${r}%` })
  }),
  Oh = (e, t, n, l, a, s) => {
    const r = f => {
        a(Ae, f), a(jt, f)
      },
      i = () =>
        e.range
          ? ![n.value, l.value].every((f, m) => f === t.oldValue[m])
          : e.modelValue !== t.oldValue,
      u = () => {
        var f, m
        if (e.min > e.max) {
          bn('Slider', 'min should not be greater than max.')
          return
        }
        const p = e.modelValue
        e.range && Array.isArray(p)
          ? p[1] < e.min
            ? r([e.min, e.min])
            : p[0] > e.max
            ? r([e.max, e.max])
            : p[0] < e.min
            ? r([e.min, p[1]])
            : p[1] > e.max
            ? r([p[0], e.max])
            : ((t.firstValue = p[0]),
              (t.secondValue = p[1]),
              i() &&
                (e.validateEvent &&
                  ((f = s == null ? void 0 : s.validate) == null ||
                    f.call(s, 'change').catch(h => void 0)),
                (t.oldValue = p.slice())))
          : !e.range &&
            typeof p == 'number' &&
            !Number.isNaN(p) &&
            (p < e.min
              ? r(e.min)
              : p > e.max
              ? r(e.max)
              : ((t.firstValue = p),
                i() &&
                  (e.validateEvent &&
                    ((m = s == null ? void 0 : s.validate) == null ||
                      m.call(s, 'change').catch(h => void 0)),
                  (t.oldValue = p))))
      }
    u(),
      ce(
        () => t.dragging,
        f => {
          f || u()
        }
      ),
      ce(
        () => e.modelValue,
        (f, m) => {
          t.dragging ||
            (Array.isArray(f) &&
              Array.isArray(m) &&
              f.every((p, h) => p === m[h]) &&
              t.firstValue === f[0] &&
              t.secondValue === f[1]) ||
            u()
        },
        { deep: !0 }
      ),
      ce(
        () => [e.min, e.max],
        () => {
          u()
        }
      )
  },
  Mh = ge({
    modelValue: { type: Number, default: 0 },
    vertical: Boolean,
    tooltipClass: String,
    placement: { type: String, values: Kn, default: 'top' }
  }),
  _h = { [Ae]: e => Be(e) },
  Nh = ['tabindex'],
  Vh = Q({ name: 'ElSliderButton' }),
  Bh = Q({
    ...Vh,
    props: Mh,
    emits: _h,
    setup(e, { expose: t, emit: n }) {
      const l = e,
        a = ve('slider'),
        s = yt({
          hovering: !1,
          dragging: !1,
          isClick: !1,
          startX: 0,
          currentX: 0,
          startY: 0,
          currentY: 0,
          startPosition: 0,
          newPosition: 0,
          oldValue: l.modelValue
        }),
        {
          disabled: r,
          button: i,
          tooltip: u,
          showTooltip: f,
          tooltipVisible: m,
          wrapperStyle: p,
          formatValue: h,
          handleMouseEnter: c,
          handleMouseLeave: d,
          onButtonDown: v,
          onKeyDown: y,
          setPosition: T
        } = Ih(l, s, n),
        { hovering: E, dragging: g } = Ut(s)
      return (
        t({ onButtonDown: v, onKeyDown: y, setPosition: T, hovering: E, dragging: g }),
        ($, k) => (
          C(),
          A(
            'div',
            {
              ref_key: 'button',
              ref: i,
              class: w([o(a).e('button-wrapper'), { hover: o(E), dragging: o(g) }]),
              style: $e(o(p)),
              tabindex: o(r) ? -1 : 0,
              onMouseenter: k[0] || (k[0] = (...P) => o(c) && o(c)(...P)),
              onMouseleave: k[1] || (k[1] = (...P) => o(d) && o(d)(...P)),
              onMousedown: k[2] || (k[2] = (...P) => o(v) && o(v)(...P)),
              onTouchstart: k[3] || (k[3] = (...P) => o(v) && o(v)(...P)),
              onFocus: k[4] || (k[4] = (...P) => o(c) && o(c)(...P)),
              onBlur: k[5] || (k[5] = (...P) => o(d) && o(d)(...P)),
              onKeydown: k[6] || (k[6] = (...P) => o(y) && o(y)(...P))
            },
            [
              H(
                o(ro),
                {
                  ref_key: 'tooltip',
                  ref: u,
                  visible: o(m),
                  placement: $.placement,
                  'fallback-placements': ['top', 'bottom', 'right', 'left'],
                  'stop-popper-mouse-event': !1,
                  'popper-class': $.tooltipClass,
                  disabled: !o(f),
                  persistent: ''
                },
                {
                  content: W(() => [F('span', null, he(o(h)), 1)]),
                  default: W(() => [
                    F(
                      'div',
                      { class: w([o(a).e('button'), { hover: o(E), dragging: o(g) }]) },
                      null,
                      2
                    )
                  ]),
                  _: 1
                },
                8,
                ['visible', 'placement', 'popper-class', 'disabled']
              )
            ],
            46,
            Nh
          )
        )
      )
    }
  })
var Da = me(Bh, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/slider/src/button.vue'
  ]
])
const Ah = ge({ mark: { type: re([String, Object]), default: void 0 } })
var Lh = Q({
  name: 'ElSliderMarker',
  props: Ah,
  setup(e) {
    const t = ve('slider'),
      n = S(() => (xe(e.mark) ? e.mark : e.mark.label)),
      l = S(() => (xe(e.mark) ? void 0 : e.mark.style))
    return () => ct('div', { class: t.e('marks-text'), style: l.value }, n.value)
  }
})
const Dh = ['id', 'role', 'aria-label', 'aria-labelledby'],
  Rh = { key: 1 },
  Fh = Q({ name: 'ElSlider' }),
  zh = Q({
    ...Fh,
    props: ph,
    emits: vh,
    setup(e, { expose: t, emit: n }) {
      const l = e,
        a = ve('slider'),
        { t: s } = Ye(),
        r = yt({ firstValue: 0, secondValue: 0, oldValue: 0, dragging: !1, sliderSize: 1 }),
        {
          elFormItem: i,
          slider: u,
          firstButton: f,
          secondButton: m,
          sliderDisabled: p,
          minValue: h,
          maxValue: c,
          runwayStyle: d,
          barStyle: v,
          resetSize: y,
          emitChange: T,
          onSliderWrapperPrevent: E,
          onSliderClick: g,
          onSliderDown: $,
          setFirstValue: k,
          setSecondValue: P
        } = hh(l, r, n),
        { stops: L, getStopStyle: V } = Ph(l, r, h, c),
        { inputId: x, isLabeledByFormItem: Y } = oo(l, { formItemContext: i }),
        X = Ot(),
        te = S(() => l.inputSize || X.value),
        _ = S(() => l.label || s('el.slider.defaultLabel', { min: l.min, max: l.max })),
        D = S(() =>
          l.range ? l.rangeStartLabel || s('el.slider.defaultRangeStartLabel') : _.value
        ),
        U = S(() => (l.formatValueText ? l.formatValueText(M.value) : `${M.value}`)),
        J = S(() => l.rangeEndLabel || s('el.slider.defaultRangeEndLabel')),
        B = S(() => (l.formatValueText ? l.formatValueText(j.value) : `${j.value}`)),
        R = S(() => [
          a.b(),
          a.m(X.value),
          a.is('vertical', l.vertical),
          { [a.m('with-input')]: l.showInput }
        ]),
        O = gh(l)
      Oh(l, r, h, c, n, i)
      const q = S(() => {
          const se = [l.min, l.max, l.step].map(ae => {
            const ue = `${ae}`.split('.')[1]
            return ue ? ue.length : 0
          })
          return Math.max.apply(null, se)
        }),
        { sliderWrapper: ee } = mh(l, r, y),
        { firstValue: M, secondValue: j, sliderSize: le } = Ut(r),
        ie = se => {
          r.dragging = se
        }
      return (
        Fe(ps, {
          ...Ut(l),
          sliderSize: le,
          disabled: p,
          precision: q,
          emitChange: T,
          resetSize: y,
          updateDragging: ie
        }),
        t({ onSliderClick: g }),
        (se, ae) => {
          var ue, ye
          return (
            C(),
            A(
              'div',
              {
                id: se.range ? o(x) : void 0,
                ref_key: 'sliderWrapper',
                ref: ee,
                class: w(o(R)),
                role: se.range ? 'group' : void 0,
                'aria-label': se.range && !o(Y) ? o(_) : void 0,
                'aria-labelledby':
                  se.range && o(Y) ? ((ue = o(i)) == null ? void 0 : ue.labelId) : void 0,
                onTouchstart: ae[2] || (ae[2] = (...pe) => o(E) && o(E)(...pe)),
                onTouchmove: ae[3] || (ae[3] = (...pe) => o(E) && o(E)(...pe))
              },
              [
                F(
                  'div',
                  {
                    ref_key: 'slider',
                    ref: u,
                    class: w([
                      o(a).e('runway'),
                      { 'show-input': se.showInput && !se.range },
                      o(a).is('disabled', o(p))
                    ]),
                    style: $e(o(d)),
                    onMousedown: ae[0] || (ae[0] = (...pe) => o($) && o($)(...pe)),
                    onTouchstart: ae[1] || (ae[1] = (...pe) => o($) && o($)(...pe))
                  },
                  [
                    F('div', { class: w(o(a).e('bar')), style: $e(o(v)) }, null, 6),
                    H(
                      Da,
                      {
                        id: se.range ? void 0 : o(x),
                        ref_key: 'firstButton',
                        ref: f,
                        'model-value': o(M),
                        vertical: se.vertical,
                        'tooltip-class': se.tooltipClass,
                        placement: se.placement,
                        role: 'slider',
                        'aria-label': se.range || !o(Y) ? o(D) : void 0,
                        'aria-labelledby':
                          !se.range && o(Y) ? ((ye = o(i)) == null ? void 0 : ye.labelId) : void 0,
                        'aria-valuemin': se.min,
                        'aria-valuemax': se.range ? o(j) : se.max,
                        'aria-valuenow': o(M),
                        'aria-valuetext': o(U),
                        'aria-orientation': se.vertical ? 'vertical' : 'horizontal',
                        'aria-disabled': o(p),
                        'onUpdate:modelValue': o(k)
                      },
                      null,
                      8,
                      [
                        'id',
                        'model-value',
                        'vertical',
                        'tooltip-class',
                        'placement',
                        'aria-label',
                        'aria-labelledby',
                        'aria-valuemin',
                        'aria-valuemax',
                        'aria-valuenow',
                        'aria-valuetext',
                        'aria-orientation',
                        'aria-disabled',
                        'onUpdate:modelValue'
                      ]
                    ),
                    se.range
                      ? (C(),
                        oe(
                          Da,
                          {
                            key: 0,
                            ref_key: 'secondButton',
                            ref: m,
                            'model-value': o(j),
                            vertical: se.vertical,
                            'tooltip-class': se.tooltipClass,
                            placement: se.placement,
                            role: 'slider',
                            'aria-label': o(J),
                            'aria-valuemin': o(M),
                            'aria-valuemax': se.max,
                            'aria-valuenow': o(j),
                            'aria-valuetext': o(B),
                            'aria-orientation': se.vertical ? 'vertical' : 'horizontal',
                            'aria-disabled': o(p),
                            'onUpdate:modelValue': o(P)
                          },
                          null,
                          8,
                          [
                            'model-value',
                            'vertical',
                            'tooltip-class',
                            'placement',
                            'aria-label',
                            'aria-valuemin',
                            'aria-valuemax',
                            'aria-valuenow',
                            'aria-valuetext',
                            'aria-orientation',
                            'aria-disabled',
                            'onUpdate:modelValue'
                          ]
                        ))
                      : G('v-if', !0),
                    se.showStops
                      ? (C(),
                        A('div', Rh, [
                          (C(!0),
                          A(
                            Pe,
                            null,
                            qe(
                              o(L),
                              (pe, Me) => (
                                C(),
                                A(
                                  'div',
                                  { key: Me, class: w(o(a).e('stop')), style: $e(o(V)(pe)) },
                                  null,
                                  6
                                )
                              )
                            ),
                            128
                          ))
                        ]))
                      : G('v-if', !0),
                    o(O).length > 0
                      ? (C(),
                        A(
                          Pe,
                          { key: 2 },
                          [
                            F('div', null, [
                              (C(!0),
                              A(
                                Pe,
                                null,
                                qe(
                                  o(O),
                                  (pe, Me) => (
                                    C(),
                                    A(
                                      'div',
                                      {
                                        key: Me,
                                        style: $e(o(V)(pe.position)),
                                        class: w([o(a).e('stop'), o(a).e('marks-stop')])
                                      },
                                      null,
                                      6
                                    )
                                  )
                                ),
                                128
                              ))
                            ]),
                            F(
                              'div',
                              { class: w(o(a).e('marks')) },
                              [
                                (C(!0),
                                A(
                                  Pe,
                                  null,
                                  qe(
                                    o(O),
                                    (pe, Me) => (
                                      C(),
                                      oe(
                                        o(Lh),
                                        { key: Me, mark: pe.mark, style: $e(o(V)(pe.position)) },
                                        null,
                                        8,
                                        ['mark', 'style']
                                      )
                                    )
                                  ),
                                  128
                                ))
                              ],
                              2
                            )
                          ],
                          64
                        ))
                      : G('v-if', !0)
                  ],
                  38
                ),
                se.showInput && !se.range
                  ? (C(),
                    oe(
                      o(cg),
                      {
                        key: 0,
                        ref: 'input',
                        'model-value': o(M),
                        class: w(o(a).e('input')),
                        step: se.step,
                        disabled: o(p),
                        controls: se.showInputControls,
                        min: se.min,
                        max: se.max,
                        debounce: se.debounce,
                        size: o(te),
                        'onUpdate:modelValue': o(k),
                        onChange: o(T)
                      },
                      null,
                      8,
                      [
                        'model-value',
                        'class',
                        'step',
                        'disabled',
                        'controls',
                        'min',
                        'max',
                        'debounce',
                        'size',
                        'onUpdate:modelValue',
                        'onChange'
                      ]
                    ))
                  : G('v-if', !0)
              ],
              42,
              Dh
            )
          )
        }
      )
    }
  })
var Kh = me(zh, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/slider/src/slider.vue'
  ]
])
const Ub = Ue(Kh),
  Hh = ge({
    modelValue: { type: [Boolean, String, Number], default: !1 },
    value: { type: [Boolean, String, Number], default: !1 },
    disabled: { type: Boolean, default: !1 },
    width: { type: [String, Number], default: '' },
    inlinePrompt: { type: Boolean, default: !1 },
    activeIcon: { type: ft },
    inactiveIcon: { type: ft },
    activeText: { type: String, default: '' },
    inactiveText: { type: String, default: '' },
    activeColor: { type: String, default: '' },
    inactiveColor: { type: String, default: '' },
    borderColor: { type: String, default: '' },
    activeValue: { type: [Boolean, String, Number], default: !0 },
    inactiveValue: { type: [Boolean, String, Number], default: !1 },
    name: { type: String, default: '' },
    validateEvent: { type: Boolean, default: !0 },
    id: String,
    loading: { type: Boolean, default: !1 },
    beforeChange: { type: re(Function) },
    size: { type: String, validator: ls },
    tabindex: { type: [String, Number] }
  }),
  Wh = {
    [Ae]: e => Mt(e) || xe(e) || Be(e),
    [Ht]: e => Mt(e) || xe(e) || Be(e),
    [jt]: e => Mt(e) || xe(e) || Be(e)
  },
  Yh = ['onClick'],
  jh = [
    'id',
    'aria-checked',
    'aria-disabled',
    'name',
    'true-value',
    'false-value',
    'disabled',
    'tabindex',
    'onKeydown'
  ],
  xh = ['aria-hidden'],
  Uh = ['aria-hidden'],
  qh = ['aria-hidden'],
  il = 'ElSwitch',
  Gh = Q({ name: il }),
  Xh = Q({
    ...Gh,
    props: Hh,
    emits: Wh,
    setup(e, { expose: t, emit: n }) {
      const l = e,
        a = at(),
        { formItem: s } = Qt(),
        r = Ot(),
        i = ve('switch')
      On(
        {
          from: '"value"',
          replacement: '"model-value" or "v-model"',
          scope: il,
          version: '2.3.0',
          ref: 'https://element-plus.org/en-US/component/switch.html#attributes',
          type: 'Attribute'
        },
        S(() => {
          var k
          return !!((k = a.vnode.props) != null && k.value)
        })
      )
      const { inputId: u } = oo(l, { formItemContext: s }),
        f = yn(S(() => l.loading)),
        m = N(l.modelValue !== !1),
        p = N(),
        h = N(),
        c = S(() => [i.b(), i.m(r.value), i.is('disabled', f.value), i.is('checked', y.value)]),
        d = S(() => ({ width: Kt(l.width) }))
      ce(
        () => l.modelValue,
        () => {
          m.value = !0
        }
      ),
        ce(
          () => l.value,
          () => {
            m.value = !1
          }
        )
      const v = S(() => (m.value ? l.modelValue : l.value)),
        y = S(() => v.value === l.activeValue)
      ;[l.activeValue, l.inactiveValue].includes(v.value) ||
        (n(Ae, l.inactiveValue), n(Ht, l.inactiveValue), n(jt, l.inactiveValue)),
        ce(y, k => {
          var P
          ;(p.value.checked = k),
            l.validateEvent &&
              ((P = s == null ? void 0 : s.validate) == null ||
                P.call(s, 'change').catch(L => void 0))
        })
      const T = () => {
          const k = y.value ? l.inactiveValue : l.activeValue
          n(Ae, k),
            n(Ht, k),
            n(jt, k),
            we(() => {
              p.value.checked = y.value
            })
        },
        E = () => {
          if (f.value) return
          const { beforeChange: k } = l
          if (!k) {
            T()
            return
          }
          const P = k()
          ;[Wl(P), Mt(P)].includes(!0) ||
            bn(il, 'beforeChange must return type `Promise<boolean>` or `boolean`'),
            Wl(P)
              ? P.then(V => {
                  V && T()
                }).catch(V => {})
              : P && T()
        },
        g = S(() =>
          i.cssVarBlock({
            ...(l.activeColor ? { 'on-color': l.activeColor } : null),
            ...(l.inactiveColor ? { 'off-color': l.inactiveColor } : null),
            ...(l.borderColor ? { 'border-color': l.borderColor } : null)
          })
        ),
        $ = () => {
          var k, P
          ;(P = (k = p.value) == null ? void 0 : k.focus) == null || P.call(k)
        }
      return (
        De(() => {
          p.value.checked = y.value
        }),
        t({ focus: $, checked: y }),
        (k, P) => (
          C(),
          A(
            'div',
            { class: w(o(c)), style: $e(o(g)), onClick: Le(E, ['prevent']) },
            [
              F(
                'input',
                {
                  id: o(u),
                  ref_key: 'input',
                  ref: p,
                  class: w(o(i).e('input')),
                  type: 'checkbox',
                  role: 'switch',
                  'aria-checked': o(y),
                  'aria-disabled': o(f),
                  name: k.name,
                  'true-value': k.activeValue,
                  'false-value': k.inactiveValue,
                  disabled: o(f),
                  tabindex: k.tabindex,
                  onChange: T,
                  onKeydown: We(E, ['enter'])
                },
                null,
                42,
                jh
              ),
              !k.inlinePrompt && (k.inactiveIcon || k.inactiveText)
                ? (C(),
                  A(
                    'span',
                    {
                      key: 0,
                      class: w([
                        o(i).e('label'),
                        o(i).em('label', 'left'),
                        o(i).is('active', !o(y))
                      ])
                    },
                    [
                      k.inactiveIcon
                        ? (C(),
                          oe(
                            o(be),
                            { key: 0 },
                            { default: W(() => [(C(), oe(je(k.inactiveIcon)))]), _: 1 }
                          ))
                        : G('v-if', !0),
                      !k.inactiveIcon && k.inactiveText
                        ? (C(),
                          A('span', { key: 1, 'aria-hidden': o(y) }, he(k.inactiveText), 9, xh))
                        : G('v-if', !0)
                    ],
                    2
                  ))
                : G('v-if', !0),
              F(
                'span',
                { ref_key: 'core', ref: h, class: w(o(i).e('core')), style: $e(o(d)) },
                [
                  k.inlinePrompt
                    ? (C(),
                      A(
                        'div',
                        { key: 0, class: w(o(i).e('inner')) },
                        [
                          k.activeIcon || k.inactiveIcon
                            ? (C(),
                              oe(
                                o(be),
                                { key: 0, class: w(o(i).is('icon')) },
                                {
                                  default: W(() => [
                                    (C(), oe(je(o(y) ? k.activeIcon : k.inactiveIcon)))
                                  ]),
                                  _: 1
                                },
                                8,
                                ['class']
                              ))
                            : k.activeText || k.inactiveText
                            ? (C(),
                              A(
                                'span',
                                { key: 1, class: w(o(i).is('text')), 'aria-hidden': !o(y) },
                                he(o(y) ? k.activeText : k.inactiveText),
                                11,
                                Uh
                              ))
                            : G('v-if', !0)
                        ],
                        2
                      ))
                    : G('v-if', !0),
                  F(
                    'div',
                    { class: w(o(i).e('action')) },
                    [
                      k.loading
                        ? (C(),
                          oe(
                            o(be),
                            { key: 0, class: w(o(i).is('loading')) },
                            { default: W(() => [H(o(ml))]), _: 1 },
                            8,
                            ['class']
                          ))
                        : G('v-if', !0)
                    ],
                    2
                  )
                ],
                6
              ),
              !k.inlinePrompt && (k.activeIcon || k.activeText)
                ? (C(),
                  A(
                    'span',
                    {
                      key: 1,
                      class: w([
                        o(i).e('label'),
                        o(i).em('label', 'right'),
                        o(i).is('active', o(y))
                      ])
                    },
                    [
                      k.activeIcon
                        ? (C(),
                          oe(
                            o(be),
                            { key: 0 },
                            { default: W(() => [(C(), oe(je(k.activeIcon)))]), _: 1 }
                          ))
                        : G('v-if', !0),
                      !k.activeIcon && k.activeText
                        ? (C(),
                          A('span', { key: 1, 'aria-hidden': !o(y) }, he(k.activeText), 9, qh))
                        : G('v-if', !0)
                    ],
                    2
                  ))
                : G('v-if', !0)
            ],
            14,
            Yh
          )
        )
      )
    }
  })
var Jh = me(Xh, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue'
  ]
])
const qb = Ue(Jh),
  Zh = Q({
    name: 'ElTimeline',
    setup(e, { slots: t }) {
      const n = ve('timeline')
      return Fe('timeline', t), () => ct('ul', { class: [n.b()] }, [fe(t, 'default')])
    }
  }),
  Qh = ge({
    timestamp: { type: String, default: '' },
    hideTimestamp: { type: Boolean, default: !1 },
    center: { type: Boolean, default: !1 },
    placement: { type: String, values: ['top', 'bottom'], default: 'bottom' },
    type: {
      type: String,
      values: ['primary', 'success', 'warning', 'danger', 'info'],
      default: ''
    },
    color: { type: String, default: '' },
    size: { type: String, values: ['normal', 'large'], default: 'normal' },
    icon: { type: ft },
    hollow: { type: Boolean, default: !1 }
  }),
  eb = Q({ name: 'ElTimelineItem' }),
  tb = Q({
    ...eb,
    props: Qh,
    setup(e) {
      const t = ve('timeline-item')
      return (n, l) => (
        C(),
        A(
          'li',
          { class: w([o(t).b(), { [o(t).e('center')]: n.center }]) },
          [
            F('div', { class: w(o(t).e('tail')) }, null, 2),
            n.$slots.dot
              ? G('v-if', !0)
              : (C(),
                A(
                  'div',
                  {
                    key: 0,
                    class: w([
                      o(t).e('node'),
                      o(t).em('node', n.size || ''),
                      o(t).em('node', n.type || ''),
                      o(t).is('hollow', n.hollow)
                    ]),
                    style: $e({ backgroundColor: n.color })
                  },
                  [
                    n.icon
                      ? (C(),
                        oe(
                          o(be),
                          { key: 0, class: w(o(t).e('icon')) },
                          { default: W(() => [(C(), oe(je(n.icon)))]), _: 1 },
                          8,
                          ['class']
                        ))
                      : G('v-if', !0)
                  ],
                  6
                )),
            n.$slots.dot
              ? (C(), A('div', { key: 1, class: w(o(t).e('dot')) }, [fe(n.$slots, 'dot')], 2))
              : G('v-if', !0),
            F(
              'div',
              { class: w(o(t).e('wrapper')) },
              [
                !n.hideTimestamp && n.placement === 'top'
                  ? (C(),
                    A(
                      'div',
                      { key: 0, class: w([o(t).e('timestamp'), o(t).is('top')]) },
                      he(n.timestamp),
                      3
                    ))
                  : G('v-if', !0),
                F('div', { class: w(o(t).e('content')) }, [fe(n.$slots, 'default')], 2),
                !n.hideTimestamp && n.placement === 'bottom'
                  ? (C(),
                    A(
                      'div',
                      { key: 1, class: w([o(t).e('timestamp'), o(t).is('bottom')]) },
                      he(n.timestamp),
                      3
                    ))
                  : G('v-if', !0)
              ],
              2
            )
          ],
          2
        )
      )
    }
  })
var wr = me(tb, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/timeline/src/timeline-item.vue'
  ]
])
const Gb = Ue(Zh, { TimelineItem: wr }),
  Xb = Jt(wr),
  Dt = 'ElInfiniteScroll',
  nb = 50,
  ob = 200,
  lb = 0,
  ab = {
    delay: { type: Number, default: ob },
    distance: { type: Number, default: lb },
    disabled: { type: Boolean, default: !1 },
    immediate: { type: Boolean, default: !0 }
  },
  zl = (e, t) =>
    Object.entries(ab).reduce((n, [l, a]) => {
      var s, r
      const { type: i, default: u } = a,
        f = e.getAttribute(`infinite-scroll-${l}`)
      let m = (r = (s = t[f]) != null ? s : f) != null ? r : u
      return (m = m === 'false' ? !1 : m), (m = i(m)), (n[l] = Number.isNaN(m) ? u : m), n
    }, {}),
  kr = e => {
    const { observer: t } = e[Dt]
    t && (t.disconnect(), delete e[Dt].observer)
  },
  sb = (e, t) => {
    const { container: n, containerEl: l, instance: a, observer: s, lastScrollTop: r } = e[Dt],
      { disabled: i, distance: u } = zl(e, a),
      { clientHeight: f, scrollHeight: m, scrollTop: p } = l,
      h = p - r
    if (((e[Dt].lastScrollTop = p), s || i || h < 0)) return
    let c = !1
    if (n === e) c = m - (f + p) <= u
    else {
      const { clientTop: d, scrollHeight: v } = e,
        y = gi(e, l)
      c = p + f >= y + d + v - u
    }
    c && t.call(a)
  }
function Xo(e, t) {
  const { containerEl: n, instance: l } = e[Dt],
    { disabled: a } = zl(e, l)
  a || n.clientHeight === 0 || (n.scrollHeight <= n.clientHeight ? t.call(l) : kr(e))
}
const rb = {
    async mounted(e, t) {
      const { instance: n, value: l } = t
      lt(l) || bn(Dt, "'v-infinite-scroll' binding value must be a function"), await we()
      const { delay: a, immediate: s } = zl(e, n),
        r = ns(e, !0),
        i = r === window ? document.documentElement : r,
        u = jn(sb.bind(null, e, l), a)
      if (!!r) {
        if (
          ((e[Dt] = {
            instance: n,
            container: r,
            containerEl: i,
            delay: a,
            cb: l,
            onScroll: u,
            lastScrollTop: i.scrollTop
          }),
          s)
        ) {
          const f = new MutationObserver(jn(Xo.bind(null, e, l), nb))
          ;(e[Dt].observer = f), f.observe(e, { childList: !0, subtree: !0 }), Xo(e, l)
        }
        r.addEventListener('scroll', u)
      }
    },
    unmounted(e) {
      const { container: t, onScroll: n } = e[Dt]
      t == null || t.removeEventListener('scroll', n), kr(e)
    },
    async updated(e) {
      e[Dt] || (await we())
      const { containerEl: t, cb: n, observer: l } = e[Dt]
      t.clientHeight && l && Xo(e, n)
    }
  },
  ul = rb
ul.install = e => {
  e.directive('InfiniteScroll', ul)
}
const Jb = ul
function ib(e) {
  let t
  const n = ve('loading'),
    l = N(!1),
    a = yt({ ...e, originalPosition: '', originalOverflow: '', visible: !1 })
  function s(c) {
    a.text = c
  }
  function r() {
    const c = a.parent
    if (!c.vLoadingAddClassList) {
      let d = c.getAttribute('loading-number')
      ;(d = Number.parseInt(d) - 1),
        d
          ? c.setAttribute('loading-number', d.toString())
          : (Xn(c, n.bm('parent', 'relative')), c.removeAttribute('loading-number')),
        Xn(c, n.bm('parent', 'hidden'))
    }
    i(), p.unmount()
  }
  function i() {
    var c, d
    ;(d = (c = h.$el) == null ? void 0 : c.parentNode) == null || d.removeChild(h.$el)
  }
  function u() {
    var c
    ;(e.beforeClose && !e.beforeClose()) ||
      ((l.value = !0),
      clearTimeout(t),
      (t = window.setTimeout(f, 400)),
      (a.visible = !1),
      (c = e.closed) == null || c.call(e))
  }
  function f() {
    if (!l.value) return
    const c = a.parent
    ;(l.value = !1), (c.vLoadingAddClassList = void 0), r()
  }
  const p = Rr({
      name: 'ElLoading',
      setup() {
        return () => {
          const c = a.spinner || a.svg,
            d = ct(
              'svg',
              {
                class: 'circular',
                viewBox: a.svgViewBox ? a.svgViewBox : '0 0 50 50',
                ...(c ? { innerHTML: c } : {})
              },
              [ct('circle', { class: 'path', cx: '25', cy: '25', r: '20', fill: 'none' })]
            ),
            v = a.text ? ct('p', { class: n.b('text') }, [a.text]) : void 0
          return ct(
            Pt,
            { name: n.b('fade'), onAfterLeave: f },
            {
              default: W(() => [
                Ve(
                  H(
                    'div',
                    {
                      style: { backgroundColor: a.background || '' },
                      class: [n.b('mask'), a.customClass, a.fullscreen ? 'is-fullscreen' : '']
                    },
                    [ct('div', { class: n.b('spinner') }, [d, v])]
                  ),
                  [[ot, a.visible]]
                )
              ])
            }
          )
        }
      }
    }),
    h = p.mount(document.createElement('div'))
  return {
    ...Ut(a),
    setText: s,
    removeElLoadingChild: i,
    close: u,
    handleAfterLeave: f,
    vm: h,
    get $el() {
      return h.$el
    }
  }
}
let ho
const cl = function (e = {}) {
    if (!Re) return
    const t = ub(e)
    if (t.fullscreen && ho) return ho
    const n = ib({
      ...t,
      closed: () => {
        var a
        ;(a = t.closed) == null || a.call(t), t.fullscreen && (ho = void 0)
      }
    })
    cb(t, t.parent, n),
      Ra(t, t.parent, n),
      (t.parent.vLoadingAddClassList = () => Ra(t, t.parent, n))
    let l = t.parent.getAttribute('loading-number')
    return (
      l ? (l = `${Number.parseInt(l) + 1}`) : (l = '1'),
      t.parent.setAttribute('loading-number', l),
      t.parent.appendChild(n.$el),
      we(() => (n.visible.value = t.visible)),
      t.fullscreen && (ho = n),
      n
    )
  },
  ub = e => {
    var t, n, l, a
    let s
    return (
      xe(e.target)
        ? (s = (t = document.querySelector(e.target)) != null ? t : document.body)
        : (s = e.target || document.body),
      {
        parent: s === document.body || e.body ? document.body : s,
        background: e.background || '',
        svg: e.svg || '',
        svgViewBox: e.svgViewBox || '',
        spinner: e.spinner || !1,
        text: e.text || '',
        fullscreen: s === document.body && ((n = e.fullscreen) != null ? n : !0),
        lock: (l = e.lock) != null ? l : !1,
        customClass: e.customClass || '',
        visible: (a = e.visible) != null ? a : !0,
        target: s
      }
    )
  },
  cb = async (e, t, n) => {
    const { nextZIndex: l } = lo(),
      a = {}
    if (e.fullscreen)
      (n.originalPosition.value = fn(document.body, 'position')),
        (n.originalOverflow.value = fn(document.body, 'overflow')),
        (a.zIndex = l())
    else if (e.parent === document.body) {
      ;(n.originalPosition.value = fn(document.body, 'position')), await we()
      for (const s of ['top', 'left']) {
        const r = s === 'top' ? 'scrollTop' : 'scrollLeft'
        a[s] = `${
          e.target.getBoundingClientRect()[s] +
          document.body[r] +
          document.documentElement[r] -
          Number.parseInt(fn(document.body, `margin-${s}`), 10)
        }px`
      }
      for (const s of ['height', 'width']) a[s] = `${e.target.getBoundingClientRect()[s]}px`
    } else n.originalPosition.value = fn(t, 'position')
    for (const [s, r] of Object.entries(a)) n.$el.style[s] = r
  },
  Ra = (e, t, n) => {
    const l = ve('loading')
    ;['absolute', 'fixed', 'sticky'].includes(n.originalPosition.value)
      ? Xn(t, l.bm('parent', 'relative'))
      : el(t, l.bm('parent', 'relative')),
      e.fullscreen && e.lock ? el(t, l.bm('parent', 'hidden')) : Xn(t, l.bm('parent', 'hidden'))
  },
  dl = Symbol('ElLoading'),
  Fa = (e, t) => {
    var n, l, a, s
    const r = t.instance,
      i = h => (zt(t.value) ? t.value[h] : void 0),
      u = h => {
        const c = (xe(h) && (r == null ? void 0 : r[h])) || h
        return c && N(c)
      },
      f = h => u(i(h) || e.getAttribute(`element-loading-${Fr(h)}`)),
      m = (n = i('fullscreen')) != null ? n : t.modifiers.fullscreen,
      p = {
        text: f('text'),
        svg: f('svg'),
        svgViewBox: f('svgViewBox'),
        spinner: f('spinner'),
        background: f('background'),
        customClass: f('customClass'),
        fullscreen: m,
        target: (l = i('target')) != null ? l : m ? void 0 : e,
        body: (a = i('body')) != null ? a : t.modifiers.body,
        lock: (s = i('lock')) != null ? s : t.modifiers.lock
      }
    e[dl] = { options: p, instance: cl(p) }
  },
  db = (e, t) => {
    for (const n of Object.keys(t)) to(t[n]) && (t[n].value = e[n])
  },
  za = {
    mounted(e, t) {
      t.value && Fa(e, t)
    },
    updated(e, t) {
      const n = e[dl]
      t.oldValue !== t.value &&
        (t.value && !t.oldValue
          ? Fa(e, t)
          : t.value && t.oldValue
          ? zt(t.value) && db(t.value, n.options)
          : n == null || n.instance.close())
    },
    unmounted(e) {
      var t
      ;(t = e[dl]) == null || t.instance.close()
    }
  },
  Zb = {
    install(e) {
      e.directive('loading', za), (e.config.globalProperties.$loading = cl)
    },
    directive: za,
    service: cl
  },
  Cr = ['success', 'info', 'warning', 'error'],
  kt = Fn({
    customClass: '',
    center: !1,
    dangerouslyUseHTMLString: !1,
    duration: 3e3,
    icon: void 0,
    id: '',
    message: '',
    onClose: void 0,
    showClose: !1,
    type: 'info',
    offset: 16,
    zIndex: 0,
    grouping: !1,
    repeatNum: 1,
    appendTo: Re ? document.body : void 0
  }),
  fb = ge({
    customClass: { type: String, default: kt.customClass },
    center: { type: Boolean, default: kt.center },
    dangerouslyUseHTMLString: { type: Boolean, default: kt.dangerouslyUseHTMLString },
    duration: { type: Number, default: kt.duration },
    icon: { type: ft, default: kt.icon },
    id: { type: String, default: kt.id },
    message: { type: re([String, Object, Function]), default: kt.message },
    onClose: { type: re(Function), required: !1 },
    showClose: { type: Boolean, default: kt.showClose },
    type: { type: String, values: Cr, default: kt.type },
    offset: { type: Number, default: kt.offset },
    zIndex: { type: Number, default: kt.zIndex },
    grouping: { type: Boolean, default: kt.grouping },
    repeatNum: { type: Number, default: kt.repeatNum }
  }),
  pb = { destroy: () => !0 },
  Yt = zr([]),
  vb = e => {
    const t = Yt.findIndex(a => a.id === e),
      n = Yt[t]
    let l
    return t > 0 && (l = Yt[t - 1]), { current: n, prev: l }
  },
  mb = e => {
    const { prev: t } = vb(e)
    return t ? t.vm.exposed.bottom.value : 0
  },
  gb = ['id'],
  hb = ['innerHTML'],
  bb = Q({ name: 'ElMessage' }),
  yb = Q({
    ...bb,
    props: fb,
    emits: pb,
    setup(e, { expose: t }) {
      const n = e,
        { Close: l } = Ei,
        a = ve('message'),
        s = N(),
        r = N(!1),
        i = N(0)
      let u
      const f = S(() => (n.type ? (n.type === 'error' ? 'danger' : n.type) : 'info')),
        m = S(() => {
          const $ = n.type
          return { [a.bm('icon', $)]: $ && Gl[$] }
        }),
        p = S(() => n.icon || Gl[n.type] || ''),
        h = S(() => mb(n.id)),
        c = S(() => n.offset + h.value),
        d = S(() => i.value + c.value),
        v = S(() => ({ top: `${c.value}px`, zIndex: n.zIndex }))
      function y() {
        n.duration !== 0 &&
          ({ stop: u } = Jo(() => {
            E()
          }, n.duration))
      }
      function T() {
        u == null || u()
      }
      function E() {
        r.value = !1
      }
      function g({ code: $ }) {
        $ === ke.esc && E()
      }
      return (
        De(() => {
          y(), (r.value = !0)
        }),
        ce(
          () => n.repeatNum,
          () => {
            T(), y()
          }
        ),
        Tt(document, 'keydown', g),
        Dn(s, () => {
          i.value = s.value.getBoundingClientRect().height
        }),
        t({ visible: r, bottom: d, close: E }),
        ($, k) => (
          C(),
          oe(
            Pt,
            {
              name: o(a).b('fade'),
              onBeforeLeave: $.onClose,
              onAfterLeave: k[0] || (k[0] = P => $.$emit('destroy')),
              persisted: ''
            },
            {
              default: W(() => [
                Ve(
                  F(
                    'div',
                    {
                      id: $.id,
                      ref_key: 'messageRef',
                      ref: s,
                      class: w([
                        o(a).b(),
                        { [o(a).m($.type)]: $.type && !$.icon },
                        o(a).is('center', $.center),
                        o(a).is('closable', $.showClose),
                        $.customClass
                      ]),
                      style: $e(o(v)),
                      role: 'alert',
                      onMouseenter: T,
                      onMouseleave: y
                    },
                    [
                      $.repeatNum > 1
                        ? (C(),
                          oe(
                            o(Yd),
                            { key: 0, value: $.repeatNum, type: o(f), class: w(o(a).e('badge')) },
                            null,
                            8,
                            ['value', 'type', 'class']
                          ))
                        : G('v-if', !0),
                      o(p)
                        ? (C(),
                          oe(
                            o(be),
                            { key: 1, class: w([o(a).e('icon'), o(m)]) },
                            { default: W(() => [(C(), oe(je(o(p))))]), _: 1 },
                            8,
                            ['class']
                          ))
                        : G('v-if', !0),
                      fe($.$slots, 'default', {}, () => [
                        $.dangerouslyUseHTMLString
                          ? (C(),
                            A(
                              Pe,
                              { key: 1 },
                              [
                                G(
                                  " Caution here, message could've been compromised, never use user's input as message "
                                ),
                                F(
                                  'p',
                                  { class: w(o(a).e('content')), innerHTML: $.message },
                                  null,
                                  10,
                                  hb
                                )
                              ],
                              2112
                            ))
                          : (C(), A('p', { key: 0, class: w(o(a).e('content')) }, he($.message), 3))
                      ]),
                      $.showClose
                        ? (C(),
                          oe(
                            o(be),
                            { key: 2, class: w(o(a).e('closeBtn')), onClick: Le(E, ['stop']) },
                            { default: W(() => [H(o(l))]), _: 1 },
                            8,
                            ['class', 'onClick']
                          ))
                        : G('v-if', !0)
                    ],
                    46,
                    gb
                  ),
                  [[ot, r.value]]
                )
              ]),
              _: 3
            },
            8,
            ['name', 'onBeforeLeave']
          )
        )
      )
    }
  })
var wb = me(yb, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue'
  ]
])
let kb = 1
const Sr = e => {
    const t = !e || xe(e) || Ya(e) || lt(e) ? { message: e } : e,
      n = { ...kt, ...t }
    if (!n.appendTo) n.appendTo = document.body
    else if (xe(n.appendTo)) {
      let l = document.querySelector(n.appendTo)
      gn(l) || (l = document.body), (n.appendTo = l)
    }
    return n
  },
  Cb = e => {
    const t = Yt.indexOf(e)
    if (t === -1) return
    Yt.splice(t, 1)
    const { handler: n } = e
    n.close()
  },
  Sb = ({ appendTo: e, ...t }, n) => {
    const { nextZIndex: l } = lo(),
      a = `message_${kb++}`,
      s = t.onClose,
      r = document.createElement('div'),
      i = {
        ...t,
        zIndex: l() + t.zIndex,
        id: a,
        onClose: () => {
          s == null || s(), Cb(p)
        },
        onDestroy: () => {
          Yl(null, r)
        }
      },
      u = H(
        wb,
        i,
        lt(i.message) || Ya(i.message)
          ? { default: lt(i.message) ? i.message : () => i.message }
          : null
      )
    ;(u.appContext = n || An._context), Yl(u, r), e.appendChild(r.firstElementChild)
    const f = u.component,
      p = {
        id: a,
        vnode: u,
        vm: f,
        handler: {
          close: () => {
            f.exposed.visible.value = !1
          }
        },
        props: u.component.props
      }
    return p
  },
  An = (e = {}, t) => {
    if (!Re) return { close: () => {} }
    if (Be(ll.max) && Yt.length >= ll.max) return { close: () => {} }
    const n = Sr(e)
    if (n.grouping && Yt.length) {
      const a = Yt.find(({ vnode: s }) => {
        var r
        return ((r = s.props) == null ? void 0 : r.message) === n.message
      })
      if (a) return (a.props.repeatNum += 1), (a.props.type = n.type), a.handler
    }
    const l = Sb(n, t)
    return Yt.push(l), l.handler
  }
Cr.forEach(e => {
  An[e] = (t = {}, n) => {
    const l = Sr(t)
    return An({ ...l, type: e }, n)
  }
})
function Eb(e) {
  for (const t of Yt) (!e || e === t.props.type) && t.handler.close()
}
An.closeAll = Eb
An._context = null
const Qb = Ti(An, '$message')
export {
  Gb as A,
  Qb as E,
  Yb as a,
  Bb as b,
  Ab as c,
  Db as d,
  Wb as e,
  Rt as f,
  zg as g,
  Fg as h,
  sn as i,
  Yd as j,
  jb as k,
  xb as l,
  Kb as m,
  Hb as n,
  zb as o,
  Nb as p,
  ro as q,
  Zb as r,
  Jb as s,
  Fb as t,
  Rb as u,
  Ub as v,
  Lb as w,
  qb as x,
  Vb as y,
  Xb as z
}
