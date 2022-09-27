import { describe, test, expect } from '@peeky/test'
import { mount } from '@vue/test-utils'
import { Ramp } from '../components/index'

/* @peeky {
  runtimeEnv: 'dom'
} */

// describe('Ramp', () =>
// {
//     test('mount component', async () =>
//     {
//         const wrapper = mount(Ramp, {
//             props: {
//                 publisherId: 'abc',
//                 id: '2222'
//             },
//         })
//         expect(wrapper.exists()).toBe(true);
//     })
// })