export function RevenueCard({ title,  orderCount, amount, flag, date }) {
  return (
    <div className={flag? "rounded-md shadow-lg back bg-sky-700 hover:bg-sky-600 text-white overflow-hidden" : "rounded-md shadow-lg ovwerflow-hidden h-min bg-white"}>
      <div className={flag?  "flex text-m items-center pt-3 px-4" : "flex text-gray-700 text-m items-center pt-3 px-4"}>
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      </div>
      <div className="flex justify-between mt-3 flex items-center px-4 mb-3">
        <div className="font-semibold text-3xl">
          {"₹"}
          {amount}
        </div>
        {orderCount ? (
          <div className= {flag? "flex text-white" : "flex text-sky-600"}>
            <div className="underline underline-offset-1 font-medium">
              {orderCount} Orders
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 16"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        ) : null}
      </div>
      {flag ?(
          <div className="bg-sky-800 flex justify-between items-center py-1 px-4">
            <div>Next Payout Date:</div>
            <div>{date}</div>
          </div> 
        ) : null }
    </div>
  );
}
