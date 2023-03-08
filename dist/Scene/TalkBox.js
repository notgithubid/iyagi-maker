"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTalkBox = void 0;
const pixi_js_1 = require("pixi.js");
const MESSAGE_BOX_HEIGHT = 200;
const STYLE_NAME = new pixi_js_1.TextStyle({
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: 0xffffff,
});
const getMessageStyle = (width) => new pixi_js_1.TextStyle({
    fontFamily: 'Arial',
    fontSize: 24,
    fontWeight: '600',
    wordWrap: true,
    wordWrapWidth: width - 40,
    fill: [0xffffff, 0xaaaaaa],
});
const getTalkBox = (speaker, message, { width, height }) => {
    const talkBox = new pixi_js_1.Graphics();
    const talkBoxWidth = Math.round(width / 2);
    talkBox.width = talkBoxWidth;
    talkBox.x = talkBoxWidth;
    talkBox.y = 0;
    talkBox.beginFill(0x000000, 0.7);
    talkBox.drawRect(0, 0, talkBoxWidth, height);
    talkBox.endFill();
    const nameText = new pixi_js_1.Text(speaker.getName(), STYLE_NAME);
    talkBox.addChild(nameText);
    const messageText = new pixi_js_1.Text(message, getMessageStyle(talkBoxWidth));
    messageText.x = 20;
    messageText.y = MESSAGE_BOX_HEIGHT;
    talkBox.addChild(messageText);
    return talkBox;
};
exports.getTalkBox = getTalkBox;