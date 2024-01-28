import React from "react";
import { Link, Head, usePage } from "@inertiajs/react";

export default function Index({ title, anggota }) {
    const { message } = usePage().props.flash;
    return (
        <div>
            <nav>
                <div className="bg-blue-800">
                    <h1 className="flex justify-center items-center text-3xl font-extrabold p-10 text-white">
                        DAFTAR ANGGOTA PERPUSTAKAAN
                    </h1>
                </div>
            </nav>
            <Head title={title} />

            {message && <span>{message}</span>}

            <div className="container mx auto sm:px-20 px-10 relative overflow-x-auto">
                <Link href="/anggota/create">
                    <button
                        type="button"
                        className="inline-block bg-green-700 my-3 p-3 items-center text-sm font-semibold rounded-lg text-white hover:bg-green-500 mb-2"
                    >
                        Tambah Anggota +
                    </button>
                </Link>
                <table className="w-full overflow-visible">
                    <thead className="bg-blue-800">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-start text-xm text-white uppercase w-3/12"
                            >
                                Nama
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-start text-xm text-white uppercase"
                            >
                                Email
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-start text-xm text-white uppercase"
                            >
                                No Telepon
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-start text-xm text-white uppercase"
                            >
                                Alamat
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 text-start text-xm text-white uppercase"
                            >
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {anggota.map(function (item, i) {
                            return (
                                <tr
                                    key={i}
                                    className="odd:bg-white even:bg-gray-100"
                                >
                                    <td className="px-6 py-4 whitespace text-sm text-gray-800">
                                        {item.nama}
                                    </td>
                                    <td className="px-6 py-4 whitespace text-sm text-gray-800">
                                        {item.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace text-sm text-gray-800 ">
                                        {item.no_hp}
                                    </td>
                                    <td className="px-6 py-4 whitespace text-sm text-gray-80">
                                        {item.alamat}
                                    </td>
                                    <td className="flex items-center gap-2 px-6 py-4">
                                        <Link
                                            href={`/anggota/${item.id}?detail=true`}
                                        >
                                            <button
                                                type="button"
                                                className="inline-block bg-blue-800 px-5 py-3 items-center gap-x-2 text-sm rounded-lg text-white hover:bg-sky-500"
                                            >
                                                Detail
                                            </button>
                                        </Link>
                                        <Link href={`/anggota/${item.id}`}>
                                            <button
                                                type="button"
                                                className="inline-block bg-yellow-500 px-5 py-3 items-center gap-x-2 text-sm rounded-lg text-white hover:bg-yellow-300"
                                            >
                                                Edit
                                            </button>
                                        </Link>
                                        <Link
                                            href={`/anggota/${item.id}/delete`}
                                        >
                                            <button
                                                type="button"
                                                className="inline-block bg-red-700 px-5 py-3 items-center gap-x-2 text-sm rounded-lg text-white hover:bg-red-600"
                                            >
                                                Hapus
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
