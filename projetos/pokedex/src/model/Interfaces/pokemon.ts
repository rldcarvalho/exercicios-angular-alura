import { Type } from "../enums/type";

export interface Pokemon {
    image: string;
    number: number;
    name: string;
    types: Type[];
}
