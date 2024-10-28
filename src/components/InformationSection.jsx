import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

const InformationSection = () => {
  return (
    <>
        <section className="py-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
                <Card isFooterBlurred className="w-full h-[500px]">
                    <Image
                        removeWrapper
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src="https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <div className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 p-3">
                        <div className="flex flex-grow gap-2 items-center">
                            <div className="flex flex-col">
                                <p className="text-md font-bold text-white/80">Learn More About</p>
                                <p className="text-tiny text-white/60">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                        <Button radius="full" size="sm" endContent={<FontAwesomeIcon icon={faArrowRight} />} className="mt-2">
                            read more
                        </Button>  
                    </div>
                </Card>
                <Card isFooterBlurred className="w-full h-[500px]">
                    <Image
                        removeWrapper
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src="https://images.pexels.com/photos/13722842/pexels-photo-13722842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <div className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 p-3">
                        <div className="flex flex-grow gap-2 items-center">
                            <div className="flex flex-col">
                                <p className="text-md font-bold text-white/80">Learn More About</p>
                                <p className="text-tiny text-white/60">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                        <Button radius="full" size="sm" endContent={<FontAwesomeIcon icon={faArrowRight} />} className="mt-2">
                            read more
                        </Button>  
                    </div>
                </Card>
                <Card isFooterBlurred className="w-full h-[500px]">
                    <Image
                        removeWrapper
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg"
                    />
                    <div className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 p-3">
                        <div className="flex flex-grow gap-2 items-center">
                            <div className="flex flex-col">
                                <p className="text-md font-bold text-white/80">Learn More About</p>
                                <p className="text-tiny text-white/60">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                        <Button radius="full" size="sm" endContent={<FontAwesomeIcon icon={faArrowRight} />} className="mt-2">
                            read more
                        </Button>  
                    </div>
                </Card>
            </div>
        </section>
    </>
  );
}

export default InformationSection;