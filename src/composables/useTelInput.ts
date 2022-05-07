import { computed, defineComponent, h, ref, resolveComponent } from "vue";
import TextInput from "../components/TextInput.vue";

export const useTelInput = () => {
  const data = ref("");
  const onChange = ($event: InputEvent) => {
    data.value = ($event.target as HTMLInputElement).value;
  };
  const validate = (text: string) => {
    const regex =
      /^0[-0-9]{9,12}$/gi;
    return regex.test(text);
  };

  const isValid = computed(() => {
    if(data.value === ""){
      return true
    }
    return validate(data.value)
  });

  const render = () =>
    h(TextInput, {
      type: "tel",
      value: data.value,
      invalidMessage: "電話番号を入力してください",
      onChange,
      isValid: isValid.value,
    });
  const TelInput = defineComponent({ render });
  return { TelInput, telValue: computed(() => data.value) };
};
