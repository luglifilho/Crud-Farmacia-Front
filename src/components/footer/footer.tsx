
import { Brain, ChatCircleDots, Coffee } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-orange-300 text-sky-600">
          <div className="container flex flex-col items-center py-4">
         <br />
            <div className='flex gap-2'>
              <Brain size={48} weight='bold' />
              <ChatCircleDots size={48} weight='bold' />
              <Coffee size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer