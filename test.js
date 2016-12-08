!function() {
  var api = this.associated || require('./')

  if (typeof document == 'undefined') {
    ok('exists', !!api, true)
    return console.log('Open test.html')
  }

  function ok(id, actual, correct) {
    if (!equal(actual, correct)) {
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

  ok('a.input', api.input(find('label-a')), find('input-a'))
  ok('b.input', api.input(find('label-b')), find('input-b'))
  ok('c.input', api.input(find('label-c')), find('input-c'))
  ok('d.input', api.input(find('label-d')), find('input-d'))
  ok('e.input', api.input(find('label-e')), find('input-e'))
  ok('f.input', api.input(find('label-f')), find('input-f'))
  ok('h.input', api.input(find('label-h')), find('input-h'))

  ok('a.label', api.label(find('input-a')), find('label-a'))
  ok('b.label', api.label(find('input-b')), find('label-b'))
  ok('c.label', api.label(find('input-c')), find('input-c').parent())
  ok('d.label', api.label(find('input-d')), find('label-d'))
  ok('e.label', api.label(find('input-e')), find('label-e'))
  ok('f.label', api.label(find('input-f')), find('label-f'))
  ok('g.label', api.label(find('input-g')), find('label-g'))

  ok('a.labels', api.labels(find('input-a')), findAll('label-a'))
  ok('b.labels', api.labels(find('input-b')), findAll('label-b'))
  ok('c.labels', api.labels(find('input-c')), findAll('label-c'))
  ok('d.labels', api.labels(find('input-d')), findAll('label-d'))
  ok('e.labels', api.labels(find('input-e')), findAll('label-e'))
  ok('f.labels', api.labels(find('input-f')), findAll('label-f'))
  ok('g.labels', api.labels(find('input-g')).length, 0)

  console.log('All tests passed =)')
}();
