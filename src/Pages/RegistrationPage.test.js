import { shallowMount  } from "@vue/test-utils";
import RegistrationPage from "./RegistrationPage.vue";
import RegisterForm from "../components/Form/RegisterForm.vue";

describe('RegistrationPage.vue', () => {
    test('should renders correctly', () => {
        const wrapper = shallowMount(RegistrationPage);
        expect(wrapper.exists()).toBe(true);
    });

    test('contains RegistrationForm', () => {
        const wrapper = shallowMount(RegistrationPage);
        expect(wrapper.findComponent(RegisterForm).exists()).toBe(true)
    })

    test('has the right structure', () => {
        const wrapper = shallowMount(RegistrationPage);
        expect(wrapper.find('.register').exists()).toBe(true);
        expect(wrapper.find('.register__header').text()).toBe('Register')
    })
})