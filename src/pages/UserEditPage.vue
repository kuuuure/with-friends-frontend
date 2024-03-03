<template>
  <van-form @submit="onSubmit">
    <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :placeholder="`请输入${editUser.editName}`"
    />

    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import {useRoute} from "vue-router";

  const route=useRoute();
  const editUser=ref({
    editKey: route.query.editKey,
    currentValue: route.query.currentValue,
    editName: route.query.editName,
  })


    const onSubmit = (values) => {
    //TODO 把editKey currentValue editName 提交到后台
      console.log('submit', values);
    };

</script>

<style scoped>

</style>
