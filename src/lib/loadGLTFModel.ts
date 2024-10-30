import * as THREE from "three";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function loadGLTFModel(
  scene: THREE.Scene,
  glbPath: string,
  options: { receiveShadow: boolean; castShadow: boolean } = {
    receiveShadow: true,
    castShadow: true,
  }
) {
  const { receiveShadow: recieveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader: GLTFLoader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const gltfObject = gltf.scene;
        gltfObject.name = "window";
        gltfObject.position.y = 0;
        gltfObject.position.x = 0;
        gltfObject.receiveShadow = recieveShadow;
        gltfObject.castShadow = castShadow;
        scene.add(gltfObject);

        gltfObject.traverse(function (child: THREE.Object3D) {
          if (child as Mesh) {
            child.castShadow = castShadow;
            child.receiveShadow = recieveShadow;
          }
        });
        resolve(gltfObject);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}
