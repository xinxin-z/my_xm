<template>
  <div class="order_bill">
    <!-- 机票 -->
    <div class="ticket_price">
      成人机票:￥{{ ticket.base_price }}
    </div>
    <!-- 燃油 -->
    <div class="oil">
      机建+燃油:￥{{ ticket.airport_tax_audlet }}
    </div>
    <!-- 总价 -->
    <div class="total_price">
      应付总价: 2000
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
    }
  },
  mounted () {
    console.log(this.ticket)
  }
}
</script>

<style>

</style>
