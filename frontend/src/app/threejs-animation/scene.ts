import * as THREE from 'three';

export class Scene {

  private _scene: THREE.Scene;

  constructor() {
    this.create();
  }

  public create(){
    this._scene = new THREE.Scene();
  }

  get scene():THREE.Scene {
    return this._scene;
  }

  set scene(value:THREE.Scene) {
    this._scene = value;
  }

  public add(object) {
    this._scene.add(object);
  }
}
