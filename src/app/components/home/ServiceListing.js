'use client'
import '../../fonts.css'
import ServiceCard from './ServiceCard'
import { useInView } from "react-intersection-observer";
import useAPI from '../../hooks/useAPI'
import { useEffect, useState } from 'react';

function ServiceListing() {  
  const [services,setServices] = useState()
  useEffect(() => {
    if(!services){
      const query = `query {
        servicesCollection{
          items{
            sys{
              id
            }
            title
            image{
              url
            }
          }
        }
      }`
      useAPI(query).then(res => {
          setServices(res.data.servicesCollection.items)
      })
    }
  },[])
  const { ref: myref, inView, entry } = useInView(); 
  if(services){
    return (
      <section className={`${inView?'services-zoom-in':null} pt-20 bg-slate-200`}>
        <div className="container mx-auto">
          <div className="flex flex-wrap" ref={myref}>
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">              
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-slate-900	 sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
  
          <div className="container justify-center items-center flex flex-wrap">
          {services && services.map((item => (
            <ServiceCard key={item.sys.id} icon={item.image.url} title={item.title}/>
          )))}          
          </div>
        </div>
      </section>
    )
  }
}

export default ServiceListing