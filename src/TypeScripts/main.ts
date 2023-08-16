import Phaser from 'phaser'
import HelloWorldScene from './scenes/HelloWorldScene'
import Consts from './common/Consts'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: Consts.CANVAS_WIDTH_PX,
	height: Consts.CANVAS_HEIGHT_PX,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [HelloWorldScene],
	scale:{
		fullscreenTarget:"app",
		mode:Phaser.Scale.ScaleModes.FIT,
	},
}

export default new Phaser.Game(config)