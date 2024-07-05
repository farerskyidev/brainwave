import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const AccordionSection = () => {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchPageData = async () => {
        try {
        const response = await fetch('http://brainwave.local/wp-json/wp/v2/pages/57');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPageData(data);
        setLoading(false);
        } catch (error) {
        console.error('Error fetching page data:', error);
        setLoading(false);
        }
    };

    fetchPageData();
    }, []);

    if (loading) {
    return <p></p>;
    }

    if (!pageData) {
    return <p></p>;
    }

    return (
    <section className='bg-color pt-28 relative'>
        <div className="grid-x grid-padding-x w-1440">
        <div className="cell large-6 medium-6 small-12">
            <div className="max-w-lg mb-16">
            <h2 className='text-5xl leading-[3.75rem] mb-6'>{pageData.acf.title_accordion}</h2>
            <p className='text-x text-purpleColor mb-4'>{pageData.acf.text_accordion} <a className='ml-1 text-white' href='/'>Contact us</a></p>
            </div>
        </div>
        <div className="cell large-6 medium-6 small-12">
            <Accordion preExpanded={['accordion-item-0']}>
            {pageData.acf.accordion.map((item, index) => (
                <AccordionItem key={index} uuid={`accordion-item-${index}`}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {item.title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div dangerouslySetInnerHTML={{ __html: item.text }} />
                </AccordionItemPanel>
                </AccordionItem>
            ))}
            </Accordion>
        </div>
        </div>
    </section>
    );
};

export default AccordionSection;
