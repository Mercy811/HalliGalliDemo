cc.Class({
    extends: cc.Component,

    properties: {
        // ...
        // score label 的引用
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
        // ...
        // 得分音效资源
        scoreAudio: {
            default: null,
            type: cc.AudioClip
        },
    },

    // use this for initialization
    onLoad: function () {
        //...
        // 初始化计分
      this.score = 0;
   },

    // called every frame
   update: function (dt) {

   },
   gainScore: function () {
     this.score += 1;
        // 更新 scoreDisplay Label 的文字
       this.scoreDisplay.string = 'Score: ' + this.score.toString();
       // 播放得分音效
       cc.audioEngine.playEffect(this.scoreAudio, false);

   },

});