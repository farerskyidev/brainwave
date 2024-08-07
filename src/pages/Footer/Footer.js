import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";




export const Footer = () => {
  return ( 
      
      <footer className="bg-color relative"> 
      
        <div className="w-1920">
          <div className="grid-x grid-padding-x size-full items-center py-5 relative border-bt">
            <div className="cell large-3">
              <div>
                  <a className="justify-center flex x:justify-start" href="/"><img src={logo} alt="logo" /></a>  
              </div>
            </div> 
            <div className="cell large-9">
              <nav>
                <ul className="flex justify-end font-semibold hidden x:flex menu">
                  <li className='text-whiteColor-50 m:px-2 x:px-6 xl:px-8 2xl:px-12'><NavLink to="/features">Features</NavLink></li>
                  <li className='text-whiteColor-50 m:px-2 x:px-6 xl:px-8 2xl:px-12'><NavLink to="/pricing">Pricing</NavLink></li>
                  <li className='text-whiteColor-50 m:px-2 x:px-6 xl:px-8 2xl:px-12'><NavLink to="/how-to-use">How To Use</NavLink></li>
                  <li className='text-whiteColor-50 m:px-2 x:px-6 xl:px-8 2xl:px-12'><NavLink to="/roadmap">Roadmap</NavLink></li> 
                </ul>
              </nav>
            </div> 
          </div>
          <div className="grid-x grid-padding-x size-full items-center py-5 relative">
            <div className="cell large-6">
              <p className="text-oldLavender text-sm hidden x:flex">© 2023 UI8</p>
            </div> 
            <div className="cell large-6">
            <ul className="gap-x-8 m:gap-x-12 flex font-semibold justify-center x:justify-end">
                <li className='footer_icon'>
                  <a href="/">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="20" fill="#15131D"/>
                      <g className='path_icon' clipPath="url(#clip0_447_25714)">
                      <path d="M18.4467 18.6204C18.2079 18.64 17.9851 18.7488 17.8228 18.9251C17.6604 19.1013 17.5703 19.3322 17.5703 19.5718C17.5703 19.8115 17.6604 20.0423 17.8228 20.2186C17.9851 20.3949 18.2079 20.5036 18.4467 20.5233C18.5669 20.5189 18.685 20.4907 18.7942 20.4404C18.9035 20.3901 19.0017 20.3186 19.0832 20.2302C19.1647 20.1417 19.2278 20.038 19.269 19.925C19.3102 19.812 19.3286 19.692 19.3231 19.5718C19.329 19.4516 19.3109 19.3314 19.2699 19.2182C19.2289 19.105 19.1657 19.0011 19.0842 18.9126C19.0026 18.824 18.9042 18.7526 18.7948 18.7024C18.6853 18.6523 18.567 18.6244 18.4467 18.6204ZM21.5753 18.6204C21.3838 18.6047 21.192 18.6471 21.025 18.7421C20.8579 18.8371 20.7235 18.9803 20.6392 19.153C20.5549 19.3256 20.5246 19.5197 20.5524 19.7099C20.5802 19.9 20.6647 20.0773 20.7949 20.2186C20.9251 20.3599 21.0949 20.4587 21.2821 20.502C21.4693 20.5452 21.6652 20.531 21.8442 20.4611C22.0232 20.3912 22.1769 20.269 22.2853 20.1103C22.3937 19.9516 22.4517 19.764 22.4517 19.5718C22.4571 19.4519 22.4388 19.332 22.3978 19.2191C22.3567 19.1063 22.2938 19.0026 22.2125 18.9142C22.1312 18.8258 22.0333 18.7543 21.9243 18.7039C21.8153 18.6534 21.6974 18.6251 21.5774 18.6204H21.5753Z" fill="#757185"/>
                      <path d="M25.7429 11.4287H14.2572C14.0257 11.4293 13.7965 11.4755 13.5829 11.5646C13.3693 11.6538 13.1753 11.7842 13.0121 11.9484C12.8489 12.1126 12.7197 12.3073 12.6318 12.5215C12.544 12.7357 12.4992 12.9651 12.5 13.1966V24.783C12.4992 25.0145 12.544 25.2439 12.6318 25.458C12.7197 25.6722 12.8489 25.867 13.0121 26.0312C13.1753 26.1953 13.3693 26.3258 13.5829 26.4149C13.7965 26.5041 14.0257 26.5503 14.2572 26.5509H23.9772L23.5229 24.9651L24.62 25.983L25.6572 26.943L27.5 28.5716V13.1966C27.5009 12.9651 27.4561 12.7357 27.3682 12.5215C27.2803 12.3073 27.1511 12.1126 26.9879 11.9484C26.8247 11.7842 26.6307 11.6538 26.4171 11.5646C26.2035 11.4755 25.9744 11.4293 25.7429 11.4287V11.4287ZM22.4343 22.6251C22.4343 22.6251 22.1257 22.2566 21.8686 21.9287C22.4903 21.7834 23.0407 21.4229 23.4222 20.9109C23.1137 21.1161 22.7831 21.2858 22.4364 21.4166C22.0377 21.5868 21.6207 21.7104 21.1936 21.7851C20.4595 21.9203 19.7066 21.9174 18.9736 21.7766C18.5432 21.6924 18.1215 21.569 17.7136 21.408C17.3691 21.2745 17.0401 21.1042 16.7322 20.9001C17.099 21.4018 17.6295 21.7596 18.2322 21.9116C17.975 22.2373 17.6579 22.623 17.6579 22.623C17.1487 22.6367 16.644 22.5251 16.1881 22.2979C15.7322 22.0707 15.3392 21.7349 15.0436 21.3201C15.0707 19.5826 15.492 17.874 16.2757 16.323C16.9666 15.7804 17.809 15.4659 18.6864 15.423L18.7722 15.5259C17.9474 15.73 17.1777 16.1133 16.5179 16.6487C16.5179 16.6487 16.7064 16.5459 17.0236 16.4001C17.6404 16.1187 18.2978 15.9364 18.9714 15.8601C19.0194 15.8502 19.0682 15.8445 19.1172 15.843C19.6915 15.7682 20.2728 15.7624 20.8486 15.8259C21.754 15.9293 22.6305 16.2088 23.4286 16.6487C22.8022 16.1389 22.0748 15.7678 21.2943 15.5601L21.4143 15.423C22.2917 15.4659 23.1341 15.7804 23.825 16.323C24.6087 17.874 25.03 19.5826 25.0572 21.3201C24.7594 21.7349 24.3648 22.0706 23.9076 22.298C23.4505 22.5255 22.9447 22.6378 22.4343 22.6251Z" fill="#757185"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_447_25714">
                      <rect width="17.1429" height="17.1429" fill="white" transform="translate(11.4277 11.4287)"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li className='footer_icon'>
                  <a href="/">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="20" fill="#15131D"/>
                      <g className='path_icon' clipPath="url(#clip0_447_25719)">
                      <path d="M28.5714 14.6968C27.9286 14.9647 27.2857 15.179 26.5357 15.2326C27.2857 14.804 27.8214 14.1076 28.0893 13.304C27.3929 13.7326 26.6429 14.0004 25.8393 14.1611C25.1964 13.4647 24.2857 13.0361 23.3214 13.0361C21.3929 13.0361 19.7857 14.5897 19.7857 16.5718C19.7857 16.8397 19.8393 17.1076 19.8929 17.3754C16.9464 17.2147 14.375 15.8218 12.6071 13.679C12.2857 14.2147 12.125 14.804 12.125 15.4468C12.125 16.679 12.7679 17.7504 13.6786 18.3933C13.0893 18.3933 12.5536 18.2326 12.0714 17.9647V18.0183C12.0714 19.7326 13.3036 21.1254 14.9107 21.4468C14.5893 21.5004 14.3214 21.554 14 21.554C13.7857 21.554 13.5714 21.554 13.3571 21.5004C13.7857 22.8933 15.125 23.9111 16.625 23.9647C15.4464 24.929 13.8929 25.4647 12.2321 25.4647C11.9643 25.4647 11.6429 25.4647 11.375 25.4111C12.9821 26.3754 14.8571 26.9647 16.8393 26.9647C23.3214 26.9647 26.8571 21.6076 26.8571 16.9468C26.8571 16.7861 26.8571 16.6254 26.8571 16.5183C27.5 15.9826 28.0893 15.3933 28.5714 14.6968Z" fill="#757185"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_447_25719">
                      <rect width="17.1429" height="17.1429" fill="white" transform="translate(11.4277 11.4287)"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li className='footer_icon'>
                  <a href="/">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="20" fill="#15131D"/>
                      <g className='path_icon' clipPath="url(#clip0_447_25723)">
                      <path d="M19.9975 22.7147C21.4965 22.7147 22.7118 21.4995 22.7118 20.0004C22.7118 18.5014 21.4965 17.2861 19.9975 17.2861C18.4984 17.2861 17.2832 18.5014 17.2832 20.0004C17.2832 21.4995 18.4984 22.7147 19.9975 22.7147Z" fill="#757185"/>
                      <path d="M23.3905 11.8574H16.6048C13.9862 11.8574 11.8555 13.9888 11.8555 16.6081V23.3938C11.8555 26.0124 13.9869 28.1431 16.6061 28.1431H23.3919C26.0105 28.1431 28.1412 26.0117 28.1412 23.3925V16.6067C28.1412 13.9881 26.0098 11.8574 23.3905 11.8574ZM19.9983 24.0717C17.7529 24.0717 15.9269 22.2457 15.9269 20.0003C15.9269 17.7549 17.7529 15.9289 19.9983 15.9289C22.2437 15.9289 24.0698 17.7549 24.0698 20.0003C24.0698 22.2457 22.2437 24.0717 19.9983 24.0717ZM24.7483 15.9289C24.3738 15.9289 24.0698 15.6249 24.0698 15.2503C24.0698 14.8757 24.3738 14.5717 24.7483 14.5717C25.1229 14.5717 25.4269 14.8757 25.4269 15.2503C25.4269 15.6249 25.1229 15.9289 24.7483 15.9289Z" fill="#757185"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_447_25723">
                      <rect width="17.1429" height="17.1429" fill="white" transform="translate(11.4277 11.4287)"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li className='footer_icon'>
                  <a href="/">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="20" fill="#15131D"/>
                      <g className='path_icon' clipPath="url(#clip0_447_25733)">
                      <path d="M28.5357 13.2334C28.5219 13.1701 28.4916 13.1117 28.4478 13.0639C28.4041 13.0162 28.3484 12.981 28.2866 12.9618C28.0615 12.9174 27.8286 12.9341 27.6121 13.01C27.6121 13.01 12.5923 18.4084 11.7346 19.0063C11.5493 19.1348 11.4877 19.2093 11.4571 19.2977C11.3087 19.723 11.7705 19.9105 11.7705 19.9105L15.6416 21.1722C15.707 21.1835 15.7741 21.1794 15.8377 21.1604C16.7184 20.6043 24.6978 15.5654 25.1591 15.3961C25.2314 15.3741 25.285 15.3961 25.2732 15.4497C25.0846 16.0957 18.1937 22.2195 18.1557 22.257C18.1372 22.2721 18.1227 22.2916 18.1133 22.3136C18.104 22.3356 18.1002 22.3596 18.1021 22.3834L17.7421 26.1607C17.7421 26.1607 17.5911 27.3393 18.7675 26.1607C19.6016 25.3255 20.4019 24.6345 20.8032 24.2986C22.1344 25.2173 23.5669 26.2336 24.1846 26.7629C24.2883 26.8635 24.4111 26.9423 24.5459 26.9944C24.6806 27.0465 24.8245 27.0709 24.9689 27.0661C25.5582 27.0436 25.7189 26.3991 25.7189 26.3991C25.7189 26.3991 28.4553 15.3875 28.5475 13.9116C28.5561 13.767 28.5684 13.6743 28.5694 13.5752C28.5743 13.4602 28.563 13.3452 28.5357 13.2334Z" fill="#757185"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_447_25733">
                      <rect width="17.1429" height="17.1429" fill="white" transform="translate(11.4277 11.4287)"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li className='footer_icon'>
                  <a href="/">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="20" fill="#15131D"/>
                      <g className='path_icon' clipPath="url(#clip0_447_25737)">
                      <path d="M18.1033 28.0363V21.072H15.7129V17.8577H18.1033V15.613C18.1033 13.1679 19.6513 11.9648 21.8325 11.9648C22.8773 11.9648 23.7753 12.0426 24.037 12.0774V14.6327L22.5242 14.6334C21.3379 14.6334 21.07 15.1971 21.07 16.0243V17.8577H24.2843L23.2129 21.072H21.07V28.0363H18.1033Z" fill="#757185"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_447_25737">
                      <rect width="17.1429" height="17.1429" fill="white" transform="translate(11.4277 11.4287)"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </div> 
          </div>
        </div>
        <div className="pb-10">
        </div> 
      </footer>
    
  );
}

export default Footer; 


