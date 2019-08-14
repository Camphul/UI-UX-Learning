<template>
  <component
    :is="computedChildComponentType"
    ref="input"
    v-bind="computedChildAttributes"
    v-on="$listeners"
  />
</template>
<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator'
import StringUtil from '~/lib/StringUtil'
import { TextInputType, ComponentType } from '~/lib/forms/factory'

/**
 * A single input component for a vuetify form.
 */
@Component
export default class TFormFactoryInput extends Vue {
  @Prop({
    required: false,
    default: 'text'
  })
  readonly type!: string;
  @Prop({
    required: true
  })
  readonly name!: string;
  @Prop({
    required: false,
    default: null
  })
  readonly label!: string;
  @Prop({
    required: false,
    default: null
  })
  readonly icon!: string;
  @Prop({
    required: false,
    default: () => {}
  })
  readonly attributes!: object;
  @Prop({
    required: false,
    default: () => []
  })
  readonly rules!: [];

  /**
   * Parsed component attributes
   */
  private get computedChildAttributes (): object {
    let parsed: object = this.attributes

    parsed = Object.assign({}, this.$attrs, {
      label: this.label == null ? StringUtil.uppercaseFirstLetter(this.name) : this.label,
      name: this.name,
      rules: this.rules
    }, parsed)

    if (this.icon != null) {
      parsed = Object.assign({}, {
        'prepend-icon': this.icon
      }, parsed)
    }

    if (TextInputType.supports(this.type)) {
      parsed = Object.assign({}, {
        type: TextInputType[this.type]
      }, parsed)
    }

    return parsed
  }

  /**
   * Get component type
   */
  private get computedChildComponentType (): string {
    return ComponentType.of(this.type)
  }
}
</script>
