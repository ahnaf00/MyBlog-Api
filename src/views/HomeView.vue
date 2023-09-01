<script setup>
import { ref } from 'vue';
import axios from 'axios';


const latestPostList = ref([]);
const getNLatestPosts = async () => {
    const url = "https://basic-blog.teamrabbil.com/api/post-newest";
    const res = await axios.get(url);
    if(res.status === 200){
        latestPostList.value = res.data;
    }
}
getNLatestPosts();

const oldPostList = ref([]);
const getOldPosts = async () => {
    const url = "https://basic-blog.teamrabbil.com/api/post-list/2";
    const res = await axios.get(url);
    if(res.status === 200){
        oldPostList.value = res.data;
    }
}
getOldPosts();
</script>

<template>
    <section class="pt-5 pb-0">
      <div class="container">
        <h2 class="d-flex justify-content-center">Latest Posts</h2>
        <div class="row">
          <div class="col-lg-4 col-md-6" v-for="(post,index) in latestPostList" :key="index">
            <div class="card my-3">
              <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
                <a class="d-block blur-shadow-image">
                  <img :src="post.img" alt="img-blur-shadow" class="img-fluid border-radius mt-3">
                </a>
              </div>
              <div class="card-body pt-3">
                <p class="text-dark mb-2 text-sm"></p>
                <h5>
                    {{ post.title }}
                </h5>
                <p>
                    {{ post.short }}
                </p>
                <button type="button" class="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>   
        </div>
      </div>
    </section>

    <section class="pt-5 pb-0">
      <div class="container">
        <h2 class="d-flex justify-content-center">Old Posts</h2>
        <div class="row">
          <div class="col-lg-4 col-md-6" v-for="(post,index) in oldPostList" :key="index">
            <div class="card my-3">
              <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
                <a class="d-block blur-shadow-image">
                  <img :src="post.img" alt="img-blur-shadow" class="img-fluid border-radius mt-3">
                </a>
              </div>
              <div class="card-body pt-3">
                <p class="text-dark mb-2 text-sm"></p>
                <h5>
                    {{ post.title }}
                </h5>
                <p>
                    {{ post.short }}
                </p>
                <button type="button" class="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>   
        </div>
      </div>
    </section>


</template>

<style scoped>

</style>