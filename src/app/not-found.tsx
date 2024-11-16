"use client";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <section className="bg-center h-screen bg-no-repeat bg-[url('https://media.licdn.com/dms/image/v2/D4D12AQF9EJtvWxDOog/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697690715348?e=2147483647&v=beta&t=-61Te3rtKvgxeHwbP_lwYB1H_W2wgdc1kBHXZD6m4Qc')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 m-auto max-w-screen-xl text-center py-48 lg:py-56">
          <div className="flex flex-col">
            <div className="flex flex-col items-center">
              <div className="text-indigo-500 font-bold text-7xl">404</div>

              <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10 text-gray-300">
                This page does not exist
              </div>

              <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl my-8">
                The page you are looking for could not be found.
              </div>
              <button
                type="button"
                onClick={() => router.push("/")}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaArrowLeft className="mr-2" />
                Go to Main page
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
