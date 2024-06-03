export function TransactionsTable({ transactions }) {
    return (<div>
        <TableControls></TableControls>
        <TableData transactions={transactions}></TableData>
    </div>
    )
}

function TableControls() {
    return (<div className="flex justify-between">
        <div className="flex items-center p-2 border">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input size="40" type="text" placeholder="Order ID or transaction ID" className="outline-none bg-inherit ml-3"></input>

        </div>
        <div className="flex items-center text-gray-500 font-normal">
            <div className="border flex items-center p-1 mr-4">
                <div className="text-base text-black">Sort</div>
                <svg fill="#000000" className="h-4 w-4 ml-2 text-gray-500 font-light" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 490 490" xml:space="preserve" stroke="gray">
                    <g>
                        <polygon points="85.877,154.014 85.877,428.309 131.706,428.309 131.706,154.014 180.497,221.213 217.584,194.27 108.792,44.46 
		0,194.27 37.087,221.213 	"/>
                        <polygon points="404.13,335.988 404.13,61.691 358.301,61.691 358.301,335.99 309.503,268.787 272.416,295.73 381.216,445.54 
		490,295.715 452.913,268.802 	"/>
                    </g>
                </svg>
            </div>
            <div className="border p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
            </div>

        </div>
    </div>)
}

function TableData({ transactions }) {
    return (<table className="w-full">
        <thead className="text-gray-600 text-sm text-left">
            <tr>
                <th className="font-medium p-3">ORDER ID</th>
                <th className="font-medium p-3">STATUS</th>
                <th className="font-medium p-3">TRANSACTION ID</th>
                <th className="font-medium p-3">REFUND DATE</th>
                <th className="font-medium p-3">ORDER AMOUNT</th>
            </tr>
        </thead>
        <tbody className="text-sm font-normal text-gray-700">
            {
                transactions.map((trans, idx) => {
                    return (<tr key={idx}>
                        <td className=" text-sky-700 font-normal p-3">{trans.OrderID}</td>
                        <td className="p-3"><Status status={trans.Status}></Status></td>
                        <td className="p-3">{trans.TransactionID}</td>
                        <td className="p-3">{trans.RefundDate}</td>
                        <td className="p-3 text-black font-normal">{trans.OrderAmount}</td>
                    </tr>)
                })
            }
        </tbody>
    </table>)
}

function Status({ status }) {
    return <div className="flex items-center font-normal text-black">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={status == 'Successful' ? '#22C55E' : (status == 'Failed' ? 'red' : 'gray')} class="bi bi-circle-fill" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="5" />
        </svg>
        <div className="ml-2">
            {status}
        </div>
    </div>
}