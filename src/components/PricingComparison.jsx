import {
    Check,
    Star,
    Zap,
    Crown,
    Plus,
    Palette,
    Edit,
    Database,
    Wrench,
} from 'lucide-react';
import { useState } from 'react';
import Calendar from './Calendar';

const PricingComparison = () => {
    const [isClicked, setIsClicked] = useState(false);
    const plans = [
        {
            name: 'Starter Website',
            price: '$500',

            color: 'from-green-400 to-emerald-500',
            bgColor: 'bg-green-500/10',
            borderColor: 'border-green-500/30',
            description: 'Perfect for getting online quickly.',
            features: [
                '1 mobile-friendly, single-page site',
                'Contact form (EmailJS or similar)',
                'Basic branding (colors, fonts, layout)',
                'Deployment to hosting (Netlify/Vercel/Render)',
            ],
            bestFor:
                'food trucks, nail salons, small shops that just need a web presence.',
            buttonText: 'Get Started',
            popular: false,
        },
        {
            name: 'Professional Website',
            price: '$850',

            color: 'from-orange-400 to-amber-500',
            bgColor: 'bg-orange-500/10',
            borderColor: 'border-orange-500/30',
            description: 'A polished, engaging website with extras.',
            features: [
                'Everything in Starter',
                'Custom design tailored to your brand',
                'Light animations (image fades, button effects)',
                'SEO setup (basic search engine optimization)',
                'Stock image sourcing (if needed)',
                '1 month of free updates & support',
            ],
            bestFor:
                'restaurants, barber shops, boutiques ready to stand out online.',
            buttonText: 'Most Popular',
            popular: true,
        },
        {
            name: 'Premium Website',
            price: '$1,200+',

            color: 'from-blue-400 to-cyan-500',
            bgColor: 'bg-blue-500/10',
            borderColor: 'border-blue-500/30',
            description: 'For businesses ready to impress and grow.',
            features: [
                'Everything in Professional',
                'Strong branded design (based on Figma mockups)',
                'Extra integrations (Google Maps, reviews widget, etc.)',
                'Analytics setup (Google Analytics or Plausible)',
                '3 months of support & updates',
            ],
            bestFor:
                'established businesses ready to grow their customer base online.',

            popular: false,
        },
    ];

    const addOns = [
        {
            icon: <Palette className="w-5 h-5" />,
            name: 'Logo & Branding Design',
            price: '$200',
            color: 'text-purple-400',
        },
        {
            icon: <Edit className="w-5 h-5" />,
            name: 'Copywriting',
            price: '$150 per section/page',
            color: 'text-pink-400',
        },
        {
            icon: <Database className="w-5 h-5" />,
            name: 'CMS Integration',
            price: '$500',
            description: '(blog/news/menus)',
            color: 'text-emerald-400',
        },
        {
            icon: <Wrench className="w-5 h-5" />,
            name: 'Ongoing Maintenance',
            price: '$75/month',
            color: 'text-cyan-400',
        },
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Our Services
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Choose the perfect package for your business. All plans
                        include modern design, mobile optimization, and our
                        commitment to your success.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="flex flex-wrap justify-center gap-8 mb-20">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-slate-800 rounded-2xl border ${
                                plan.borderColor
                            } p-8 w-full md:w-96 lg:w-80 xl:w-96 transition-all hover:transform hover:scale-105 ${
                                plan.popular ? 'ring-2 ring-orange-500/50' : ''
                            }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-orange-400 to-amber-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                                        MOST POPULAR
                                    </div>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">
                                    {plan.name}
                                </h3>
                                <div className="text-4xl font-bold mb-2">
                                    <span
                                        className={`bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                                    >
                                        {plan.price}
                                    </span>
                                </div>
                                <p className="text-slate-400">
                                    {plan.description}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <div
                                        key={featureIndex}
                                        className="flex items-start space-x-3"
                                    >
                                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Best For */}
                            <div className="mb-8 p-4 bg-slate-700/50 rounded-lg">
                                <div className="text-sm font-semibold text-slate-300 mb-1">
                                    Best for:
                                </div>
                                <div className="text-slate-400 text-sm">
                                    {plan.bestFor}
                                </div>
                            </div>

                            {/* CTA Button */}
                        </div>
                    ))}
                </div>

                {/* Add-Ons Section */}
                <div className="bg-slate-800/50 rounded-2xl p-8 mb-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center space-x-2">
                            <Plus className="w-8 h-8 text-purple-400" />
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Add-Ons
                            </span>
                        </h2>
                        <p className="text-slate-400">
                            Enhance your website with these optional services
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {addOns.map((addon, index) => (
                            <div
                                key={index}
                                className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`${addon.color}`}>
                                        {addon.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-white mb-1">
                                            {addon.name}
                                        </h3>
                                        {addon.description && (
                                            <p className="text-sm text-slate-400 mb-1">
                                                {addon.description}
                                            </p>
                                        )}
                                        <div
                                            className={`font-bold ${addon.color}`}
                                        >
                                            {addon.price}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-slate-700">
                    <h3 className="text-2xl font-bold mb-4">
                        Ready to Get Started?
                    </h3>
                    <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                        Not sure which plan is right for you? Let's chat about
                        your project and find the perfect solution for your
                        business needs.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        {!isClicked ? (
                            <button
                                className="bg-gradient-to-r from-blue-500 to-purple-600 
             hover:from-blue-600 hover:to-purple-700
             px-6 py-3 sm:px-8 sm:py-4 
             rounded-lg font-semibold 
             text-sm sm:text-base md:text-lg
             transition-all transform hover:scale-105"
                                onClick={() => setIsClicked((v) => !v)}
                            >
                                Schedule a Consultation
                            </button>
                        ) : (
                            <button
                                className="bg-gradient-to-r from-blue-500 to-purple-600 
             hover:from-blue-600 hover:to-purple-700
             px-6 py-3 sm:px-8 sm:py-4 
             rounded-lg font-semibold 
             text-sm sm:text-base md:text-lg
             transition-all transform hover:scale-105"
                                onClick={() => setIsClicked((v) => !v)}
                            >
                                Hide Calendar
                            </button>
                        )}

                        {isClicked && (
                            <div className="w-full max-w-3xl mx-auto">
                                <Calendar
                                    style={{
                                        width: '100%',
                                        height:
                                            window.innerWidth < 640
                                                ? '500px'
                                                : '700px',
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingComparison;
