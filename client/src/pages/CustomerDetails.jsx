import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useParams } from 'react-router-dom';

const CustomerDetails = () => {
    const { id } = useParams(); // Get the customer ID from the URL
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        // Fetch customer details based on ID
        const fetchCustomer = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER}/getSingleCustomer/${id}`);
                setCustomer(response.data?.customer);
            } catch (error) {
                console.error('Error fetching customer details:', error);
            }
        };

        fetchCustomer();
    }, [id]);

    if (customer === null) {
        return (
            <div className="p-6 bg-gray-100 min-h-screen w-full flex items-center justify-center">
                <img src="/noData.png" alt="No data available" className="h-[50vh]" />
            </div>
        );
    }

    return (
        <div className="p-6 min-h-screen w-full">
            <Button
                onClick={() => window.history.back()}
                className="px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition duration-300 ease-in-out"
            >
                <IoArrowBack className='h-4 w-4' />
            </Button>
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Customer Details</h1>
            <div className="mx-auto w-fit bg-primary border border-gray-300 rounded-lg shadow-md p-6">
                <Card className="mx-auto">
                    <CardHeader floated={false} className="h-48">
                        <img
                            src={customer.profile_img || '/default-profile.png'}
                            alt={`${customer.first_name} ${customer.last_name}`}
                            className="w-full h-full object-cover rounded-t-lg"
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {customer.first_name} {customer.last_name}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium mb-2">
                            {customer.city}
                        </Typography>
                        <Typography color="blue-gray">
                            {customer.company}
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default CustomerDetails;
