import { useState } from 'react'
import './index.css'

function App() {

    const [inputText, setInputText] = useState("")
    const [shortenedUrl, setShortenedUrl] = useState("")

    const handleSubmit = () => {
        alert(inputText)
        setShortenedUrl(inputText)
    }

    const onValueChange = (event) => {
        setInputText(event.target.value)
    }

    return (
        <>
            <div className="h-screen max-h-screen bg-gray-900 p-8 flex flex-col items-center justify-center">
                <p className="text-white text-3xl absolute top-8 left-8">ShiftURL</p>
                <div className='text-center'>
                    <p className="text-white text-3xl">Simple URL Shortener</p>
                    <p className="text-white text-3xl">No Bullshit</p>
                </div>
                <div className='flex'>
                    <input type="text" className='bg-black h-8 text-white p-2' placeholder='Your URL here' onChange={onValueChange} />
                    <button className='bg-white h-8 px-2' onClick={handleSubmit}>SUBMIT</button>
                </div>
                {shortenedUrl.trim() != "" && <p className='text-white text-3xl'>{shortenedUrl}</p>}
            </div>
        </>

    )
}

export default App
