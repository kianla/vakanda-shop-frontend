import axios from '../utils/axios';

function ItemAPI() {
    return {
        fetchItemGroup: () => (axios.get('/ItemGroups')),
        getItemsByGroupId: (groupId: number) => (axios.get('/Items', {
            params: {
                groupId
            }
        }))
    }
}

export default ItemAPI();