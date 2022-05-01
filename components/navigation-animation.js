import React, {useState} from 'react';

const NavigationAnimation = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <div
            className={mobileNavOpen ? 'mobile-nav mobile-nav-open' : 'mobile-nav mobile-nav-closed'}
            onClick={() => {
                if (!mobileNavOpen) {
                    document.getElementsByClassName("container-closed")[0].classList.add('mobile-nav-open');
                    document.getElementsByClassName("container-closed")[0].classList.remove('mobile-nav-closed');
                    document.getElementsByClassName("container-opened")[0].classList.add('mobile-nav-open');
                    document.getElementsByClassName("container-opened")[0].classList.remove('mobile-nav-closed');
                    document.getElementsByClassName("logo")[0].classList.add('mobile-nav-open');
                    document.getElementsByClassName("logo")[0].classList.remove('mobile-nav-closed');
                    document.getElementsByClassName("container-closed")[0].style.display = "none";
                    document.getElementsByClassName("container-opened")[0].style.display = "flex";
                    setTimeout(function () {
                        document.getElementsByClassName("container-opened")[0].classList.add('visible');
                        document.getElementsByClassName("container-closed")[0].classList.add('visibly-hidden');
                        document.getElementsByClassName("container-opened")[0].classList.remove('visibly-hidden');
                        document.getElementsByClassName("container-closed")[0].classList.remove('visible');
                    }, 20);
                    console.log("Opening mobile nav");
                    console.log(process.env.GREETING)
                    console.log(process.env.NEXT_PUBLIC_GREETING)
                    setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
                } else {
                    document.getElementsByClassName("container-closed")[0].classList.remove('mobile-nav-open');
                    document.getElementsByClassName("container-closed")[0].classList.add('mobile-nav-closed');
                    document.getElementsByClassName("container-opened")[0].classList.remove('mobile-nav-open');
                    document.getElementsByClassName("container-opened")[0].classList.add('mobile-nav-closed');
                    document.getElementsByClassName("logo")[0].classList.remove('mobile-nav-open');
                    document.getElementsByClassName("logo")[0].classList.add('mobile-nav-closed');
                    if (document.querySelector(".container-closed.block")) {
                        document.getElementsByClassName("container-closed")[0].style.display = "block";
                    } else {
                        document.getElementsByClassName("container-closed")[0].style.display = "flex";
                    }
                    document.getElementsByClassName("container-opened")[0].style.display = "none";
                    setTimeout(function () {
                        document.getElementsByClassName("container-opened")[0].classList.add('visibly-hidden');
                        document.getElementsByClassName("container-closed")[0].classList.add('visible');
                        document.getElementsByClassName("container-opened")[0].classList.remove('visible');
                        document.getElementsByClassName("container-closed")[0].classList.remove('visibly-hidden');
                    }, 20);
                    console.log("Closing mobile nav");
                    setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
                }
                
            }}
        >
            <div className="bar-one"></div>
            <div className="bar-two"></div>
            <div className="bar-three"></div>
        </div>
    )
}

export default NavigationAnimation