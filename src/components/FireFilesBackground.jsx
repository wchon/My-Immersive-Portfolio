"use client";
import { useState, useEffect } from "react";

const createFireFly = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,

})

const FireFilesBackground = () => {

    const [fireFlies, setFireFlies] = useState([]);

    useEffect(() => {
        const addFireflyPeriodically = () => {
            const newFireFly = createFireFly();
            setFireFlies((currentFireflies)=>[
                ...currentFireflies.slice(-14),
                newFireFly
            ]);

            
        }
        const interval = setInterval(addFireflyPeriodically, 1000);   
        return () => clearInterval(interval);
    }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {
            fireFlies.map((fireFly) => {
                return (
                <div 
                    key={fireFly.id}
                    className="absolute rounded-full bg-accent w-[10px] h-[10px] bg-firefly-radial opacity-50"
                    style={{
                        top: fireFly.top,
                        left: fireFly.left,
                        animation: `move ${fireFly.animationDuration} infinite alternate`
                    }}    
                >

                </div>)
            }) 
        }
    </div>
  )
}

export default FireFilesBackground