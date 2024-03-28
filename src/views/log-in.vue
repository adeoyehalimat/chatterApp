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
            backgroundColor: 'rgba(208, 208, 208, 1)'
          }"
        ></div>
        <div
          :style="{
            width: '220px',
            height: '6px',
            top: '36px',
            left: '220px',
            position: 'absolute',
            backgroundColor: 'rgba(84, 62, 224, 1)'
          }"
        ></div>
      </div>
      <div
        :style="{
          width: '225px',
          height: '48px',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '32px',
          fontWeight: '500',
          lineHeight: '48px',
          letterSpacing: '0em',
          textAlign: 'center',
          color: 'rgba(0, 0, 0, 1)',
          left: '90px',
          top: '118px',
          position: 'absolute'
        }"
      >
        Welcome back
      </div>
    </div>
    <form
      :style="{
        width: '550px',
        height: '288px',
        top: '310px',
        left: '805px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        position: 'absolute'
      }"
    >
      <div
        :style="{
          width: '520px',
          height: '92px',
          gap: '24px',
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
            color: 'rgba(59, 59, 59, 1)',
          }"
        >
          Email address
        <input
          type="email"
          v-model="v$.email.$model"
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
        <div
        v-if="v$.email.$errors.length"
        :style ="{color: 'red', fontWeight: '500px', width: '520px',
            }"
        >{{
            v$.email.$errors[0].$message
          }}</div>
        </label
        >
      </div>
      <div
        :style="{
          width: '520px',
          height: '92px',
          gap: '12px',
          display: 'flex',
          flexDirection: 'column',
          
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
          Password
        
        <input
          type=""
          v-model="v$.password.$model"
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
        <div :style ="{color: 'red', fontWeight: '500px',width: 'max-content', height: 'auto'}" 
        v-if="v$.password.$errors.length"
        >{{
            v$.password.$errors[0].$message
          }}</div>
      </label>
      </div>
    </form>

    <div class="button-container">
      <button
        type="button"
        @click="handleLogin"
        :style="{
          backgroundColor: 'rgba(84, 62, 224, 1)',
          border: 'none',
          color: 'rgba(255, 255, 255, 1)',
          height: '27px',
          top: '14.5px',
          left: '220px',
          position: 'absolute',
          fontFamily: '\'DM Sans\', sans-serif',
          fontSize: '18px',
          fontWeight: '700',
          lineHeight: '27px',
          textAlign: 'center'
        }"
      >
        Log in
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/utils/firebase';
import { toast } from 'vue3-toastify'
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength} from '@vuelidate/validators'

const router = useRouter()

const user = ref({
  email: '',
  password: ''
});
const userRules = {
  email: { required, email },
  password: { required, minLength: minLength(6) },
};
const v$ = useVuelidate(userRules, user);



const handleLogin = async () => {
  const isValid = await v$.value.$validate();
  if (!isValid) return;

  try {
    const response = await signInWithEmailAndPassword(auth, user.value.email, user.value.password)
    console.log(response)
    if (response.user) {
      localStorage.setItem('isLoggedIn', 'true')
      router.push('/home-page')
    }
  } catch (error) {
    toast.error(error.message);
    console.log(error)
  }
}
</script>

<style scoped>
.parent {
  background-image: url('../assets/images/signup-image.png');
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
  left: 805px;
  background-color: rgba(84, 62, 224, 1);
  position: absolute;
}
.registration {
  width: 440px;
  height: 166px;
  gap: 76px;
  top: 96px;
  left: 805px;
  position: absolute;
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
</style>
