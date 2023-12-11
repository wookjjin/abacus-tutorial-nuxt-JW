<script setup lang="ts">
const clien = useSupabaseClient()

const isLoading = ref(false)
const email = ref('')
const password = ref('')
const errMessage = ref('')

const handleLogin = async (e: Event) => {
  if (isLoading.value || email.value === '' || password.value === '') return
  try {
    isLoading.value = true
    const { data, error } = await clien.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    errMessage.value = error?.message ?? ''
  } catch (error) {
    console.error(error);
  }
  finally {
    isLoading.value = false
  }
}

</script>

<template>
  <div class="wrapper">
    <span class="title">Log into 🐣</span>
    <div class="form">
      <input v-model="email" type="email" placeholder="Email">
      <input v-model="password" type="password" placeholder="Password">
      <input type="button" :value="isLoading ? 'Loading...' : 'Log in'" @click="handleLogin">
    </div>
    <span class="error">{{ errMessage }}</span>
    <span class="help">계정이 없으신가요?
      <NuxtLink to="/sign-up">
        가입하러 가기 &rarr;
      </NuxtLink>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;

  .title {
    font-size: 42px;
  }

  .form {
    margin-top: 50px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    input {
      padding: 10px 20px;
      border-radius: 50px;
      border: #00C16A 1px solid;
      width: 100%;
      font-size: 16px;

      &[type="button"] {
        cursor: pointer;
        background-color: #00C16A;
        color: white;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  .help {
    margin-top: 20px;

    a {
      color: #00C16A
    }
  }

  .error {
    font-weight: 600;
    color: tomato;
  }
}
</style>