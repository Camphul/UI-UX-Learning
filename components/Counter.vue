<template>
  <div>
    Start index: {{count}}<br>
    <toggle-button @onEnabled="startCounter" @onDisabled="stopCounter"/>
  </div>
</template>
<script lang="ts">
  import {Vue, Component, Prop, Emit} from "nuxt-property-decorator";
  import ToggleButton from "@/components/ToggleButton.vue";

  @Component({
    components: {
      ToggleButton
    }
  })
  export default class Counter extends Vue{
    @Prop({required: false, default: 5})
    readonly start!: number;

    count: number = 0;
    intervalId: any;

    mounted() {
      this.count = this.start;
    }

    @Emit('onIncrement')
    increment() {
      this.count++;
    }

    @Emit('onStart')
    startCounter() {
      this.intervalId = setInterval(this.increment, 1000);
    }

    @Emit('onStop')
    stopCounter() {
      clearInterval(this.intervalId)
    }
  }
</script>
