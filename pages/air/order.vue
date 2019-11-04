<template>
  <div class="order">
    <div class="order_main">
      <orderForm :ticket="ticket" />
    </div>
    <!-- 侧边栏 -->
    <div class="a_side">
      <orderoill />
    </div>
  </div>
</template>

<script>
import orderForm from '@/components/air/orderForm.vue'
import orderoill from '@/components/air/orderoill.vue'
export default {
  components: {
    orderForm,
    orderoill
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
          seat_xid: this.$route.query.seat_xid
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
    width: 1000px;
  margin: 0 auto;
  display: flex;
 .order_main{
flex:6;
}
 .a_side{
    margin-top: 20px;
   margin-left: 30px;
   height: 300px;
   border: 1px solid #ccc;
flex:3;
 }
}
</style>
