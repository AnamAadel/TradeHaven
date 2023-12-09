import { BsGrid3X3GapFill } from 'react-icons/bs'
import { TfiMenuAlt } from 'react-icons/tfi'

function FunctionalHeader({setIsOneColumn, isOneColumn, setProductSort, products, productData}) {
    
    return (
        <div className="flex justify-between my-6 border p-6 items-center rounded-lg flex-wrap gap-8">
            <p style={{ margin: "0" }}><span className='text-red-500 font-bold'>{productData.length}</span> Product Found of <span className='text-red-500 font-bold'>{products.length}</span></p>
            <div className="shop-tab nav">
                <a className={!isOneColumn && "active"} onClick={()=> setIsOneColumn(false)} data-bs-toggle="tab">
                    <BsGrid3X3GapFill />
                </a>
                <a className={isOneColumn && "active"} onClick={()=> setIsOneColumn(true)} data-bs-toggle="tab">
                    <TfiMenuAlt />
                </a>
            </div>
            <div className="flex gap-4 items-center">
                <div className="whitespace-nowrap">
                    <p>Sort By:</p>
                </div>
                <select onChange={(e)=> setProductSort(e.target.value)} className="select select-error w-full max-w-xs">
                    <option value="relevance">Relevance</option>
                    <option value="AtoZ"> Name, A to Z</option>
                    <option value="ZtoA"> Name, Z to A</option>
                    <option value="ascending" > Price, low to high</option>
                    <option value="descending" > Price, high to low</option>
                </select>
            </div>
        </div>
    )
}

export default FunctionalHeader