"use client";
import { motion, type Easing } from "framer-motion";
import Image from "next/image";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { getSupabaseClient } from "~/lib/supabase";

type Inputs = {
  email: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Inputs>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSuccess(false);
    setSubmitError(null);
    try {
      const supabase = getSupabaseClient();
      const { data: responseData, error } = await supabase.from("waitlist").insert({ email: data.email });
      if (error) throw error;
      console.log("Supabase success:", responseData);
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Supabase error:", error);
      if (error && typeof error === 'object' && 'code' in error) {
          const supabaseError = error as { code: string, message: string };
          if (supabaseError.code === '23505') {
              setSubmitError("This email is already on the waitlist.");
          } else {
              setSubmitError(supabaseError.message || "An unexpected error occurred.");
          }
      } else {
          setSubmitError("An unexpected error occurred.");
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as Easing,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as Easing },
    },
  };

  const imageContainerVariants = {
      hidden: { y: 100, opacity: 0 },
      visible: {
          y: 0,
          opacity: 1,
          transition: {
              duration: 0.8,
              delay: 0.2,
              ease: [0.4, 0, 0.2, 1] as Easing,
          },
      },
  };

  return (
    <motion.div
      className="bg-white relative w-screen h-screen overflow-hidden font-inter"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Images container */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1920px] h-[400px]"
        variants={imageContainerVariants}
      >
          <div className="relative w-full h-full">
              <div className="absolute bottom-0 z-10" style={{left: 'calc(50% - 1062px/2 - 300px)', width: 800, height: '100%', transform: 'translateY(120px)'}}>
                  <Image src="/images/image7.png" alt="Image 7" fill style={{objectFit: "contain", objectPosition: "center bottom"}}/>
              </div>
              <div className="absolute bottom-0 z-10" style={{left: 'calc(50% - 1062px/2)', width: 1062, height: '100%'}}>
                  <Image src="/images/image6.png" alt="Image 6" fill style={{objectFit: "contain", objectPosition: "center bottom"}}/>
              </div>
              <div className="absolute bottom-0 z-10" style={{left: 'calc(50% + 1062px/2 - 500px)', width: 800, height: '100%'}}>
                  <Image src="/images/image8.png" alt="Image 8" fill style={{objectFit: "contain", objectPosition: "center bottom"}}/>
              </div>
          </div>
      </motion.div>

      {/* Text and other elements */}
      <motion.div 
        className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[700px] flex justify-end"
        variants={itemVariants}
      >
        <h1 className="text-[160px] font-['Helvetica_Neue:Regular',_sans-serif] text-black">Contact</h1>
      </motion.div>

      <motion.div 
        className="absolute top-[350px] left-1/2 -translate-x-1/2 w-[700px] text-black flex justify-between items-start"
        variants={itemVariants}
      >
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex items-end space-x-2">
            <div className="relative">
              <p className="text-[18px]">to invest with us</p>
              <input
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                placeholder="enter your email"
                className="text-[18px] text-[#878787] mt-4 bg-transparent border-b-2 border-[#878787] w-[250px] focus:outline-none"
              />
              <div className="absolute left-0 top-full mt-1">
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                {isSuccess && <p className="text-green-500 text-sm">Thank you for joining the waitlist!</p>}
                {submitError && <p className="text-red-500 text-sm">{submitError}</p>}
              </div>
            </div>
            <button type="submit" disabled={isSubmitting} className="pb-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>

        <div className="text-right relative">
          <p className="text-[18px] w-[300px]">
            and one of our representatives will reach out from
            investments@blackwellcapital.com
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="absolute top-[500px] left-1/2 -translate-x-1/2 w-[700px] text-black flex justify-between"
        variants={itemVariants}
      >
        <div>
            <p className="text-[18px]">to work with us</p>
        </div>

        <div className="text-right">
          <p className="text-[18px] w-[300px]">
            send a copy of your resume and a brief cover letter detailing your background and alignment to recruiting@blackwellcapital.com
          </p>
        </div>
      </motion.div>

    </motion.div>
  );
}
