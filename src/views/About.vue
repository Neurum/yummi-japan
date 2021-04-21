<template>
  <transition name="zoom" type="animation" appear>
    <div class="about-container">
      <div class="about">
        <h3>
          Yummi Japan Japanese Express Restaurant welcomes you to a pleasant and
          memorable dining experience.
        </h3>
        <h4>
          We cater for all occasions. Parties are welcome and private lunch
          party is available. We take pride in serving you the finest oriental
          cuisine in the area.
        </h4>
        <h4>
          We feature authentic Hibachi Grill, Sushi and Teriyaki Japanese
          cuisine. Our menu is a suggestion for your selection. The sauce is the
          magic ingredient, which blends the beef, seafood, or chicken with
          fresh vegetables to create unique dishes. Each dish is prepared to
          order. The spicy dishes are prepared to the degree of your taste.
          Please notice the dishes offered for the diet conscious - low in
          sodium and mildly seasoned. All dishes are cooked with vegetable oil.
          Thank you for dining at Yummi Japan Japanese Express Restaurant. We
          welcome any suggestions you may offer in order that we may better
          serve you.
        </h4>
        <div class="hours">
          <h3>Hours of Operation:</h3>
          <p>Monday - Thursday: 11:00am - 9:30pm</p>
          <p>Friday - Saturday: 11:00am - 10:00pm</p>
          <p>Sunday: 11:30am - 9:00pm</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-container {
  margin: 2rem auto 0;
  background: rgba(202, 202, 202, 0.8);
  height: 80%;
  width: 80%;
  box-shadow: -1px 9px 10px 6px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  & h3 {
    font-size: 3rem;
  }

  & h4,
  p {
    font-size: 2rem;
  }
}

.about {
  height: 100%;
  padding: 0 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

/* Animations */
.zoom-enter-active {
  animation: zoom-in 0.2s;
  transition: all 0.2s;
}
.zoom-leave-active {
  animation: zoom-out 0.2s;
  transition: all 0.2s;
}
.zoom-enter-from {
  transform: scale(0);
}
.zoom-leave-to {
  transform: scale(0);
}
@keyframes zoom-in {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
@keyframes zoom-out {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}
</style>
