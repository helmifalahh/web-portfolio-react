// import Breadcrumbs from '@/shared/Breadcrumbs'
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import HText from "@/shared/HText"
import ActionButton from '@/shared/ActionButton';
import BangkitLogo from "@/assets/logo-bangkit.png"
import Cert_1 from "@/assets/cert_1_pengembang.png"
import Cert_2 from "@/assets/cert_2_prog101.png"
import Cert_3 from "@/assets/cert_3_github.png"
import Cert_4 from "@/assets/cert_4_memulaikotlin.png"
import Cert_5 from "@/assets/cert_5_aplikasipemula.png"
import Cert_6 from "@/assets/cert_6_ux.png"
import Cert_7 from "@/assets/cert_7_fundamental.png"
import Cert_8 from "@/assets/cert_8_solid.png"
import Cert_9 from "@/assets/cert_9_intermediate.png"
import Cert_10 from "@/assets/cert_10_compose.png"
import React from 'react'


function BangkitPage() {
  return (
    <section className='items-center md:mx-52 px-5 min-h-screen max-w-screen-2xl'>
        <Breadcrumb className="bg-gray-200 px-5 py-3 my-10 basis-2/5 inline-block rounded-lg">
            <Breadcrumb.Item href="/" icon={HiHome}>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Blog Article</Breadcrumb.Item>
        </Breadcrumb>
        <div className='flex flex-col items-center my-10'>
            <HText>Certification</HText>
            <div className="text-2xl my-3 text-center">Bangkit Academy led by Google, GoTo, and Traveloka</div>
        </div>

        <div>
            <div className="collapse collapse-arrow rounded-lg bg-base-200 border">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">Information about Bangkit Academy</div>
                <div className="collapse-content">
                    <div className="flex flex-col md:flex-row items-start">
                        <img className="w-full md:w-auto md:h-72 object-cover" src="https://lh3.googleusercontent.com/pOzD0lUsIE_V3IBFJAzXJaevwxMSVwrPEUKvRUWfnX6UEejCKZmO76nfpr5znR5pRngaeDZAz5CWagGFIJDt05wd4wOUnCIiz0ib1nBWPEf1XZPcsFk=w2880" alt="" />
                        <div className="md:ml-6 ">
                            <img className="h-10 my-5 md:my-0" src={BangkitLogo} alt="" />
                            <div className="text-lg my-5 text-justify">Designed to prepare students with in-demand skills and tech certifications, the Bangkit curriculum offers 3 interdisciplinary learning paths - machine learning, mobile development, and cloud computing. By the end of this program, you'll be equipped with the tech expertise, soft skills, and English proficiency you need to transit from academia to the workplace and succeed at leading companies.</div>
                            <button className="btn sm:btn-sm md:btn-md lg:btn-lg bg-primary px-10 py-3 hover:bg-primary-300 text-white ">View detail</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-10">
                <div className="md:flex my-8">
                    <img className="md:h-[23rem] my-5 md:my-0 rounded-2xl object-contain bg-zinc-600" src={Cert_10} alt="" />
                    <div className="flex flex-col md:ml-5 ml-0">
                        <div className="flex bg-[#13294E] w-max px-3 md:px-5 py-2 rounded-full">
                            <img className="md:w-7 md:h-7 w-5 h-5 mr-3" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/new-ui-logo.png" alt="" />
                            <div className="text-base md:text-xl text-white font-bold">Dicoding Academy</div>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold my-2 mt-5">Belajar Membuat Aplikasi Android dengan Jetpack Compose</div>
                        <div className="text-justify md:text-base text-sm">Kelas ini ditujukan bagi Android Developer yang ingin meningkatkan skillnya untuk membuat aplikasi dengan mempelajari modern toolkit untuk mendesain UI. Di akhir kelas, siswa dapat membuat aplikasi berbasis Jetpack Compose dengan menerapkan komponen yang sudah dipelajari.</div>
                        <a href="https://www.dicoding.com/certificates/ERZRG15LOPYV">
                        <button className="btn w-full sm:btn-sm md:btn-md lg:btn-lg bg-primary px-10 md:py-3 py-6 hover:bg-primary-300 text-white my-5">View detail</button>
                        </a>
                    </div>
                </div>
                <div className="md:flex my-8">
                    <img className="md:h-[23rem] my-5 md:my-0 rounded-2xl object-contain bg-zinc-600" src={Cert_9} alt="" />
                    <div className="flex flex-col md:ml-5 ml-0">
                        <div className="flex bg-[#13294E] w-max px-3 md:px-5 py-2 rounded-full">
                            <img className="md:w-7 md:h-7 w-5 h-5 mr-3" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/new-ui-logo.png" alt="" />
                            <div className="text-base md:text-xl text-white font-bold">Dicoding Academy</div>
                        </div>
                        <div className="text-2xl md:text-4xl font-bold my-2 mt-5">Belajar Pengembangan Aplikasi Android Intermediate</div>
                        <div className="text-justify md:text-base text-sm">Kelas ini ditujukan bagi Android Developer yang ingin meningkatkan skillnya untuk membuat aplikasi dengan mempelajari berbagai macam komponen Advance. Di akhir kelas, siswa dapat membuat aplikasi dengan menerapkan komponen yang sudah dipelajari.</div>
                        <a href="https://www.dicoding.com/certificates/ERZRGK8DMPYV">
                        <button className="btn w-full sm:btn-sm md:btn-md lg:btn-lg bg-primary px-10 md:py-3 py-6 hover:bg-primary-300 text-white my-5">View detail</button>
                        </a>
                    </div>
                </div>

                <div className="md:flex my-8">
                    <img className="md:h-[23rem] my-5 md:my-0 rounded-2xl object-contain bg-zinc-600" src={Cert_8} alt="" />
                    <div className="flex flex-col md:ml-5 ml-0">
                        <div className="flex bg-[#13294E] w-max px-3 md:px-5 py-2 rounded-full">
                            <img className="md:w-7 md:h-7 w-5 h-5 mr-3" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/new-ui-logo.png" alt="" />
                            <div className="text-base md:text-xl text-white font-bold">Dicoding Academy</div>
                        </div>
                        <div className="text-2xl md:text-4xl font-bold my-2 mt-5">Belajar Prinsip Pemrograman SOLID</div>
                        <div className="text-justify md:text-base text-sm">Kelas ini ditujukan bagi pemula yang ingin memahami bagaimana menuliskan kode yang baik dengan paradigma OOP (object-priented programming) dengan mengacu pada standar industri. Di akhir kelas, siswa dapat memahami kelima prinsip SOLID dan siap menerapkannya dalam mengembangkan aplikasi. </div>
                        <a href="https://www.dicoding.com/certificates/0LZ099LK3Z65">
                        <button className="btn w-full sm:btn-sm md:btn-md lg:btn-lg bg-primary px-10 md:py-3 py-6 hover:bg-primary-300 text-white my-5">View detail</button>
                        </a>
                    </div>
                </div>

                <div className="md:flex my-8">
                    <img className="md:h-[23rem] my-5 md:my-0 rounded-2xl object-contain bg-zinc-600" src={Cert_7} alt="" />
                    <div className="flex flex-col md:ml-5 ml-0">
                        <div className="flex bg-[#13294E] w-max px-3 md:px-5 py-2 rounded-full">
                            <img className="md:w-7 md:h-7 w-5 h-5 mr-3" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/new-ui-logo.png" alt="" />
                            <div className="text-base md:text-xl text-white font-bold">Dicoding Academy</div>
                        </div>
                        <div className="text-2xl md:text-4xl font-bold my-2 mt-5">Belajar Fundamental Aplikasi Android</div>
                        <div className="text-justify md:text-base text-sm">Kelas ditujukan bagi developer yang ingin belajar fundamental pembuatan aplikasi Android, seperti networking dan database, dengan mengacu pada standar kompetensi internasional milik Google Developers Authorized Training Partner. Di akhir kelas, siswa dapat membuat membuat aplikasi yang dapat mengambil data dari Web API dan menyimpan data favorit menggunakan database lokal.</div>
                        <a href="https://www.dicoding.com/certificates/JMZV9MNONPN9">
                        <button className="btn w-full sm:btn-sm md:btn-md lg:btn-lg bg-primary px-10 md:py-3 py-6 hover:bg-primary-300 text-white my-5">View detail</button>
                        </a>
                    </div>
                </div>

                <div className="md:flex my-8">
                    <img className="md:h-[23rem] my-5 md:my-0 rounded-2xl object-contain bg-zinc-600" src={Cert_6} alt="" />
                    <div className="flex flex-col md:ml-5 ml-0">
                        <div className="flex bg-[#13294E] w-max px-3 md:px-5 py-2 rounded-full">
                            <img className="md:w-7 md:h-7 w-5 h-5 mr-3" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/new-ui-logo.png" alt="" />
                            <div className="text-base md:text-xl text-white font-bold">Dicoding Academy</div>
                        </div>
                        <div className="text-2xl md:text-4xl font-bold my-2 mt-5">Belajar Dasar UX Design</div>
                        <div className="text-justify md:text-base text-sm">Kelas ini ditujukan untuk pemula yang ingin mempelajari dasar-dasar UX beserta detail prosesnya dengan mengacu pada framework Design Thinking. Di akhir kelas, siswa dapat membuat sebuah portofolio berupa UX case study yang berisi keseluruhan proses, mulai dari mencari permasalahan pengguna, mendefinisikan masalah, melakukan eksplorasi, membuat prototype, sampai menguji cobanya.</div>
                        <a href="https://dicoding.com/certificates/MEPJK7QG6X3V">
                        <button className="btn w-full sm:btn-sm md:btn-md lg:btn-lg bg-primary px-10 md:py-3 py-6 hover:bg-primary-300 text-white my-5">View detail</button>
                        </a>
                    </div>
                </div>

                <div className="md:flex my-8">
                    <img className="md:h-[23rem] my-5 md:my-0 rounded-2xl object-contain bg-zinc-600" src={Cert_5} alt="" />
                    <div className="flex flex-col md:ml-5 ml-0">
                        <div className="flex bg-[#13294E] w-max px-3 md:px-5 py-2 rounded-full">
                            <img className="md:w-7 md:h-7 w-5 h-5 mr-3" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/new-ui-logo.png" alt="" />
                            <div className="text-base md:text-xl text-white font-bold">Dicoding Academy</div>
                        </div>
                        <div className="text-2xl md:text-4xl font-bold my-2 mt-5">Belajar Membuat Aplikasi Android untuk Pemula</div>
                        <div className="text-justify md:text-base text-sm">Kelas ini ditujukan bagi pemula yang ingin memulai karirnya di bidang Android Developer dengan mengacu pada standar kompetensi internasional milik Google. Di akhir kelas, siswa dapat membuat aplikasi Android yang dapat menampilkan list dan detail data. </div>
                        <a href="https://www.dicoding.com/certificates/0LZ0G0WQKX65">
                        <button className="btn w-full sm:btn-sm md:btn-md lg:btn-lg bg-primary px-10 md:py-3 py-6 hover:bg-primary-300 text-white my-5">View detail</button>
                        </a>
                    </div>
                </div>

                <div className="md:flex my-8">
                    <img className="md:h-[23rem] my-5 md:my-0 rounded-2xl object-contain bg-zinc-600" src={Cert_4} alt="" />
                    <div className="flex flex-col md:ml-5 ml-0">
                        <div className="flex bg-[#13294E] w-max px-3 md:px-5 py-2 rounded-full">
                            <img className="md:w-7 md:h-7 w-5 h-5 mr-3" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/new-ui-logo.png" alt="" />
                            <div className="text-base md:text-xl text-white font-bold">Dicoding Academy</div>
                        </div>
                        <div className="text-2xl md:text-4xl font-bold my-2 mt-5">Belajar Pemrogrman dengan Kotlin</div>
                        <div className="text-justify md:text-base text-sm">Kelas ini ditujukan bagi yang ingin belajar dasar bahasa pemrograman Kotlin dengan mengacu pada standar kompetensi internasional milik Google Developers Authorized Training Partner.  Di akhir kelas, siswa paham tentang konsep dasar bahasa pemrograman, functional programming, serta object-oriented programming (OOP) dengan menggunakan Kotlin.</div>
                        <a href="https://www.dicoding.com/certificates/QLZ92YQ57X5D">
                        <button className="btn w-full sm:btn-sm md:btn-md lg:btn-lg bg-primary px-10 md:py-3 py-6 hover:bg-primary-300 text-white my-5">View detail</button>
                        </a>
                    </div>
                </div>

                <div className="md:flex my-8">
                    <img className="md:h-[23rem] my-5 md:my-0 rounded-2xl object-contain bg-zinc-600" src={Cert_3} alt="" />
                    <div className="flex flex-col md:ml-5 ml-0">
                        <div className="flex bg-[#13294E] w-max px-3 md:px-5 py-2 rounded-full">
                            <img className="md:w-7 md:h-7 w-5 h-5 mr-3" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/new-ui-logo.png" alt="" />
                            <div className="text-base md:text-xl text-white font-bold">Dicoding Academy</div>
                        </div>
                        <div className="text-2xl md:text-4xl font-bold my-2 mt-5">Belajar Dasar Git dengan GitHub</div>
                        <div className="text-justify md:text-base text-sm">Kelas ini ditujukan bagi developer yang ingin mempelajari pengelolaan kode atau data menggunakan Git dengan GitHub agar bisa berkolaborasi dengan developer lain yang sesuai dengan standar industri. Di akhir kelas, siswa dapat mengelola kumpulan data atau kode mereka sendiri dalam repository GitHub, serta dapat berkolaborasi dengan developer lain pada repository yang sama.</div>
                        <a href="https://www.dicoding.com/certificates/81P286KQOPOY">
                        <button className="btn w-full sm:btn-sm md:btn-md lg:btn-lg bg-primary px-10 md:py-3 py-6 hover:bg-primary-300 text-white my-5">View detail</button>
                        </a>
                    </div>
                </div>
                <div className="md:flex">
                    <img className="md:h-[23rem] my-5 md:my-0 rounded-2xl object-contain bg-zinc-600" src={Cert_2} alt="" />
                    <div className="flex flex-col md:ml-5 ml-0">
                        <div className="flex bg-[#13294E] w-max px-3 md:px-5 py-2 rounded-full">
                            <img className="md:w-7 md:h-7 w-5 h-5 mr-3" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/new-ui-logo.png" alt="" />
                            <div className="text-base md:text-xl text-white font-bold">Dicoding Academy</div>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold my-2 mt-5">Pengenalan ke Logika Pemrograman (Programming Logic 101)</div>
                        <div className="text-justify md:text-base text-sm">Kelas ditujukan bagi pemula yang ingin mulai belajar logika pada bidang pemrograman dengan mengacu pada standar industri. Di akhir kelas, siswa dapat memahami logika pemrograman dasar dan menerapkannya dalam pemecahan masalah yang ada di bidang pekerjaan Software Developer. </div>
                        <a href="https://www.dicoding.com/certificates/QLZ92O9WDX5D">
                        <button className="btn w-full sm:btn-sm md:btn-md lg:btn-lg bg-primary px-10 md:py-3 py-6 hover:bg-primary-300 text-white my-5">View detail</button>
                        </a>
                    </div>
                </div>
                
                <div className="md:flex my-8">
                    <img className="md:h-[23rem] my-5 md:my-0 rounded-2xl object-contain bg-zinc-600" src={Cert_1} alt="" />
                    <div className="flex flex-col md:ml-5 ml-0">
                        <div className="flex bg-[#13294E] w-max px-3 md:px-5 py-2 rounded-full">
                            <img className="md:w-7 md:h-7 w-5 h-5 mr-3" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/new-ui-logo.png" alt="" />
                            <div className="text-base md:text-xl text-white font-bold">Dicoding Academy</div>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold my-2 mt-5">Memulai Dasar Pemrograman untuk Menjadi Pengembang Software</div>
                        <div className="text-justify md:text-base text-sm">Kelas ditujukan bagi pemula yang ingin mulai belajar bidang pemrograman agar dapat menjadi pengembang software dengan mengacu pada standar okupasi Pengembang Software. Di akhir pelatihan, siswa mampu memodifikasi aplikasi perangkat lunak menggunakan panduan diagram alur dan pemrograman dengan teknologi HTML, CSS, dan JavaScript tingkat dasar secara tepat sesuai persyaratan spesifikasi dan fungsionalitas aplikasi.</div>
                        <a href="https://www.dicoding.com/certificates/NVP793NMGZR0">
                        <button className="btn w-full sm:btn-sm md:btn-md lg:btn-lg bg-primary px-10 md:py-3 py-6 hover:bg-primary-300 text-white my-5">View detail</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BangkitPage