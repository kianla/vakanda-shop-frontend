import { isStringLiteral } from "typescript";

export type ItemGroup = {
    id: number;
    name: string;
}

export type Item = {
    id: number;
    name: string;
    discription: string;
    photo: string;
    item_count: number;
    price: number;
    group_id: number;
}

export type Order = {
    id: number;
    user_id: number;
    create_date: Date | string | number;
    registration_date: Date | string | number | null;
    price: number;
    order_items: Array<Item>;
}
export type User = {
    id: number;
    username: string;
    email: string;
    address: string;
}