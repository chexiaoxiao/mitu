<template>
    <div>
<!--         :href="'#/main/userInfo/'+data.ud_id+'/'+data.article[0].articleId"-->
        <a @click="userIn(data.article_id)">
          <img :src="data.a_image" alt="" class="banner">
        </a>
        <p class="title">{{data.a_title}}</p>
        <div class="view">
            <div>
                <img src="../../../public/images/cmdimg/view.png" alt="" class="cmdsee" ><span>{{data.view_num}}</span>
            </div>
            <div>
                <img src="../../../public/images/cmdimg/zan.png" alt="" class="cmdsee" @click="data.good_num++"><span>{{data.good_num}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "articleShow",
        // props:["data"],
        data(){
            return{
                user:null
            }
        },
        methods:{
            //向后端传id
            userIn(a){
                this.$axios.get('http://192.168.137.254:8080/api/discover/content/?article_id='+a)
                    .then(()=>{
                        console.log(1)
                        this.$router.push('/main/articleInfo/'+a)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }
        }
    }
</script>

<style scoped>
    .banner{
        padding-top: 0.05rem;
        width:100%;
    }
    .title{
        width:90%;
        white-space: nowrap;
        margin: 0 auto;
        padding: 0 20px;
        margin-top: 20px;
        line-height: 30px;
        overflow: hidden;
        font-size: 17px;
        text-overflow: ellipsis;
    }
    .cmdsee{
        width: 27px;
        height: 20px;
        vertical-align: middle;
    }
    .view{
        width:90%;
        margin: 0 auto;
        text-align: left;

    }
    .view>div{
        margin: 0.1rem 0.2rem 0.1rem 0;
        display: inline-block;
    }
    .view span{
        display: inline-block;
        margin-left:0.05rem;
        font-size: 0.12rem;
        color: #999;
        font-weight: 400;
        vertical-align: middle;
    }

</style>