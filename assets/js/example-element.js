if (!customElements.get('example-element')) {
  customElements.define(
    'example-element',
    class ExampleElement extends MMDElement {

      datasets = ['example-one','example-two']
      targets = ['example']
      methods = ['handleClick']

      constructor () {
        super()

      }

      handleClick () {

      }

    }
  )
}