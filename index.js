!function(root, name, make) {
  typeof module != 'undefined' && module.exports ? module.exports = make() : root[name] = make()
}(this, 'associated', function() {

  function input($label) {
    var id = $label.attr('for')
    return id ? new $label.constructor('#' + id) : $label.find('input')
  }

  function label($input) {
    var $parent = $input.closest('label')
    return $parent.length ? $parent : forId($input).first()
  }

  function forId($input) {
    var id = $input.attr('id')
    return new $input.constructor(id ? 'label[for="' +  id + '"]' : id)
  }

  function labels($input) {
    return $input.closest('label').add(forId($input))
  }

  return {
    input: input,
    label: label,
    labels: labels
  }
});
