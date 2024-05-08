const SocialMediaWidget = () => {
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = 'https://static.elfsight.com/platform/platform.js';
    //     script.setAttribute('data-use-service-core', '');
    //     script.async = true;
    //     document.body.appendChild(script);

    //     return () => {
    //         // Cleanup: remove the script when component unmounts
    //         document.body.removeChild(script);
    //     };
    // }, []);

    // Remove watermark
    // useEffect(() => {
    //     function handleElementLoaded(element: Element) {

    //         if (element) {
    //             (element as HTMLElement).style.display = "none";
    //         }
    //     }
    //     function checkElement() {
    //         const elementWww = document.querySelector('a[href="https://elfsight.com/social-feed-widget/?utm_source=websites&utm_medium=clients&utm_content=social-feed&utm_term=www.pgd-skofljica.si&utm_campaign=free-widget"]');
    //         const elementNoWww = document.querySelector('a[href="https://elfsight.com/social-feed-widget/?utm_source=websites&utm_medium=clients&utm_content=social-feed&utm_term=pgd-skofljica.si&utm_campaign=free-widget"]');

    //         if (elementWww) {
    //             handleElementLoaded(elementWww);
    //             clearInterval(intervalId);
    //         }
    //         if (elementNoWww) {
    //             handleElementLoaded(elementNoWww);
    //             clearInterval(intervalId);
    //         }
    //     }

    //     if (document.readyState === 'complete') {
    //         checkElement();
    //     } else {
    //         // If the DOM is not yet loaded, add an event listener
    //         document.addEventListener('DOMContentLoaded', checkElement);
    //     }
    //     const intervalId = setInterval(checkElement, 100);

    //     return () => {
    //         document.removeEventListener('DOMContentLoaded', checkElement);
    //         clearInterval(intervalId);
    //     };
    // }, []);

    return (
        //<div className="elfsight-app-2559c59f-8f5c-4de5-b360-70018ef9f66c data-elfsight-app-lazy"></div>
        <>
            <script src="//assets.juicer.io/embed.js?per=15?truncate=500" type="text/javascript"></script>
            <link href="//assets.juicer.io/embed.css" media="all" rel="stylesheet" type="text/css" />
            <ul className="juicer-feed" data-feed-id="pgd-skofljica"></ul>
        </>
    );
};

export default SocialMediaWidget;
