<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          routine board
        </a>
        <ul class="nav navbar-nav">
          <li><a v-link="'/Home'">create a task</a></li>
          <li><a v-link="'/time-entries'">task list</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar :time="totalTime></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></rgiouter-view>
    </div>
    </div>
  </div>
</template>

