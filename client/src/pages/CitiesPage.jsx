import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import { IoArrowBack } from "react-icons/io5";

const CitiesPage = () => {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch cities with the number of customers
        axios.get(`${import.meta.env.VITE_SERVER}/uniqueCities`) // Replace with your API endpoint
            .then(response => {
                setCities(response.data.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching cities:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen w-full">
            <Button
                onClick={() => window.history.back()}
                className="px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition duration-300 ease-in-out"
            >
                <IoArrowBack className='h-4 w-4'/>
            </Button>
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Cities with Customer Counts</h1>

            {isLoading ? (
                <div className="flex justify-center items-center">
                    <img src="/loading.png" className='h-16' alt="Loading..." />
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <div className=" rounded-lg shadow-md">
                        <table className="bg-white mx-auto border border-gray-300">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="py-4 px-6 text-left">City</th>
                                    <th className="py-4 px-6 text-left">Number of Customers</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cities.length === 0 ? (
                                    <tr>
                                        <td colSpan="2" className="text-center py-6">
                                            <img src="/noData.png" className='h-[50vh] mx-auto' alt="No data available" />
                                        </td>
                                    </tr>
                                ) : (
                                    cities.map((city) => (
                                        <tr key={city.cityName} className={`odd:bg-[#fff] even:bg-[#00375415]`}>
                                            <td className="py-4 px-6">{city.city}</td>
                                            <td className="py-4 px-6">{city.customerCount}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CitiesPage;
