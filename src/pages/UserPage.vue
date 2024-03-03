<template>

<!--    <van-cell title="当前用户" :value="user?.username" />-->
<!--    <van-cell title="修改信息" is-link to="/user/update" />-->
<!--    <van-cell title="我创建的队伍" is-link to="/user/team/create" />-->
<!--    <van-cell title="我加入的队伍" is-link to="/user/team/join" />-->

  <van-cell title="名字" is-link to="/user/edit" :value="user.username" @click="toEdit('username','用户名',user.username)"/>

</template>


<script setup lang="ts">

  import {useRouter} from "vue-router";

  const user = {
    id: 1,
    username: 'lhh',
    userAccount: 'LHH',
    avatarUrl: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo.png',
    gender: '男',
    phone: '123112312',
    email: '12345@qq.com',
    planetCode: '1234',
    createTime: new Date(),
  };



  const router=useRouter();
  const toEdit = (editKey: string, editName: string, currentValue: string) => {
    router.push({
      path: '/user/edit',
      query: {
        editKey,
        editName,
        currentValue,
      }
    })
  };


</script>

<style scoped>

</style>
