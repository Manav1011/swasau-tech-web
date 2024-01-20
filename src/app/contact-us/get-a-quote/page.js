import GetAQUote from '../../components/ContactUs/GetAQUote'
import CompanyInformation from '../../components/ContactUs/CompanyInformation'
function page() {
  return (
    <section className="h-full mb-20 flex lg:mx-10 lg:flex-row flex-col" style={{fontFamily:'oswald'}}>
    <GetAQUote/>
    <CompanyInformation/>
    </section>
  )
}

export default page