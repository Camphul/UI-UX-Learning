<template>
  <v-form
    :id="id"
    ref="form"
    @submit.prevent="handleSubmitValidation"
  >
    <t-form-factory-input
      v-for="field in schema"
      :key="field.name"
      v-model="values[field.name]"
      v-bind="field"
    />
  </v-form>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import TFormFactoryInput from './TFormFactoryInput.vue'
import FormInputSchema from '~/lib/form/factory/FormInputSchema'

/**
 * A vuetify form factory component to generate forms.
 */
@Component({
  components: {
    TFormFactoryInput
  }
})
export default class TFormFactory extends Vue {
  // Define form ref as any to prevent errors.
  $refs!: {
    form: any
  }
  /**
   * Form id.
   */
  @Prop({ required: true })
  readonly id!: string;
  /**
   * Form schema
   */
  @Prop({ required: true })
  readonly schema!: FormInputSchema[];
  /**
   * Form values
   */
  @Prop({ required: true })
  values!: any;

  /**
   * Event which gets called on submit when the form is valid.
   */
  @Emit('submit')
  onSubmitValidated () {}

  /**
   * Event which gets called on submit when the form is invalid.
   */
  @Emit('invalid')
  onSubmitInvalid () {}

  /**
   * Handle submits with validation.
   */
  private handleSubmitValidation (event) {
    event.preventDefault()
    if (this.$refs.form.validate()) {
      this.onSubmitValidated()
    } else {
      this.onSubmitInvalid()
    }
  }
}
</script>
