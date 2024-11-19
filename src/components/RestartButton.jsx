function RestartButton({ handleRestart }) {
  return (
    <button
      onClick={handleRestart}
      className="border-none bg-PurplishBlue text-white px-4 my-4 mx-4 rounded-[0.25rem] text-sm lg:my-3 lg:mx-0 lg:px-5 lg:text-base min-w-[95px]"
    >
      Restart
    </button>
  );
}

export default RestartButton;
