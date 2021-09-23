import { useState } from 'react'

function Hooker() {

    const [search, setSearch] = useState('') //Search Button
    const [data, setData] = useState([])    //Fetch Data


    return {
        search,
        data,
        setSearch,
        setData,
    }

}

export default Hooker
