<template>
  <div>
    <h1>Dashboard</h1>
    <hr>
    <breadcrumbs/>

    <div class="row">
      <!-- posts card -->
      <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-warning o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <font-awesome-icon size="lg" :icon="['far', 'clone']" />
            </div>
            <div class="mr-5">Total Posts!</div>
          </div>
          <router-link class="card-footer text-white clearfix small z-1" to="/posts">
            <span class="float-left">View Details</span>
            <span class="float-right">
              <font-awesome-icon icon="angle-right" />
            </span>
          </router-link>
        </div>
      </div>

      <!-- comments card -->
      <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-primary o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <font-awesome-icon size="lg" icon="comments" />
            </div>
            <div class="mr-5">Total Comments!</div>
          </div>
          <router-link class="card-footer text-white clearfix small z-1" to="/comments">
            <span class="float-left">View Details</span>
            <span class="float-right">
              <font-awesome-icon icon="angle-right" />
            </span>
          </router-link>
        </div>
      </div>

      <!-- users card -->
      <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-success o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <font-awesome-icon size="lg" icon="users" />
            </div>
            <div class="mr-5">Registered Users!</div>
          </div>
          <router-link class="card-footer text-white clearfix small z-1" to="/users">
            <span class="float-left">View Details</span>
            <span class="float-right">
              <font-awesome-icon icon="angle-right" />
            </span>
          </router-link>
        </div>
      </div>

      <!-- views card -->
      <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-danger o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <font-awesome-icon size="lg" icon="eye" />
            </div>
            <div class="mr-5">Total Views!</div>
          </div>
          <router-link class="card-footer text-white clearfix small z-1" to="/posts">
            <span class="float-left">View Details</span>
            <span class="float-right">
              <font-awesome-icon icon="angle-right" />
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>
