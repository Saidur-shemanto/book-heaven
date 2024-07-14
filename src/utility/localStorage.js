const getWish = (uid) => {
    const wishList = localStorage.getItem(`${uid}-wish`);
    if (wishList) {
        return JSON.parse(wishList)
    } else {
        return []
    }


}
const setWish = (uid, id) => {
    const wishList = getWish(uid)
    const readList = getRead(uid)

    if (wishList.includes(id) || readList.includes(id)) {
        return false


    } else {
        wishList.push(id)
        localStorage.setItem(`${uid}-wish`, JSON.stringify(wishList))
        return true
    }


}


const getRead = (uid) => {
    const readList = localStorage.getItem(`${uid}-read`);
    if (readList) {
        return JSON.parse(readList)
    } else {
        return []
    }


}

const setRead = (uid, id) => {
    const readList = getRead(uid)
    let wishList = getWish(uid)

    if (readList.includes(id)) {
        return false


    } else {
        readList.push(id)
        wishList = wishList.filter(wish => wish !== id)
        localStorage.setItem(`${uid}-read`, JSON.stringify(readList))
        localStorage.setItem(`${uid}-wish`, JSON.stringify(wishList))
        return true
    }


}

export { setRead, getRead, getWish, setWish }