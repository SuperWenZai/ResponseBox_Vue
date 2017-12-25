<template>
<div class="nav_miniso">
  
  <div :class="['nav',{'xianshi' : xianshiNav}]">
    <div class="content">

      <div class="hd">
        <router-link to="/">MINISO UI</router-link>
      </div>
      <div class="navList clearfix">
        <ul>
          <router-link v-for="(item,id) in items" 
                      :key="id" 
                      @click="navId = id"
                      tag="li"
                      :to="item.router"
                      active-class="active">
            <a>{{ item.tittle }}</a>
          </router-link>
        </ul>
      </div>

    </div>
  </div>

  <div class="screenNav">
    <div class="sleft" id="sledt_js" @click="xianshi">
      <img src="../../assets/images/ss.png" alt="">
    </div>
    <router-link to="/">MINISO UI</router-link>
  </div>

</div>

</template>

<style lang="less" src="./nav.less"></style>
<script type="text/javascript" src="./nav.js"></script>


