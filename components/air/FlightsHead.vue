<template>
  <div class="flightHead">
    <span>航班信息</span>
    <span>起飞时间</span>
    <span>到达时间</span>
    <span>价格</span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='less' sopced>
.flightHead{
   background-color: #f6f6f6;
  height: 35px;
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 13px;
  border: 1px solid #ccc;
  color: #666;
 span{
 flex: 1;
 }
}
</style>
