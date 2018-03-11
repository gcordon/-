var FilmTools = require('../../utils/Film.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      newFilmData: {},
      ToStar: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
      // 加载豆瓣详情
      wx.showLoading({
          title: '加载中',
      })
      let self = this
      wx.request({
          url: `http://t.yushu.im/v2/movie/subject/${Number(options.id)}`, //加载豆瓣热映api
          header: {
              'content-type': 'application/json' // 默认值
          },
          success: function (res) {
              let s = res.data
              self.setData({
                  FilmData: s
              })
              wx.hideLoading()
              for (let i = 0; i < s.casts.length; i++) {
                  self.data.ToStar.push(s.casts[i].name)
                  self.setData({
                      ToStar: self.data.ToStar
                  })
              }
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