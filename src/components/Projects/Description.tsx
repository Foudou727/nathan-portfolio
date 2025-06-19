
interface Props {
    description: string
}

export default function Description({description}: Props) {

    const containerStyle: React.CSSProperties = {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 600 600'%3E%3Cdefs%3E%3Cfilter id='blur' x='-100%25' y='-100%25' width='300%25' height='300%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='80' /%3E%3C/filter%3E%3CradialGradient id='fog' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='black' stop-opacity='0.4' /%3E%3Cstop offset='90%25' stop-color='black' stop-opacity='0' /%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='300' cy='300' r='100' fill='url(%23fog)' filter='url(%23blur)' /%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '2rem',
        color: 'white',
        textAlign: 'center',
        fontWeight: 500,
        position: 'relative',
    };




    return (
        <div className="flex h-150 justify-center items-center w-150 rounded-full p-10"
            style={containerStyle}
        >
            <p className={`text-white w-full h-fit align-middle text-center text-2xl text-bold text-shadow-xs`}>
                {description}
            </p>
        </div>
    )
}