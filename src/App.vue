
<template>
  <div>
    <router-view/>
  </div>
  
</template>
<script setup lang="ts">


import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    localStorage.setItem("isLoggedIn", true);
    console.log(user);
    // ... 
    
  } else {
    console.log('user is kicked out')
    // User is signed out
    // ...
  } 
});

</script>


<style scoped>

</style>
