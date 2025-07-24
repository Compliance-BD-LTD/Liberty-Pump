import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useOutletContext } from 'react-router';
import Swal from 'sweetalert2';
import { FaPlus, FaMinus } from 'react-icons/fa';

export const ImageModal = () => {
    const [imageFile, setImageFile] = useState(null)
    const [bannerFile, setBannerFile] = useState(null)
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const [extraInputs, setExtraInputs] = useState([''])

    const setCategories = useOutletContext().setCategories
    const ImageFileInputRef = useRef();
    const BannerFileInputRef = useRef()

    const handleFileChange = (e, v) => {
        const file = e.target.files[0];
        if (file) {
            const path = URL.createObjectURL(file)
            v === 'image' ? setImageFile(file) : setBannerFile(file)
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops Image Couldn’t Select...",
                text: "Something went wrong!",
            });
        }
    };

    const handleExtraChange = (index, value) => {
        const updated = [...extraInputs];
        updated[index] = value;
        setExtraInputs(updated);
    };

    const addInput = () => {
        setExtraInputs([...extraInputs, '']);
    };

    const removeInput = (index) => {
        const updated = extraInputs.filter((_, i) => i !== index);
        setExtraInputs(updated);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!imageFile || !name || !bannerFile) {
            Swal.fire({
                icon: "error",
                title: "Missing File or Name",
            });
            return;
        }

        const formData = new FormData();
        formData.append('image', imageFile);
        formData.append('bannerImage', bannerFile);
        formData.append('name', name);
        formData.append('subCategory', extraInputs);

        console.log(formData.get('subCategory'));


        setLoading(true);

        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/addCategory`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            Swal.fire({
                icon: "success",
                title: "Uploaded Successfully",
            });

            setImageFile(null);
            setBannerFile(null);
            setName('');
            setExtraInputs(['']);
            ImageFileInputRef.current.value = null;
            BannerFileInputRef.current.value = null;
            setCategories(res.data?.data);

        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error uploading",
                text: err.message
            });
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        document.getElementById('my_modal_3').checked = false;
        ImageFileInputRef.current.value = null;
        BannerFileInputRef.current.value = null;
        setBannerFile(null);
        setImageFile(null);
        setExtraInputs(['']);
    }

    return (
        <div>
            <input type="checkbox" id="my_modal_3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <div onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </div>

                    <section className='space-y-4'>
                        <div className='space-y-2'>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border-2 font-semibold border-gray-300 p-2 w-full rounded-lg' placeholder='Enter Category Name' />

                            <div className='space-y-2'>
                                <p className='font-semibold'>Sub Category:</p>
                                {extraInputs.map((value, index) => (
                                    <div key={index} className='flex items-center space-x-2'>
                                        <input
                                            type="text"
                                            value={value}
                                            onChange={(e) => handleExtraChange(index, e.target.value)}
                                            placeholder='Enter info...'
                                            className='border border-gray-300 p-2 rounded-lg w-full'
                                        />
                                        <button type="button" onClick={() => index != 0 && removeInput(index)} className={'text-red-500 hover:text-red-700  ' + (index === 0 ? 'hidden' : '')}>
                                            <FaMinus />
                                        </button>
                                    </div>
                                ))}
                                <button type="button" onClick={addInput} className='text-green-600 hover:text-green-800 mt-2 flex items-center space-x-1'>
                                    <FaPlus /> <span>Add More</span>
                                </button>
                            </div>


                            <div className='flex space-x-2 border-2 border-orange-500 p-2 rounded-lg cursor-pointer'>
                                <p className='font-semibold'>Category Image :</p>
                                <input type="file" ref={ImageFileInputRef} onChange={(e) => handleFileChange(e, 'image')} className='border-1 border-gray-200' accept="image/*" />
                            </div>
                            <div className='flex space-x-2 border-2 border-orange-500 p-2 rounded-lg cursor-pointer'>
                                <p className='font-semibold'>Banner Image : </p>
                                <input type="file" ref={BannerFileInputRef} onChange={(e) => handleFileChange(e, 'bannerImage')} className='border-1 border-gray-200' accept="image/*" />
                            </div>

                            {/* Dynamic Inputs */}

                        </div>

                        <button disabled={(!name || !imageFile || !bannerFile || loading)} onClick={handleSubmit} className='btn btn-secondary'>
                            Upload {loading && <span className="loading loading-spinner loading-sm"></span>}
                        </button>
                    </section>
                </div>
            </div>
        </div>
    );
};
