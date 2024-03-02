import { Order } from "../types/common";

export const orderNormalizer = (obj: any): Order => ({
    id: obj.id,
    user_id: obj.user_id,
    create_date: obj.create_date,
    registration_date: obj.registration_date,
    price: obj.price,
    order_items: []
})