<template>
  <transition name="zoom" type="animation" appear>
    <div class="menu-container">
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
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu-container {
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

.zoom-enter-active {
  animation: zoom-in 0.25s linear forwards;
  transition: all 0.25s linear;
}

.zoom-leave-active {
  animation: zoom-out 0.25s linear forwards;
  transition: all 0.25s linear;
}

.zoom-enter-from {
  transform: scale(0, 0);
}

.zoom-leave-to {
  transform: scale(0, 0);
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}
@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>
