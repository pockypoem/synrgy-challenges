const a: number = 1;
const pi: number = 3.14;
const nama: string = "Anton";
const cities: string[] = ["Balikpapan", "Aceh", "Lampung"];

const car: { brand:string, color:string, top_speed_kmh: number } = {
    brand: "Esemka",
    color: "Blue",
    top_speed_kmh: 330
}

// TODO: cara lainnya pakai type
type Mobil = {
    brand: string;
    color: string;
    top_speed_kmh: number;
}