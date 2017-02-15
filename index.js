!function(root, name, make) {
  if (typeof module != 'undefined' && module.exports) module.exports = make()
  else if (typeof define == 'function' && define.amd) define(make)
  else root[name] = make()
}(this, 'associated', function() {

  function control($label) {
    var id = $label.attr('for')
    return id ? new $label.constructor('#' + id) : $label.find('input,textarea,select,button')
  }

  function label($control) {
    var $parent = $control.closest('label')
    return $parent.length ? $parent : forId($control).first()
  }

  function forId($control) {
    var id = $control.attr('id')
    return new $control.constructor(id ? 'label[for="' +  id + '"]' : id)
  }

  function labels($control) {
    return $control.closest('label').add(forId($control))
  }

  function form($control) {
    return $control.closest('form,html,:root')
  }

  function radios($radio) {
    var name = $radio.attr('name')
    return form($radio).find('input[type="radio"][name="' + name + '"]')
  }

  return {
    control: control,
    form: form,
    label: label,
    labels: labels,
    radios: radios
  }
});
