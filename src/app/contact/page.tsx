"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <div
      className="bg-white relative w-screen h-screen overflow-hidden font-inter"
    >
      {/* Images container */}
      <div className="absolute bottom-0 left-0 w-full h-[400px] flex justify-center items-end">
          <div className="relative" style={{width: 1062, height: '100%', flexShrink: 0, marginLeft: -1000, marginRight: 0}}>
              <Image src="/images/image 7.png" alt="Image 7" layout="fill" objectFit="contain" objectPosition="left bottom"/>
          </div>
          <div className="relative z-10" style={{width: 1062, height: '100%', flexShrink: 0, marginLeft: -450, marginRight: -450}}>
              <Image src="/images/image 6.png" alt="Image 6" layout="fill" objectFit="contain" objectPosition="center bottom"/>
          </div>
          <div className="relative" style={{width: 1062, height: '100%', flexShrink: 0, marginLeft: 0, marginRight: -450}}>
              <Image src="/images/image 8.png" alt="Image 8" layout="fill" objectFit="contain" objectPosition="right bottom"/>
          </div>
      </div>

      {/* Text and other elements */}
      <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[700px] flex justify-end">
        <h1 className="text-[160px] font-['Helvetica_Neue:Regular',_sans-serif] text-black">Contact</h1>
      </div>

      <div className="absolute top-[350px] left-1/2 -translate-x-1/2 w-[700px] text-black flex justify-between items-start">
        <div>
            <p className="text-[18px]">to invest with us</p>
            <p className="text-[22px] text-[#878787] mt-4">enter your email</p>
            <div className="w-[278px] h-[2px] bg-[#878787] mt-2"></div>
        </div>

        <div className="text-right relative">
          <p className="text-[18px] w-[300px]">
            and one of our representatives will reach out from
            investments@blackwellcapital.com
          </p>
        </div>
      </div>

      <div className="absolute top-[500px] left-1/2 -translate-x-1/2 w-[700px] text-black flex justify-between">
        <div>
            <p className="text-[18px]">to work with us</p>
        </div>

        <div className="text-right">
          <p className="text-[18px] w-[300px]">
            send a copy of your resume and a brief cover letter detailing your background and alignment to recruiting@blackwellcapital.com
          </p>
        </div>
      </div>

    </div>
  );
}
