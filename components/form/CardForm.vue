<template>
  <v-card>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      <v-form :id="id" @submit.prevent="onSubmit(formValue)">
      </v-form>
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
@Component({
})
export default class CardForm extends Vue {
  @Prop({ required: false, default: 'Form' })
  readonly title!: string;
  @Prop({ required: false, default: 'Submit' })
  readonly submitButtonText!: string;
  @Prop({ required: true, default: 'card-form' })
  readonly id!: string;

  @Emit('submit')
  onSubmit () {
  }
}
</script>
