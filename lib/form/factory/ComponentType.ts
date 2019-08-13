/**
 * Define which vuetify component to use for which type of data.
 */
const ComponentType = {
  text: 'v-text-field',
  password: 'v-text-field',
  email: 'v-text-field',
  /**
   * Find the component type required.
   * @param value type name.
   * @param error if we should throw an error if not resolvable.
   */
  of: (value: string, error: boolean = true): string => {
    if (ComponentType[value]) {
      return ComponentType[value]
    } else if (error) {
      throw new Error('Could not resolve type ' + value + ' to a valid component.')
    } else {
      return 'div'
    }
  }
}

export default ComponentType
