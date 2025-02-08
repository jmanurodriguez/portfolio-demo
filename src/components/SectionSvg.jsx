import PropTypes from 'prop-types';

const SectionSvg = ({ crossesOffset }) => {
  return (
    <div className="absolute inset-0 w-full h-32 pointer-events-none">
      <svg
        className={`absolute left-0 right-0 w-full h-full ${crossesOffset}`}
        viewBox="0 0 1728 522"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M1728 0H0V522L864 379.8L1728 522V0Z"
          fill="url(#gradient)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="gradient"
            x1="864"
            y1="0"
            x2="864"
            y2="522"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1A1A1A" />
            <stop offset="1" stopColor="rgba(128,0,128,0.2)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

SectionSvg.propTypes = {
  crossesOffset: PropTypes.string,
};

export default SectionSvg;

