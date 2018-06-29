
var gameResources = {
    bg_front_spacedust: 'Resources/Backgrounds/bg_front_spacedust.png',
    bg_galaxy: 'Resources/Backgrounds/bg_galaxy.png',
    bg_planetsunrise: 'Resources/Backgrounds/bg_planetsunrise.png',
    bg_spacialanomaly: 'Resources/Backgrounds/bg_spacialanomaly.png',
    bg_spacialanomaly2: 'Resources/Backgrounds/bg_spacialanomaly2.png',

    ship: "Resources/Ship/my_ship.png",
    enemy_ship: "Resources/Ship/enemy_ship.png",
    star: "Resources/Ship/star.jpg",
    shot: "Resources/Ship/ball.jpg",
};
var res = {
    bgMusic_mp3 : 'res/Music/bgMusic.mp3',
    bgMusic_ogg : 'res/Music/bgMusic.ogg',
    bgMusic_wav : 'res/Music/bgMusic.wav',
    buttonEffet_mp3 : 'res/Music/buttonEffet.mp3',
    buttonEffet_ogg : 'res/Music/buttonEffet.ogg',
    buttonEffet_wav : 'res/Music/buttonEffet.wav',
    explodeEffect_mp3 : 'res/Music/explodeEffect.mp3',
    explodeEffect_ogg : 'res/Music/explodeEffect.ogg',
    explodeEffect_wav : 'res/Music/explodeEffect.wav',
    fireEffect_mp3 : 'res/Music/fireEffect.mp3',         //unused
    fireEffect_ogg : 'res/Music/fireEffect.ogg',         //unused
    fireEffect_wav : 'res/Music/fireEffect.wav',         //unused
    mainMainMusic_mp3 : 'res/Music/mainMainMusic.mp3',
    mainMainMusic_ogg : 'res/Music/mainMainMusic.ogg',
    mainMainMusic_wav : 'res/Music/mainMainMusic.wav',
    shipDestroyEffect_mp3 : 'res/Music/shipDestroyEffect.mp3',
    shipDestroyEffect_ogg : 'res/Music/shipDestroyEffect.ogg',
    shipDestroyEffect_wav : 'res/Music/shipDestroyEffect.wav',
    arial_14_fnt : 'res/arial-14.fnt',
    arial_14_png : 'res/arial-14.png',
    b01_plist : 'res/b01.plist',
    b01_png : 'res/b01.png',
    cocos2d_html5_png : 'res/cocos2d-html5.png',
    explosion_plist : 'res/explosion.plist',
    explosion_png : 'res/explosion.png',
    flare_jpg : 'res/flare.jpg',
    gameOver_png : 'res/gameOver.png',
    gameOverBack_png : 'res/gameoverBack.png',
    level01_tmx : 'res/level01.tmx',
    loading_png : 'res/loading.png',
    logo_png : 'res/logo.png',
    logoBack_png : 'res/logoBack.png',
    menu_png : 'res/menu.png',
    menuTitle_png : 'res/menuTitle.png',
    textureOpaquePack_plist : 'res/textureOpaquePack.plist',
    textureOpaquePack_png : 'res/textureOpaquePack.png',
    textureTransparentPack_plist : 'res/textureTransparentPack.plist',
    textureTransparentPack_png : 'res/textureTransparentPack.png'
};

var g_mainmenu = [
    res.loading_png,
    res.flare_jpg,
    res.menu_png,
    res.logo_png,
    res.logoBack_png,
    res.b01_png,
    res.b01_plist,
    res.mainMainMusic_mp3,
    res.mainMainMusic_ogg,
    res.mainMainMusic_wav,
    res.menuTitle_png,
    res.textureTransparentPack_plist,
    res.textureTransparentPack_png
];

var g_maingame = [
    //image
    res.cocos2d_html5_png,
    res.gameOver_png,
    res.gameOverBack_png,
    res.arial_14_png,
    res.explosion_png,
    res.textureOpaquePack_png,

    //tmx
    //res.level01_tmx,

    //plist
    res.explosion_plist,
    res.textureOpaquePack_plist,

    //music
    res.bgMusic_mp3,
    res.bgMusic_ogg,

    //effect
    res.buttonEffet_wav,
    res.explodeEffect_wav,
    res.fireEffect_wav,
    res.shipDestroyEffect_wav,
    res.buttonEffet_wav,
    res.explodeEffect_wav,
    res.fireEffect_wav,
    res.shipDestroyEffect_wav,
    res.buttonEffet_wav,
    res.explodeEffect_wav,
    res.fireEffect_wav,
    res.shipDestroyEffect_wav,

    // FNT
    res.arial_14_fnt
];
