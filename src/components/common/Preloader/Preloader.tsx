import preloader from "../../../assets/images/preloader.svg";
import React from "react";

type PreloaderType = {
    isFetching: boolean
}

let Preloader = (props: PreloaderType) => {
    return <div style={{backgroundColor: "white"}}>
        <img src={preloader}/>
    </div>
}

export default Preloader