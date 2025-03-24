import { c as K } from './aos.e37f4dc9.js'
var J = { exports: {} }
;(function (r) {
  var d =
    typeof window < 'u'
      ? window
      : typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope
      ? self
      : {}
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */ var t = (function (u) {
    var f = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      k = 0,
      F = {},
      o = {
        manual: u.Prism && u.Prism.manual,
        disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
        util: {
          encode: function n(e) {
            return e instanceof p
              ? new p(e.type, n(e.content), e.alias)
              : Array.isArray(e)
              ? e.map(n)
              : e
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/\u00a0/g, ' ')
          },
          type: function (n) {
            return Object.prototype.toString.call(n).slice(8, -1)
          },
          objId: function (n) {
            return n.__id || Object.defineProperty(n, '__id', { value: ++k }), n.__id
          },
          clone: function n(e, a) {
            a = a || {}
            var s, i
            switch (o.util.type(e)) {
              case 'Object':
                if (((i = o.util.objId(e)), a[i])) return a[i]
                ;(s = {}), (a[i] = s)
                for (var c in e) e.hasOwnProperty(c) && (s[c] = n(e[c], a))
                return s
              case 'Array':
                return (
                  (i = o.util.objId(e)),
                  a[i]
                    ? a[i]
                    : ((s = []),
                      (a[i] = s),
                      e.forEach(function (g, l) {
                        s[l] = n(g, a)
                      }),
                      s)
                )
              default:
                return e
            }
          },
          getLanguage: function (n) {
            for (; n; ) {
              var e = f.exec(n.className)
              if (e) return e[1].toLowerCase()
              n = n.parentElement
            }
            return 'none'
          },
          setLanguage: function (n, e) {
            ;(n.className = n.className.replace(RegExp(f, 'gi'), '')),
              n.classList.add('language-' + e)
          },
          currentScript: function () {
            if (typeof document > 'u') return null
            if ('currentScript' in document && 1 < 2) return document.currentScript
            try {
              throw new Error()
            } catch (s) {
              var n = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(s.stack) || [])[1]
              if (n) {
                var e = document.getElementsByTagName('script')
                for (var a in e) if (e[a].src == n) return e[a]
              }
              return null
            }
          },
          isActive: function (n, e, a) {
            for (var s = 'no-' + e; n; ) {
              var i = n.classList
              if (i.contains(e)) return !0
              if (i.contains(s)) return !1
              n = n.parentElement
            }
            return !!a
          }
        },
        languages: {
          plain: F,
          plaintext: F,
          text: F,
          txt: F,
          extend: function (n, e) {
            var a = o.util.clone(o.languages[n])
            for (var s in e) a[s] = e[s]
            return a
          },
          insertBefore: function (n, e, a, s) {
            s = s || o.languages
            var i = s[n],
              c = {}
            for (var g in i)
              if (i.hasOwnProperty(g)) {
                if (g == e) for (var l in a) a.hasOwnProperty(l) && (c[l] = a[l])
                a.hasOwnProperty(g) || (c[g] = i[g])
              }
            var w = s[n]
            return (
              (s[n] = c),
              o.languages.DFS(o.languages, function (_, D) {
                D === w && _ != n && (this[_] = c)
              }),
              c
            )
          },
          DFS: function n(e, a, s, i) {
            i = i || {}
            var c = o.util.objId
            for (var g in e)
              if (e.hasOwnProperty(g)) {
                a.call(e, g, e[g], s || g)
                var l = e[g],
                  w = o.util.type(l)
                w === 'Object' && !i[c(l)]
                  ? ((i[c(l)] = !0), n(l, a, null, i))
                  : w === 'Array' && !i[c(l)] && ((i[c(l)] = !0), n(l, a, g, i))
              }
          }
        },
        plugins: {},
        highlightAll: function (n, e) {
          o.highlightAllUnder(document, n, e)
        },
        highlightAllUnder: function (n, e, a) {
          var s = {
            callback: a,
            container: n,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          }
          o.hooks.run('before-highlightall', s),
            (s.elements = Array.prototype.slice.apply(s.container.querySelectorAll(s.selector))),
            o.hooks.run('before-all-elements-highlight', s)
          for (var i = 0, c; (c = s.elements[i++]); ) o.highlightElement(c, e === !0, s.callback)
        },
        highlightElement: function (n, e, a) {
          var s = o.util.getLanguage(n),
            i = o.languages[s]
          o.util.setLanguage(n, s)
          var c = n.parentElement
          c && c.nodeName.toLowerCase() === 'pre' && o.util.setLanguage(c, s)
          var g = n.textContent,
            l = { element: n, language: s, grammar: i, code: g }
          function w(D) {
            ;(l.highlightedCode = D),
              o.hooks.run('before-insert', l),
              (l.element.innerHTML = l.highlightedCode),
              o.hooks.run('after-highlight', l),
              o.hooks.run('complete', l),
              a && a.call(l.element)
          }
          if (
            (o.hooks.run('before-sanity-check', l),
            (c = l.element.parentElement),
            c &&
              c.nodeName.toLowerCase() === 'pre' &&
              !c.hasAttribute('tabindex') &&
              c.setAttribute('tabindex', '0'),
            !l.code)
          ) {
            o.hooks.run('complete', l), a && a.call(l.element)
            return
          }
          if ((o.hooks.run('before-highlight', l), !l.grammar)) {
            w(o.util.encode(l.code))
            return
          }
          if (e && u.Worker) {
            var _ = new Worker(o.filename)
            ;(_.onmessage = function (D) {
              w(D.data)
            }),
              _.postMessage(
                JSON.stringify({ language: l.language, code: l.code, immediateClose: !0 })
              )
          } else w(o.highlight(l.code, l.grammar, l.language))
        },
        highlight: function (n, e, a) {
          var s = { code: n, grammar: e, language: a }
          if ((o.hooks.run('before-tokenize', s), !s.grammar))
            throw new Error('The language "' + s.language + '" has no grammar.')
          return (
            (s.tokens = o.tokenize(s.code, s.grammar)),
            o.hooks.run('after-tokenize', s),
            p.stringify(o.util.encode(s.tokens), s.language)
          )
        },
        tokenize: function (n, e) {
          var a = e.rest
          if (a) {
            for (var s in a) e[s] = a[s]
            delete e.rest
          }
          var i = new h()
          return S(i, i.head, n), y(n, i, e, i.head, 0), C(i)
        },
        hooks: {
          all: {},
          add: function (n, e) {
            var a = o.hooks.all
            ;(a[n] = a[n] || []), a[n].push(e)
          },
          run: function (n, e) {
            var a = o.hooks.all[n]
            if (!(!a || !a.length)) for (var s = 0, i; (i = a[s++]); ) i(e)
          }
        },
        Token: p
      }
    u.Prism = o
    function p(n, e, a, s) {
      ;(this.type = n), (this.content = e), (this.alias = a), (this.length = (s || '').length | 0)
    }
    p.stringify = function n(e, a) {
      if (typeof e == 'string') return e
      if (Array.isArray(e)) {
        var s = ''
        return (
          e.forEach(function (w) {
            s += n(w, a)
          }),
          s
        )
      }
      var i = {
          type: e.type,
          content: n(e.content, a),
          tag: 'span',
          classes: ['token', e.type],
          attributes: {},
          language: a
        },
        c = e.alias
      c && (Array.isArray(c) ? Array.prototype.push.apply(i.classes, c) : i.classes.push(c)),
        o.hooks.run('wrap', i)
      var g = ''
      for (var l in i.attributes)
        g += ' ' + l + '="' + (i.attributes[l] || '').replace(/"/g, '&quot;') + '"'
      return (
        '<' +
        i.tag +
        ' class="' +
        i.classes.join(' ') +
        '"' +
        g +
        '>' +
        i.content +
        '</' +
        i.tag +
        '>'
      )
    }
    function m(n, e, a, s) {
      n.lastIndex = e
      var i = n.exec(a)
      if (i && s && i[1]) {
        var c = i[1].length
        ;(i.index += c), (i[0] = i[0].slice(c))
      }
      return i
    }
    function y(n, e, a, s, i, c) {
      for (var g in a)
        if (!(!a.hasOwnProperty(g) || !a[g])) {
          var l = a[g]
          l = Array.isArray(l) ? l : [l]
          for (var w = 0; w < l.length; ++w) {
            if (c && c.cause == g + ',' + w) return
            var _ = l[w],
              D = _.inside,
              L = !!_.lookbehind,
              G = !!_.greedy,
              j = _.alias
            if (G && !_.pattern.global) {
              var P = _.pattern.toString().match(/[imsuy]*$/)[0]
              _.pattern = RegExp(_.pattern.source, P + 'g')
            }
            for (
              var I = _.pattern || _, E = s.next, v = i;
              E !== e.tail && !(c && v >= c.reach);
              v += E.value.length, E = E.next
            ) {
              var B = E.value
              if (e.length > n.length) return
              if (!(B instanceof p)) {
                var z = 1,
                  R
                if (G) {
                  if (((R = m(I, v, n, L)), !R || R.index >= n.length)) break
                  var Z = R.index,
                    Y = R.index + R[0].length,
                    T = v
                  for (T += E.value.length; Z >= T; ) (E = E.next), (T += E.value.length)
                  if (((T -= E.value.length), (v = T), E.value instanceof p)) continue
                  for (var M = E; M !== e.tail && (T < Y || typeof M.value == 'string'); M = M.next)
                    z++, (T += M.value.length)
                  z--, (B = n.slice(v, T)), (R.index -= v)
                } else if (((R = m(I, 0, B, L)), !R)) continue
                var Z = R.index,
                  q = R[0],
                  W = B.slice(0, Z),
                  N = B.slice(Z + q.length),
                  U = v + B.length
                c && U > c.reach && (c.reach = U)
                var O = E.prev
                W && ((O = S(e, O, W)), (v += W.length)), $(e, O, z)
                var V = new p(g, D ? o.tokenize(q, D) : q, j, q)
                if (((E = S(e, O, V)), N && S(e, E, N), z > 1)) {
                  var H = { cause: g + ',' + w, reach: U }
                  y(n, e, a, E.prev, v, H), c && H.reach > c.reach && (c.reach = H.reach)
                }
              }
            }
          }
        }
    }
    function h() {
      var n = { value: null, prev: null, next: null },
        e = { value: null, prev: n, next: null }
      ;(n.next = e), (this.head = n), (this.tail = e), (this.length = 0)
    }
    function S(n, e, a) {
      var s = e.next,
        i = { value: a, prev: e, next: s }
      return (e.next = i), (s.prev = i), n.length++, i
    }
    function $(n, e, a) {
      for (var s = e.next, i = 0; i < a && s !== n.tail; i++) s = s.next
      ;(e.next = s), (s.prev = e), (n.length -= i)
    }
    function C(n) {
      for (var e = [], a = n.head.next; a !== n.tail; ) e.push(a.value), (a = a.next)
      return e
    }
    if (!u.document)
      return (
        u.addEventListener &&
          (o.disableWorkerMessageHandler ||
            u.addEventListener(
              'message',
              function (n) {
                var e = JSON.parse(n.data),
                  a = e.language,
                  s = e.code,
                  i = e.immediateClose
                u.postMessage(o.highlight(s, o.languages[a], a)), i && u.close()
              },
              !1
            )),
        o
      )
    var x = o.util.currentScript()
    x && ((o.filename = x.src), x.hasAttribute('data-manual') && (o.manual = !0))
    function b() {
      o.manual || o.highlightAll()
    }
    if (!o.manual) {
      var A = document.readyState
      A === 'loading' || (A === 'interactive' && x && x.defer)
        ? document.addEventListener('DOMContentLoaded', b)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(b)
        : window.setTimeout(b, 16)
    }
    return o
  })(d)
  r.exports && (r.exports = t),
    typeof K < 'u' && (K.Prism = t),
    (t.languages.markup = {
      comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
      prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
      doctype: {
        pattern:
          /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
          'internal-subset': {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: !0,
            greedy: !0,
            inside: null
          },
          string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
          punctuation: /^<!|>$|[[\]]/,
          'doctype-tag': /^DOCTYPE/i,
          name: /[^\s<>'"]+/
        }
      },
      cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
      tag: {
        pattern:
          /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ }
          },
          'special-attr': [],
          'attr-value': {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                { pattern: /^=/, alias: 'attr-equals' },
                { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }
              ]
            }
          },
          punctuation: /\/?>/,
          'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } }
        }
      },
      entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i]
    }),
    (t.languages.markup.tag.inside['attr-value'].inside.entity = t.languages.markup.entity),
    (t.languages.markup.doctype.inside['internal-subset'].inside = t.languages.markup),
    t.hooks.add('wrap', function (u) {
      u.type === 'entity' && (u.attributes.title = u.content.replace(/&amp;/, '&'))
    }),
    Object.defineProperty(t.languages.markup.tag, 'addInlined', {
      value: function (f, k) {
        var F = {}
        ;(F['language-' + k] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: t.languages[k]
        }),
          (F.cdata = /^<!\[CDATA\[|\]\]>$/i)
        var o = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: F } }
        o['language-' + k] = { pattern: /[\s\S]+/, inside: t.languages[k] }
        var p = {}
        ;(p[f] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              function () {
                return f
              }
            ),
            'i'
          ),
          lookbehind: !0,
          greedy: !0,
          inside: o
        }),
          t.languages.insertBefore('markup', 'cdata', p)
      }
    }),
    Object.defineProperty(t.languages.markup.tag, 'addAttribute', {
      value: function (u, f) {
        t.languages.markup.tag.inside['special-attr'].push({
          pattern: RegExp(
            /(^|["'\s])/.source +
              '(?:' +
              u +
              ')' +
              /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            'i'
          ),
          lookbehind: !0,
          inside: {
            'attr-name': /^[^\s=]+/,
            'attr-value': {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [f, 'language-' + f],
                  inside: t.languages[f]
                },
                punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/]
              }
            }
          }
        })
      }
    }),
    (t.languages.html = t.languages.markup),
    (t.languages.mathml = t.languages.markup),
    (t.languages.svg = t.languages.markup),
    (t.languages.xml = t.languages.extend('markup', {})),
    (t.languages.ssml = t.languages.xml),
    (t.languages.atom = t.languages.xml),
    (t.languages.rss = t.languages.xml),
    (function (u) {
      var f = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/
      ;(u.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: RegExp(
            '@[\\w-](?:' +
              /[^;{\s"']|\s+(?!\s)/.source +
              '|' +
              f.source +
              ')*?' +
              /(?:;|(?=\s*\{))/.source
          ),
          inside: {
            rule: /^@[\w-]+/,
            'selector-function-argument': {
              pattern:
                /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: !0,
              alias: 'selector'
            },
            keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 }
          }
        },
        url: {
          pattern: RegExp(
            '\\burl\\((?:' + f.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)',
            'i'
          ),
          greedy: !0,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: { pattern: RegExp('^' + f.source + '$'), alias: 'url' }
          }
        },
        selector: {
          pattern: RegExp(
            `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + f.source + ')*(?=\\s*\\{)'
          ),
          lookbehind: !0
        },
        string: { pattern: f, greedy: !0 },
        property: {
          pattern:
            /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: !0
        },
        important: /!important\b/i,
        function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
        punctuation: /[(){};:,]/
      }),
        (u.languages.css.atrule.inside.rest = u.languages.css)
      var k = u.languages.markup
      k && (k.tag.addInlined('style', 'css'), k.tag.addAttribute('style', 'css'))
    })(t),
    (t.languages.clike = {
      comment: [
        { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
      ],
      string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
      'class-name': {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: { punctuation: /[.\\]/ }
      },
      keyword:
        /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    }),
    (t.languages.javascript = t.languages.extend('clike', {
      'class-name': [
        t.languages.clike['class-name'],
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: !0
        }
      ],
      keyword: [
        { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
        {
          pattern:
            /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: !0
        }
      ],
      function:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(
          /(^|[^\w$])/.source +
            '(?:' +
            (/NaN|Infinity/.source +
              '|' +
              /0[bB][01]+(?:_[01]+)*n?/.source +
              '|' +
              /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
              '|' +
              /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
              '|' +
              /\d+(?:_\d+)*n/.source +
              '|' +
              /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                .source) +
            ')' +
            /(?![\w$])/.source
        ),
        lookbehind: !0
      },
      operator:
        /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    })),
    (t.languages.javascript['class-name'][0].pattern =
      /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    t.languages.insertBefore('javascript', 'keyword', {
      regex: {
        pattern: RegExp(
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
            /\//.source +
            '(?:' +
            /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
            '|' +
            /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
              .source +
            ')' +
            /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          'regex-source': {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: 'language-regex',
            inside: t.languages.regex
          },
          'regex-delimiter': /^\/|\/$/,
          'regex-flags': /^[a-z]+$/
        }
      },
      'function-variable': {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: 'function'
      },
      parameter: [
        {
          pattern:
            /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: t.languages.javascript
        },
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: t.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: t.languages.javascript
        },
        {
          pattern:
            /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: t.languages.javascript
        }
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }),
    t.languages.insertBefore('javascript', 'string', {
      hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
      'template-string': {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' },
              rest: t.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      },
      'string-property': {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: 'property'
      }
    }),
    t.languages.insertBefore('javascript', 'operator', {
      'literal-property': {
        pattern:
          /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: 'property'
      }
    }),
    t.languages.markup &&
      (t.languages.markup.tag.addInlined('script', 'javascript'),
      t.languages.markup.tag.addAttribute(
        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
          .source,
        'javascript'
      )),
    (t.languages.js = t.languages.javascript),
    (function () {
      if (typeof t > 'u' || typeof document > 'u') return
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector)
      var u = 'Loading\u2026',
        f = function (x, b) {
          return '\u2716 Error ' + x + ' while fetching file: ' + b
        },
        k = '\u2716 Error: File does not exist or is empty',
        F = {
          js: 'javascript',
          py: 'python',
          rb: 'ruby',
          ps1: 'powershell',
          psm1: 'powershell',
          sh: 'bash',
          bat: 'batch',
          h: 'c',
          tex: 'latex'
        },
        o = 'data-src-status',
        p = 'loading',
        m = 'loaded',
        y = 'failed',
        h = 'pre[data-src]:not([' + o + '="' + m + '"]):not([' + o + '="' + p + '"])'
      function S(x, b, A) {
        var n = new XMLHttpRequest()
        n.open('GET', x, !0),
          (n.onreadystatechange = function () {
            n.readyState == 4 &&
              (n.status < 400 && n.responseText
                ? b(n.responseText)
                : n.status >= 400
                ? A(f(n.status, n.statusText))
                : A(k))
          }),
          n.send(null)
      }
      function $(x) {
        var b = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(x || '')
        if (b) {
          var A = Number(b[1]),
            n = b[2],
            e = b[3]
          return n ? (e ? [A, Number(e)] : [A, void 0]) : [A, A]
        }
      }
      t.hooks.add('before-highlightall', function (x) {
        x.selector += ', ' + h
      }),
        t.hooks.add('before-sanity-check', function (x) {
          var b = x.element
          if (b.matches(h)) {
            ;(x.code = ''), b.setAttribute(o, p)
            var A = b.appendChild(document.createElement('CODE'))
            A.textContent = u
            var n = b.getAttribute('data-src'),
              e = x.language
            if (e === 'none') {
              var a = (/\.(\w+)$/.exec(n) || [, 'none'])[1]
              e = F[a] || a
            }
            t.util.setLanguage(A, e), t.util.setLanguage(b, e)
            var s = t.plugins.autoloader
            s && s.loadLanguages(e),
              S(
                n,
                function (i) {
                  b.setAttribute(o, m)
                  var c = $(b.getAttribute('data-range'))
                  if (c) {
                    var g = i.split(/\r\n?|\n/g),
                      l = c[0],
                      w = c[1] == null ? g.length : c[1]
                    l < 0 && (l += g.length),
                      (l = Math.max(0, Math.min(l - 1, g.length))),
                      w < 0 && (w += g.length),
                      (w = Math.max(0, Math.min(w, g.length))),
                      (i = g.slice(l, w).join(`
`)),
                      b.hasAttribute('data-start') || b.setAttribute('data-start', String(l + 1))
                  }
                  ;(A.textContent = i), t.highlightElement(A)
                },
                function (i) {
                  b.setAttribute(o, y), (A.textContent = i)
                }
              )
          }
        }),
        (t.plugins.fileHighlight = {
          highlight: function (b) {
            for (var A = (b || document).querySelectorAll(h), n = 0, e; (e = A[n++]); )
              t.highlightElement(e)
          }
        })
      var C = !1
      t.fileHighlight = function () {
        C ||
          (console.warn(
            'Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'
          ),
          (C = !0)),
          t.plugins.fileHighlight.highlight.apply(this, arguments)
      }
    })()
})(J)
;(function (r) {
  ;(r.languages.typescript = r.languages.extend('javascript', {
    'class-name': {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null
    },
    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  })),
    r.languages.typescript.keyword.push(
      /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
      /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
      /\btype\b(?=\s*(?:[\{*]|$))/
    ),
    delete r.languages.typescript.parameter,
    delete r.languages.typescript['literal-property']
  var d = r.languages.extend('typescript', {})
  delete d['class-name'],
    (r.languages.typescript['class-name'].inside = d),
    r.languages.insertBefore('typescript', 'function', {
      decorator: {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: { at: { pattern: /^@/, alias: 'operator' }, function: /^[\s\S]+/ }
      },
      'generic-function': {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: !0,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: d }
        }
      }
    }),
    (r.languages.ts = r.languages.typescript)
})(Prism)
;(function (r) {
  var d =
      /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
    t = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,
    u = {
      pattern: RegExp(/(^|[^\w.])/.source + t + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
      lookbehind: !0,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: { punctuation: /\./ }
        },
        punctuation: /\./
      }
    }
  ;(r.languages.java = r.languages.extend('clike', {
    string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/, lookbehind: !0, greedy: !0 },
    'class-name': [
      u,
      {
        pattern: RegExp(
          /(^|[^\w.])/.source +
            t +
            /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source
        ),
        lookbehind: !0,
        inside: u.inside
      },
      {
        pattern: RegExp(
          /(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source +
            t +
            /[A-Z]\w*\b/.source
        ),
        lookbehind: !0,
        inside: u.inside
      }
    ],
    keyword: d,
    function: [r.languages.clike.function, { pattern: /(::\s*)[a-z_]\w*/, lookbehind: !0 }],
    number:
      /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: !0
    },
    constant: /\b[A-Z][A-Z_\d]+\b/
  })),
    r.languages.insertBefore('java', 'string', {
      'triple-quoted-string': {
        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
        greedy: !0,
        alias: 'string'
      },
      char: { pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/, greedy: !0 }
    }),
    r.languages.insertBefore('java', 'class-name', {
      annotation: { pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/, lookbehind: !0, alias: 'punctuation' },
      generics: {
        pattern:
          /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
        inside: { 'class-name': u, keyword: d, punctuation: /[<>(),.:]/, operator: /[?&|]/ }
      },
      import: [
        {
          pattern: RegExp(/(\bimport\s+)/.source + t + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
          lookbehind: !0,
          inside: {
            namespace: u.inside.namespace,
            punctuation: /\./,
            operator: /\*/,
            'class-name': /\w+/
          }
        },
        {
          pattern: RegExp(/(\bimport\s+static\s+)/.source + t + /(?:\w+|\*)(?=\s*;)/.source),
          lookbehind: !0,
          alias: 'static',
          inside: {
            namespace: u.inside.namespace,
            static: /\b\w+$/,
            punctuation: /\./,
            operator: /\*/,
            'class-name': /\w+/
          }
        }
      ],
      namespace: {
        pattern: RegExp(
          /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(
            /<keyword>/g,
            function () {
              return d.source
            }
          )
        ),
        lookbehind: !0,
        inside: { punctuation: /\./ }
      }
    })
})(Prism)
;(function (r) {
  var d = (r.languages.powershell = {
    comment: [
      { pattern: /(^|[^`])<#[\s\S]*?#>/, lookbehind: !0 },
      { pattern: /(^|[^`])#.*/, lookbehind: !0 }
    ],
    string: [
      { pattern: /"(?:`[\s\S]|[^`"])*"/, greedy: !0, inside: null },
      { pattern: /'(?:[^']|'')*'/, greedy: !0 }
    ],
    namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
    boolean: /\$(?:false|true)\b/i,
    variable: /\$\w+\b/,
    function: [
      /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
      /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i
    ],
    keyword:
      /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
    operator: {
      pattern:
        /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
      lookbehind: !0
    },
    punctuation: /[|{}[\];(),.]/
  })
  d.string[0].inside = {
    function: {
      pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
      lookbehind: !0,
      inside: d
    },
    boolean: d.boolean,
    variable: d.variable
  }
})(Prism)
Prism.languages.swift = {
  comment: {
    pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
    lookbehind: !0,
    greedy: !0
  },
  'string-literal': [
    {
      pattern: RegExp(
        /(^|[^"#])/.source +
          '(?:' +
          /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source +
          '|' +
          /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source +
          ')' +
          /(?!["#])/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
        },
        'interpolation-punctuation': { pattern: /^\)|\\\($/, alias: 'punctuation' },
        punctuation: /\\(?=[\r\n])/,
        string: /[\s\S]+/
      }
    },
    {
      pattern: RegExp(
        /(^|[^"#])(#+)/.source +
          '(?:' +
          /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source +
          '|' +
          /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source +
          ')\\2'
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
        },
        'interpolation-punctuation': { pattern: /^\)|\\#+\($/, alias: 'punctuation' },
        string: /[\s\S]+/
      }
    }
  ],
  directive: {
    pattern: RegExp(
      /#/.source +
        '(?:' +
        (/(?:elseif|if)\b/.source +
          '(?:[ 	]*' +
          /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/
            .source +
          ')+') +
        '|' +
        /(?:else|endif)\b/.source +
        ')'
    ),
    alias: 'property',
    inside: {
      'directive-name': /^#\w+/,
      boolean: /\b(?:false|true)\b/,
      number: /\b\d+(?:\.\d+)*\b/,
      operator: /!|&&|\|\||[<>]=?/,
      punctuation: /[(),]/
    }
  },
  literal: {
    pattern:
      /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
    alias: 'constant'
  },
  'other-directive': { pattern: /#\w+\b/, alias: 'property' },
  attribute: { pattern: /@\w+/, alias: 'atrule' },
  'function-definition': { pattern: /(\bfunc\s+)\w+/, lookbehind: !0, alias: 'function' },
  label: {
    pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
    lookbehind: !0,
    alias: 'important'
  },
  keyword:
    /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
  boolean: /\b(?:false|true)\b/,
  nil: { pattern: /\bnil\b/, alias: 'constant' },
  'short-argument': /\$\d+\b/,
  omit: { pattern: /\b_\b/, alias: 'keyword' },
  number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  'class-name': /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
  punctuation: /[{}[\]();,.:\\]/
}
Prism.languages.swift['string-literal'].forEach(function (r) {
  r.inside.interpolation.inside = Prism.languages.swift
})
Prism.languages.json = {
  property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 },
  string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 },
  comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:false|true)\b/,
  null: { pattern: /\bnull\b/, alias: 'keyword' }
}
Prism.languages.webmanifest = Prism.languages.json
;(function (r) {
  var d = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/
  ;(r.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp(
        '@[\\w-](?:' +
          /[^;{\s"']|\s+(?!\s)/.source +
          '|' +
          d.source +
          ')*?' +
          /(?:;|(?=\s*\{))/.source
      ),
      inside: {
        rule: /^@[\w-]+/,
        'selector-function-argument': {
          pattern:
            /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: 'selector'
        },
        keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 }
      }
    },
    url: {
      pattern: RegExp(
        '\\burl\\((?:' + d.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)',
        'i'
      ),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: { pattern: RegExp('^' + d.source + '$'), alias: 'url' }
      }
    },
    selector: {
      pattern: RegExp(
        `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + d.source + ')*(?=\\s*\\{)'
      ),
      lookbehind: !0
    },
    string: { pattern: d, greedy: !0 },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0
    },
    important: /!important\b/i,
    function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
    punctuation: /[(){};:,]/
  }),
    (r.languages.css.atrule.inside.rest = r.languages.css)
  var t = r.languages.markup
  t && (t.tag.addInlined('style', 'css'), t.tag.addAttribute('style', 'css'))
})(Prism)
Prism.languages.less = Prism.languages.extend('css', {
  comment: [/\/\*[\s\S]*?\*\//, { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 }],
  atrule: {
    pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: { punctuation: /[:()]/ }
  },
  selector: {
    pattern:
      /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: { variable: /@+[\w-]+/ }
  },
  property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
  operator: /[+\-*\/]/
})
Prism.languages.insertBefore('less', 'property', {
  variable: [{ pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } }, /@@?[\w-]+/],
  'mixin-usage': {
    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
    lookbehind: !0,
    alias: 'function'
  }
})
Prism.languages.scss = Prism.languages.extend('css', {
  comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
  atrule: {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: { rule: /@[\w-]+/ }
  },
  url: /(?:[-a-z]+-)?url(?=\()/i,
  selector: {
    pattern:
      /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      parent: { pattern: /&/, alias: 'important' },
      placeholder: /%[-\w]+/,
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  property: {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }
  }
})
Prism.languages.insertBefore('scss', 'atrule', {
  keyword: [
    /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
    { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 }
  ]
})
Prism.languages.insertBefore('scss', 'important', { variable: /\$[-\w]+|#\{\$[-\w]+\}/ })
Prism.languages.insertBefore('scss', 'function', {
  'module-modifier': { pattern: /\b(?:as|hide|show|with)\b/i, alias: 'keyword' },
  placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
  statement: { pattern: /\B!(?:default|optional)\b/i, alias: 'keyword' },
  boolean: /\b(?:false|true)\b/,
  null: { pattern: /\bnull\b/, alias: 'keyword' },
  operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/, lookbehind: !0 }
})
Prism.languages.scss.atrule.inside.rest = Prism.languages.scss
;(function (r) {
  var d = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
    t = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 },
    u = {
      comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
      url: { pattern: /\burl\((["']?).*?\1\)/i, greedy: !0 },
      string: { pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/, greedy: !0 },
      interpolation: null,
      func: null,
      important: /\B!(?:important|optional)\b/i,
      keyword: {
        pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
        lookbehind: !0
      },
      hexcode: /#[\da-f]{3,6}/i,
      color: [
        /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
        {
          pattern:
            /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
          inside: { unit: d, number: t, function: /[\w-]+(?=\()/, punctuation: /[(),]/ }
        }
      ],
      entity: /\\[\da-f]{1,8}/i,
      unit: d,
      boolean: /\b(?:false|true)\b/,
      operator: [
        /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/
      ],
      number: t,
      punctuation: /[{}()\[\];:,]/
    }
  ;(u.interpolation = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: 'variable',
    inside: { delimiter: { pattern: /^\{|\}$/, alias: 'punctuation' }, rest: u }
  }),
    (u.func = { pattern: /[\w-]+\([^)]*\).*/, inside: { function: /^[^(]+/, rest: u } }),
    (r.languages.stylus = {
      'atrule-declaration': {
        pattern: /(^[ \t]*)@.+/m,
        lookbehind: !0,
        inside: { atrule: /^@[\w-]+/, rest: u }
      },
      'variable-declaration': {
        pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
        lookbehind: !0,
        inside: { variable: /^\S+/, rest: u }
      },
      statement: {
        pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
        lookbehind: !0,
        inside: { keyword: /^\S+/, rest: u }
      },
      'property-declaration': {
        pattern:
          /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
        lookbehind: !0,
        inside: {
          property: { pattern: /^[^\s:]+/, inside: { interpolation: u.interpolation } },
          rest: u
        }
      },
      selector: {
        pattern:
          /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
        lookbehind: !0,
        inside: { interpolation: u.interpolation, comment: u.comment, punctuation: /[{},]/ }
      },
      func: u.func,
      string: u.string,
      comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0, greedy: !0 },
      interpolation: u.interpolation,
      punctuation: /[{}()\[\];:.]/
    })
})(Prism)
Prism.languages.c = Prism.languages.extend('clike', {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
  'class-name': {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword:
    /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number:
    /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
})
Prism.languages.insertBefore('c', 'string', {
  char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0 }
})
Prism.languages.insertBefore('c', 'string', {
  macro: {
    pattern:
      /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: 'property',
    inside: {
      string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 }, Prism.languages.c.string],
      char: Prism.languages.c.char,
      comment: Prism.languages.c.comment,
      'macro-name': [
        { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
        { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: 'function' }
      ],
      directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: 'keyword' },
      'directive-hash': /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: { pattern: /\S[\s\S]*/, inside: Prism.languages.c }
    }
  }
})
Prism.languages.insertBefore('c', 'function', {
  constant:
    /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
})
delete Prism.languages.c.boolean
;(function (r) {
  var d =
      /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
    t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
      return d.source
    })
  ;(r.languages.cpp = r.languages.extend('c', {
    'class-name': [
      {
        pattern: RegExp(
          /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
            /<keyword>/g,
            function () {
              return d.source
            }
          )
        ),
        lookbehind: !0
      },
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
    ],
    keyword: d,
    number: {
      pattern:
        /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0
    },
    operator:
      />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/
  })),
    r.languages.insertBefore('cpp', 'string', {
      module: {
        pattern: RegExp(
          /(\b(?:import|module)\s+)/.source +
            '(?:' +
            /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
            '|' +
            /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(
              /<mod-name>/g,
              function () {
                return t
              }
            ) +
            ')'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ }
      },
      'raw-string': { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: 'string', greedy: !0 }
    }),
    r.languages.insertBefore('cpp', 'keyword', {
      'generic-function': {
        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
        inside: {
          function: /^\w+/,
          generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: r.languages.cpp }
        }
      }
    }),
    r.languages.insertBefore('cpp', 'operator', {
      'double-colon': { pattern: /::/, alias: 'punctuation' }
    }),
    r.languages.insertBefore('cpp', 'class-name', {
      'base-clause': {
        pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
        lookbehind: !0,
        greedy: !0,
        inside: r.languages.extend('cpp', {})
      }
    }),
    r.languages.insertBefore(
      'inside',
      'double-colon',
      { 'class-name': /\b[a-z_]\w*\b(?!\s*::)/i },
      r.languages.cpp['base-clause']
    )
})(Prism)
;(function (r) {
  function d(v, B) {
    return v.replace(/<<(\d+)>>/g, function (z, R) {
      return '(?:' + B[+R] + ')'
    })
  }
  function t(v, B, z) {
    return RegExp(d(v, B), z || '')
  }
  function u(v, B) {
    for (var z = 0; z < B; z++)
      v = v.replace(/<<self>>/g, function () {
        return '(?:' + v + ')'
      })
    return v.replace(/<<self>>/g, '[^\\s\\S]')
  }
  var f = {
    type: 'bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void',
    typeDeclaration: 'class enum interface record struct',
    contextual:
      'add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)',
    other:
      'abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield'
  }
  function k(v) {
    return '\\b(?:' + v.trim().replace(/ /g, '|') + ')\\b'
  }
  var F = k(f.typeDeclaration),
    o = RegExp(k(f.type + ' ' + f.typeDeclaration + ' ' + f.contextual + ' ' + f.other)),
    p = k(f.typeDeclaration + ' ' + f.contextual + ' ' + f.other),
    m = k(f.type + ' ' + f.typeDeclaration + ' ' + f.other),
    y = u(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2),
    h = u(/\((?:[^()]|<<self>>)*\)/.source, 2),
    S = /@?\b[A-Za-z_]\w*\b/.source,
    $ = d(/<<0>>(?:\s*<<1>>)?/.source, [S, y]),
    C = d(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [p, $]),
    x = /\[\s*(?:,\s*)*\]/.source,
    b = d(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [C, x]),
    A = d(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [y, h, x]),
    n = d(/\(<<0>>+(?:,<<0>>+)+\)/.source, [A]),
    e = d(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [n, C, x]),
    a = { keyword: o, punctuation: /[<>()?,.:[\]]/ },
    s = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,
    i = /"(?:\\.|[^\\"\r\n])*"/.source,
    c = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source
  ;(r.languages.csharp = r.languages.extend('clike', {
    string: [
      { pattern: t(/(^|[^$\\])<<0>>/.source, [c]), lookbehind: !0, greedy: !0 },
      { pattern: t(/(^|[^@$\\])<<0>>/.source, [i]), lookbehind: !0, greedy: !0 }
    ],
    'class-name': [
      { pattern: t(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [C]), lookbehind: !0, inside: a },
      {
        pattern: t(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [S, e]),
        lookbehind: !0,
        inside: a
      },
      { pattern: t(/(\busing\s+)<<0>>(?=\s*=)/.source, [S]), lookbehind: !0 },
      { pattern: t(/(\b<<0>>\s+)<<1>>/.source, [F, $]), lookbehind: !0, inside: a },
      { pattern: t(/(\bcatch\s*\(\s*)<<0>>/.source, [C]), lookbehind: !0, inside: a },
      { pattern: t(/(\bwhere\s+)<<0>>/.source, [S]), lookbehind: !0 },
      { pattern: t(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [b]), lookbehind: !0, inside: a },
      {
        pattern: t(
          /\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,
          [e, m, S]
        ),
        inside: a
      }
    ],
    keyword: o,
    number:
      /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
    operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
    punctuation: /\?\.?|::|[{}[\];(),.:]/
  })),
    r.languages.insertBefore('csharp', 'number', { range: { pattern: /\.\./, alias: 'operator' } }),
    r.languages.insertBefore('csharp', 'punctuation', {
      'named-parameter': {
        pattern: t(/([(,]\s*)<<0>>(?=\s*:)/.source, [S]),
        lookbehind: !0,
        alias: 'punctuation'
      }
    }),
    r.languages.insertBefore('csharp', 'class-name', {
      namespace: {
        pattern: t(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [S]),
        lookbehind: !0,
        inside: { punctuation: /\./ }
      },
      'type-expression': {
        pattern: t(
          /(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,
          [h]
        ),
        lookbehind: !0,
        alias: 'class-name',
        inside: a
      },
      'return-type': {
        pattern: t(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [e, C]),
        inside: a,
        alias: 'class-name'
      },
      'constructor-invocation': {
        pattern: t(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [e]),
        lookbehind: !0,
        inside: a,
        alias: 'class-name'
      },
      'generic-method': {
        pattern: t(/<<0>>\s*<<1>>(?=\s*\()/.source, [S, y]),
        inside: {
          function: t(/^<<0>>/.source, [S]),
          generic: { pattern: RegExp(y), alias: 'class-name', inside: a }
        }
      },
      'type-list': {
        pattern: t(
          /\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/
            .source,
          [F, $, S, e, o.source, h, /\bnew\s*\(\s*\)/.source]
        ),
        lookbehind: !0,
        inside: {
          'record-arguments': {
            pattern: t(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [$, h]),
            lookbehind: !0,
            greedy: !0,
            inside: r.languages.csharp
          },
          keyword: o,
          'class-name': { pattern: RegExp(e), greedy: !0, inside: a },
          punctuation: /[,()]/
        }
      },
      preprocessor: {
        pattern: /(^[\t ]*)#.*/m,
        lookbehind: !0,
        alias: 'property',
        inside: {
          directive: {
            pattern:
              /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
            lookbehind: !0,
            alias: 'keyword'
          }
        }
      }
    })
  var g = i + '|' + s,
    l = d(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [g]),
    w = u(d(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [l]), 2),
    _ = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,
    D = d(/<<0>>(?:\s*\(<<1>>*\))?/.source, [C, w])
  r.languages.insertBefore('csharp', 'class-name', {
    attribute: {
      pattern: t(
        /((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,
        [_, D]
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        target: { pattern: t(/^<<0>>(?=\s*:)/.source, [_]), alias: 'keyword' },
        'attribute-arguments': { pattern: t(/\(<<0>>*\)/.source, [w]), inside: r.languages.csharp },
        'class-name': { pattern: RegExp(C), inside: { punctuation: /\./ } },
        punctuation: /[:,]/
      }
    }
  })
  var L = /:[^}\r\n]+/.source,
    G = u(d(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [l]), 2),
    j = d(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [G, L]),
    P = u(d(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [g]), 2),
    I = d(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [P, L])
  function E(v, B) {
    return {
      interpolation: {
        pattern: t(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [v]),
        lookbehind: !0,
        inside: {
          'format-string': {
            pattern: t(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [B, L]),
            lookbehind: !0,
            inside: { punctuation: /^:/ }
          },
          punctuation: /^\{|\}$/,
          expression: { pattern: /[\s\S]+/, alias: 'language-csharp', inside: r.languages.csharp }
        }
      },
      string: /[\s\S]+/
    }
  }
  r.languages.insertBefore('csharp', 'string', {
    'interpolation-string': [
      {
        pattern: t(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [j]),
        lookbehind: !0,
        greedy: !0,
        inside: E(j, G)
      },
      {
        pattern: t(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [I]),
        lookbehind: !0,
        greedy: !0,
        inside: E(I, P)
      }
    ],
    char: { pattern: RegExp(s), greedy: !0 }
  }),
    (r.languages.dotnet = r.languages.cs = r.languages.csharp)
})(Prism)
Prism.languages.go = Prism.languages.extend('clike', {
  string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: !0, greedy: !0 },
  keyword:
    /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  boolean: /\b(?:_|false|iota|nil|true)\b/,
  number: [
    /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
    /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
    /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
  ],
  operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  builtin:
    /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
})
Prism.languages.insertBefore('go', 'string', {
  char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 }
})
delete Prism.languages.go['class-name']
;(function (r) {
  var d = r.util.clone(r.languages.javascript),
    t = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
    u = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
    f = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source
  function k(p, m) {
    return (
      (p = p
        .replace(/<S>/g, function () {
          return t
        })
        .replace(/<BRACES>/g, function () {
          return u
        })
        .replace(/<SPREAD>/g, function () {
          return f
        })),
      RegExp(p, m)
    )
  }
  ;(f = k(f).source),
    (r.languages.jsx = r.languages.extend('markup', d)),
    (r.languages.jsx.tag.pattern = k(
      /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
        .source
    )),
    (r.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
    (r.languages.jsx.tag.inside['attr-value'].pattern =
      /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
    (r.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
    (r.languages.jsx.tag.inside.comment = d.comment),
    r.languages.insertBefore(
      'inside',
      'attr-name',
      { spread: { pattern: k(/<SPREAD>/.source), inside: r.languages.jsx } },
      r.languages.jsx.tag
    ),
    r.languages.insertBefore(
      'inside',
      'special-attr',
      {
        script: {
          pattern: k(/=<BRACES>/.source),
          alias: 'language-javascript',
          inside: {
            'script-punctuation': { pattern: /^=(?=\{)/, alias: 'punctuation' },
            rest: r.languages.jsx
          }
        }
      },
      r.languages.jsx.tag
    )
  var F = function (p) {
      return p
        ? typeof p == 'string'
          ? p
          : typeof p.content == 'string'
          ? p.content
          : p.content.map(F).join('')
        : ''
    },
    o = function (p) {
      for (var m = [], y = 0; y < p.length; y++) {
        var h = p[y],
          S = !1
        if (
          (typeof h != 'string' &&
            (h.type === 'tag' && h.content[0] && h.content[0].type === 'tag'
              ? h.content[0].content[0].content === '</'
                ? m.length > 0 && m[m.length - 1].tagName === F(h.content[0].content[1]) && m.pop()
                : h.content[h.content.length - 1].content === '/>' ||
                  m.push({ tagName: F(h.content[0].content[1]), openedBraces: 0 })
              : m.length > 0 && h.type === 'punctuation' && h.content === '{'
              ? m[m.length - 1].openedBraces++
              : m.length > 0 &&
                m[m.length - 1].openedBraces > 0 &&
                h.type === 'punctuation' &&
                h.content === '}'
              ? m[m.length - 1].openedBraces--
              : (S = !0)),
          (S || typeof h == 'string') && m.length > 0 && m[m.length - 1].openedBraces === 0)
        ) {
          var $ = F(h)
          y < p.length - 1 &&
            (typeof p[y + 1] == 'string' || p[y + 1].type === 'plain-text') &&
            (($ += F(p[y + 1])), p.splice(y + 1, 1)),
            y > 0 &&
              (typeof p[y - 1] == 'string' || p[y - 1].type === 'plain-text') &&
              (($ = F(p[y - 1]) + $), p.splice(y - 1, 1), y--),
            (p[y] = new r.Token('plain-text', $, null, $))
        }
        h.content && typeof h.content != 'string' && o(h.content)
      }
    }
  r.hooks.add('after-tokenize', function (p) {
    ;(p.language !== 'jsx' && p.language !== 'tsx') || o(p.tokens)
  })
})(Prism)
;(function (r) {
  var d = r.util.clone(r.languages.typescript)
  ;(r.languages.tsx = r.languages.extend('jsx', d)),
    delete r.languages.tsx.parameter,
    delete r.languages.tsx['literal-property']
  var t = r.languages.tsx.tag
  ;(t.pattern = RegExp(
    /(^|[^\w$]|(?=<\/))/.source + '(?:' + t.pattern.source + ')',
    t.pattern.flags
  )),
    (t.lookbehind = !0)
})(Prism)
export { J as p }
