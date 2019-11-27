<template>
    <div class="travellerCon">
        <!-- :href="'#/main/userInfo/'+data.ud_id"-->
        <a v-for="(data,u) in data" :key="u" @click="userIn(data.ud_id)">
            <img :src="data.ud_img" alt="">
            <h2>{{data.nick_name}}</h2>
            <p>{{data.ud_info}}</p>
        </a>
    </div>
</template>

<script>
    export default {
        name: "traveller",
     data(){
            return {
                data:null
            }
        },
        methods:{
            _initDiscoverInfo(){
                this.$axios.get('http://192.168.137.254:8080/api/discover/lxj')
                    .then(res=>{
                        this.data=res.data.data
                        // console.log(this.data)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            },
            userIn(a){
                this.$axios.get('http://192.168.137.254:8080/api/discover/userArticle/?ud_id='+a)
                    .then(()=>{
                        this.$router.push('/main/userInfo/'+a)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }
        },
        beforeMount() {
           this._initDiscoverInfo()
        }

    }
</script>

<style scoped>
    .travellerCon{
        width:100%;
        margin: 0 auto;
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
    }
    .travellerCon>a>img{
        width: 60px;
        height: 60px;
        border-radius: 100px;
    }
    .travellerCon>a{
        display: block;
        /*float: left;*/
        width: 40%;
        height: 1.5rem;
        overflow: hidden;
        text-align: center;
        padding: 10px 15px 10px;
    }
    .travellerCon>a>p{
        color: #999;
        font-size: 12px;
        line-height: 1.4;
        height: 32px;
        overflow: hidden;
        text-overflow: ellipsis;
    }


</style>