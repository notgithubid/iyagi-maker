import IScene from '../Scene';
declare class Iyagi {
    private app;
    constructor(canvas: HTMLCanvasElement);
    play(scene: IScene): void;
}
export default Iyagi;
