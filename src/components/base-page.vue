<template>
  <div class="main-container">
    <div
      class="chatter"
      :style="{
        width: '214px',
        height: '72px',
        fontFamily: '\'DM Sans\', sans-serif',
        fontSize: '48px',
        fontWeight: '700',
        lineHeight: '72px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: 'rgba(84, 62, 224, 1)',
        top: '72px',
        left: '80px',
        position: 'absolute'
      }"
    >
      CHATTER
    </div>
    <div class="explore" :style="{ display: 'flex', flexDirection: 'column', gap: '4px' }">
      <p
        :style="{
          width: '85px',
          height: '36px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '24px',
          fontWeight: '500',
          lineHeight: '36px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: 'rgba(17, 17, 17, 1)',
          top: '60px',
          left: '512px',
          position: 'absolute'
        }"
      >
        Explore
      </p>
      <router-link
        to="/community"
        :style="{
          width: '95px',
          height: '27px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: 'rgba(17, 17, 17, 1)',
          top: '124px',
          left: '512px',
          position: 'absolute'
        }"
      >
        community</router-link
      >
      <router-link
        to="/trending-blogs"
        :style="{
          width: '121px',
          height: '27px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: 'rgba(17, 17, 17, 1)',
          top: '167px',
          left: '512px',
          position: 'absolute'
        }"
      >
        Trending blogs</router-link
      >
      <router-link
        to="/team-chatter"
        :style="{
          width: '148px',
          height: '27px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: 'rgba(17, 17, 17, 1)',
          top: '210px',
          left: '512px',
          position: 'absolute'
        }"
      >
        Chatter for teams
      </router-link>
    </div>
    <div class="support" :style="{ display: 'flex', flexDirection: 'column', gap: '4px' }">
      <p
        :style="{
          width: '93px',
          height: '36px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '24px',
          fontWeight: '500',
          lineHeight: '36px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: 'rgba(17, 17, 17, 1)',
          top: '60px',
          left: '843px',
          position: 'absolute'
        }"
      >
        Support
      </p>
      <router-link
        to="/support-docs"
        :style="{
          width: '114px',
          height: '27px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: 'rgba(17, 17, 17, 1)',
          top: '124px',
          left: '843px',
          position: 'absolute'
        }"
      >
        Support docs
      </router-link>
      <router-link
        to="/join-slack"
        :style="{
          width: '82px',
          height: '27px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: 'rgba(17, 17, 17, 1)',
          top: '167px',
          left: '843px',
          position: 'absolute'
        }"
      >
        Join slack
      </router-link>
      <router-link
        to="/contact"
        :style="{
          width: '68px',
          height: '27px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: 'rgba(17, 17, 17, 1)',
          top: '210px',
          left: '844px',
          position: 'absolute'
        }"
      >
        Contact</router-link
      >
    </div>
    <div class="official-blog" :style="{ display: 'flex', flexDirection: 'column', gap: '4px' }">
      <p
        :style="{
          width: '135px',
          height: '36px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '24px',
          fontWeight: '500',
          lineHeight: '36px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: 'rgba(17, 17, 17, 1)',
          top: '60px',
          left: '1184px',
          position: 'absolute'
        }"
      >
        Official blog
      </p>
      <router-link
        to="/official-blog"
        :style="{
          width: '99px',
          height: '27px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: 'rgba(17, 17, 17, 1)',
          top: '124px',
          left: '1184px',
          position: 'absolute'
        }"
      >
        Official blog
      </router-link>
      <router-link
        to="/engineering-blog"
        :style="{
          width: '137px',
          height: '27px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: 'rgba(17, 17, 17, 1)',
          top: '167px',
          left: '1184px',
          position: 'absolute'
        }"
      >
        Engineering blog
      </router-link>
    </div>
  </div>
  <router-view />
</template>

<script></script>

<style scoped>
.main-container {
  width: 1440px;
  height: 402px;
  top: 3217px;
  background: rgba(255, 237, 204, 0.5);
  position: absolute;
  display: flex;
  flex-direction: row;
}
</style>
