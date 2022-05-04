import { computed, defineComponent, h, ref } from "vue";
import Checks from "../components/Checks.vue";

export const useChecks = () => {
  const checkList = ref([false, false, false]);
  const labels = ["check 1", "check 2", "check 3"];
  const handleCheck = (index: number) => {
    checkList.value[index] = !checkList.value[index];
  };
  const isAllChecked = computed(() => {
    return checkList.value.every((item) => item);
  });

  const render = () =>
    h(Checks, { checkList: checkList.value, labels, onCheck: handleCheck });
  const UseChecksComponent = defineComponent({ render });

  return { isAllChecked, UseChecksComponent };
};
