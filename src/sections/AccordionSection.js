import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Example() {
    return (
      <section className='bg-color pt-28 relative'>
        <div className="grid-x grid-padding-x w-1440">
          <div className="cell large-6 medium-6 small-12">
            <div className="max-w-lg mb-16">
              <h2 className='text-5xl leading-[3.75rem] mb-6'>Frequently asked questions</h2>
              <p className='text-x text-purpleColor mb-4'>Haven’t found what you’re looking for? 
                <a className='ml-1 text-white' href='/'>Contact us</a> 
              </p>
              
            </div> 
          </div>
          <div className="cell large-6 medium-6 small-12">
            <Accordion>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                          What harsh truths do you prefer to ignore?
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim minim
                          esse tempor laborum consequat esse adipisicing eu
                          reprehenderit enim.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                          Is free will real or just an illusion?
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                          In ad velit in ex nostrud dolore cupidatat consectetur
                          ea in ut nostrud velit in irure cillum tempor laboris
                          sed adipisicing eu esse duis nulla non.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                          What harsh truths do you prefer to ignore?
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim minim
                          esse tempor laborum consequat esse adipisicing eu
                          reprehenderit enim.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                          Is free will real or just an illusion?
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                          In ad velit in ex nostrud dolore cupidatat consectetur
                          ea in ut nostrud velit in irure cillum tempor laboris
                          sed adipisicing eu esse duis nulla non.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
        
    );
}