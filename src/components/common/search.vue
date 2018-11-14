<template>
  <div class="search-box">
    <div class="search-simple" v-if="key.style===-1">
      <Input v-model="key.text" size="large" placeholder="Enter something..." style="width: 92%;">
          <Select v-model="select" slot="prepend" style="width: 80px">
              <Option v-for="(li,index) in rangeList" :key="index" :value="li.name">{{li.name}}</Option>
          </Select>
          <Button slot="append" style="width: 80px; color:#fff;" @click="simpleSearch">搜索</Button>
      </Input>
      <p class="advanced" @click="seniorSearch">高级搜索</p>
    </div>

    <div class="advanced-search" v-else>
      <Row type="flex" justify="space-between" align="middle">
         <Col span="10">
            <Row type="flex" align="middle">
                <Col span="5">{{Filterlist[0].title}}：</Col>
                <Col span="19">
                  <Select v-model="key.oragons" clearable>
                    <Option v-for="(i,val) in Filterlist[0].label" :value="val" :key="i.name">{{ i.name }}</Option>
                  </Select>
                </Col>
            </Row>
         </Col>
         <Col span="10" offset="2">
            <Row type="flex" justify="center" align="middle">
              <Col span="4">{{Filterlist[1].title}}：</Col>
              <Col span="20">
                <Cascader :data="classify" change-on-select @on-change="changeClassify"></Cascader>
              </Col>
            </Row>
         </Col>
      </Row>

      <Row type="flex" justify="space-between" align="middle">
         <Col span="10">
            <Row type="flex" align="middle">
                <Col span="5">发文单位：</Col>
                <Col span="19">
                  <Select v-model="key.company" clearable>
                    <Option v-for="(i,val) in Filterlist[0].label" :value="val" :key="i.name">{{ i.name }}</Option>
                  </Select>
                </Col>
            </Row>
         </Col>
         <Col span="10" offset="2">
            <Row type="flex" justify="center" align="middle">
              <Col span="4">起止时间：</Col>
              <Col span="20"><DatePicker type="daterange" @on-change="changeTimes" placeholder="起止时间" style="width: 100%"></DatePicker></Col>
            </Row>
         </Col>
      </Row>

      <Row type="flex" justify="center" align="middle">
        <Col span="24"><Input size="large" search enter-button="搜索" @on-search="advancedSearch" placeholder="Enter something..." /></Col>
      </Row>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      select: '全部',
      selectBox: [
        {
          id: 1,
          name: '全部'
        }, {
          id: 2,
          name: '标题'
        }, {
          id: 3,
          name: '内容'
        }
      ],
      key: {
        text: '',
        oragons: '',
        bigCids: '',
        subCids: '',
        startTime: '',
        endTime: '',
        selectid: 1,
        style: -1,
        page: 1
      }
    }
  },
  props: ['list'],
  computed: {
    Filterlist: function () {
      return this.list
    },
    rangeList: function () {
      return this.selectBox
    },
    classify: function () {
      let now = []
      let list = this.$store.state.home.linklist
      for (const key in list) {
        if (list.hasOwnProperty(key)) {
          const element = list[key]
          let childrenList = []
          for (const c in element.item) {
            if (element.item.hasOwnProperty(c)) {
              const e = element.item[c]
              childrenList.push({
                value: e.id,
                label: e.name
              })
            }
          }
          now.push({
            value: element.id,
            label: element.name,
            children: childrenList
          })
        }
      }
      return now
    }
  },
  methods: {
    selectId (val) {
      let list = this.selectBox
      for (let i = 0; i < list.length; i++) {
        const element = list[i]
        if (element.name === this.select) {
          this.key.selectid = element.id
        }
      }
    },
    simpleSearch () {
      this.key.style = -1
      this.$emit('on-search', this.key)
      this.$router.push('/search')
    },
    seniorSearch () {
      this.key.style = 1
      this.$emit('on-search', this.key)
      this.$router.push('/search')
    },
    advancedSearch (e) {
      this.key.text = e
      this.key.style = 1
      this.$emit('on-search', this.key)
    },
    changeTimes (key) {
      this.key.startTime = key[0]
      this.key.endTime = key[1]
    },
    changeClassify (key) {
      if (key.length === 1) {
        this.key.bigCids = key[0]
      } else {
        this.key.bigCids = key[0]
        this.key.subCids = key[1]
      }
    }
  },
  watch: {
    'select': 'selectId'
  }
}
</script>

<style lang="scss">
.search-box{
  margin: -20px;
  padding: 20px;
  font-size: 14px;
}
.search-simple{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  .advanced{
    color: #2d8cf0;
    font-size: 14px;
    cursor: pointer;
  }
  .ivu-input-group-append{
    border: 1px solid #2d8cf0;
    background-color: #2d8cf0;
  }
}
.advanced-search{
  .ivu-row-flex{
    margin-top: 20px;
    &:first-child{
      margin-top: 0;
    }
  }
}
</style>
