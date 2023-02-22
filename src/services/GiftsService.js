import { api } from "./AxiosService.js"
import { sandboxAPI } from "./AxiosService.js"
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"

class GiftsService {
    async getGifts() {
        const res = await sandboxAPI.get('gifts')
        logger.log('getting gifts', res.data)
        AppState.gifts = res.data.map(g => new Gift(g))
    }
    async openGift(gId) {
        const res = await sandboxAPI.put(`/gifts/${gId}`, { opened: true })
        const newGift = new Gift(res.data)
        const foundGiftIndex = AppState.gifts.findIndex(g => g.id == gId)
        AppState.gifts.splice
            (foundGiftIndex, 1, newGift);
        logger.log(newGift)

    }
}

export const giftsService = new GiftsService()