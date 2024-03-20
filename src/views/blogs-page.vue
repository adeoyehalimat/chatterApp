<template>
  <div class="user">
    <div>
      <img
        src="https://s3-alpha-sig.figma.com/img/11f4/3480/c9f01e87bae608ae40583248f46f62ad?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i39MsVufdyjH1lVHB6f0vrx4upKmzvSrfNg-f2IFX0tbAT1g46wRZwCmSdidlK1c~Y5~bTc1TovTbJjEn3lVEaAXKyQ9cWA04A70xgzowtA2sVSg7W5~DIvELw8pwk6RK9agH0ezJQbBn6iIKnG4LwI0LzIIQbtpVaW7f-CzMwJGwv3QK~2rCYlnpf4~Vm8ckkAUoJJsl8~WBiIcqGNbBBgzD45-hry3gn2bqmxwOpVPdTj8Nz4H5m0Z5rc37A21CVYXbQ-~z54iebCxecBzrNCWLiKNcqfDt4q0xtI-Y6c~nO62VZUerkK64qasPnx8jOEVCKhv6cpIzFwhpsL8PA__"
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
</template>

<script setup lang="ts"></script>

<style scoped>
.user {
  width: 1440px;
  height: 492px;
  top: 200px;
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
</style>
