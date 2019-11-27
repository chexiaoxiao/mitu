<template>
	<div class="discover">
		<header>
			<div :class="change===true?'cmd-change':'cmd-noChange'" @click="changeOne">精彩</div>
			<div :class="change===true?'cmd-noChange':'cmd-change'" @click="changeTwo">旅行家</div>
		</header>
			<div v-if="change">
				<div class="searchBox">
					<a href="#/seach"><input type="text" placeholder="搜索精彩内容" href="#/seach"></a>
				</div>
				<div>
					<img src="../../public/images/cmdimg/banner.png" />
				</div>
				<user-show :data="user"></user-show>
			</div>
			<div v-else class="traveller">
				<img src="../../public/images/cmdimg/travellerBanner.png" />
				<traveller></traveller>
			</div>
	</div>

</template>

<script>
	import userShow from "../components/discover/userShow";
	import traveller from "../components/discover/traveller";
	export default{
		name:"Discover",
		components:{
			userShow,
			traveller
		},
		data(){
			return {
				change:true,
				isLoading: false,
				user:null
			}
		},
		methods:{
			changeOne(){
				this.change=true;
			},
			changeTwo(){
				this.change=false;
			},
			//获取数据
            _initDiscoverInfo(){
                this.$axios.get('http://192.168.137.254:8080/api/discover/jc')
                    .then(res=>{
                        this.user=res.data.data
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }
		},
		beforeMount() {
			// let allData =require('../api/api');
			// this.user=allData;
            this._initDiscoverInfo()
		}
	}
</script>

<style scoped>
.discover{
	font-size: 0.12rem;
	text-align: left;
	margin-bottom: 0.5rem;
	overflow: hidden;

}
.discover>div{
	width: 100%;
}
.discover>header{
	display: flex;
	justify-content: center;
	width:100%;
	height:0.5rem;
	background-color: #fff;
	border-bottom: 1px solid #dfdfdf;
	text-align: center;
	position: fixed;
	top: 0;
	z-index: 10;
}
.cmd-noChange{
	width:0.8rem;
	margin: 0 0.1rem;
	font-size: 0.17rem;
	font-weight: 600;
	line-height: 0.44rem;
}
.cmd-change{
    width:0.8rem;
	margin: 0 0.1rem;
	border-color: rgb(240, 100, 60);
	color: rgb(240, 100, 60);
	font-size: 0.17rem;
	font-weight: 600;
	border-bottom: 2px solid rgb(240, 100, 60);
	line-height: 0.44rem;
}
.searchBox>a{
	margin-top: 0.5rem;
	padding: 10px 20px;
	flex: auto;
	display: -webkit-box;
	display: flex;
	background-color: rgb(245,245,245);
}
	.searchBox>a>input{
		display: block;
		flex: 1;
		background-color: #fff;
		border-radius: 100px;
		position: relative;
		padding-left: 40px;
		height: 30px;
		line-height: 30px;
		font-size: 17px;
		color: #999;
		border: 1px solid #dfdfdf;
		text-align: left;
		outline: none;
	}
	img{
		width:100%;
	}
	.traveller{
     margin-top: 0.5rem;
	}
.traveller>img{
	width: 100%;
	height: 2.2rem;
}

</style>


