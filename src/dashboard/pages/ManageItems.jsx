import React from 'react';
import swal from 'sweetalert';
import SectionTitle from '../../components/SectionTitle';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useGetCartItems from '../../hooks/useGetCartItems';

function ManageItems() {
    const {data, isPending, refetch} = useGetCartItems();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item)=> {
        console.log(item)
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              

              axiosSecure.delete(`/cart_item/${item._id}`).then(res => {
                console.log(res.data);
                swal(` "${item.name}" has been deleted!`, {
                    icon: "success",
                  });
                  refetch()
            }).catch((err)=> console.log(err));
            } else {
              swal("Your item is safe!");
            }
          });
        
    }


    return (
        <div className="w-full flex flex-col h-screen overflow-y-hidden">
            {/* <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div className="w-1/2"></div>
            <div x-data="{ isOpen: false }" className="relative w-1/2 flex justify-end">
                <button
                    className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
                </button>
                <button x-show="isOpen"
                    className="h-full w-full fixed inset-0 cursor-default"></button>
                <div x-show="isOpen" className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                    <a href="#" className="block px-4 py-2 account-link hover:text-white">Account</a>
                    <a href="#" className="block px-4 py-2 account-link hover:text-white">Support</a>
                    <a href="#" className="block px-4 py-2 account-link hover:text-white">Sign Out</a>
                </div>
            </div>
        </header> */}
            {/* <header x-data="{ isOpen: false }" className="w-full bg-sidebar py-5 px-6 sm:hidden">
            <div className="flex items-center justify-between">
                <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
                <button  className="text-white text-3xl focus:outline-none">
                    <i x-show="!isOpen" className="fas fa-bars"></i>
                    <i x-show="isOpen" className="fas fa-times"></i>
                </button>
            </div>
            <nav className="flex flex-col pt-4">
                <a href="index.html" className="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
                    <i className="fas fa-tachometer-alt mr-3"></i>
                    Dashboard
                </a>
                <a href="blank.html"
                    className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-sticky-note mr-3"></i>
                    Blank Page
                </a>
                <a href="tables.html"
                    className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-table mr-3"></i>
                    Tables
                </a>
                <a href="forms.html"
                    className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-align-left mr-3"></i>
                    Forms
                </a>
                <a href="tabs.html"
                    className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-tablet-alt mr-3"></i>
                    Tabbed Content
                </a>
                <a href="calendar.html"
                    className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-calendar mr-3"></i>
                    Calendar
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-cogs mr-3"></i>
                    Support
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-user mr-3"></i>
                    My Account
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-sign-out-alt mr-3"></i>
                    Sign Out
                </a>
                <button
                    className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                    <i className="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
                </button>
            </nav><button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                <i className="fas fa-plus mr-3"></i> New Report
            </button>
        </header> */}

            <div className="w-full overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6">
                    <SectionTitle title="MANAGE ALL ITEMS" subTitle="Hurry Up!" />
                    <div className="w-full mt-12">
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-list mr-3"></i> Total items: {data?.length}
                        </p>
                        <div className="bg-white overflow-auto">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead className='bg-neutral text-white'>
                                        <tr>
                                            <th>
                                                
                                            </th>
                                            <th>Item Image</th>
                                            <th>Item Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((item, idx) => (
                                        <tr key={item._id}>
                                            <th>
                                                {idx + 1}
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                               {item.name}
                                            </td>
                                            <td>${item?.price}</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">Edit</button>
                                            </th>
                                            <th>
                                                <button className="btn btn-ghost btn-xs" onClick={()=> handleDeleteItem(item)}>delete</button>
                                            </th>
                                        </tr>

                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )
}

export default ManageItems