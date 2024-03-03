import axios from '../utils/axios';

function ItemAPI() {
    return {
        fetchItemGroup: () => (axios.get('/ItemGroups')),
        getItemsByGroupId: (groupId: number) => (axios.get('/Items', {
            params: {
                groupId
            }
        })),

        AddItem: (  name: string, discription: string,  photo: string, item_count: number,price: number,group_id: number) => axios.post('Items', {
            name,
            discription,
            photo,
            item_count,
            price,
            group_id
        })
    }
}

export default ItemAPI();