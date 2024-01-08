import { shallowMount } from "@vue/test-utils";
import FavoritesPage from "./FavoritesPage.vue";
import Favorites from "../components/Favorites/Favorites.vue"


describe('FavoritesPage', () => {
    test('contains Favorites', () => {
        const wrapper = shallowMount(FavoritesPage);
        expect (wrapper.findComponent(Favorites).exists()).toBe(true);
    })

    test('has the right structure', () => {
        const wrapper = shallowMount(FavoritesPage);
        expect(wrapper.find('.favorites-saved').exists()).toBe(true);
        expect(wrapper.find('.favorites-saved__header').text()).toBe('Saved Collections')
    })
})