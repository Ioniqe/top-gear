import {useEffect, useState} from "react";
import {getAboutService} from "../services";
import {About} from "../types";

const useLoadAbout = () => {
    const [aboutIsLoading, setAboutIsLoading] = useState<boolean>(true);
    const [about, setAbout] = useState<About>(null)

    useEffect(() => {
        getAbout().then();
    }, [])

    const getAbout = async () => {
        try{
            const _about: About = await getAboutService();
            console.log('about', _about);
            setAbout(_about)
            setAboutIsLoading(false)
        }catch (err) {
            setAboutIsLoading(false)
            throw err;
        }
    }

    return {
        aboutIsLoading,
        about
    }
}

export default useLoadAbout;