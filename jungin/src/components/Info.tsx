export const Info = () => {
  return (
    <div className="grid grid-flow-row w-10/12 max-h-[100%] px-2 py-4 bg-white rounded-2xl shadow-lg z-10 sm:grid-cols-4 sm:flex-row sm:items-center absolute bottom-0 translate-y-1/2">
      <div className="relative flex flex-col h-full py-3 text-center sm:px-8 sm:text-start sm:after:border after:absolute after:top-1/2 after:right-0 after:h-2/3 after:-translate-y-1/2">
        <h2 className="mb-1 text-xs text-dark-grey font-bold tracking-widest sm:mb-3">IP ADDRESS</h2>
        <p className="grow text-xl text-very-dark-grey font-medium break-words sm:text-2xl">192.212.174.101</p>
      </div>
      <div className="relative flex flex-col h-full py-3 text-center sm:px-8 sm:text-start sm:after:border after:absolute after:top-1/2 after:right-0 after:h-2/3 after:-translate-y-1/2">
        <h2 className="mb-1 text-xs text-dark-grey font-bold tracking-widest sm:mb-3">LOCATION</h2>
        <p className="grow text-xl text-very-dark-grey font-medium break-words sm:text-2xl">Brooklyn, NY 10001</p>
      </div>
      <div className="relative flex flex-col h-full py-3 text-center sm:px-8 sm:text-start sm:after:border after:absolute after:top-1/2 after:right-0 after:h-2/3 after:-translate-y-1/2">
        <h2 className="mb-1 text-xs text-dark-grey font-bold tracking-widest sm:mb-3">TIMEZONE</h2>
        <p className="grow text-xl text-very-dark-grey font-medium break-words sm:text-2xl">UTC-05:00</p>
      </div>
      <div className="flex flex-col h-full py-3 text-center sm:px-8 sm:text-start">
        <h2 className="mb-1 text-xs text-dark-grey font-bold tracking-widest sm:mb-3">ISP</h2>
        <p className="grow text-xl text-very-dark-grey font-medium break-words sm:text-2xl">SpaceX Starlink</p>
      </div>
    </div>
  )
}
