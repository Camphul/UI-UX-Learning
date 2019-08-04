<template>
  <div>
    Start index: {{ value }}<br>
    <toggle-button @onEnabled="startCounter" @onDisabled="stopCounter"/>
  </div>
</template>
<script lang="ts">
  import {Vue, Component, Prop, Emit} from "nuxt-property-decorator";
  import ToggleButton from "@/components/ToggleButton.vue";
  import {CounterStore} from "~/store/counter";

  @Component({
    components: {
      ToggleButton
    }
  })
  export default class Counter extends Vue{
    @Prop({required: false, default: 5})
    readonly start!: number;

    intervalId?: any;

    @CounterStore.Action('increment')
    increment!: any;
    @CounterStore.Action('setValue')
    setValue!: any;
    @CounterStore.Getter('getValue')
    value!: number;

    mounted() {
      this.setValue(this.start);
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
