<script lang="ts" setup>
type Props = {
  type: string;
  value: string;
  invalidMessage: string;
  onChange: () => void;
  isValid: boolean;
};
defineProps<Props>();
</script>

<template>
  <div>
    <input :type="type" :value="value" @change="onChange" />
    <p v-show="!isValid" class="invalidMessage">{{ invalidMessage }}</p>
  </div>
</template>
