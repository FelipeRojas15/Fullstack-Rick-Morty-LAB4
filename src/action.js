
export const setInc = (val) => {
    return {
        type: "INCREMENTAR",
        inc: val
    }
    
}

export const setEps = (eps) => {
    return {
        type: "EPISODIO",
        epis: eps
    }
    
}

export const setInfoAd = (inf) => {
    return{
        type: "INFOAD",
        info: inf
    }
}