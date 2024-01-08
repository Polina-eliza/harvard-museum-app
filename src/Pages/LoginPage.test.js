import { shallowMount } from "@vue/test-utils";
import LoginPage from "./LoginPage.vue";
import LoginForm from "../components/Form/LoginForm.vue";

describe('LoginPage.vue', () => {
    test('contains LoginForm', () => {
        const wrapper = shallowMount(LoginPage);
        expect(wrapper.findComponent(LoginForm).exists()).toBe(true)
    })

    test('has the right structure', () => {
        const wrapper = shallowMount(LoginPage);
        expect(wrapper.find('.login').exists()).toBe(true);
        expect(wrapper.find('.login__header').text()).toBe('Login')
    })
})