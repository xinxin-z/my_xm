<template>
  <div class="order">
    <div class="order_main">
      <orderForm :ticket="ticket" />
    </div>
    <!-- 侧边栏 -->
    <div class="a_side">
      乘车信息
    </div>
  </div>
</template>

<script>
import orderForm from '@/components/air/orderForm.vue'
export default {
  components: {
    orderForm
  },
  data () {
    return {
      ticket: {}
    }
  },
  mounted () {
    console.log(this.$route.query.id)

    this.$axios
      .get('/airs/' + this.$route.query.id, {
        params: {
          seatxid: this.$route.query.seat_xid
        }
      })
      .then((res) => {
        this.ticket = res.data
        console.log(res)
      })
  }
}
</script>

<style lang='less' socped>
.order{
  display: flex;
 .order_main{
flex:6;
}
 .a_side{
flex:4;
 }
}
</style>
