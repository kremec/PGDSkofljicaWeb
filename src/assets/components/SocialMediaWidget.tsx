import { useEffect, useRef } from "react";

const SocialMediaWidget = () => {
    const scriptRef = useRef<HTMLDivElement>(null);

    // Load the widget script
    useEffect(() => {
        const loadScript = () => {
            const script = document.createElement('script');
            script.src = 'https://widget.taggbox.com/embed-lite.min.js';
            script.async = true;
            script.defer = true;

            if (scriptRef.current) {
                scriptRef.current.appendChild(script);
            }
        };

        if (document.readyState === 'complete') {
            loadScript();
        } else {
            window.addEventListener('load', loadScript);
        }

        return () => {
            window.removeEventListener('load', loadScript);
        };
    }, []);

    // Remove watermark
    useEffect(() => {
        const removeWatermark = () => {
            const container = document.querySelector('.tb_theme_container');
            if (container) {
                const children = container.children;
                for (let i = 0; i < children.length; i++) {
                    if (!children[i].classList.length) {
                        container.removeChild(children[i]);
                        break;
                    }
                }
            }
        };

        const intervalId = setInterval(removeWatermark, 50);

        if (document.readyState === 'complete') {
            removeWatermark();
        } else {
            document.addEventListener('DOMContentLoaded', removeWatermark);
        }

        return () => {
            clearInterval(intervalId);
            document.removeEventListener('DOMContentLoaded', removeWatermark);
        };
    }, []);

    return (
        <div ref={scriptRef} className="taggbox" style={{ width: "100%", height: "100%" }} data-widget-id="155285" data-tags="false"></div>
    );
};

export default SocialMediaWidget;