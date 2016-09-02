<template>
  <div>
    <button
      v-if="$route.path !== '/time-entries/log-time'"
      v-link="'/time-entries/log-time'"
      class="btn btn-primary">
      create
    </button>
    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>create</h3>
    </div>
    <hr>
    <router-view></router-view>
    <div class="time-entries">
      <p v-if="time-entries.length == 0"><strong>there is no task</strong></p>
      <div class="list-group">
        <a class="list-group-item" v-for="timeEntry in timeEntries">
          <div class="row">

            <div class="col-sm-2 user-details">
              <img :src="timeEntry.user.image" class="avatar img-circle img-responsive">
              <p class="text-center">
                <strong>
                  lsm
                </strong>
              </p>
            </div>

            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time">
                  {{timeEntry.date}}
                </i>
              </h3>
            </div>

            <div class="col-sm-7 comment-section">
              <p>{{timeEntry.comment}}</p>
            </div>

            <div class="col-sm-1">
              <button
                class="btn btn-xs btn-danger deletebutton"
                @click="deleteTimeEntry(timeEntry)">
                X
              </button>
            </div>

          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        timeEntries: []


      }
    },
    methods: {
      deleteTimeEntry(timeEntry){
        let index = this.timeEntries.indexOf(timeEntry)
        if (window, confirm("are u sure to delete it?")) {
          this.timeEntries.splice(index, 1)
          this.$dispatch('deleteTime', timeEntry)
        }
      }
    },
    events: {
      timeUpdate(timeEntry){
        this.timeEntries.push(timeEntry)
        return true
      }
    }
  }
</script>

<style type="text/css">
  .avatar{
    height: 75px;
    margin:0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .user-details{
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }

  .time-block{
    padding: 20px;
  }

  .comment-section{
    padding: 20px;
  }
</style>



