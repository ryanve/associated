!function(root, name, make) {
  if (typeof module != 'undefined' && module.exports) module.exports = make()
  else root[name] = make()
}(this, 'associated', function() {

  var controlTags = 'input,textarea,select,button'

  function control($label) {
    var id = $label.attr('for')
    return id ? new $label.constructor('#' + id) : $label.find(controlTags)
  }

  function label($control) {
    var $parent = $control.closest('label')
    return $parent.length ? $parent : fors($control).first()
  }

  function fors($control) {
    var id = $control.attr('id')
    return new $control.constructor(id ? 'label[for="' +  id + '"]' : id)
  }

  function labels($control) {
    return $control.closest('label').add(fors($control))
  }

  function form($control) {
    return $control.closest('form,html,:root')
  }

  function radios($radio) {
    var name = $radio.attr('name')
    return form($radio).find('input[type="radio"][name="' + name + '"]')
  }

  /**
   * @this {$} collection
   */
  function associated(method) {
    return associated[method](this)
  }

  associated.control = control
  associated.form = form
  associated.label = label
  associated.labels = labels
  associated.radios = radios
  return associated
});
