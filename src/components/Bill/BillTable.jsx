import React from 'react';

const InvoiceTable = () => {
    const invoices = [
        { id: 1, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
        { id: 2, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
        { id: 3, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
        // ... other invoices
        { id: 14, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
    ];

    return (
        <div className="p-4 md:p-8">
            <div className="text-base md:text-lg mb-4">
                Per Student Charge = <span className="font-bold text-blue-600">100Rs/month</span>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 shadow-sm rounded-lg">
                    <thead>
                        <tr className="bg-blue-700 text-white">
                            <th className="px-2 md:px-4 py-2 border border-gray-300 text-xs md:text-sm lg:text-base">SNo.</th>
                            <th className="px-2 md:px-4 py-2 border border-gray-300 text-xs md:text-sm lg:text-base">Invoice ID</th>
                            <th className="px-2 md:px-4 py-2 border border-gray-300 text-xs md:text-sm lg:text-base">Month</th>
                            <th className="px-2 md:px-4 py-2 border border-gray-300 text-xs md:text-sm lg:text-base">Due Date</th>
                            <th className="px-2 md:px-4 py-2 border border-gray-300 text-xs md:text-sm lg:text-base">Status</th>
                            <th className="px-2 md:px-4 py-2 border border-gray-300 text-xs md:text-sm lg:text-base">Amount</th>
                            <th className="px-2 md:px-4 py-2 border border-gray-300 text-xs md:text-sm lg:text-base">Bill</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((invoice, index) => (
                            <tr key={invoice.id} className="text-center bg-white hover:bg-gray-50">
                                <td className="border border-gray-300 px-2 md:px-4 py-2">{index + 1}.</td>
                                <td className="border border-gray-300 px-2 md:px-4 py-2">{invoice.invoiceId}</td>
                                <td className="border border-gray-300 px-2 md:px-4 py-2">{invoice.month}</td>
                                <td className="border border-gray-300 px-2 md:px-4 py-2">{invoice.dueDate}</td>
                                <td className="border border-gray-300 px-2 md:px-4 py-2">{invoice.status}</td>
                                <td className="border border-gray-300 px-2 md:px-4 py-2">{invoice.amount}</td>
                                <td className="border border-gray-300 px-2 md:px-4 py-2 text-blue-600 underline">
                                    <a href="#" className="hover:text-blue-800">View Bill</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvoiceTable;