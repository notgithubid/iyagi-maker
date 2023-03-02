import IScene from '.';
export declare type ISceneEventType = 'start';
export default class ISceneEvent extends CustomEvent<IScene> {
    constructor(type: ISceneEventType);
}