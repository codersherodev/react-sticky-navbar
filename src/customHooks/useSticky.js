import { useEffect, useState } from 'react'

export default function useSticky(offset) {
    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () =>{
            if (window.pageYOffset > offset) {
                if(!sticky){
                    setSticky(true);
                }
            }else{
                if(sticky){
                    setSticky(false);
                }
            }
        }
        handleScroll()
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [sticky, offset])

    return sticky
}


