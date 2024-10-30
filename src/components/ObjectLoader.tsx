import { loadGLTFModel } from "@/lib/loadGLTFModel";
import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Loader, { ObjectContainer } from "./ui/object-loader";

const easeOutCircular = (t: number) => {
  return Math.sqrt(1 - Math.pow(t - 1, 2));
};

const ObjectFigurine = ({ object }: { object: string }) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef<THREE.WebGLRenderer | null>(null);

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;

    if (container && renderer) {
      const screenW = container.clientWidth;
      const screenH = container.clientHeight;

      renderer?.setSize(screenW, screenH);
    }
  }, []);

  useEffect(() => {
    const { current: container } = refContainer;
    if (container) {
      const screenW = container.clientWidth;
      const screenH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(screenW, screenH);

      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;

      const scene = new THREE.Scene();
      const target = new THREE.Vector3(0, 1.2, 0);
      const initialCamerPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      );

      // 680 -> 240
      // 8 -> 6
      const scale = screenH * 0.005 + 1.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        70000
      );
      camera.position.copy(initialCamerPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1;
      controls.target = target;

      loadGLTFModel(scene, object, {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req: number | null = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;
        if (frame <= 100) {
          const p = initialCamerPosition;
          const rotSpeed = -easeOutCircular(frame / 100) * Math.PI * 20;

          camera.position.y = 8;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        if (req !== null) {
          cancelAnimationFrame(req);
        }
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return (
    <ObjectContainer ref={refContainer}>
      {loading && <Loader />}
    </ObjectContainer>
  );
};

export default ObjectFigurine;
