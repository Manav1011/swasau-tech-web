import Link from "next/link"
function GetInTouch() {
  return (
    <div className="pt-5 px-4 mx-auto lg:w-2/3">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-500">Let's Connect</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Let's start a conversation! Reach out to us htmlFor any inquiries, partnerships, or simply to say hello. We value your input and look forward to connecting with you.</p>
        <form action="#" className="space-y-3">
            <div className="sm:flex w-full">
                <div className="sm:w-1/2 sm:me-2">
                    <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                </div>
                <div className="sm:w-1/2 sm:ms-2">
                    <label htmlFor="phone" className="mb-2 text-sm font-medium text-gray-900">Your phone</label>
                    <input type="phone" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Phone Number....." required />
                </div>
            </div>
            <div className="sm:flex w-full">
                <div className="sm:w-1/2 sm:me-2">
                    <label htmlFor="subject" className="mb-2 text-sm font-medium text-gray-900">Subject</label>
                    <input type="text" id="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Write a subject" required />
                </div>
                <div className="sm:w-1/2 sm:ms-2">
                    <label htmlFor="company" className="mb-2 text-sm font-medium text-gray-900">Company</label>
                    <input type="text" id="company" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Company Name....." required />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center rounded-lg bg-slate-300 text-black sm:w-full hover:bg-blue-200">Send message</button>
        </form>
        <p className="mt-4 text-gray-500 text-sm">Excited about bringing your personal projects to life? Our team is here to help...
            <Link href='/contact-us/get-a-quote' className="text-blue-500">
                Get a quote from us!
            </Link>
        </p>
    </div>
  )
}

export default GetInTouch