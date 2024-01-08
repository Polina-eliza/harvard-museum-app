import { shallowMount } from "@vue/test-utils";
import ExhibitionsPage from "./ExhibitionsPage.vue";
import ExihbitionCurrent from "../components/Exibitions/ExihbitionCurrent.vue";
import exhibitionsService from "../service/exhibitions/exhibitionsService";

jest.mock("../service/exhibitions/exhibitionsService", () => ({
    getExhibitions: jest.fn(),
    addImagesToStorage: jest.fn(),
  }));

  describe('ExhibitionsPage', () => {
    test('uses the correct data properties', () => {
        const wrapper = shallowMount(ExhibitionsPage);
        expect(wrapper.vm.exhibitions).toEqual([]);
    })

    test('uses the correct data properties', () => {
        const wrapper = shallowMount(ExhibitionsPage);
        expect(wrapper.vm.exhibitions).toEqual([]);
    })

    test('contains ExhibitionCurrent after data fetch', async () => {
        const mockData = [{ id: 1, name: 'Exhibition 1' }];
        exhibitionsService.getExhibitions.mockResolvedValue(mockData);
        const wrapper = shallowMount(ExhibitionsPage);
        await wrapper.vm.$nextTick(); 
        expect(wrapper.findComponent(ExihbitionCurrent).exists()).toBe(true);
    });

    it('shows an error message when getExhibitions fails', async () => {
        const errorMessage = 'Error fetching exhibitions';
        exhibitionsService.getExhibitions.mockRejectedValue(new Error(errorMessage));
        const wrapper = createComponent();
        await wrapper.vm.$nextTick();
        expect(toast.error).toHaveBeenCalledWith(errorMessage);
      });
})