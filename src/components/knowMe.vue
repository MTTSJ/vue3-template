// 选项式API vue2的写法，data,methods等暴露在this上面 // 组合式API
<script setup>
import { watch, computed, onMounted, ref, reactive } from 'vue'
const props = defineProps({
  msg: String
})
const state = reactive({
  name: '张三',
  age: 14
})
let m = () => props.msg
const emit = defineEmits(['change', 'input'])
watch(
  () => state.age,
  (old, new1) => {
    console.log(old, new1)
  },
  {
    deep: true,
    immediate: true
  }
)
const add = () => {
  console.log('add')
  state.age = state.age + 1
}
const toOurDate = data => {
  return data + 1
}
</script>

<template>
  <div class="text">
    <span class="sp">{{ (msg, state.age) }}</span>
    <!-- 使用方法调用返回去一个参数 -->
    <div>{{ toOurDate(3) }}</div>
  </div>
</template>

<style scoped lang="less">
.text {
  .sp {
    font-size: 20px;
    color: aquamarine;
  }
}
</style>
