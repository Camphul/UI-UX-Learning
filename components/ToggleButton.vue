<template>
  <v-btn color="primary" @click="toggle">
    <v-icon left>
      mdi-alarm
    </v-icon>
    {{ text }}
  </v-btn>
</template>
<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class ToggleButton extends Vue {
  @Prop({ required: false, default: 'Stop' })
  readonly enabledText!: string;
  @Prop({ required: false, default: 'Start' })
  readonly disabledText!: string;

  enabled: boolean = false;

  get text () {
    return this.enabled ? this.enabledText : this.disabledText
  }

  @Watch('enabled')
  handlerStateChange (value: boolean) {
    if (value) {
      this.onEnabled()
    } else {
      this.onDisabled()
    }
  }

  @Emit('onEnabled')
  onEnabled () {
  }

  @Emit('onDisabled')
  onDisabled () {
  }

  toggle () {
    this.enabled = !this.enabled
  }
}
</script>
