<script setup lang="ts">
const client = useSupabaseClient()

const isLoading = ref(false)
const email = ref('')
const password = ref('')
const errMessage = ref('')

const signUp = async (e: Event) => {
  try {
    if (isLoading || !email.value || !password.value) return
    const { data, error } = await client.auth.signUp(
      {
        email: email.value,
        password: password.value,
      }
    )

    if (error) errMessage.value = error?.message
  } catch (error) {
    console.error(error);
  }
}

</script>

<template>
  <div class="wrapper">
    <span class="title">Sign Up 🐣</span>
    <div class="form">
      <input v-model="email" type="email" placeholder="Email" autocomplete="off">
      <input v-model="password" type="password" placeholder="Password" autocomplete="new-password">
      <input type="button" :value="isLoading ? 'Loading...' : 'Log in'" @click="signUp">
    </div>
    <span class="error">{{ errMessage }}</span>
    <span class="help">이미 계정이 있으신가요?
      <NuxtLink to="/login">
        로그인하러 가기 &rarr;
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