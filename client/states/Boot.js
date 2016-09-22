import Phaser from '../Phaser.js';
const kdeWallpapers = require('../assets/covers/kde-wallpapers.png');

// color shema
// https://color.adobe.com/tulka-beach-color-theme-8613047/edit/?copy=true&base=2&rule=Custom&selected=1&name=Copy%20of%
// 2
// 0tulka%20beach&mode=rgb&rgbvalues=0.054901960784313725,0.26666666666666666,0.3607843137254902,0.49411764705882355,0.8
// 1
// 96078431372549,0.9529411764705882,0.5176470588235295,0.8627450980392157,0.9686274509803922,0.4549019607843137,0.44705
// 8 8235294118,0.29411764705882354,1,0.8980392156862745,0.807843137254902&swatchOrder=0,1,2,3,4

class Boot {

  preload() {
    this.stage.setBackgroundColor('#74724B');
  }

}

export default Boot;
