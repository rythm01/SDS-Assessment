import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';
import { MdClose } from 'react-icons/md';

const EditCustomer = ({ isOpen, onClose, customer }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        city: '',
        company: '',
        profile_img: ''
    });
    const [imagePreview, setImagePreview] = useState('');
    const [originalImage, setOriginalImage] = useState('');
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (customer) {
            setFormData({
                first_name: customer.first_name,
                last_name: customer.last_name,
                city: customer.city,
                company: customer.company,
                profile_img: customer.profile_img || '' // Assuming customer has profile_img
            });
            setImagePreview(customer.profile_img || '');
            setOriginalImage(customer.profile_img || '');
        }
    }, [customer]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setFormData((prevData) => ({ ...prevData, profile_img: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleUndoImage = () => {
        setImagePreview(originalImage);
        setFormData((prevData) => ({ ...prevData, profile_img: originalImage }));

        if (fileInputRef.current) {
            fileInputRef.current.value = ''; 
        }
    };

    const handleSubmit = async () => {
        try {
            const updateData = new FormData();
            updateData.append('first_name', formData.first_name);
            updateData.append('last_name', formData.last_name);
            updateData.append('city', formData.city);
            updateData.append('company', formData.company);

            // Append the image file only if it's a new one
            if (imagePreview !== originalImage) {
                updateData.append('profile_img', fileInputRef.current.files[0]);
            }

            // Send the request using `axios`
            await axios.put(`${import.meta.env.VITE_SERVER}/${customer.id}`, updateData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set the content type to multipart
                },
            });
            window.location.reload();
            onClose(); // Close the modal
        } catch (error) {
            window.location.reload();
            console.error('Error updating customer:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-60 backdrop-blur-xs transition-opacity">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                <h2 className="text-xl font-bold mb-4">Edit Customer</h2>

                {/* Image Upload */}
                <div className="mb-4 flex flex-col items-center">
                    <div className="relative" style={{ minHeight: '96px' }}>
                        <img
                            src={imagePreview || 'default-image.png'}
                            alt="Customer"
                            className="w-24 h-24 rounded-full object-cover cursor-pointer"
                            onClick={handleImageClick}
                        />
                        {imagePreview !== originalImage && (
                            <button
                                onClick={handleUndoImage}
                                className="absolute top-0 right-0 p-1 bg-gray-300 rounded-full"
                            >
                                <MdClose className="text-red-600" />
                            </button>
                        )}
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        ref={fileInputRef}
                    />
                </div>


                <label className="block mb-4">
                    <span className="text-gray-700">First Name</span>
                    <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Last Name</span>
                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">City</span>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Company</span>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                </label>
                <div className="flex justify-end space-x-2">
                    <Button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-primary text-white rounded-lg transition duration-300"
                    >
                        Save
                    </Button>
                </div>
            </div>
        </div>
    );
};

EditCustomer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    customer: PropTypes.array.isRequired,
};

export default EditCustomer;