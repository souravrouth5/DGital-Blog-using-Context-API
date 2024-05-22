import { Hourglass } from 'react-loader-spinner'

export function Loader({ height, width }){

    return(
        <>
            <Hourglass
                visible={true}
                height={height}
                width={width}
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#306cce', '#72a1ed']}
            />
        </>
    )
}