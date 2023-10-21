import React from 'react'

const First = () => {
  return (
    <>
    <main className='my-5 container d-block  d-md-flex justify-content-center px-4 align-items-center col-md-12' > 
        <div className='col-7'>
            <img className=' gbam object-fit-contain d-none d-md-flex' src="graduating.jpg" alt="" />
        </div>
        <div className='bam col-md-5 ' >
            <h1 className='fw-bold'>SCICT AT A GLANCE</h1>
            <p className='fs-6 text-muted'>SQI College of ICT is an accredited institution. SQI College of ICT offers both National Diploma (2 years), Professional Diploma (1 year) and Certificate Courses (from 2 weeks).

The National Innovative Diploma conforms with the standard National Diploma Certificate obtained in Polytechnics while the Professional certificate is the certificate you earn after taking a professional course here at SQI.

You can use the Diploma certificate to seek admissions into the University through Direct Entry or for Higher National Diploma (HND). While the professional Certificate is recognized worldwide not as a degree but as a proof of having undergone professional training in the field for which the certificate is issued.</p>
        </div>
    </main>
    </>
  )
}

export default First