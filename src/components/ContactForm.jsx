import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import FormModal from './FormModal';
// import Social from './Social';
import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
import.meta.env.VITE_EMAILJS_SERVICE_ID;
import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
import {
    Mail,
    User,
    MessageSquare,
    FileText,
    Send,
    Phone,
    MapPin,
} from 'lucide-react';

const ContactForm = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: '',
    });


    const [isSubmitted, setIsSubmitted] = useState(false);
    const [requiredFieldError, setRequiredFieldError] = useState('');
    const [showModal, setShowModal] = useState(false);
        // console.log(showModal, 'show modal')
    const [focused, setFocused] = useState(null);

    const isDisabled = !(inputs.name && inputs.email && inputs.message);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showModal]);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showModal]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));

        if (value.trim() !== '') {
            setRequiredFieldError('');
        }
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    // console.log(isDisabled, 'is disabled?');
    const sendEmail = (e) => {
        e.preventDefault();

        if (isDisabled) {
            if (!inputs.name) {
                setRequiredFieldError('Name is a required field.');
            } else if (!inputs.email) {
                setRequiredFieldError('Email address is a required field.');
            } else if (!inputs.message) {
                setRequiredFieldError('Message is a required field.');
            }
            return;
        }

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            )
            .then(
                () => {
                    // console.log(result.text);
                    setIsSubmitted(true);
                    handleOpenModal();
                    setInputs({
                        name: '',
                        email: '',

                        message: '',
                    });
                },
                () => {
                    // console.log(error.text);
                    setRequiredFieldError(
                        'Failed to send message. Please try again.',
                    );
                },
            );
    };

    // console.log(requiredFieldError, 'rquired field error');

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setFocused(null);

        if (name === 'name' && value === '') {
            setRequiredFieldError('Name is a required field.');
        } else if (name === 'email' && value === '') {
            setRequiredFieldError('Email address is a required field.');
        } else if (name === 'message' && value === '') {
            setRequiredFieldError('Message is a required field.');
        } else {
            setRequiredFieldError('');
        }
    };

    const handleFocus = (field) => {
        setFocused(field);
        setRequiredFieldError('');
    };

    const InputField = ({
        type,
        name,
        icon,
        placeholder,
        value,
        multiline = false,
        required = false,
    }) => (
        <div
            className={`mb-6 relative group ${
                focused === name ? 'focused' : ''
            }`}
        >
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-sm border transition-all duration-300 group-hover:shadow-md">
                <div
                    className={`
                        flex items-center justify-center p-3 text-gray-400
                        ${
                            focused === name
                                ? 'text-rose-500'
                                : 'group-hover:text-lavender-500'
                        }
                        transition-colors duration-300
                    `}
                >
                    {icon}
                </div>

                {multiline ? (
                    <textarea
                        id={name}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        placeholder={placeholder}
                        onBlur={handleBlur}
                        onFocus={() => handleFocus(name)}
                        rows="4"
                        required={required}
                        className="w-full px-3 py-3 bg-transparent border-none focus:outline-none resize-none"
                    />
                ) : (
                    <input
                        type={type}
                        id={name}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        placeholder={placeholder}
                        onBlur={handleBlur}
                        onFocus={() => handleFocus(name)}
                        required={required}
                        className="w-full px-3 py-3 bg-transparent border-none focus:outline-none"
                    />
                )}
            </div>
            {required && focused === name && (
                <span className="text-xs text-rose-500 absolute -bottom-5 left-0">
                    * Required field
                </span>
            )}
        </div>
    );

    return (
        <div>
            <section id="contact" className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            {/* <ContactForm /> */}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Let's Build Something Amazing
                            </span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl">
                            Ready to transform your business with a modern web
                            application? Get in touch today.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="flex-1 flex flex-col space-y-8">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <div className="font-semibold">
                                        Email Us
                                    </div>
                                    <a
                                        href="mailto:info@starfallcodeworks.com"
                                        className="text-slate-400 hover:text-blue-400 transition-colors"
                                    >
                                        info@starfallcodeworks.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <div className="font-semibold">Call Us</div>

                                    <a
                                        href="tel:+12069391818"
                                        className="text-slate-400 hover:text-purple-400 transition-colors"
                                    >
                                        (206) 939-1818
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <div className="font-semibold">
                                        Based In
                                    </div>
                                    <div className="text-slate-400">
                                        Gulf Breeze, FL
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 bg-slate-800 p-8 rounded-xl border border-slate-700 max-w-lg">
                            <p className="py-2"> * Required Field</p>
                            <form
                                className="flex flex-col space-y-6"
                                onSubmit={sendEmail}
                                noValidate
                            >
                                <input
                                    type="text"
                                    name="name"
                                    icon={<User size={20} />}
                                    placeholder="Your Name *"
                                    value={inputs.name}
                                    required={true}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                                />
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={inputs.email}
                                        required={true}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                                        placeholder="youremail@email.com *"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        placeholder="Tell us about your project... *"
                                        value={inputs.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none"
                                        required={true}
                                    />
                                    {requiredFieldError && (
                                        <div className="mb-6 px-4 py-3 bg-rose-50 border-l-4 border-rose-500 text-rose-700 rounded">
                                            <p>{requiredFieldError}</p>
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isDisabled} // keeps button actually disabled
                                    className={[
                                        'group relative overflow-hidden rounded-full px-8 py-4 font-semibold text-lg',
                                        'transition-all duration-300 min-w-[200px]',
                                        isDisabled
                                            ? 'bg-gray-100 border border-gray-200 text-gray-400 cursor-not-allowed shadow-inner'
                                            : 'w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105',
                                    ].join(' ')}
                                >
                                    <span
                                        className={`relative flex items-center justify-center gap-3 transition-opacity duration-300 ${
                                            isDisabled ? 'opacity-40' : ''
                                        }`}
                                    >
                                        Send Message
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                   <FormModal
                show={showModal}
                handleClose={handleCloseModal}
                setShowModal={setShowModal}
            />
            </section>
        </div>
    );
};

export default ContactForm;
