<template>
  <div>
    <ul>
      <li v-for="(item, i) in list">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
// import { reactive, ref, defineComponent } from 'vue'
// export default defineComponent({
//   name: 'list',
//   setup(props) {
//     const list = ref([2, 6, 7, 10])
//     return { list }
//   },
// })
export default {
  name: 'list',
  data() {
    return {
      list: [3, 59, 3, 12],
    }
  },
}
</script>

<style></style>
