import axios from '@/utils/request.js'

export function getActicle(data) {
    return axios({ url: '/home/getActicle', method: 'get', data });
}
