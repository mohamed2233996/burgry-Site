'use client'
import React, { useEffect, useState } from 'react';
import { categorie } from './menu_data';
import { products } from './menu_data';
import { FaRankingStar } from "react-icons/fa6";
import Image from 'next/image';

const Menu = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const removeCategorie = (category) => {
        if (selectedCategories.includes(category)) {
            const removedList = selectedCategories.filter((item) => (item !== category));
            setSelectedCategories(removedList);
        }
    }

    const addCategorie = (category) => {
        if (!selectedCategories.includes(category)) {
            setSelectedCategories(prev => ([category]))
        }
    }


    const resetCategory = () => { // this function will be used to clear the filter
        setSelectedCategories([]);
    }

    //////////
    const [fileredProductList, setFilteredProductList] = useState([]);

    useEffect(() => {
        if (selectedCategories.length === 0) {
            setFilteredProductList(products);
        } else {
            setFilteredProductList(products.filter((item) => (selectedCategories.includes(item.category))));
        }
    }, [selectedCategories, products])




    return (
        <div className='menu py-10 bg-black'>
            <div className='container m-auto'>
                <h1 className='text-white font-black text-4xl headText text-center after:mt-[20px]'>OUR BEST MENU</h1>
                <p className='text-center mt-4 text-gray-400 text-[16px]'>In this section all the dishes and items that belong to you are available</p>
                <div className="btnCatgery flex flex-col sm:flex-row justify-center mt-8">
                    <button className='selectBtn mx-8 mb-2 sm:mb-0' onClick={resetCategory}>ALL</button>
                    {categorie.map((category) => (
                        <button className='selectBtn mx-8 mb-2 sm:mb-0' key={category} onClick={() => {
                            if (selectedCategories.includes(category)) {
                                removeCategorie(category);
                            } else {
                                addCategorie(category);
                            }
                        }}>{category}</button>
                    ))}
                </div>
                {/* ///////// */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                    {
                        fileredProductList.map((product) => (
                            <div key={product.id} className='overflow-hidden my-2'>
                                <div className='overflow-hidden rounded-xl h-[220px] bg-boxColor flex justify-center'>
                                    <img
                                        className='my-6'
                                        src={`/${product.image}`}
                                        alt={product.name}
                                        width={200}
                                        height={200} />
                                </div>
                                <div className="mt-4 px-3">
                                    <h2 className="text-white font-black text-[20px]">{product.name}</h2>
                                    <p className="text-sm text-gray-500">{product.category}</p>
                                    <p className="text-gray-300 my-4">{product.description}</p>
                                    <div className="flex justify-between items-center flex-row">
                                        <p className="text-[17px] text-primary mt-2">{product.price} $</p>
                                        <div className='flex items-center flex-row text-gray-200'><FaRankingStar className='mr-2 text-primary' />{product.rating}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Menu;
