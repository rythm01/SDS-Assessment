import { ButtonGroup, Button, Tooltip } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import loading from '/loading.svg';
import axios from 'axios';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineClear, MdOutlineEdit } from "react-icons/md";
import EditCustomer from "../components/EditCustomer";
import { FiSearch } from 'react-icons/fi';

const Dashboard = () => {
    const [customers, setCustomers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [activePage, setActivePage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const navigate = useNavigate();

    const toggleModal = () => setIsModalOpen((prev) => !prev);

    useEffect(() => {
        const fetchCustomers = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER}/listCustomers`, {
                    params: {
                        searchTerm: searchTerm,
                        page: activePage,
                        limit: itemsPerPage === 'All' ? 0 : itemsPerPage,
                    },
                });
                setCustomers(response.data.data);
                setTotalPages(Math.ceil(response.data.total / itemsPerPage));
            } catch (error) {
                console.error('Error fetching customers:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCustomers();
    }, [searchTerm, activePage, itemsPerPage]);

    const prevPage = () => setActivePage(prev => (prev > 1 ? prev - 1 : prev));
    const nextPage = () => setActivePage(prev => (prev < totalPages ? prev + 1 : prev));

    return (
        <div className="p-6 bg-gray-100 min-h-screen w-full">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Customer Dashboard</h1>
            <EditCustomer isOpen={isModalOpen} onClose={toggleModal} customer={selectedCustomer} />
            <div className="flex justify-between">
                {/* Search Input */}
                <div className="mb-6 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search by name or city..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 w-full max-w-30 border border-gray-300 rounded-tl-lg rounded-bl-lg shadow-md focus:outline-none focus:ring-1 focus:ring-primary-500 transition duration-300 ease-in-out"
                    />
                    {searchTerm ? (
                        <Tooltip content="Clear Results">
                            <button
                                className="p-[11px] border bg-primary text-[#fff] rounded-r-lg focus:outline-none hover:border-gray-300"
                                onClick={() => {
                                    setSearchTerm('');
                                }}
                            >
                                <MdOutlineClear />
                            </button>
                        </Tooltip>
                    ) : (
                        <button className="p-[11px] border bg-primary text-[#fff] rounded-r-lg focus:outline-none hover:border-gray-300">
                            <FiSearch />
                        </button>)
                    }
                </div>

                <div className="mb-6 flex justify-center">
                    <Link to="/cities">
                        <Tooltip content="View Cities and Customer Details" placement='left'>
                            <Button className="px-4 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition duration-300 ease-in-out">
                                View Cities
                            </Button>
                        </Tooltip>
                    </Link>
                </div>

            </div>

            {/* Customer List */}
            {isLoading ? (
                <div className="flex justify-center items-center">
                    <img src={loading} className='h-16' alt="Loading..." />
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <div className="bg-white border border-gray-300 rounded-lg shadow-md">
                        <table className="min-w-full bg-white">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="py-4 px-6 text-left">First Name</th>
                                    <th className="py-4 px-6 text-left">Last Name</th>
                                    <th className="py-4 px-6 text-left">City</th>
                                    <th className="py-4 px-6 text-left">Company</th>
                                    <th className="py-4 px-6 text-left">Edit</th>
                                </tr>
                            </thead>
                            <tbody className="max-h-[50vh] h-[20vh] min-h-4 overflow-y-auto">
                                {customers.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="text-center py-6">
                                            <img src={`noData.png`} className='h-[50vh] mx-auto' alt="No data available" />
                                        </td>
                                    </tr>
                                ) : (
                                    customers.map((customer) => (
                                        <tr key={customer.id} className={`odd:bg-[#fff] even:bg-[#00375415] border-black border-b cursor-pointer`}
                                        >
                                            <td className="py-4 px-6" onClick={() => navigate(`/customer/${customer.id}`)}>{customer.first_name}</td>
                                            <td className="py-4 px-6" onClick={() => navigate(`/customer/${customer.id}`)}>{customer.last_name}</td>
                                            <td className="py-4 px-6" onClick={() => navigate(`/customer/${customer.id}`)}>{customer.city}</td>
                                            <td className="py-4 px-6" onClick={() => navigate(`/customer/${customer.id}`)}>{customer.company}</td>
                                            <td className="py-4 px-6">
                                                <Tooltip content="Edit Details">
                                                    <Button className="bg-primary p-3 rounded-lg text-white shadow-md hover:bg-primary-dark transition duration-300 ease-in-out"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            toggleModal();
                                                            setSelectedCustomer(customer);
                                                        }}
                                                    >
                                                        <MdOutlineEdit className="h-3 w-3" />
                                                    </Button>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>

                        {/* Pagination Controls */}
                        <div className="flex flex-col md:flex-row justify-between mb-3 items-center pt-4 bg-white mt-4 rounded-lg">
                            {/* Rows per Page Selector */}
                            <div className='mx-4'>
                                <ButtonGroup variant='outlined' size="sm">
                                    <Button onClick={() => { setItemsPerPage(10); setActivePage(1) }} className={`${itemsPerPage == 10 ? 'bg-[#003654] text-white' : 'bg-[#fff] text-black'}`}>
                                        10
                                    </Button>
                                    <Button onClick={() => { setItemsPerPage(20); setActivePage(1) }} className={`${itemsPerPage == 20 ? 'bg-[#003654] text-white' : 'bg-[#fff] text-black'}`}>
                                        20
                                    </Button>
                                    <Button onClick={() => { setItemsPerPage(50); setActivePage(1) }} className={`${itemsPerPage == 50 ? 'bg-[#003654] text-white' : 'bg-[#fff] text-black'}`}>
                                        50
                                    </Button>
                                    <Button onClick={() => { setItemsPerPage(100); setActivePage(1) }} className={`${itemsPerPage === 100 ? 'bg-[#003654] text-white' : 'bg-[#fff] text-black'}`}>
                                        100
                                    </Button>
                                </ButtonGroup>
                            </div>

                            {/* Pagination Controls */}
                            <div className="flex items-center space-x-2">
                                <Button
                                    variant="text"
                                    onClick={prevPage}
                                    disabled={activePage == 1}
                                    className="text-primary hover:bg-[#00375415] rounded-full p-2"
                                >
                                    <IoIosArrowBack strokeWidth={2} className="h-5 w-5" />
                                </Button>

                                {totalPages <= 3 ? (
                                    Array.from({ length: totalPages }, (_, index) => (
                                        <button
                                            key={index}
                                            className={`px-3 py-1 ${activePage == index + 1 ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'} rounded-full transition duration-200`}
                                            onClick={() => setActivePage(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    ))
                                ) : (
                                    <>
                                        <button
                                            className={`px-3 py-1 ${activePage == 1 ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'} rounded-full transition duration-200`}
                                            onClick={() => setActivePage(1)}
                                        >
                                            1
                                        </button>
                                        {activePage > 3 && <span className="px-2">...</span>}
                                        {Array.from({ length: 3 }, (_, idx) => activePage - 1 + idx)
                                            .filter(page => page > 1 && page < totalPages)
                                            .map(page => (
                                                <button
                                                    key={page}
                                                    className={`px-3 py-1 ${activePage == page ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'} rounded-full transition duration-200`}
                                                    onClick={() => setActivePage(page)}
                                                >
                                                    {page}
                                                </button>
                                            ))
                                        }
                                        {activePage < totalPages - 2 && <span className="px-2">...</span>}
                                        <button
                                            className={`px-3 py-1 ${activePage == totalPages ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'} rounded-full transition duration-200`}
                                            onClick={() => setActivePage(totalPages)}
                                        >
                                            {totalPages}
                                        </button>
                                    </>
                                )}

                                <Button
                                    variant="text"
                                    onClick={nextPage}
                                    disabled={activePage == totalPages || totalPages == 0}
                                    className="text-primary hover:bg-[#00375415] rounded-full p-2"
                                >
                                    <IoIosArrowForward strokeWidth={2} className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;