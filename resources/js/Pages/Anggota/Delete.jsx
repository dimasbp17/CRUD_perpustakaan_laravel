import React, { useEffect, useState } from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";

export default function Delete({ title, anggota }) {
    const [form, setForm] = useState({
        nama: "",
        email: "",
        no_hp: "",
        alamat: "",
    });

    useEffect(() => {
        const formData = {
            nama: anggota.nama,
            email: anggota.email,
            no_hp: anggota.no_hp,
            alamat: anggota.alamat,
        };
        setForm(formData);
    }, []);

    const { errors } = usePage().props;

    // fungsi delete
    function onDelete(e) {
        e.preventDefault();
        router.delete(`/anggota/${anggota.id}/delete`);
    }

    return (
        <div className="flex justify-center items-center mt-20">
            <Head title={title} />
            <form className="border p-5 bg-sky-300 w-1/2 rounded-xl">
                <div className="mb-5">
                    <label
                        htmlFor="nama"
                        className="block mb-2 text-sm font-medium text-gray-950 "
                    >
                        Nama
                    </label>
                    <input
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Nama anggota"
                        value={form.nama}
                        disabled
                    />
                    <div>
                        {errors.nama && (
                            <span className="text-red-500">{errors.nama}</span>
                        )}
                    </div>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-950 "
                    >
                        Email
                    </label>
                    <input
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Sutar@gmail.com"
                        value={form.email}
                        disabled
                    />
                    <div>
                        {errors.email && (
                            <span className="text-red-500">{errors.email}</span>
                        )}
                    </div>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-950 "
                    >
                        No Telepon
                    </label>
                    <input
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="No Telepon"
                        value={form.no_hp}
                        disabled
                    />
                    <div>
                        {errors.no_hp && (
                            <span className="text-red-500">{errors.no_hp}</span>
                        )}
                    </div>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-950 "
                    >
                        Alamat
                    </label>
                    <input
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Alamat"
                        value={form.alamat}
                        disabled
                    />
                    <div>
                        {errors.alamat && (
                            <span className="text-red-500">
                                {errors.alamat}
                            </span>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    className="text-white bg-red-700 hover:bg-red-800 w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={onDelete}
                >
                    Delete Anggota
                </button>
            </form>
        </div>
    );
}
