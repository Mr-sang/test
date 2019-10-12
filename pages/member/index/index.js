// pages/member/index/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic: '',
    name: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success(res) {
        console.log(res);
        that.setData({
          pic: res.userInfo.avatarUrl,
          name: res.userInfo.nickName
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

  },
  //退出登录
  logout: function () {
    wx.showModal({
      title: '提示',
      content: '确认退出登录吗？',
      success: function (res) {
        if (res.confirm) {
          wx.removeStorageSync('jump_to_login');
          wx.removeStorageSync('userToken');
          wx.removeStorageSync('myInviteCode');
          wx.switchTab({
            url: '/pages/index/index'
          });
        }
      }
    })
  }
})