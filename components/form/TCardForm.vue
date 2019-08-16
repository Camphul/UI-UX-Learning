<template>
  <v-card>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      <t-form-factory
        :id="id"
        :schema="schema"
        :model="model"
        v-on="$listeners"
      />
    </v-card-text>
    <v-card-actions>
      <slot name="submitButton">
        <v-btn :form="id" :loading="isLoading" color="primary" type="submit">
          {{ submitButtonText }}
        </v-btn>
      </slot>
      <slot name="actionButtons"></slot>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator'
import TFormFactory from './factory/TFormFactory.vue'
import FormSchema from '~/lib/forms/factory/schema/FormSchema'
@Component({
  components: {
    TFormFactory
  }
})
export default class CardForm extends Vue {
  @Prop({ required: false, default: 'Form' })
  readonly title!: string
  @Prop({ required: false, default: 'Submit' })
  readonly submitButtonText!: string
  @Prop({ required: true, default: 'card-form' })
  readonly id!: string
  @Prop({ required: true })
  readonly schema!: FormSchema
  @Prop({ required: true })
  readonly model!: object

  get isLoading() {
    return this.$wait.is(this.id + '-wait')
  }

  @Emit('submit')
  onSubmit() {}
}
</script>
