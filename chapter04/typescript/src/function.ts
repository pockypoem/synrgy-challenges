export function add(a: number, b:number) : number {
    return a + b;
}

export function greeting(name:string) :string {
    return "Hello " + name;
}

export function sumAll(numbers: number[]) : number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}