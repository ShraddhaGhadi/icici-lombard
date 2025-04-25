import React, {useState} from 'react'

const CommonQue = () => {
    const [activeTab, setActiveTab] = useState('general');
  return (
    <div className='bg-[#F8F6F6]'>
  <div className='lg:p-10 xl:pt-14 p-6 md:p-6 flex flex-col items-center xl:h-[1439px] max-w-[100rem] mx-auto'>
          <p className='lg:text-4xl md:text-4xl text-3xl text-center font-bold lg:pb-10 pb-5 xl text-[#282828] '>Get answers to common questions about car insurance policy</p>
          <div className=' w-[95%] lg:w-[70%] md:w-[85%]' >
            <div className='flex border-b border-gray-200 mb-4 overflow-auto '>
              <button className={`px-4 py-2 font-semibold border-b-2 ${activeTab === "general" 
                ?'border-orange-500 text-orange-600' : 'border-transparent text-gray-500'
              }`} onClick={()=>setActiveTab('general')}>General</button>
                  <button className={`px-4 py-2 font-semibold border-b-2 ${activeTab === "cover" 
                ?'border-orange-500 text-orange-600' : 'border-transparent text-gray-500'
              }`} onClick={()=>setActiveTab('cover')}>Cover</button>
                 <button className={`px-4 py-2 font-semibold border-b-2 ${activeTab === "premium" 
                ?'border-orange-500 text-orange-600' : 'border-transparent text-gray-500'
              }`} onClick={()=>setActiveTab('premium')}>Premium</button>
                 <button className={`px-4 py-2 font-semibold border-b-2 ${activeTab === "claims" 
                ?'border-orange-500 text-orange-600' : 'border-transparent text-gray-500'
              }`} onClick={()=>setActiveTab('claims')}>Claims</button>
                          <button className={`px-4 py-2 font-semibold border-b-2 ${activeTab === "policy" 
                ?'border-orange-500 text-orange-600' : 'border-transparent text-gray-500'
              }`} onClick={()=>setActiveTab('policy')}>Policy</button>
            </div>

            {activeTab === 'general' && (
              <div className='py-4 md:px-12 '>
                {/* <p className='font-bold pb-3'>General</p> */}
                <div className='space-y-5'>
                  <div className='pb-4'>
                    <p className='font-bold text-base pb-2'>Why do I need to insure my car?</p>
                    <p>In India, third-party car insurance is compulsory for all car owners. Moreover, own-damage car insurance covers you in case of accidents, theft and fire. In case of any untoward incident, you don't have to pay out of pocket for repairs or replacement if you have a valid insurance policy.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base pb-2'>What are the benefits of buying car insurance online?</p>
                    <p>When you buy car insurance online, you get an instant policy, as there is no documentation or paperwork involved. You also have the advantage of choosing from multiple payment options, e.g., credit card (Visa, Master, AMEX card), net banking, debit card etc.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base pb-2'>What are the various types of vehicles that I can insure online?</p>
                    <p>You can insure a private car and two-wheeler online.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base pb-2'>How quickly can I buy/ renew car insurance online?</p>
                    <p>It takes just a few minutes to buy or renew car insurance online. You just have to enter the vehicle details, contact info and insured details, and pick the covers you need. Once you make the payment, you receive an instant car insurance policy.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base pb-2'>Are offline and online car insurance policies the same?</p>
                    <p>Yes, they are. In case of online car insurance, once you make payment, we send the policy documents to your email and your registered address.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base pb-2'>Where can I check my car insurance policy details?</p>
                    <p className='pb-4'>You can check all your car insurance details in your policy documents. You can also login to our website or IL Take Care app to check the below details:</p>
                    <ul className=''>
                      <li>
                       <span className='pr-3'>&rarr;</span> Policy Number</li>
                      <li>
                      <span className='pr-3'>&rarr;</span> Policy start and end date</li>
                      <li>
                      <span className='pr-3'>&rarr;</span>  Policy type (Comprehensive/OD only/TP only)</li>
                      <li>
                      <span className='pr-3'>&rarr;</span> Engine & chassis number</li>
                    </ul>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base pb-2'>What is an endorsement in car insurance?</p>
                    <p>An endorsement is written evidence of an agreed change in the policy. It is a document that incorporates changes in the policy terms.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base pb-2'>Do I need a valid PUC to drive in India?</p>
                    <p>Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base pb-2'>Do I need to have a valid insurance policy to get my new vehicle registered?</p>
                    <p>Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.</p>
                  </div>
                 

                </div>
              </div>
            )}
            {activeTab === 'cover' && (
              <div className='py-4 px-4'>
                {/* <p className='font-bold pb-3'>Cover</p> */}
                {/* <div className=''>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Why do I need to insure my car?</p>
                    <p>In India, third-party car insurance is compulsory for all car owners. Moreover, own-damage car insurance covers you in case of accidents, theft and fire. In case of any untoward incident, you don't have to pay out of pocket for repairs or replacement if you have a valid insurance policy.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>What are the benefits of buying car insurance online?</p>
                    <p>When you buy car insurance online, you get an instant policy, as there is no documentation or paperwork involved. You also have the advantage of choosing from multiple payment options, e.g., credit card (Visa, Master, AMEX card), net banking, debit card etc.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>What are the various types of vehicles that I can insure online?</p>
                    <p>You can insure a private car and two-wheeler online.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>How quickly can I buy/ renew car insurance online?</p>
                    <p>It takes just a few minutes to buy or renew car insurance online. You just have to enter the vehicle details, contact info and insured details, and pick the covers you need. Once you make the payment, you receive an instant car insurance policy.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Are offline and online car insurance policies the same?</p>
                    <p>Yes, they are. In case of online car insurance, once you make payment, we send the policy documents to your email and your registered address.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Where can I check my car insurance policy details?</p>
                    <p className='pb-2'>You can check all your car insurance details in your policy documents. You can also login to our website or IL Take Care app to check the below details:</p>
                    <ul>
                      <li>
                       <span className='pr-3'>&rarr;</span> Policy Number</li>
                      <li>
                      <span className='pr-3'>&rarr;</span> Policy start and end date</li>
                      <li>
                      <span className='pr-3'>&rarr;</span>  Policy type (Comprehensive/OD only/TP only)</li>
                      <li>
                      <span className='pr-3'>&rarr;</span> Engine & chassis number</li>
                    </ul>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Do I need a valid PUC to drive in India?</p>
                    <p>Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Do I need a valid PUC to drive in India?</p>
                    <p>Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Do I need to have a valid insurance policy to get my new vehicle registered?</p>
                    <p>Yes, you need to have an active and valid insurance policy while registering your new vehicle. Even a valid third party (TP) policy will work for registering your vehicle at the RTO..</p>
                  </div>
                 

                </div> */}
              </div>
            )}
            {activeTab === 'premium' && (
              <div className='py-4 px-4'>
                {/* <p className='font-bold pb-3'>Premium</p> */}
                {/* <div className=''>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Why do I need to insure my car?</p>
                    <p>In India, third-party car insurance is compulsory for all car owners. Moreover, own-damage car insurance covers you in case of accidents, theft and fire. In case of any untoward incident, you don't have to pay out of pocket for repairs or replacement if you have a valid insurance policy.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>What are the benefits of buying car insurance online?</p>
                    <p>When you buy car insurance online, you get an instant policy, as there is no documentation or paperwork involved. You also have the advantage of choosing from multiple payment options, e.g., credit card (Visa, Master, AMEX card), net banking, debit card etc.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>What are the various types of vehicles that I can insure online?</p>
                    <p>You can insure a private car and two-wheeler online.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>How quickly can I buy/ renew car insurance online?</p>
                    <p>It takes just a few minutes to buy or renew car insurance online. You just have to enter the vehicle details, contact info and insured details, and pick the covers you need. Once you make the payment, you receive an instant car insurance policy.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Are offline and online car insurance policies the same?</p>
                    <p>Yes, they are. In case of online car insurance, once you make payment, we send the policy documents to your email and your registered address.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Where can I check my car insurance policy details?</p>
                    <p className='pb-2'>You can check all your car insurance details in your policy documents. You can also login to our website or IL Take Care app to check the below details:</p>
                    <ul>
                      <li>
                       <span className='pr-3'>&rarr;</span> Policy Number</li>
                      <li>
                      <span className='pr-3'>&rarr;</span> Policy start and end date</li>
                      <li>
                      <span className='pr-3'>&rarr;</span>  Policy type (Comprehensive/OD only/TP only)</li>
                      <li>
                      <span className='pr-3'>&rarr;</span> Engine & chassis number</li>
                    </ul>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Do I need a valid PUC to drive in India?</p>
                    <p>Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Do I need a valid PUC to drive in India?</p>
                    <p>Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Do I need to have a valid insurance policy to get my new vehicle registered?</p>
                    <p>Yes, you need to have an active and valid insurance policy while registering your new vehicle. Even a valid third party (TP) policy will work for registering your vehicle at the RTO..</p>
                  </div>
                 

                </div> */}
              </div>
            )}
            {activeTab === 'claims' && (
              <div className='py-4 px-4'>
                {/* <p className='font-bold pb-3'>Claims</p> */}
                {/* <div className=''>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Why do I need to insure my car?</p>
                    <p>In India, third-party car insurance is compulsory for all car owners. Moreover, own-damage car insurance covers you in case of accidents, theft and fire. In case of any untoward incident, you don't have to pay out of pocket for repairs or replacement if you have a valid insurance policy.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>What are the benefits of buying car insurance online?</p>
                    <p>When you buy car insurance online, you get an instant policy, as there is no documentation or paperwork involved. You also have the advantage of choosing from multiple payment options, e.g., credit card (Visa, Master, AMEX card), net banking, debit card etc.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>What are the various types of vehicles that I can insure online?</p>
                    <p>You can insure a private car and two-wheeler online.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>How quickly can I buy/ renew car insurance online?</p>
                    <p>It takes just a few minutes to buy or renew car insurance online. You just have to enter the vehicle details, contact info and insured details, and pick the covers you need. Once you make the payment, you receive an instant car insurance policy.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Are offline and online car insurance policies the same?</p>
                    <p>Yes, they are. In case of online car insurance, once you make payment, we send the policy documents to your email and your registered address.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Where can I check my car insurance policy details?</p>
                    <p className='pb-2'>You can check all your car insurance details in your policy documents. You can also login to our website or IL Take Care app to check the below details:</p>
                    <ul>
                      <li>
                       <span className='pr-3'>&rarr;</span> Policy Number</li>
                      <li>
                      <span className='pr-3'>&rarr;</span> Policy start and end date</li>
                      <li>
                      <span className='pr-3'>&rarr;</span>  Policy type (Comprehensive/OD only/TP only)</li>
                      <li>
                      <span className='pr-3'>&rarr;</span> Engine & chassis number</li>
                    </ul>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Do I need a valid PUC to drive in India?</p>
                    <p>Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Do I need a valid PUC to drive in India?</p>
                    <p>Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Do I need to have a valid insurance policy to get my new vehicle registered?</p>
                    <p>Yes, you need to have an active and valid insurance policy while registering your new vehicle. Even a valid third party (TP) policy will work for registering your vehicle at the RTO..</p>
                  </div>
                 

                </div> */}
              </div>
            )}
            {activeTab === 'policy' && (
              <div className='py-4 px-4'>
                {/* <p className='font-bold pb-3'>Policy</p> */}
                {/* <div className=''>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Why do I need to insure my car?</p>
                    <p>In India, third-party car insurance is compulsory for all car owners. Moreover, own-damage car insurance covers you in case of accidents, theft and fire. In case of any untoward incident, you don't have to pay out of pocket for repairs or replacement if you have a valid insurance policy.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>What are the benefits of buying car insurance online?</p>
                    <p>When you buy car insurance online, you get an instant policy, as there is no documentation or paperwork involved. You also have the advantage of choosing from multiple payment options, e.g., credit card (Visa, Master, AMEX card), net banking, debit card etc.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>What are the various types of vehicles that I can insure online?</p>
                    <p>You can insure a private car and two-wheeler online.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>How quickly can I buy/ renew car insurance online?</p>
                    <p>It takes just a few minutes to buy or renew car insurance online. You just have to enter the vehicle details, contact info and insured details, and pick the covers you need. Once you make the payment, you receive an instant car insurance policy.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Are offline and online car insurance policies the same?</p>
                    <p>Yes, they are. In case of online car insurance, once you make payment, we send the policy documents to your email and your registered address.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Where can I check my car insurance policy details?</p>
                    <p className='pb-2'>You can check all your car insurance details in your policy documents. You can also login to our website or IL Take Care app to check the below details:</p>
                    <ul>
                      <li>
                       <span className='pr-3'>&rarr;</span> Policy Number</li>
                      <li>
                      <span className='pr-3'>&rarr;</span> Policy start and end date</li>
                      <li>
                      <span className='pr-3'>&rarr;</span>  Policy type (Comprehensive/OD only/TP only)</li>
                      <li>
                      <span className='pr-3'>&rarr;</span> Engine & chassis number</li>
                    </ul>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Do I need a valid PUC to drive in India?</p>
                    <p>Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Do I need a valid PUC to drive in India?</p>
                    <p>Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.</p>
                  </div>
                  <div className='pb-4'>
                    <p className='font-bold text-base'>Do I need to have a valid insurance policy to get my new vehicle registered?</p>
                    <p>Yes, you need to have an active and valid insurance policy while registering your new vehicle. Even a valid third party (TP) policy will work for registering your vehicle at the RTO..</p>
                  </div>
                 

                </div> */}
              </div>
            )}
          </div>
    </div>
    </div>
  
  )
}

export default CommonQue
