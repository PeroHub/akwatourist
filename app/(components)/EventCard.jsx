import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function EventCard({event}) {
  return (
    <div className="bg-white md:flex rounded-lg cursor-pointer overflow-hidden border-b border-t border-gray-150 pt-10 pb-10">
        <img src={event.image} alt={event.title} className="w-full md:w-[300px] h-[150px] object-cover" />
        <div className="p-4">
        <h3 className="text-sm text-gray-500 uppercase font-medium">{event.series}</h3>
        <h2 className="text-lg font-bold text-gray-800">{event.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{event.date}</p>

        <div className='mt-4'>
            <Link href={`/events/${encodeURIComponent(event.title)}`} className="text-blue-500 hover:underline mt-8">
                {/* <a className="text-blue-500 hover:underline">View Details</a> */}
                View Details
            </Link>
        </div>
        </div>
    </div>
  )
}
