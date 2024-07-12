import Footer from "@/components/Footer"

function NotFound() {
  return (
    <main className='flex flex-col items-center justify-between bg-blue-900 min-h-screen '>
      <div className="flex flex-col items-center justify-center gap-4 p-6">
        <h1 className="uppercase text-xl font-bold text-justify">Oops! Page Not Found</h1>
        <picture>
          <img
            className="max-w-full sm:max-w-screen-sm md:max-w-md lg:max-w-lg xl:max-w-2xl w-full h-auto"
            src="/yoruLose.png"
            alt="Yoru lose"
          />
        </picture>
        <a href="/" className="text-red-600 uppercase  font-bold text-2xl border-b border-red-600"
        >Back to home</a>
      </div>
      <Footer />
    </main>
  )
}

export default NotFound
