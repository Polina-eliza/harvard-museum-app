<template>
    <div class="register">
        <h3 class="register__header">Register</h3>
        <RegisterForm />
    </div>
</template>

<script>
import RegisterForm from '../components/Form/RegisterForm.vue'

export default {
    components: {
        RegisterForm 
    }
}
</script>

<style lang="scss">
@import "../scss/variables";

.register {
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