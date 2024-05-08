import { useEffect, useRef } from "react";

const SocialMediaWidget = () => {
    const scriptRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.juicer.io/embed/pgd-skofljica/embed-code.js?per=5&truncate=100';
        script.async = true;
        script.defer = true;
        
        if (scriptRef.current) {
            scriptRef.current.appendChild(script);
        }

        return () => {
            // Cleanup: remove the script when component unmounts
            if (scriptRef.current && scriptRef.current.firstChild) {
                scriptRef.current.removeChild(scriptRef.current.firstChild);
            }
        };
    }, []);

    // Remove watermark
    useEffect(() => {
        function handleElementLoaded(element: Element) {

            if (element) {
                (element as HTMLElement).style.display = "none";
            }
        }
        function checkElement() {
            const element = document.querySelector('h1[class="referral"]');

            if (element) {
                handleElementLoaded(element);
                clearInterval(intervalId);
            }
        }

        if (document.readyState === 'complete') {
            checkElement();
        } else {
            // If the DOM is not yet loaded, add an event listener
            document.addEventListener('DOMContentLoaded', checkElement);
        }
        const intervalId = setInterval(checkElement, 100);

        return () => {
            document.removeEventListener('DOMContentLoaded', checkElement);
            clearInterval(intervalId);
        };
    }, []);

    return (
        //<div className="elfsight-app-2559c59f-8f5c-4de5-b360-70018ef9f66c data-elfsight-app-lazy"></div>
        <div id="juicer-pgd-skofljica" ref={scriptRef}></div>
    );
};

export default SocialMediaWidget;
