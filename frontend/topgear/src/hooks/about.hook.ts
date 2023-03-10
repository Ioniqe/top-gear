import {useEffect, useState} from "react";
import {getAboutService} from "../services";
import {AboutType} from "../types";

const useLoadAbout = () => {
    const [aboutIsLoading, setAboutIsLoading] = useState<boolean>(true);
    const [about, setAbout] = useState<AboutType>(null)

    useEffect(() => {
        getAbout().then();
    }, [])

    const getAbout = async () => {
        try{
            const _about: AboutType = await getAboutService();
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