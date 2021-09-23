<!--
 * @Author: Andrew Q
 * @Date: 2021-09-18 14:43:22
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-09-23 16:09:32
 * @Description: 
-->
<template>
  <Calendar></Calendar>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Calendar from '../lib/calendar';
export default defineComponent({
  name: '',

  components: {
    Calendar,
  },

  setup: () => {
    const state = reactive({
      week: [1, 2, 3],
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped></style>
