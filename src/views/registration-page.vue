<template>
  <div class="signup-page">
    <div class="signup-image">
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
    </div>
    <div class="register">
      <div class="heading">
        <div class="registration">
          <div class="first-heading">
            <router-link
              to="registration-page"
              :style="{
                width: '74px',
                height: '24px',
                fontFamily: '\'DM Sans\', sans-serif',
                fontSize: '16px',
                fontWeight: '700',
                lineHeight: '24px',
                letterSpacing: '0em',
                textAlign: 'center',
                color: 'rgba(17, 17, 17, 1)'
              }"
            >
              REGISTER
            </router-link>
            <router-link
              to="log-in"
              :style="{
                width: '58px',
                height: '24px',
                fontFamily: '\'DM Sans\', sans-serif',
                fontSize: '16px',
                fontWeight: '700',
                lineHeight: '24px',
                letterSpacing: '0em',
                textAlign: 'center',
                color: 'rgba(17, 17, 17, 1)'
              }"
            >
              LOG IN
            </router-link>
          </div>
          <div class="lines" :style="{ width: '440px', height: '6px' }">
            <div
              :style="{
                width: '220px',
                height: '6px',
                top: '36px',
                left: '0px',
                position: 'absolute',
                background: 'rgba(84, 62, 224, 1)'
              }"
            ></div>
            <div
              :style="{
                width: '220px',
                height: '6px',
                top: '36px',
                left: '220px',
                position: 'absolute',
                background: 'rgba(217, 217, 217, 1)'
              }"
            ></div>
          </div>
          <div
            :style="{
              width: '415px',
              height: '48px',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '32px',
              fontWeight: '500',
              lineHeight: '48px',
              letterSpacing: '0em',
              textAlign: 'center',
              color: 'rgba(17, 17, 17, 1)'
            }"
          >
            Register as a Writer/Reader
          </div>
        </div>
      </div>

      <form>
        <div
          :style="{
            width: '516px',
            height: '92px',
            gap: '12px',
            display: 'flex',
            flexDirection: 'row'
          }"
        >
          <div :style="{ width: '252px', height: '92px', gap: '12px' }">
            <label
              :style="{
                width: '78px',
                height: '24px',
                fontFamily: '\'DM Sans\', sans-serif',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px',
                letterSpacing: '0em',
                textAlign: 'left',
                color: 'rgba(59, 59, 59, 1)'
              }"
            >
              First name
            </label>
            <input
              type="text"
              v-model="user.firstName"
              placeholder="John "
              :style="{
                width: '252px',
                height: '56px',
                borderRadius: '8px',
                border: '1px solid rgba(206, 212, 218, 1)',
                padding: '(10px, 16px, 10px, 16px)',
                boxShadow: '0px 0px 1px 0px rgba(33, 37, 41, 0.08)'
              }"
            />
          </div>
          <div :style="{ width: '252px', height: '92px', gap: '12px' }">
            <label
              :style="{
                width: '77px',
                height: '24px',
                fontFamily: '\'DM Sans\', sans-serif',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px',
                letterSpacing: '0em',
                textAlign: 'left',
                color: 'rgba(59, 59, 59, 1)'
              }"
            >
              Last name
            </label>
            <input
              type="text"
              v-model="user.lastName"
              placeholder="Doe "
              :style="{
                width: '252px',
                height: '56px',
                borderRadius: '8px',
                border: '1px solid rgba(206, 212, 218, 1)',
                padding: '(10px, 16px, 10px, 16px)',
                boxShadow: '0px 0px 1px 0px rgba(33, 37, 41, 0.08)'
              }"
            />
          </div>
        </div>

        <div
          :style="{
            width: '520px',
            height: '92px',
            gap: '12px',
            display: 'flex',
            flexDirection: 'column'
          }"
        >
          <label
            :style="{
              width: '136px',
              height: '24px',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '24px',
              letterSpacing: '0em',
              textAlign: 'left',
              color: 'rgba(59, 59, 59, 1)'
            }"
          >
            You are joining as?
          </label>
          <div
            :style="{
              width: '520px',
              height: '56px',
              borderRadius: '8px',
              border: '1px solid rgba(206, 212, 218, 1)',
              padding: '(10px, 16px, 10px, 16px)',
              boxShadow: '0px 0px 1px 0px rgba(33, 37, 41, 0.08)'
            }"
          >
            <select
              :style="{
                width: '492px',
                height: '24px',
                gap: '4px',
                top: '257px',
                left: '6px',
                position: 'absolute',
                border: 'none'
              }"
            >
              <option
                :style="{
                  width: '464px',
                  height: '24px',
                  fontFamily: '\'DM Sans\', sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '24px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  color: 'rgba(33, 37, 41, 1)'
                }"
              >
                Writer
              </option>
              <option
                :style="{
                  width: '464px',
                  height: '24px',
                  fontFamily: '\'DM Sans\', sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '24px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  color: 'rgba(33, 37, 41, 1)'
                }"
              >
                Reader
              </option>
            </select>
          </div>
        </div>
        <div
          :style="{
            width: '520px',
            height: '92px',
            gap: '12px',
            display: 'flex',
            flexDirection: 'column'
          }"
        >
          <label
            :style="{
              width: '103px',
              height: '24px',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '24px',
              letterSpacing: '0em',
              textAlign: 'left',
              color: 'rgba(59, 59, 59, 1)'
            }"
          >
            Email address</label
          >

          <input
            type="email"
            v-model="user.email"
            placeholder="Johndoe@gmail.com "
            :style="{
              width: '520px',
              height: '56px',
              borderRadius: '8px',
              border: '1px solid rgba(206, 212, 218, 1)',
              padding: '(10px, 16px, 10px, 16px)',
              boxShadow: '0px 0px 1px 0px rgba(33, 37, 41, 0.08)'
            }"
          />
        </div>

        <div
          :style="{
            width: '520px',
            height: '92px',
            gap: '12px',
            display: 'flex',
            flexDirection: 'column'
          }"
        >
          <label
            :style="{
              width: '71px',
              height: '24px',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '24px',
              letterSpacing: '0em',
              textAlign: 'left',
              color: 'rgba(59, 59, 59, 1)'
            }"
          >
            Password
          </label>

          <input
            type=""
            v-model="user.password"
            placeholder="********** "
            :style="{
              width: '520px',
              height: '56px',
              borderRadius: '8px',
              border: '1px solid rgba(206, 212, 218, 1)',
              padding: '(10px, 16px, 10px, 16px)',
              boxShadow: '0px 0px 1px 0px rgba(33, 37, 41, 0.08)'
            }"
          />
        </div>
        <div
          :style="{
            width: '520px',
            height: '92px',
            gap: '12px',
            display: 'flex',
            flexDirection: 'column'
          }"
        >
          <label
            :style="{
              width: '135px',
              height: '24px',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '24px',
              letterSpacing: '0em',
              textAlign: 'left',
              color: 'rgba(59, 59, 59, 1)'
            }"
          >
            Confirm password
          </label>

          <input
            type=""
            v-model="confirmPassword"
            placeholder="********** "
            :style="{
              width: '520px',
              height: '56px',
              borderRadius: '8px',
              border: '1px solid rgba(206, 212, 218, 1)',
              padding: '(10px, 16px, 10px, 16px)',
              boxShadow: '0px 0px 1px 0px rgba(33, 37, 41, 0.08)'
            }"
          />
        </div>

        <div class="button-container">
          <button
            type="button"
            @click="handleSignup"
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

        <button
          :style="{
            width: '520px',
            top: '650px',
            position: 'absolute',
            height: '51px',
            gap: '11px',
            borderRadius: '8px',
            border: '1px solid rgba(208,208,208, 1)',
            display: 'flex',
            flexDirection: 'row'
          }"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/0973/341e/2b2c04ac17699bc04aa985627a503f09?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e2wHC8wzoVw6LPedffVk027f9QM0iyea4c5Eg90R1A3mVcesQW7rsoeOOD~haXNbw~vCDWKHl-FWYC89WXaaCUC4NqL5yZrpSydWchVcXvqhPkWvvjhj73Id2JxjcDlstbfVD~pf9LAGsJ4IH8Ph0py6w4Ppv9qYVNCSdalQZKveCZlCiI8BWKO88glGWRZ2z-HFAJ93N-zcNjibWklIR00DwOzTKCNaVM1YLItOrNMp5aLGC7SkF9d6b~rADfbaOYH~Adv0wWtErQL6pMGeODr~Dg7kFYhl8gI5HLtX7Cx2UKyUDXW4aLwTuqOSMJpTGewiwB0IQhIg1EJvyiKwGg__"
            alt=""
            :style="{
              width: '24px',
              top: '11px',
              height: '24px',
              left: '173px',
              position: 'absolute'
            }"
          />
          <div
            :style="{
              left: '210px',
              top: '11px',
              color: 'rgba(17, 17, 17, 1)',
              width: '166px',
              height: '27px',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '27px',
              textAlign: 'center',
              position: 'absolute',
              border: 'none'
            }"
          >
            Sign up with google
          </div>
        </button>

        <button
          :style="{
            width: '520px',
            top: '710px',
            position: 'absolute',
            height: '51px',
            gap: '11px',
            borderRadius: '8px',
            border: '1px solid rgba(208,208,208, 1)',
            display: 'flex',
            flexDirection: 'row'
          }"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/5b5a/8b93/a5fbb42e501044357406a9b5bde9dcb1?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V80HbvBEi-6PjOBOApTchF0Ir~g6cMDPdopGShdTD2JqAX1HocLbj7caolH1COrDf98uk5OF55dnNz6lpPH6SB-lXAJpkPjR4CAUf-bYnk~xWITH7dtZMWlfmuxBYrEwNC8dTWNNPvqBA9JqJBP1FvysJvyyxUwr2gvoYG9FVFN18kVcfYjPRDhfBks3p36QxT-8~SF89Egxht60-UNebOzH8Iad9ZagylU1C8yjnfF1n1MLfqsii9Hn4Y1TK1ajuRDzX-nSG~IH7iXKtz3BwORvcvutx78rY8ecpLDN~3J0V3JURz3GkJ5TEUgF51i-R7NgPJfng1W70OvcwVRxGQ__"
            alt=""
            :style="{
              width: '24px',
              top: '11px',
              height: '24px',
              left: '173px',
              position: 'absolute'
            }"
          />
          <div
            :style="{
              left: '210px',
              top: '11px',
              color: 'rgba(17, 17, 17, 1)',
              width: '175px',
              height: '27px',
              fontFamily: '\'DM Sans\', sans-serif',
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '27px',
              textAlign: 'center',
              position: 'absolute',
              border: 'none'
            }"
          >
            Sign up with Linkedin
          </div>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref  } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/utils/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { useUserStore } from "@/stores/user";

const router = useRouter();

const user = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',

  
})


const confirmPassword = ref('')
const handleCreateAccount = () => {
  router.push('/confirm-message')
}
const handleSignup = async () => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      user.value.email,
      user.value.password
    )
    console.log(response)
    router.push('/log-in')
  } catch (error) {
    console.log(error)
  }
  
  console.log(user.value.firstName);
}
</script>

<style scoped>
.signup-page {
  display: flex;
  flex-direction: row;
  width: 1440px;
  height: 1024px;
  top: -623px;
  left: -11424px;
  /* position: -webkit-sticky; */
  background-color: rgba(255, 255, 255, 1);
}
.signup-image {
  background-image: url('https://s3-alpha-sig.figma.com/img/6ced/09bb/73e06e07b6387b1ead37c89ea74cefb0?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pN0DeTfodtorugsdcSX0QcE~oWhIA9xE26Av7VftiWmDKpzZdUgBUxdSCyyQRVbfBX1~gk7W1rQA5L9W0jGgDPoeY5lHUGaKWZ18u7JpgPVxTpzim77NokHpjubq6IxdyqKb-R39IJvlre1~w-n4o6oUTSVjd8fwkfGr-GbDXTaOlpkgrPoDF0Cnwc0Pwgj7cCQRrLXJJuN7o6jgKGXy6VuF74Z88Is5V~4wIPB0JGkmmODFYJ9Y~t6yxK-Plq5qcP4QaEVgN~~~yKuLf4maRkVKRzPsdXOvTsmWr-EqKXFWQ6oLrR30OC3n0hss288HqxmPYtnIBwlLdnt~UFFJGA__');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 622px;
  height: 1024px;
  background-color: rgba(0, 0, 0, 0.5);
}
.signup-heading {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 550px;
  height: 168px;
  top: 385px;
  left: 36px;
  gap: 24px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
}

.register {
  width: 520px;
  height: 924px;
  position: relative;
  top: 30px;
  left: 149px;
  margin-bottom: 24px;
}

.heading {
  width: 440px;
  height: 114px;
  gap: 24px;
  display: flex;
  flex-direction: column;
}
.registration {
  width: 440px;
  height: 42px;
  gap: 12px;
  display: flex;
  flex-direction: column;
}
.first-heading {
  width: 440px;
  height: 42px;
  gap: 280px;
  display: flex;
  flex-direction: row;
}
.button-container {
  width: 520px;
  height: 56px;
  padding: 8px, 16px, 8px, 16px;
  border-radius: 8px;
  gap: 8px;
  top: 580px;
  background-color: rgba(84, 62, 224, 1);
  position: absolute;
}
</style>
