import { computed, defineComponent, h, ref, resolveComponent } from "vue";
import TextInput from "../components/TextInput.vue";

export const useEmailInput = () => {
  const data = ref("");
  const onChange = ($event: InputEvent) => {
    data.value = ($event.target as HTMLInputElement).value;
  };
  const validate = (text: string) => {
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/gi;
    return regex.test(text);
  };

  const isValid = computed(() => {
    if (data.value === "") {
      return true;
    }
    return validate(data.value);
  });

  const render = () =>
    h(TextInput, {
      type: "email",
      value: data.value,
      invalidMessage: "メールアドレスを入力してください",
      onChange,
      isValid: isValid.value,
    });
  const EmailInput = defineComponent({ render });
  return {
    EmailInput,
    emailValue: computed(() => data.value),
    isEmailValid: isValid.value,
  };
};
