<template>
  <div
    class="parent"
    :style="{
      width: '1440px',
      height: '941px',
      backgroundColor: 'rgba(255, 255,255,1)',
      display: 'flex',
      flexDirection: 'row'
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
            <div
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
            </div>
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
            <div
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
            </div>
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
            <div
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
            </div>
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
            <div
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
            </div>
          </div>
        </div>
        <div :style="{ width: '167px', height: '42px', gap: '12px' }">
          <div></div>
          <div
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
          </div>
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
        <div
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
        </div>
        <div
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
        </div>
        <div
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
        </div>
        <div
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
        </div>
        <div
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
        </div>
      </div>
      <div
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
      </div>
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
            <div
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
            </div>
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
          <div
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
          </div>
        </div>
      </div>
      <button
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
    <div
      :style="{ display: 'flex', flexDirection: 'column', left: ' 268px', position: 'absolute' }"
    >
      <div
        :style="{
          width: '1171px',
          height: '66px',
          gap: '12px',
          border: '1px solid rgba(208,208,208,1)',
          left: ' 268px',
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row'
        }"
      >
        <div
          :style="{
            width: '84px',
            height: '48px',
            gap: '12px',
            top: '9px',
            left: ' 958px',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column'
          }"
        >
          <div :style="{ width: '24px', height: '24px' }">
            <div
              :style="{
                width: '24px',
                height: '24px',
                top: '2px',
                left: '4.42px',
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
              }"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M15 19.25C15 20.0456 14.6839 20.8087 14.1213 21.3713C13.5587 21.9339 12.7956 22.25 12 22.25C11.2044 22.25 10.4413 21.9339 9.87869 21.3713C9.31608 20.8087 9 20.0456 9 19.25"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M5.58096 18.25C5.09151 18.1461 4.65878 17.8626 4.36813 17.4553C4.07748 17.048 3.95005 16.5466 4.01098 16.05L5.01098 7.93998C5.2663 6.27263 6.11508 4.75352 7.40121 3.66215C8.68734 2.57077 10.3243 1.98054 12.011 1.99998V1.99998C13.6977 1.98054 15.3346 2.57077 16.6207 3.66215C17.9069 4.75352 18.7557 6.27263 19.011 7.93998L20.011 16.05C20.0723 16.5452 19.9462 17.0454 19.6576 17.4525C19.369 17.8595 18.9386 18.144 18.451 18.25C14.2186 19.2445 9.81332 19.2445 5.58096 18.25V18.25Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div :style="{ width: '48px', height: '48px' }">
            <img
              src="https://s3-alpha-sig.figma.com/img/80a2/f0d9/4cd112f12b18cc351a0d65cc6d9d59bf?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OIYql2e8wYdwDCdygciPIx3OmKXR95yvCIBtGHb0bdQxILe5k14ATkGeh~9OnTGWNsfZ8LeeHK3Gijv6Ks5YHhKVVbVoomrPgTv1dg6CDO~z9elwx20lTBsYDutT6twhRLmhfSGPcc6oFM68y3S5uLEGu1sqSWCWFc4ObC5S5tRgAXQBnEI9USIcTrRzVTygnKIfKgiXXjyqWnoyCP~bOr83UBAKU1ChRAH2HmHPjhyy~NnaIaglvQjG5eAmUp1bcb2hLkLp9vxfVjJWhO5YIBH5JzmY78KrHUNl1tWeaCEQg9gTjSo1nYHi9u~nSwgvkWiuWW~01HMoULGlckLtXA__"
              alt=""
              :style="{
                width: '52.68px',
                height: '51.34px',
                top: '-1.82px',
                left: '36px',
                position: 'absolute',
                borderRadius: '50%',
                backgroundColor: '(217, 217, 217, 1)'
              }"
            />
          </div>
        </div>
        <button
          :style="{
            width: '459px',
            height: '48px',
            gap: '24px',
            top: '9px',
            left: '310px',
            position: 'absolute',
            borderRadius: '8px',
            border: '1px solid rgba(208,208,208,1)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column'
          }"
        >
          <div
            :style="{
              width: '44.31px',
              height: '36.31px',
              gap: '8px',
              padding: '(8px,12px,8px,12px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              top: '5px',
              left: '20px',
              position: 'absolute'
            }"
          >
            <svg
              fill="#000000"
              height="20.31px"
              width="20.31px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 488.4 488.4"
              xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path
                      d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <input
            type="text"
            placeholder="search chatter"
            :style="{
              width: '122px',
              height: '27px',
              top: '9px',
              left: '60px',
              position: 'absolute',
              textAlign: 'center',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '27px',
              letterSpacing: '0em',
              border: 'none'
            }"
          />
        </button>
      </div>
      <div
        :style="{
          width: '1076px',
          height: '803px',
          top: '96px',
          left: '292px',
          position: 'absolute',
          borderRadius: '8px',
          border: '1px soid rgba (208,208,208,1)',
          borderStyle: 'solid',
          display: 'flex',
          flexDirection: 'row'
        }"
      >
        <div
          :style="{
            width: '374px',
            height: '132px',
            gap: '38px',
            top: '133px',
            left: '76px',
            position: 'absolute',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'row'
          }"
        >
          <button
            :style="{
              width: '60px',
              height: '60px',
              border: '1px solid rgba(208,208,208,1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around'
            }"
          >
            <svg
              viewBox="0 0 24 24"
              height="38.92px"
              width="37.89px"
              top="46.54px"
              left="11.05px"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M6 12h6V6h1v6h6v1h-6v6h-1v-6H6z"></path>
                <path fill="none" d="M0 0h24v24H0z"></path>
              </g>
            </svg>
          </button>
          <div :style="{ width: '276px', height: '132px', gap: '12px' }">
            <input
              type="text"
              placeholder="Title"
              :style="{
                width: '103px',
                height: '72px',
                textAlign: 'center',
                fontFamily: '\'DM Sans\', sans-serif',
                fontSize: '48px',
                fontWeight: '700',
                lineHeight: '72px',
                letterSpacing: '0em',
                color: 'rgba(208,208,208,1)'
              }"
            />
            <input
              type="text"
              placeholder="Write a post............."
              :style="{
                width: '276px',
                height: '48px',
                textAlign: 'center',
                fontFamily: '\'DM Sans\', sans-serif',
                fontSize: '32px',
                fontWeight: '500',
                lineHeight: '48px',
                letterSpacing: '0em',
                color: 'rgba(208,208,208,1)'
              }"
            />
          </div>
        </div>
        <div class="publish">
          <button
            type="button"
            @click="handlePublish"
            :style="{
              backgroundColor: 'rgba(84, 62, 224, 0.5)',
              border: 'none',
              color: 'rgba(255, 255, 255, 1)',
              height: '24px',
              top: '14.5px',
              left: '35px',
              position: 'absolute',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              lineHeight: '24px',
              textAlign: 'center'
            }"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const handlePublish = () => {
  router.push('/post-screen2')
}
// export default {
//     methods: {

//         handlePublish (){
//             this.$router.push("/post-screen2");
//         },
//     }
// }
</script>

<style scoped>
.publish {
  width: 145px;
  height: 56px;
  padding: 8px, 16px, 8px, 16px;
  border-radius: 8px;
  gap: 380px;
  top: 36px;
  left: 787px;
  background-color: rgba(84, 62, 224, 1);
  position: absolute;
}
</style>
