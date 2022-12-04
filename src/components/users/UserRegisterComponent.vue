<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h6>New User Register</h6>
      </div>
      <div class="card-body">
        <VeeForm
          :validation-schema="schema"
          @submit="onSubmit"
        >
          <div class="form-group row my-1">
            <div class="col-6">
              <label>User Name:</label>
              <Field
                id="name"
                v-model="user.name"
                name="name"
                type="text"
                class="form-control"
              />
              <ErrorMessage
                name="name"
                class="text-capitalize text-danger"
              />
            </div>
            <div class="col-6">
              <label>Email Address:</label>
              <Field
                id="email"
                v-model="user.email"
                name="email"
                type="text"
                class="form-control"
              />
              <ErrorMessage
                name="email"
                class="text-capitalize text-danger"
              />
            </div>
            <div class="col-6">
              <label>Password:</label>
              <Field
                id="password"
                v-model="user.password"
                name="password"
                type="text"
                class="form-control"
              />
              <ErrorMessage
                name="password"
                class="text-capitalize text-danger"
              />
            </div>
            <div class="col-6">
              <label>Password Confirmation:</label>
              <Field
                id="password_confirmation"
                v-model="user.password_confirmation"
                name="password_confirmation"
                type="text"
                class="form-control"
              />
              <ErrorMessage
                name="password_confirmation"
                class="text-capitalize text-danger"
              />
            </div>
          </div>
          <div class="form-group">
            <router-link
              to="/login"
              class="btn btn-secondary mr-2"
            >
              Cancel
            </router-link>
            <input
              v-if="!isRegister"
              type="submit"
              class="btn btn-primary mx-2 my-2"
              value="Register"
            >
            <button
              v-if="isRegister"
              class="btn btn-primary mx-2 my-2"
              type="button"
              disabled
            >
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
              Register...
            </button>
          </div>  
        </VeeForm>
      </div>
    </div>
  </div>
</template>
  
  
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  import { Field, Form as VeeForm, ErrorMessage } from "vee-validate";
  import * as yup from "yup";
  
  export default {
      components: {
          Field,
          VeeForm,
          ErrorMessage,
      },
  
      setup() {
          const schema = yup.object({
              name: yup.string().required(),
              email: yup.string().required(),
              password: yup.string().required().min(5),
              password_confirmation: yup.string().required().min(5),
          });
  
          return {
              schema,
          };
      },
  
      data() {
          return {
              user: {},
          };
      },
  
      computed: { ...mapGetters(["isRegister", "registerData"]) },
  
      watch: {
        registerData: function () {
              if (this.registerData !== null && !this.isRegister) {
                  this.$swal.fire({
                      text: "Success, New user has registered.",
                      icon: "success",
                      position: "top-end",
                      timer: 1000,
                  });
  
                  this.$router.push({ name: "User Login" });
              }
          },
      },
  
      methods: {
          ...mapActions(["registerUser"]),
          onSubmit() {
              const { name, email, password, password_confirmation } = this.user;
              this.registerUser({
                  name: name,
                  email: email,
                  password: password,
                  password_confirmation: password_confirmation,
              });
          },
      },
  };
  </script>