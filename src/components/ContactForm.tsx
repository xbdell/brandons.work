import { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Generate mailto link with form data
    const generateMailtoLink = () => {
        const to = "bison_roost.9v@icloud.com";

        const subjectText = formData.subject
            ? `${formData.subject} - Contact from ${formData.name}`
            : `Contact from ${formData.name}`;

        const bodyText = `
Hi Brandon,

${formData.message}

---
Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.subject || "Not specified"}

Sent from brandons.work contact form
        `.trim();

        const encodedSubject = encodeURIComponent(subjectText);
        const encodedBody = encodeURIComponent(bodyText);

        return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
    };

    // Check if required fields are filled
    const isFormValid =
        formData.name.trim() &&
        formData.email.trim() &&
        formData.message.trim();

    const fieldClasses =
        "w-full border border-zinc-200 bg-white text-black text-sm px-4 py-3 rounded-none placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black focus:bg-zinc-50";

    const labelClasses =
        "font-mono text-xs font-semibold tracking-widest uppercase text-black mb-1";

    return (
        <div className="mx-auto max-w-2xl rounded-none border border-zinc-200 bg-white p-8">
            <div className="mb-8">
                <div className="mb-2">
                    <h3 className="text-2xl font-bold text-black">
                        GET IN TOUCH
                    </h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-500">
                    {`Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.`}
                </p>
            </div>

            <div className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className={labelClasses}>
                            NAME *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={fieldClasses}
                            placeholder="Your full name"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className={labelClasses}>
                            EMAIL *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={fieldClasses}
                            placeholder="your@email.com"
                        />
                    </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className={labelClasses}>
                        PROJECT TYPE
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={fieldClasses}
                    >
                        <option value="">Select project type</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Frontend Consulting">
                            Frontend Consulting
                        </option>
                        <option value="Team Leadership">Team Leadership</option>
                        <option value="Architecture Review">
                            Architecture Review
                        </option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className={labelClasses}>
                        MESSAGE *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className={`${fieldClasses} min-h-[120px] resize-y leading-relaxed`}
                        placeholder="Tell me about your project, timeline, and requirements..."
                    />
                </div>

                {/* Technical divider */}
                <div className="my-8 h-px w-full bg-zinc-200"></div>

                {/* Submit section */}
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="flex items-center gap-3">
                        <div className="relative block h-2 w-2 bg-blue-500"></div>
                        <span className="font-mono text-xs text-zinc-500">
                            {isFormValid
                                ? "READY.TO.SEND"
                                : "COMPLETE.REQUIRED.FIELDS"}
                        </span>
                    </div>

                    <a
                        href={generateMailtoLink()}
                        className={`cursor-pointer rounded-none border border-black bg-black px-6 py-3 font-sans text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:-translate-y-px hover:border-zinc-500 hover:bg-zinc-500 hover:shadow-md ${!isFormValid ? "pointer-events-none opacity-50" : ""}`}
                        aria-disabled={!isFormValid}
                    >
                        SEND MESSAGE
                    </a>
                </div>

                {/* Info message */}
                <div className="mt-4 border border-blue-500 bg-blue-500/5 p-4 text-blue-500">
                    <div className="flex items-center gap-2">
                        <div className="relative block h-2 w-2 bg-blue-500"></div>
                        <span className="font-semibold">
                            Email client integration
                        </span>
                    </div>
                    <p className="mt-1 pb-4 text-sm text-zinc-500">
                        {`Clicking "Send Message" will open your default email
                        client with the message pre-filled. If you do not have an email client installed, please click the button below to copy the contact email to your clipboard.`}
                    </p>
                    <button
                        onClick={() => {
                            navigator.clipboard
                                .writeText("bison_roost.9v@icloud.com")
                                .catch(() => null);
                        }}
                        className="cursor-pointer rounded-none border border-blue-500 bg-transparent px-6 py-3 font-sans text-sm font-semibold uppercase tracking-wide text-blue-500 transition-all duration-200 hover:-translate-y-px hover:bg-blue-500 hover:text-white hover:shadow-md"
                    >
                        Copy Email
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
