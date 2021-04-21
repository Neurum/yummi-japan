<template>
  <transition name="zoom" type="animation" appear>
    <div class="locations-container">
      <div class="title">
        <h1>Locations</h1>
      </div>
      <div class="locations">
        <div class="location">
          <div class="info">
            <h2>Garner Location</h2>
            <h4>Swift Creek Plaza Shopping Center</h4>
            <h4>87 Glenn Road, Garner, NC 27529</h4>
            <h4>Phone: 919-772-8871</h4>
            <h4>Fax: 919-772-8814</h4>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12485.240478523441!2d-78.57272772796081!3d35.60675172021485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac638af784521b%3A0xa8b807223d22b3a0!2sYummi%20Japan!5e0!3m2!1sen!2sus!4v1619040974744!5m2!1sen!2sus"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div class="location">
          <div class="info">
            <h2>Smithfield Location</h2>
            <h4>Equity Park</h4>
            <h4>225H N Equity Dr., Smithfield, NC 27577</h4>
            <h4>Phone: 919-934-8889</h4>
            <h4>Fax: 919-989-8802</h4>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28062.97183591386!2d-78.32219363431308!3d35.5079958531118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf1eaa1b65f7c815!2sYummi%20Japan!5e0!3m2!1sen!2sus!4v1619040933599!5m2!1sen!2sus"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 4rem;
}

h2 {
  font-size: 2.5rem;
}
h4 {
  font-size: 2rem;
}

iframe {
  padding-bottom: 2rem;
}
.locations-container {
  margin: 2rem auto 0;
  background: rgba(202, 202, 202, 0.8);
  height: 80%;
  width: 80%;
  box-shadow: -1px 9px 10px 6px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.title {
  margin-top: 1.5rem;
}

.location {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info {
  padding-bottom: 2rem;
}

.locations {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
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
