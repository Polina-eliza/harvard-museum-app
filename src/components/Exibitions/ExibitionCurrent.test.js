import { shallowMount } from '@vue/test-utils';
import ExibitionCurrent from "./ExihbitionCurrent.vue";

describe('ExibitionCurrent', () => {
    test('should render correctly with props', () => {
        const exhibition = {
            imageURL: 'test-url',
            title: 'Test Exhibition',
            organizer: 'Test Organizer',
            opening_date: '2024-01-01',
            closing_date: '2024-02-01'
        }

       
        const wrapper = shallowMount(ExibitionCurrent, {
            propsData: { exhibition }
          });
      
          expect(wrapper.text()).toContain('Test Exhibition');
          expect(wrapper.text()).toContain('Test Organizer');
        });
})
