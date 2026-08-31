import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="container py-5"> <div className="row justify-content-center"> <div className="col-md-8 col-lg-6"> <div className="card shadow border-0"> <div className="card-body p-4"> <h2 className="text-center mb-4">Contact Us</h2> <form> {/* Name */} <div className="mb-3"> <label className="form-label">Full Name</label> <input type="text" className="form-control" placeholder="Enter your name" /> </div> {/* Email */} <div className="mb-3"> <label className="form-label">Email Address</label> <input type="email" className="form-control" placeholder="Enter your email" /> </div> {/* Phone */} <div className="mb-3"> <label className="form-label">Phone Number</label> <input type="tel" className="form-control" placeholder="Enter your phone number" /> </div> {/* Subject */} <div className="mb-3"> <label className="form-label">Subject</label> <input type="text" className="form-control" placeholder="Enter subject" /> </div> {/* Message */} <div className="mb-3"> <label className="form-label">Message</label> <textarea className="form-control" rows="5" placeholder="Write your message" ></textarea> </div> {/* Button */} <div className="d-grid"> <button type="submit" className="btn btn-primary"> Send Message </button> </div> </form> </div> </div> </div> </div> </div>
    </div>
  )
}
