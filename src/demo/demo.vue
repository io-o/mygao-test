<!--
 * @Author: Andrew Q
 * @Date: 2021-09-18 14:43:22
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-09-18 15:27:03
 * @Description: 
-->
<template>
  <Calendar :msg="msg"></Calendar>
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
      msg: '为我问你们',
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped></style>
