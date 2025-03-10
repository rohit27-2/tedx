import React from 'react'
import TicketCard from './TicketCard'

const tickets = [
    {
        type: 'Early Bird',
        price: 999,
        originalPrice: "",
        startDate: '2025-02-01',
        endDate: '2025-02-22',
        isActive: false,
    },
    {
        type: 'Regular',
        price: 1299,
        originalPrice: "",
        startDate: "2025-02-23",
        endDate: '2025-02-28',
        isActive: true,
    },
    {
        type: 'Group',
        price: '--',
        originalPrice: 2999,
        startDate: '-',
        endDate: '2025-02-25',
        isActive: false,
    },
]

const TicketPricing = () => {
    return (
        <div className='mt-8 mb-8' id='ticketing'>
            <h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-200 font-sans px-4 sm:px-12"
            >
                Get Your Tickets to
                <br />
                <img
                    src="/tedx/logo-white.png"
                    alt="Tedx AnuragU Logo"
                    className="block sm:inline-block align-middle w-auto"
                    style={{
                        height: '1.3em', // Matches the text height
                        marginTop: '-0.2em', // Adjust vertical alignment
                        marginLeft: '-0.3em',
                    }}
                />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-12">
                {tickets.map((ticket) => (
                    <TicketCard key={ticket.type} {...ticket} />
                ))}
            </div>
        </div>
    )
}

export default TicketPricing
