<template>
  <div class="menu-container animation">
    <div class="menu-nav">
      <div class="appetizers">Appetizers</div>
      <div class="entrees">Entrees</div>
      <div class="sushi">Sushi</div>
      <div class="yaki">Yaki Soba</div>
      <div class="express">Express Bowls</div>
      <div class="kids">Kids Meals</div>
      <div class="sides">Side Items</div>
    </div>
    <div class="menu"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu-container {
  animation: growBox 1s ease;
  -webkit-animation: growBox 1s ease;
  margin: 2rem auto 0;
  background: rgba(202, 202, 202, 0.7);
  height: 80%;
  width: 80%;
  box-shadow: -1px 9px 10px 6px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.menu-nav {
  display: flex;
  justify-content: space-evenly;
  padding-top: 1rem;
}
@keyframes growBox {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
