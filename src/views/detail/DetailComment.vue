<template>
  <div v-if="Object.keys(comment).length !== 0" class="comment-info">
    <div class="info-wrap">
      <div class="info-header">
        <div class="header-title">用户评论</div>
        <div class="header-more">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="info-user">
        <img :src="comment.user.avatar" alt="">
        <span>{{comment.user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{comment.content}}</p>
        <div class="info-other">
          <span class="date">{{comment.created | showDate}}</span>
          <span>{{comment.style}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from '../../common/utils'
  export default {
    name:'',
    props:{
      comment: {
        type: Object,
        defaule() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        //1.将时间转化成Date对象
        const date = new Date(value * 1000)
        //2.将date进行格式化
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      }
    },
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style scoped>
.info-wrap{
  padding: 8px;
}
.info-header{
  display: flex;
  padding-bottom: 10px;
  justify-content: space-between;
  font-size: 16px;
  border-bottom: 1px solid #dddddd;
}
.info-user{
  padding-top: 5px;
}
.info-user img{
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.info-user span{
  position: relative;
  top: -15px;
  font-size: 15px;
  margin-left: 10px;
}
.info-detail p{
  font-size: 13px;
}
.info-other{
  padding-top: 10px;
  display: flex;
  justify-content: flex-start;
}
.info-other span{
  margin-right: 10px;
  font-size: 13px;
  color: #bbbbbb;
  line-height: 16px;
}
.comment-info{
  margin-bottom: 20px;
  border-bottom: 3px solid #dddddd;
}
</style>