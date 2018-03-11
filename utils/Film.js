function getWellreceived(_this, urlType, SearchValue=null) {
    // arguments (传递this，搜索的类型，搜索电影的-默认为null-只有搜索电影时使用)
    _this.setData({
        FilmData: null,
        newFilmData: {}
    })
    wx.showLoading({
        title: '加载中',
    })

    let self = _this
    let url = ''
    switch(urlType) {
        // 250排名
        case "250":
            url = 'http://t.yushu.im/v2/movie/top250'
        break;
        // 热映
        case "WellReceived":
            url = 'http://t.yushu.im/v2/movie/in_theaters'
            break;
        // 搜索
        case "Search":
            url = `http://t.yushu.im/v2/movie/search?q=${SearchValue}`
            break;
    }
    // 'http://t.yushu.im/v2/movie/in_theaters'
    wx.request({
        url: url, //加载豆瓣热映api
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) {
            let s = res.data.subjects
            self.setData({
                FilmData: s
            })
            wx.hideLoading()
        }
    })

}
 //   跳转到details详细页面
function detailsNavigateGo(e) {
    //   点击的电影的id
    let id = e.currentTarget.dataset.filmnumber
    wx.navigateTo({
        url: `../Details/Details?id=${id}`,
        success: function (res) {

        },
        fail: function (res) {

        },
        complete: function (res) {

        },
    })
}
module.exports = {
    getWellreceived: getWellreceived,
    detailsNavigateGo: detailsNavigateGo,
}