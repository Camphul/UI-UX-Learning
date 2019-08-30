/**
 * Define which vuetify component to use for which type of data.
 */
const ComponentType = {
  text: 'v-text-field',
  password: 'v-text-field',
  email: 'v-text-field',
  textarea: 'v-textarea',
  /**
   * Find the component type required.
   * @param value type name.
   */
  of: (value: string): string => {
    if (ComponentType[value]) {
      return ComponentType[value]
    } else {
      return value
    }
  }
}

export default ComponentType
