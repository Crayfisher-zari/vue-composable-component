import { computed, defineComponent, h, ref, resolveComponent } from "vue";
import TextInput from "../components/TextInput.vue";

export const useEmailInput = () => {
  const data = ref("");
  const onChange = ($event: InputEvent) => {
    data.value = ($event.target as HTMLInputElement).value;
  };

  const render = () =>
    h(TextInput, {
      type: "email",
      value: data.value,
      invalidMessage: "メールアドレスを入力してください",
      onChange,
    });
  const EmailInput = defineComponent({ render });
  return { EmailInput, emailValue: computed(() => data.value) };
};
