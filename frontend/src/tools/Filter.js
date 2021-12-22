

class Filter {

        filter =()=>{


        }

        ByNewAndСheaper = (value, setFiltredProducts, filtredProducts )=>{
            if (value === "Новые"){
                setFiltredProducts(product=>
                    [...product].sort((a,b)=> {
                                const c = new Date(a.createdAt);
                                const d = new Date(b.createdAt);
                                return d-c;
                    })
                )
            }
            else if (value === "Дешевые"){
                setFiltredProducts(product=>
                    [...product].sort((a,b)=>a.price - b.price)
                    )
            }
            else if (value === "Дорогие"){
                setFiltredProducts(product=>
                    [...product].sort((a,b)=>b.price - a.price)
                    )
            }

        }




}

export default new Filter()