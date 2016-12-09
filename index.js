!function(root, name, make) {
  if (typeof module != 'undefined' && module.exports) module.exports = make()
  else if (typeof define == 'function' && define.amd) define(make)
  else root[name] = make()
}(this, 'associated', function() {

  function control($label) {
    var id = $label.attr('for')
    return id ? new $label.constructor('#' + id) : $label.find('input,textarea,select,button')
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
    control: control,
    label: label,
    labels: labels
  }
});
