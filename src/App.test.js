import { mount } from '@vue/test-utils';
import App from './App.vue';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';


describe('App.vue', () => {

    test('renders header component', () => {
        const warpper = mount(App);
        expect(wrapper.findComponent(Header).exists()).toBe(true)
    });

    test('renders footer componnet', () => {
        const wrapper = mount(App);
        expect(wrapper.findComponent(Footer).exists().toBe(true))
    })
})

