import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // ✅ Success/Error state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 👉 In production, replace this with API call
      console.log("Form Submitted:", formData);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(""), 3000); // Clear status after 3s
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 md:px-12 py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* ---- Contact Form ---- */}
        <div className="w-full md:w-[650px] bg-grey  rounded-2xl p-12">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-600 mb-2 font-medium"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 mb-2 font-medium"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-600 mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-800 text-white px-5 py-2 rounded-lg hover:bg-red-900 transition duration-300 w-full md:w-auto"
            >
              Send Message
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-green-600 font-medium mt-3">
                ✅ Message Sent Successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-medium mt-3">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* ---- Contact Info + Map ---- */}
        <div className="w-full md:w-[500px] bg-white shadow-xl  p-8 mt-6 md:mt-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Training and Placement Cell
          </h3>
          <p className="text-gray-600 mb-2">
            RGPV Campus, Airport Bypass Road, Gandhi Nagar, Bhopal, Madhya
            Pradesh
          </p>
          <p className="text-gray-600 mb-2">📞 +91 755 2678 800</p>
          <p className="text-gray-600 mb-4">✉ placement@rgpv.ac.in</p>

          <iframe
            title="RGPV Location"
            className="w-full h-60 "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.369444133448!2d77.434269!3d23.181467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41f8654dfffb%3A0x6a2b34a9d2e9a9f9!2sRGPV%20Bhopal!5e0!3m2!1sen!2sin!4v1694945712845!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
