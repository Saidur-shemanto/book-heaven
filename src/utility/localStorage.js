const getWish = () => {
    const wishList = localStorage.getItem('wish');
    if (wishList) {
        return JSON.parse(wishList)
    } else {
        return []
    }


}
const setWish = (id) => {
    const wishList = getWish()
    const readList = getRead()

    if (wishList.includes(id) || readList.includes(id)) {
        return false


    } else {
        wishList.push(id)
        localStorage.setItem('wish', JSON.stringify(wishList))
        return true
    }


}


const getRead = () => {
    const readList = localStorage.getItem('read');
    if (readList) {
        return JSON.parse(readList)
    } else {
        return []
    }


}

const setRead = (id) => {
    const readList = getRead()
    let wishList = getWish()

    if (readList.includes(id)) {
        return false


    } else {
        readList.push(id)
        wishList = wishList.filter(wish => wish !== id)
        localStorage.setItem('read', JSON.stringify(readList))
        localStorage.setItem('wish', JSON.stringify(wishList))
        return true
    }


}

export { setRead, getRead, getWish, setWish }