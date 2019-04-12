import { request } from './request'
import axios from 'axios'

export default {
    async getInstruments() {
        try {
            const { data } = await axios.get(request.instruments());

            return data
        } catch (e) {
            throw e
        }
    },
}