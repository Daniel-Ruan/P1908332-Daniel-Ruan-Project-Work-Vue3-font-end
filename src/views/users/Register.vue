<template>
  <div class="user-register">
    <UserRegisterComponent />
  </div>
</template>
  
<script>
  import UserRegisterComponent from '../../components/users/UserRegisterComponent.vue';
  
  export default {
    components: {
        UserRegisterComponent,
    },
  };
</script>