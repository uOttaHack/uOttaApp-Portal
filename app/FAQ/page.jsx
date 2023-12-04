import { UserProfile } from '@clerk/nextjs';
import { FAQData } from '../data';

const FAQ = () => {
    // Replace '#HEXCODE' with the actual hex code of the color you want to use
    const descriptionColor = '#8D8E99';

    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='my-24 text-left'>
                <h1 className='title-font sm:text-4xl text-3xl mb-16 font-medium text-gray-900 text-center lg:text-left'>
                    🤨 Frequently Asked Questions
                </h1>
                <h1 className='text-2xl mb-4'></h1>
                {FAQData.map((faqItem, index) => (
                    <div key={index} className="mb-16">
                        <h3 className="text-xl font-medium">{faqItem.question}</h3>
                        <p className="mt-2 text-md text-gray-600">{faqItem.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;