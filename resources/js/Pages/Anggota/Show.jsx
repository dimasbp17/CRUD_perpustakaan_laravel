import React, { useEffect, useState } from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";

export default function Show({ title, anggota }) {
    const [form, setForm] = useState({
        nama: "",
        email: "",
        no_hp: "",
        alamat: "",
    });

    const isDetail =
        new URLSearchParams(window.location.search).get("detail") === "true";

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
        router.put(`/anggota/${anggota.id}`, form);
    }

    return (
        <div className="flex items-center justify-center mt-20">
            <Head title={title} />

            <form
                className="border p-5 bg-sky-300 rounded-xl sm:w-1/2"
                onSubmit={onSubmit}
            >
                <div className="mb-5">
                    <label
                        htmlFor="nama"
                        className="block mb-2 text-sm font-medium text-gray-950"
                    >
                        Nama
                    </label>
                    <input
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full"
                        placeholder="Nama anggota"
                        value={form.nama}
                        onInput={(e) => onInputForm(e, "nama")}
                        disabled={isDetail}
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
                        className="block mb-2 text-sm font-medium text-gray-950"
                    >
                        Email
                    </label>
                    <input
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full "
                        placeholder="Sutar@gmail.com"
                        value={form.email}
                        onInput={(e) => onInputForm(e, "email")}
                        disabled={isDetail}
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
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full"
                        placeholder="No Telepon"
                        value={form.no_hp}
                        onInput={(e) => onInputForm(e, "no_hp")}
                        disabled={isDetail}
                    />
                    <div>
                        {errors.no_hp && (
                            <span className="text-red-500">{errors.no_hp}</span>
                        )}
                    </div>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="Email"
                        className="block mb-2 text-sm font-medium text-gray-950 "
                    >
                        Alamat
                    </label>
                    <input
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full"
                        placeholder="Alamat"
                        value={form.alamat}
                        onInput={(e) => onInputForm(e, "alamat")}
                        disabled={isDetail}
                    />
                    <div>
                        {errors.alamat && (
                            <span className="text-red-500">
                                {errors.alamat}
                            </span>
                        )}
                    </div>
                </div>

                {!isDetail && (
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
                    >
                        Update anggota
                    </button>
                )}
            </form>
        </div>
    );
}
