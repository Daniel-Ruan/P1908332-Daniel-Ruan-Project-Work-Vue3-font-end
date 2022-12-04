<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h6>User Login</h6>
      </div>
      <div class="card-body">
        <VeeForm
          :validation-schema="schema"
          @submit="onSubmit"
        >
          <div class="form-group row my-1">
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
          </div>
          <div class="form-group">
            <input
              v-if="!isLogin"
              type="submit"
              class="btn btn-primary mx-2 my-2"
              value="Log in"
            >
            <button
              v-if="isLogin"
              class="btn btn-primary mx-2 my-2"
              type="button"
              disabled
            >
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
              Login...
            </button>
          </div>  
        </VeeForm>
      </div>
      <div class="card-footer">
        <h6>You don't have an account?</h6>
        <router-link
          to="/register"
          class="btn btn-primary mr-2"
        >
          Register
        </router-link>
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
            email: yup.string().required(),
            password: yup.string().required(),
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

    computed: { ...mapGetters(["isLogin", "loginData"]) },

    watch: {
        loginData: function () {
            if (this.loginData !== null && !this.isLogin) {
                this.$swal.fire({
                    text: "Success, User has login.",
                    icon: "success",
                    position: "top-end",
                    timer: 1000,
                });

                this.$router.push({ name: "Products" });
            }
        },
    },

    methods: {
        ...mapActions(["loginUser"]),
        onSubmit() {
            const { email, password } = this.user;
            this.loginUser({
                email: email,
                password: password,
            });
        },
    },
};
</script>