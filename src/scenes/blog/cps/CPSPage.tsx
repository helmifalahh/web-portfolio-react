import React from 'react'
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

function CPSPage() {
  return (
    <section className='items-center md:mx-52 px-5 min-h-screen max-w-screen-2xl'>
      <div className=''>
        <Breadcrumb className="bg-gray-200 px-5 py-3 my-10 basis-2/5 inline-block rounded-lg">
            <Breadcrumb.Item href="/" icon={HiHome}>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Blog Article</Breadcrumb.Item>
        </Breadcrumb>
        <div className='items-center'>CPS Page Coming Soon</div>
      </div>
    </section>
  )
}

export default CPSPage