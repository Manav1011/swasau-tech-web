'use client'
function ClientButton(props) {  
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