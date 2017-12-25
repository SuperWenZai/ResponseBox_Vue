<template>
    <div class="main clearfix">
        <div class="code">
            <router-view></router-view>
        </div>

        <div class="show ">
            <div class="phone ">
                <div class="phonr_main ">
                    <div class="phonr_main_hiden ">
                        <div class="content ">
                            <iframe :src="url" frameborder="0" class="demo_page">       
                            <!-- http://localhost:8080/#/ -->
                            <!-- ../../index.html -->
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" src="./mainPage.less"></style>
<script type="text/javascript" src="./mainPage.js"></script>
