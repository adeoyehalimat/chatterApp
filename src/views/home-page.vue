<template>
  <div class="welcome">
    <div class="welcome-image">
      <div class="welcome-note">
        <div class="welcome-note1">
          <h3 class="welcome-note01">Welcome to Chatter: A Haven for Text-Based Content</h3>
          <p class="welcome-note02">
            Unleash the Power of Words, Connect with Like-minded Readers and Writers
          </p>
        </div>
        <div class="get-started">
          <button
            type="button"
            @click="handleGetStarted"
            :style="{
              backgroundColor: 'rgba(84, 62, 224, 1)',
              border: 'none',
              color: 'rgba(255, 255, 255, 1)',
              height: '27px',
              top: '14.5px',
              left: '24px',
              position: 'absolute',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '18px',
              fontWeight: '700',
              lineHeight: '27px',
              textAlign: 'center'
            }"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="about-page">
    <div class="about-page-image">
      <div class="about-text">
        <div
          :style="{
            width: '335px',
            height: '72px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '48px',
            fontWeight: '700',
            lineHeight: '72px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: 'rgba(17, 17, 17, 1)'
          }"
        >
          About Chatter
        </div>
        <p
          :style="{
            width: '686px',
            height: '162px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '27px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: 'rgba(17, 17, 17, 1)'
          }"
        >
          Chatter is a multi-functional platform where authors and readers can have access to their
          own content. It aims to be a traditional bookworm’s heaven and a blog to get access to
          more text based content. Our vision is to foster an inclusive and vibrant community where
          diversity is celebrated. We encourage open-mindedness and respect for all individuals,
          regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we
          strive
        </p>
      </div>
      <img
        src="../assets/images/about-image.jpg.png"
        alt="image"
        :style="{ width: '500px', height: '404px', borderRadius: '8px' }"
      />
    </div>
  </div>
  <div class="why">
    <div class="why1">
      <h3
        :style="{
          width: '650px',
          height: '72px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '48px',
          fontWeight: '700',
          lineHeight: '72px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: 'rgba(17, 17, 17, 1)'
        }"
      >
        Why you should join chatter
      </h3>
      <p
        :style="{
          width: '1040px',
          height: '81px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: 'rgba(17, 17, 17, 1)'
        }"
      >
        Our goal is to make writers and readers see our platform as their next heaven for blogging,
        ensuring ease in interactions, connecting with like-minded peers, have access to favorite
        content based on interests and able to communicate your great ideas with people
      </p>
    </div>
    <div class="why2">
      <div class="why21">
        <div
          :style="{
            backgroundColor: 'rgba(214, 209, 248, 0.2)',
            width: '92px',
            height: '88px',
            top: '48px',
            left: '18px'
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :style="{ width: '92px', height: '88px', top: '1745px', left: '215px' }"
          >
            <path fill="currentColor" d="M4 2H2v26a2 2 0 0 0 2 2h26v-2H4Z" />
            <path
              fill="currentColor"
              d="M30 9h-7v2h3.59L19 18.59l-4.29-4.3a1 1 0 0 0-1.42 0L6 21.59L7.41 23L14 16.41l4.29 4.3a1 1 0 0 0 1.42 0l8.29-8.3V16h2Z"
            />
          </svg>
        </div>
        <div :style="{ top: '1793px', left: '215px' }">
          <h4
            :style="{
              width: '106px',
              height: '36px',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '24px',
              fontWeight: '500',
              lineHeight: '36px',
              letterSpacing: '0em',
              textAlign: 'left',
              color: 'rgba(17, 17, 17, 1)',
              border: '1px rgba(98, 98, 98, 1)'
            }"
          >
            Analytics
          </h4>
          <p
            :style="{
              width: '254px',
              height: '135px',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '27px',
              letterSpacing: '0em',
              textAlign: 'left',
              color: 'rgba(98, 98, 98, 1)',
              border: '1px rgba(98, 98, 98, 1) '
            }"
          >
            Analytics to track the number of views, likes and comment and also analyze the
            performance of your articles over a period of time
          </p>
        </div>
      </div>
      <div class="why22">
        <div :style="{ width: '254px', height: '256px', top: '21px', left: '18px', gap: '12px' }">
          <div
            :style="{
              backgroundColor: 'rgba(214, 209, 248, 0.2)',
              width: '92px',
              height: '88px',
              top: '48px',
              left: '18px',
              border: '1px rgba(98, 98, 98, 1) '
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :style="{ width: '92px', height: '88px', top: '1745px', left: '580px' }"
            >
              <path
                fill="currentColor"
                d="M10 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-8 4.5A2.5 2.5 0 0 1 4.5 13h6.375a5.488 5.488 0 0 0-.375 2c0 1.86.923 3.505 2.337 4.5H10.5a4 4 0 0 0-3.547 2.15c-1.916-.493-3.142-1.452-3.899-2.54C2 17.595 2 16.026 2 15.75zm23.047 6.15c1.916-.493 3.142-1.452 3.899-2.54C30 17.595 30 16.025 30 15.75v-.25a2.5 2.5 0 0 0-2.5-2.5h-6.375c.242.62.375 1.294.375 2c0 1.86-.923 3.505-2.337 4.5H21.5a4 4 0 0 1 3.547 2.15M26 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0M8 23.5a2.5 2.5 0 0 1 2.5-2.5h11a2.5 2.5 0 0 1 2.5 2.5v.25c0 .275 0 1.845-1.054 3.36C21.846 28.691 19.756 30 16 30c-3.755 0-5.846-1.309-6.946-2.89C8 25.595 8 24.026 8 23.75zm8-4.5a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
              />
            </svg>
          </div>
          <div :style="{ top: '1793px', left: '580px' }">
            <h4
              :style="{
                width: '211px',
                height: '36px',
                fontFamily: '\'DM Sans\', sans-serif',
                fontSize: '24px',
                fontWeight: '500',
                lineHeight: '36px',
                letterSpacing: '0em',
                textAlign: 'left',
                color: 'rgba(98, 98, 98, 1)',
                border: '1px rgba(98, 98, 98, 1) '
              }"
            >
              Social interactions
            </h4>
            <p
              :style="{
                width: '254px',
                height: '108px',
                fontFamily: '\'DM Sans\', sans-serif',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '27px',
                letterSpacing: '0em',
                textAlign: 'left',
                color: 'rgba(98, 98, 98, 1)',
                border: '1px rgba(98, 98, 98, 1) '
              }"
            >
              Users on the platform can interact with posts they like, comment and engage in
              discussions
            </p>
          </div>
        </div>
      </div>
      <div class="why23">
        <div :style="{ width: '254px', height: '229px', top: '14px', left: '19px' }">
          <div
            :style="{
              width: '92px',
              height: '88px',
              top: '1745px',
              left: '940px',
              border: '1px rgba(98, 98, 98, 1) '
            }"
          >
            <svg
              fill="#000000"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 329.008 329.008"
              xml:space="preserve"
              width="67px"
              height="67px"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <g>
                      <rect x="98.837" y="192.998" width="131.334" height="15"></rect>
                      <rect x="98.837" y="170.161" width="109.333" height="15"></rect>
                      <rect x="98.837" y="147.324" width="131.334" height="15"></rect>
                      <rect x="116.97" y="75.004" width="95.07" height="15"></rect>
                      <rect x="136.559" y="287.258" width="55.891" height="15"></rect>
                      <path
                        d="M249.687,0H79.323c-15.164,0-27.5,12.337-27.5,27.5v274.008c0,15.163,12.336,27.5,27.5,27.5h170.363 c15.164,0,27.5-12.337,27.5-27.5V27.5C277.187,12.337,264.85,0,249.687,0z M249.687,314.008H79.323 c-6.893,0-12.5-5.607-12.5-12.5V27.5c0-6.893,5.607-12.5,12.5-12.5h170.363c6.893,0,12.5,5.607,12.5,12.5v274.008h0.001 C262.187,308.401,256.58,314.008,249.687,314.008z"
                      ></path>
                      <path
                        d="M247.273,36.307H81.737c-4.142,0-7.5,3.357-7.5,7.5v228.197c0,4.143,3.358,7.5,7.5,7.5h165.536 c4.142,0,7.5-3.357,7.5-7.5V43.807C254.773,39.664,251.415,36.307,247.273,36.307z M239.773,264.504H89.237V51.307h150.536 V264.504z"
                      ></path>
                      <rect x="98.837" y="238.672" width="81.333" height="15"></rect>
                      <rect x="98.837" y="215.835" width="131.334" height="15"></rect>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div :style="{ top: '1793px', left: '940px' }">
            <h3
              :style="{
                width: '194px',
                height: '36px',
                fontFamily: '\'DM Sans\', sans-serif',
                fontSize: '24px',
                fontWeight: '500',
                lineHeight: '36px',
                letterSpacing: '0em',
                textAlign: 'left',
                color: 'rgba(98, 98, 98, 1)',
                border: '1px rgba(17, 17, 17, 1) '
              }"
            >
              Content creation
            </h3>
            <p
              :style="{
                width: '254px',
                height: '81px',
                fontFamily: '\'DM Sans\', sans-serif',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '27px',
                letterSpacing: '0em',
                textAlign: 'left',
                color: 'rgba(98, 98, 98, 1)',
                border: '1px rgba(17, 17, 17, 1) '
              }"
            >
              Write nice and appealing with our in-built markdown, a rich text editor
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="user">
    <div>
      <img
        src="../assets/images/user-image.jpeg"
        alt=""
        :style="{
          width: '300px',
          height: '291px',
          top: '99px',
          position: 'absolute',
          left: '53px',
          borderRadius: '50%'
        }"
      />
    </div>
    <div class="details">
      <div class="details1">
        <p
          :style="{
            width: '924px',
            height: '81px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '27px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: 'rgba(17, 17, 17, 1)'
          }"
        >
          "Chatter has become an integral part of my online experience. As a user of this incredible
          blogging platform, I have discovered a vibrant community of individuals who are passionate
          about sharing their ideas and engaging in thoughtful discussions.”
        </p>
        <p
          :style="{
            width: '500px',
            height: '48px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '36px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: 'rgba(17, 17, 17, 1)'
          }"
        >
          Adebobola Muhydeen,
          <span
            :style="{
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '27px'
            }"
          >
            Software developer at Apple</span
          >
        </p>
      </div>
      <div class="button">
        <button
          @click="handleJoin"
          :style="{
            border: 'none',
            top: '14.5px',
            left: '24.5px',
            backgroundColor: 'rgba(84, 62, 224, 1)',
            color: 'rgba(255, 255, 255, 1)',
            position: 'absolute',
            height: '27px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: '27px',
            letterSpacing: '0em',
            textAlign: 'center'
          }"
        >
          Join chatter
        </button>
      </div>
    </div>
  </div>
  <div class="parent-u">
    <div class="child1">
      <div class="child11">
        <img
          src="../assets/images/grace-ikpang.jpeg"
          alt=""
          :style="{
            width: '154px',
            height: '158px',
            borderRadius: '50%',
            backgroundColor: '(217, 217, 217, 1)'
          }"
        />
        <img
          src="../assets/images/tobi-ogunniyi.jpeg"
          alt=""
          :style="{
            width: '154px',
            height: '158px',
            top: '254px',
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: '(217, 217, 217, 1)'
          }"
        />
      </div>
      <div>
        <img
          src="../assets/images/adebola-muyideen.jpeg"
          alt=""
          :style="{
            width: '154px',
            height: '158px',
            top: '127px',
            left: '198px',
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: '(217, 217, 217, 1)'
          }"
        />
      </div>
    </div>

    <div class="child2">
      <div class="child21">
        <p
          :style="{
            width: '655px',
            height: '144px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '48px',
            fontWeight: '700',
            lineHeight: '72px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: 'rgba(17, 17, 17, 1)'
          }"
        >
          Write, read and connect with great minds on chatter
        </p>
        <p
          :style="{
            width: '594px',
            height: '54px',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '27px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: 'rgba(17, 17, 17, 1)'
          }"
        >
          Share people your great ideas, and also read write-ups based on your interests. connect
          with people of same interests and goals
        </p>
      </div>
      <div class="get-started-u">
        <button
          :style="{
            backgroundColor: 'rgba(84, 62, 224, 1)',
            border: 'none',
            color: 'rgba(255, 255, 255, 1)',
            height: '27px',
            top: '14.5px',
            left: '24px',
            position: 'absolute',
            fontFamily: '\'DM Sans\', sans-serif',
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: '27px',
            textAlign: 'center'
          }"
        >
          Get started
        </button>
      </div>
    </div>
  </div>
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
</template>

<script lang="ts">
export default {
  methods: {
    handleGetStarted() {
      this.$router.push('/post-screen1')
      console.log('button clicked')
    },
    handleJoin() {
      this.$router.push('/registration-page')
      console.log('button clicked')
    }
  }
}
</script>

<style scoped>
.welcome {
  width: 1440px;
  height: 764px;
  top: 82px;
  padding: 216px, 228px, 216px, 228px;
  position: absolute;
}
.welcome-image {
  background-image: url('../assets/images/landing-page.jpg');
  width: 1440px;
  height: 765px;
  padding: 216px, 228px, 216px, 228px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.welcome-note {
  width: 984px;
  height: 332px;
  top: 216px;
  left: 228px;
  padding: 0px, 0px, 74px, 0px;
  gap: 36px;
  position: relative;
}
.welcome-note1 {
  width: 984px;
  height: 240px;
  gap: 24px;
}
.welcome-note01 {
  width: 984px;
  height: 144px;
  font-family: 'DM Sans', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(255, 255, 255, 1);
}
.welcome-note02 {
  width: 740px;
  height: 72px;
  font-family: DM Sans;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(255, 255, 255, 1);
}
.get-started {
  width: 157px;
  height: 56px;
  padding: 8px, 16px, 8px, 16px;
  border-radius: 8px;
  gap: 8px;
  margin-top: 30px;
  background-color: rgba(84, 62, 224, 1);
  position: absolute;
}
.about-page {
  width: 1296px;
  height: 404px;
  top: 959px;
  left: 72px;
  gap: 84px;
  display: flex;
  position: absolute;
}
.about-page-image {
  width: 1186px;
  height: 268px;
  gap: 24px;
  display: flex;
  flex-direction: row;
}
.about-text {
  width: 686px;
  height: 268px;
  gap: 34px;
  /* position: relative; */
}
.why {
  width: 1040px;
  height: 555px;
  top: 1459px;
  left: 200px;
  gap: 70px;
  position: absolute;
  display: flex;
  flex-direction: column;
}
.why1 {
  width: 1, 040px;
  height: 177px;
  gap: 24px;
}
.why2 {
  width: 1, 014px;
  height: 324px;
  gap: 48px;
  display: flex;
  flex-direction: row;
  top: 1732px;
  /* position:fixed; */
}
.why21 {
  width: 306px;
  height: 324px;
  padding: 15px, 18px, 15px, 18px;
  border-radius: 8px;
  gap: 12px;
  border: 1px solid rgba(208, 208, 208, 1);
}
.why22 {
  width: 306px;
  height: 324px;
  padding: 21px, 34px, 47px, 18px;
  border-radius: 8px;
  border: 1px solid rgba(208, 208, 208, 1);
  color: rgba(208, 208, 208, 1);
}
.why23 {
  width: 306px;
  height: 324px;
  padding: 21px, 34px, 47px, 18px;
  border-radius: 8px;
  border: 1px solid rgba(208, 208, 208, 1);
  color: rgba(208, 208, 208, 1);
}
.user {
  width: 1440px;
  height: 492px;
  top: 2121px;
  position: absolute;
  background: rgba(255, 237, 204, 0.5);
  display: flex;
  flex-direction: row;
}
.details {
  width: 924px;
  height: 257px;
  top: 93px;
  left: 440px;
  gap: 24px;
  position: absolute;
  display: flex;
  flex-direction: column;
}
.details1 {
  width: 924px;
  height: 177px;
  gap: 48px;
}
.button {
  width: 157px;
  height: 56px;
  padding: 8px, 16px, 8px, 16px;
  border-radius: 8px;
  gap: 8px;
  background: rgba(84, 62, 224, 1);
  position: absolute;
  margin-top: 175px;
}
.parent-u {
  width: 1, 127px;
  height: 412px;
  top: 2709px;
  left: 156px;
  gap: 120px;
  position: absolute;
  display: flex;
  flex-direction: row;
}
.child1 {
  width: 352px;
  height: 412px;
  gap: 44px;
  display: flex;
  flex-direction: row;
}
.child11 {
  width: 154px;
  height: 412px;
  gap: 96px;
  display: flex;
  flex-direction: column;
}
.child2 {
  width: 655px;
  height: 310px;
  gap: 32px;
  display: flex;
  flex-direction: column;
}
.child21 {
  width: 655px;
  height: 222px;
  gap: 24px;
}
.get-started-u {
  width: 157px;
  height: 56px;
  padding: 8px, 16px, 8px, 16px;
  border-radius: 8px;
  gap: 8px;
  margin-top: 30px;
  background-color: rgba(84, 62, 224, 1);
  position: absolute;
  margin-top: 320px;
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
</style>
