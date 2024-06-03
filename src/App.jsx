import './App.css'
import { RevenueCard } from './components/revenueCard'
import { TransactionsTable } from './components/transactionsTable'

export default function App() {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-5 gap-y-5 sm:gap-y-0 bg-#'>
        <RevenueCard title={"Next Payout"} amount={"2,312.23"} orderCount={"23"} flag={true} date={"Today, 04:00 PM"} />
        <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"} />
        <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"} />
      </div>
      <div>
        <TransactionsTable transactions={[
          {
            "OrderID": "#281209",
            "Status": "Successful",
            "TransactionID": "131634495747",
            "RefundDate": "Today, 08:45 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281208",
            "Status": "Processing",
            "TransactionID": "131634495747",
            "RefundDate": "Yesterday, 8:45 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281207",
            "Status": "Failed",
            "TransactionID": "131634495747",
            "RefundDate": "12 Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281206",
            "Status": "Successful",
            "TransactionID": "131634495747",
            "RefundDate": "12 Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281205",
            "Status": "Processing",
            "TransactionID": "131634495747",
            "RefundDate": "12 Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281204",
            "Status": "Failed",
            "TransactionID": "131634495747",
            "RefundDate": "12 Jul 2023, 1:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281203",
            "Status": "Successful",
            "TransactionID": "131634495747",
            "RefundDate": "11 Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281202",
            "Status": "Successful",
            "TransactionID": "131634495747",
            "RefundDate": "11 Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281201",
            "Status": "Failed",
            "TransactionID": "131634495747",
            "RefundDate": "11 Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281200",
            "Status": "Successful",
            "TransactionID": "131634495747",
            "RefundDate": "10 Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281199",
            "Status": "Successful",
            "TransactionID": "131634495747",
            "RefundDate": "10 Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281198",
            "Status": "Failed",
            "TransactionID": "131634495747",
            "RefundDate": "10 Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281197",
            "Status": "Successful",
            "TransactionID": "1316344957479",
            "RefundDate": "Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281196",
            "Status": "Successful",
            "TransactionID": "1316344957479",
            "RefundDate": "Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281195",
            "Status": "Failed",
            "TransactionID": "1316344957479",
            "RefundDate": "Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281194",
            "Status": "Successful",
            "TransactionID": "1316344957478",
            "RefundDate": "Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281193",
            "Status": "Successful",
            "TransactionID": "1316344957478",
            "RefundDate": "Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281192",
            "Status": "Failed",
            "TransactionID": "1316344957478",
            "RefundDate": "Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281191",
            "Status": "Successful",
            "TransactionID": "1316344957477",
            "RefundDate": "Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281190",
            "Status": "Successful",
            "TransactionID": "1316344957477",
            "RefundDate": "Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281189",
            "Status": "Failed",
            "TransactionID": "1316344957477",
            "RefundDate": "Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281188",
            "Status": "Successful",
            "TransactionID": "1316344957476",
            "RefundDate": "Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281187",
            "Status": "Successful",
            "TransactionID": "1316344957476",
            "RefundDate": "Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          },
          {
            "OrderID": "#281186",
            "Status": "Successful",
            "TransactionID": "1316344957476",
            "RefundDate": "Jul 2023, 3:00 PM",
            "OrderAmount": "₹1,125.00"
          }
        ]}></TransactionsTable>
      </div>
    </div>

  )
}
