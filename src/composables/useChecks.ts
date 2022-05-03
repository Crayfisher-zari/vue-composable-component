import { computed, h, ref } from "vue";

export const useChecks = () => {
  const checkList = ref([false, false, false]);
  const labels = ["check 1", "check 2", "check 3"];
  const handleCheck = (index: number) => {
    checkList.value[index] = !checkList.value[index];
  };
  const isAllChecked = computed(() => {
    return checkList.value.every((item) => item);
  });

  const ChecksComponent = h()
  
};
