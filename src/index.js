import { createRoot } from 'react-dom/client'
import App from './App';
// import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls, Stars, Sky, useFBX, PerspectiveCamera } from "@react-three/drei";
// import { Physics, usePlane, useBox } from "@react-three/cannon";
// import Samba from "./Silly Dancing.fbx"
// import ReactThreeFbxViewer from "react-three-fbx-for-pyt";
// import "./styles.css";
// import { useRef } from 'react'
// import * as  THREE from "three";


// 	let cameraPosition =
// 	{
// 		x: 100,
// 		y: 300,
// 		z: 600,
// 	};
// 	// const ref = useRef()
// 	// useFrame((state, delta) => (ref.current.rotation.x += 0.01));

// 	function Box() {
// 	const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
// 	return (
// 		<mesh
// 			onClick={() => {
// 				api.velocity.set(0, 2, 0);
// 			}}
// 			ref={ref}
// 			position={[0, 2, 0]}
// 		>
// 			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
// 			<meshLambertMaterial attach="material" color="red" />
// 		</mesh>
// 	);
// }
// // useFBX(url)

// function SuzanneFBX() {
// 	let fbx = useFBX(Samba)
// 	return <primitive object={fbx} />
// }
// function Plane() {
// 	const [ref] = usePlane(() => ({
// 		rotation: [-Math.PI / 2, 0, 0],
// 	}));
// 	return (
// 		<mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
// 			<planeBufferGeometry attach="geometry" args={[100, 100]} />
// 			<meshLambertMaterial attach="material" color="transparent" />
// 		</mesh>
// 	);
// }


createRoot(document.getElementById('root')).render(
	<App/>
);