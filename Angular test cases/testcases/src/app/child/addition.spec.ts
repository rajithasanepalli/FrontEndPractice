import { addition } from "./addition"

describe('test addition', () => {
    it('test case for addition', () => {
        expect(addition(20, 30)).toBe(50)
    })
})