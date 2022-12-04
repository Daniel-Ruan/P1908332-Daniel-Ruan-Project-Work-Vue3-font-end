<template>
  <nav class="navbar navbar-expand navbar-light bg-light sticky-top">
    <div class="container">
      <router-link
        to="/"
        class="navbar-brand"
      >
        P1908332 Daniel Ruan JAVA EE project
      </router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link
            to="/login"
            class="nav-link"
          >
            <i class="fa fa-user fa-fw" />
            Users
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
            to="/products"
            class="nav-link"
          >
            <i class="fa fa-shopping-cart" />
            Products
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/products/create"
            class="nav-link"
          >
            <i class="fa fa-plus-circle" /> Add
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/about"
            class="nav-link"
          >
            <i class="fa fa-info-circle" />
            About
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/help"
            class="nav-link"
          >
            <i class="fa fa-question-circle" />
            Help
          </router-link>
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderPartial",
};
</script>
