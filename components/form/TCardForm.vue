<template>
  <v-card>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      <t-form-factory
        :id="id"
        :schema="schema"
        :values="values"
        v-on="$listeners"
      />
    </v-card-text>
    <v-card-actions>
      <slot name="submitButton">
        <v-btn color="primary" type="submit" :form="id">
          {{ submitButtonText }}
        </v-btn>
      </slot>
      <slot name="actionButtons" />
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator'
import TFormFactory from './factory/TFormFactory.vue'
@Component({
  components: {
    TFormFactory
  }
})
export default class CardForm extends Vue {
  @Prop({ required: false, default: 'Form' })
  readonly title!: string;
  @Prop({ required: false, default: 'Submit' })
  readonly submitButtonText!: string;
  @Prop({ required: true, default: 'card-form' })
  readonly id!: string;
  @Prop({ required: true })
  readonly schema!: object[];
  @Prop({ required: true })
  readonly values!: object;

  @Emit('submit')
  onSubmit () {
  }
}
</script>
