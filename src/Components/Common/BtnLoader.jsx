import { ColorRing } from 'react-loader-spinner'

export function BtnLoader({height, width}){

    return(
        <>
            <ColorRing
                visible={true}
                height={height}
                width={width}
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </>
    )
}