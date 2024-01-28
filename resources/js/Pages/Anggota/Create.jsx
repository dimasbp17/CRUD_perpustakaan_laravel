import React, { useEffect, useState } from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

export default function Create({ title }) {
    const [form, setForm] = useState({
        nama: "",
        email: "",
        no_hp: "",
        alamat: "",
    });

    const { errors } = usePage().props;

    // handle input form
    function onInputForm(e, field) {
        const formData = {
            ...form,
            [field]: e.target.value,
        };
        setForm(formData);
    }

    // handle submit form
    function onSubmit(e) {
        e.preventDefault();
        router.post("/anggota", form);
    }

    return (
        <div className="flex justify-center items-center mt-20">
            <Head title={title} />
            <form
                className="border p-5 bg-sky-300 w-1/2 rounded-xl"
                onSubmit={onSubmit}
            >
                <div className="mb-5">
                    <label
                        htmlFor="nama"
                        className="block mb-2 text-sm font-medium text-gray-950 "
                    >
                        Nama
                    </label>
                    <input
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Nama anggota"
                        onInput={(e) => onInputForm(e, "nama")}
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
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                        placeholder="Sutar@gmail.com"
                        onInput={(e) => onInputForm(e, "email")}
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
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder="No Telepon"
                        onInput={(e) => onInputForm(e, "no_hp")}
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
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Alamat"
                        onInput={(e) => onInputForm(e, "alamat")}
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
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
                >
                    Tambah Anggota
                </button>
            </form>
        </div>
    );
}
