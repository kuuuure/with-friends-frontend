<template>
  <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>


  <div id="content">
    <router-view></router-view>
  </div>




  <van-tabbar   route>
    <van-tabbar-item icon="home-o" name="index" to="/">主页</van-tabbar-item>
    <van-tabbar-item icon="search" name="team" to="/team">队伍</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="myself" to="/user">个人</van-tabbar-item>
  </van-tabbar>


</template>


<!--语法糖 setup 不用写return-->
<script setup>


import {useRouter} from 'vue-router'

  const onClickLeft = () => history.back();

  const router=useRouter();
  const onClickRight = () => router.push('/search'); // 请求 url;



</script>