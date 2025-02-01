import toast from "react-hot-toast"

//get
const getallfavorites = ()=>{
    const all = localStorage.getItem('favorites')
    if(all){
        const favorites = JSON.parse(all)
        return favorites
    }
    else{
        return[]
    }
}



//add
const addFavorite = product =>{

    const favorites = getallfavorites()
    const isExist = favorites.find(item=>item.product_id == product.product_id)
    if(isExist)return toast.error('This Product Already Added You!');
    favorites.push(product)
    localStorage.setItem('favorites',JSON.stringify(favorites))
    toast.success('Successfully Added!');
}


//remove
export{addFavorite,getallfavorites}