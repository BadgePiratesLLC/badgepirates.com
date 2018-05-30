import {AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { EffectComposer, GlitchPass, RenderPass, SMAAPass, BloomPass, KernelSize } from "postprocessing";
import { Scene } from './scene';
import * as THREE from 'three';

@Component({
  selector: 'app-threejs-animation',
  templateUrl: './threejs-animation.component.html',
  styleUrls: ['./threejs-animation.component.less']
})
export class ThreejsAnimationComponent implements AfterViewInit {
  //setup canvas
  @ViewChild('canvas')
  private canvasRef: ElementRef;

  private get canvas() : HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  //setup threejs and import custom classes
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private scene: Scene;
  private clock = new THREE.Clock();
  private composer;

  //camera settings
  public cameraPos = { x: -15, y: 0, z: 0 };
  public fieldOfView: number = 25;
  public nearClippingPane: number = 1;
  public farClippingPane: number = 1000;


  constructor() { }

  private createRenderer(){
    let size = this.getWidthAndHeight();
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(size.width, size.height + 74);
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.renderReverseSided = false;
  }

  private createScene() {
    this.scene = new Scene();
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );
    this.camera.position.set(this.cameraPos.x,this.cameraPos.y,this.cameraPos.z);
    this.camera.lookAt(0,0,0)
  }

  private addObjectsToScene() {
    let backgroundTexture = new THREE.ImageUtils.loadTexture( '/assets/img/logo-big-transparent.png' );
    backgroundTexture.needsUpdate = false
		var backgroundPlane = new THREE.Mesh( new THREE.PlaneGeometry(8, 8), new THREE.MeshBasicMaterial( {map: backgroundTexture, side: THREE.DoubleSide} ) );
		backgroundPlane.rotation.y = Math.PI / 2; //rotate the plane 90 degrees
		this.scene.add( backgroundPlane );
  }

  private addEffects(){
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene.scene, this.camera));
    let glitchPass = new GlitchPass();
    let smaaPass = new SMAAPass(Image);
    let bloomPass = new BloomPass({
			resolutionScale: 20,
			intensity: 0.5,
			distinction: 1.0
		});
    glitchPass.renderToScreen = true;
    this.composer.addPass(bloomPass);
    this.composer.addPass(smaaPass);
    this.composer.addPass(glitchPass);
  }

  private animate(){
      requestAnimationFrame(this.animate.bind(this));
      this.composer.render(this.clock.getDelta())
  }

  //Update scene after resizing.
  public onResize(event) {
    this.camera.aspect = this.getAspectRatio();
    this.camera.updateProjectionMatrix();

    let size = this.getWidthAndHeight();
    this.canvas.width = size.width;
    this.canvas.height = size.height + 74;
    this.renderer.setSize(size.width, size.height);
  }

  private getAspectRatio() {
    let size = this.getWidthAndHeight();
    return size.width / size.height;
  }

  private getWidthAndHeight() {
      let width = window.innerWidth;
      let height = window.innerHeight;
      if(width <= 767){
        height = 530
      }
      return {width:width, height: height};
  }

  //wait for view to init before starting threejs
  public ngAfterViewInit() {
    this.createRenderer();
    this.createScene();
    this.addObjectsToScene();
    this.addEffects();
    this.animate();
  }
}
