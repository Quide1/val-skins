import { type Datum } from '@/types/spraysType'

type ComponentProps = {
    sprayProps: Datum
}

function SprayInGame({ sprayProps }: ComponentProps) {
    const renderImage = sprayProps?.animationGif || sprayProps?.fullTransparentIcon || sprayProps?.displayIcon || undefined;
    return (
        <div className='flex flex-col gap-2 items-center justify-center border-2 border-red-700 w-[300px] h-[320px] bg-slate-950 rounded-lg'>
            <p className='font-bold text-xl text-center p-1'>{sprayProps.displayName}</p>
            <div className=' w-[250px] h-[250px] flex items-center justify-center flex-col'>
                {renderImage ? (
                    <img src={renderImage} alt="spray in game" loading='lazy'/>
                ) : (
                    <p>No image available</p>
                )}
            </div>
        </div>

    );
}

export default SprayInGame;
