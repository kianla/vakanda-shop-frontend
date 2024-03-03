import axios from '../utils/axios';

function OrderAPI() {
    return {
        getCurrentOrder: (userId: number) => (axios.get('Orders/lastorder', {
            params: {
                userId
            }
        })),
        getUserOrders: (userId: number) => (axios.get('Orders/UserOrders', {
            params: {
                userId
            }
        })),
        getOrders: () => (axios.get('Orders/', {
           
        })),
        getOrderItems: (orderId: number) => (axios.get('/Items', {
            params: {
                orderId
            }
        })),
        createOrderItem: (orderId: number, itemId: number) => (axios.post('OrderItems', {
            order_id: orderId,
            item_id: itemId
        })),
        updateOrderItem: (orderId: number, price: number) => (axios.patch(`Orders/${orderId}`, {
            price
        })),
        deleteOrderItem: (id: number) => (axios.delete(`OrderItems/${id}`))
    }
}

export default OrderAPI();