"use client";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import clsx from "clsx";
import {Suspense} from "react";
const RenderModel = ({children, className}) => {
  return (
    <Canvas
        className={clsx("w-screen h-screen relative -z-10", className)}
        shadows={false}
        dpr={[1, 2]}
    >
        <Suspense fallback={null}>
            {children}
        </Suspense>
        <Environment preset="dawn"/>
    </Canvas>
  )
}

export default RenderModel
