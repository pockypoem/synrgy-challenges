describe('Class', function() {

    it('should support in typescript', function() {

        class Car {

            brand: string;
            colors: string[];

            constructor(brand: string, colors:string[]) {
                this.brand = brand;
                this.colors = colors;
            }

            description() : string {
                return `This is ${this.brand}, It comes in ${this.colors.length} colors`;
            }


        }

        const ESEMKA = new Car("Esemka", ["Red", "Green", "Blue"]);

        expect(ESEMKA.description()).toBe("This is Esemka, It comes in 3 colors");

    })

});