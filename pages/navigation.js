import React, {useState} from 'react';

const Navigation = () => {
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
                        document.getElementsByClassName("container-opened")[0].style.opacity = "1";
                        document.getElementsByClassName("container-closed")[0].style.opacity = "0";
                    }, 40);
                    console.log("Hello");
                    setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
                } else {
                    document.getElementsByClassName("container-closed")[0].classList.remove('mobile-nav-open');
                    document.getElementsByClassName("container-closed")[0].classList.add('mobile-nav-closed');
                    document.getElementsByClassName("container-opened")[0].classList.remove('mobile-nav-open');
                    document.getElementsByClassName("container-opened")[0].classList.add('mobile-nav-closed');
                    document.getElementsByClassName("logo")[0].classList.remove('mobile-nav-open');
                    document.getElementsByClassName("logo")[0].classList.add('mobile-nav-closed');
                    document.getElementsByClassName("container-closed")[0].style.display = "flex";
                    document.getElementsByClassName("container-opened")[0].style.display = "none";
                    setTimeout(function () {
                        document.getElementsByClassName("container-opened")[0].style.opacity = "0";
                        document.getElementsByClassName("container-closed")[0].style.opacity = "1";
                    }, 40);
                    console.log("Goodbye");
                    setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
                }
                
            }}
        >
            <div className = "bar-one"></div>
            <div className="bar-two"></div>
            <div className="bar-three"></div>
        </div>
    )
}

export default Navigation