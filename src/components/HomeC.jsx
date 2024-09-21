import React from 'react';
import * as THREE from "three";
import lock from "../assets_c/lock_4.glb";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import HighlightText from './HighlightText';
import { EffectComposer, Glitch, ColorAverage } from "@react-three/postprocessing";
import { GlitchMode, BlendFunction } from "postprocessing";
import DevelopmentNotice from './DevelopmentNotice';

const ModelWithAnimation = ({ endPosition = [0, 0, 0], mobileScale = 1 }) => {
  const { scene, animations } = useGLTF(lock);
  const mixerRef = useRef();
  const actionRef = useRef();
  const groupRef = useRef();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [currentPosition, setCurrentPosition] = useState([-20, 0, 0]); // Start from further left
  const { camera } = useThree();

  useEffect(() => {
    setAnimationComplete(false);

    if (animations.length) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      actionRef.current = mixerRef.current.clipAction(animations[0]);
      actionRef.current.setLoop(THREE.LoopOnce);
      actionRef.current.clampWhenFinished = true;

      actionRef.current.reset();
      actionRef.current.play();

      mixerRef.current.addEventListener("finished", () => {
        setAnimationComplete(true);
      });
    }

    // Animate position
    const animatePosition = () => {
      setCurrentPosition((prev) => {
        const newX = Math.min(prev[0] + 0.1, endPosition[0]); // Move 0.1 units per frame
        return [newX, prev[1], prev[2]];
      });

      if (currentPosition[0] < endPosition[0]) {
        requestAnimationFrame(animatePosition);
      }
    };

    animatePosition();

    // Center the model
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);

    // Adjust camera to fit the centered model
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
    cameraZ *= 1.6;

    camera.position.set(0, 2, cameraZ);
    camera.lookAt(0, 0, 0);

    // Create a noise texture
    const noiseTexture = new THREE.DataTexture(
      generateNoiseTextureData(512, 512),
      512,
      512,
      THREE.RGBFormat
    );
    noiseTexture.needsUpdate = true;

    // Apply new material to all meshes in the scene
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: 0xffffff,  // White base color
          metalness: 0.1,
          roughness: 0.8,
          map: noiseTexture,
        });
      }
    });

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
        mixerRef.current.uncacheRoot(scene);
      }
    };
  }, [animations, scene, camera, endPosition]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
    if (groupRef.current) {
      groupRef.current.position.set(...currentPosition);
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={[0.5 * mobileScale, 0.5 * mobileScale, 0.5 * mobileScale]} />
      <hemisphereLight intensity={0.845} color="#ffffff" groundColor="#444444" />
      <directionalLight position={[-5, 2, 5]} intensity={1.352} />
      <pointLight position={[-8, 3, 8]} intensity={1.183} />
      <pointLight position={[5, -2, -5]} intensity={0.507} />
      <spotLight
        position={[-10, 5, 5]}
        angle={0.6}
        penumbra={1}
        intensity={1.521}
        castShadow
      />
    </group>
  );
};

// Helper function to generate noise texture data
function generateNoiseTextureData(width, height) {
  const size = width * height;
  const data = new Uint8Array(3 * size);

  for (let i = 0; i < size; i++) {
    const stride = i * 3;
    const value = Math.random() * 128 + 64; // Generate values between 64 and 192
    data[stride] = value;
    data[stride + 1] = value;
    data[stride + 2] = value;
  }

  return data;
}

const GlitchEffect = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 50); // Glitch duration: 50ms
    }, 2000); // Glitch every 2 seconds

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <EffectComposer>
      <ColorAverage blendFunction={BlendFunction.OVERLAY} opacity={0.2} />
      <Glitch
        delay={[0, 0]}
        duration={[0.05, 0.05]}
        strength={[0.004, 0.004]}
        mode={GlitchMode.CONSTANT_WILD}
        active={isGlitching}
        ratio={0.02}
        columns={0.05}
      />
    </EffectComposer>
  );
};

const HomeC = () => {
  const [modelEndPosition, setModelEndPosition] = useState([-10, 0, 0]); // Original position
  const [mobileScale, setMobileScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { // Assuming 768px is your mobile breakpoint
        setMobileScale(1.5); // Increase scale by 50% for mobile
        setModelEndPosition([-14, 0, 0]); // Move more to the left for mobile
      } else {
        setMobileScale(1);
        setModelEndPosition([-10, 0, 0]); // Original position for larger screens
      }
    };

    handleResize(); // Set initial values
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div
        id="home"
        className="flex w-full h-screen m-auto"
      >
        <div className="w-full flex justify-between mx-auto max-mobile:flex-col">
          <div className="m-auto ml-[5%] w-[40%] h-[80%] max-mobile:w-[80%] max-mobile:h-[60%] max-mobile:mx-auto max-mobile:ml-auto">
            <div className="h-full">
              <Canvas key={Date.now()}>
                <ambientLight intensity={7.098} />
                <directionalLight position={[-5, 2, 5]} intensity={21.294} />
                <pointLight position={[-8, 3, 8]} intensity={17.745} />
                <pointLight position={[5, -2, -5]} intensity={8.8725} />
                <spotLight
                  position={[-10, 5, 5]}
                  angle={0.6}
                  penumbra={1}
                  intensity={21.294}
                  castShadow
                  target-position={[0, 0, 0]}
                />
                <ModelWithAnimation endPosition={modelEndPosition} mobileScale={mobileScale} />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={Math.PI / 1.5}
                />
                <GlitchEffect />
              </Canvas>
            </div>
          </div>

          <div className="m-auto flex flex-col items-end w-[45%] mr-[10%] max-mobile:w-[90%] max-mobile:items-center max-mobile:mr-auto">
            <HighlightText className="text-white text-4xl text-right font-semibold max-mobile:text-2xl max-mobile:text-center max-mobile:mt-6">
              Collaborate. Code. Create
            </HighlightText>
            <p className="text-right text-xl max-laptop:text-base mt-3 w-[80%] text-white font-light max-mobile:text-center max-mobile:m-auto max-mobile:text-md max-mobile:w-full max-mobile:mt-2">
              Welcome to Openspace – REC's hub for open-source innovation! Discover groundbreaking projects, collaborate with peers, and contribute to impactful initiatives. Whether you're a coding enthusiast or a creative visionary, Openspace is your platform to transform ideas into reality. Join our community where innovation thrives, and together, we'll shape the future of technology!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeC;
