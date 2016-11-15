!function() {
  var api = typeof require == 'function' ? require('./') : this.associated
  ok(!!api, true)

  if (typeof document == 'undefined') {
    return console.log('Open test.html')
  }

  function ok(actual, correct) {
    if (actual !== correct) throw new Error(actual + ' should be ' + correct)
  }

  function find(name) {
    return document.querySelector('[data-' + name + ']')
  }

  function findAll(name) {
    return [].slice.call(document.querySelectorAll('[data-' + name + ']'))
  }

  function equal(a, b) {
    if (a === b) return true
    if (!Array.isArray(a) || !Array.isArray(b)) return false
    return a.map(equal).join() === b.map(equal).join() ? a.length : false
  }

  ok(api.input(find('label-a')), find('input-a'))
  ok(api.input(find('label-b')), find('input-b'))
  ok(api.input(find('label-c')), find('input-c'))
  ok(api.input(find('label-d')), find('input-d'))
  ok(api.input(find('label-e')), find('input-e'))
  ok(api.input(find('label-f')), find('input-f'))
  ok(api.input(find('label-h')), find('input-h'))

  ok(api.label(find('input-a')), find('label-a'))
  ok(api.label(find('input-b')), find('label-b'))
  ok(api.label(find('input-c')), find('input-c').parentNode)
  ok(api.label(find('input-d')), find('label-d'))
  ok(api.label(find('input-e')), find('label-e'))
  ok(api.label(find('input-f')), find('label-f'))
  ok(api.label(find('input-g')), find('label-g'))

  ok(equal(api.labels(find('input-a')), findAll('label-a')), 2)
  ok(equal(api.labels(find('input-b')), findAll('label-b')), 1)
  ok(equal(api.labels(find('input-c')), findAll('label-c')), 2)
  ok(equal(api.labels(find('input-d')), findAll('label-d')), 1)
  ok(equal(api.labels(find('input-e')), findAll('label-e')), 1)
  ok(equal(api.labels(find('input-f')), findAll('label-f')), 1)
  ok(api.labels(find('input-g')).length, 0)
}();
