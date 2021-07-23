import { mount } from '@vue/test-utils'
import Component from '../Component.vue'

describe('Sample Test Suite', () => {
  it('mounts', () => {
    const wrapper = mount(Component, {
      props: {
        message: 'Test in Jest',
      },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
