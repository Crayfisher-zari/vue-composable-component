<script lang="ts" setup>
type Props = {
  type: string;
  value: string;
  invalidMessage: string;
  onChange: ()=>void;
};
const props = defineProps<Props>();
</script>

<template>
  <div>
    <input :type="type" ref="inputElement" :value="value" @change="onChange" />
    <p class="invalidMessage">{{ invalidMessage }}</p>
  </div>
</template>
