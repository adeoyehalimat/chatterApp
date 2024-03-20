<template>
  <div
    class="parent"
    :style="{ width: '622px', height: '1024px', display: 'flex', flexDirection: 'row' }"
  >
    <div
      :style="{
        width: '550px',
        height: '168px',
        top: '385px',
        gap: '24px',
        left: '36px',
        position: 'absolute'
      }"
    >
      <div
        :style="{
          width: '214px',
          height: '72px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '48px',
          fontWeight: '700',
          lineHeight: '72px',
          letterSpacing: '0em',
          textAlign: 'center',
          marginLeft: '130px',
          color: 'rgba(255,255,255,1)'
        }"
      >
        CHATTER
      </div>
      <div
        :style="{
          width: '550px',
          height: '72px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '24px',
          fontWeight: '500',
          lineHeight: '36px',
          letterSpacing: '0em',
          textAlign: 'center',
          color: 'rgba(255,255,255,1)'
        }"
      >
        Unleash the Power of Words, Connect with Like-minded Readers and Writers
      </div>
    </div>
    <button
      @click="handleBack"
      :style="{
        width: '70px',
        height: '30px',
        top: '26px',
        gap: '8px',
        left: '650px',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        border: 'none'
      }"
    >
      <div :style="{ width: '30px', height: '30px' }">
        <div>
          <svg
            height="24px"
            version="1.1"
            viewBox="0 0 24 24"
            width="22px"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title />
            <desc />
            <defs />
            <g fill="none" fill-rule="evenodd" id="miu" stroke="none" stroke-width="1">
              <g id="Artboard-1" transform="translate(-359.000000, -191.000000)">
                <g id="slice" transform="translate(215.000000, 119.000000)" />
                <path
                  d="M360,202.5 C360,196.148725 365.148725,191 371.5,191 C377.851275,191 383,196.148725 383,202.5 C383,208.851275 377.851275,214 371.5,214 C365.148725,214 360,208.851275 360,202.5 Z M382,202.5 C382,196.70101 377.29899,192 371.5,192 C365.70101,192 361,196.70101 361,202.5 C361,208.29899 365.70101,213 371.5,213 C377.29899,213 382,208.29899 382,202.5 Z M372.656854,196.843146 L374.071068,198.257359 L369.828427,202.5 L374.071068,206.742641 L372.656854,208.156854 L367,202.5 L372.656854,196.843146 Z"
                  fill="#000000"
                  id="circle-back-arrow-outline-stroke"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div
        :style="{
          width: '32px',
          height: '21px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '21px',
          letterSpacing: '0em',
          textAlign: 'center',
          color: 'rgba(85,82,79,1)'
        }"
      >
        Back
      </div>
    </button>
    <div
      :style="{
        width: '554px',
        height: '316px',
        top: '354px',
        gap: '48px',
        left: '763px',
        position: 'absolute'
      }"
    >
      <div :style="{ width: '554px', height: '212px', gap: '48px' }">
        <div :style="{ width: '554px', height: '84px', gap: '12px' }">
          <div
            :style="{
              width: '368px',
              height: '48px',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '32px',
              fontWeight: '500',
              lineHeight: '48px',
              letterSpacing: '0em',
              textAlign: 'center',
              color: 'rgba(17,17,17,1)'
            }"
          >
            Enter confirmation code
          </div>
          <div
            :style="{
              width: '554px',
              height: '24px',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '24px',
              letterSpacing: '0em',
              textAlign: 'left',
              color: 'rgba(98,98,98,1)'
            }"
          >
            We emailed you a code. Please input the code here for account verification
          </div>
        </div>
        <div
          style="
            width: 496.49px;
            height: 80px;
            display: grid;
            gap: 24px;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            box-shadow: 0px 0px 1px 0px rgba(33, 37, 41, 0.06);
          "
        >
          <div
            v-for="n of 4"
            :key="n"
            style="
              width: 106.12px;
              height: 80px;
              border-radius: 8px;
              border: 1px solid rgba(206, 212, 218, 1);
              padding: 10px 12px 10px 16px;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            {{ n }}
          </div>
        </div>
      </div>
    </div>
    <div class="button-container">
      <button
        type="submit"
        @click="handleCreateAccount"
        :style="{
          backgroundColor: 'rgba(84, 62, 224, 1)',
          border: 'none',
          color: 'rgba(255, 255, 255, 1)',
          height: '27px',
          top: '14.5px',
          left: '173px',
          position: 'absolute',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '18px',
          fontWeight: '700',
          lineHeight: '27px',
          textAlign: 'center'
        }"
      >
        Create account
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    handleCreateAccount() {
      this.$router.push('/log-in')
      console.log('button clicked')
    },
    handleBack() {
      this.$router.push('/registration-page')
      console.log('button clicked')
    }
  },
  setup() {
    //     const handleCreateAccount = () => {
    //   router.push("/login");
    //   console.log('button clicked');
    // };
    // return {
    //   handleCreateAccount
    // };
  }
}
</script>

<style scoped>
.parent {
  background-image: url('https://s3-alpha-sig.figma.com/img/6ced/09bb/73e06e07b6387b1ead37c89ea74cefb0?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pN0DeTfodtorugsdcSX0QcE~oWhIA9xE26Av7VftiWmDKpzZdUgBUxdSCyyQRVbfBX1~gk7W1rQA5L9W0jGgDPoeY5lHUGaKWZ18u7JpgPVxTpzim77NokHpjubq6IxdyqKb-R39IJvlre1~w-n4o6oUTSVjd8fwkfGr-GbDXTaOlpkgrPoDF0Cnwc0Pwgj7cCQRrLXJJuN7o6jgKGXy6VuF74Z88Is5V~4wIPB0JGkmmODFYJ9Y~t6yxK-Plq5qcP4QaEVgN~~~yKuLf4maRkVKRzPsdXOvTsmWr-EqKXFWQ6oLrR30OC3n0hss288HqxmPYtnIBwlLdnt~UFFJGA__');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 622px;
  height: 1024px;
  background-color: rgba(0, 0, 0, 0.5);
}
.button-container {
  width: 520px;
  height: 56px;
  padding: 8px, 16px, 8px, 16px;
  border-radius: 8px;
  gap: 8px;
  top: 580px;
  left: 763px;
  background-color: rgba(84, 62, 224, 1);
  position: absolute;
}
</style>
