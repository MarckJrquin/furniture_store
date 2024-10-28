import {Card, CardHeader, CardBody, CardFooter, Image, Button, Link} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  return (
    <>
        <div className="gap-3 grid grid-cols-12 grid-rows-2 px-8 md:px-16 lg:px-24 mt-24">
            <div className="bg-yellow-200 rounded-2xl p-8 sm:p-4 md:p-6 xl:p-10 w-full h-[300px] col-span-12 sm:col-span-4 lg:col-span-3">
                <h2 className="text-2xl sm:text-xl md:text-h1 font-bold dark:text-zinc-800">Discover your true style</h2>
                <p className="text-gray-600 mt-2">Penatibus et magnis dis montes, nascetur ridiculus mus.</p>
                <Button color="warning" endContent={<FontAwesomeIcon icon={faArrowRight} />} as={Link} href="/trends" className="mt-4">
                    Explore Our Trends
                </Button>    
            </div>
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-4 lg:col-span-3">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                    <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                    <Image
                        alt="Breathing app icon"
                        className="rounded-full w-10 h-11 bg-black"
                        src="https://nextui.org/images/breathing-app-icon.jpeg"
                    />
                    <div className="flex flex-col">
                        <p className="text-tiny text-white/60">Breathing App</p>
                        <p className="text-tiny text-white/60">Get a good night's sleep.</p>
                    </div>
                    </div>
                    <Button radius="full" size="sm">Get App</Button>
                </CardFooter>
            </Card>
            <Card className="col-span-12 sm:col-span-4 lg:col-span-3 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                    <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://images.pexels.com/photos/12155595/pexels-photo-12155595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </Card>
            <Card className="col-span-12 sm:col-span-4 lg:col-span-3 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                    <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://images.pexels.com/photos/20666870/pexels-photo-20666870/free-photo-of-apartamento-casa-hogar-interior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </Card>
            <Card className="col-span-12 sm:col-span-4 lg:col-span-3 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
                    <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://images.pexels.com/photos/18254577/pexels-photo-18254577/free-photo-of-hotel-cama-habitacion-lampara.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </Card>
            <Card className="col-span-12 sm:col-span-4 lg:col-span-3 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
                    <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </Card>
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-4 lg:col-span-3">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                    <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src="https://images.pexels.com/photos/1031030/pexels-photo-1031030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                    <p className="text-black text-tiny">Available soon.</p>
                    <p className="text-black text-tiny">Get notified.</p>
                    </div>
                    <Button className="text-tiny" color="primary" radius="full" size="sm">
                    Notify Me
                    </Button>
                </CardFooter>
            </Card>
            <Card className="col-span-12 sm:col-span-4 lg:col-span-3 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
                    <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://images.pexels.com/photos/13722890/pexels-photo-13722890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </Card>
        </div>
    </>
  );
};

export default Gallery;