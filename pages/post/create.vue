<template>
  <div class="inputs">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <div class="title">
            <p>发表新攻略</p>
            <span>分享你的个人游记，让更多人看到噢！</span>
          </div>
          <el-form ref="text" :model="text" label-width="80px">
            <el-input v-model="text.title" placeholder="请输入标题" />
            <div id="app">
              <VueEditor
                ref="vueEditor"
                :config="config"
              />
            </div>
            <div class="clooseCity">
              <span>选择城市</span>
              <el-select
                v-model="text.city"
                :remote-method="remoteMethod"
                filterable
                remote
                placeholder="请搜索游玩城市"
                :loading="loading"
              >
                >
                <el-option
                  v-for="item in options4"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="post">
              <el-form-item>
                <el-button type="primary" @click="add">
                  发布
                </el-button>
                <i>或者 </i>
                <span>保存到草稿</span>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple" />
        <p>草稿箱(0)</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css'
let VueEditor = null
if (process.browser) {
  VueEditor = require('vue-word-editor').default
}
export default {
  name: 'App',

  components: {
    VueEditor
  },

  data () {
    return {
      text: {
        // 文章内容
        content: '',
        // 文章标题
        title: '',
        // 城市id | 城市名称
        city: ''
      },
      filterable: true,
      remote: true,
      options4: [],
      loading: false,
      config: {
        // 上传图片的配置
        uploadImage: {
          url: 'http://localhost:1337/upload',
          name: 'files',
          uploadSuccess (res, insert) {
            insert('http://localhost:1337' + res.data[0].url)
            console.log(res)
          }
        },

        // 上传视频的配置
        uploadVideo: {
          url: 'http://localhost:1337/upload',
          name: 'files',
          uploadSuccess (res, insert) {
            insert('http://localhost:1337' + res.data[0].url)
          }
        }
      },
      input: ''
    }
  },
  mounted () {
    this.$axios.post('/posts', this.text).then((res) => {
      console.log(res)
    })
  },
  methods: {
    add () {
      // eslint-disable-next-line no-unused-vars
      this.content = this.$refs.vueEditor.editor.root.innerHTML
      console.log(this.$refs.vueEditor.editor.root.innerHTML)
    }
  }
}
</script>
<style lang='less' scoped>
.inputs {
  height: 800px;
  .title {
    height: 75px;
    padding-bottom: 10px;
  }
  p {
    font-size: 23px;
  }
  span {
    margin: 10px, 0;
    color: #cccccc;
    font-size: 12px;
  }
  .el-input {
    margin-bottom:20px;
  }
 .clooseCity{
position: relative;
top: 84px;
 }
 .post{
position: relative;
top: 118px;
left: -82px;
i{
 font-style: normal;
}
span{
  font-size: 13px;
  color: rgb(238, 147, 28);
}
 }
}
#vue-editor-wrapper[data-v-60ce3aab] {
    position: relative;
    height: 400px;
}
</style>
