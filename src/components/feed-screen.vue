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
        type="button"
        @click="handleLogout"
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
                left: '4.42px',
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                top: '5px'
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
          display: 'flex',
          flexDirection: 'row'
        }"
      >
        <div
          :style="{
            width: '853px',
            height: '87px',
            top: '22px',
            left: '111px',
            position: 'absolute',
            gap: '380px',
            display: 'flex',
            flexDirection: 'row'
          }"
        >
          <div
            :style="{
              width: '296px',
              height: '87px',
              gap: '12px',
              display: 'flex',
              flexDirection: 'column'
            }"
          >
            <div
              :style="{
                width: '77px',
                height: '48px',
                textAlign: 'center',
                fontFamily: '\'DM Sans\', sans-serif',
                fontSize: '32px',
                fontWeight: '500',
                lineHeight: '48px',
                letterSpacing: '0em',
                color: 'rgba(17,17,17,1)'
              }"
            >
              FEED
            </div>
            <div
              :style="{
                width: '296px',
                height: '27px',
                textAlign: 'center',
                top: '48px',
                position: 'absolute',
                fontFamily: '\'DM Sans\', sans-serif',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '27px',
                letterSpacing: '0em',
                color: 'rgba(98,98,98,1)'
              }"
            >
              Explore different content you’d love
            </div>
          </div>
          <div class="publish">
            <button
              type="button"
              @click="handlePostContent"
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
              Post a content
            </button>
          </div>
        </div>
        <div
          :style="{
            width: '854px',
            height: '80px',
            top: '158px',
            left: '110px',
            position: 'absolute',
            borderRadius: '8px',
            border: '1px soid rgba (208,208,208,1)'
          }"
        >
          <div
            :style="{
              width: '746px',
              height: '58px',
              top: '22px',
              left: '51px',
              position: 'absolute',
              gap: '240px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }"
          >
            <div :style="{ gap: '16px', display: 'flex', flexDirection: 'column' }">
              <div
                :style="{
                  width: '84px',
                  height: '36px',
                  textAlign: 'center',
                  fontFamily: '\'DM Sans\', sans-serif',
                  fontSize: '24px',
                  fontWeight: '500',
                  lineHeight: '36px',
                  letterSpacing: '0em',
                  color: 'rgba(98,98,98,1)'
                }"
              >
                For you
              </div>
              <div
                :style="{ width: '84px', height: '6px', backgroundColor: 'rgba(84,62,224,1)' }"
              ></div>
            </div>
            <div :style="{ gap: '16px', display: 'flex', flexDirection: 'column' }">
              <div
                :style="{
                  width: '102px',
                  height: '36px',
                  textAlign: 'center',
                  fontFamily: '\'DM Sans\', sans-serif',
                  fontSize: '24px',
                  fontWeight: '500',
                  lineHeight: '36px',
                  letterSpacing: '0em',
                  color: 'rgba(17,17,17,1)'
                }"
              >
                Featured
              </div>
              <div
                :style="{ width: '102px', height: '6px', backgroundColor: 'rgba(84,62,224,1)' }"
              ></div>
            </div>
            <div :style="{ gap: '16px', display: 'flex', flexDirection: 'column' }">
              <div
                :style="{
                  width: '80px',
                  height: '36px',
                  textAlign: 'center',
                  fontFamily: '\'DM Sans\', sans-serif',
                  fontSize: '24px',
                  fontWeight: '500',
                  lineHeight: '36px',
                  letterSpacing: '0em',
                  color: 'rgba(17,17,17,1)'
                }"
              >
                Recent
              </div>
              <div
                :style="{ width: '80px', height: '6px', backgroundColor: 'rgba(84,62,224,1)' }"
              ></div>
            </div>
          </div>
        </div>
        <div
          :style="{
            width: '854px',
            height: '1952px',
            top: '238px',
            left: '111px',
            position: 'absolute',
            borderRadius: '8px',
            border: '1px soid rgba (208,208,208,1)'
          }"
        >
          <div
            :style="{
              width: '620px',
              height: '610px',
              top: '30px',
              left: '44px',
              gap: '12px',
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column'
            }"
          >
            <div
              class="user-details"
              :style="{
                width: '620px',
                height: '574px',
                gap: '12px',
                display: 'flex',
                flexDirection: 'row'
              }"
            >
              <div
                class="detail"
                :style="{
                  width: '620px',
                  height: '320px',
                  gap: '24px',
                  display: 'flex',
                  flexDirection: 'column'
                }"
              >
                <div
                  class="names"
                  :style="{
                    width: '526px',
                    height: '188px',
                    gap: '12px',
                    display: 'flex',
                    flexDirection: 'column'
                  }"
                >
                  <div
                    class="name-date"
                    :style="{
                      width: '392px',
                      height: '96px',
                      gap: '12px',
                      display: 'flex',
                      flexDirection: 'row'
                    }"
                  >
                    <img
                      src="https://s3-alpha-sig.figma.com/img/f603/cba7/2f8cbc49af324b24e1f943af6ab3aac4?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FmeGUj~DorYbOw5jO4riZC8MxIK~Lt3TJrXvZyV8tG5nUNjcotBrr4Qdf4jHfdxWFE2ZPHzArOQ~DuuinI~FxF2dfkixh1K7cW1CeVjmt6ckDRD-rI16ExK19MCdSNMPuHwoYGngpSpuPXXln603uKMTU0ezaeKwYaN4aOjltP-s1DVXQ2LxekXDGosAMiGfpyLdluiqpidDb4YwbdOanlzIsW5LwR6JY4VWUM1fucX-RMuBZr95wWY8Vw10fMqQZdOXDmc0zwvvm-i3jHx~ZbiYzSQzJINPi3ITRnQ1MPpifCercjwBgZ8hMMhTct8wP9swpzkr8t5eIM02SJqI4Q__"
                      alt=""
                      :style="{ width: '96px', height: '96px', borderRadius: '50%' }"
                    />
                    <div
                      :style="{
                        width: '284px',
                        height: '71px',
                        gap: '8px',
                        display: 'flex',
                        flexDirection: 'column'
                      }"
                    >
                      <div
                        class="name"
                        :style="{
                          width: '151px',
                          height: '36px',
                          textAlign: 'left',
                          fontFamily: '\'DM Sans\', sans-serif',
                          fontSize: '24px',
                          fontWeight: '500',
                          lineHeight: '36px',
                          letterSpacing: '0em',
                          color: 'rgba(17,17,17,1)'
                        }"
                      >
                     Grace Ikpang
                      </div>
                      <div
                        class="date-occupation"
                        :style="{
                          width: '284px',
                          height: '27px',
                          gap: '8px',
                          display: 'flex',
                          flexDirection: 'row'
                        }"
                      >
                        <div
                          class="occupation"
                          :style="{
                            width: '143px',
                            height: '27px',
                            textAlign: 'left',
                            fontFamily: '\'DM Sans\', sans-serif',
                            fontSize: '18',
                            fontWeight: '400',
                            lineHeight: '27px',
                            letterSpacing: '0em',
                            color: 'rgba(17,17,17,1)'
                          }"
                        >
                          Product designer
                        </div>
                        <div
                          class="date"
                          :style="{
                            width: '133px',
                            height: '27px',
                            textAlign: 'center',
                            fontFamily: '\'DM Sans\', sans-serif',
                            fontSize: '18px',
                            fontWeight: '400',
                            lineHeight: '27px',
                            letterSpacing: '0em',
                            color: 'rgba(17,17,17,1)'
                          }"
                        >
                          .May 25th, 2023
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="title"
                    :style="{
                      width: '526px',
                      height: '80px',
                      gap: '8px',
                      display: 'flex',
                      flexDirection: 'column'
                    }"
                  >
                    <div
                      class="post-title"
                      :style="{
                        width: '526px',
                        height: '48px',
                        textAlign: 'left',
                        fontFamily: '\'DM Sans\', sans-serif',
                        fontSize: '32px',
                        fontWeight: '500',
                        lineHeight: '48px',
                        letterSpacing: '0em',
                        color: 'rgba(17,17,17,1)'
                      }"
                    >
                      Starting out as a Product designer
                    </div>
                    <div>
                      <div
                        :style="{
                          width: '24px',
                          height: '24px',
                          top: '',
                          left: '1.5px',
                          position: 'absolute'
                        }"
                      ></div>
                      <div
                        :style="{
                          width: '94px',
                          height: '24px',
                          textAlign: 'left',
                          fontFamily: '\'DM Sans\', sans-serif',
                          fontSize: '16px',
                          fontWeight: '100',
                          lineHeight: '24px',
                          letterSpacing: '0em',
                          color: 'rgba(98,98,98,1)'
                        }"
                      >
                        10 mins read
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="content"
                  :style="{
                    width: '620px',
                    height: '108px',
                    textAlign: 'left',
                    fontFamily: '\'DM Sans\', sans-serif',
                    fontSize: '18px',
                    fontWeight: '400',
                    lineHeight: '27px',
                    letterSpacing: '0em',
                    color: 'rgba(98,98,98,1)'
                  }"
                >
                  Embarking on a journey as a product designer can be an exhilarating and fulfilling
                  experience. As a profession that bridges the realms of art, technology, and
                  problem-solving, product design offers an opportunity to shape the way people
                  interact with the world around them.
                </div>
              </div>
            </div>
            <div
              class="image-video"
              :style="{
                width: '612px',
                height: '242px',
                backgroundColor: 'rgba(208,208,208,1)',
                top: '330px',
                position: 'absolute'
              }"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/a350/03c9/7071cf963d13ddf4aa425ba18e0a8881?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fsWyXHQ2FcgsTovuU92VJPBMwPjWSZpavF2uLE-4PmP~WpIzYMdnpZ7LNeKEymIwjul8z5QtLqW3Z4sRu4xpWepKeVTlT9b-yY-FcMaFM2cP6wLSdQRI6i~zaU2f~iF~YWcjzud~7CuEe3ZlxKH3F15qH9kwCcmevHASpUNstGv7xKk1DVsqvZPmNQ8E1orObefQ4ICnUfXTKmZ0AxxxsUBtT15ZT3Jx3DKjy9Kd~8Qh80cHVMxOGpedWXi~gdMSJAtJ9C6XvTiivs1ClYRdlMwlCYU4NuuQw7kFvnNDRpOnyDWqQJ-pWQTXGKdf3qQiguGNj3FZumKUC0wI3P8qCQ__"
                :style="{ width: '612px', height: '242px', borderRadius: '8px' }"
              />
            </div>
          </div>
          <div
            class="analytics"
            :style="{
              width: '612px',
              height: '24px',
              top: '620px',
              left: '44px',
              position: 'absolute',
              display: 'flex',
              flexDirection: 'row',
              gap: '185px'
            }"
          >
            <div
              :style="{
                width: '68px',
                height: '24px',
                gap: '12px',
                display: 'flex',
                flexDirection: 'row'
              }"
            >
              <button :style="{ border: 'none' }">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                  xml:space="preserve"
                >
                  <defs></defs>
                  <g
                    style="
                      stroke: none;
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: none;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 3 90 c -0.784 0 -1.55 -0.307 -2.122 -0.879 c -0.799 -0.799 -1.082 -1.979 -0.73 -3.054 l 6.005 -18.361 C 2.124 60.827 0 53.007 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 c 0 24.813 -20.187 45 -45 45 c -8.007 0 -15.826 -2.123 -22.707 -6.153 L 3.933 89.852 C 3.626 89.951 3.312 90 3 90 z M 22.671 77.566 c 0.559 0 1.114 0.156 1.598 0.461 C 30.479 81.935 37.648 84 45 84 c 21.505 0 39 -17.495 39 -39 S 66.505 6 45 6 S 6 23.495 6 45 c 0 7.353 2.065 14.521 5.972 20.73 c 0.475 0.755 0.59 1.683 0.313 2.53 L 7.69 82.31 l 14.049 -4.595 C 22.043 77.615 22.358 77.566 22.671 77.566 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(0, 0, 0);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 61.04 49 c -1.05 0 -2.08 -0.431 -2.83 -1.17 c -0.18 -0.19 -0.351 -0.391 -0.49 -0.61 c -0.15 -0.22 -0.27 -0.45 -0.37 -0.689 c -0.1 -0.24 -0.18 -0.49 -0.229 -0.75 c -0.051 -0.26 -0.08 -0.52 -0.08 -0.78 c 0 -1.05 0.43 -2.08 1.17 -2.83 c 0.75 -0.74 1.78 -1.17 2.83 -1.17 c 1.06 0 2.09 0.43 2.83 1.17 c 0.739 0.75 1.17 1.78 1.17 2.83 c 0 1.05 -0.431 2.08 -1.17 2.83 C 63.13 48.569 62.1 49 61.04 49 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(0, 0, 0);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 45 49 c -1.05 0 -2.08 -0.431 -2.83 -1.17 c -0.18 -0.19 -0.35 -0.391 -0.5 -0.61 c -0.14 -0.22 -0.26 -0.45 -0.36 -0.689 c -0.1 -0.24 -0.18 -0.49 -0.23 -0.75 C 41.03 45.52 41 45.26 41 45 c 0 -1.05 0.43 -2.08 1.17 -2.83 c 0.93 -0.93 2.31 -1.35 3.61 -1.09 c 0.26 0.05 0.51 0.13 0.75 0.23 c 0.239 0.1 0.47 0.22 0.689 0.36 c 0.22 0.15 0.42 0.32 0.61 0.5 C 48.569 42.92 49 43.95 49 45 c 0 1.05 -0.431 2.08 -1.17 2.83 C 47.08 48.569 46.05 49 45 49 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(0, 0, 0);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 28.96 49 c -1.05 0 -2.09 -0.431 -2.83 -1.17 c -0.18 -0.19 -0.35 -0.391 -0.5 -0.61 c -0.14 -0.22 -0.27 -0.45 -0.36 -0.689 c -0.1 -0.24 -0.18 -0.49 -0.23 -0.75 c -0.05 -0.26 -0.08 -0.52 -0.08 -0.78 c 0 -1.05 0.43 -2.08 1.17 -2.83 c 0.93 -0.93 2.31 -1.35 3.61 -1.09 c 0.25 0.05 0.51 0.13 0.75 0.23 c 0.24 0.1 0.47 0.22 0.69 0.36 c 0.22 0.15 0.42 0.32 0.61 0.5 c 0.74 0.75 1.17 1.78 1.17 2.83 c 0 1.05 -0.43 2.08 -1.17 2.83 C 31.04 48.569 30.01 49 28.96 49 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(0, 0, 0);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </button>
              <div
                :style="{
                  width: '32px',
                  height: '24px',
                  textAlign: 'center',
                  fontFamily: '\'DM Sans\', sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '24px',
                  letterSpacing: '0em',
                  color: 'rgba(98,98,98,1)'
                }"
              >
                0
              </div>
            </div>
            <div
              :style="{
                width: '57px',
                height: '24px',
                gap: '3px',
                display: 'flex',
                flexDirection: 'row'
              }"
            >
              <button @click="handleLikes" :style="{ border: 'none' }">
                <svg
                  height="24px"
                  width="24px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="-49.5 -49.5 594.00 594.00"
                  xml:space="preserve"
                  fill="#000000"
                  stroke="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        style="fill: #0c0d0d"
                        d="M362.96,14.24c-49.72,0-92.95,27.53-115.46,68.13v398.39C284.67,452.84,495,288.55,495,146.28 C495,73.36,435.88,14.24,362.96,14.24z"
                      ></path>
                      <path
                        style="fill: #0d0c0d"
                        d="M132.04,14.24C59.12,14.24,0,73.36,0,146.28c0,142.26,210.33,306.55,247.5,334.48V82.37 C224.99,41.77,181.76,14.24,132.04,14.24z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
              <div
                :style="{
                  width: '25px',
                  height: '24px',
                  textAlign: 'center',
                  fontFamily: '\'DM Sans\', sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '24px',
                  letterSpacing: '0em',
                  color: 'rgba(98,98,98,1)'
                }"
              >
                {{ like }}
              </div>
            </div>
            <div
              :style="{
                width: '250px',
                height: '24px',
                gap: '6px',
                display: 'flex',
                flexDirection: 'row'
              }"
            >
              <button :style="{ border: 'none' }">
                <svg
                  fill="#000000"
                  height="24px"
                  width="24px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g transform="translate(1 1)">
                      <g>
                        <g>
                          <path
                            d="M212.333,353.133h34.133h17.067h34.133h17.067h34.133h17.067h51.2h25.6c5.12,0,8.533-3.413,8.533-8.533 s-3.413-8.533-8.533-8.533h-25.6V148.333h-51.2V114.2h-68.267v59.733h-51.2v51.2h-34.133v-76.8h-68.267v51.2h-51.2v136.533h-25.6 c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h25.6h51.2h17.067h34.133H212.333z M400.067,165.4v170.667h-34.133 V165.4H400.067z M314.733,156.867V139.8c5.12,0,8.533-3.413,8.533-8.533h17.067c0,5.12,3.413,8.533,8.533,8.533v8.533v8.533 c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533V191c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533 v17.067c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533v17.067c-5.12,0-8.533,3.413-8.533,8.533 s3.413,8.533,8.533,8.533V293.4c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533v17.067 c-5.12,0-8.533,3.413-8.533,8.533h-17.067c0-5.12-3.413-8.533-8.533-8.533v-17.067c5.12,0,8.533-3.413,8.533-8.533 s-3.413-8.533-8.533-8.533v-17.067c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533V242.2 c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533v-17.067c5.12,0,8.533-3.413,8.533-8.533 S319.853,191,314.733,191v-17.067c5.12,0,8.533-3.413,8.533-8.533C323.267,160.28,319.853,156.867,314.733,156.867z M263.533,191 h34.133v145.067h-34.133V225.133V191z M246.467,242.2v93.867h-34.133V242.2H246.467z M109.933,336.067V216.6h34.133v119.467 H109.933z M161.133,336.067V199.533V165.4h34.133v59.733v110.933H161.133z"
                          ></path>
                          <path
                            d="M331.8,156.867c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533 S326.68,156.867,331.8,156.867z"
                          ></path>
                          <path
                            d="M331.8,191c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533 S326.68,191,331.8,191z"
                          ></path>
                          <path
                            d="M331.8,208.067c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 S336.92,208.067,331.8,208.067z"
                          ></path>
                          <path
                            d="M331.8,242.2c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 S336.92,242.2,331.8,242.2z"
                          ></path>
                          <path
                            d="M331.8,276.333c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 C340.333,279.747,336.92,276.333,331.8,276.333z"
                          ></path>
                          <path
                            d="M331.8,310.467c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 S336.92,310.467,331.8,310.467z"
                          ></path>
                          <path
                            d="M502.467,370.2h-25.6V105.667c0-14.507-11.093-25.6-25.6-25.6H58.733c-14.507,0-25.6,11.093-25.6,25.6V370.2h-25.6 c-5.12,0-8.533,3.413-8.533,8.533v25.6c0,14.507,11.093,25.6,25.6,25.6h460.8c14.507,0,25.6-11.093,25.6-25.6v-25.6 C511,373.613,507.587,370.2,502.467,370.2z M50.2,105.667c0-5.12,3.413-8.533,8.533-8.533h392.533 c5.12,0,8.533,3.413,8.533,8.533V370.2H323.267c-5.12,0-8.533,3.413-8.533,8.533v8.533H195.267v-8.533 c0-5.12-3.413-8.533-8.533-8.533H50.2V105.667z M493.933,404.333c0,5.12-3.413,8.533-8.533,8.533H24.6 c-5.12,0-8.533-3.413-8.533-8.533v-17.067h25.6H178.2v8.533c0,5.12,3.413,8.533,8.533,8.533h136.533 c5.12,0,8.533-3.413,8.533-8.533v-8.533h136.533h25.6V404.333z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <div
                :style="{
                  width: '85px',
                  height: '24px',
                  textAlign: 'center',
                  fontFamily: '\'DM Sans\', sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '24px',
                  letterSpacing: '0em',
                  color: 'rgba(98,98,98,1)'
                }"
              >
                2980 views
              </div>
            </div>
          </div>
          <div
            :style="{
              width: '620px',
              height: '610px',
              top: '695px',
              left: '44px',
              gap: '12px',
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column'
            }"
          >
            <div
              class="user-details"
              :style="{
                width: '620px',
                height: '574px',
                gap: '12px',
                display: 'flex',
                flexDirection: 'row'
              }"
            >
              <div
                class="detail"
                :style="{
                  width: '620px',
                  height: '320px',
                  gap: '24px',
                  display: 'flex',
                  flexDirection: 'column'
                }"
              >
                <div
                  class="names"
                  :style="{
                    width: '526px',
                    height: '188px',
                    gap: '12px',
                    display: 'flex',
                    flexDirection: 'column'
                  }"
                >
                  <div
                    class="name-date"
                    :style="{
                      width: '392px',
                      height: '96px',
                      gap: '12px',
                      display: 'flex',
                      flexDirection: 'row'
                    }"
                  >
                    <img
                      src="https://s3-alpha-sig.figma.com/img/f603/cba7/2f8cbc49af324b24e1f943af6ab3aac4?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FmeGUj~DorYbOw5jO4riZC8MxIK~Lt3TJrXvZyV8tG5nUNjcotBrr4Qdf4jHfdxWFE2ZPHzArOQ~DuuinI~FxF2dfkixh1K7cW1CeVjmt6ckDRD-rI16ExK19MCdSNMPuHwoYGngpSpuPXXln603uKMTU0ezaeKwYaN4aOjltP-s1DVXQ2LxekXDGosAMiGfpyLdluiqpidDb4YwbdOanlzIsW5LwR6JY4VWUM1fucX-RMuBZr95wWY8Vw10fMqQZdOXDmc0zwvvm-i3jHx~ZbiYzSQzJINPi3ITRnQ1MPpifCercjwBgZ8hMMhTct8wP9swpzkr8t5eIM02SJqI4Q__"
                      alt=""
                      :style="{ width: '96px', height: '96px', borderRadius: '50%' }"
                    />
                    <div
                      :style="{
                        width: '284px',
                        height: '71px',
                        gap: '8px',
                        display: 'flex',
                        flexDirection: 'column'
                      }"
                    >
                      <div
                        class="name"
                        :style="{
                          width: '151px',
                          height: '36px',
                          textAlign: 'left',
                          fontFamily: '\'DM Sans\', sans-serif',
                          fontSize: '24px',
                          fontWeight: '500',
                          lineHeight: '36px',
                          letterSpacing: '0em',
                          color: 'rgba(17,17,17,1)'
                        }"
                      >
                        Grace Ikpang
                      </div>
                      <div
                        class="date-occupation"
                        :style="{
                          width: '284px',
                          height: '27px',
                          gap: '8px',
                          display: 'flex',
                          flexDirection: 'row'
                        }"
                      >
                        <div
                          class="occupation"
                          :style="{
                            width: '143px',
                            height: '27px',
                            textAlign: 'left',
                            fontFamily: '\'DM Sans\', sans-serif',
                            fontSize: '18',
                            fontWeight: '400',
                            lineHeight: '27px',
                            letterSpacing: '0em',
                            color: 'rgba(17,17,17,1)'
                          }"
                        >
                          Product designer
                        </div>
                        <div
                          class="date"
                          :style="{
                            width: '133px',
                            height: '27px',
                            textAlign: 'center',
                            fontFamily: '\'DM Sans\', sans-serif',
                            fontSize: '18px',
                            fontWeight: '400',
                            lineHeight: '27px',
                            letterSpacing: '0em',
                            color: 'rgba(17,17,17,1)'
                          }"
                        >
                          .May 25th, 2023
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="title"
                    :style="{
                      width: '526px',
                      height: '80px',
                      gap: '8px',
                      display: 'flex',
                      flexDirection: 'column'
                    }"
                  >
                    <div
                      class="post-title"
                      :style="{
                        width: '526px',
                        height: '48px',
                        textAlign: 'left',
                        fontFamily: '\'DM Sans\', sans-serif',
                        fontSize: '32px',
                        fontWeight: '500',
                        lineHeight: '48px',
                        letterSpacing: '0em',
                        color: 'rgba(17,17,17,1)'
                      }"
                    >
                      Starting out as a Product designer
                    </div>
                    <div>
                      <div
                        :style="{
                          width: '24px',
                          height: '24px',
                          top: '',
                          left: '1.5px',
                          position: 'absolute'
                        }"
                      ></div>
                      <div
                        :style="{
                          width: '94px',
                          height: '24px',
                          textAlign: 'left',
                          fontFamily: '\'DM Sans\', sans-serif',
                          fontSize: '16px',
                          fontWeight: '100',
                          lineHeight: '24px',
                          letterSpacing: '0em',
                          color: 'rgba(98,98,98,1)'
                        }"
                      >
                        10 mins read
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="content"
                  :style="{
                    width: '620px',
                    height: '108px',
                    textAlign: 'left',
                    fontFamily: '\'DM Sans\', sans-serif',
                    fontSize: '18px',
                    fontWeight: '400',
                    lineHeight: '27px',
                    letterSpacing: '0em',
                    color: 'rgba(98,98,98,1)'
                  }"
                >
                  Embarking on a journey as a product designer can be an exhilarating and fulfilling
                  experience. As a profession that bridges the realms of art, technology, and
                  problem-solving, product design offers an opportunity to shape the way people
                  interact with the world around them.
                </div>
              </div>
            </div>
            <div
              class="image-video"
              :style="{
                width: '612px',
                height: '242px',
                backgroundColor: 'rgba(208,208,208,1)',
                top: '330px',
                position: 'absolute'
              }"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/a350/03c9/7071cf963d13ddf4aa425ba18e0a8881?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fsWyXHQ2FcgsTovuU92VJPBMwPjWSZpavF2uLE-4PmP~WpIzYMdnpZ7LNeKEymIwjul8z5QtLqW3Z4sRu4xpWepKeVTlT9b-yY-FcMaFM2cP6wLSdQRI6i~zaU2f~iF~YWcjzud~7CuEe3ZlxKH3F15qH9kwCcmevHASpUNstGv7xKk1DVsqvZPmNQ8E1orObefQ4ICnUfXTKmZ0AxxxsUBtT15ZT3Jx3DKjy9Kd~8Qh80cHVMxOGpedWXi~gdMSJAtJ9C6XvTiivs1ClYRdlMwlCYU4NuuQw7kFvnNDRpOnyDWqQJ-pWQTXGKdf3qQiguGNj3FZumKUC0wI3P8qCQ__"
                :style="{ width: '612px', height: '242px', borderRadius: '8px' }"
              />
            </div>
          </div>
          <div
            class="analytics"
            :style="{
              width: '612px',
              height: '24px',
              top: '1280px',
              left: '44px',
              position: 'absolute',
              display: 'flex',
              flexDirection: 'row',
              gap: '185px'
            }"
          >
            <div
              :style="{
                width: '68px',
                height: '24px',
                gap: '12px',
                display: 'flex',
                flexDirection: 'row'
              }"
            >
              <button :style="{ border: 'none' }">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                  xml:space="preserve"
                >
                  <defs></defs>
                  <g
                    style="
                      stroke: none;
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: none;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 3 90 c -0.784 0 -1.55 -0.307 -2.122 -0.879 c -0.799 -0.799 -1.082 -1.979 -0.73 -3.054 l 6.005 -18.361 C 2.124 60.827 0 53.007 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 c 0 24.813 -20.187 45 -45 45 c -8.007 0 -15.826 -2.123 -22.707 -6.153 L 3.933 89.852 C 3.626 89.951 3.312 90 3 90 z M 22.671 77.566 c 0.559 0 1.114 0.156 1.598 0.461 C 30.479 81.935 37.648 84 45 84 c 21.505 0 39 -17.495 39 -39 S 66.505 6 45 6 S 6 23.495 6 45 c 0 7.353 2.065 14.521 5.972 20.73 c 0.475 0.755 0.59 1.683 0.313 2.53 L 7.69 82.31 l 14.049 -4.595 C 22.043 77.615 22.358 77.566 22.671 77.566 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(0, 0, 0);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 61.04 49 c -1.05 0 -2.08 -0.431 -2.83 -1.17 c -0.18 -0.19 -0.351 -0.391 -0.49 -0.61 c -0.15 -0.22 -0.27 -0.45 -0.37 -0.689 c -0.1 -0.24 -0.18 -0.49 -0.229 -0.75 c -0.051 -0.26 -0.08 -0.52 -0.08 -0.78 c 0 -1.05 0.43 -2.08 1.17 -2.83 c 0.75 -0.74 1.78 -1.17 2.83 -1.17 c 1.06 0 2.09 0.43 2.83 1.17 c 0.739 0.75 1.17 1.78 1.17 2.83 c 0 1.05 -0.431 2.08 -1.17 2.83 C 63.13 48.569 62.1 49 61.04 49 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(0, 0, 0);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 45 49 c -1.05 0 -2.08 -0.431 -2.83 -1.17 c -0.18 -0.19 -0.35 -0.391 -0.5 -0.61 c -0.14 -0.22 -0.26 -0.45 -0.36 -0.689 c -0.1 -0.24 -0.18 -0.49 -0.23 -0.75 C 41.03 45.52 41 45.26 41 45 c 0 -1.05 0.43 -2.08 1.17 -2.83 c 0.93 -0.93 2.31 -1.35 3.61 -1.09 c 0.26 0.05 0.51 0.13 0.75 0.23 c 0.239 0.1 0.47 0.22 0.689 0.36 c 0.22 0.15 0.42 0.32 0.61 0.5 C 48.569 42.92 49 43.95 49 45 c 0 1.05 -0.431 2.08 -1.17 2.83 C 47.08 48.569 46.05 49 45 49 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(0, 0, 0);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 28.96 49 c -1.05 0 -2.09 -0.431 -2.83 -1.17 c -0.18 -0.19 -0.35 -0.391 -0.5 -0.61 c -0.14 -0.22 -0.27 -0.45 -0.36 -0.689 c -0.1 -0.24 -0.18 -0.49 -0.23 -0.75 c -0.05 -0.26 -0.08 -0.52 -0.08 -0.78 c 0 -1.05 0.43 -2.08 1.17 -2.83 c 0.93 -0.93 2.31 -1.35 3.61 -1.09 c 0.25 0.05 0.51 0.13 0.75 0.23 c 0.24 0.1 0.47 0.22 0.69 0.36 c 0.22 0.15 0.42 0.32 0.61 0.5 c 0.74 0.75 1.17 1.78 1.17 2.83 c 0 1.05 -0.43 2.08 -1.17 2.83 C 31.04 48.569 30.01 49 28.96 49 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(0, 0, 0);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </button>
              <div
                :style="{
                  width: '32px',
                  height: '24px',
                  textAlign: 'center',
                  fontFamily: '\'DM Sans\', sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '24px',
                  letterSpacing: '0em',
                  color: 'rgba(98,98,98,1)'
                }"
              >
                0
              </div>
            </div>
            <div
              :style="{
                width: '57px',
                height: '24px',
                gap: '3px',
                display: 'flex',
                flexDirection: 'row'
              }"
            >
              <button @click="handleLikes" :style="{ border: 'none' }">
                <svg
                  height="24px"
                  width="24px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="-49.5 -49.5 594.00 594.00"
                  xml:space="preserve"
                  fill="#000000"
                  stroke="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        style="fill: #0c0d0d"
                        d="M362.96,14.24c-49.72,0-92.95,27.53-115.46,68.13v398.39C284.67,452.84,495,288.55,495,146.28 C495,73.36,435.88,14.24,362.96,14.24z"
                      ></path>
                      <path
                        style="fill: #0d0c0d"
                        d="M132.04,14.24C59.12,14.24,0,73.36,0,146.28c0,142.26,210.33,306.55,247.5,334.48V82.37 C224.99,41.77,181.76,14.24,132.04,14.24z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
              <div
                :style="{
                  width: '25px',
                  height: '24px',
                  textAlign: 'center',
                  fontFamily: '\'DM Sans\', sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '24px',
                  letterSpacing: '0em',
                  color: 'rgba(98,98,98,1)'
                }"
              >
                {{ like }}
              </div>
            </div>
            <div
              :style="{
                width: '250px',
                height: '24px',
                gap: '6px',
                display: 'flex',
                flexDirection: 'row'
              }"
            >
              <button :style="{ border: 'none' }">
                <svg
                  fill="#000000"
                  height="24px"
                  width="24px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g transform="translate(1 1)">
                      <g>
                        <g>
                          <path
                            d="M212.333,353.133h34.133h17.067h34.133h17.067h34.133h17.067h51.2h25.6c5.12,0,8.533-3.413,8.533-8.533 s-3.413-8.533-8.533-8.533h-25.6V148.333h-51.2V114.2h-68.267v59.733h-51.2v51.2h-34.133v-76.8h-68.267v51.2h-51.2v136.533h-25.6 c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h25.6h51.2h17.067h34.133H212.333z M400.067,165.4v170.667h-34.133 V165.4H400.067z M314.733,156.867V139.8c5.12,0,8.533-3.413,8.533-8.533h17.067c0,5.12,3.413,8.533,8.533,8.533v8.533v8.533 c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533V191c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533 v17.067c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533v17.067c-5.12,0-8.533,3.413-8.533,8.533 s3.413,8.533,8.533,8.533V293.4c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533v17.067 c-5.12,0-8.533,3.413-8.533,8.533h-17.067c0-5.12-3.413-8.533-8.533-8.533v-17.067c5.12,0,8.533-3.413,8.533-8.533 s-3.413-8.533-8.533-8.533v-17.067c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533V242.2 c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533v-17.067c5.12,0,8.533-3.413,8.533-8.533 S319.853,191,314.733,191v-17.067c5.12,0,8.533-3.413,8.533-8.533C323.267,160.28,319.853,156.867,314.733,156.867z M263.533,191 h34.133v145.067h-34.133V225.133V191z M246.467,242.2v93.867h-34.133V242.2H246.467z M109.933,336.067V216.6h34.133v119.467 H109.933z M161.133,336.067V199.533V165.4h34.133v59.733v110.933H161.133z"
                          ></path>
                          <path
                            d="M331.8,156.867c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533 S326.68,156.867,331.8,156.867z"
                          ></path>
                          <path
                            d="M331.8,191c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533 S326.68,191,331.8,191z"
                          ></path>
                          <path
                            d="M331.8,208.067c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 S336.92,208.067,331.8,208.067z"
                          ></path>
                          <path
                            d="M331.8,242.2c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 S336.92,242.2,331.8,242.2z"
                          ></path>
                          <path
                            d="M331.8,276.333c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 C340.333,279.747,336.92,276.333,331.8,276.333z"
                          ></path>
                          <path
                            d="M331.8,310.467c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 S336.92,310.467,331.8,310.467z"
                          ></path>
                          <path
                            d="M502.467,370.2h-25.6V105.667c0-14.507-11.093-25.6-25.6-25.6H58.733c-14.507,0-25.6,11.093-25.6,25.6V370.2h-25.6 c-5.12,0-8.533,3.413-8.533,8.533v25.6c0,14.507,11.093,25.6,25.6,25.6h460.8c14.507,0,25.6-11.093,25.6-25.6v-25.6 C511,373.613,507.587,370.2,502.467,370.2z M50.2,105.667c0-5.12,3.413-8.533,8.533-8.533h392.533 c5.12,0,8.533,3.413,8.533,8.533V370.2H323.267c-5.12,0-8.533,3.413-8.533,8.533v8.533H195.267v-8.533 c0-5.12-3.413-8.533-8.533-8.533H50.2V105.667z M493.933,404.333c0,5.12-3.413,8.533-8.533,8.533H24.6 c-5.12,0-8.533-3.413-8.533-8.533v-17.067h25.6H178.2v8.533c0,5.12,3.413,8.533,8.533,8.533h136.533 c5.12,0,8.533-3.413,8.533-8.533v-8.533h136.533h25.6V404.333z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <div
                :style="{
                  width: '85px',
                  height: '24px',
                  textAlign: 'center',
                  fontFamily: '\'DM Sans\', sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '24px',
                  letterSpacing: '0em',
                  color: 'rgba(98,98,98,1)'
                }"
              >
                2980 views
              </div>
            </div>
          </div>
          <div
            :style="{
              width: '620px',
              height: '610px',
              top: '1360px',
              left: '44px',
              gap: '12px',
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column'
            }"
          >
            <div
              class="user-details"
              :style="{
                width: '620px',
                height: '574px',
                gap: '12px',
                display: 'flex',
                flexDirection: 'row'
              }"
            >
              <div
                class="detail"
                :style="{
                  width: '620px',
                  height: '320px',
                  gap: '24px',
                  display: 'flex',
                  flexDirection: 'column'
                }"
              >
                <div
                  class="names"
                  :style="{
                    width: '526px',
                    height: '188px',
                    gap: '12px',
                    display: 'flex',
                    flexDirection: 'column'
                  }"
                >
                  <div
                    class="name-date"
                    :style="{
                      width: '392px',
                      height: '96px',
                      gap: '12px',
                      display: 'flex',
                      flexDirection: 'row'
                    }"
                  >
                    <img
                      src="https://s3-alpha-sig.figma.com/img/f603/cba7/2f8cbc49af324b24e1f943af6ab3aac4?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FmeGUj~DorYbOw5jO4riZC8MxIK~Lt3TJrXvZyV8tG5nUNjcotBrr4Qdf4jHfdxWFE2ZPHzArOQ~DuuinI~FxF2dfkixh1K7cW1CeVjmt6ckDRD-rI16ExK19MCdSNMPuHwoYGngpSpuPXXln603uKMTU0ezaeKwYaN4aOjltP-s1DVXQ2LxekXDGosAMiGfpyLdluiqpidDb4YwbdOanlzIsW5LwR6JY4VWUM1fucX-RMuBZr95wWY8Vw10fMqQZdOXDmc0zwvvm-i3jHx~ZbiYzSQzJINPi3ITRnQ1MPpifCercjwBgZ8hMMhTct8wP9swpzkr8t5eIM02SJqI4Q__"
                      alt=""
                      :style="{ width: '96px', height: '96px', borderRadius: '50%' }"
                    />
                    <div
                      :style="{
                        width: '284px',
                        height: '71px',
                        gap: '8px',
                        display: 'flex',
                        flexDirection: 'column'
                      }"
                    >
                      <div
                        class="name"
                        :style="{
                          width: '151px',
                          height: '36px',
                          textAlign: 'left',
                          fontFamily: '\'DM Sans\', sans-serif',
                          fontSize: '24px',
                          fontWeight: '500',
                          lineHeight: '36px',
                          letterSpacing: '0em',
                          color: 'rgba(17,17,17,1)'
                        }"
                      >
                        Grace Ikpang
                      </div>
                      <div
                        class="date-occupation"
                        :style="{
                          width: '284px',
                          height: '27px',
                          gap: '8px',
                          display: 'flex',
                          flexDirection: 'row'
                        }"
                      >
                        <div
                          class="occupation"
                          :style="{
                            width: '143px',
                            height: '27px',
                            textAlign: 'left',
                            fontFamily: '\'DM Sans\', sans-serif',
                            fontSize: '18',
                            fontWeight: '400',
                            lineHeight: '27px',
                            letterSpacing: '0em',
                            color: 'rgba(17,17,17,1)'
                          }"
                        >
                          Product designer
                        </div>
                        <div
                          class="date"
                          :style="{
                            width: '133px',
                            height: '27px',
                            textAlign: 'center',
                            fontFamily: '\'DM Sans\', sans-serif',
                            fontSize: '18px',
                            fontWeight: '400',
                            lineHeight: '27px',
                            color: 'rgba(17,17,17,1)',
                            letterSpacing: '0em'
                          }"
                        >
                          .May 25th, 2023
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="title"
                    :style="{
                      width: '526px',
                      height: '80px',
                      gap: '8px',
                      display: 'flex',
                      flexDirection: 'column'
                    }"
                  >
                    <div
                      class="post-title"
                      :style="{
                        width: '526px',
                        height: '48px',
                        textAlign: 'left',
                        fontFamily: '\'DM Sans\', sans-serif',
                        fontSize: '32px',
                        fontWeight: '500',
                        lineHeight: '48px',
                        letterSpacing: '0em',
                        color: 'rgba(17,17,17,1)'
                      }"
                    >
                      Starting out as a Product designer
                    </div>
                    <div>
                      <div
                        :style="{
                          width: '24px',
                          height: '24px',
                          top: '',
                          left: '1.5px',
                          position: 'absolute'
                        }"
                      ></div>
                      <div
                        :style="{
                          width: '94px',
                          height: '24px',
                          textAlign: 'left',
                          fontFamily: '\'DM Sans\', sans-serif',
                          fontSize: '16px',
                          fontWeight: '100',
                          lineHeight: '24px',
                          letterSpacing: '0em',
                          color: 'rgba(98,98,98,1)'
                        }"
                      >
                        10 mins read
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="content"
                  :style="{
                    width: '620px',
                    height: '108px',
                    textAlign: 'left',
                    fontFamily: '\'DM Sans\', sans-serif',
                    fontSize: '18px',
                    fontWeight: '400',
                    lineHeight: '27px',
                    letterSpacing: '0em',
                    color: 'rgba(98,98,98,1)'
                  }"
                >
                  Embarking on a journey as a product designer can be an exhilarating and fulfilling
                  experience. As a profession that bridges the realms of art, technology, and
                  problem-solving, product design offers an opportunity to shape the way people
                  interact with the world around them.
                </div>
              </div>
            </div>
            <div
              class="image-video"
              :style="{
                width: '612px',
                height: '242px',
                backgroundColor: 'rgba(208,208,208,1)',
                top: '330px',
                position: 'absolute'
              }"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/a350/03c9/7071cf963d13ddf4aa425ba18e0a8881?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fsWyXHQ2FcgsTovuU92VJPBMwPjWSZpavF2uLE-4PmP~WpIzYMdnpZ7LNeKEymIwjul8z5QtLqW3Z4sRu4xpWepKeVTlT9b-yY-FcMaFM2cP6wLSdQRI6i~zaU2f~iF~YWcjzud~7CuEe3ZlxKH3F15qH9kwCcmevHASpUNstGv7xKk1DVsqvZPmNQ8E1orObefQ4ICnUfXTKmZ0AxxxsUBtT15ZT3Jx3DKjy9Kd~8Qh80cHVMxOGpedWXi~gdMSJAtJ9C6XvTiivs1ClYRdlMwlCYU4NuuQw7kFvnNDRpOnyDWqQJ-pWQTXGKdf3qQiguGNj3FZumKUC0wI3P8qCQ__"
                :style="{ width: '612px', height: '242px', borderRadius: '8px' }"
              />
            </div>
          </div>
          <div
            class="analytics"
            :style="{
              width: '612px',
              height: '24px',
              top: '1950px',
              left: '44px',
              position: 'absolute',
              display: 'flex',
              flexDirection: 'row',
              gap: '185px'
            }"
          >
            <div
              :style="{
                width: '68px',
                height: '24px',
                gap: '12px',
                display: 'flex',
                flexDirection: 'row'
              }"
            >
              <button :style="{ border: 'none' }">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                  xml:space="preserve"
                >
                  <defs></defs>
                  <g
                    style="
                      stroke: none;
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: none;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 3 90 c -0.784 0 -1.55 -0.307 -2.122 -0.879 c -0.799 -0.799 -1.082 -1.979 -0.73 -3.054 l 6.005 -18.361 C 2.124 60.827 0 53.007 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 c 0 24.813 -20.187 45 -45 45 c -8.007 0 -15.826 -2.123 -22.707 -6.153 L 3.933 89.852 C 3.626 89.951 3.312 90 3 90 z M 22.671 77.566 c 0.559 0 1.114 0.156 1.598 0.461 C 30.479 81.935 37.648 84 45 84 c 21.505 0 39 -17.495 39 -39 S 66.505 6 45 6 S 6 23.495 6 45 c 0 7.353 2.065 14.521 5.972 20.73 c 0.475 0.755 0.59 1.683 0.313 2.53 L 7.69 82.31 l 14.049 -4.595 C 22.043 77.615 22.358 77.566 22.671 77.566 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(0, 0, 0);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 61.04 49 c -1.05 0 -2.08 -0.431 -2.83 -1.17 c -0.18 -0.19 -0.351 -0.391 -0.49 -0.61 c -0.15 -0.22 -0.27 -0.45 -0.37 -0.689 c -0.1 -0.24 -0.18 -0.49 -0.229 -0.75 c -0.051 -0.26 -0.08 -0.52 -0.08 -0.78 c 0 -1.05 0.43 -2.08 1.17 -2.83 c 0.75 -0.74 1.78 -1.17 2.83 -1.17 c 1.06 0 2.09 0.43 2.83 1.17 c 0.739 0.75 1.17 1.78 1.17 2.83 c 0 1.05 -0.431 2.08 -1.17 2.83 C 63.13 48.569 62.1 49 61.04 49 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(0, 0, 0);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 45 49 c -1.05 0 -2.08 -0.431 -2.83 -1.17 c -0.18 -0.19 -0.35 -0.391 -0.5 -0.61 c -0.14 -0.22 -0.26 -0.45 -0.36 -0.689 c -0.1 -0.24 -0.18 -0.49 -0.23 -0.75 C 41.03 45.52 41 45.26 41 45 c 0 -1.05 0.43 -2.08 1.17 -2.83 c 0.93 -0.93 2.31 -1.35 3.61 -1.09 c 0.26 0.05 0.51 0.13 0.75 0.23 c 0.239 0.1 0.47 0.22 0.689 0.36 c 0.22 0.15 0.42 0.32 0.61 0.5 C 48.569 42.92 49 43.95 49 45 c 0 1.05 -0.431 2.08 -1.17 2.83 C 47.08 48.569 46.05 49 45 49 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(0, 0, 0);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 28.96 49 c -1.05 0 -2.09 -0.431 -2.83 -1.17 c -0.18 -0.19 -0.35 -0.391 -0.5 -0.61 c -0.14 -0.22 -0.27 -0.45 -0.36 -0.689 c -0.1 -0.24 -0.18 -0.49 -0.23 -0.75 c -0.05 -0.26 -0.08 -0.52 -0.08 -0.78 c 0 -1.05 0.43 -2.08 1.17 -2.83 c 0.93 -0.93 2.31 -1.35 3.61 -1.09 c 0.25 0.05 0.51 0.13 0.75 0.23 c 0.24 0.1 0.47 0.22 0.69 0.36 c 0.22 0.15 0.42 0.32 0.61 0.5 c 0.74 0.75 1.17 1.78 1.17 2.83 c 0 1.05 -0.43 2.08 -1.17 2.83 C 31.04 48.569 30.01 49 28.96 49 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(0, 0, 0);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </button>
              <div
                :style="{
                  width: '32px',
                  height: '24px',
                  textAlign: 'center',
                  fontFamily: '\'DM Sans\', sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '24px',
                  letterSpacing: '0em',
                  color: 'rgba(98,98,98,1)'
                }"
              >
                0
              </div>
            </div>
            <div
              :style="{
                width: '57px',
                height: '24px',
                gap: '3px',
                display: 'flex',
                flexDirection: 'row'
              }"
            >
              <button @click="handleLikes" :style="{ border: 'none' }">
                <svg
                  height="24px"
                  width="24px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="-49.5 -49.5 594.00 594.00"
                  xml:space="preserve"
                  fill="#000000"
                  stroke="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        style="fill: #0c0d0d"
                        d="M362.96,14.24c-49.72,0-92.95,27.53-115.46,68.13v398.39C284.67,452.84,495,288.55,495,146.28 C495,73.36,435.88,14.24,362.96,14.24z"
                      ></path>
                      <path
                        style="fill: #0d0c0d"
                        d="M132.04,14.24C59.12,14.24,0,73.36,0,146.28c0,142.26,210.33,306.55,247.5,334.48V82.37 C224.99,41.77,181.76,14.24,132.04,14.24z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
              <div
                :style="{
                  width: '25px',
                  height: '24px',
                  textAlign: 'center',
                  fontFamily: '\'DM Sans\', sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '24px',
                  letterSpacing: '0em',
                  color: 'rgba(98,98,98,1)'
                }"
              >
                {{ like }}
              </div>
            </div>
            <div
              :style="{
                width: '250px',
                height: '24px',
                gap: '6px',
                display: 'flex',
                flexDirection: 'row'
              }"
            >
              <button :style="{ border: 'none' }">
                <svg
                  fill="#000000"
                  height="24px"
                  width="24px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g transform="translate(1 1)">
                      <g>
                        <g>
                          <path
                            d="M212.333,353.133h34.133h17.067h34.133h17.067h34.133h17.067h51.2h25.6c5.12,0,8.533-3.413,8.533-8.533 s-3.413-8.533-8.533-8.533h-25.6V148.333h-51.2V114.2h-68.267v59.733h-51.2v51.2h-34.133v-76.8h-68.267v51.2h-51.2v136.533h-25.6 c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h25.6h51.2h17.067h34.133H212.333z M400.067,165.4v170.667h-34.133 V165.4H400.067z M314.733,156.867V139.8c5.12,0,8.533-3.413,8.533-8.533h17.067c0,5.12,3.413,8.533,8.533,8.533v8.533v8.533 c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533V191c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533 v17.067c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533v17.067c-5.12,0-8.533,3.413-8.533,8.533 s3.413,8.533,8.533,8.533V293.4c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533v17.067 c-5.12,0-8.533,3.413-8.533,8.533h-17.067c0-5.12-3.413-8.533-8.533-8.533v-17.067c5.12,0,8.533-3.413,8.533-8.533 s-3.413-8.533-8.533-8.533v-17.067c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533V242.2 c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533v-17.067c5.12,0,8.533-3.413,8.533-8.533 S319.853,191,314.733,191v-17.067c5.12,0,8.533-3.413,8.533-8.533C323.267,160.28,319.853,156.867,314.733,156.867z M263.533,191 h34.133v145.067h-34.133V225.133V191z M246.467,242.2v93.867h-34.133V242.2H246.467z M109.933,336.067V216.6h34.133v119.467 H109.933z M161.133,336.067V199.533V165.4h34.133v59.733v110.933H161.133z"
                          ></path>
                          <path
                            d="M331.8,156.867c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533 S326.68,156.867,331.8,156.867z"
                          ></path>
                          <path
                            d="M331.8,191c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533 S326.68,191,331.8,191z"
                          ></path>
                          <path
                            d="M331.8,208.067c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 S336.92,208.067,331.8,208.067z"
                          ></path>
                          <path
                            d="M331.8,242.2c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 S336.92,242.2,331.8,242.2z"
                          ></path>
                          <path
                            d="M331.8,276.333c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 C340.333,279.747,336.92,276.333,331.8,276.333z"
                          ></path>
                          <path
                            d="M331.8,310.467c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 S336.92,310.467,331.8,310.467z"
                          ></path>
                          <path
                            d="M502.467,370.2h-25.6V105.667c0-14.507-11.093-25.6-25.6-25.6H58.733c-14.507,0-25.6,11.093-25.6,25.6V370.2h-25.6 c-5.12,0-8.533,3.413-8.533,8.533v25.6c0,14.507,11.093,25.6,25.6,25.6h460.8c14.507,0,25.6-11.093,25.6-25.6v-25.6 C511,373.613,507.587,370.2,502.467,370.2z M50.2,105.667c0-5.12,3.413-8.533,8.533-8.533h392.533 c5.12,0,8.533,3.413,8.533,8.533V370.2H323.267c-5.12,0-8.533,3.413-8.533,8.533v8.533H195.267v-8.533 c0-5.12-3.413-8.533-8.533-8.533H50.2V105.667z M493.933,404.333c0,5.12-3.413,8.533-8.533,8.533H24.6 c-5.12,0-8.533-3.413-8.533-8.533v-17.067h25.6H178.2v8.533c0,5.12,3.413,8.533,8.533,8.533h136.533 c5.12,0,8.533-3.413,8.533-8.533v-8.533h136.533h25.6V404.333z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <div
                :style="{
                  width: '85px',
                  height: '24px',
                  textAlign: 'center',
                  fontFamily: '\'DM Sans\', sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '24px',
                  letterSpacing: '0em',
                  color: 'rgba(98,98,98,1)'
                }"
              >
                2980 views
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { signOut, getAuth } from 'firebase/auth'
import { ref } from 'vue';
// import { useUserStore } from '@/stores/user';


const router = useRouter();




const handlePostContent = () => {
  router.push('/post-screen1')
}

let like: any = ref('')
const handleLikes = () => {
  like.value++
  console.log('button clicked')
}

const handleLogout = async () => {
  try {
    await signOut(getAuth())
    router.push('/log-in')
    localStorage.clear()
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
.publish {
  width: 177px;
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
