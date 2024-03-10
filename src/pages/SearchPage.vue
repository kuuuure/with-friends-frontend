<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>


  <van-divider content-position="left">已选标签</van-divider>
  <div v-if="activeIds.length===0">请选择标签</div>

  <van-row gutter="16" style="padding: 0 16px">
    <van-col v-for="tag in activeIds">
      <van-tag :show="show" closeable size="medium" type="primary" @close="close(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>


  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tags"
  />

  <div style="padding: 16px">
    <van-button block type="primary" @click="searchResult">搜索</van-button>
  </div>


</template>


<script setup>
import {ref} from "vue";
import {useRouter} from 'vue-router'



const value = ref('');
const searchText = ref('');
//已经选中的标签
const activeIds = ref([]);
const activeIndex = ref(0);


const tagList = [
  {
    text: '性别',
    children: [
      {text: 'man', id: 'man'},
      {text: 'woman', id: 'woman'},
      //{ text: '宁波', id: 3, disabled: true },
    ],
  },
  {
    text: '年级',
    children: [
      {text: '大一', id: '大一'},
      {text: '大二', id: '大二'},
      {text: '大三', id: '大三'},
    ],
  },
  //{ text: '福建', disabled: true },
];

//标签列表
let tags = ref(tagList);

const router=useRouter();







/**
 * 搜索
 */
const searchResult = () => {
  // 带查询参数，结果是 /register?plan=private
  router.push({
    path: '/user/list',
    query: {
      tags:activeIds.value
    }
  })
};


/**
 *  搜索过滤
 * @param val
 */
const onSearch = (val) => {
  tags.value = tagList.map(parentTag => {
    const tempChildren = [...parentTag.children];
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value));
    return tempParentTag;
  })
};
//取消  清空
const onCancel = () => {
  searchText.value = '';
  tags.value = tagList;
};


const show = ref(true);
const close = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;
  })
};


</script>

<style scoped>

</style>
