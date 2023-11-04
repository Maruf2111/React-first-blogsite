import React from 'react'

function Contact() {
  return (
    <div className="contact-section">
      <h1 className="contact-title">Contact us</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.4380638638418!2d90.37115507420778!3d24.74616514982371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f7e83cf30d7%3A0xaacb26ca167738b9!2sMymensingh%20City%20Bypass!5e0!3m2!1sbn!2sbd!4v1695533818147!5m2!1sbn!2sbd" width="100%" height="450" style={{border:0}} AllowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form action="#" method='post' className='fcontact'>
                <input type="text" name='userName' placeholder='User Name' autoComplete='off' required />
                <input type="email" name='userEmail' placeholder='Enter Email' autoComplete='off' required />
                <input type="password" name='userPass' placeholder='Password' autoComplete='off' required />
                <textarea name="textarea"  cols="30" rows="10"></textarea>
                <input className='contact-btn' type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;