import { useEffect, useState } from "react";
import "./CouponPopupComponent.css"; 

const CouponPopupComponent = ({Code}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyDismissed = localStorage.getItem("coupon");
    const handleScroll = () => {
      if (!alreadyDismissed) {
        setVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    if (!alreadyDismissed) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closePopup = () => {
    setVisible(false);
    localStorage.setItem("coupon", "true");
  };

  const copyCode = () => {
    const code = Code;
    navigator.clipboard.writeText(code).then(() => {
      alert("Coupon code copied: " + code);
    });
  };

  if (!visible) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={closePopup}>×</span>
        <h2 className="fs-30 popup-title">🎉 Special Offer Just for You!</h2>
        <p className="fs-28 popup-desc">Enjoy <span>30% OFF</span> your first course with this exclusive coupon.</p>
        <div className="coupon-box">
          <span className="fs-20" id="coupon-code">LEARN30</span>
          <button onClick={copyCode} className="fs-20">Copy Code</button>
        </div>
      </div>
    </div>
  );
};

export default CouponPopupComponent;
