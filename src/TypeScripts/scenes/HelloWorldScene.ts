import logo1 from '../../Image/typescript.svg'

enum ImageNames
{
	Sky = 'sky',
	Logo = 'logo',
	RedParticle = 'red_particle'
}

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {

        this.load.image(ImageNames.Sky,logo1);
    }

    create()
    {
        this.add.image(400, 300, ImageNames.Sky);
	}
}