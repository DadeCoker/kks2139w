var o = {
    8: 'Backspace',
    9: 'Tab',
    10: 'Enter',
    12: 'NumLock',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    44: 'PrintScreen',
    45: 'Insert',
    46: 'Delete',
    59: ';',
    61: '=',
    91: 'Meta',
    92: 'Meta',
    106: '*',
    107: '+',
    108: ',',
    109: '-',
    110: '.',
    111: '/',
    144: 'NumLock',
    145: 'ScrollLock',
    160: 'Shift',
    161: 'Shift',
    162: 'Control',
    163: 'Control',
    164: 'Alt',
    165: 'Alt',
    173: '-',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: "'"
  },
  t = {
    48: ')',
    49: '!',
    50: '@',
    51: '#',
    52: '$',
    53: '%',
    54: '^',
    55: '&',
    56: '*',
    57: '(',
    59: ':',
    61: '+',
    173: '_',
    186: ':',
    187: '+',
    188: '<',
    189: '_',
    190: '>',
    191: '?',
    192: '~',
    219: '{',
    220: '|',
    221: '}',
    222: '"'
  },
  n = typeof navigator < 'u' && /Chrome\/(\d+)/.exec(navigator.userAgent)
typeof navigator < 'u' && /Gecko\/\d+/.test(navigator.userAgent)
var d = typeof navigator < 'u' && /Mac/.test(navigator.platform),
  g =
    typeof navigator < 'u' &&
    /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),
  s = d || (n && +n[1] < 57)
for (var r = 0; r < 10; r++) o[48 + r] = o[96 + r] = String(r)
for (var r = 1; r <= 24; r++) o[r + 111] = 'F' + r
for (var r = 65; r <= 90; r++) (o[r] = String.fromCharCode(r + 32)), (t[r] = String.fromCharCode(r))
for (var i in o) t.hasOwnProperty(i) || (t[i] = o[i])
function y(a) {
  var f =
      (s && (a.ctrlKey || a.altKey || a.metaKey)) ||
      (g && a.shiftKey && a.key && a.key.length == 1) ||
      a.key == 'Unidentified',
    e = (!f && a.key) || (a.shiftKey ? t : o)[a.keyCode] || a.key || 'Unidentified'
  return (
    e == 'Esc' && (e = 'Escape'),
    e == 'Del' && (e = 'Delete'),
    e == 'Left' && (e = 'ArrowLeft'),
    e == 'Up' && (e = 'ArrowUp'),
    e == 'Right' && (e = 'ArrowRight'),
    e == 'Down' && (e = 'ArrowDown'),
    e
  )
}
export { o as b, y as k, t as s }
