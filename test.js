!function() {
  var api = this.associated || require('./')

  if (typeof document == 'undefined') {
    ok('exists', !!api, true)
    return console.log('Open index.html')
  }

  function status(message) {
    document.querySelector('[data-status]').innerHTML = message
  }

  function ok(id, actual, correct) {
    if (!equal(actual, correct)) {
      status('<strong>Test failed =/</strong> Open console for details.')
      throw new Error(id + ': ' + actual + ' should be ' + correct)
    }
  }

  function find(name) {
    return findAll(name).first()
  }

  function findAll(name) {
    return $('[data-' + name + ']')
  }

  function equal(a, b) {
    if (a === b) return true
    if (!a || !b || !a.is || !b.is) return false
    return 0 === a.length && 0 === b.length || a.is(b) && b.is(a)
  }

  ok('a.control', api.control(find('label-a')), find('control-a'))
  ok('b.control', api.control(find('label-b')), find('control-b'))
  ok('c.control', api.control(find('label-c')), find('control-c'))
  ok('d.control', api.control(find('label-d')), find('control-d'))
  ok('e.control', api.control(find('label-e')), find('control-e'))
  ok('f.control', api.control(find('label-f')), find('control-f'))
  ok('h.control', api.control(find('label-h')), find('control-h'))
  ok('i.control', api.control(find('label-i')), find('control-i'))
  ok('j.control', api.control(find('label-j')), find('control-j'))
  ok('k.control', api.control(find('label-k')), find('control-k'))
  ok('l.control', api.control(find('label-l')), find('control-l'))

  ok('a.label', api.label(find('control-a')), find('label-a'))
  ok('b.label', api.label(find('control-b')), find('label-b'))
  ok('c.label', api.label(find('control-c')), find('control-c').parent())
  ok('d.label', api.label(find('control-d')), find('label-d'))
  ok('e.label', api.label(find('control-e')), find('label-e'))
  ok('f.label', api.label(find('control-f')), find('label-f'))
  ok('g.label', api.label(find('control-g')), find('label-g'))
  ok('i.label', api.label(find('control-i')), find('label-i'))
  ok('j.label', api.label(find('control-j')), find('label-j'))
  ok('k.label', api.label(find('control-k')), find('label-k'))

  ok('a.labels', api.labels(find('control-a')), findAll('label-a'))
  ok('b.labels', api.labels(find('control-b')), findAll('label-b'))
  ok('c.labels', api.labels(find('control-c')), findAll('label-c'))
  ok('d.labels', api.labels(find('control-d')), findAll('label-d'))
  ok('e.labels', api.labels(find('control-e')), findAll('label-e'))
  ok('f.labels', api.labels(find('control-f')), findAll('label-f'))
  ok('g.labels', api.labels(find('control-g')).length, 0)
  ok('i.labels', api.labels(find('control-i')), findAll('label-i'))
  ok('j.labels', api.labels(find('control-j')), findAll('label-j'))
  ok('k.labels', api.labels(find('control-k')), findAll('label-k'))
  ok('l.labels', api.labels(find('control-l')), findAll('label-l'))

  ok('m.form', api.form(find('radio-m')), findAll('form-m'))
  ok('n.form', api.form(find('radio-n')), findAll('form-n'))
  ok('o.form', api.form(find('radio-o')), findAll('form-o'))
  ok('m.radios', api.radios(find('radio-m')), findAll('radio-m'))
  ok('n.radios', api.radios(find('radio-n')), findAll('radio-n'))
  ok('o.radios', api.radios(find('radio-o')), findAll('radio-o'))

  ok('plugin.control', api.call($('[data-label-a]'), 'control'), find('control-a'))
  ok('plugin.label', api.call(find('label-b'), 'label'), find('label-b'))
  ok('plugin.labels', api.call(find('control-c'), 'labels'), findAll('label-c'))
  ok('plugin.form', api.call(find('radio-m'), 'form'), find('form-m'))
  ok('plugin.radios', api.call(find('radio-o'), 'radios'), findAll('radio-o'))

  status('<b>Tests passed =)</b>')
  console.log('Tests passed =)')
}();
