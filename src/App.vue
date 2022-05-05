<script setup lang="ts">
import { useChecks } from "./composables/useChecks";
import { useEmailInput } from "./composables/useEmailInput";

const labels = ["check 1", "check 2", "check 3"];

const onUpdate = (e, text) => {
  console.log(e, text);
};

// コンポーザブル
const { isAllChecked, UseChecksComponent } = useChecks(labels);
const { EmailInput, emailValue } = useEmailInput();
</script>

<template>
  <section>
    <h1>コンポーザブル</h1>
    <div>
      <UseChecksComponent />
    </div>
    <button :disabled="!isAllChecked">次へ</button>
  </section>
  <section>
    <EmailInput @update="onUpdate" />
    {{ emailValue }}
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
