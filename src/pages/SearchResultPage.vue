<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="`${user.username} (${user.planetCode})`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in tags" style="margin-right: 8px; margin-top: 8px">
        {{ tag }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>

  <van-empty v-if="!userList || userList.length < 1" description="搜索结果为空"/>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import myAxios from "../plugins/myAxios.js";
import qs from 'qs';

const route = useRoute();
//拿到数据
const {tags} = route.query;

const userList = ref([]);

onMounted(async () => {
      // 为给定 ID 的 user 创建请求
      const userListData = await myAxios.get('/user/search/tags', {
        withCredentials: false,
        params: {
          tagNameList: tags
        },
        //用鱼皮的这个我的头像不会显示。
        // paramsSerializer: params =>{
        //   return qs.stringify(params,{indices: false})
        // }

        //序列化
        paramsSerializer: {
          serialize: params => qs.stringify(params, {indices: false}),
        }
      })
          .then(function (response) {
            console.log('user/search/tags succeed', response);
            console.log("请求成功！！！！！！！！！！");
            console.log(response.data.data);
            return response.data?.data;
          })
          .catch(function (error) {
            console.log('user/search/tags fail', error);
          });

      console.log("userListData:",userListData);
      if (userListData) {
        console.log(userList.value);
        userListData.forEach(user => {
          if (user.tags) {
            user.tags = JSON.parse(user.tags);
          }
        })
        userList.value = userListData;

        console.log("userList:",userList);
      }
    }
)



</script>

<style scoped>

</style>