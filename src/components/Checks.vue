<script setup lang="ts">
type Props = {
  checkList: readonly boolean[];
  labels: readonly string[];
  onCheck: (index: number) => void;
};
const props = defineProps<Props>();
</script>

<template>
  <ul>
    <li v-for="(item, index) in checkList" :key="index">
      <label>
        <input
          type="checkbox"
          @change="
            (e) => {
              onCheck(index);
            }
          "
          :checked="item"
        />
        {{ labels[index] }}
      </label>
    </li>
  </ul>
</template>
