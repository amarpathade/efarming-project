'use client'



import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'



const subCategories = [
    { name: 'Profile', href: '#' },
    { name: 'Orders', href: '#' },
    { name: 'Address', href: '#' },
    { name: 'Home', href: '#' },
    { name: 'Log Out', href: '#' },
]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Profile() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [showDiv, setShowDiv] = useState(true);
    const editProfile = () => {
        setShowDiv(!showDiv)
    }
    return (
        <>
            <div className="bg-green-100">
                <div>
                    {/* Mobile filter dialog */}
                    <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                        <DialogBackdrop
                            transition
                            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                        />

                        <div className="fixed inset-0 z-40 flex">
                            <DialogPanel
                                transition
                                className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
                            >
                                <div className="flex items-center justify-between px-4">
                                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                    <button
                                        type="button"
                                        onClick={() => setMobileFiltersOpen(false)}
                                        className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                    >
                                        <span className="sr-only">Close menu</span>
                                        {/* <XMarkIcon aria-hidden="true" className="size-6" /> */}
                                        <i className="fa-solid fa-x" aria-hidden="true"></i>
                                    </button>
                                </div>

                                {/* Filters */}
                                <form className="mt-4 border-t border-gray-200">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                        {subCategories.map((category) => (
                                            <li key={category.name}>
                                                <a href={category.href} className="block px-2 py-3">
                                                    {category.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </form>
                            </DialogPanel>
                        </div>
                    </Dialog>

                    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex items-baseline justify-between border-b border-gray-200 pt-2 my-5 py-5">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Account</h1>

                            <div className="flex items-center">


                                <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                    <span className="sr-only">View grid</span>
                                    <i className="fa-solid fa-filter size-5" aria-hidden="true"></i>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setMobileFiltersOpen(true)}
                                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                >
                                    <span className="sr-only">Filters</span>
                                    <i className="fa-solid fa-filter"></i>
                                </button>
                            </div>
                        </div>

                        <section aria-labelledby="products-heading" className="pt-6 pb-24">
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>

                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                {/* Filters */}
                                <form className="hidden lg:block">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="space-y-4 border-b shadow p-5 border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                        {subCategories.map((category) => (
                                            <li key={category.name}>
                                                <a href={category.href}>{category.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </form>

                                {/* Product grid */}
                                <div className="lg:col-span-3">
                                    {/* Our Content */}
                                    <button onClick={editProfile} className='font-bold mb-5'> Profile </button>
                                    {showDiv ? (
                                        <div className=' h-45 items-start p-4 shadow-lg flex justify-evenly'>
                                            <div className='bg-amber-700 mt-2 rounded-full h-30 w-30'>
                                            
                                            </div>
                                            <div>
                                                <h1 className='font-bold'>Amar Pathade</h1>
                                                <br /><hr />
                                                <h2>7020243881</h2>
                                                <p>karanja wardha maharashtra 442203</p>
                                                <br />
                                                <button className='py-1 px-2 rounded outline-none border-1 bg-red-500'>Log out</button>
                                                <button onClick={editProfile} className='py-1 px-2 rounded border-1 mx-5'> Edit Profile </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <form>
                                                <div className="space-y-12">
                                                    <div className="border-b border-gray-900/10 pb-12">
                                                        <h2 className="text-base/7 font-semibold text-gray-900">Note</h2>
                                                        <p className="mt-1 text-sm/6 text-gray-600">
                                                            This information will be displayed publicly so be careful what you share.
                                                        </p>

                                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                            <div className="sm:col-span-4">
                                                                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                                                    Username
                                                                </label>
                                                                <div className="mt-2">
                                                                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                                        <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">farmer21/</div>
                                                                        <input
                                                                            id="username"
                                                                            name="username"
                                                                            type="text"
                                                                            placeholder="username"
                                                                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="col-span-2">
                                                                <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                                                                    Photo
                                                                </label>
                                                                <div className="mt-2 flex items-center gap-x-3">
                                                                    {/* <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" /> */}
                                                                    <i className="fa-solid fa-user text-gray-300 fa-xl"></i>
                                                                    <button
                                                                        type="button"
                                                                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                                                                    >
                                                                        Change
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <div className="col-span-full">
                                                                <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                                                                    Cover photo
                                                                </label>
                                                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                                    <div className="text-center">
                                                                        {/* <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" /> */}
                                                                        <i className="fa-solid fa-image mx-auto fa-xl text-gray-300"></i>
                                                                        <div className="mt-4 flex text-sm/6 text-gray-600">
                                                                            <label
                                                                                htmlFor="file-upload"
                                                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                                                                            >
                                                                                <span>Upload a file</span>
                                                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                                            </label>
                                                                            <p className="pl-1">or drag and drop</p>
                                                                        </div>
                                                                        <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="border-b border-gray-900/10 pb-12">
                                                        <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                                                        <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

                                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                            <div className="sm:col-span-3">
                                                                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                                                    First name
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        id="first-name"
                                                                        name="first-name"
                                                                        type="text"
                                                                        autoComplete="given-name"
                                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:col-span-3">
                                                                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                                                                    Last name
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        id="last-name"
                                                                        name="last-name"
                                                                        type="text"
                                                                        autoComplete="family-name"
                                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:col-span-4">
                                                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                                                    Email address
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        id="email"
                                                                        name="email"
                                                                        type="email"
                                                                        autoComplete="email"
                                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:col-span-3">
                                                                <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                                                                    Country
                                                                </label>
                                                                <div className="mt-2 grid grid-cols-1">
                                                                    <select
                                                                        id="country"
                                                                        name="country"
                                                                        autoComplete="country-name"
                                                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                                    >
                                                                        <option>India</option>
                                                                    </select>
                                                                    {/* <ChevronDownIcon
                                                                        aria-hidden="true"
                                                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                                                    /> */}
                                                                    <i class="fa-solid fa-chevron-up pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500"></i>
                                                                </div>
                                                            </div>

                                                            <div className="col-span-full">
                                                                <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                                                                    Street address
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        id="street-address"
                                                                        name="street-address"
                                                                        type="text"
                                                                        autoComplete="street-address"
                                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:col-span-2 sm:col-start-1">
                                                                <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                                                                    City
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        id="city"
                                                                        name="city"
                                                                        type="text"
                                                                        autoComplete="address-level2"
                                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:col-span-2">
                                                                <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
                                                                    State / Province
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        id="region"
                                                                        name="region"
                                                                        type="text"
                                                                        autoComplete="address-level1"
                                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:col-span-2">
                                                                <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                                                                    ZIP / Postal code
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        id="postal-code"
                                                                        name="postal-code"
                                                                        type="text"
                                                                        autoComplete="postal-code"
                                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                                    <button type="reset" className="text-sm/6 font-semibold text-gray-900">
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}
