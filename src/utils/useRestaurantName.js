import { useEffect, useState } from "react";
import {MENU_API} from "../utils/constants";

    const useRestaurantName = (resId) => {
        const [name, setName] = useState(null);

        useEffect(() => {
        fetchName();
        }, []);

        const fetchName =async () =>{
            const data= await fetch(MENU_API+resId);
            const json=await data.json();

            setName(json.data);
        };
        return name;

}

export default useRestaurantName;