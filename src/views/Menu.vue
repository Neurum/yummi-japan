<template>
  <transition name="zoom" type="animation" appear>
    <div class="menu-container">
      <div class="menu-nav">
        <a
          class="appetizers"
          @click="
            activeLink = 'appetizers';
            activate(1);
          "
          :class="{ active: active_el == 1 }"
          >Appetizers</a
        >
        <a
          class="entrees"
          @click="
            activeLink = 'entrees';
            activate(2);
          "
          :class="{ active: active_el == 2 }"
          >Entrees</a
        >
        <a
          class="sushi"
          @click="
            activeLink = 'sushi';
            activate(3);
          "
          :class="{ active: active_el == 3 }"
          >Sushi</a
        >
        <a
          class="yaki"
          @click="
            activeLink = 'yaki';
            activate(4);
          "
          :class="{ active: active_el == 4 }"
          >Yaki Soba</a
        >
        <a
          class="express"
          @click="
            activeLink = 'express';
            activate(5);
          "
          :class="{ active: active_el == 5 }"
          >Express Bowls</a
        >
        <a
          class="kids"
          @click="
            activeLink = 'kids';
            activate(6);
          "
          :class="{ active: active_el == 6 }"
          >Kids Meals</a
        >
        <a
          class="sides"
          @click="
            activeLink = 'side';
            activate(7);
          "
          :class="{ active: active_el == 7 }"
          >Side Items</a
        >
      </div>
      <div class="menu">
        <div class="menu__appetizers" v-if="activeLink === 'appetizers'">
          <div
            class="menu-items"
            v-for="appetizer in menu.appetizers"
            :key="appetizer.name"
          >
            <div class="menu-item">
              <h2>{{ appetizer.name }}</h2>
              <p v-show="appetizer.dressing">
                {{ appetizer.dressing1 }} or {{ appetizer.dressing2 }} Dressing
              </p>
            </div>
            <h2>${{ appetizer.price }}</h2>
          </div>
        </div>
        <div class="menu__entrees" v-else-if="activeLink === 'entrees'">
          <div
            class="menu-items"
            v-for="entrees in menu.entrees"
            :key="entrees.name"
          >
            <div class="menu-item">
              <h2>{{ entrees.name }}</h2>
              <p v-show="entrees.option">({{ entrees.options }})</p>
            </div>
            <h2>${{ entrees.price }}</h2>
          </div>
        </div>
        <div class="menu__sushi" v-else-if="activeLink === 'sushi'">
          <div class="menu-items" v-for="sush in menu.sushi" :key="sush.name">
            <div class="menu-item">
              <h2>{{ sush.name }}</h2>
              <p v-show="sush.item">
                ({{ sush.item1 }}, {{ sush.item2 }}, {{ sush.item3 }})
              </p>
            </div>
            <h2>${{ sush.price }}</h2>
          </div>
        </div>
        <div class="menu__yaki-soba" v-else-if="activeLink === 'yaki'">
          <div
            class="menu-items"
            v-for="yaki in menu.yakiSoba"
            :key="yaki.name"
          >
            <div class="menu-item">
              <h2>{{ yaki.name }}</h2>
            </div>
            <h2>${{ yaki.price }}</h2>
          </div>
        </div>
        <div class="menu__express-bowls" v-else-if="activeLink === 'express'">
          <div
            class="menu-items"
            v-for="express in menu.expressBowl"
            :key="express.name"
          >
            <div class="menu-item">
              <h2>{{ express.name }}</h2>
            </div>
            <h2>${{ express.price }}</h2>
          </div>
        </div>
        <div class="menu__kids-meals" v-else-if="activeLink === 'kids'">
          <div class="menu-items">
            <div class="menu-item">
              <h2>{{ menu.kidsMeal.name }}</h2>
            </div>
            <h2>${{ menu.kidsMeal.price }}</h2>
          </div>
        </div>
        <div class="menu__side-items" v-else-if="activeLink === 'side'">
          <div
            class="menu-items"
            v-for="side in menu.sideItems"
            :key="side.name"
          >
            <div class="menu-item">
              <h2>{{ side.name }}</h2>
            </div>
            <h2>${{ side.price }}</h2>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      activeLink: 'appetizers',
      active_el: 0,
      menu: {
        appetizers: {
          springRoll: {
            name: 'Spring Roll (2 pc)',
            price: 2.25,
          },
          dumpling: {
            name: 'Dumpling (6 pc)',
            price: 2.95,
          },
          chickenNuggets: {
            name: 'Chicken Nuggets (8 pc)',
            price: 2.95,
          },
          friedOyster: {
            name: 'Fried Oyster (6 pc)',
            price: 5.95,
          },
          misoSoup: {
            name: 'Miso Soup',
            price: 1.55,
          },
          houseSalad: {
            name: 'House Salad',
            dressing: true,
            dressing1: 'Ginger',
            dressing2: 'Ranch',
            price: 2.45,
          },
          crabRangoon: {
            name: 'Crab Rangoon (6 pc)',
            price: 3.25,
          },
          seaweedSalad: {
            name: 'Seaweed Salad',
            price: 3.25,
          },
          edamame: {
            name: 'Edamame',
            price: 2.95,
          },
        },
        entrees: {
          teriyakiChicken: {
            name: 'Teriyaki Chicken',
            price: 6.75,
          },
          yummiChicken: {
            name: 'Yummi Chicken',
            option: true,
            options: 'Only Broccoli',
            price: 7.55,
          },
          hibachiVegetable: {
            name: 'Hibachi Vegetable',
            price: 5.75,
          },
          hibachiChicken: {
            name: 'Hibachi Chicken',
            price: 6.75,
          },
          hibachiShrimp: {
            name: 'Hibachi Shrimp',
            price: 8.25,
          },
          hibachiSteak: {
            name: 'Hibachi Steak',
            price: 8.25,
          },
          hibachiScallops: {
            name: 'Hibachi Scallops',
            price: 8.95,
          },
          teriyakiChickenAndShrimp: {
            name: 'Teriyaki Chick & Shrimp',
            price: 9.25,
          },
          hibachiChickenAndScallops: {
            name: 'Hibachi Chicken & Scallops',
            price: 9.45,
          },
          hibachiChickenAndSteak: {
            name: 'Hibachi Chicken & Steak',
            price: 9.25,
          },
          hibachiSteakAndShrimp: {
            name: 'Hibachi Steak & Shrimp',
            price: 9.45,
          },
          hibachiSteakChickenAndShrimp: {
            name: 'Hibachi Steak, Chicken & Shrimp',
            price: 10.95,
          },
          hibachiScallopsShrimpAndChicken: {
            name: 'Hibachi Scallops, Shrimp & Chicken',
            price: 10.95,
          },
          hibachiSteakScallopsAndChicken: {
            name: 'Hibachi Steak, Scallops & Chicken',
            price: 10.95,
          },
          hibachiSteakScallopsAndShrimp: {
            name: 'Hibachi Steak, Scallops & Shrimp',
            price: 10.95,
          },
        },
        kidsMeal: {
          name: 'Kids Meal',
          price: 4.75,
        },
        sushi: {
          californiaRoll: {
            item: true,
            name: 'California Roll',
            item1: 'crabmeat',
            item2: 'avocado',
            item3: 'cucumber',
            price: 3.95,
          },
          crabRoll: {
            item: true,
            name: 'Crab Roll',
            item1: 'crabmeat',
            item2: 'cucumber',
            price: 3.95,
          },
          shrimpRoll: {
            item: true,
            name: 'Shrimp Roll',
            item1: 'fried shrimp',
            item2: 'cucumber',
            price: 5.25,
          },
          eastRoll: {
            item: true,
            name: 'East Roll',
            item1: 'shrimp',
            item2: 'avocado',
            item3: 'cucumber',
            price: 4.75,
          },
          philadelphiaRoll: {
            item: true,
            name: 'Philadelphia Roll',
            item1: 'crabmeat',
            item2: 'avocado',
            item3: 'cream cheese',
            price: 4.55,
          },
          eelRoll: {
            item: true,
            name: 'Eel Roll',
            item1: 'eel',
            item2: 'cucumber',
            price: 5.25,
          },
          vegetableRoll: {
            item: true,
            name: 'Vegetable Roll',
            item1: 'cucumber',
            item2: 'avocado',
            price: 3.15,
          },
          yummiRoll: {
            item: true,
            name: 'Yummi Roll',
            item1: 'shrimp',
            item2: 'crabmeat',
            item3: 'cucumber',
            price: 4.75,
          },
          spicyTunaRoll: {
            name: 'Spicy Tuna Roll',
            price: 4.75,
          },
          salmonCucumberRoll: {
            name: 'Salmon Cucumber Roll',
            price: 4.75,
          },
          salmonAvocadoRoll: {
            name: 'Salmon Avocado Roll',
            price: 4.75,
          },
        },
        expressBowl: {
          vegetable: {
            name: 'Vegetable Bowl',
            price: 4.75,
          },
          chicken: {
            name: 'Chicken Bowl',
            price: 5.75,
          },
          steak: {
            name: 'Steak Bowl',
            price: 6.55,
          },
          shrimp: {
            name: 'Shrimp Bowl',
            price: 6.55,
          },
          scallop: {
            name: 'Scallop Bowl',
            price: 7.65,
          },
        },
        sideItems: {
          hibachiOnionAndZucchini: {
            name: 'Hibachi Onion & Zucchini',
            price: 2.25,
          },
          friedRice: {
            name: 'Fried Rice',
            price: 1.95,
          },
          chicken: {
            name: 'Side of Chicken',
            price: 3.95,
          },
          shrimp: {
            name: 'Side of Shrimp',
            price: 5.65,
          },
          steak: {
            name: 'Side of Steak',
            price: 5.65,
          },
          sauce: {
            name: 'White or Ginger Sauce',
            price: 2.95,
          },
        },
        yakiSoba: {
          vegetable: {
            name: 'Vegetable Soba',
            price: 6.35,
          },
          chicken: {
            name: 'Chicken Soba',
            price: 7.25,
          },
          steak: {
            name: 'Steak Soba',
            price: 8.65,
          },
          shrimp: {
            name: 'Shrimp Soba',
            price: 8.65,
          },
          scallops: {
            name: 'Scallop Soba',
            price: 9.55,
          },
        },
      },
    };
  },
  methods: {
    activate(el) {
      this.active_el = el;
    },
  },
  beforeMount() {
    this.activate(1);
  },
};
</script>

<style lang="scss" scoped>
.menu-container {
  margin: 2rem auto 0;
  background: rgba(202, 202, 202, 0.8);
  height: 80%;
  width: 80%;
  box-shadow: -1px 9px 10px 6px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.menu-nav {
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: solid 1px #2f2f2f;

  & a {
    cursor: pointer;
  }
}
.active {
  color: #317b89;
  text-decoration: overline;
}
.menu {
  height: 93.75%;

  &__appetizers,
  &__entrees,
  &__sushi,
  &__yaki-soba,
  &__express-bowls,
  &__kids-meals,
  &__side-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: 100%;
    padding-right: 6rem;
  }
}
.menu-item {
  display: flex;
  flex-direction: column;
  font-size: 2.57rem;
  align-items: start;
}
.menu-items {
  padding: 1.5rem;
  display: flex;
  width: 25%;
  justify-content: space-between;
  align-items: center;
  font-size: 2.5rem;

  & p {
    font-size: 1.25rem;
    padding-left: 1rem;
  }

  & h2 {
    padding-left: 1rem;
  }
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
