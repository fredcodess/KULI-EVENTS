import SocialLinks from "../components/SocialLinks";
import BookingFormPage from "./BookingFormPage";
import { BsFillBalloonFill } from "react-icons/bs";

const ContactUsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-22">
        <div className="flex-1">
          <BookingFormPage />
        </div>

        <div className="flex-1 flex flex-col space-y-10 text-accent">
          <div className="">
            <p className="text-5xl font-extrabold text-accent mb-8 uppercase">
              Contact Us
            </p>
            <div className="space-y-3 text-accent">
              <p className="flex items-start gap-3">
                <BsFillBalloonFill className="text-primary mt-1" />
                Simply fill in our contact form below and we will get back to
                you within two working days.
              </p>
              <p className="flex items-start gap-3">
                <BsFillBalloonFill className="text-primary mt-1" />
                Once we have confirmed availability, we will send you a booking
                form to complete.
              </p>
              <p className="flex items-start gap-3">
                <BsFillBalloonFill className="text-primary mt-1" />
                Please check your inbox and junk email folder for our reply.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-5xl font-extrabold text-accent mb-8">
              Give Us A Call
            </p>
            <p className="text-lg font-medium">
              Call on:{" "}
              <a
                href="tel:+44987382387829"
                className="text-primary hover:underline"
              >
                +44 9873 823 87829
              </a>
            </p>
            <p className="text-lg font-medium">
              Email:{" "}
              <a
                href="mailto:welcome@kulievents.co.uk"
                className="text-primary hover:underline"
              >
                welcome@kulievents.co.uk
              </a>
            </p>
          </div>

          <div>
            <SocialLinks size={60} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
