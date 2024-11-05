"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import type { Metadata } from "next";
import "../../app/globals.css";

import { cn } from "@/utils/cn";
import Topbar from "@/components/common/Topbar";
import DotBackground from "@/components/ui/dot-bg";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Footer from "@/components/common/Footer";
import { calsans, dmsans } from "@/utils/fonts";
import { BackgroundBeams } from "@/components/ui/background-beams";
import CustomConfetti from "@/components/common/CustomConfetti";
import { DangerToast, SuccessToast } from "@/components/common/CustomToast";
// import RootLayout from "@/app/layout";
import Head from "next/head";
import Link from "next/link";
import Cal from "../components/Cal";

interface AlertState {
  message: string;
  severity: "error" | "success" | "info" | "warning";
  showConfetti: boolean;
}

export const metadata: Metadata = {
  title: "Contact Form",
  description: "Generated by create next app",
};

const ContactForm = () => {
  const words = [
    {
      text: "Connect",
    },
    {
      text: "!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<AlertState>({
    message: "Thank you for contacting. Will get back soon !",
    severity: "success",
    showConfetti: false,
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (inputs.name === "" || inputs.email === "" || inputs.message === "") {
        setAlert({
          message: "Please fill in all the fields",
          severity: "error",
          showConfetti: false,
        });
        setOpen(true);
        return;
      }

      const body = {
        fields: {
          name: inputs.name,
          email: inputs.email,
          message: inputs.message,
        },
      };

      // console.log(process.env.AIRTABLE_API_KEY);

      await fetch("https://api.airtable.com/v0/appTbgDq2M8MBUNrR/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body), // Convert the body to a JSON string
      });

      setAlert({
        message: "Thank you for contacting. Will get back soon !",
        severity: "success",
        showConfetti: true,
      });

      setOpen(true);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setAlert({
        message: "Sending Message failed! Try again later",
        severity: "error",
        showConfetti: false,
      });
      setOpen(true);
      setIsLoading(false);
    }
  };

  // for toasts
  const [open, setOpen] = useState(false);

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    // console.log(event.target);
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const hideConfetti = () => {
    setAlert((prevAlert) => ({
      ...prevAlert,
      showConfetti: false,
    }));
  };

  useEffect(() => {
    if (alert.showConfetti) {
      const confettiTimeout = setTimeout(hideConfetti, 9000);
      return () => {
        clearTimeout(confettiTimeout);
      };
    }
  }, [alert.showConfetti]);

  useEffect(() => {
    if (open) {
      const alertTimeout = setTimeout(handleClose, 5000);
      return () => {
        clearTimeout(alertTimeout);
      };
    }
  }, [open]);

  return (
    <>
      <Head>
        <title>Contact | Shelcia David</title>
        <meta name="description" content="Contact me through the form" />
        <meta property="og:image" content="/social-graph-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.shelcia-dev.me/" />
        <meta property="og:type" content="website" />
      </Head>
      <Topbar />
      {open &&
        (alert.severity === "success" ? (
          <SuccessToast message={alert.message} onClose={handleClose} />
        ) : (
          <DangerToast message={alert.message} onClose={handleClose} />
        ))}
      {alert.showConfetti && <CustomConfetti numberOfPieces={800} />}
      <main className="relative">
        <DotBackground>
          <div
            className={`max-w-md w-full mx-auto rounded-none md:rounded-2xl p-6 md:p-8 shadow-input bg-white dark:bg-black ${dmsans.className} relative z-30`}
          >
            <TypewriterEffect
              words={words}
              className={`font-bold text-3xl text-neutral-800 dark:text-neutral-200 ${calsans.className}`}
            />
            <p
              className={`text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 `}
            >
              Interested in working with me? Submit your project inquiry using
              the form. Additionally you can look into my resume
              <Link
                href="https://drive.google.com/file/d/1iasR1hd3AZUObecra-vajTD7YgjQp19j/view?usp=sharing"
                target="_blank"
                className="ml-1 inline text-blue-500 hover:underline"
              >
                here
              </Link>
            </p>

            <form className="my-8 relative z-30" onSubmit={sendMessage}>
              <LabelInputContainer className="mb-4 relative z-30">
                <Label htmlFor="name">Name*</Label>
                <Input
                  id="name"
                  placeholder="Shelcia David"
                  value={inputs.name}
                  name="name"
                  onChange={handleInputs}
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4 relative z-20">
                <Label htmlFor="email">Email Address*</Label>
                <Input
                  id="email"
                  placeholder="shelcia@example.com"
                  type="email"
                  value={inputs.email}
                  name="email"
                  onChange={handleInputs}
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4 relative z-20">
                <Label htmlFor="email">Message*</Label>
                <Input
                  id="message"
                  placeholder="I got a MERN CRM project"
                  type="text"
                  value={inputs.message}
                  name="message"
                  onChange={handleInputs}
                />
              </LabelInputContainer>
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] relative z-20"
                type="submit"
                disabled={isLoading}
              >
                Send Message
                <BottomGradient />
              </button>

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
          </div>
        </DotBackground>
        {/* <BackgroundBeams /> */}
      </main>
      <Footer />
      {/* <BackgroundBeams /> */}
      <Cal />
    </>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default ContactForm;
