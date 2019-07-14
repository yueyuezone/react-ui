import React from 'react'
import Icon from '../Icon'
import renderer from 'react-test-renderer'
import {mount} from "enzyme"

describe('icon测试',()=>{
    it('测试UI组件',()=>{
        //console.log(Icon)
        const iconCom = renderer.create(<Icon name="file" className="ui-icon"></Icon>)
        let iconJson = iconCom.toJSON()
        expect(iconJson).toMatchSnapshot('icon')
    })
    it('测试onclick⌚️',  ()=> {
        const fn = jest.fn()
        const iconCom = mount(<Icon name="bank" onClick={fn}></Icon>)
        iconCom.find('svg').simulate('click')
        expect(fn).toBeCalled()
    });
})