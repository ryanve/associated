!function(root, name, make) {
  typeof module != 'undefined' && module.exports ? module.exports = make() : root[name] = make()
}(this, 'associated', function() {

  function join(id) {
    return 'label[for="' +  id + '"]'
  }

  function isLabel(element) {
    return 'label' === element.nodeName.toLowerCase()
  }

  function isInput(element) {
    return 'input' === element.nodeName.toLowerCase()
  }

  function parentLabel(element) {
    for (element = element.parentNode; element; element = element.parentNode) {
      if (isLabel(element)) return element
    }
  }

  function input(label) {
    if (!isLabel(label)) throw new Error
    var id = label.getAttribute('for')
    return id ? document.getElementById(id) : label.querySelector('input')
  }

  function label(input) {
    if (!isInput(input)) throw new Error
    var parent = parentLabel(input)
    if (parent) return parent
    var id = input.getAttribute('id')
    return id && document.querySelector(join(id)) || null
  }

  function labels(input) {
    if (!isInput(input)) throw new Error
    var id = input.getAttribute('id')
    var parent = parentLabel(input)
    var search = id ? [].slice.call(document.querySelectorAll(join(id))) : []
    if (parent && search.indexOf(parent) < 0) search.unshift(parent)
    return search
  }

  return {
    input: input,
    label: label,
    labels: labels
  }
});
