<template>
  <div class="heading">
    <div class="chatter">CHATTER</div>
    <div class="routes">
      <div class="route1">
        <router-link
          to="home-page"
          :style="{
            height: '24px',
            width: '46px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '24px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: $route.path === '/home-page' ? 'blue' : 'rgba(0, 0, 0, 1)'
          }"
          active-class="active-link"
        >
          Home</router-link
        >
        <router-link
          to="about-page"
          :style="{
            height: '24px',
            width: '70px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '24px',
            textAlign: 'left',
            color: $route.path === '/about-page' ? 'blue' : 'rgba(0, 0, 0, 1)'
          }"
        >
          About us
        </router-link>
        <router-link
          to="contact-page"
          :style="{
            height: '24px',
            width: '64px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '24px',
            textAlign: 'left',
            color: $route.path === '/contact-page' ? 'blue' : 'rgba(0, 0, 0, 1)'
          }"
        >
          Contact
        </router-link>
        <router-link
          to="blogs-page"
          :style="{
            height: '24px',
            width: '41px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '24px',
            textAlign: 'left',
            color: $route.path === '/blogs-page' ? 'blue' : 'rgba(0, 0, 0, 1)'
          }"
        >
          Blogs</router-link
        >
      </div>
      <div class="route2">
        <div class="login">
          <router-link
            to="log-in"
            :style="{
              height: '27px',
              width: '51px',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '18px',
              left: '50px',
              fontWeight: '700',
              lineHeight: '24px',
              color: $route.path === '/log-in' ? 'blue' : 'rgba(17, 17, 17, 1)',
              top: '13px',
              position: 'relative'
            }"
          >
            Log in</router-link
          >
        </div>
        <div class="signup">
          <router-link
            to="registration-page"
            :style="{
              height: '27px',
              width: '64px',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '18px',
              textAlign: 'center',
              fontWeight: '700',
              lineHeight: '27px',
              color: $route.path === '/registration-page' ? 'black' : 'rgba(255, 255, 255, 1)',
              top: '13px',
              position: 'relative',
              left: '46px'
            }"
          >
            sign up</router-link
          >
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.heading {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 1440px;
  height: 98px;
  padding: 13px, 110px, 13px, 72px;
  border: 1px rgba(208, 208, 208, 1);
}
.chatter {
  width: 214px;
  height: 72px;
  top: 13px;
  left: 72px;
  position: relative;
  font-family: 'DM Sans', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(84, 62, 224, 1);
}
.routes {
  width: 805px;
  height: 56px;
  top: 25px;
  left: 318px;
  gap: 174px;
  position: relative;
  display: flex;
  flex-direction: row;
}
.route1 {
  width: 293px;
  height: 24px;
  gap: 24px;
  display: flex;
  flex-direction: row;
  top: 13px;
  position: relative;
}
.route2 {
  width: 338px;
  height: 56px;
  gap: 24px;
  display: flex;
  flex-direction: row;
}
.login {
  height: 56px;
  width: 157px;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding: 8px, 16px, 8px, 16px;
  border-radius: 8px;
  border: 1px solid rgba(84, 62, 224, 1);
  gap: 8px;
}

.signup {
  width: 157px;
  height: 56px;
  padding: 8px, 16px, 8px, 16px;
  border-radius: 8px;
  gap: 8px;
  background-color: rgba(84, 62, 224, 1);
}
.main-container {
  width: 1440px;
  height: 402px;
  top: 3217px;
  background: rgba(255, 237, 204, 0.5);
  position: absolute;
  display: flex;
  flex-direction: row;
}
.active-link {
  color: green;
}
</style>
