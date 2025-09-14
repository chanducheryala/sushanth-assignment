const Switch = ({ isOn, onToggle, color = 'green' }) => {
    const isGreen = color === 'green';
    
    return (
      <button
        type="button"
        onClick={onToggle}
        className={`
          relative w-[60px] h-8 rounded-2xl border-2 shadow
          transition-all duration-200 ease-in-out
          bg-transparent
          border-gray-300
        `}
      >
        <span
          aria-hidden="true"
          className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-3 rounded-full bg-gray-200"
        />
        <span
          className={`
            absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-[3px] border
            transition-all duration-200 ease-in-out
            ${isOn ? 'left-[32px]' : 'left-[8px]'}
            ${isGreen ? 'border-green-500' : 'border-red-500'}
            inline-flex items-center justify-center bg-white
          `}
        >
          <span className={`${isGreen ? 'bg-green-500' : 'bg-red-500'} w-2 h-2 rounded-full`} />
        </span>
      </button>
    );
  };

export default Switch;
  