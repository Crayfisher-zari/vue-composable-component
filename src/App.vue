<script setup lang="ts">
import { computed, ref } from "vue";
import Checks from "./components/Checks.vue";

const checkList = ref([false, false, false]);
const labels = ["check 1", "check 2", "check 3"];
const handleCheck = (index: number) => {
  checkList.value[index] = !checkList.value[index];
};

const isAllChecked = computed(() => {
  return checkList.value.every((item) => item);
});
</script>

<template>
  <section>
    <h1>非コンポーザブル</h1>
    <div>
      <Checks :check-list="checkList" :labels="labels" :onCheck="handleCheck" />
    </div>
    <button :disabled="!isAllChecked">次へ</button>
  </section>
  <section>
    <h1>コンポーザブル</h1>
  </section>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
