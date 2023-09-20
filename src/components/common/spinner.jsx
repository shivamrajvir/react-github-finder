import spinnerGif from './../assets/spinner.png';


function Spinner() {
    return (
        <div className='w-100 mt-20'>
            <img src={spinnerGif} alt='loading...' className='text-center mx-auto' width={180} />
        </div>
    )
}

export default Spinner