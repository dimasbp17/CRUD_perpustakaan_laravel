import React from "react";
import { Link, Head } from "@inertiajs/react";

export default function Homepage(props) {
    console.log(props);
    return (
        <div className="container bg-sky-300 h-screen">
            <Head title={props.title} />
            <div>
                <h1 className="flex justify-center items-center">
                    SELAMAT DATANG DI WEBSITE PERPUSTAKAAN
                </h1>
            </div>
            <div className="flex justify-center items-center h-screen">
                <Link href="/anggota">
                    <button
                        type="button"
                        className="bg-blue-800 my-3 p-5 justify-center items-center text-sm font-semibold rounded-lg text-white hover:bg-sky-500 mb-2"
                    >
                        LIHAT DAFTAR ANGGOTA
                    </button>
                </Link>
            </div>
        </div>
    );
}
