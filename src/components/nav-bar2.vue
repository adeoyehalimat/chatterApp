<template>
  <div
    class="parent"
    :style="{
      width: '1440px',
      height: '941px',
      backgroundColor: 'rgba(255, 255,255,1)',
      display: 'flex',
      flexDirection: 'row',
      top: '150px',
      position: 'absolute'
    }"
  >
    <div :style="{ width: '268pxpx', height: '941px', border: '1px solid rgba(208,208,208,1)' }">
      <div
        :style="{
          width: '140px',
          height: '48px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '48px',
          fontWeight: '500',
          lineHeight: '72px',
          letterSpacing: '0em',
          textAlign: 'center',
          left: '72px',
          top: '10px',
          position: 'absolute',
          color: 'rgba(84,62,224,1)'
        }"
      >
        CHATTER
      </div>
      <div
        :style="{
          width: '77px',
          height: '27px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'center',
          left: '73px',
          top: '82px',
          position: 'absolute',
          color: 'rgba(17,17,17,1)'
        }"
      >
        Overview
      </div>
      <div
        :style="{
          width: '174px',
          height: '258px',
          textAlign: 'center',
          left: '89px',
          top: '133px',
          position: 'absolute',
          gap: '12px',
          display: 'flex',
          flexDirection: 'column'
        }"
      >
        <div :style="{ width: '174px', height: '204px', gap: '12px' }">
          <div
            :style="{
              width: '170px',
              height: '42px',
              gap: '12px',
              display: 'flex',
              flexDirection: 'column'
            }"
          >
            <div></div>
            <router-link
              :style="{
                width: '37px',
                height: '24px',
                fontFamily: '\'DM Sans\', sans-serif',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px',
                letterSpacing: '0em',
                textAlign: 'center',
                color: 'rgba(84,62,224,1)'
              }"
            >
              Feed
            </router-link>
          </div>
          <div
            :style="{
              width: '174px',
              height: '42px',
              gap: '12px',
              display: 'flex',
              flexDirection: 'column'
            }"
          >
            <div></div>
            <router-link
              :style="{
                width: '81px',
                height: '24px',
                fontFamily: '\'DM Sans\', sans-serif',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px',
                letterSpacing: '0em',
                textAlign: 'center',
                color: 'rgba(98,98,98,1)'
              }"
            >
              Bookmarks
            </router-link>
          </div>
          <div
            :style="{
              width: '174px',
              height: '42px',
              gap: '12px',
              display: 'flex',
              flexDirection: 'column'
            }"
          >
            <div></div>
            <router-link
              :style="{
                width: '84px',
                height: '24px',
                fontFamily: '\'DM Sans\', sans-serif',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px',
                letterSpacing: '0em',
                textAlign: 'center',
                color: 'rgba(98,98,98,1)'
              }"
            >
              Team blogs
            </router-link>
          </div>
          <div
            :style="{
              width: '174px',
              height: '42px',
              gap: '12px',
              display: 'flex',
              flexDirection: 'column'
            }"
          >
            <div></div>
            <router-link
              :style="{
                width: '46px',
                height: '24px',
                fontFamily: '\'DM Sans\', sans-serif',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px',
                letterSpacing: '0em',
                textAlign: 'center',
                color: 'rgba(98,98,98,1)'
              }"
            >
              Drafts
            </router-link>
          </div>
        </div>
        <div :style="{ width: '167px', height: '42px', gap: '12px' }">
          <div></div>
          <router-link
            :style="{
              width: '69px',
              height: '24px',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '24px',
              letterSpacing: '0em',
              textAlign: 'center',
              color: 'rgba(98,98,98,1)'
            }"
          >
            Analytics
          </router-link>
        </div>
      </div>
      <div
        :style="{
          width: '179px',
          height: '41px',
          textAlign: 'center',
          left: '72px',
          top: '415px',
          position: 'absolute',
          gap: '12px'
        }"
      >
        <div
          :style="{
            width: '114px',
            height: '27px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '27px',
            letterSpacing: '0em',
            textAlign: 'center',
            color: 'rgba(17,17,17,1)'
          }"
        >
          Trending Tags
        </div>
        <div></div>
      </div>
      <div
        :style="{
          width: '174px',
          height: '183px',
          textAlign: 'center',
          left: '90px',
          top: '468px',
          position: 'absolute',
          gap: '12px',
          display: 'flex',
          flexDirection: 'column'
        }"
      >
        <router-link
          :style="{
            width: '110px',
            height: '27px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '27px',
            letterSpacing: '0em',
            textAlign: 'center',
            color: 'rgba(98,98,98,1)'
          }"
        >
          Programming
        </router-link>
        <router-link
          :style="{
            width: '109px',
            height: '27px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '27px',
            letterSpacing: '0em',
            textAlign: 'center',
            color: 'rgba(98,98,98,1)'
          }"
        >
          Data science
        </router-link>
        <router-link
          :style="{
            width: '95px',
            height: '27px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '27px',
            letterSpacing: '0em',
            textAlign: 'center',
            color: 'rgba(98,98,98,1)'
          }"
        >
          Technology
        </router-link>
        <router-link
          :style="{
            width: '141px',
            height: '27px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '27px',
            letterSpacing: '0em',
            textAlign: 'center',
            color: 'rgba(98,98,98,1)'
          }"
        >
          Machine learning
        </router-link>
        <router-link
          :style="{
            width: '60px',
            height: '27px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '27px',
            letterSpacing: '0em',
            textAlign: 'center',
            color: 'rgba(98,98,98,1)'
          }"
        >
          Politics
        </router-link>
      </div>
      <router-link
        :style="{
          width: '64px',
          height: '27px',
          left: '89px',
          top: '664px',
          position: 'absolute',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: 'rgba(17,17,17,1)'
        }"
      >
        See all
      </router-link>
      <div
        :style="{
          width: '71px',
          height: '27px',
          left: '73px',
          top: '715px',
          position: 'absolute',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: 'rgba(17,17,17,1)'
        }"
      >
        Personal
      </div>
      <div
        :style="{
          width: '142px',
          height: '96px',
          textAlign: 'center',
          left: '88px',
          top: '754px',
          position: 'absolute',
          gap: '12px',
          display: 'flex',
          flexDirection: 'column'
        }"
      >
        <div
          :style="{
            width: '136px',
            height: '42px',
            gap: '12px',
            display: 'flex',
            flexDirection: 'row'
          }"
        >
          <div :style="{ width: '107px', height: '27px', gap: '12px' }">
            <div></div>
            <router-link
              :style="{
                width: '71px',
                height: '27px',
                fontFamily: '\'DM Sans\', sans-serif',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '27px',
                letterSpacing: '0em',
                textAlign: 'center',
                color: 'rgba(98,98,98,1)'
              }"
            >
              Account
            </router-link>
          </div>
        </div>
        <div
          :style="{
            width: '142px',
            height: '42px',
            gap: '12px',
            display: 'flex',
            flexDirection: 'row'
          }"
        >
          <div></div>
          <router-link
            :style="{
              width: '106px',
              height: '27px',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '27px',
              letterSpacing: '0em',
              textAlign: 'center',
              color: 'rgba(98,98,98,1)'
            }"
          >
            Notifications
          </router-link>
        </div>
      </div>
      <button
        type="button"
        
        :style="{
          width: '106px',
          height: '27px',
          border: 'none',
          textAlign: 'center',
          left: '91px',
          top: '874px',
          position: 'absolute',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '27px',
          letterSpacing: '0em',
          color: 'rgba(255,20,0,1)'
        }"
      >
        Log out
      </button>
    </div>
    <router-view/>
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
  