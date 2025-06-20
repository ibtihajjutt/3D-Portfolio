import React from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import AlienModel from './alien-transformed.glb?url'; // Use ?url to load the model

export function Alien(props) {
  const group = React.useRef();
  const { scene, animations } = useGLTF(AlienModel); // Use the imported URL
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.material}
          skeleton={nodes.Object_9.skeleton}
          position={[0.218, 0.978, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.Outline}
          skeleton={nodes.Object_10.skeleton}
          position={[0.218, 0.978, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(AlienModel); // Preload the model using the imported URL