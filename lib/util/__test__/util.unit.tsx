import {cn} from "../util"
describe('cn',()=>{
    it("接受一个cn",()=>{
        const res = cn('a')
        expect(res).toEqual('a')
    })

})
describe('cn',()=>{
    it('接受2个cn',()=>{
        const res = cn('a','b')
        expect(res).toEqual('a b')
    })
})
describe('cn',()=>{
    it('接受2个cn',()=>{
        const res = cn('a','b' ,undefined)
        expect(res).toEqual('a b')
    })
})