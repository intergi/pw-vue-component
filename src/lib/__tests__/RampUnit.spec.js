import { describe, test, expect } from '@peeky/test'
import { mount } from '@vue/test-utils'
import { RampUnit } from '../components/index'

/* @peeky {
  runtimeEnv: 'dom'
} */

describe('Ramp Unit', () =>
{
    test('mount component', async () =>
    {
        const wrapper = mount(RampUnit, {
            props: {
                className: 'abc',
                type: '2222',
                selectorId: 'aaaaaa'
            },
        })
        expect(wrapper.exists()).toBe(true);
    })
})