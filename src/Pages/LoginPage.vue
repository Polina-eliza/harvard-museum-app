<template>
    <div class="login">
        <h3 class="login__header">Login</h3>
        <LoginForm />
    </div>
</template>

<script>
import LoginForm from '../components/Form/LoginForm.vue'

export default {
    components: {
        LoginForm 
    }
}
</script>

<style lang="scss">
@import "../scss/variables";

.login {
    display: flex;
    flex-direction: column;
    align-items: center; 
    min-height: 80vh; 
    text-align: center; 
    background-color: $color-background-black;

    &__header {
        color: $font-color-body-white;
        margin-top: 50px;
    }
}


</style>