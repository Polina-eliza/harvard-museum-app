import { shallowMount } from '@vue/test-utils';
import Favorites from "./Favorites.vue";
import { createStore } from 'vuex';

describe('Favorites', () => {
    let getters;
    let store;

    beforeEach(() => {
        getters = {
            likedArtworks: () => [{ id: '1', images: ['test.jpg'], creators: [{description: 'Author 1'}]}]
        };
    
        const mutations = {
            removeLikedArtwork: jest.fn() 
        };
    
        store = createStore({
            getters,
            mutations 
        });
    });

    test('should render a row for each item in `likedArtworks`', () => {
        const wrapper = shallowMount(Favorites, {
            global: {
                plugins: [store]
            }
        });
        expect(wrapper.findAll('.favorites-saved__table-row').length).toBe(getters.likedArtworks().length);
    });

    test('should verify that `likedArtworks` computed correctly', () => {
        const wrapper = shallowMount(Favorites, {
            global: {
                plugins: [store]
            }
        });
        expect(wrapper.vm.likedArtworks).toEqual(getters.likedArtworks());
    });

    test('calls `removeFromFavorites` when delete icon is clicked', async () => {
        const removeFromFavoritesMock = jest.fn();
    
        const wrapper = shallowMount(Favorites, { 
            global: {
                plugins: [store],
                mocks: {
                    removeFromFavorites: removeFromFavoritesMock
                }
            }
        });
    
        await wrapper.find('.mdi-plus.delete-icon').trigger('click');
    
        expect(removeFromFavoritesMock).toHaveBeenCalled();
        expect(removeFromFavoritesMock).toHaveBeenCalledWith(getters.likedArtworks()[0].id);
    });
});







