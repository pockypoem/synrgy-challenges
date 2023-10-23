import { add, greeting, sumAll } from "../src/function";

describe('Function', function() {

    it('should support in typescript', function() {
        
        expect(add(1,3)).toBe(4);
        expect(greeting("Jungkook")).toBe("Hello Jungkook");
        expect(sumAll([1,2,3,4,5])).toBe(15);

    })

});

