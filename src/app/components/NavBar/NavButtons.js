'use client'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
function ClientButton(props) {  
  const router = useRouter()
  const path = usePathname()  
  const {id,title,classlist} = props
  const scrollElementToView = (id) => {
    document.getElementById(id).scrollIntoView()    
  }
    return (
      <>
      {path == '/' || title=='Contact Us' ? <button className={classlist} onClick={() => scrollElementToView(id)}>{title}</button> :null}
      </>
    )
}

export default ClientButton