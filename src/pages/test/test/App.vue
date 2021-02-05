<template>
  <div class="container">
    {{count}}
    <a-button>11</a-button>
  </div>
</template>

<script>
  import {onMounted, ref} from 'vue';

  export default {
    name: 'App',
    setup() {
      const count = ref(0)
      onMounted(() => {
        console.log(11)
      })
      return {
        count
      }
    }
  }
</script>
