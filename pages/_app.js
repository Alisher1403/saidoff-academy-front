import "@/styles/globals.css";
import "swiper/css";
import { appWithTranslation } from "next-i18next";
import React, { useEffect } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Ensure window.fbq exists before using it to prevent errors
        if (window.fbq) {
            window.fbq('init', '1176435866976776'); // Replace with your Pixel ID
            window.fbq('track', 'PageView');
        }
    }, []);

    return (
        <>
            {/* Meta Pixel Code */}
            <Script
                id="facebook-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '1176435866976776');
                    fbq('track', 'PageView');
                    `,
                }}
            />
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=1176435866976776&ev=PageView&noscript=1"
                    alt="facebook-pixel"

                />
            </noscript>
            {/* End Meta Pixel Coded */}
            <Component {...pageProps} />
        </>
    );
}

export default appWithTranslation(MyApp);