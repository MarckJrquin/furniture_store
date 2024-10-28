import React, { useState } from 'react';
import { Input, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const storeData = [
  { id: 1, name: 'Main Street Store', category: 'Electronics', location: 'Panama', distance: 5 },
  { id: 2, name: 'City Mall Store', category: 'Clothing', location: 'Herrera', distance: 10 },
  { id: 3, name: 'Ocean View Store', category: 'Groceries', location: 'Veraguas', distance: 2 },
  { id: 4, name: 'Suburban Store', category: 'Electronics', location: 'Chiriqui', distance: 8 },
  { id: 5, name: 'Mountain Peak Store', category: 'Sports', location: 'Los Santos', distance: 15 },
];

const FindAStore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  // Lista de categorías
  const categories = ['All', 'Electronics', 'Clothing', 'Groceries', 'Sports'];
  const locations = ['All', 'Panama', 'Herrara', 'Veraguas', 'Chiriqui', 'Los Santos'];

  // Filtro de tiendas basado en búsqueda, categoría y ubicación
  const filteredStores = storeData.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || store.category === selectedCategory;
    const matchesLocation = selectedLocation === 'All' || store.location === selectedLocation;

    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-zinc-900">
        <header className="bg-yellow-200 p-6">
            <h1 className="text-3xl font-bold text-zinc-800 text-center">Find a Store</h1>
        </header>

        <div className="container mx-auto py-8 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
                {/* Input de búsqueda */}
                <Input
                    label="Search"
                    radius="lg"
                    placeholder="Type to search..."
                    startContent={
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    }
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Filtro de Categorías */}
                <Autocomplete
                    defaultItems={categories.map(category => ({ label: category, value: category }))}
                    label="Category"
                    placeholder="Search a category"
                    onSelectionChange={(category) => setSelectedCategory(category)} // Directamente asignamos el valor
                >
                {(category) => (
                    <AutocompleteItem key={category.value}>{category.label}</AutocompleteItem>
                )}
                </Autocomplete>

                {/* Filtro de Ubicaciones */}
                <Autocomplete
                    defaultItems={locations.map(location => ({ label: location, value: location }))}
                    label="Location"
                    placeholder="Search a location"
                    onSelectionChange={(location) => setSelectedLocation(location)} // Directamente asignamos el valor
                >
                {(location) => (
                    <AutocompleteItem key={location.value}>{location.label}</AutocompleteItem>
                )}
                </Autocomplete>
            </div>

            {/* Lista de tiendas filtradas */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStores.map(store => (
                <a href="#" key={store.id} className="flex flex-col items-center bg-white border border-zinc-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{store.name}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{store.category}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{store.location}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{store.distance} miles away</p>
                    </div>
                </a>
              ))}
            </div>

            {/* Mensaje cuando no hay tiendas */}
            {filteredStores.length === 0 && (
              <div className="mt-8 text-center text-gray-500">
                No stores found matching your criteria.
              </div>
            )}
        </div>
    </div>
  );
};

export default FindAStore;
