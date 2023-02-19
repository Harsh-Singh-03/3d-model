import React, {useState, useEffect} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, useFBX } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import Samba from "./Silly Dancing.fbx"
import * as THREE from "three"
import "./styles.css";


const App = () => {
    const [play, setplay] = useState(true)
    const [text, settext] = useState("Pause")
    const [CangleX, setCangleX] = useState(0)
    const [CangleY, setCangleY] = useState(150)
    const [CangleZ, setCangleZ] = useState(250)

	// const ref = useRef()
	// useFrame((state, delta) => (ref.current.rotation.x += 0.01));

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
// useFBX(url)

function SuzanneFBX() {
	let fbx = useFBX(Samba)
	return <primitive object={fbx} dispose={null}  />
}
const MoveRight = ()=>{
    setplay(false)
    console.log('.')
    settext("play")
    setCangleX(-1000)
}
useEffect(() => {
 console.log(CangleX)
}, [CangleX])

// document.addEventListener('touchstart', handleTouchStart, false);        
// document.addEventListener('touchmove', handleTouchMove, false);

// var xDown = null;                                                        
// var yDown = null;

// function getTouches(evt) {
//   return evt.touches ||             // browser API
//          evt.originalEvent.touches; // jQuery
// }                                                     
                                                                         
// function handleTouchStart(evt) {
//     const firstTouch = getTouches(evt)[0];                                      
//     xDown = firstTouch.clientX;                                      
//     yDown = firstTouch.clientY;         
//     console.log(yDown)                             
// };                                                
                                                                         
// function handleTouchMove(evt) {
//     if ( ! xDown || ! yDown ) {
//         return;
//     }

//     var xUp = evt.touches[0].clientX;                                    
//     var yUp = evt.touches[0].clientY;

//     var xDiff = xDown - xUp;
//     var yDiff = yDown - yUp;
                                                                         
//     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
//         if ( xDiff > 0 ) {
//             /* right swipe */ 
//             console.log(xDiff)
//         } else {
//             /* left swipe */
//             console.log(xDiff)
//         }                       
//     } else {
//         if ( yDiff > 0 ) {
//             /* down swipe */ 
//         } else { 
//             /* up swipe */
//         }                                                                 
//     }
//     /* reset values */
//     xDown = null;
//     yDown = null;                                             
// };

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
    // camera={{ fov: 90, position: [150, 150, 150] }
  return (
    <>
    <Canvas style={{display : "grid !important", placeItems: "center", width: "100vw", height: "100vh"}} camera={{ fov: 90, position: [CangleX , CangleY , CangleZ] }} >
    <OrbitControls
        minDistance={100}
        autoRotate= {play}
        rotateSpeed={10}
        maxDistance={330}
        // onChange={MoveRight}
        listenToKeyEvents={true}
       keys = {{
            LEFT: 'ArrowLeft', //left arrow
            UP: 'ArrowUp', // up arrow
            RIGHT: 'ArrowRight', // right arrow
            BOTTOM: 'ArrowDown' // down arrow
        }}
        mouseButtons = {{
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.PAN
        }}
        // 
    />
    <Physics>
        <SuzanneFBX style={{marginTop: "200px"}} />
    </Physics>
    <Stars radius={200} depth={50} count={10000} factor={4} saturation={0} fade speed={1}  />
    {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} /> */}
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 15, 10]} angle={0.3} />
    {/* <App/> */}
</Canvas>
<button  onClick={()=> {setplay(play === true ? false : true); settext(text === "Pause" ? "Play" : "Pause")}} style={{position: "absolute", top: "100px", right: "100px", background: "none", border: "1px solid #fff", color: "#fff", cursor: "pointer", padding: "8px 30px"}}>{text}</button>

<i style={{position: "absolute", bottom: "150px", right: "45%", color: "#fff", cursor: "pointer", transform: "rotate(90deg)" }} class="fas fa-arrow-left"></i>
<i style={{position: "absolute", bottom: "50px", right: "45%", color: "#fff", cursor: "pointer", transform: "rotate(90deg)"}} class="fas fa-arrow-right"></i>
<i onClick={MoveRight} style={{position: "absolute", bottom: "100px", right: "40%", color: "#fff", cursor: "pointer"}} class="fas fa-arrow-right"></i>
<i style={{position: "absolute", bottom: "100px", right: "50%", color: "#fff", cursor: "pointer"}} class="fas fa-arrow-left"></i>

</>
  )
}

export default App
