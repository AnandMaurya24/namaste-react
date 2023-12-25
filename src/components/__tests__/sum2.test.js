import { sum } from "../sum"


test("sum test",()=>{
    const res=sum(2,6);
    expect(res).toBe(8);
})