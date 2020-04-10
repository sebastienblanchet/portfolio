import {
  expect
} from 'chai'
import {
  createLocalVue,
  shallowMount
} from '@vue/test-utils'
import Info from '@/components/Info.vue'

describe('Info', () => {
  it('MD sanitize methods', () => {
    const localVue = createLocalVue()
    const wrapper = shallowMount(Info, {
      localVue,
    })

    // unit testing replace methods
    expect(wrapper.vm.replaceStr("test1 test2 test1", "test1", "test2")).to.equal("test2 test2 test2");
    expect(wrapper.vm.replaceTag("<code test > </code>", "code", "kdb")).to.equal("<kdb test > </kdb>");
  })
})