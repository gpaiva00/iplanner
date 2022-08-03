import { Footer } from 'flowbite-react'
import { Heart } from 'phosphor-react'

export default function PageFooter() {
  return (
    <Footer>
      <div className="flex justify-center items-center w-full text-center h-9 bg-zinc-900">
        <p className="flex items-center text-sm text-gray-300">
          made with
          <span className="text-purple-300 mx-1">
            <Heart weight='fill' size={15}/>
          </span> 
          <span className='mr-1'>by</span>
          <a href="#" className="text-white font-bold">Ju</a>
          <span className='mx-1'>{'&'}</span>
          <a href="#" className="text-white font-bold">Gabs</a>
        </p>
      </div>
    </Footer>
  )
}