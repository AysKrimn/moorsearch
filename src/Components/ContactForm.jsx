import React from 'react'

export default function ContactForm() {


  return (
    
        <>
    
        <div className='mt-5 bg-light-gray basic-card-border'>

                
                <h4 className='text-center mb-5'>

              Unlock Your Wealth Potential: <br />
                        Secure a Free Consultation Today by Signing up Below!

                </h4>

            <form>


                    <div class="row mb-4">


                        <div class="col">

                                <div class="form-floating mb-3">
            
                                        <input type="text" class="form-control" id="floatingFiname" placeholder="John"></input>
                                        <label for="floatingFiname">Username</label>
                                </div>
                        </div>


                           <div class="col">

                                <div class="form-floating mb-3">
            
                                        <input type="text" class="form-control" id="floatingLaname" placeholder="Doe"></input>
                                        <label for="floatingLaname">Last Name</label>
                                </div>
                            </div>
                    </div>


                    <div class="col">

                        <div class="form-floating mb-3">

                            <input type="tel" class="form-control" id="floatingPhone" placeholder="00"></input>
                            <label for="floatingPhone">Phone</label>
                        </div>
                    </div>


                    <div class="col">

                            <div class="form-floating mb-3">

                                <input type="email" class="form-control" id="floatingEmail" placeholder="E-mail"></input>
                                <label for="floatingEmail">Email</label>
                            </div>
                    </div>

                    <div class="col">

                            <div class="form-floating mb-3">

                                <input type="text" class="form-control" id="floatingCoName" placeholder="Company Name"></input>
                                <label for="floatingCoName">Company Name</label>
                            </div>
                    </div>


                    <div class="col">

                            <div class="form-floating mb-3">

                                <input type="text" class="form-control" id="floatingPos" placeholder="Position"></input>
                                <label for="floatingPos">Position</label>
                            </div>
                    </div>



                <div className="col mb-4">

                    <div>
                        <p className='text-muted'>What is your financial Interest? <span className='text-danger'>*</span>  </p>
                    </div>

                    <div class="form-check form-check mb-2">
                        <input class="form-check-input" type="checkbox" id="Checkbox1" value="option1"></input>
                        <label class="form-check-label" for="Checkbox1">Stock Investments</label>
                    </div>


                    <div class="form-check form-check mb-2">
                        <input class="form-check-input" type="checkbox" id="Checkbox2" value="option1"></input>
                        <label class="form-check-label" for="Checkbox2">Financial Analysis</label>
                    </div>


                    <div class="form-check form-check mb-2">
                        <input class="form-check-input" type="checkbox" id="Checkbox3" value="option1"></input>
                        <label class="form-check-label" for="Checkbox3">Policy Information</label>
                    </div>


                    <div class="form-check form-check mb-2">
                        <input class="form-check-input" type="checkbox" id="Checkbox4" value="option1"></input>
                        <label class="form-check-label" for="Checkbox4">IUL</label>
                    </div>

                    <div class="form-check form-check mb-2">
                        <input class="form-check-input" type="checkbox" id="Checkbox5" value="option1"></input>
                        <label class="form-check-label" for="Checkbox5">Annuties</label>
                    </div>

                    <div class="form-check form-check mb-2">
                        <input class="form-check-input" type="checkbox" id="Checkbox6" value="option1"></input>
                        <label class="form-check-label" for="Checkbox6">Social Entrepreneurship</label>
                    </div>


                    <div class="form-check form-check mb-2">
                        <input class="form-check-input" type="checkbox" id="Checkbox7" value="option1"></input>
                        <label class="form-check-label" for="Checkbox7">Other</label>
                    </div>

                </div>



                <div class="col">

                        <div class="form-floating mb-3">

                            <input type="text" class="form-control" id="floatingExtra" placeholder="Link to website or social media"></input>
                            <label for="floatingExtra">Link to website or social media</label>
                        </div>
                </div>


                <div class="col">

                            <div class="form-floating mb-3">

                                <input type="text" class="form-control" id="floatingExtra-1" placeholder="Anything else"></input>
                                <label for="floatingExtra-1">Anything else you are interested in discussing as it pertains to finance</label>
                            </div>
                </div>


                </form>

            </div>

        </>
  )
}
