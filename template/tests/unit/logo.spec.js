import { mount, createLocalVue } from '@vue/test-utils'
import Logo from './../../src/components/Logo'
import VueCompositionApi from '@vue/composition-api'
import components from '@baldeweg/components'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)
localVue.use(components)

describe('Logo', () => {
  it('shows the logo', () => {
    const $t = () => {}
    const wrapper = mount(Logo, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('img').exists()).toBeFalsy()
  })
})
