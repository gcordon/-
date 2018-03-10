Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgUrls: [
          'http://www.moepan.net/uploads/2018031010354034391930.jpg',
          'http://www.moepan.net/uploads/2018031010355996473950.jpg',
          'http://www.moepan.net/uploads/2018031010361798167065.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      FilmData: null,
      newFilmData: {},
      txt: '',
    //   loading开关
      hiddenLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  log(log) {
    console.log(log)
  },
  onLoad: function (options) {
    // 加载豆瓣热映
      this.getWellreceived()
     
  },
  getWellreceived() {
      let self = this
        wx.request({
            url: 'http://t.yushu.im/v2/movie/in_theaters', //加载豆瓣热映api
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                let s = res.data.subjects
                
                // 
                self.setData({
                    FilmData: s,
                    hiddenLoading: true,
                })
                
            }
        })
        
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})