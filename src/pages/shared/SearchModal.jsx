import React from 'react';
import { useAuth } from '../../context/AuthProvider';

function SearchModal() {
    const {isShowSearchModal, setIsShowSearchModal} = useAuth()
    let showModal = isShowSearchModal ? {paddingRight: "15px", display: "block"} : null
    

  return (
    <div className={`modal popup-search-style ${isShowSearchModal ? "show" : null}`} id="searchActive" style={showModal}>
        <button type="button" className="close-btn" data-bs-dismiss="modal" onClick={()=> setIsShowSearchModal(false)}><span aria-hidden="true">&times;</span></button>
        <div className="modal-overlay">
            <div className="modal-dialog p-0" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <h2>Search Your Product</h2>
                        <form className="navbar-form position-relative" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search here..." />
                            </div>
                            <button type="submit" className="submit-btn"><i className="pe-7s-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchModal