import React from 'react';
import "./FooterComponent.css";

const CookiePolicyPage = () => {
    return (
        <div className='footer-component-container'>
            <div className='footer-component-container-in'>
                <div className='text-center m-14'>
                    <h1>Cookie Policy for The Monkeys</h1>
                </div>
                <div className='m-8'>
                    <h2>What Are Cookies</h2>
                    <p>Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
                </div>

                <div className='m-8 '>
                    <h2>How We Use Cookies</h2>
                    <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>
                </div>
                <div className='m-8'>
                    <h2>Disabling Cookies</h2>
                    <p>You can prevent the setting of cookies by adjusting the settings on your browser. Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.</p>
                </div>
                <div className='m-8'>
                    <h2>The Cookies We Set</h2>
                    <ul className='list-disc ml-12'>
                        <li>Account related cookies: If you create an account with us then we will use cookies for the management of the signup process and general administration.</li>
                        <li>Email newsletters related cookies: This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.</li>
                    </ul>
                </div>
                <div className='m-8'>
                    <h2>More Information</h2>
                    <p>If you are looking for more information then you can contact us through one of our preferred contact methods.</p>
                </div>
            </div>
        </div>
    );
}

export default CookiePolicyPage;
