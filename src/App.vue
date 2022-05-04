<script setup lang="ts">
import { useChecks } from "./composables/useChecks";

const labels = ["check 1", "check 2", "check 3"];

// コンポーザブル
const { isAllChecked, UseChecksComponent } = useChecks(labels);
</script>

<template>
  <section>
    <h1>コンポーザブル</h1>
    <div>
      <UseChecksComponent />
    </div>
    <button :disabled="!isAllChecked">次へ</button>
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
section {
  max-width: 600px;
  margin: 0 auto;
}
</style>
