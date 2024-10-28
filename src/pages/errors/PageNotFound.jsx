import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Link } from "@nextui-org/react";

const PageNotFound = () => {
    return (
        <section className="bg-white dark:bg-zinc-900 ">
            <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
                <div className="w-full ">
                    <div className="flex flex-col items-center max-w-lg mx-auto text-center">
                        <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
                            ERROR 404
                        </p>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                            We could not find this page
                        </h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                            We searched everywhere but couldn’t find what you’re looking for. Let’s find a better place for you to go.
                        </p>

                        <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                            <Button variant="shadow" as={Link} href="/home" startContent={<FontAwesomeIcon icon={faArrowLeft} />}>
                                Go Back
                            </Button>
                            <Button variant="shadow" color="primary" as={Link} href="/home" startContent={<FontAwesomeIcon icon={faHome} />}>
                                Go to Home
                            </Button>
                        </div>
                    </div>

                    <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="p-6 rounded-lg bg-blue-50 dark:bg-zinc-800">
                            <span className="text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                            </span>
                            
                            <h3 className="mt-6 font-medium text-gray-700 dark:text-gray-200 ">
                                Trends
                            </h3>

                            <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                                Discover the latest trends
                            </p>

                            <Link isBlock showAnchorIcon href="/trends" color="primary" className="mt-5">
                                View Trends
                            </Link>
                        </div>

                        <div className="p-6 rounded-lg bg-blue-50 dark:bg-zinc-800">
                            <span className="text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                            </span>
                            
                            <h3 className="mt-6 font-medium text-gray-700 dark:text-gray-200 ">
                                Services
                            </h3>

                            <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                                Discover our services and enjoy the best experience.
                            </p>

                            <Link isBlock showAnchorIcon href="/home" color="primary" className="mt-5">
                                View Services
                            </Link>
                        </div>

                        <div className="p-6 rounded-lg bg-blue-50 dark:bg-zinc-800">
                            <span className="text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                </svg>
                            </span>
                            
                            <h3 className="mt-6 font-medium text-gray-700 dark:text-gray-200 ">
                                Help
                            </h3>

                            <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                                Need help? Our team is here to assist you.
                            </p>

                            <Link isBlock showAnchorIcon href="/home" color="primary" className="mt-5">
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageNotFound;
