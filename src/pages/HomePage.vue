<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 card my-3 mx-3 py-3 px-3" v-for="g in gifts">
      <h2 class=" text-center">Open Me!!</h2>
        <img @click="openGift(g.id)" :src="g.url" alt="gift" class="img-fluid selectable imgH ">
        <h4 class="bold">{{ g.tag }}</h4>
      </div>
      </div>
  </div>

</template>

<script>
import { onMounted ,computed } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import {giftsService} from '../services/GiftsService.js'
import {AppState} from '../AppState.js'

export default {
  setup() {

    async function getGifts(){
    try{
      await giftsService.getGifts()
    }catch(error){
      Pop.error(error.message)
      logger.error(error)
    }
    }

    onMounted(() => {
      logger.log('Hello from Homepage')
      getGifts()
    })
    return {
      gifts: computed(()=> AppState.gifts),
      

      async openGift(gId){
        try{
         await giftsService.openGift(gId)
        }catch (error){
          Pop.error(error)
        }
      async createGift(formData){
        
      }
      }

    

    }
  }
}
</script>

<style scoped lang="scss">
.img{
  height: 100;
}
  



</style>
