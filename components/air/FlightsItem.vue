<template>
  <div class="flights_item">
    <div class="item_main" @click="isShow=!isShow">
      <div class="item_name">
        {{ data.airline_name }}{{ data.flight_no }} --{{ data.plane_size }}
      </div>
      <div class="item_depart_date">
        <p>{{ data.dep_time }}</p>
        <p>{{ data.org_airport_name }}{{ data.org_airport_quay }}</p>
      </div>
      <div class="duration">
        {{ duration }}
      </div>
      <div class="item_dest_date">
        <p>{{ data.arr_time }}</p>
        <p>{{ data.dst_airport_name }}{{ data.dst_airport_quay }}</p>
      </div>
      <div class="item_price">
        <p>￥<span>{{ data.base_price*0.3 }}</span>起</p>
      </div>
    </div>
    <div v-show="isShow" class="item_info">
      <div class="item_low">
        低价推荐
      </div>
      <div class="item_seat">
        <div v-for="(item,index) in data.seat_infos" :key="index" class="seat_row">
          <div class="seat_row_name">
            <span>{{ item.name }} </span> |{{ item.supplierName }}
          </div>
          <div class="seat_row_price">
            ￥{{ item.par_price }}
          </div>
          <div class="seat_row_btns">
            <div>
              <el-button type="warning" size="mini" @click="headerselect(data.id,item.seat_xid)">
                选定
              </el-button>
              <p>剩余：{{ item.discount }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['data'],
  data () {
    return {
      isShow: false
    }
  },
  computed: {
    duration () {
      const startTime = this.data.dep_datetime
      const endTime = this.data.arr_datetime
      const startDate = new Date(startTime)
      const endDate = new Date(endTime)

      const duration = endDate - startDate

      const hour = parseInt(duration / 1000 / 60 / 60)

      const minutes = duration / 1000 / 60 - hour * 60

      return `${hour}时${minutes}分`
    }
  },
  mounted () {
    // console.log(this.data)
  },
  methods: {
    headerselect (id, seatxid) {
      // eslint-disable-next-line no-undef
      this.$router.push({ path: '/air/order', query: { id, seatxid } })
    }
  }

}
</script>

<style lang="less" scoped>
/* css tree  */
*{
  margin: 0;
  padding: 0;
}
.flights_item {
  border: 1px solid #ccc;
  margin: 10px 0;
  .item_main {
    height: 80px;
    background-color: #fff;
    display: flex;
    position: relative;
    > div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .item_name {
      font-size: 13px;
    }

    .item_depart_date,
    .item_dest_date {
      p:nth-child(1) {
        font-size: 25px;
      }
      p:nth-child(2) {
        font-size: 12px;
        color: #666;
      }
    }

    .item_price {
      span {
        color: orange;
        font-size: 20px;
      }
    }
    .duration {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 12px;
      color: #666;
      padding-bottom: 20px;
      border-bottom: 1px solid #ccc;
    }
  }

  .item_info {
    background-color: #f6f6f6;
    display: flex;
    .item_low {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
    }
    .item_seat {
      flex: 5;

      .seat_row {
        height: 70px;
        display: flex;
        border-bottom: 1px solid #000;
        &:last-child{
          border-bottom: none;
        }
        > div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .seat_row_name {
          flex: 4;
          font-size: 13px;
          span{
            color: green;
          }
        }
        .seat_row_price {
          flex: 1;
          font-size: 18px;
          color: orange;
        }
        .seat_row_btns {
          flex: 1;
          font-size: 13px;
        }
      }
    }
  }
}
</style>
