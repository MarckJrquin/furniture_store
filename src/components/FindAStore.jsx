import { Chip } from '@nextui-org/react';

import mapa from '../assets/images/mapa.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

const FindAStore = () => {
  return (
    <>
        <div className="bg-gray-100 dark:bg-gray-800 text-white py-12">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200">Found in over XXXX stores</h2>
                <Chip
                    endContent={<FontAwesomeIcon icon={faArrowRight} className='pl-2 pr-2'/>}
                    variant="flat"
                    color="secondary"
                    className='mt-4'
                >
                    Find a store near you
                </Chip>
                <div className="mt-6">
                    <img src={mapa} alt="Store map" className="w-full h-full object-cover rounded-3xl"/>
                </div>
            </div>
        </div>
    </>
  );
};

export default FindAStore;